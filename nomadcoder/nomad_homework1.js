const calculator = {
    plus: function(a,b){
        console.log(a+ "+" + b + "=" + (a+b));
    },
    minus: function(a,b){
        console.log(a+ "-" + b + "="+ (a-b));
    },
    multiple: function(a,b){
        console.log(a+ "*" + b + "=" + (a*b));
    },
    divide: function(a,b){
        console.log(a+ "/" + b + "=" + (a/b));
    },
    power: function power(a,b){
        console.log(a+ "^" + b + "=" + (a**b));
    },
};

calculator.plus(5,2);
calculator.minus(5,2);
calculator.multiple(5,2);
calculator.divide(5,2);
calculator.power(5,2);