class Carro {
    constructor(marca, modelo, categoria, ano, km, valor) {
        this.marca = marca;
        this.modelo = modelo;
        this.categoria = categoria;
        this.ano = ano;
        this.km = km;
        this.valor = valor;
    }
}

function Get() {
    return fetch('https://apigenerator.dronahq.com/api/NZE8zHIb/carro')
        .then(response => response.json())
        .then(data => console.log("Carros disponíveis:", data))
        .catch(error => console.error("Erro ao buscar carros:", error));
}

function GetById(id) {
    return fetch(`https://apigenerator.dronahq.com/api/NZE8zHIb/carro/${id}`)
        .then(response => response.json())
        .then(data => console.log("Carro encontrado:", data))
        .catch(error => console.error(`Erro ao buscar carro com ID ${id}:`, error));
}

async function Post(carro) {
    const response = await fetch('https://apigenerator.dronahq.com/api/NZE8zHIb/carro', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(carro),
    });
    const result = await response.json();
    console.log("Carro adicionado:", result);
}

async function Put(id, carro) {
    const response = await fetch(`https://apigenerator.dronahq.com/api/NZE8zHIb/carro/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(carro),
    });
    const result = await response.json();
    console.log("Carro atualizado:", result);
}

async function Delete(id) {
    const response = await fetch(`https://apigenerator.dronahq.com/api/NZE8zHIb/carro/${id}`, {
        method: "DELETE",
    });
    if (response.ok) {
        console.log(`Carro com ID ${id} removido com sucesso.`);
    } else {
        console.error(`Erro ao remover carro com ID ${id}:`, response.statusText);
    }
}

// Exemplo de uso
(async () => {
    // GET: Lista todos os carros
    await Get();

    // GET by ID: Busca carro com ID 1
    await GetById(1);

    // POST: Adiciona um novo carro
    const novoCarro = new Carro("Toyota", "Corolla", "Sedan", 2020, 30000, 80000);
    await Post(novoCarro);

    // PUT: Atualiza um carro existente (exemplo com ID 1)
    const carroAtualizado = new Carro("Toyota", "Corolla Altis", "Sedan", 2021, 20000, 90000);
    await Put(1, carroAtualizado);

    // DELETE: Remove um carro existente (exemplo com ID 2)
    await Delete(3);
})();
