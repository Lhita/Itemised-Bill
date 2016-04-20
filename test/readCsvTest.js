var assert = require("assert");
var readCsv = require("../modules/readCsv");
var phoneCalls= require("../modules/phoneCalls");

describe ('read ItemisedBill csv', function(){

  it('should read & return file content', function(done){
    assert.equal(readCsv.readCSV("../ItemisedBill.csv").length, 35);
    done();
  });
});

describe('get all phone calls from service Provider', function(){
  it('should return a list of calls from  MTN', function(){
     var billMap = readCsv.readCSV("../ItemisedBill.csv");
     assert.equal(phoneCalls.getPhoneCalls(billMap, 'MTN').length, 16);
  });
});
