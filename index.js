const index1=require('./MethodDefination');
const index=require('./Callingfn');
const readlineSync = require('readline-sync');
const color=require('colors');
console.log(color.red("Welcome to the Scientific calculator"));
console.log("Enter 1 for Simple Operation : add,sub,mul,divide,getRemainder,sqrt");
console.log("Enter 2 for Trignometric Operation: sin,cos,tan,cosec,sec,cot");
console.log("Enter 3 for floor and ceiling");
console.log("Enter 4 for power to the x");
console.log("Enter 5 for log to the base 10");
console.log("Enter 6 for absolute value of a given number ");
console.log("Enter 7 for Aggregate operations : sum,avg,count,min,max");
console.log("Entet 8 for a factorial of a given number");
console.log("Enter 9 for equations : Quadratic");
console.log("Enter 10 to Exit");
choice = readlineSync.questionInt();

switch(choice){
    case 1:
            simpleOperation();
            break
    case 2:
            Trigno();
            break;
    case 3:
            floorCeiling();
            break;
    case 4:
            power();
            break;
    case 5:
            logBase10();
            break;
    case 6:
            absval();
            break;
    case 7:
            aggregatefn();
            break;
    case 8:
            factorial();
            break;
    case 9:
            equation();
            break;
    case 10:
            break;
    default:
            console.log("Enter a valid input");



}
