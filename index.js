#! /usr/bin/env node
import inquirer from "inquirer";
async function atmMachine() {
    let myBalance = 10000;
    let myPin = 12345;
    let pinAns = await inquirer.prompt([
        {
            name: "pin",
            message: "Enter Your PIN :\n\t\t",
            type: "number"
        }
    ]);
    if (pinAns.pin === myPin) {
        console.log("Welcome To The ATM Service..!\n\n");
        let opperation = await inquirer.prompt([
            {
                name: "opperationPerform",
                message: "What Opperation Do You Wanna Perform..?\n\n",
                type: "list",
                choices: ["Withdraw", "Deposite", "Check Balance"]
            }
        ]);
        if (opperation.opperationPerform === "Withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "withdrawAmount",
                    message: "How Much Amount Do You Wanna WithDraw..?\n\n",
                    type: "number"
                }
            ]);
            if (amountAns.withdrawAmount > myBalance) {
                myBalance -= amountAns.withdrawAmount;
                console.log("Your Amount Is Not Enogh To Do This Opperation..!\n\n");
            }
            if (amountAns.withdrawAmount <= myBalance) {
                myBalance -= amountAns.withdrawAmount;
                console.log(`Now, Your Current Balance is "${myBalance}".\n\n`);
            }
        }
        if (opperation.opperationPerform === "Deposite") {
            let amountAns = await inquirer.prompt([
                {
                    name: "depositeAmount",
                    message: "How Much Amount Do You Wanna WithDraw..?\n\n",
                    type: "number"
                }
            ]);
            myBalance += amountAns.depositeAmount;
            console.log(`Now, Your Current Balance is "${myBalance}".\n\n`);
        }
        if (opperation.opperationPerform === "Check Balance") {
            console.log(`Now, Your Current Balance is "${myBalance}".\n\n`);
        }
        let againAtm = await inquirer.prompt([
            {
                name: "retry",
                message: "Do You Wanna Use ATM Services Again :\n\t\t",
                type: "list",
                choices: ["Yes", "No"]
            }
        ]);
        if (againAtm.retry === "Yes") {
            atmMachine();
        }
        ;
        if (againAtm.retry === "No") {
            console.log("Thank You..!");
        }
        ;
    }
    else {
        console.log("Invalid PIN..!");
        let againAtm = await inquirer.prompt([
            {
                name: "retry",
                message: "Do You Wanna Try The PIN Again..?\n\t\t",
                type: "list",
                choices: ["Yes", "No"]
            }
        ]);
        if (againAtm.retry === "Yes") {
            atmMachine();
        }
        ;
        if (againAtm.retry === "No") {
            console.log("Thank You..!");
        }
        ;
    }
}
atmMachine();
