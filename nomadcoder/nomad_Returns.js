const age = 96;
function calculatorKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculatorKrAge(age);

console.log(krAge);

const calculator={
    plus: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    multiple: function(a,b)
    {
        return a*b;
    },
    divide: function(a,b)
    {
        return a/b;
    },
    power: function(a,b)
    {
        return a**b;
    },
};

const plusResult= calculator.plus(2,3);
const minusResult= calculator.minus(2,3);
const multipleResult= calculator.multiple(2,3);
const divideResult= calculator.divide(2,3);
const powerResult=calculator.power(2,3);

