import os
from PIL import Image

def compress_images(directory, max_size=800):
    total_old_size = 0
    total_new_size = 0
    file_count = 0
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            lower_name = file.lower()
            if lower_name.endswith(('.png', '.jpg', '.jpeg')):
                filepath = os.path.join(root, file)
                try:
                    old_size = os.path.getsize(filepath)
                    total_old_size += old_size
                    file_count += 1
                    
                    with Image.open(filepath) as img:
                        width, height = img.size
                        
                        # Calculate new size maintaining aspect ratio
                        if width > max_size or height > max_size:
                            if width > height:
                                new_width = max_size
                                new_height = int(height * (max_size / width))
                            else:
                                new_height = max_size
                                new_width = int(width * (max_size / height))
                            
                            # Preserve transparency for PNGs
                            if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                                img_resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                            else:
                                img_resized = img.convert('RGB').resize((new_width, new_height), Image.Resampling.LANCZOS)
                        else:
                            img_resized = img
                        
                        # Save back
                        if lower_name.endswith('.png'):
                            # If image has a palette (P mode), try to keep it, otherwise save as RGBA/RGB
                            img_resized.save(filepath, 'PNG', optimize=True)
                        else:
                            img_resized.save(filepath, 'JPEG', quality=85, optimize=True)
                            
                    new_size = os.path.getsize(filepath)
                    total_new_size += new_size
                    
                    reduction = (old_size - new_size) / old_size * 100
                    safe_name = file.encode('ascii', 'replace').decode('ascii')
                    print(f"Compressed {safe_name}: {old_size/1024/1024:.2f}MB -> {new_size/1024:.1f}KB ({reduction:.1f}% reduction)")
                except Exception as e:
                    safe_name = file.encode('ascii', 'replace').decode('ascii')
                    print(f"Error compressing {safe_name}: {e}")
                    
    if file_count > 0:
        print("\n--- Summary ---")
        print(f"Total files compressed: {file_count}")
        print(f"Total original size: {total_old_size/1024/1024/1024:.2f} GB")
        print(f"Total compressed size: {total_new_size/1024/1024:.2f} MB")
        saved_gb = (total_old_size - total_new_size)/1024/1024/1024
        print(f"Saved: {saved_gb:.2f} GB ({(total_old_size - total_new_size)/total_old_size*100:.1f}% reduction)")

if __name__ == "__main__":
    target_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public", "images"))
    print(f"Starting image compression in: {target_dir}")
    compress_images(target_dir)
