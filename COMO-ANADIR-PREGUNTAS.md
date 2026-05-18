# Cómo Añadir Más Preguntas / Galdera Gehiago Nola Gehitu

## 📝 Guía Rápida

El archivo de preguntas está en:
```
src/app/content/euskal-questions.ts
```

## 🎯 Estructura de una Pregunta

```typescript
{
  difficulty: Difficulty.EASY,  // Nivel: EASY, MEDIUM_EASY, MEDIUM, HARD, VERY_HARD
  question: 'Zer da pintxoa?',
  options: [
    'Janariren motatxo bat',
    'Dantza bat',
    'Kirol bat',
    'Euskal jostailua'
  ],
  correctAnswer: 0  // Índice de la respuesta correcta (0-3)
}
```

## ➕ Cómo Añadir Preguntas

### Paso 1: Abrir el archivo
Abre `src/app/content/euskal-questions.ts`

### Paso 2: Buscar el final del array
Busca la última pregunta antes del cierre `];`

### Paso 3: Añadir tu pregunta
Añade una coma después de la última pregunta y pega tu nueva pregunta:

```typescript
  },  // ← Coma después de la pregunta anterior
  {
    difficulty: Difficulty.EASY,
    question: 'Tu pregunta aquí?',
    options: [
      'Opción A',
      'Opción B',
      'Opción C',
      'Opción D'
    ],
    correctAnswer: 0
  }
];  // ← Cierre del array
```

## 💡 Consejos

### Niveles de Dificultad
- **EASY** (Fácil): Cultura básica, lugares conocidos, comida típica
- **MEDIUM_EASY**: Historia reciente, geografía, tradiciones
- **MEDIUM**: Fechas importantes, personajes históricos, eventos
- **HARD**: Detalles específicos, fechas exactas, datos complejos
- **VERY_HARD**: Conocimiento muy especializado

### Distribución Recomendada (para 300 preguntas)
- EASY: 60 preguntas (20%)
- MEDIUM_EASY: 75 preguntas (25%)
- MEDIUM: 90 preguntas (30%)
- HARD: 45 preguntas (15%)
- VERY_HARD: 30 preguntas (10%)

## 📋 Plantilla para Copiar

```typescript
  {
    difficulty: Difficulty.EASY,
    question: '',
    options: [
      '',
      '',
      '',
      ''
    ],
    correctAnswer: 0
  }
```

## ✅ Temas Sugeridos para Preguntas

### Cultura
- Bailes tradicionales
- Música euskal
- Bertsolarismo
- Tradiciones populares

### Gastronomía
- Pintxos famosos
- Quesos (Idiazabal, Roncal)
- Vinos (Txakolin, Rioja Alavesa)
- Platos típicos

### Historia
- Personajes históricos
- Eventos importantes
- Batallas y guerras
- Evolución política

### Geografía
- Montañas y picos
- Ríos y costas
- Pueblos y ciudades
- Parques naturales

### Deportes
- Pilota vasca
- Aizkolaris
- Harrijasotzaileak
- Athletic Club / Real Sociedad

### Arte y Literatura
- Escritores (Bernardo Atxaga, Kirmen Uribe)
- Pintores (Zuloaga, Regoyos)
- Escultores (Chillida, Oteiza)
- Arquitectos

### Lengua
- Dialectos del euskera
- Historia del euskera
- Euskaltzaindia
- Literatura en euskera

## 🔢 Ejemplo Completo

```typescript
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: 'Noiz inauguratu zen Bilboko metroa?',
    options: [
      '1995ean',
      '1990ean',
      '2000an',
      '1985ean'
    ],
    correctAnswer: 0
  },
  {
    difficulty: Difficulty.HARD,
    question: 'Zein da Gorbeiako altuerak guztira?',
    options: [
      '1.481 metro',
      '1.500 metro',
      '1.400 metro',
      '1.600 metro'
    ],
    correctAnswer: 0
  }
```

## 🚀 Después de Añadir Preguntas

1. Guarda el archivo
2. Reinicia el servidor Angular (`npm start`)
3. Prueba las nuevas preguntas jugando

## ⚠️ Errores Comunes

1. **Olvidar la coma** entre preguntas
2. **Índice incorrecto** en `correctAnswer` (debe ser 0-3)
3. **Falta de comillas** en textos
4. **No cerrar el array** con `];`

## 📞 Ayuda

Si tienes errores de sintaxis, busca:
- Comas faltantes entre preguntas
- Paréntesis o corchetes sin cerrar
- Comillas sin cerrar

---

**¡Animo añadiendo preguntas! Zuk galdera gehiago gehitu!** 🎉
