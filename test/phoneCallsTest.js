var assert = require('assert');
var phoneCalls= require("../modules/phoneCalls");
var readCsv = require("../modules/readCsv");


describe('get all phone calls from a specific service Provider', function(){

  it('should return a list of calls from  MTN', function(done){
     var bills = readCsv.readCSV("../ItemisedBill.csv");
     assert.equal(phoneCalls.getPhoneCalls(bills, 'MTN').length, 16);
     done();
  });

    it('should return a list of calls from  Vodacom', function(done){
       var bills = readCsv.readCSV("../ItemisedBill.csv");
       assert.equal(phoneCalls.getPhoneCalls(bills, 'Vodacom').length, 8);
       done();
  });

  it('should return a list of calls from  CellC', function(done){
     var bills = readCsv.readCSV("../ItemisedBill.csv");
     assert.equal(phoneCalls.getPhoneCalls(bills, 'CellC').length, 11);
     done();
  });
});
