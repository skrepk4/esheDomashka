const user = {
    name: "John",
    age: 30,
    hobby: "reading",
    premium: true,
};
  
user.mood = "happy";
  
user.hobby = "skydiving";
  
user.premium = false;
  
for (const key of Object.keys(user)) {
    const value = user[key];
    console.log(`${key}: ${value}`);
}

//-----------------------------

function countProps(obj) {
    const keys = Object.keys(obj);
    return keys.length;
}

console.log(countProps(user));

//--------------------

function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = "";
  
for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
    maxTasks = tasks;
    bestEmployee = name;
      }
    }
  return bestEmployee;
}
  
const employees = {
    Anna: 29,
    David: 35,
    Lisa: 40,
};
console.log(findBestEmployee(employees)); 

//--------------------

function countTotalSalary(employees) {
    const salaries = Object.values(employees);
    let totalSalary = 0;
  
for (const salary of salaries) {
    totalSalary += salary;
    }
    return totalSalary;
}  
const salaries = {
    Anna: 5000,
    David: 7000,
    Lisa: 8000,
};
console.log(countTotalSalary(salaries));

//---------------------------

function getAllPropValues(arr, prop) {
    const propValues = [];
  
for (const obj of arr) {
    const { [prop]: value } = obj;
    if (value !== undefined) {
    propValues.push(value);
    }
    }
  return propValues;
  }

const products = [
    { name: "Laptop", price: 1000, quantity: 4 },
    { name: "Phone", price: 500, quantity: 10 },
    { name: "Tablet", price: 800, quantity: 5 },
];
console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "quantity")); 

//----------------------

const account = {
balance: 0,
transactions: [],
createTransaction(amount, type) {
    return {
    id: this.transactions.length + 1, 
    amount,
    type,
    date: new Date().toISOString(), 
    };
},
  
deposit(amount) {
    if (amount <= 0) {
    console.log("Сума повинна бути більше 0");
        return;
    }
    const transaction = this.createTransaction(amount, "deposit");
    this.transactions.push(transaction);
    this.balance += amount;
    console.log(`Депозит на суму ${amount} виконано`);
},
  
withdraw(amount) {
    if (amount > this.balance) {
    console.log("Недостатньо коштів на рахунку");
        return;
    }
    if (amount <= 0) {
    console.log("Сума повинна бути більше 0");
        return;
    }
    const transaction = this.createTransaction(amount, "withdraw");
    this.transactions.push(transaction);
    this.balance -= amount;
    console.log(`Зняття на суму ${amount} виконано.`);
},
  

getBalance() {
    console.log(`Ваш поточний баланс: ${this.balance}`);
    return this.balance;
},
  

getTransactionHistory() {
    console.log("Історія транзакцій:");
    for (const { id, amount, type, date } of this.transactions) {
    console.log(`ID: ${id}, Тип: ${type}, Сума: ${amount}, Дата: ${date}`);
    }
},
  
getTransactionDetails(id) {
    const transaction = this.transactions.find((tx) => tx.id === id);
    if (!transaction) {
    console.log("Транзакцію з таким ID не знайдено");
    return null;
    }
    const { amount, type, date } = transaction;
    console.log(`Транзакція ID: ${id}, Тип: ${type}, Сума: ${amount}, Дата: ${date}`);
    return transaction;
},
};
  
account.deposit(1000); 
account.deposit(500); 
account.withdraw(300); 
account.getBalance(); 
account.getTransactionHistory(); 
account.getTransactionDetails(2); 
account.withdraw(1500); 
account.getBalance();