class BankAccount {
  amount = [];

  constructor(name, money) {
    this.name = name;
    this.money = money;

    this.amount.push(`Initial: ${money}`);
  }

  getInfo() {
    return `Name: ${this.name}, Amount: ${this.money}`;
  }

  addMoney(amount, info) {
    this.money = this.money + amount;

    this.amount.push(`${info}: ${amount}`);
  }

  withdrawMoney(amount, info) {
    this.money = this.money - amount;

    this.amount.push(`${info}: -${amount}`);
  }

  getAccountHistory() {
    return this.amount;
  }
}

const dmytro = new BankAccount('Dmytro', 1000);
const pavel = new BankAccount('Pavel', 400);

console.log(
  pavel.getInfo()
);

dmytro.addMoney(2000, 'salary')
dmytro.withdrawMoney(500, 'new phone');

console.log(
  dmytro.getAccountHistory()
);
