
let delay = -0.4;
function createCard(date,day,games) {
    delay=delay + 0.4;
    return `
    <div class="card" style="animation-delay:${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
               ${games}
            </ul>
        </div>  
    `
}

function createGame(country1, hour, country2) {
    return `
        <li>
            <img src="./assets/icon-${country1}.svg" alt="Logo da bandeira do ${country1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${country2}.svg" alt="Logo da bandeira da ${country2}">
        </li>
    `
    
}
document.querySelector('#cards').innerHTML=
  
    createCard("24/11","quinta",
    createGame("switzerland","07:00","cameroon") +
    createGame("brazil","16:00","serbia")) +

    createCard("28/11","segunda", createGame("brazil",'13:00',"switzerland")) +

    createCard("02/12","sexta", createGame("cameroon",'16:00',"brazil"))

