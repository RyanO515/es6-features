class BankAccount {
	constructor (balance) {
		this.balance = typeof balance === 'number' ? balance : 0;
	}
	set balance (val) {
		this._balance = val;
		this.balanceUpdatedOn = new Date();
	}
	get balance () {
		return this._balance;
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
		console.log(`Your balance is $${this.balance}!  Last updated on ${this.balanceUpdatedOn}`);
	}
}


// SavingAccounts class that extends BankAccount
// Override withdrawal to print message that you can't
// override deposit to print message call parent deposit method


class SavingsAccount extends BankAccount {
	constructor (balance) {
		super(balance);
	}
	deposit (amount) {
		if (super.deposit(amount)) {
			console.log(`Congrats, you saved $${amount}`);
		}
	}

	withdrawal () {
		console.log("Error: You may not withdraw funds from your savings account.");
		return false;
	}
}

var savingsAccount = new SavingsAccount(500);
savingsAccount.deposit(100);
savingsAccount.printBalance();
savingsAccount.withdrawal(25);
savingsAccount.printBalance();





// var account = new BankAccount(100);
// account.deposit(100);
// account.withdrawal(10);
// account.printBalance();

// var account2 = new BankAccount('sdfsag');
// account2.deposit('andrew');
// account2.withdrawal(true);
// account2.printBalance();

