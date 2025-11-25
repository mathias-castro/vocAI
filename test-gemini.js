// Test script para verificar la API de Gemini
// Para ejecutar: node test-gemini.js

import 'dotenv/config';

const API_KEY = process.env.VITE_GEMINI_API_KEY;

if (!API_KEY || API_KEY === 'PEGA_TU_API_KEY_AQUI') {
    console.error('❌ Error: API key no configurada en .env');
    process.exit(1);
}

console.log('🔑 API Key encontrada:', API_KEY.substring(0, 10) + '...');
console.log('\n🧪 Probando diferentes endpoints de Gemini...\n');

// Test 1: v1 con gemini-1.5-flash
async function testV1Flash() {
    console.log('📍 Test 1: v1/models/gemini-1.5-flash');
    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: 'Di solo "hola"' }]
                    }]
                })
            }
        );

        if (!response.ok) {
            const error = await response.json();
            console.log('❌ Status:', response.status);
            console.log('❌ Error:', error.error?.message || error);
            return false;
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        console.log('✅ Respuesta:', text);
        return true;
    } catch (error) {
        console.log('❌ Error de red:', error.message);
        return false;
    }
}

// Test 2: v1beta con gemini-1.5-flash
async function testV1BetaFlash() {
    console.log('\n📍 Test 2: v1beta/models/gemini-1.5-flash');
    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: 'Di solo "hola"' }]
                    }]
                })
            }
        );

        if (!response.ok) {
            const error = await response.json();
            console.log('❌ Status:', response.status);
            console.log('❌ Error:', error.error?.message || error);
            return false;
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        console.log('✅ Respuesta:', text);
        return true;
    } catch (error) {
        console.log('❌ Error de red:', error.message);
        return false;
    }
}

// Test 3: v1beta con gemini-pro
async function testV1BetaPro() {
    console.log('\n📍 Test 3: v1beta/models/gemini-pro');
    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: 'Di solo "hola"' }]
                    }]
                })
            }
        );

        if (!response.ok) {
            const error = await response.json();
            console.log('❌ Status:', response.status);
            console.log('❌ Error:', error.error?.message || error);
            return false;
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        console.log('✅ Respuesta:', text);
        return true;
    } catch (error) {
        console.log('❌ Error de red:', error.message);
        return false;
    }
}

// Ejecutar todos los tests
(async () => {
    const test1 = await testV1Flash();
    const test2 = await testV1BetaFlash();
    const test3 = await testV1BetaPro();

    console.log('\n📊 RESULTADOS:');
    console.log('Test 1 (v1/gemini-1.5-flash):', test1 ? '✅' : '❌');
    console.log('Test 2 (v1beta/gemini-1.5-flash):', test2 ? '✅' : '❌');
    console.log('Test 3 (v1beta/gemini-pro):', test3 ? '✅' : '❌');

    if (test1 || test2 || test3) {
        console.log('\n🎉 Al menos un endpoint funciona!');
    } else {
        console.log('\n😞 Ningún endpoint funcionó. Verifica:');
        console.log('   1. Que tu API key sea correcta');
        console.log('   2. Que tengas cuota disponible en https://ai.google.dev/');
        console.log('   3. Que la API key tenga permisos para Gemini API');
    }
})();
