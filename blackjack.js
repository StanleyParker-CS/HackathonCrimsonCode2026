//============================
//BlackJack Game Logic
//============================


const newImage = document.createElement('img');
newImage.style.border = 'none';
let userTotal = 0;
let dealerTotal = 0;
let deck = [];
let playerHand = [];
let dealerHand = [];
let playerMoney = 5;
let currentBet = 0;

//==========================================================
// Things for the currency counter
const countDisplay = document.getElementById("playerMoney");

function updateDisplay() {
    countDisplay.textContent = playerMoney;
}

updateDisplay();
//==========================================================

function checkBlackJack(userTotal){
    if (userTotal == 21) {
        const newP = document.createElement("p");
        newP.innerText = "Black Jack!";
        playerMoney = playerMoney*5/2
        document.body.appendChild(newP);
        newP.classList.add("card");
        updateDisplay();
    }
}
function DcheckBlackJack(dealerTotal){
    if (dealerTotal == 21) {
        const newP = document.createElement("p");
        newP.innerText = "Dealer Black Jack!";
        playerMoney = playerMoney*1/2
        document.body.appendChild(newP);
        newP.classList.add("card");
        updateDisplay();
    }
}
function DealerWins(){
    const newP = document.createElement("p");
    newP.innerText = "Dealer Wins";
    document.body.appendChild(newP);
    newP.classList.add("card");
}
function createstand(){
    const imgBtn = document.createElement("img");
    imgBtn.src = "https://art.pixilart.com/sr5z544806ae6aaws3.png";
    imgBtn.classList.add("card");
    imgBtn.style.cursor = "pointer";
    imgBtn.style.width = "100px";
    imgBtn.style.margin = "5px";
    imgBtn.display = "two-per-line";
    const container = document.getElementById('img');
    imgBtn.onclick = function() {
        if (userTotal < 22) {
        setstandtrue();
        }
    }
    if (container) {
    container.appendChild(imgBtn);
    }
    else {
    document.body.appendChild(imgBtn);
    }
}
function setstandtrue() {
    standcount = true;
    if (dealerTotal > userTotal && dealerTotal < 22) {
        const newP = document.createElement("p");
        newP.innerText = "Dealer wins!";
        playerMoney = playerMoney*1/2
        document.body.appendChild(newP);
        newP.classList.add("card");
        updateDisplay();
        
    }
    while (dealerTotal < 17 && dealerTotal < userTotal) {
        dealerTotal = dealerUser(dealerTotal);
        if (dealerTotal > userTotal) {
            const newP = document.createElement("p");
            newP.innerText = "Dealer wins!";
            playerMoney = playerMoney*1/2
            document.body.appendChild(newP);
            newP.classList.add("card");
            updateDisplay();
            break;
        }
        else if (!dealerTotal == userTotal){
            const newP = document.createElement("p");
            newP.innerText = "Player wins";
            playerMoney = playerMoney*2
            document.body.appendChild(newP);
            newP.classList.add("card");
            updateDisplay();
            break;
        }
    }
    if (dealerTotal > 21) {
        const newP = document.createElement("p");
        newP.innerText = "Player wins!";
        playerMoney = playerMoney*2
        document.body.appendChild(newP);
        newP.classList.add("card");
        updateDisplay();
    }
    if (dealerTotal > 17 && dealerTotal < userTotal) {
        const newP = document.createElement("p");
        newP.innerText = "Player wins!";
        playerMoney = playerMoney*2
        document.body.appendChild(newP);
        newP.classList.add("card");
        updateDisplay();
    }
    if (userTotal == dealerTotal && userTotal >= 17) {
        const newP = document.createElement("p");
        newP.innerText = "Push!";
        playerMoney = playerMoney*1
        document.body.appendChild(newP);
        newP.classList.add("card");
        updateDisplay();
    }
    return standcount = true;
}

function createhit(){
        const imgBtn = document.createElement("img");
        imgBtn.src = "https://art.pixilart.com/sr5zb860cb1a39aws3.png";
        imgBtn.classList.add("card");
        imgBtn.style.cursor = "pointer";
        imgBtn.style.width = "100px";
        imgBtn.display = "two-per-line";
        imgBtn.style.margin = "5px";
        imgBtn.onclick = function() {
            if (userTotal < 22 ) {
            addCardToUser();
        }
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
    const newP = document.createElement("p");
    newP.innerText = "Player New Card";
    document.body.appendChild(newP);
    newP.classList.add("card");
    userTotal = userTotal + cardOne;
    if (userTotal > 21) {
        const newP = document.createElement("p");
        newP.innerText = "Dealer Won!";
        document.body.appendChild(newP);
        newP.classList.add("card")
    }
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
}
function dealerUser(total)
{
    if (total > 0)
    {
        let cardOne = Math.floor(Math.random() * 10) + 1;
        total = dealerTotal += cardOne;
        dealerTotal = total;
        const newP = document.createElement("p");
        newP.innerText = "New dealer Cards";
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
        const newp2 = document.createElement("p");
            newp2.innerText = "dealer wins!";
            document.body.appendChild(newp2);
            newp2.classList.add("card")
        if (dealerTotal > userTotal && dealerTotal < 22) {
            const newp = document.createElement("p");
            newp.innerText = "dealer wins!";
            document.body.appendChild(newp);
            newp.classList.add("card")

        }
        else {
            const newp3 = document.createElement("p");
            newp3.innerText = "Player wins!";
            document.body.appendChild(newp3);
            newp3.classList.add("card")
        }
       
    }
    return total;
}
function runBlackJack()
{   
    const newP = document.createElement("p");
    newP.innerText = "Click Stand to continue the game \n dealer insurance!";
    playerMoney = playerMoney - 1;
    document.body.appendChild(newP);
    newP.classList.add("card");
    userTotal = 0;
    dealerTotal = 0;
    standcount = false;
    let [userCard1,userCard2] = twoRandomCards();
    let [dealerCard1,dealerCard2] = twoRandomCardsD();
    dealerTotal = dealerCard1 + dealerCard2
    userTotal = userCard1+userCard2
    checkBlackJack(userTotal);
    DcheckBlackJack(dealerTotal);
    updateDisplay();
}
