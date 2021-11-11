let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let winEl = document.querySelector("#win-el")

//
let hasBlackJack = false
let isAlive = false
let message= ""
let sum = 0
let cards=[]
let checkVal=1

function randomCard(){
    let num = Math.floor(Math.random()*12)+1
    if(num === 1){
        return 11
    }else if(num>10){
        return 10
    }else{
        return num
    }
}

function renderGame(){
    sumEl.textContent = "Sum: "+sum
    if(sum<=20){
        isAlive = true
        messageEl.textContent="Do You want a new card ?"
    }else if(sum ===21){
        messageEl.textContent=""
        winEl.textContent="YOU GOT A BLACKJACK !!"
        hasBlackJack=true
    }else if(sum > 21){
        messageEl.textContent="You are Out !"
        isAlive = false
        checkVal = 2
    }
}

function reset(){
    checkVal = 1
    for(let i=0;i<cards.length;i++){
        cards.pop()
    }
    sum=0
    sumEl.textContent = "sum: "
    messageEl.textContent = "Start a new Game ?"
    cardEl.textContent = "Cards: "
    hasBlackJack = false
    isAlive = false
    sumEl.textContent = "Sum "
    winEl.textContent = ""

}

function startGame(){
    if(checkVal === 1 && hasBlackJack === false){
        checkVal=2
        let firstCard = randomCard()
        let secondCard = randomCard()
        isAlive = true
        sum = firstCard + secondCard
        cardEl.textContent += firstCard + " "
        cardEl.textContent += secondCard + " "
        cards.push(firstCard)
        cards.push(secondCard)
        renderGame()
    }
}

function newCard(){
    if(hasBlackJack === false && isAlive === true){
        let newCard = randomCard()
        cards.push(newCard)
        sum += newCard
        cardEl.textContent += newCard + " "
        renderGame()
    }
}
