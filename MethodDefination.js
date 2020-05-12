con1=require('./Callingfn');
const readlineSync=require('readline-sync');

//defination for simpleoperation : add,sub,mul,divide,getremaindr,sqrt
function add(){
let x=readlineSync.questionInt("Enter a number ");
let y=readlineSync.questionInt("Enter a number ");
console.log("Result = "+(x+y));
}

function sub(){
  let x=readlineSync.questionInt("Enter a number");
  let you=readlineSync.questionInt("Enter a number");
  console.log("Result = "+(x-y));
}

function mul(){
  let x=readlineSync.questionInt("Enter a number ");
  let y=readlineSync.questionInt("Enter a number ");
  console.log("Result = "+(x*y));
}

function divide(){
  let x=readlineSync.questionInt("Enter a number ");
  let x=readlineSync.questionInt("Enter a number ");
  console.log("Result = "+(x/y));
  console.log("remainder = "+(x%y))
}
function squareroot(){
  let x=readlineSync.questionInt("Enter a number ");
  console.log("Result = "+Math.sqrt(x));
}

//aggregate fn
function aggfn(choice){
  const arrlen=readlineSync.questionInt("For how many numbers ? ");
  var a =[arrlen];
  for(let i=0;i<arrlen;i++)
    {
      a[i]=readlineSync.questionInt("Enter "+i+ " number = ");
    }
    switch(choice)
    {
        case 1:
          sum();
          break;
        case 2:
          avg();
        case 3:
          count();
          break;
        case 4:
          min();
          break;
        case 5:
          max();
          break;
        default:
          console.log("Enter a valid input");            
    }
}
//for aggregate fn

function sum(a){
  var sum=o;
  for(let i=0;i<arrlen;i++)
    {
      sum = sum +a[i];
    }
    console.log("Sum ="+sum);
  }
function avg(sum)
{
  var avg = (sum)/arrlen;
  console.log("average = "+avg);
}
function count(a){
  const tempnum=readlineSync.questionInt("Enter the number which you want count for :")
  let count=0;
  for(i=0;i<arrlen;i++)
  {
    if(tempnum==a[i]){
      count++;
    }

  }
  console.log("Count for "+tempnum+ " = "+count);
}
function min(a){
console.log("Smallest no = "+Math.min(a));
}
function max(a){
console.log("Greatest no = "+Math.max(a));
}

function fact(num)
{
    if (num === 0)
      { return 1; }
    else
      { return num * rFact( num - 1 ); }

}
// Trigno
function sin(angle)
{
  console.log("Sin("+angle+") = "+Math.sin(angle));
}
function cos(angle)
{
  console.log("Sin("+angle+") = "+Math.cos(angle));
}
function tan(angle)
{
  console.log("Sin("+angle+") = "+Math.tan(angle));
}
function cosec(angle)
{
  console.log("Sin("+angle+") = "+(1/Math.sin(angle)));
}
function sec(angle)
{
  console.log("Sin("+angle+") = "+(1/Math.cos(angle)));
}
function cot(angle)
{
  console.log("Sin("+angle+") = "+(1/Math.tan(angle)));
}

//for equation

function solve(choice)
{
 /* if(choice==1)
  {
    console.log("ax + bx = c")
    console.log("dx + ey = f")
    let a = readlineSync.questionInt("Enter value of a = ");
    let b = readlineSync.questionInt("Enter value of b = ");
    let c = readlineSync.questionInt("Enter value of c = ");
    let d = readlineSync.questionInt("Enter value of d = ");
    let e = readlineSync.questionInt("Enter value of e = ");
    let f = readlineSync.questionInt("Enter value of f = ");


  }
 */
  if(choice==2)
  {
    console.log("for quadratic equation")
    let a = readlineSync.questionInt("Enter value of a = ");
    let b = readlineSync.questionInt("Enter value of b = ");
    let c = readlineSync.questionInt("Enter value of c = ");
    var discriminant = function (a, b, c) {
      return (b*b - 4*a*c);
}

var root1 = (-b - Math.sqrt(discriminant(a,b,c)))/(2*a);

var root2 = (-b + Math.sqrt(discriminant(a,b,c)))/(2*a);

console.log("Roots are "+root1 + "  " + root2);
  }
  else
  {
    console.log("Wrong input");
  }
}


module.exports = con1;
