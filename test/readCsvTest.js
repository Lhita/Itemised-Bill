var assert = require("assert");
var readCsv = require("../modules/readCsv");


describe ('read ItemisedBill csv', function(){

  it('should read & return file content', function(done){
    assert.equal(readCsv.readCSV("../ItemisedBill.csv").length, 35);
    done();
  });
});
