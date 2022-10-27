class MemoryGame {
    constructor() {
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
        // "./img/img.svg" === "./img/img.svg"
        if(this.cardSelected[0].src === this.cardSelected[1].src) {
            console.log("As cartas são iguais")
        } else {
            console.log("As cartas são diferentes :(")
        }
    }
}