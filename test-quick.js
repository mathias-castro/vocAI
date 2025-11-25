// Test rápido para gemini-2.5-flash
import 'dotenv/config';

const API_KEY = process.env.VITE_GEMINI_API_KEY;

console.log('🧪 Probando gemini-2.5-flash (guía oficial de Google)...\n');

async function testGemini25Flash() {
    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: 'Di solo "hola, funciono correctamente"' }]
                    }]
                })
            }
        );

        if (!response.ok) {
            const error = await response.json();
            console.log('❌ Error:', response.status);
            console.log('❌ Mensaje:', error.error?.message || error);
            return;
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

        console.log('✅ ¡FUNCIONA!');
        console.log('📝 Respuesta del chatbot:', text);
        console.log('\n🎉 El chatbot está listo para usar en el frontend');
    } catch (error) {
        console.log('❌ Error de red:', error.message);
    }
}

testGemini25Flash();
