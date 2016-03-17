// Create BankAccount class
// Allow constructor function to take balance
//


class BankAccount {
	constructor (balance) {
		this.balance = typeof balance === 'number' ? balance : 0;
	}
	// Deposit (amount)
	deposit (amount) {
		if (typeof amount === 'number') {
			this.balance += amount;
			return true;
		} else {
			console.log("Deposit amount must be a number!");
			return false;
		}
	}
	// Withdraw (amount)
	withdrawal (amount) {
		if (typeof amount === 'number') {
			this.balance -= amount;
			return this.balance;
		} else {
			console.log("Withdrawal amount must be a number!");
			return false;
		}
	}
	//printBalance ()
	printBalance () {
		console.log("Your balance is: $" + this.balance);
	}
}

var account = new BankAccount(100);
account.deposit(100);
account.withdrawal(10);
account.printBalance();

var account2 = new BankAccount('sdfsag');
account2.deposit('andrew');
account2.withdrawal(true);
account2.printBalance();






