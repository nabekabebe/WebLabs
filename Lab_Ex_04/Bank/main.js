const debub = {
  balance: 200,
  withdraw: function (amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      alert("Can't withdraw low price!");
    }
  },
  deposit: function (amount) {
    this.balance += amount;
  },
  getBalance: function () {
    return this.balance;
  },
  transfer_money(amount, bank) {
    bank.deposit(amount);
    this.withdraw(amount);
  },
};
const wegagen = {
  balance: 400,
  withdraw: function (amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      alert("Can't withdraw low price!");
    }
  },
  deposit: function (amount) {
    this.balance += amount;
  },
  getBalance: function () {
    return this.balance;
  },
  transfer_money(amount, bank) {
    bank.deposit(amount);
    this.withdraw(amount);
  },
};
const cooperative = {
  balance: 0,
  withdraw: function (amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      alert("Can't withdraw low price!");
    }
  },
  deposit: function (amount) {
    this.balance += amount;
  },
  getBalance: function () {
    return this.balance;
  },
  transfer_money(amount, bank) {
    bank.deposit(amount);
    this.withdraw(amount);
  },
};

(function () {
  while (true) {
    const my_bank = prompt(
      'Choose your bank:  (a) wegagen (b) cooperative (c)debub'
    );
    let bk;
    if (my_bank == 'a') {
      bk = wegagen;
    } else if (my_bank == 'b') {
      bk = cooperative;
    } else {
      bk = debub;
    }
    const operation = prompt(
      'What you want to do?\n (a) Withdraw (b) See Balance\n (c) Deposit (d) Transfer\n (q) Quit: '
    );

    if (operation == 'a') {
      let amount = prompt('Enter amount: ');
      bk.withdraw(parseFloat(amount));
    } else if (operation == 'b') {
      alert(bk.getBalance());
    } else if (operation == 'c') {
      let amount = prompt('Enter amount: ');
      bk.deposit(parseFloat(amount));
    } else if (operation == 'd') {
      if (my_bank == 'a') {
        const next_bank = prompt(
          'Choose bank to send to:  (a) cooperative (b) debub '
        );
        let amount = parseFloat(prompt('enter amount'));
        if (next_bank == 'a') {
          bk.transfer_money(amount, cooperative);
        } else {
          bk.transfer_money(amount, debub);
        }
      } else if (my_bank == 'b') {
        const next_bank = prompt(
          'Choose bank to send to:  (a) wegagen (b) debub'
        );
        let amount = parseFloat(prompt('enter amount'));
        if (next_bank == 'a') {
          bk.transfer_money(amount, wegagen);
        } else {
          bk.transfer_money(amount, debub);
        }
      } else if (my_bank == 'c') {
        const next_bank = prompt(
          'Choose bank to send to:  (a) wegagen (b) cooperative'
        );
        let amount = parseFloat(prompt('enter amount'));
        if (next_bank == 'a') {
          bk.transfer_money(amount, wegagen);
        } else {
          bk.transfer_money(amount, cooperative);
        }
      }
    } else if (operation == 'q') {
      break;
    }
  }
})();
