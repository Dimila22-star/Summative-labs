let history =[]
let option;

while(option !=="4"){

    option = prompt(
        "calculator\n\n"+
        "1. do a calculation\n"+
        "2. view history\n"+
        "3. clear history\n"+
        "4. exit\n\n"+
        "Make a choice:"
    );

    if (option ==="1"){
        
        let firstnumber = Number(prompt("enter first number:"));
        let operator = prompt("Enter an operation(+,-,*,/):");
        let secondnumber = Number(prompt("enter second number:"));
        
        
        let result;


        if (operator ==="+"){
            result = firstnumber + secondnumber ;
        }
        else if (operator ==="-"){
            result = firstnumber - secondnumber ;
        }
        else if (operator ==="*"){
            result = firstnumber * secondnumber ;
        }
        else if (operator ==="/"){
            if (secondnumber === 0){
                alert("Error: Division by zero is not allowed.");
                continue;
            }
            result = firstnumber / secondnumber ;
        }

        else{
            alert("Invalid operator. Please use +, -, *, or /.");
        }

        if (result !== undefined) {
            alert("Result: " + result);
            history.push(`${firstnumber} ${operator} ${secondnumber} = ${result}`);
        }


    }
    else if (option ==="2"){
        if (history.length === 0) {
            alert("No history available.");
        } else {
            alert("Calculation History:\n" + history.join("\n"));
        }
    }

    else if (option ==="3"){
        history = [];
        alert("History cleared.");
    }
    else if (option ==="4"){
        alert("Exiting calculator.");
    }
    else{
        alert("Invalid option. Please choose a valid option.");
    }

}