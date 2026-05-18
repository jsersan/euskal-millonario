# Instalazio Gida / Guía de Instalación

## Euskaraz 🇪🇸

### Aurrebaldintzak
- Node.js (v18 edo berriagoa)
- npm edo yarn paketeak kudeatzeko

### Instalazio pausoak

1. **Deskargatu proiektua**
   ```bash
   # Deskonprimitu ZIP fitxategia edo
   cd euskal-millonario
   ```

2. **Instalatu dependentziak**
   ```bash
   npm install
   ```
   
   Honek Angular eta behar diren beste pakete guztiak instalatuko ditu.

3. **Abiarazi garapenerako zerbitzaria**
   ```bash
   npm start
   ```
   
   Edo:
   ```bash
   ng serve
   ```

4. **Ireki nabigatzailean**
   Nabigatzailean ireki:
   ```
   http://localhost:4200
   ```

### Eraikuntza produkziorako

Produkziorako optimizatutako bertsioa eraikitzeko:

```bash
npm run build
```

Fitxategiak sortuko dira `dist/euskal-millonario/` karpetan.

### Arazoak konpontzea

**Errorea: Node.js bertsioa zaharra**
```bash
node --version  # Egiaztatu zein bertsio duzun
# Behar izanez gero, eguneratu Node.js v18 edo berriagora
```

**Errorea: npm instalatu ezin da**
```bash
# Saiatu cache garbitzen
npm cache clean --force
npm install
```

---

## En Castellano 🇪🇸

### Requisitos previos
- Node.js (v18 o superior)
- npm o yarn para gestión de paquetes

### Pasos de instalación

1. **Descargar el proyecto**
   ```bash
   # Descomprime el archivo ZIP o
   cd euskal-millonario
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```
   
   Esto instalará Angular y todos los paquetes necesarios.

3. **Iniciar servidor de desarrollo**
   ```bash
   npm start
   ```
   
   O:
   ```bash
   ng serve
   ```

4. **Abrir en el navegador**
   Abre en tu navegador:
   ```
   http://localhost:4200
   ```

### Build para producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/euskal-millonario/`.

### Solución de problemas

**Error: Versión de Node.js antigua**
```bash
node --version  # Comprueba tu versión
# Si es necesario, actualiza a Node.js v18 o superior
```

**Error: No se puede instalar npm**
```bash
# Intenta limpiar la caché
npm cache clean --force
npm install
```

---

## Komando erabilgarriak / Comandos útiles

| Komandoa / Comando | Deskribapena / Descripción |
|-------------------|---------------------------|
| `npm start` | Garapenerako zerbitzaria abiarazi / Iniciar servidor de desarrollo |
| `npm run build` | Produkziorako eraikuntza / Build de producción |
| `npm test` | Testak exekutatu / Ejecutar tests |
| `ng generate component nombre` | Osagai berria sortu / Crear nuevo componente |

---

## Laguntza gehiago / Más ayuda

- [Angular dokumentazioa](https://angular.io/docs)
- [Node.js deskargatu](https://nodejs.org/)
- [npm dokumentazioa](https://docs.npmjs.com/)

Gozatu jokatzen! / ¡Disfruta jugando! 🎮
