var fs = require('fs');
exports.readCSV = function(fileName) {

var stream = fs.readFileSync(fileName);
    var list = stream.toString();
    //console.log(list);
    var rows = list.split('\r').slice(1);
//console.log(rows);
    var itemisedBill = rows.map(function(row){

        var fields = row.split(',');
        //console.log(fields);
        return  {
            date: fields[0],
            provider:fields[1],
            number:fields[2],
            duration:fields[3]
        }
    });
    itemisedBill.pop();
    console.log(itemisedBill);
    return itemisedBill;
};
