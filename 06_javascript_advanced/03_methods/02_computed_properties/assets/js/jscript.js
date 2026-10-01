'use strict';

const admin = {
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
        const parts = value.split(' ');

        // Verificacao onde se houver menos de duas partes, nao havera a mudanca
        if(parts.length < 2) {
            return;
        }

        // separamos em arrays por espaco
        this.firstName = parts[0];
        this.lastName = parts[1];
    },

    firstName: 'David',
    lastName: 'Monteiro',

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

congratulate(admin);

admin.fullName = 'Suzana Santos';

congratulate(admin);


function congratulate(user) {
    console.log(`Hi ${user.fullName}`);
}

console.log(admin.firstName);
