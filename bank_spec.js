var Bank = require('../bank');
var Account = require('../account');
var assert = require('chai').assert;                                         

describe('bank', function() {

  beforeEach(function(){
    bank = new Bank('S&D Banking Corp');
    account1 = new Account('Jim', 1000, 'personal');
    account2 = new Account('Beverley', 999, 'business');
  })

  it('should start have accounts', function() {
    bank.add(account1);
    bank.add(account2);
    assert.equal(2, bank.accounts.length);
  })

  it('should be possible to add an account to the accounts array', function() {

  })



  
})