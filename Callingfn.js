var con=require('./MethodDefination');
function simpleOperation(){
    console.log("Enter your choice");
    console.count("1 : add \n 2 : sub \n 3 : mul \n 4 : divide and getRemainder \n 5 : Sqrt ");
    choice=readlineSync.questionInt();
    if(choice<6)
        {
            switch(choice)
            {
                case 1:
                    add();
                    break
                case 2:
                    sub();
                    break;
                case 3:
                    mul();
                    break;
                case 4:
                    divide();
                    break;
                case 5:
                    squareroot();
                default:
                    console.count("NO MATCH FOUND");

            }
        }

}
function trigno(){
    var angle=readlineSync.questionInt("Enter the value of angle");
    console.log("Enter choice");
    console.log("1 : sin \n 2 : cos \n 3 : tan \n 4 : cosec \n 5 : sec \n 6 : cot");
    const choice=readlineSync.questionInt();
    switch(choice){
        case 1:
            sin(angle);
            break;
        case 2:
            cos(angle);
            break;
        case 3:
            tan(angle);
            break;
        case 4:
             cosec(angle);
        case 5:
            sec(angle);
            break;
        case 6:
            cot(angle);
            break;
        default:
            console.log("INVALID INPUT");
    }
}

exports.floorCeiling=()=>{
    const number=readlineSync.questionInt("Enter a number");
    console.out("floor = "+Math.floor(number));
    console.out("ceiling ="+Math.ceil(number));
}
function power(){
    let n=readlineSync.questionInt("Enter number : ");
    var pow=readlineSync.questionInt("Enter power : ");
    console.log("Ans = "+Math.pow(n,pow));
}
function  logBase10(){
    let n=readlineSync.questionInt("Enter number : ");
    console.log("Ans = "+Math.log10(n));
}
function  absval(){
    var n=readlineSync.questionInt("Enter number : ");
    console.log("Absolute value = "+Math.abs(n));
}
function  aggregatefn()
{
    console.log("Enter choice");
    console.log("1 : Sum \n 2 : Avg \n 3 : count \n 4 : min \n 5 : max ");
    const choice=readlineSync.questionInt();
    const r = aggfn(choice);
    console.log("Answer ="+r);

}

function factorial(){
    let n=readlineSync.questionInt("Enter number : ");
   let facto= fact(n);
   console.log(facto);
}
function  equation(){
    console.log("Enter choice");
    console.log("1 : linear \n 2 : quadratic ");
    const choice=readlineSync.questionInt();
    solve(choice);
}

module.exports =con;