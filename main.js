'use strict';

/*funzioni */
// gestione griglia
function handleGrid(counterMax, mainContainer, typeOfHtmlTag, classAddContent){
    for(let i = 1; i <= counterMax; i++){

        const content = document.createElement(typeOfHtmlTag);
        content.classList.add(classAddContent);
        content.innerHTML +=`<div>${i}</div>`;
        mainContainer.append(content);
    }
}

// gestione click per ogni casella
function handleClick(box, index,classAdd) {
    box.addEventListener('click', function () {

    box.classList.add(classAdd);
    // lo incremento di 1 perche parte da zero ma la conta inizia da 1
    console.log(`il numero cliccato è: ${index + 1}`);
    });
}

// funzione reset
function resetPlay(){
    mainContainer.innerHTML = '';
}

// numeri random
function boomb(cellNumbers) {
    const arrayRandom = [];
    
    while (arrayRandom.length < 16) {

        let random = Math.floor(Math.random() * cellNumbers + 1);

        if (!arrayRandom.includes(random)) {
            arrayRandom.push(random);
        }
    }
    console.log(arrayRandom);
    return (arrayRandom);
}


/*fine funzioni */

// alert('selezionare la difficoltà e poi per iniziare a giocare premi il pulsante play'); //LEVO ALERT PER FLUIDITA POI LO REINSERISCO

// insrisco l'id della select in una variabile con la classe del button
const select = document.getElementById('difficult');
const button = document.querySelector('.button');
// contenitore div principale 
const mainContainer = document.querySelector('.main-container');
const  typeOfHtmlTag = 'div';

// evento click button
// evento click button
let click= false;
button.addEventListener('click', function(){
    resetPlay();

    if(difficult.value === 'easy'){     //difficoltà hard
        const counter = 100;
        const randomNumber = boomb(counter);
        const classAddContent = 'box-uno';

        handleGrid(counter, mainContainer,  typeOfHtmlTag, classAddContent);
    
        // click per box
        const box = document.querySelectorAll('.box-uno');
        const classAdd = 'click-col';

        for (let i = 0; i < box.length; i++) {
            handleClick(box[i], i, classAdd);
            // aggiungo evento per click su celle random
            box[i].addEventListener('click', function () {
            
                if (randomNumber.includes(parseInt(box[i].textContent))) {
                    alert('Hai cliccato su un numero sbagliato. Il gioco è stato bloccato.');
                    resetPlay();
                }else{
                    alert('complimenti! hai vinto la partita')
                }
            });
        }
        
    }

    //difficoltà normal
    if(difficult.value === 'normal'){   
        const counter = 81;
        const randomNumber = boomb(counter);
        const classAddContent = 'box-due';

        handleGrid(counter, mainContainer,  typeOfHtmlTag, classAddContent);
       
        // click per box
        const box = document.querySelectorAll('.box-due');
        const classAdd = 'click-col';

        for (let i = 0; i < box.length; i++) {
            handleClick(box[i], i, classAdd);
            // aggiungo evento per click su celle random
            box[i].addEventListener('click', function () {
            
                if (randomNumber.includes(parseInt(box[i].textContent))) {
                    alert('Hai cliccato su un numero sbagliato. Il gioco è stato bloccato.');
                    resetPlay();
                }else{
                    alert('complimenti! hai vinto la partita')
                }
            });
        }
    }

    //difficoltà easy
     if(difficult.value === 'hard'){      
        const counter = 49;
        const randomNumber = boomb(counter);
        const classAddContent = 'box-tre';

        handleGrid(counter, mainContainer,  typeOfHtmlTag, classAddContent);
       
        // click per box
        const box = document.querySelectorAll('.box-tre');
        const classAdd = 'click-col';

        for (let i = 0; i < box.length; i++) {
            handleClick(box[i], i, classAdd);
            // aggiungo evento per click su celle random
            box[i].addEventListener('click', function () {
            
                if (randomNumber.includes(parseInt(box[i].textContent))) {
                    alert('Hai cliccato su un numero sbagliato. il gioco verrà riavviato premi play per giocare ');
                    resetPlay();
                }else{
                    alert('complimenti! hai vinto la partita')
                }
            });
        }
        
    }
});

