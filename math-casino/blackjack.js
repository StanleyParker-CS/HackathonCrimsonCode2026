//============================
//BlackJack Game Logic
//============================


const newImage = document.createElement('img');
newImage.style.border = 'none';

let deck = [];
let playerHand = [];
let dealerHand = [];
let playerMoney = 0;
let currentBet = 0;

//==========================================================
// Things for the currency counter
const countDisplay = document.getElementById("playerMoney");

function updateDisplay() {
    countDisplay.textContent = playerMoney;
}

updateDisplay();
//==========================================================


function createstand(){

}
function createhit(){
        const imgBtn = document.createElement("img");
        imgBtn.src = "https://art.pixilart.com/sr5zb860cb1a39aws3.png";
        imgBtn.classList.add("card");
        imgBtn.style.cursor = "pointer";
        imgBtn.style.width = "100px";
        imgBtn.onclick = function() {
            return addCardToUser();
        }

        const container = document.getElementById('img');
        if (container) {
        container.appendChild(imgBtn);
        }
        else {
        document.body.appendChild(imgBtn);
        }
    }      

function removeImages(){
    const removeCards = document.querySelectorAll(".card");
    removeCards.forEach(card => {
        card.remove();
    });
}
function createImage1(url) {
    const img = document.createElement("img");
    img.src = url;
    img.classList.add("card");
    img.style.width = "50px";
    img.style.height = "auto";
    img.style.display = "two-per-line"
    img.style.margin = "5px";
    const container = document.getElementById('img');
    if (container) {
    container.appendChild(img);
    }
    else {
    document.body.appendChild(img);
    }
    img.animate([
        {opacity: 0, transform: 'translateY(20px)'},
        {opacity: 1, transform: 'translateY(0)'}
    ], {
        duration: 300,
        easing: 'ease-out'
    })
 }
 function createImage(url) {
    const img = document.createElement("img");
    img.src = url;
    img.classList.add("card");
    img.style.width = "50px";
    img.style.height = "auto";
    img.style.display = "two-per-line"
    img.style.margin = "5px";
    const container = document.getElementById('img');
    if (container) {
    container.appendChild(img);
    }
    else {
    document.body.appendChild(img);
    }
    img.animate([
        {opacity: 0, transform: 'translateY(20px)'},
        {opacity: 1, transform: 'translateY(0)'}
    ], {
        duration: 400,
        easing: 'ease-out'
    })
 }
 
/*
function createDeck()
{
    let s = 0;
    let v = 0;

    deck = [];
    let suits= ["♠","♥","♦","♣"];
    //let values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

    for(s = 0;s<suits.length;s++) // populate deck
    {
        for(v = 0;v<suits.length;v++)
        {
            deck.push
            ({
                value: value,
                value: suits

            });
        }
    }
}
*/
function twoRandomCards()
{
    let cardOne = Math.floor(Math.random() * 11) + 1;
    let cardTwo = Math.floor(Math.random() * 10) + 1;
    const newP = document.createElement("p");
    newP.innerText = "Player Cards";
    document.body.appendChild(newP);
    newP.classList.add("card")
    if (cardOne == 1) {
        let url = "https://art.pixilart.com/sr5zb3c81c4831aws3.png";
        createImage1(url);
    }
    if (cardOne == 2) {
        let url = "https://art.pixilart.com/sr5z15170a342daws3.png";
        createImage1(url);
    }
    if (cardOne == 3) {
        let url = "https://art.pixilart.com/sr5zd586b97495aws3.png";
        createImage1(url);
    }
    if (cardOne == 4) {
        let url = "https://art.pixilart.com/sr5z8051f6ac04aws3.png";
        createImage1(url);
    }
    if (cardOne == 5) {
        let url = "https://art.pixilart.com/sr5zc5974a6679aws3.png";
        createImage1(url);
    }
    if (cardOne == 6) {
        let url = "https://art.pixilart.com/sr5zfea1854737aws3.png";
        createImage1(url);
    } 
    if (cardOne == 7) {
        let url = "https://art.pixilart.com/sr5za80bc969bdaws3.png"
        createImage1(url);
    }
    if (cardOne == 8) {
        let url = "https://art.pixilart.com/sr5zf77fe02ef7aws3.png"
        createImage1(url);
    }
    if (cardOne == 9) {
        let url = "https://art.pixilart.com/sr5z741f574c09aws3.png"
        createImage1(url);
    }
    if (cardOne == 10) {
        let url = "https://art.pixilart.com/sr5z6577efff8daws3.png"
        createImage1(url);
    }
    if (cardOne == 11) {
        let url = "https://art.pixilart.com/sr5z956055a3eaaws3.png"
        createImage1(url);
    }
    if (cardTwo == 1) {
        let url = "https://art.pixilart.com/sr5zb3c81c4831aws3.png";
        createImage(url);
    }
    if (cardTwo == 2) {
        let url = "https://art.pixilart.com/sr5z15170a342daws3.png";
        createImage(url);
    }
    if (cardTwo == 3) {
        let url = "https://art.pixilart.com/sr5zd586b97495aws3.png";
        createImage(url);
    }
    if (cardTwo == 4) {
        let url = "https://art.pixilart.com/sr5z8051f6ac04aws3.png";
        createImage(url);
    }
    if (cardTwo == 5) {
        let url = "https://art.pixilart.com/sr5zc5974a6679aws3.png";
        createImage(url);
    }
    if (cardTwo == 6) {
        let url = "https://art.pixilart.com/sr5zfea1854737aws3.png";
        createImage(url);
    } 
    if (cardTwo == 7) {
        let url = "https://art.pixilart.com/sr5za80bc969bdaws3.png"
        createImage(url);
    }
    if (cardTwo == 8) {
        let url = "https://art.pixilart.com/sr5zf77fe02ef7aws3.png"
        createImage(url);
    }
    if (cardTwo == 9) {
        let url = "https://art.pixilart.com/sr5z741f574c09aws3.png"
        createImage(url);
    }
    if (cardTwo == 10) {
        let url = "https://art.pixilart.com/sr5z6577efff8daws3.png"
        createImage(url);
    }
    if (cardTwo == 11) {
        let url = "https://art.pixilart.com/sr5z956055a3eaaws3.png"
        createImage(url);
    }
    
    return [cardOne, cardTwo];
}
function twoRandomCardsD()
{
    let cardOne = Math.floor(Math.random() * 11) + 1;
    let cardTwo = Math.floor(Math.random() * 10) + 1;
    const newP = document.createElement("p");
    newP.innerText = "Dealer Cards";
    document.body.appendChild(newP);
    newP.classList.add("card")
    if (cardOne == 1) {
        let url = "https://art.pixilart.com/sr5zb3c81c4831aws3.png";
        createImage1(url);
    }
    if (cardOne == 2) {
        let url = "https://art.pixilart.com/sr5z15170a342daws3.png";
        createImage1(url);
    }
    if (cardOne == 3) {
        let url = "https://art.pixilart.com/sr5zd586b97495aws3.png";
        createImage1(url);
    }
    if (cardOne == 4) {
        let url = "https://art.pixilart.com/sr5z8051f6ac04aws3.png";
        createImage1(url);
    }
    if (cardOne == 5) {
        let url = "https://art.pixilart.com/sr5zc5974a6679aws3.png";
        createImage1(url);
    }
    if (cardOne == 6) {
        let url = "https://art.pixilart.com/sr5zfea1854737aws3.png";
        createImage1(url);
    } 
    if (cardOne == 7) {
        let url = "https://art.pixilart.com/sr5za80bc969bdaws3.png"
        createImage1(url);
    }
    if (cardOne == 8) {
        let url = "https://art.pixilart.com/sr5zf77fe02ef7aws3.png"
        createImage1(url);
    }
    if (cardOne == 9) {
        let url = "https://art.pixilart.com/sr5z741f574c09aws3.png"
        createImage1(url);
    }
    if (cardOne == 10) {
        let url = "https://art.pixilart.com/sr5z6577efff8daws3.png"
        createImage1(url);
    }
    if (cardOne == 11) {
        let url = "https://art.pixilart.com/sr5z956055a3eaaws3.png"
        createImage1(url);
    }
    let url = "https://art.pixilart.com/sr5zba197e218aaws3.png";
    createImage(url);
    return [cardOne, cardTwo];
}

function addCardToUser()
{
    let cardOne = Math.floor(Math.random() * 10) + 1;
    userTotal += cardOne;
    const newP = document.createElement("p");
    newP.innerText = userTotal;
    document.body.appendChild(newP);
    newP.classList.add("card");
    if (cardOne == 1) {
        let url = "https://art.pixilart.com/sr5zb3c81c4831aws3.png";
        createImage1(url);
    }
    if (cardOne == 2) {
        let url = "https://art.pixilart.com/sr5z15170a342daws3.png";
        createImage1(url);
    }
    if (cardOne == 3) {
        let url = "https://art.pixilart.com/sr5zd586b97495aws3.png";
        createImage1(url);
    }
    if (cardOne == 4) {
        let url = "https://art.pixilart.com/sr5z8051f6ac04aws3.png";
        createImage1(url);
    }
    if (cardOne == 5) {
        let url = "https://art.pixilart.com/sr5zc5974a6679aws3.png";
        createImage1(url);
    }
    if (cardOne == 6) {
        let url = "https://art.pixilart.com/sr5zfea1854737aws3.png";
        createImage1(url);
    } 
    if (cardOne == 7) {
        let url = "https://art.pixilart.com/sr5za80bc969bdaws3.png"
        createImage1(url);
    }
    if (cardOne == 8) {
        let url = "https://art.pixilart.com/sr5zf77fe02ef7aws3.png"
        createImage1(url);
    }
    if (cardOne == 9) {
        let url = "https://art.pixilart.com/sr5z741f574c09aws3.png"
        createImage1(url);
    }
    if (cardOne == 10) {
        let url = "https://art.pixilart.com/sr5z6577efff8daws3.png"
        createImage1(url);
    }
    if (cardOne == 11) {
        let url = "https://art.pixilart.com/sr5z956055a3eaaws3.png"
        createImage1(url);
    }
    return total;
}



function dealerUser(card1, card2, total)
{
    while(total <= 17)
    {
        let extraCard = Math.floor(Math.random() * 10) + 1;
        total += extraCard;
    }
    return total;
}



function checkWon(userTotal, dealerTotal) {
    if(userTotal > dealerTotal) return 1;
    else if(userTotal < dealerTotal) return 0;
    else return -1; // tie
}
const userTotal = 2;

function runBlackJack()
{
    userTotal.value = 2;
    let userWon = false;
    let dealerWon = false;
    let tie = false;
    let won = 0;
    let [userCard1,userCard2] = twoRandomCards();
    let [dealerCard1,dealerCard2] = twoRandomCardsD();
    let value = 0;
    userTotal = userCard1+userCard2;
    let dealerTotal = dealerCard1 + dealerCard2
    let act;

    //ask the user for a bet
    // assign currentBet to that

    
    createhit();
    dealerTotal = dealerUser(dealerCard1,dealerCard2,dealerTotal);
    if (userTotal > 21) {
        const newP = document.createElement("p");
        newP.innerText = "Dealer Won";
        document.body.appendChild(newP);
        newP.classList.add("card");
    }

    
    if(!dealerWon)
    {
        won = checkWon(userTotal, dealerTotal);
        if(won == 1)
        {
            userWon = true;
            playerMoney += currentBet;
        }
        else if(won == 0)
        {
            playerMoney -= currentBet;
            dealerWon = true;
        }
        else if(won == -1)
        {
            tie = true;
        }
        updateDisplay();
    }
}