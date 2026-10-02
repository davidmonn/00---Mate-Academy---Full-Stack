const today = new Date();

// Adiciona 30 dias à data atual
today.setDate(today.getDate() + 30);

console.log(
    today.getDate() // Mostra o dia do mês após a alteração
);

// Altera o ano da data para 2024
today.setFullYear(2024);

console.log(
    today.getFullYear() // Mostra o ano atualizado
);

// Adiciona mais 15 dias à data já modificada
today.setDate(today.getDate() + 15);

console.log(
    today.getDate() // Mostra o dia do mês após a nova alteração
);