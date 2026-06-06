// Ortak özelleştirme şablonları

// Çay özelleştirmeleri
const teaCustomizations = [
  {
    id: "strength",
    name: "Demleme",
    type: "single",
    required: true,
    options: [
      { id: "light", label: "Açık", price: 0 },
      { id: "normal", label: "Normal", price: 0 },
      { id: "strong", label: "Demli", price: 0 }
    ]
  }
];

// Türk kahvesi özelleştirmeleri
const turkishCoffeeCustomizations = [
  {
    id: "sugar",
    name: "Şeker",
    type: "single",
    required: true,
    options: [
      { id: "no-sugar", label: "Sade", price: 0 },
      { id: "little", label: "Az Şekerli", price: 0 },
      { id: "medium", label: "Orta Şekerli", price: 0 },
      { id: "sweet", label: "Şekerli", price: 0 }
    ]
  }
];

// Süt özelleştirmeleri
const milkCustomizations = [
  {
    id: "type",
    name: "Süt Türü",
    type: "single",
    required: false,
    options: [
      { id: "regular", label: "Normal Süt", price: 0 },
      { id: "oat", label: "Yulaf Sütü", price: 15 },
      { id: "almond", label: "Badem Sütü", price: 15 },
      { id: "lactose-free", label: "Laktozsuz", price: 10 }
    ]
  }
];

// Sıcak/Soğuk seçeneği
const temperatureCustomizations = [
  {
    id: "temperature",
    name: "Servis",
    type: "single",
    required: true,
    options: [
      { id: "hot", label: "Sıcak", price: 0 },
      { id: "cold", label: "Soğuk", price: 0 }
    ]
  }
];

// Latte özelleştirmeleri (Sıcak/Soğuk + Ekstra Shot)
const latteCustomizations = [
  {
    id: "temperature",
    name: "Servis",
    type: "single",
    required: true,
    options: [
      { id: "hot", label: "Sıcak", price: 0 },
      { id: "cold", label: "Soğuk", price: 0 }
    ]
  },
  {
    id: "extras",
    name: "Ekstralar",
    type: "multiple",
    required: false,
    options: [
      { id: "extra-shot", label: "Ekstra Shot", price: 40 }
    ]
  }
];

// Espresso ekstra shot seçeneği
const espressoExtraCustomizations = [
  {
    id: "extras",
    name: "Ekstralar",
    type: "multiple",
    required: false,
    options: [
      { id: "extra-shot", label: "Ekstra Shot", price: 40 }
    ]
  }
];

// Limonata renk seçeneği
const lemonadeCustomizations = [
  {
    id: "color",
    name: "Renk",
    type: "single",
    required: true,
    options: [
      { id: "classic", label: "Sade", price: 0 },
      { id: "blue", label: "Mavi Kelebek Çayı ile", price: 0 },
      { id: "red", label: "Hibiscus ile", price: 0 }
    ]
  }
];

// Buz seçeneği (basit)
const iceCustomizations = [
  {
    id: "ice",
    name: "Buz",
    type: "single",
    required: true,
    options: [
      { id: "with-ice", label: "Buzlu", price: 0 },
      { id: "no-ice", label: "Buzsuz", price: 0 }
    ]
  }
];

const coldDrinkCustomizations = [
  {
    id: "ice",
    name: "Buz",
    type: "single",
    required: true,
    options: [
      { id: "with-ice", label: "Buzlu", price: 0 },
      { id: "no-ice", label: "Buzsuz", price: 0 }
    ]
  }
];

const bubbleTeaCustomizations = [
  {
    id: "sugar",
    name: "Şeker Oranı",
    type: "single",
    required: true,
    options: [
      { id: "0", label: "Şekersiz", price: 0 },
      { id: "30", label: "%30", price: 0 },
      { id: "50", label: "%50", price: 0 },
      { id: "70", label: "%70", price: 0 },
      { id: "100", label: "%100", price: 0 }
    ]
  },
  {
    id: "topping",
    name: "Top (Popping Boba)",
    type: "multiple",
    required: false,
    options: [
      { id: "strawberry", label: "Çilek Topları", price: 0 },
      { id: "kiwi", label: "Kivi Topları", price: 0 },
      { id: "passionfruit", label: "Çarkıfelek Topları", price: 0 },
      { id: "tropical", label: "Tropikal Toplar", price: 0 }
    ]
  }
];

// Pizza Dinamik Boyut Özelleştirmesi
const getPizzaCustomizations = (largePriceDiff) => [
  {
    id: "size",
    name: "Boyut",
    type: "single",
    required: true,
    options: [
      { id: "medium", label: "Orta", price: 0 },
      { id: "large", label: "Büyük", price: largePriceDiff }
    ]
  },
  {
    id: "crust",
    name: "Hamur",
    type: "single",
    required: false,
    options: [
      { id: "thin", label: "İnce Hamur", price: 0 },
      { id: "thick", label: "Kalın Hamur", price: 0 },
      { id: "stuffed", label: "Dolgulu Kenar", price: 20 }
    ]
  },
  {
    id: "extras",
    name: "Ekstra Malzeme",
    type: "multiple",
    required: false,
    options: [
      { id: "cheese", label: "Ekstra Peynir", price: 15 },
      { id: "olive", label: "Zeytin", price: 10 },
      { id: "mushroom", label: "Mantar", price: 10 },
      { id: "corn", label: "Mısır", price: 10 }
    ]
  }
];

const saladCustomizations = [
  {
    id: "dressing",
    name: "Sos",
    type: "single",
    required: false,
    options: [
      { id: "caesar", label: "Caesar Sos", price: 0 },
      { id: "balsamic", label: "Balsamik", price: 0 },
      { id: "vinegar", label: "Vinegar Sos", price: 0 },
      { id: "olive", label: "Zeytinyağı-Limon", price: 0 }
    ]
  },
  {
    id: "extras",
    name: "Ekstralar",
    type: "multiple",
    required: false,
    options: [
      { id: "chicken", label: "Tavuk Ekle", price: 25 },
      { id: "avocado", label: "Avokado Ekle", price: 20 },
      { id: "egg", label: "Yumurta Ekle", price: 10 }
    ]
  }
];

const dessertCustomizations = [
  {
    id: "extras",
    name: "Ekstralar",
    type: "multiple",
    required: false,
    options: [
      { id: "chocolate", label: "Ekstra Belçika Çikolatası", price: 100 },
      { id: "icecream", label: "Dondurma Ekle", price: 20 }
    ]
  }
];

const snackCustomizations = [
  {
    id: "extras",
    name: "Ekstralar",
    type: "multiple",
    required: false,
    options: [
      { id: "butter", label: "Ekstra Tereyağ", price: 5 },
      { id: "jam", label: "Reçel", price: 10 },
      { id: "honey", label: "Bal", price: 10 }
    ]
  }
];

const shakeCustomizations = [
  {
    id: "extras",
    name: "Ekstralar",
    type: "multiple",
    required: false,
    options: [
      { id: "whipped", label: "Ekstra Krema", price: 10 },
      { id: "oreo", label: "Oreo Parçaları", price: 15 },
      { id: "caramel", label: "Karamel Sos", price: 10 }
    ]
  }
];

export const mainCategories = [
  {
    id: "coffee",
    name: "COFFEE",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=600&fit=crop",
    placeholder: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=600&fit=crop"
  },
  {
    id: "food",
    name: "FOOD",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=600&fit=crop",
    placeholder: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=600&fit=crop"
  },
  {
    id: "drinks",
    name: "DRINKS",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=600&fit=crop",
    placeholder: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=600&fit=crop"
  }
];

export const subCategories = {
  coffee: [
    {
      id: "hot-drinks",
      name: "HOT DRINKS",
      subtitle: "SICAK İÇECEKLER",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&h=400&fit=crop",
    placeholder: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&h=400&fit=crop",
      items: [
        { id: 1, name: "Çay", description: "Geleneksel çay, özenle seçilmiş ve öğütülmüş çay yapraklarından hazırlanır. Her bardak, doğadan gelen tazelik ve lezzet sunar.", price: 60, image: "/images/menu/cay-bardagi.webp", placeholder: "https://images.unsplash.com/photo-1624457245795-4b0eac9305b2?w=400&h=400&fit=crop", customizations: teaCustomizations },
        { id: 2, name: "Fincan Çay", description: "Geleneksel çay, özenle seçilmiş ve öğütülmüş çay yapraklarından hazırlanır. Her bardak, doğadan gelen tazelik ve lezzet sunar.", price: 80, image: "/images/menu 2/bergamotlu cay.webp", placeholder: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=400&fit=crop", customizations: teaCustomizations },
        { id: 3, name: "Rhea Çay", description: "Geleneksel çay, özenle seçilmiş ve öğütülmüş çay yapraklarından hazırlanır. Her bardak, doğadan gelen tazelik ve lezzet sunar.", price: 80, image: "/images/menu 2/bergamotlu cay.webp", placeholder: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop", customizations: teaCustomizations },
        { id: 4, name: "Türk Kahvesi", description: "Bir fincan türk kahvesi, sadece bir içecek değil, aynı zamanda bir kültür ve mirastır. Her bir yudumda tarih, kültür ve tatlı anılarla dolu bir yolculuğa çıkmaya hazır olun.", price: 100, image: "/images/menu 2/turk kahvesi.webp", placeholder: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop", customizations: turkishCoffeeCustomizations },
        { id: 6, name: "Süt", description: "Sıcak taze süt", price: 80, image: "/images/menu 2/sut.webp", placeholder: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop", customizations: milkCustomizations },
        { id: 7, name: "Filtre Kahve", description: "Bu özel filtre kahve, Honduras'ın verimli topraklarından gelen özel çekirdeklerle hazırlanmıştır. Her yudumda sizi bir tat macerasına çıkarırken, lezzetin en saf halini sunar.", price: 110, image: "/images/menu 2/filtre kahve.webp", placeholder: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop", customizations: milkCustomizations },
        { id: 8, name: "Nane Limon", description: "Sıcak ve şifalı taze nane limon çayı", price: 140, image: "/images/menu 2/bitki cayi.webp", placeholder: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=400&h=400&fit=crop", customizations: teaCustomizations },
        { id: 9, name: "Ihlamur", description: "Rahatlatıcı ve dinlendirici sıcak ıhlamur çayı", price: 140, image: "/images/menu 2/bitki cayi.webp", placeholder: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=400&h=400&fit=crop", customizations: teaCustomizations },
        { id: 10, name: "Yasemin Çayı", description: "Tazelik ve lezzet arayanların tercihi olan bitki çaylarını sunuyoruz. Her biri özenle seçilmiş ve doğadan toplanmış taze bitkilerle hazırlanan çaylarımız, doğanın bütün enerjisini sizin fincanınıza taşıyor.", price: 140, image: "/images/menu 2/bitki cayi.webp", placeholder: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&h=400&fit=crop", customizations: teaCustomizations },
        { id: 11, name: "Papatya Çayı", description: "Tazelik ve lezzet arayanların tercihi olan bitki çaylarını sunuyoruz. Her biri özenle seçilmiş ve doğadan toplanmış taze bitkilerle hazırlanan çaylarımız, doğanın bütün enerjisini sizin fincanınıza taşıyor.", price: 140, image: "/images/menu 2/bitki cayi.webp", placeholder: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&h=400&fit=crop", customizations: teaCustomizations },
        { id: 12, name: "Kış Çayı", description: "Tazelik ve lezzet arayanların tercihi olan bitki çaylarını sunuyoruz. Her biri özenle seçilmiş ve doğadan toplanmış taze bitkilerle hazırlanan çaylarımız, doğanın bütün enerjisini sizin fincanınıza taşıyor.", price: 140, image: "/images/menu 2/bitki cayi.webp", placeholder: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop", customizations: teaCustomizations },
        { id: 13, name: "Ada Çayı", description: "Tazelik ve lezzet arayanların tercihi olan bitki çaylarını sunuyoruz. Her biri özenle seçilmiş ve doğadan toplanmış taze bitkilerle hazırlanan çaylarımız, doğanın bütün enerjisini sizin fincanınıza taşıyor.", price: 140, image: "/images/menu 2/bitki cayi.webp", placeholder: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=400&h=400&fit=crop", customizations: teaCustomizations },
        { id: 14, name: "Hibiscus Çayı", description: "Tazelik ve lezzet arayanların tercihi olan bitki çaylarını sunuyoruz. Her biri özenle seçilmiş ve doğadan toplanmış taze bitkilerle hazırlanan çaylarımız, doğanın bütün enerjisini sizin fincanınıza taşıyor.", price: 140, image: "/images/menu 2/bitki cayi.webp", placeholder: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=400&h=400&fit=crop", customizations: teaCustomizations },
        { id: 270, name: "Double Türk Kahvesi", description: "Daha yoğun kahve lezzeti arayanlar için double Türk kahvesi.", price: 70, image: "/images/menu 2/double turk kahvesi.webp", placeholder: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop", customizations: turkishCoffeeCustomizations },
        { id: 271, name: "Sahlep", description: "Kış aylarının vazgeçilmezi sıcak ve tarçınlı geleneksel sahlep.", price: 70, image: "/images/menu 2/sahlep.webp", placeholder: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop", customizations: [] },
        { id: 272, name: "Bellaggio Çikolatası", description: "Yoğun Belçika çikolatası ile hazırlanan sıcak özel çikolata.", price: 75, image: "/images/menu 2/Bellagio.webp", placeholder: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop", customizations: [] }
      ]
    },
    {
      id: "espresso-coffees",
      name: "ESPRESSO COFFEES",
      subtitle: "ESPRESSO BAZLI KAHVELER",
      image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=400&fit=crop",
    placeholder: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=400&fit=crop",
      items: [
        { id: 40, name: "Cold Brew", description: "Bu özel içecek, yavaş demlenmiş kahve çekirdeklerinden hazırlanır ve uzun süre soğuk suda demlenerek özel bir lezzet elde edilir. Her yudumda size ferahlayıcı ve diri bir deneyim sunar.", price: 190, image: "/images/menu 3/cold brew.webp", placeholder: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop", customizations: [] },
        { id: 41, name: "Latte", description: "Özenle seçilmiş ve özenle kavrulmuş kahve çekirdekleriyle hazırlanır. Her bir yudumda, kaliteli kahvenin eşsiz aroması ve kremsi dokusuyla sizi cezbeder.", price: 150, image: "/images/menu 2/Latte.webp", placeholder: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=400&fit=crop", customizations: latteCustomizations },
        { id: 42, name: "Cappucino", description: "İtalyan kahve kültürünün vazgeçilmez lezzeti, özenle seçilmiş ve özenle kavrulmuş kahve çekirdekleriyle hazırlanır. Her bir yudumda, kaliteli kahvenin yoğun aroması ve süt köpüğünün yumuşaklığı sizi sarar.", price: 150, image: "/images/menu 2/Cappucino.webp", placeholder: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop", customizations: espressoExtraCustomizations },
        { id: 43, name: "Americano", description: "Basit ve güçlü bir kahve deneyimi arayanlar için ideal tercih! Özenle seçilmiş ve özenle kavrulmuş kahve çekirdekleriyle hazırlanır. Her bir yudumda, yoğun kahve aroması ve ferahlayıcı bir lezzet sizi bekler.", price: 130, image: "", placeholder: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=400&h=400&fit=crop", customizations: espressoExtraCustomizations },
        { id: 44, name: "Cortado", description: "Dengeli ve lezzetli kahve, sütün eşit oranda karşılaştırıldığı bir ispanyol kahve hazırlama yöntemiyle hazırlanır. Her bir yudumda, kahvenin güçlü aroması ve sütün yumuşaklığı bir araya gelir.", price: 160, image: "/images/menu 2/Latte.webp", placeholder: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=400&fit=crop", customizations: espressoExtraCustomizations },
        { id: 130, name: "Flat White", description: "Yumuşak ve lezzetli kahve, sütün eşit oranda karşılaştırıldığı bir İspanyol kahve hazırlama yöntemiyle hazırlanır. Her bir yudumda, kahvenin güçlü aroması ve sütün yumuşaklığı bir araya gelir.", price: 160, image: "/images/menu 2/Latte.webp", placeholder: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=400&h=400&fit=crop", customizations: espressoExtraCustomizations }
      ]
    },
    {
      id: "rhea-lattes",
      name: "RHEA LATTES",
      subtitle: "SPESİYAL LATTELER",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=400&fit=crop",
    placeholder: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=400&fit=crop",
      items: [
        { id: 35, name: "Rhea Toffifee Latte", description: "Fındık, karamel ve çikolatanın enfes uyumu, kremamsı sütle birleşerek sıcak ve soğuk seçeneklerle sunuluyor. Sıcak versiyonu, soğuk günlerde tatlı bir keyif sunarken, soğuk versiyonu ferahlatıcı bir tatlı deneyimi sağlar. Her iki şekilde de, çikolata ve karamelin yumuşak lezzetiyle kendinizi şımartın.", price: 200, image: "/images/menu 2/Latte.webp", placeholder: "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=400&h=400&fit=crop", customizations: temperatureCustomizations },
        { id: 36, name: "Rhea Gingerbread Latte", description: "Tarçın, zencefil ve şeker kamışının sıcak aroması, kremalı sütle buluşarak sıcak ve soğuk seçeneklerle sunuluyor. Sıcak versiyonu, kışın huzurlu bir sıcaklık sunarken, soğuk versiyonu baharatlı bir tazelik sağlar. Her iki şekilde de, geleneksel zencefilli kurabiye tadı ile tatlı bir kaçamak yaratır.", price: 200, image: "/images/menu 2/Latte.webp", placeholder: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=400&fit=crop", customizations: temperatureCustomizations },
        { id: 37, name: "Rhea Speculoos Latte", description: "Bisküvi tadındaki Speculoos'un sıcak ve baharatlı aroması, kremalı sütle birleşerek sıcak ve soğuk seçeneklerle sunuluyor. Sıcak versiyonu, soğuk günlerde rahatlatıcı bir lezzet sunarken, soğuk versiyonu ferahlatıcı bir tatlı deneyimi sağlar. Her iki şekilde de, bisküvi ve baharatların mükemmel uyumu damakta kalıcı bir tat bırakır.", price: 200, image: "/images/menu 2/Latte.webp", placeholder: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=400&fit=crop", customizations: temperatureCustomizations },
        { id: 38, name: "Hot Monkey Latte", description: "Bu eşsiz latte, taze muzun tatlılığı ve çikolatanın yoğunluğunu harmanlayarak baş döndürücü bir lezzet sunuyor.", price: 190, image: "/images/menu 2/Latte.webp", placeholder: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=400&fit=crop", customizations: temperatureCustomizations },
        { id: 39, name: "Toffie Nut Latte", description: "Bu özel latte, karamel tadında toffie ve doyurucu fındık aromalarını bir araya getirerek sizi enfes bir lezzet yolculuğuna çıkarıyor.", price: 190, image: "/images/menu 2/Latte.webp", placeholder: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=400&fit=crop", customizations: temperatureCustomizations },
        { id: 117, name: "Coco Star Latte", description: "Bu muhteşem latte, egzotik hindistan cevizi ve leziz çikolata aromalarının mükemmel uyumunu sunarak sizi tatlı bir lezzet yolculuğuna çıkarıyor.", price: 190, image: "/images/menu 2/Latte.webp", placeholder: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=400&fit=crop", customizations: temperatureCustomizations },
        { id: 118, name: "Cookie Caramel Latte", description: "Bu muhteşem latte, nefis shortbread cookie ve sırlı karamel aromalarının mükemmel birleşimiyle sizi tatlı bir lezzet serüvenine çıkarıyor.", price: 190, image: "/images/menu 2/Latte.webp", placeholder: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=400&fit=crop", customizations: temperatureCustomizations }
      ]
    },
    {
      id: "matcha-lattes",
      name: "MATCHA LATTES",
      subtitle: "MATCHA LATTELER",
      image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=400&fit=crop",
    placeholder: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=400&fit=crop",
      items: [
        { id: 30, name: "Matcha Latte", description: "Yeşil çayın doğal enerjisi ve kremsi sütün mükemmel birleşimi, hem sıcak hem de soğuk seçenekleriyle sunuluyor. Sıcak versiyonu, huzur veren bir içim deneyimi sağlarken, soğuk versiyonu ferahlatıcı bir tat patlaması yaratır. Her iki şekilde de ruhunuza dinginlik katar.", price: 210, image: "", placeholder: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=400&fit=crop", customizations: temperatureCustomizations },
        { id: 31, name: "Banana Matcha Latte", description: "Yeşil çayın sakinleştirici etkisi, muzun doğal tatlılığı ve kremsi sütün birleşimiyle hazırlanan bu soğuk içecek, benzersiz bir lezzet deneyimi sunar. Soğuk olarak sunulduğunda ferahlatıcı, tatlı ve enetji verici bir içim sağlar, günün her anında mükemmel bir tercih olur.", price: 250, image: "/images/menu/banana-matcha-latte.webp", placeholder: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=400&fit=crop", customizations: temperatureCustomizations },
        { id: 32, name: "Berry Matcha Latte", description: "Matcha'nın huzur veren yeşil çayı, orman meyvelerinin taze aromasıyla buluşuyor. Soğuk olarak sunulan bu içecek, meyvemsi tatları ve kremamsı dokusuyla ferahlatıcı bir deneyim sunar. Hem enerji verici hem de tatlı bir serinlik için mükemmel bir tercih.", price: 250, image: "", placeholder: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=400&fit=crop", customizations: temperatureCustomizations },
        { id: 33, name: "Strawberry Matcha Latte", description: "Yeşil çayın doğal enerjisi, taze çileğin tatlılığı ve kremamsı sütün birleşimiyle hazırlanan bu soğuk içecek, ferahlatıcı ve hafif tatlı bir deneyim sunar. Soğuk olarak sunulduğunda, her yudumda meyvemsi bir tazelik ve Matcha'nın huzur verici etkisini bir arada bulursunuz.", price: 250, image: "/images/menu/strawberry-matcha-latte.webp", placeholder: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=400&fit=crop", customizations: temperatureCustomizations }
      ]
    }
  ],
  food: [
    {
      id: "snacks",
      name: "SNACKS",
      subtitle: "ATIŞTIRMALIKLAR",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop",
    placeholder: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop",
      items: [
        { id: 67, name: "Rhea Kahvaltı", description: "Tabağımızda taze ve lezzetli malzemelerle hazırlanmış bir kahvaltı şöleni sunuyoruz. Tulum peyniri ve çeçil peyniri gibi zengin peynir çeşitleriyle başlayarak, siyah ve yeşil zeytinlerle tuzlu tadı dengeleyip, bal, kaymak ve tereyağıyla tatlandırıyoruz. Cherry domates, salatalık, lolo rosso, roka ve maydanoz gibi taze sebzelerle tabağımızı renklendiriyoruz. Taze kruvasanın hafif dokusu ve diğer lezzetlerle birleşen enfes aroması, güne başlarken size keyifli bir başlangıç sunuyor.", price: 320, image: "", placeholder: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop", customizations: snackCustomizations },
        { id: 68, name: "Dana Jambon Kaşar Kruvasan", description: "Çıtır çıtır kruvasanın enfes dokusuyla, dana jambonun eşsiz tadı ve kaşar peynirinin lezzetiyle buluşuyor. Yanında eşsiz bir denge sağlayan lolo rosso ve taze marul ile tamamlanıyor. Mini yeşil elma dilimleri ise lezzetinize hafif bir tatlılık katarken, sağlıklı bir atıştırmalık sunuyor.", price: 280, image: "/images/menu 3/dana jambon kaşarlı kruvasan.webp", placeholder: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&h=400&fit=crop", customizations: snackCustomizations },
        { id: 70, name: "Tereyağlı Kruvasan", description: "Taptaze tereyağlı çıtır kruvasan.", price: 130, image: "", placeholder: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop", customizations: snackCustomizations },
        { id: 71, name: "Füme Etli Sandviç", description: "İçerisindeki taze roka, taze marul ve özenle seçilmiş füme etiyle hazırlanan bu sandviç, doyurucu ve nefis bir lezzet sunuyor. Kaşar peyniri ve özel sosuyla birleşen bu eşsiz kombinasyon, her ısırıkta size lezzetli bir tat deneyimi sunuyor.", price: 250, image: "/images/menu 3/rhea sandwich.webp", placeholder: "https://images.unsplash.com/photo-1585445490387-f47934b73b54?w=400&h=400&fit=crop", customizations: snackCustomizations },
        { id: 72, name: "Tavuklu Sandviç", description: "Çıtır marul ve taze roka yaprakları, özenle haşlanmış tavuk dilimleriyle bir araya gelerek hafif ve lezzetli bir alternatif sunuyor. Ev yapımı sezar sos ile zenginleştirilen bu sandviç, her ısırıkta taze ve doyurucu bir tat deneyimi sunuyor.", price: 250, image: "/images/menu 3/tavuklu sandwich.webp", placeholder: "https://images.unsplash.com/photo-1585445490387-f47934b73b54?w=400&h=400&fit=crop", customizations: snackCustomizations },
        { id: 73, name: "Kimchi Soslu Sandviç", description: "Geleneksel lezzetlerin modern bir yorumu! Bu özel sandviç, çıtır marul ve taze rokanın ferahlığıyla başlıyor. Özenle haşlanmış tavuk dilimleri, özel yapım kimchi sosuyla bir harika uyumda bir araya gelerek acı, ekşi ve tatlı notaların mükemmel bir dengesini sunuyor.", price: 250, image: "/images/menu 3/kimchi soslu sandwich.webp", placeholder: "https://images.unsplash.com/photo-1585445490387-f47934b73b54?w=400&h=400&fit=crop", customizations: snackCustomizations },
        { id: 74, name: "Sezar Soslu Sandvic", description: "Taze ve lezzetli bir sandviç deneyimine hazır olun! Özenle hazırladığımız bu özel sandviçte, çıtır marul ve aromatik roka yaprakları, mükemmel şekilde pişirilmiş tavuk dilimleriyle buluşuyor. Hepsinin üzerine eklenen ev yapımı sezar sosumuz ise bu eşsiz lezzeti tamamlıyor.", price: 250, image: "/images/menu 3/sezar soslu sandwich.webp", placeholder: "https://images.unsplash.com/photo-1585445490387-f47934b73b54?w=400&h=400&fit=crop", customizations: snackCustomizations },
        { id: 75, name: "Kaşarlı Tost", description: "Taze domates ve salatalık dilimleriyle sunulan çıtır kaşarlı tost.", price: 180, image: "/images/menu 3/kaşarlı tost.webp", placeholder: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop", customizations: snackCustomizations },
        { id: 76, name: "Dana Jambon Kaşarlı Tost", description: "Lezzetli dana jambon ve erimiş kaşar peynirli sıcak tost.", price: 230, image: "/images/menu 3/kaşarlı tost.webp", placeholder: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop", customizations: snackCustomizations },
        { id: 77, name: "Sucuk Kaşarlı Tost", description: "Baharatlı dana sucuk ve bol kaşarlı çıtır sıcak tost.", price: 230, image: "/images/menu 3/kaşarlı tost.webp", placeholder: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop", customizations: snackCustomizations }
      ]
    },
    {
      id: "pizzas",
      name: "PIZZAS",
      subtitle: "PİZZALAR",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop",
    placeholder: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop",
      items: [
        { id: 80, name: "Rhea Margherita", description: "Pizza Sos, Mozzarella, Roka, Parmesan", price: 250, image: "/images/menu 3/margaritha( peynirli.webp", placeholder: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=400&fit=crop", customizations: getPizzaCustomizations(80) },
        { id: 81, name: "Rhea Pepperoni (Sucuklu)", description: "Pizza Sos, Mozzarella, Dana Sucuk, Kekik", price: 300, image: "/images/menu 3/pepperoni(sucuklu.webp", placeholder: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop", customizations: getPizzaCustomizations(50) },
        { id: 82, name: "Rhea Quattro (Dört Peynirli)", description: "Pizza Sos, Mozzarella, Çeçil, Çedar, Parmesan, Roka", price: 330, image: "/images/menu 3/quattro (dört peynirli.webp", placeholder: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop", customizations: getPizzaCustomizations(50) },
        { id: 83, name: "Rhea Delux (Karışık)", description: "Pizza Sos, Mozzarella, Dana Sucuk, Mantar, Dana Jambon, Dana Sosis, Kapya Biber, Yeşil Biber, Siyah Zeytin, Yeşil Zeytin, Mısır, Kekik", price: 370, image: "/images/menu 3/rhea delux (karışık) pizza.webp", placeholder: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop", customizations: getPizzaCustomizations(60) },
        { id: 84, name: "Rhea Vegeterian (Sebzeli)", description: "Pizza Sos, Mozzarella, Kabak, Kapya Biber, Yeşil Biber, Mantar, Domates, Mısır, Siyah Zeytin, Yeşil Zeytin", price: 250, image: "/images/menu 3/vejeteryan (sebzeli.webp", placeholder: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=400&fit=crop", customizations: getPizzaCustomizations(80) }
      ]
    },
    {
      id: "salads",
      name: "SALADS",
      subtitle: "SALATALAR",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
    placeholder: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
      items: [
        { id: 90, name: "Sezar Salad", description: "İçerisindeki özenle seçilmiş tavuk dilimleri, marul, kruton ekmek, mayonez, hardal ve soya sosu ile harmanlanıyor, size doyurucu ve lezzetli bir deneyim sunuyor. Ançuez ve kapari ile zenginleştirilen bu lezzet şöleni, damak tadınıza unutulmaz bir tat katıyor.", price: 300, image: "/images/menu 3/sezar salad.webp", placeholder: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=400&fit=crop", customizations: saladCustomizations },
        { id: 91, name: "Rhea Salad", description: "Marul, lolo rosso ve roka ile zenginleştirilen bu salata, sağlıklı ve doyurucu bir öğün için mükemmel bir seçenek sunuyor. Klasik vinegrat sosu, salatanın tüm malzemelerini kusursuz bir şekilde bir araya getiriyor, her lokmada damağınızı şenlendiriyor. Çilek dilimleri ve bademler, salatanın taze ve tatlı bir dokusuyla buluşarak lezzetini zirveye taşıyor. Taze tavuk dilimleri ile de lezzet tamamlanıyor.", price: 330, image: "/images/menu 3/rhea salad.webp", placeholder: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop", customizations: saladCustomizations },
        { id: 92, name: "Tuna Salad", description: "Özenle seçilmiş marul, roka ve lolo rosso yapraklarının taze dokusu; kaliteli ton balığı, çeri domates ve salatalık ile zarif bir uyum içinde sunulur. Özel hazırlanmış vinegar sos ile dengelenen bu rafine lezzet, hafif ama doyurucu bir deneyim sunar.", price: 330, image: "/images/menu 3/ton balıklı salata.webp", placeholder: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop", customizations: saladCustomizations },
        { id: 93, name: "Rhea Vegan Salad", description: "Marul, lolo rosso ve roka ile zenginleştirilen bu salata, sağlıklı ve doyurucu bir öğün için mükemmel bir seçenek sunuyor. Klasik vinegrat sosu, salatanın tüm malzemelerini kusursuz bir şekilde bir araya getiriyor, her lokmada damağınızı şenlendiriyor. Çilek dilimleri ve bademler, salatanın taze ve tatlı bir dokusuyla buluşarak lezzetini zirveye çıkarıyor.", price: 280, image: "/images/menu 3/rhea vejeteryan salata.webp", placeholder: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop", customizations: saladCustomizations }
      ]
    },
    {
      id: "desserts",
      name: "DESSERTS",
      subtitle: "TATLILAR",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=400&fit=crop",
    placeholder: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=400&fit=crop",
      items: [
        { id: 100, name: "Cookie Cake", description: "Dışı hafif çıtır içi yumuşacık Belçika çikolatalı cookie hamuru; ceviz ve Antep fıstığıyla zenginleştirilmiştir. Bu özel tatlı, yoğun çikolata aroması ve dengeli dokusuyla keyifli bir deneyim sunar. (Sıcak servis edilir.)", price: 320, image: "/images/menu 3/cookie cake.webp", placeholder: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 101, name: "Eros", description: "Çikolata ve çileğin aşkı. Kat kat dark kek, ipeksi krema ve taze çileklerin beyaz ve sütlü çikolata seliyle en romantik buluşması.", price: 350, image: "/images/menu 3/eros.webp", placeholder: "https://images.unsplash.com/photo-1567327613485-fbc7bf196198?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 102, name: "Rhea İmza Fondü", description: "Taze mevsim çilekleri, dilimlenmiş muz, çıtır waffle küpleri ve ateşte hafifçe fırınlanmış marshmallowlar... Pürüzsüz ve sıcak sütlü çikolatanın eşlik ettiği bu lezzet şöleni, tatlı anlarınıza eşlik etmek için hazırlandı.", price: 400, image: "/images/menu 3/fondü.webp", placeholder: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 103, name: "Blanc", description: "Zarafetin en lezzetli hali… İncecik ve hafif dokusuyla ağızda dağılan enfes ekler hamurunun içinde, ipeksi kıvamlı Bavyera kreması saklı. Üzerini kaplayan yoğun ve parlak Belçika çikolatası ise her lokmada dengeli bir tatlılık ve derin aroma sunuyor.", price: 150, image: "/images/menu 3/rhea blanc.webp", placeholder: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 104, name: "Noir", description: "Yumuşacık ekler hamurunun içinde zengin çikolatalı Bavyera kreması; üzerinde ise beyaz Belçika çikolatasının kusursuz uyumu. Her katmanda yoğun çikolata aroması, her lokmada dengeli bir tatlılık.", price: 150, image: "", placeholder: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 105, name: "Spoonfull", description: "Tatlı dünyasında şık bir klasik: Spoonfull. Kat kat yapısı, yumuşak kek dokusu, ipeksi kreması ve bitter çikolata sosuyla hem gözünüze hem damağınıza hitap eder. Hafifliğini koruyan ama lezzetinden ödün vermeyen bir tat.", price: 250, image: "/images/menu 3/spoonfull.webp", placeholder: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 106, name: "Loren (Çilek & Muz)", description: "Tatlı tutkunlarının gözdesi. Bu eşsiz tatlı, egzotik lezzetleri ve enfes dokularıyla damaklarda unutulmaz bir iz bırakır. İçeriğindeki özel malzemelerle dikkat çeken Loren, her bir ısırıkta lezzet dolu bir serüven sunar.", price: 400, image: "/images/menu 3/loren çilek muz.webp", placeholder: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 107, name: "Loren (Frambuaz & Böğürtlen)", description: "Tatlı tutkunlarının gözdesi. Bu eşsiz tatlı, egzotik lezzetleri ve enfes dokularıyla damaklarda unutulmaz bir iz bırakır. İçeriğindeki özel malzemelerle dikkat çeken Loren, her bir ısırıkta lezzet dolu bir serüven sunar.", price: 400, image: "/images/menu 3/loren frambuaz.webp", placeholder: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 108, name: "Loren (Frenk Üzümü & Vişne)", description: "Tatlı tutkunlarının gözdesi. Bu eşsiz tatlı, egzotik lezzetleri ve enfes dokularıyla damaklarda unutulmaz bir iz bırakır. İçeriğindeki özel malzemelerle dikkat çeken Loren, her bir ısırıkta lezzet dolu bir serüven sunar.", price: 400, image: "/images/menu 3/loren frenk üzümlü.webp", placeholder: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 109, name: "Mila", description: "Lezzetli kırmızı kadife kek arasına kremalı ve taze çilekli bir iç harcıyla hazırlanan bu tatlı, üzerine Belçika çikolatası ve çıtır krep kırıkları ile taçlandırılıyor. Hem gözünüze hem de damağınıza hitap edecek eşsiz bir tat deneyimi!", price: 280, image: "/images/menu 3/Mila.webp", placeholder: "https://images.unsplash.com/photo-1567327613485-fbc7bf196198?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 110, name: "RHEA Dubai", description: "Antep Ezme ile karışık, çıtır kadayıf tabanın üzerinde antep fıstıklı krema ve yoğun çikolatası, taze antep fıstığı parçaları ile servis edilir. Dubai ismi tatlının lüks ve zengin içeriğini vurgulayan bir dokunuş olarak düşünülmüştür.", price: 300, image: "/images/menu 3/dubai cup.webp", placeholder: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 111, name: "Vanilya Çubuklu San Sebastian", description: "En belirgin özelliği, doğal vanilya çubuklarıdır. Bu özel malzeme, tatlıya yoğun bir vanilya aroması ve doğal tatlılık katarken, her bir lokmada ferahlayıcı bir lezzet sunar. Dilerseniz yanında ekstra olarak (100₺) belçika çikolatası ile servis edilir.", price: 250, image: "/images/menu 3/vanilyali san sebastian.webp", placeholder: "https://images.unsplash.com/photo-1567327613485-fbc7bf196198?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 112, name: "Antep Fıstıklı San Sebastian", description: "Klasik San Sebastian'ın yumuşacık dokusu, Antep fıstığının eşsiz aromasıyla buluştu. Üzeri bol Antep fıstığıyla süslenmiş, yoğun ve dengeli bir lezzet. Dilerseniz yanında ekstra olarak (100₺) belçika çikolatası ile servis edilir.", price: 280, image: "/images/menu 3/antep fistikli san sebastian.webp", placeholder: "https://images.unsplash.com/photo-1567327613485-fbc7bf196198?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 113, name: "Rhea Profiterol", description: "Profiterol'ün temelini oluşturan özel tatlı hamuru, hafif ve kabarık dokusuyla dikkat çeker. Her bir ısırıkta, yumuşak ve lezzetli bir tatlı keyfi sunar.", price: 330, image: "/images/menu 3/rhea profiterol.webp", placeholder: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 114, name: "Magnolya", description: "Enfes magnolya kreması, taze çilek-muz dilimleri ve özel bisküvilerin mükemmel birleşimiyle hazırlanır. Her bir ısırıkta, tazelik ve lezzetin muhteşem bir buluşmasını yaşarsınız.", price: 200, image: "/images/menu 3/magnolya.webp", placeholder: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 115, name: "Çikolatalı Cup", description: "Çikolatanın büyüleyici lezzetiyle hazırlanmış özel bir tatlı deneyimine hazır olun. Çikolata dolgulu pandispanya, yumuşacık Bavyera kreması, taptaze muz dilimleri ve damla çikolatanın enfes uyumuyla hazırlanan çikolatalı cup, tatlı severler için benzersiz bir seçenek.", price: 250, image: "/images/menu 3/cikolatali cup.webp", placeholder: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 116, name: "Rhea Çilekli Cup", description: "Taze çilekler, ipeksi krema ve nefis çikolata sosu.", price: 250, image: "/images/menu 3/cup loren.webp", placeholder: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 117, name: "Rhea Çilek Muz Cup", description: "Çilek, muz ve akışkan Belçika çikolatasının muhteşem uyumu. Her kaşıkta yoğun tatlı keyfi.", price: 250, image: "", placeholder: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 118, name: "Hera", description: "Tatlımız, lezzetli kakaolu pandispanya tabanıyla, özel orman meyveli krema ve taze orman meyveli sos ile hazırlanan enfes lezzet sunuyor. Her lokmada tatlı ve ekşi arasında mükemmel bir denge sunan bu lezzetli tatlı, damakları şenlendirmek için ideal bir seçim.", price: 250, image: "/images/menu 3/hera.webp", placeholder: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 119, name: "Zeus", description: "Özel kahveli krema ile sade pandispanya kahveli çikolatalı tatlımızın eşsiz lezzetini sunar. İncecik pandispanya kekin üzerine yayılan özel kahveli krema, damakları şımartırken, içindeki kahveli çikolata dokusuyla tatlı bir buluşma yaşatır. Lezzet dolu bir deneyim için sizi bekliyoruz!", price: 250, image: "/images/menu 3/zeus.webp", placeholder: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 120, name: "Badem Ezmeli Cheesecake", description: "Özenle seçilmiş bademler ile hazırlanmış, lezzetin sultanını sunan bir tatlıdır. Her bir ısırıkta, tatlı severleri enfes bir lezzet yolculuğuna çıkarır ve damaklarda unutulmaz bir iz bırakır.", price: 280, image: "/images/menu 3/badem ezmeli cheesecake.webp", placeholder: "https://images.unsplash.com/photo-1567327613485-fbc7bf196198?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 121, name: "Orman Meyveli Cheesecake", description: "Bu eşsiz tatlı, özenle seçilmiş orman meyveleri ile hazırlanır ve her bir ısırıkta doğanın lezzetini sunar.", price: 240, image: "/images/menu 3/frambuazli cheesecake.webp", placeholder: "https://images.unsplash.com/photo-1567327613485-fbc7bf196198?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 122, name: "Belçika Çikolatalı Cheesecake", description: "Belçika çikolatasıyla hazırlanıyor.", price: 280, image: "/images/menu 3/belcika cikolatali cheesecake.webp", placeholder: "https://images.unsplash.com/photo-1567327613485-fbc7bf196198?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 123, name: "Lotus Cheesecake", description: "Eşsiz tatlımız, yoğun lotus kreması ve enfes lotus bisküvisi ile hazırlanır. Her bir ısırıkta, lezzetin yeni tanımını yaşarsınız.", price: 240, image: "/images/menu 3/lotus cheesecake.webp", placeholder: "https://images.unsplash.com/photo-1567327613485-fbc7bf196198?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 124, name: "Çikolatalı Kruvasan", description: "Hafif kruvasanın arasına yerleştirilmiş taze çilek ve muz dilimleri ile hazırlanır. Üzerine ise bolca çikolata ve file badem serpiştirilir. Her bir ısırıkta, tatlı ve çıtır bir lezzet şöleni yaşarsınız.", price: 300, image: "/images/menu 3/çikolatalı kruvasan.webp", placeholder: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 125, name: "Dubai Kruvasan", description: "Taze, çıtır çıtır kruvasan hamurunun içinde kavrulmuş Antep fıstığı ve zengin Antep fıstıklı krema ile buluşarak hazırlanan Dubai Kruvasanı, muhteşem bir lezzet deneyimi sunuyor. Her ısırıkta fıstığın eşsiz tadı ve kadayıfın çıtırlığı ile dolu bu özel tat, çay saatlerinize şıklık katacak.", price: 380, image: "/images/menu 3/dubai kruvasan.webp", placeholder: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 126, name: "Orman Meyveli Kruvasan", description: "Hafif kruvasanın arasına yerleştirilmiş orman meyveleri ile hazırlanır. Üzerine bolca çikolata ve file badem serpiştirilir. Her bir ısırıkta, doğanın lezzetini yaşarsınız.", price: 340, image: "/images/menu 3/orman meyveli kruvasan.webp", placeholder: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 127, name: "Bavyera Kremalı Kruvasan", description: "Hafif kruvasanın arasına tatlı ve kremsi Bavyera kreması sürülür ve taze çilek dilimleri ile süslenir. Her bir ısırıkta, kremsi ve meyveli bir lezzet sunar.", price: 300, image: "/images/menu 3/bavyera kremalı kruvasan.webp", placeholder: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 128, name: "Lotus Kremalı Kruvasan", description: "Hafif kruvasan arasına tatlı ve kremsi Bavyera kreması sürülür ve üzerine lotus ezmesi ve lotus kırıntıları eklenir. Her bir ısırıkta, eşsiz bir lezzet deneyimi yaşarsınız.", price: 340, image: "/images/menu 3/lotus bisküvili kruvasan.webp", placeholder: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 140, name: "Badem Ezmeli Danish", description: "Çıtır danish hamuru, lezzetli badem ezmesi dolgusu.", price: 180, image: "/images/menu 3/bademli danish.webp", placeholder: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 141, name: "Çilekli Danish", description: "Çıtır danish hamuru, nefis krema ve taze çilek dilimleri.", price: 180, image: "/images/menu 3/çilekli danish.webp", placeholder: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop", customizations: dessertCustomizations },
        { id: 142, name: "Oreolu Kruvasan", description: "Taze kruvasan içerisinde yoğun Oreo dolgusu ve çıtır bisküvi parçaları.", price: 300, image: "/images/menu 3/oreolu kruvasan.webp", placeholder: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&h=400&fit=crop", customizations: dessertCustomizations }
      ]
    }
  ],
  drinks: [
    {
      id: "refreshas",
      name: "REFRESHAS",
      subtitle: "SERİN İÇECEKLER",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop",
    placeholder: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop",
      items: [
        { id: 150, name: "Cool Lime", description: "Cool Lime, ferahlatıcı bir serinlik ve canlandırıcı bir lezzet sunan özel bir içecektir. Bu benzersiz içecek, taptaze lime dilimlerinin mükemmel tadıyla öne çıkar.", price: 170, image: "/images/menu 2/cool lime.webp", placeholder: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=400&fit=crop", customizations: coldDrinkCustomizations },
        { id: 151, name: "Cool Berry", description: "Cool Berry, ferahlatıcı bir serinlik ve canlandırıcı bir lezzet sunan özel bir içecektir. Bu eşsiz içecek, taptaze lime dilimleri ve lezzetli böğürtlenlerin mükemmel kombinasyonuyla hazırlanmıştır.", price: 170, image: "/images/menu 2/cool berry.webp", placeholder: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop", customizations: coldDrinkCustomizations },
        { id: 152, name: "RHEA Passion Lime", description: "Yaz mevsiminin ferahlatıcı esintisini damaklarınıza getiren \"Passion Lime\", gerçek çarkıfelek meyvelerinin canlandırıcı dokunuşuyla ve serinletici \"Cool Lime\" tadıyla, sıradan içecek deneyimlerinden sıyrılıyor. Her bir yudumda, tropikal lezzetin enfes bir dansıyla karşılaşacaksınız.", price: 200, image: "/images/menu/rhea-passion-lime.webp", customizations: coldDrinkCustomizations },
        { id: 153, name: "Berry Hibiscus", description: "Yaban mersini, ahududu ve frenk üzümü gibi canlandırıcı meyvelerin yanı sıra hibiskus çiçeği ile zenginleştirilmiştir. Gerçek böğürtlen ile servis edilir.", price: 170, image: "/images/menu 2/berry hibiscus.webp", placeholder: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop", customizations: coldDrinkCustomizations },
        { id: 154, name: "RHEA Maldives", description: "Tropikal lezzetleriyle dolu bu içecek, yazın sıcak günlerinde ferahlık ve keyif arayan herkes için ideal bir seçenektir. Her bir yudumda, tatlı ve hafif lavanta aroması, taze turunç ve limonun canlandırıcı tadı ile bir araya gelirken, portakalın tatlılık ve ferahlığı da damakları şenlendirir. Rhea Maldives'in özel bir özelliği daha var: misafirler, içeceğin rengini kendi isteklerine göre özelleştirebilirler!", price: 170, image: "/images/menu 2/rhea maldives.webp", placeholder: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=400&fit=crop", customizations: coldDrinkCustomizations },
        { id: 155, name: "RHEA Watermelon Lychee", description: "Her bir yudumda, taze karpuzun ferahlayıcı tatları, içeçeğe hemen hissedilen bir tatlılık ve sulu lezzet katarken, limonun canlandırıcı ekşiliği ferahlık sağlar. Üstelik, egzotik liçinin eşsiz aroması, içeceği benzersiz kılar ve damaklarda unutulmaz bir izlenim bırakır.", price: 170, image: "", placeholder: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=400&fit=crop", customizations: coldDrinkCustomizations },
        { id: 156, name: "Rhea Orange Mango", description: "Yazın tazelik ve ferahlık dolu anlarınızı kutlamak için özel olarak hazırlanmış RHEA Orange Mango içeceği, sizi tropik bir lezzet yolculuğuna davet ediyor. Bu muhteşem içecek, taze portakalın enerjik tadını ve tropik mango'nun tatlı aromalarını mükemmel bir uyumla birleştiriyor.", price: 170, image: "/images/menu 2/orange mango.webp", placeholder: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=400&fit=crop", customizations: coldDrinkCustomizations },
        { id: 157, name: "Soda", description: "Serinletici ve ferahlatıcı sade soda.", price: 170, image: "", placeholder: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=400&h=400&fit=crop", customizations: iceCustomizations }
      ]
    },
    {
      id: "summer",
      name: "SUMMER",
      subtitle: "YAZLIKLAR",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=400&fit=crop",
    placeholder: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=400&fit=crop",
      items: [
        { id: 160, name: "Crunchy Dubai", description: "Çikolata ile kaplı özel sunumuyla ilk bakışta fark yaratır. Yoğun aroması ve serinletici dokusuyla klasikleşmiş soğuk kahve deneyimine modern bir yorum katar. Günün her saatinde keyifle içilebilir, özellikle tatlı kaçamaklarına eşlik etmek için birebirdir.", price: 250, image: "/images/menu/crunchy-dubai.webp", placeholder: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop", customizations: [] },
        { id: 161, name: "Pistachio Velvet", description: "Antep fıstığının zengin aromasıyla öne çıkan bu özel tarif, tatlı dokusuyla içilebilir bir cheesecake hissi sunar. Hafif kıvamı, özenli sunumu ve damakta bıraktığı yumuşak tat ile klasik tatlıların ferahlayıcı bir alternatifi.", price: 250, image: "/images/menu/pistachio-velvet.webp", placeholder: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&h=400&fit=crop", customizations: [] },
        { id: 162, name: "Pecan Cream", description: "Tuzlu karamelin yoğun lezzetiyle ceviz notalarının buluştuğu bu soğuk içecek, rafine tatlardan hoşlananlar için özenle hazırlandı. Dengeli aroması ve kremsi yapısıyla serinletici olduğu kadar tatmin edici bir deneyim sunar.", price: 230, image: "/images/menu/pecan-cream.webp", placeholder: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop", customizations: [] },
        { id: 163, name: "Strawberry Velvet", description: "Çileğin ferahlayıcı aromasıyla öne çıkan bu özel tarif, tatlı dokusuyla içilebilir bir cheesecake hissi sunar. Hafif kıvamı, özenli sunumu ve damakta bıraktığı meyvemsi tat ile klasik tatlıların ferah bir yorumu.", price: 250, image: "/images/menu/strawberry-velvet.webp", placeholder: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop", customizations: [] },
        { id: 164, name: "Lotus Velvet", description: "Lotus kremasının benzersiz aromasıyla hazırlanan bu içecek, tatlı dokusuyla adeta içilebilir bir cheesecake keyfi sunar. Hafif kıvamı, özenli sunumu ve damakta bıraktığı baharatlı tat ile klasik tatlılara modern bir dokunuş katıyor.", price: 250, image: "/images/menu/lotus-velvet.webp", placeholder: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop", customizations: [] }
      ]
    },
    {
      id: "mojitos",
      name: "MOJITOS",
      subtitle: "MOJİTOLAR",
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=400&fit=crop",
    placeholder: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=400&fit=crop",
      items: [
        { id: 170, name: "Strawberry Mojito", description: "Çileğin tatlılığı, hibiscus özünün hafif asidik dokusu ve taze nane yapraklarının ferahlığıyla bir araya geliyor. Üzerindeki soda ile canlandırıcı bir içecek deneyimi sunan bu özel tarif, yazın neşesini her yudumda hissettiriyor.", price: 200, image: "/images/menu 2/Strawberry mojito.webp", placeholder: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=400&fit=crop", customizations: iceCustomizations },
        { id: 171, name: "Minty Mango Mojito", description: "Mangonun tatlı ve ferah dokusu, taze nane yapraklarıyla birleşiyor. Üzerindeki soda ile canlandırıcı ve tropikal bir deneyim sunan bu içecek, sıcak günlerin vazgeçilmezi olmaya aday.", price: 200, image: "/images/menu 2/Minty Mango Mojito.webp", placeholder: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=400&fit=crop", customizations: iceCustomizations },
        { id: 172, name: "Berry Mojito", description: "Karışık meyve aromalarının taze nane ile buluştuğu bu içecek, her yudumda ferahlayıcı ve tatlı bir denge sunuyor. Üzerindeki soda ile hafif, canlı ve meyvemsi bir lezzet deneyimi sağlar, yazın keyfini çıkarırken vazgeçilmeziniz olacak.", price: 200, image: "/images/menu 2/Berry Mojito.webp", placeholder: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop", customizations: iceCustomizations }
      ]
    },
    {
      id: "frozens",
      name: "FROZENS",
      subtitle: "BUZLU İÇECEKLER",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop",
    placeholder: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop",
      items: [
        { id: 180, name: "Berry Splash", description: "Orman meyvelerinin yoğun aromasıyla hazırlanan bu frozen içecek, serinletici ve meyvemsi bir deneyim sunar. Yoğun dokusu ve tatlı ekşiliğiyle her yudumda ferahlayıcı bir lezzet patlaması yaşatır, sıcak günlerin en keyifli içeceği olmaya aday.", price: 200, image: "/images/menu 2/Berry mango splash.webp", placeholder: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop", customizations: [] },
        { id: 181, name: "Tropical Splash", description: "Mango ve çarkıfelek meyvesinin egzotik birleşimiyle hazırlanan bu frozen içecek, tropikal tatların ferahlayıcı bir patlamasıdır. Yoğun meyve aroması ve buzlu dokusu, sıcak yaz günlerinde serinletici bir kaçış sunar.", price: 200, image: "/images/menu 2/Tropikal splash.webp", placeholder: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=400&fit=crop", customizations: [] },
        { id: 182, name: "Berry Mango Splash", description: "Çilek ve mango aromalarının mükemmel uyumuyla hazırlanan bu frozen içecek, her yudumda tatlı ve ferah bir deneyim sunar. Yoğun meyve lezzeti ve buzlu dokusu, serinletici bir tat patlaması yaratır, tropikal bir ferahlık arayanlar için ideal.", price: 200, image: "/images/menu 2/Berry mango splash.webp", placeholder: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop", customizations: [] }
      ]
    },
    {
      id: "lemonades",
      name: "LEMONADES",
      subtitle: "LİMONATALAR",
      image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=400&fit=crop",
    placeholder: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=400&fit=crop",
      items: [
        { id: 190, name: "Pomegranate Lemonade", description: "Her bir yudumunda ferahlık ve keyif sunan bu limonata, içeriğindeki Mavi kelebek çayı ve hibiscus çayı ile göz alıcı bir rengi size seçme şansı verirken, eşsiz bir aroma profiline sahiptir. Ekşi limonun canlandırıcı tadı, tatlı nar suyu ile birleşerek muhteşem bir denge oluşturur.", price: 180, image: "/images/menu 2/Narlı limonata.webp", placeholder: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&h=400&fit=crop", customizations: lemonadeCustomizations },
        { id: 191, name: "Strawberry Lemonade", description: "Her bir yudumunda ferahlık ve keyif sunan bu limonata, içeriğindeki mavi kelebek çayı ve hibiscus çayı ile göz alıcı bir rengi size seçme şansı verirken, eşsiz bir aroma profiline sahiptir. Ekşi limonun canlandırıcı tadı, çilek aroması ile birleşerek muhteşem bir denge oluşturur.", price: 180, image: "/images/menu 2/Çilekli limonata.webp", placeholder: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&h=400&fit=crop", customizations: lemonadeCustomizations },
        { id: 192, name: "Minty Lemonade", description: "Her bir yudumunda ferahlık ve keyif sunan bu limonata, içeriğindeki mavi kelebek çayı ve hibiscus çayı ile göz alıcı bir rengi size seçme şansı verirken, eşsiz bir aroma profiline sahiptir. Ekşi limonun canlandırıcı tadı, küba nanesi ile birleşerek muhteşem bir denge oluşturur.", price: 180, image: "", placeholder: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&h=400&fit=crop", customizations: lemonadeCustomizations },
        { id: 193, name: "Classic Lemonade", description: "Taze demlenmiş mavi kelebek çayı ve hibiscus çayı ile zenginleştirilmiş bu geleneksel limonata, ferahlayıcı bir tat sunuyor. Her yudumda doğanın en taze ve en lezzetli bileşenlerinin tadını çıkarın.", price: 160, image: "/images/menu 2/Lemonade.webp", placeholder: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=400&fit=crop", customizations: lemonadeCustomizations },
        { id: 194, name: "Cubano Lemonade", description: "Tazelik ve yenilik arayanların favorisi olmaya aday. Bu özel içecek, özel Küba'nın taptaze nane içeriğiyle hazırlanıyor ve misafirlerin kendi zevklerine göre renklendirmesi için benzersiz bir seçenek sunuyor. Her yudumda tazelik ve ferahlık sunan bu içecek, içerdiği özel Küba nanesiyle yazın sıcağından anında uzaklaştırır.", price: 180, image: "", placeholder: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=400&fit=crop", customizations: lemonadeCustomizations },
        { id: 195, name: "Grapefruit Lemonade", description: "Tazelik ve yenilik arayanların favorisi olmaya aday. Bu özel içecek, özel Küba'nın taptaze nane içeriğiyle hazırlanıyor ve misafirlerin kendi zevklerine göre renklendirmesi için benzersiz bir seçenek sunuyor. Her yudumda tazelik ve ferahlık sunan bu içecek, içerdiği özel Küba nanesiyle yazın sıcağından anında uzaklaştırır.", price: 180, image: "/images/menu 2/Greyfurt limonata.webp", placeholder: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=400&h=400&fit=crop", customizations: lemonadeCustomizations }
      ]
    },
    {
      id: "bubble-tea",
      name: "BUBBLE TEA",
      subtitle: "BUBBLE TEA",
      image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=400&fit=crop",
    placeholder: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=400&fit=crop",
      items: [
        { id: 200, name: "Orange Mango Bubble", description: "Portakal ve mango aromalarıyla birleşerek, her yudumda ferahlık ve taze bir lezzet deneyimi sunan, serinletici bir içecek. Bu özel içecek, taze portakal ve mango meyvelerinin muhteşem bir uyumuyla birlikte, misafirlerimizin kişisel tercihlerine göre kivi, çilek, çarkıfelek, tropikal toplarıyla zenginleştirilebiliyor.", price: 200, image: "/images/menu 2/Orange mango bubble.webp", placeholder: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=400&fit=crop", customizations: bubbleTeaCustomizations },
        { id: 201, name: "Hibiscus Bubble", description: "Egzotik bir lezzet yolculuğuna çıkaran, serinletici ve eğlenceli bir içecek. Bu özel içecek, hibiskus çiçeğinin benzersiz tadıyla birleşerek, misafirlerimizin kendi damak zevklerine göre kişiselleştirilebiliyor. Kivi, çilek, çarkıfelek, tropikal toplarından istediklerini seçerek, tamamen özelleştirilmiş bir içecek deneyimi yaşayabilirler.", price: 200, image: "/images/menu 2/Hibiscus bubble.webp", placeholder: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=400&fit=crop", customizations: bubbleTeaCustomizations },
        { id: 202, name: "Dragonia Bubble", description: "Drakonik bir lezzet deneyimi için hazır olun, çünkü Dragonia Bubble burada! Bu eşsiz içecek, muhteşem bir lezzet cümbüşü sunarken aynı zamanda serinletici ve eğlenceli bir içecek deneyimi vaat ediyor. Misafirlerimiz, kendi zevklerine göre seçtikleri kivi, çilek, çarkıfelek, tropikal toplarını ekleyerek bu içeceği tamamen kişiselleştirebilirler.", price: 200, image: "/images/menu 2/Drogonia bubble.webp", placeholder: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=400&fit=crop", customizations: bubbleTeaCustomizations },
        { id: 203, name: "Coffee Caramel Bubble", description: "Her yudumda kendinizi karamel ve kahvenin muhteşem uyumunda kaybedeceğiniz Coffee Caramel Bubble, özel tarifiyle gözleri ve damakları şenlendiriyor. Karamel toplarının tatlılığı, latte'nin kremamsı dokusuyla buluşarak, mükemmel bir denge oluşturuyor.", price: 200, image: "/images/menu 2/Coffee caramel bubble.webp", placeholder: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=400&fit=crop", customizations: bubbleTeaCustomizations },
        { id: 204, name: "Classic Lemonade Bubble", description: "Limonata, ferahlatıcı bir lezzet sunan, zamanın testini geçmiş klasik bir içecektir. Taze sıkılmış limon suyunun ve doğal şekerin mükemmel birleşimiyle hazırlanan bu içecek, sıcak günler de serinlemek için ideal bir seçenektir.", price: 180, image: "/images/menu 2/Lemonade.webp", placeholder: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=400&fit=crop", customizations: bubbleTeaCustomizations },
        { id: 205, name: "Strawberry Lemonade Bubble", description: "Ferahlatıcı bir lezzet sunan ve yaz mevsiminin tadını çıkaran bir içecektir. Bu özel limonata, taze çileklerin tatlı ve ekşi notalarını, serinletici limon suyuyla birleştirerek, benzersiz bir lezzet deneyimi sunar.", price: 200, image: "/images/menu 2/Strawberry lemonade.webp", placeholder: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=400&fit=crop", customizations: bubbleTeaCustomizations },
        { id: 206, name: "Minty Lemonade Bubble", description: "Ferahlatıcı bir limonata deneyimine taze nane dokunuşuyla yeni bir boyut kazandırıyor. Bu özel içecek, serinletici limon suyunun tazelik veren lezzetiyle taze nane yapraklarının canlandırıcı aromasını bir araya getiriyor.", price: 200, image: "", placeholder: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=400&fit=crop", customizations: bubbleTeaCustomizations },
        { id: 207, name: "Cubano Lemonade Bubble", description: "Küba Naneli Limonata, taze limon suyu ve ferahlatıcı Küba Nanesi yapraklarının eşsiz birleşimiyle hazırlanan, özel bir içecektir. Bu eşsiz içecek, sıcak günlerde serinlemek için ideal bir seçenek olmanın yanı sıra, lezzet cümbüşünü tamamlamak için çeşitli meyve toplarından seçim yapma imkanı sunar.", price: 200, image: "", placeholder: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=400&fit=crop", customizations: bubbleTeaCustomizations },
        { id: 208, name: "Pomegranate Lemonade Bubble", description: "Ferahlatıcı bir lezzet sunan ve narın benzersiz tadını limonata ile buluşturan özel bir içecektir. Bu eşsiz kombinasyon, yazın sıcak günlerinde serinlemek için idealdir ve aynı zamanda çeşitli meyve toplarını ekleyerek kişiselleştirme imkanı sunar.", price: 200, image: "/images/menu 2/Narlı bubble.webp", placeholder: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=400&fit=crop", customizations: bubbleTeaCustomizations }
      ]
    },
    {
      id: "shakes",
      name: "SHAKES",
      subtitle: "MILKSHAKELER",
      image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&h=400&fit=crop",
    placeholder: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&h=400&fit=crop",
      items: [
        { id: 210, name: "RHEA Wild Berries", description: "Orman meyveli taze lezzetli milkshake.", price: 220, image: "", placeholder: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop", customizations: shakeCustomizations },
        { id: 211, name: "RHEA Caramel", description: "Karamel soslu ve kremalı enfes milkshake.", price: 220, image: "", placeholder: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop", customizations: shakeCustomizations },
        { id: 212, name: "RHEA Chocolate", description: "Yoğun Belçika çikolatalı nefis soğuk milkshake.", price: 220, image: "", placeholder: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop", customizations: shakeCustomizations },
        { id: 213, name: "RHEA Strawberry", description: "Çilekli ferahlatıcı klasik milkshake.", price: 220, image: "", placeholder: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&h=400&fit=crop", customizations: shakeCustomizations },
        { id: 214, name: "RHEA Voi (Protein)", description: "Proteinli ve besleyici özel formüllü milkshake.", price: 240, image: "", placeholder: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&h=400&fit=crop", customizations: shakeCustomizations }
      ]
    },
    {
      id: "soft-drinks",
      name: "SOFT DRINKS",
      subtitle: "KUTU VE ŞİŞE İÇECEKLER",
      image: "/images/menu/coca cola.webp",
      placeholder: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=400&fit=crop",
      items: [
        { id: 250, name: "Coca Cola (Kutu)", description: "Soğuk kutu Coca Cola", price: 90, image: "/images/menu 3/coca cola.webp", placeholder: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=400&fit=crop", customizations: iceCustomizations },
        { id: 251, name: "Coca Cola Zero (Kutu)", description: "Şekersiz soğuk kutu Coca Cola", price: 90, image: "/images/menu 3/coca cola zero.webp", placeholder: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=400&fit=crop", customizations: iceCustomizations },
        { id: 252, name: "Coca Cola Şişe", description: "Cam şişede soğuk Coca Cola", price: 95, image: "/images/menu 3/coca cola sise.webp", placeholder: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=400&fit=crop", customizations: iceCustomizations },
        { id: 253, name: "Fanta (Kutu)", description: "Soğuk kutu Fanta", price: 90, image: "/images/menu 3/fanta.webp", placeholder: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=400&fit=crop", customizations: iceCustomizations },
        { id: 254, name: "Sprite (Kutu)", description: "Soğuk kutu Sprite", price: 90, image: "/images/menu 3/sprite.webp", placeholder: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=400&fit=crop", customizations: iceCustomizations },
        { id: 255, name: "Ayran", description: "Soğuk ve taze ayran", price: 60, image: "/images/menu 3/ayran.webp", placeholder: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop", customizations: [] },
        { id: 256, name: "Damla Su", description: "Şişe içme suyu", price: 40, image: "/images/menu 3/su.webp", placeholder: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=400&h=400&fit=crop", customizations: [] },
        { id: 257, name: "Damla Maden Suyu", description: "Doğal mineralli maden suyu", price: 50, image: "/images/menu 3/maden suyu.webp", placeholder: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=400&h=400&fit=crop", customizations: iceCustomizations },
        { id: 258, name: "Cappy Karışık", description: "Soğuk kutu Cappy Karışık meyve suyu", price: 80, image: "/images/menu 3/cappy karisik.webp", placeholder: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&h=400&fit=crop", customizations: iceCustomizations },
        { id: 259, name: "Cappy Şeftali", description: "Soğuk kutu Cappy Şeftali meyve suyu", price: 80, image: "/images/menu 3/cappy seftali.webp", placeholder: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&h=400&fit=crop", customizations: iceCustomizations },
        { id: 260, name: "Cappy Vişne", description: "Soğuk kutu Cappy Vişne meyve suyu", price: 80, image: "/images/menu 3/cappy visne.webp", placeholder: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&h=400&fit=crop", customizations: iceCustomizations },
        { id: 261, name: "Fuse Tea Karpuz", description: "Soğuk kutu Fuse Tea Karpuz aromalı soğuk çay", price: 90, image: "/images/menu 3/fuse tea karpuz.webp", placeholder: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&h=400&fit=crop", customizations: iceCustomizations },
        { id: 262, name: "Fuse Tea Kavun Çilek", description: "Soğuk kutu Fuse Tea Kavun Çilek aromalı soğuk çay", price: 90, image: "/images/menu 3/fuse tea kavun cilek.webp", placeholder: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&h=400&fit=crop", customizations: iceCustomizations },
        { id: 263, name: "Fuse Tea Mango", description: "Soğuk kutu Fuse Tea Mango aromalı soğuk çay", price: 90, image: "/images/menu 3/fuse tea mango.webp", placeholder: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&h=400&fit=crop", customizations: iceCustomizations },
        { id: 264, name: "Fuse Tea Şeftali", description: "Soğuk kutu Fuse Tea Şeftali aromalı soğuk çay", price: 90, image: "/images/menu 3/fuse tea seftali.webp", placeholder: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&h=400&fit=crop", customizations: iceCustomizations }
      ]
    }
  ]
};
