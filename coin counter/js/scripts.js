function convertToCents(moneyEntered){
  return moneyEntered * 100;
}

function quarters(change){
  return Math.floor(change/25);
}

function dimes(change){
  return Math.floor(change/10);
}

function nickels(change){
  return Math.floor(change/5);
}

function pennies(change){
  return change/1;
}

function sumOfCoins(quarters, dimes, nickels){
  return ((quarters * 25)+(dimes * 10)+(nickels * 5));
} 


function changeCounter(change){
  const numberOfQuarters = quarters(change);
  const changeMinusQuarters = (change - (numberOfQuarters * 25));
  const numberOfDimes = dimes(changeMinusQuarters);
  const changeMinusDimes = (changeMinusQuarters - (numberOfDimes * 10));
  const numberOfNickels = nickels(changeMinusDimes);
  const changeMinusNickels = (changeMinusDimes - (numberOfNickels * 5));
  const numberOfPennies = pennies(changeMinusNickels);
  return `Your change is ${numberOfQuarters} Quarters, ${numberOfDimes} Dimes, ${numberOfNickels} Nickels, ${numberOfPennies} Pennies.`
}



function changeCounter2(change){
  const currentMoney = change;//499
  const numberOfQuarters = quarters(currentMoney);//19
  return function innerFunction(){
    const currentMoney1 = (currentMoney - (numberOfQuarters*25)); // 499 - 19/25 = 96cents
    const numberOfDimes = dimes(currentMoney1);
    return function innerFunction() {
      const currentMoney2 = (currentMoney1 - (numberOfDimes*10));
      const numberOfNickels = nickels(currentMoney2);
      return function innerFunction() {
        const currentMoney3 = (currentMoney2 - (numberOfNickels*5));
        const numberOfPennies = pennies(currentMoney3);
        return `Your change is ${numberOfQuarters} Quarters, ${numberOfDimes} Dimes, ${numberOfNickels} Nickles, ${numberOfPennies} Pennies.`;
      }
    }
  } 
}


$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    const moneyEntered = parseFloat($("#money").val());
    const change = convertToCents(moneyEntered);
    const change1 = changeCounter(change);
    const change2 = changeCounter2(change)()();

    $("#output").text(change2);
  });
});
