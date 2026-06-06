import os
import subprocess
import time

def run_cmd(cmd):
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    return result.returncode, result.stdout, result.stderr

def push_in_chunks(chunk_size_mb=1.5):
    # 1. Reset back to origin/main to start fresh
    print("Resetting local branch to origin/main...")
    code, out, err = run_cmd("git reset --mixed origin/main")
    if code != 0:
        print(f"Error resetting: {err}")
        return
        
    # 2. Collect all unstaged files under public/images
    images_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public", "images"))
    print(f"Scanning for images in: {images_dir}")
    
    all_files = []
    for root, dirs, files in os.walk(images_dir):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg', '.txt')):
                filepath = os.path.join(root, file)
                all_files.append(filepath)
                
    # Also add the logo
    logo_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public", "rhea-logo.png"))
    if os.path.exists(logo_path):
        all_files.append(logo_path)
        
    print(f"Found {len(all_files)} files to push.")
    
    # 3. Group files into chunks of ~1.5MB
    current_chunk = []
    current_chunk_size = 0
    chunks = []
    
    for filepath in all_files:
        file_size = os.path.getsize(filepath)
        current_chunk.append(filepath)
        current_chunk_size += file_size
        
        if current_chunk_size >= chunk_size_mb * 1024 * 1024:
            chunks.append(current_chunk)
            current_chunk = []
            current_chunk_size = 0
            
    if current_chunk:
        chunks.append(current_chunk)
        
    print(f"Split files into {len(chunks)} chunks.")
    
    # 4. Commit and push each chunk
    for idx, chunk in enumerate(chunks, 1):
        print(f"\n--- Processing Chunk {idx}/{len(chunks)} ({len(chunk)} files) ---")
        
        # Add files in this chunk
        for filepath in chunk:
            rel_path = os.path.relpath(filepath, os.path.join(os.path.dirname(__file__), ".."))
            code, out, err = run_cmd(f'git add "{rel_path}"')
            if code != 0:
                print(f"Error adding {rel_path}: {err}")
                
        # Commit chunk
        commit_msg = f"assets: push optimized images chunk {idx} of {len(chunks)}"
        code, out, err = run_cmd(f'git commit -m "{commit_msg}"')
        if code != 0:
            print(f"Error committing: {err}")
            continue
            
        # Push chunk with retries
        success = False
        for attempt in range(1, 4):
            print(f"Pushing chunk {idx} (attempt {attempt})...")
            code, out, err = run_cmd("git push origin main")
            if code == 0:
                print(f"Successfully pushed chunk {idx}!")
                success = True
                break
            else:
                print(f"Push attempt {attempt} failed: {err.strip() or out.strip()}")
                time.sleep(5)
                
        if not success:
            print(f"FATAL: Failed to push chunk {idx} after 3 attempts. Aborting.")
            break
            
        time.sleep(2) # Brief cooling period between pushes

if __name__ == "__main__":
    push_in_chunks()
