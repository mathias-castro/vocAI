// Script para listar modelos disponibles
import 'dotenv/config';

const API_KEY = process.env.VITE_GEMINI_API_KEY;

console.log('🔍 Listando modelos disponibles para tu API key...\n');

async function listModels() {
    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`
        );

        if (!response.ok) {
            const error = await response.json();
            console.log('❌ Error:', error.error?.message || error);
            return;
        }

        const data = await response.json();

        if (!data.models || data.models.length === 0) {
            console.log('❌ No se encontraron modelos disponibles');
            console.log('\n💡 Posibles causas:');
            console.log('   1. Tu API key no tiene acceso a Gemini API');
            console.log('   2. La API key es para otro servicio de Google');
            console.log('   3. Necesitas habilitar Gemini API en tu proyecto');
            console.log('\n🔗 Ve a: https://aistudio.google.com/app/apikey');
            console.log('   - Verifica que tu API key tenga "Generative Language API" habilitada');
            return;
        }

        console.log(`✅ Encontrados ${data.models.length} modelos:\n`);

        data.models.forEach(model => {
            const supportsGenerate = model.supportedGenerationMethods?.includes('generateContent');
            console.log(`${supportsGenerate ? '✅' : '❌'} ${model.name}`);
            if (supportsGenerate) {
                console.log(`   → Soporta: ${model.supportedGenerationMethods.join(', ')}`);
            }
        });

        console.log('\n💡 Usa uno de los modelos con ✅ en tu chatbot');

    } catch (error) {
        console.log('❌ Error de red:', error.message);
    }
}

listModels();
