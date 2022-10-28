class MemoryGame {
    constructor() {
        this.userName = "";
        this.points = 10;
        this.deck = [
            "./img/harmonia.svg",
            "./img/poder.svg",
            "./img/projetar.svg",
            "./img/refletir.svg",
            "./img/harmonia.svg",
            "./img/poder.svg",
            "./img/projetar.svg",
            "./img/refletir.svg"
        ];
        this.cardSelected = []
    }

    renderDeck() {
        // embaralhamento das minhas cartas -> array
        let sortDeck = this.deck.sort(() => {
            return Math.random() - 0.5
        })

        let boardGame = document.getElementById("board")

        // a criação de cada carta
        sortDeck.forEach((img) => {
            let frontImg = document.createElement("img") // <img src="" />
            frontImg.src = img // <img src="./img/refletir.svg" />
            frontImg.classList.add("hide") // <img src="img" class="hide" />
            frontImg.classList.add("frontCard") // <img src="img" class="hide frontCard" />

            let backImg = document.createElement("img")
            backImg.src = "./img/fe.svg"
            backImg.classList.add("show")
            backImg.classList.add("backCard") // <img src="./img/fe.svg" class="show backCard" />

            boardGame.appendChild(frontImg)
            boardGame.appendChild(backImg)
        })
    }

    // virar as cartas do jogo
    flip(card) {
        this.cardSelected.push(card)

        if(this.cardSelected.length === 2) {
            console.log("Duas cartas foram selecionadas.")
            
            // checar se os pares são iguais ou diferentes
            this.checkPair()
        }
    }

    //checar as cartas iguais ou não
    checkPair() {
        // if("./img/img.svg" === "./img/img.svg")
        if(this.cardSelected[0].src === this.cardSelected[1].src) {
            console.log("As cartas são iguais")

            // classe turn identificar as cartas que vão permanecer viradas
            this.cardSelected[0].classList.add("turn")
            this.cardSelected[1].classList.add("turn")

            this.checkStatus()
            this.cardSelected = []
        } else {
            console.log("As cartas são diferentes :(")

            // this.points = this.points - 2
            this.points -= 2

            setTimeout(() => {
                // hide = display none || show = display block ou inline (padrão do elemento)
                this.cardSelected[0].className = "hide frontCard"
                this.cardSelected[1].className = "hide frontCard"

                this.cardSelected[0].nextElementSibling.classList = "show backCard"
                this.cardSelected[1].nextElementSibling.classList = "show backCard"

                this.checkStatus()
                this.cardSelected = []
            }, 1000)
        }
    }

    // responsável por finalizar o jogo
    checkStatus() {
        // caso o jogador perca
        if(this.points === 0) {
            let frontCard = document.querySelectorAll(".frontCard")
            let backCard = document.querySelectorAll(".backCard")

            frontCard.forEach((frontCard) => {
                frontCard.className = "show"
            })

            backCard.forEach((backCard) => {
                backCard.className = "hide"
            })

            console.log("Você perdeu :(")            
        }

        const turnCards = document.querySelectorAll(".turn")

        // quando o jogador ganhou a partida
        if(turnCards.length === 8) {
            let boardGame = document.getElementById("board")
            let gameScore = document.getElementById("gameScore")

            boardGame.style.display = "none"
            gameScore.style.display = "none"

            alert("Você ganhou :)")
        }
    }
}