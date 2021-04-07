/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var account = new Account(this.nextAccountNumber, holder);
    account.deposit(balance);
    this.accounts.push(account);
    this.nextAccountNumber++;
    return account.number;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  }
  var total = 0;

  for (var i = 0; i < this.accounts.length; i++) {
    total += this.accounts[i].getBalance();
  }

  return total;
};

// Can I please keep this code? I created it on accident thinking I needed it
// function generateBankNum() {
//   var accountNum = '';
//   function getRandInt() {
//     return Math.floor(Math.random() * 10);
//   }

//   for (var i = 0; i < 14; i++) {
//     accountNum += getRandInt();
//   }
//   return +accountNum;
// }
