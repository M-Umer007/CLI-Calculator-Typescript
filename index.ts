import inquirer from 'inquirer';

async function Question()
{
  const operatorQuestion = await inquirer.prompt(
    [  
     {
        type:"list",
          name:"operator",
           message:"Which operation you want to perform?",
            choices:["Addition","Subtraction","Multiplication","Division"],
      }
    ])
    const inputQuesion1=await inquirer.prompt(
      [
        {
          type:"number",
            name:"num1",
             message:"Enter your first number",
    }
  ])
    const inputQuesion2=await inquirer.prompt(
      [
        {
         type:"number",
          name:"num2",
            message:"Enter your second number",
    }
  ])
    if (isNaN(inputQuesion1.num1)||isNaN(inputQuesion2.num2)){
         console.log("enter correct number")
    }
    else
    {
      let result;
      switch (operatorQuestion.operator) 
      {
        case "Addition":
            result= inputQuesion1.num1 + inputQuesion2.num2;
            break;
          case "Subtraction":
             result= inputQuesion1.num1 - inputQuesion2.num2;
               break;
            case "Multiplication":
               result= inputQuesion1.num1 * inputQuesion2.num2;
                break;
              case "Division":
                  result= inputQuesion1.num1 / inputQuesion2.num2;
                    break;
        
        default:
            console.log("Enter valid operator")
            break;
       }
       console.log(" Your answer for " + operatorQuestion.operator + " is " ,result)
    }
  }
Question()