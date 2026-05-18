# Euskal Milionarioa - 50x15 🎯

Euskal kultur eta historiaren gaineko 15 galderako joku-aplikazioa, Angular-ekin eginda.

## 📋 Deskribapena

"Euskal Milionarioa" euskal kultura, historia, geografia, gastronomia eta kirolei buruzko trivia jokoa da. Jokalariok 15 galdera erantzun behar dituzte eta milioi bat euro (bidebatean) irabazteko aukera izango dute.

### Ezaugarriak

- ✅ 100 galdera euskaraz Euskal Herriari buruz
- ✅ 5 zailtasun maila (EASY, MEDIUM_EASY, MEDIUM, HARD, VERY_HARD)
- ✅ Ikurriñako koloreen diseinu berezia (gorria, berdea, zuria)
- ✅ Lauburu sinboloa interfazean
- ✅ Responsive diseinua (mugikor eta mahaigainerako)
- ✅ Animazio eta efektu bisualak

## 🚀 Instalazioa

### Aurrebaldintzak

- Node.js (18.x edo berriagoa)
- npm edo yarn

### Pausoak

1. **Klonatu edo deskargatu proiektua**
```bash
git clone [repositorioaren-url]
cd euskal-millonario
```

2. **Instalatu dependentziak**
```bash
npm install
```

3. **Abiarazi garapenerako zerbitzaria**
```bash
npm start
```

4. **Ireki nabigatzailean**
```
http://localhost:4200
```

## 🎮 Nola jokatu

1. **Hasiera** - Klikatu "Jolastu hasi" botoian
2. **Galderak** - Irakurri galdera eta aukeratu erantzun zuzena
3. **Progresioa** - Erantzun zuzen bakoitzak saria areagotzen du
4. **Irabazi** - 15 galdera zuzen erantzun eta milioi bat euro irabazi!

### Galderen banaketa

- **1-5 galdera**: Errazak (EASY)
- **6-10 galdera**: Ertain-errazak (MEDIUM_EASY)
- **11-13 galdera**: Ertainak (MEDIUM)
- **14 galdera**: Zailak (HARD)
- **15 galdera**: Oso zailak (VERY_HARD)

## 🛠️ Teknologiak

- **Angular 17** - Web framework nagusia
- **TypeScript** - Programazio lengoaia
- **SCSS** - Estiloak
- **RxJS** - Estado kudeaketa
- **Angular Router** - Nabigazio sistema

## 📁 Proiektuaren egitura

```
euskal-millonario/
├── src/
│   ├── app/
│   │   ├── content/
│   │   │   ├── euskal-questions.ts    # 100 galdera euskaraz
│   │   │   └── prices.ts               # Sari-taula
│   │   ├── pages/
│   │   │   ├── menu/                   # Hasiera-menua
│   │   │   └── game/                   # Joko-pantaila
│   │   ├── services/
│   │   │   ├── game.service.ts         # Joko-logika
│   │   │   ├── questions.service.ts    # Galderen kudeaketa
│   │   │   └── audio.service.ts        # Audio kudeaketa
│   │   └── types/                      # TypeScript interfazeak
│   ├── styles.scss                     # Estilo globalak
│   └── index.html
├── package.json
├── angular.json
└── README.md
```

## 🎨 Diseinu-ezaugarriak

### Koloreak
- **Gorria** (#D52B1E) - Ikurriñako gorria
- **Berdea** (#009B3A) - Ikurriñako berdea
- **Zuria** (#F5F5DC) - Euskal zuria/krema
- **Urrea** (#FFD700) - Sarientzat

### Sinboloak
- **Lauburu** - Euskal kurtze tradizionala animazioekin
- **Ikurriña** - Euskal bandera elementuetan

## 📝 Lizentz

Proiektu hau kode irekikoa da erabiltzeko eta moldatzeko.

## 🤝 Kontribuzioak

Kontribuzioak onartzen dira! Galdera gehiago gehitu nahi badituzu edo hobekuntzak proposatu:

1. Fork egin repositorioa
2. Sortu feature branch bat (`git checkout -b feature/galdera-berriak`)
3. Commit egin zure aldaketak (`git commit -m 'Galdera berriak gehitu'`)
4. Push egin branch-era (`git push origin feature/galdera-berriak`)
5. Pull Request bat ireki

## 📧 Kontaktua

Galderak edo iradokizunak? Jarri gurekin harremanetan.

## 🙏 Eskerrak

Euskal kultur eta historiaren hedapenean laguntzen duten guztiei.

---

**Gozatu jokatzen! 🎮**
