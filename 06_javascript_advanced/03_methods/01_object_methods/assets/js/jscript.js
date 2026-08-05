'use strict';

const bob = {
    firstName: 'Bob',
    lastName: 'Smith',
    age: 39,

    print: printInfo,
};

const david = {
    firstName: 'David',
    lastName: 'Monteiro',
    age: 29,

    print: printInfo,
};


function printInfo(user) {
    const {firstName, lastName, age = 0} = this;
    const message = `!!!${firstName} ${lastName} is ${age}!!!`;
    
    console.log(message);
}

bob.print();
david.print();

/*
<p class="separado">
                <span>Resumo:</span> podemos estar criando um metodo dentro de nosso funcao com uma acao controlada para que ela realize algo que desejemos e essa funcao pode estar sendo compartilhada com outros objetos e para isso ao inves de simplesmente como no exemplo de nosso codigo onde usamos o <span>destruturing</span> ao inves de fazer o convencional dela receber o parametro/argumento desejado, podemos estar passando o <span>this</span> fazendo com que possamos estar utilizando esse mesmo metodo criado em diferentes objetos.
            </p>
*/