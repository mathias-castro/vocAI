# VocAI - Plataforma de Orientación Vocacional

## Configuración del Chatbot con IA

El chatbot utiliza Google Gemini AI para proporcionar orientación vocacional inteligente. Para que funcione correctamente:

### 1. Obtener tu API Key de Gemini

1. Ve a [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en "Create API Key"
4. Copia la clave generada

### 2. Configurar la API Key

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```
VITE_GEMINI_API_KEY=tu_api_key_aquí
```

**Nota:** El proyecto incluye una clave de demostración, pero es recomendable usar tu propia clave para evitar límites de uso.

### 3. Características del Chatbot

- ✅ Solo disponible para usuarios autenticados
- ✅ Respuestas personalizadas usando IA
- ✅ Conocimiento sobre carreras y universidades en Perú
- ✅ Interfaz conversacional intuitiva

## Ejecutar el Proyecto

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Construir para producción
npm run build
```

## Tecnologías Utilizadas

- React + Vite
- Google Gemini AI
- React Router
- Lucide Icons
- LocalStorage para autenticación
