

let vacationCalc = document.getElementById('vacationCalc');

  vacationCalc.addEventListener('submit', calcExpenses);


  function getValues () {
    let destino = document.getElementById('destino').value ;
    let presupuesto = document.getElementById('presupuesto').value ;
    let alojamiento = document.getElementById('alojamiento').value ;
    let transporte = document.getElementById('transporte').value ;
    let comida = document.getElementById('comida').value ;

    return { destino, presupuesto, alojamiento, transporte, comida }


  }

  function calcExpenses (e) {
    e.preventDefault()

    const { destino, presupuesto, alojamiento, transporte, comida} = getValues();

    let expences = parseInt(alojamiento) + parseInt(transporte) + parseInt(comida) ;
  
    let balance = presupuesto - expences;

    UI(destino, presupuesto, balance);

    

  }



  function UI (destino, presupuesto, balance) {
 
    let pCalculator = document.querySelectorAll(".p-calculator");
    let dDestino = document.querySelector(".d-destiny")
    let dPresupuesto = document.querySelector(".d-budget")
    let dBalance = document.querySelector(".d-balance")
    
    dDestino.textContent = destino;
    dPresupuesto.textContent = presupuesto;
    dBalance.textContent = balance;

    pCalculator.appendchild(dDestino);
    pCalculator.appendchild(dPresupuesto);
    pCalculator.appendchild(dBalance);

    

  }

