var fs =require('fs');

exports.getPhoneCalls = function(bills, serviceProvider){
 var callList = [];
       for(var i= 0; i< bills.length; i ++){
         var calls = bills[i];
           if(calls.provider === serviceProvider && calls !== undefined){
             callList.push({"provider": calls.provider,
                            "number": calls.number,
                          "duration": calls.duration
                        });
           }
       }
     return callList;

};
