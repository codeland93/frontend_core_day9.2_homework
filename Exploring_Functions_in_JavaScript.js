let balance = 0;

function deposit(amount) {
    balance += amount;
    console.log(`Deposited: $${amount}. New balance: $${balance}`);
}

deposit(500);

function withdraw(amount) {
  if (amount <= balance) {
      balance -= amount;
      console.log(`Withdrew: $${amount}. New balance: $${balance}`);
  } else {
      console.log("Insufficient balance.");
  }
}

withdraw(200);

function checkBalance() {
  console.log(`Your current balance is: $${balance}`);
}

checkBalance();
