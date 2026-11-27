const readline = require('readline');

// Configuramos la interfaz para leer y escribir en la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función auxiliar para pedir datos de forma síncrona con async/await
const preguntar = (texto) => {
    return new Promise((resolve) => rl.question(texto, resolve));
};

async function main() {
    const total = 3;
    const nums = [];

    for (let i = 0; i < total; ++i) {
        const entrada = await preguntar(`Ingresa el número ${i + 1}: `);
        nums.push(parseInt(entrada.trim(), 10));
    }

    const flag = (nums[0] === nums[1] && nums[0] === nums[2]);

    // En JS, .sort() ordena como texto por defecto; (a, b) => a - b ordena numéricamente
    nums.sort((a, b) => a - b);

    console.log(`${nums[total - 1]},${nums[1]},${nums[0]}`);
    console.log(`${nums[0]},${nums[1]},${nums[total - 1]}`);
    console.log("Numeros iguales: " + flag);

    rl.close();
}

main();
