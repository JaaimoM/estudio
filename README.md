# API de Saint Seiya - TypeScript

Una API RESTful completamente tipada para gestionar información de los Caballeros del Zodiaco (Saint Seiya).

## 🚀 Características

- **Completamente tipada** con TypeScript
- **Validación de tipos** en tiempo de ejecución
- **Manejo de errores** robusto
- **Funciones utilitarias** tipadas
- **Documentación** completa de tipos

## 📁 Estructura del Proyecto

```
src/
├── types/
│   └── index.ts          # Definiciones de tipos TypeScript
├── utils/
│   └── saintUtils.ts     # Funciones utilitarias tipadas
├── db/
│   └── index.ts          # Base de datos tipada
└── index.ts              # Servidor Express tipado
```

## 🎯 Tipos Definidos

### Saint
```typescript
interface Saint {
  nombre: string;
  signo: string;
  cloth: ClothType;
  constelacion: string;
  fechaNacimiento: string;
  origen: string;
  alturaCm?: number;
  pesoKg?: number;
  tipoSangre?: TipoSangre;
  tecnicas?: string[];
  datoRelevante: string;
}
```

### ClothType
```typescript
type ClothType = 'Oro' | 'Plata' | 'Bronce';
```

### TipoSangre
```typescript
type TipoSangre = 'A' | 'B' | 'O' | 'AB';
```

### ApiResponse
```typescript
interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
```

## 🔧 Endpoints

### GET `/`
Obtiene todos los santos.

**Respuesta:**
```json
{
  "data": [...],
  "success": true,
  "message": "Lista de todos los santos"
}
```

### GET `/stats`
Obtiene estadísticas de los santos.

**Respuesta:**
```json
{
  "data": {
    "total": 30,
    "byCloth": {
      "oro": 12,
      "plata": 14,
      "bronce": 4
    },
    "byBloodType": {
      "A": 8,
      "B": 6,
      "O": 4,
      "AB": 2
    },
    "averageHeight": 175,
    "averageWeight": 70
  },
  "success": true,
  "message": "Estadísticas de los santos"
}
```

### GET `/constelacion/:id`
Filtra santos por constelación.

**Parámetros:**
- `id` (string): Nombre de la constelación

**Respuesta:**
```json
{
  "data": [...],
  "success": true,
  "message": "Santos de la constelación Aries"
}
```

### GET `/cloth/:id`
Filtra santos por tipo de cloth.

**Parámetros:**
- `id` (string): Tipo de cloth ('Oro', 'Plata', 'Bronce')

**Respuesta:**
```json
{
  "data": [...],
  "success": true,
  "message": "Santos con cloth de Oro"
}
```

### GET `/search/:name`
Busca santos por nombre.

**Parámetros:**
- `name` (string): Nombre o parte del nombre del santo

**Respuesta:**
```json
{
  "data": [...],
  "success": true,
  "message": "Santos encontrados con el nombre Seiya"
}
```

## 🛠️ Funciones Utilitarias

### filterByCloth
```typescript
const filterByCloth = (saints: Saint[], clothType: ClothType): Saint[]
```

### filterByConstellation
```typescript
const filterByConstellation = (saints: Saint[], constellation: string): Saint[]
```

### findSaintByName
```typescript
const findSaintByName = (saints: Saint[], name: string): Saint | undefined
```

### getSaintStats
```typescript
const getSaintStats = (saints: Saint[]): SaintStats
```

### isValidClothType
```typescript
const isValidClothType = (type: string): type is ClothType
```

## 🚀 Instalación y Uso

1. **Instalar dependencias:**
```bash
npm install
```

2. **Ejecutar en desarrollo:**
```bash
npm run dev
```

3. **Compilar TypeScript:**
```bash
npm run build
```

4. **Ejecutar en producción:**
```bash
npm start
```

## 🔍 Validaciones

- **Tipos de cloth**: Solo acepta 'Oro', 'Plata', 'Bronce'
- **Tipos de sangre**: Solo acepta 'A', 'B', 'O', 'AB'
- **Parámetros requeridos**: Validación de parámetros obligatorios
- **Búsquedas**: Manejo de casos donde no se encuentran resultados

## 🎨 Beneficios del Tipado

1. **Autocompletado** en el IDE
2. **Detección de errores** en tiempo de compilación
3. **Documentación** automática del código
4. **Refactoring** seguro
5. **Mejor mantenibilidad** del código

## 📝 Ejemplos de Uso

```typescript
// Filtrar santos de oro
const santosOro = filterByCloth(saints, 'Oro');

// Buscar por constelación
const santosAries = filterByConstellation(saints, 'Aries');

// Obtener estadísticas
const stats = getSaintStats(saints);

// Validar tipo de cloth
if (isValidClothType('Oro')) {
  // El tipo es válido
}
```
