const match = new MemoryGame()

const startScreen = document.getElementById("startScreen")
const inputName = document.querySelector("#inputName")
const btnStart = document.getElementById("btnStart")
const gameScreen = document.querySelector("#gameScreen")
const gameName = document.getElementById("name")
const points = document.getElementById("points")

btnStart.addEventListener("click", (event) => {
    // se a função está recarregando a página use:
    event.preventDefault()

    if(inputName.value === "") {
        alert("Digite um nome para iniciar a jogada.")
        return
    }

    match.renderDeck()

    startScreen.style.display = "none"
    gameScreen.style.display = "flex"

    match.userName = inputName.value
    gameName.innerText = match.userName

    points.innerText = match.points

    settingUpGame()
})

// inicio da minha partida
function settingUpGame() {
    const allBackCards = document.querySelectorAll(".show")

    allBackCards.forEach((backCard) => {
        backCard.addEventListener("click", () => {
            let frontCard = backCard.previousElementSibling
    
            backCard.className = "hide backCard"
            frontCard.className = "show frontCard"
    
            match.flip(frontCard)

            points.innerText = match.points
        })
    })
}