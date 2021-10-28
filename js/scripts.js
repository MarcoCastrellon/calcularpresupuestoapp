

let vacationCalc = document.getElementById('vacationCalc');

  vacationCalc.addEventListener('submit', calcExpenses);


  function getValues () {
    let destiny = document.getElementById('destiny').value ;
    let budget = document.getElementById('budget').value ;
    let acomodation = document.getElementById('acomodation').value ;
    let transport = document.getElementById('transport').value ;
    let food = document.getElementById('food').value ;

    return { destiny, budget, acomodation, transport, food }


  }

  function calcExpenses (e) {
    e.preventDefault()

    const { destiny, budget, acomodation, transport, food } = getValues();

    let expences = parseInt(acomodation) + parseInt(transport) + parseInt(food) ;
  
    let balance = budget - expences;

    UI(destiny, budget, balance);


  }



  function UI (destiny, budget, balance) {
 
    let pCalculator = document.querySelectorAll(".p-calculator");
    let dDestiny = document.querySelector(".d-destiny")
    let dBudget = document.querySelector(".d-budget")
    let dBalance = document.querySelector(".d-balance")
    
    dDestiny.textContent = destiny;
    dBudget.textContent = budget;
    dBalance.textContent = balance;

    pCalculator.appendchild(dDestiny);
    pCalculator.appendchild(dBudget);
    pCalculator.appendchild(dBalance);

    

  }

