//Pedir grados celcius
//Convertir a fahrenheit y kelvin
//Imprimelos

/*
Fórmulas de conversión

• Celsius a Kelvin: K = °C + 273.15
• Kelvin a Celsius: °C = K - 273.15
• Celsius a Fahrenheit: \(\text{°F} = (\text{°C} \times \frac{9}{5}) + 32\)
• Fahrenheit a Celsius: \(\text{°C} = (\text{°F} - 32) \times \frac{5}{9}\)

const esStringNumerico = (valor) => {
    return (typeof valor==="string" || valor instanceof String) && /^\d+$/.test(valor);
};         //Forma rápida y común para cadenas normales || Detectar instancias creadas con new String()

const aKelvin = (celsius) => celsius + 273.15;
const aFharenheit = (grados) => grados * 9/5 + 32;



const parrafo = document.createElement("p");
parrafo.textContent = String(aKelvin())




console.log( aKelvin(14) );
console.log( aFharenheit(14) );
*/

    const inputCelsius = document.getElementById("celsius");
    const btnConvertir = document.getElementById("btnConvertir");
    const salida = document.getElementById("salida");

    function convertirTemperatura() {
        const valorTexto = inputCelsius.value;

        // 1. Validar que no esté vacío, que no tenga espacios y que sea un número válido (entero o decimal)
        const esNumeroValido = valorTexto !== "" && !/\s/.test(valorTexto) && !Number.isNaN(Number(valorTexto));

        if (!esNumeroValido) {
            const mensajeError = "Error: Por favor ingresa un dato numérico válido (sin letras ni espacios).";
            
            // Mostrar error en DOM y consola
            salida.innerHTML = `<p style="color: red;">${mensajeError}</p>`;
            console.error(mensajeError);

            // Limpiar el input y enfocarlo para volver a solicitar el dato
            inputCelsius.value = "";
            inputCelsius.focus();
            return;
        }

        // 2. Convertir el dato a tipo Number y realizar los cálculos
        const celsius = Number(valorTexto);
        const kelvin = celsius + 273.15;
        const fahrenheit = (celsius * 9 / 5) + 32;

        // 3. Imprimir ambos resultados por el DOM
        salida.innerHTML = `
            <p>Grados Kelvin: <strong>${kelvin}</strong></p>
            <p>Grados Fahrenheit: <strong>${fahrenheit}</strong></p>
        `;

        // 4. Imprimir ambos resultados por consola
        console.log(`Entrada: ${celsius}`);
        console.log(`Grados Kelvin: ${kelvin}`);
        console.log(`Grados Fahrenheit: ${fahrenheit}`);
    }

    // Ejecutar al hacer clic en el botón
    btnConvertir.addEventListener("click", convertirTemperatura);

    // También permitir presionar "Enter" dentro del input
    inputCelsius.addEventListener("keypress", (e) => {
        if (e.key === "Enter") convertirTemperatura();
    });