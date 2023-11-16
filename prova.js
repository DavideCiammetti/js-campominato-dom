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
    return mainContainer;
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

// numeri random genero bombe 
function boomb(cellNumbers) {
    const arrayRandom = [];
    
    while (arrayRandom.length < 16) {

        let random = Math.floor(Math.random() * cellNumbers + 1);
        // se i numeri random non sono inclusi allora li inserisce
        if (!arrayRandom.includes(random)) {
            arrayRandom.push(random);
        }
    }
    console.log(arrayRandom);
    return (arrayRandom);
}

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||fine funzioni||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

// insrisco l'id della select in una variabile con la classe del button
const select = document.getElementById('difficult');
const button = document.querySelector('.button');
// contenitore div principale 
const mainContainer = document.querySelector('.main-container');
const  typeOfHtmlTag = 'div';

// evento click button
let click= false;
button.addEventListener('click', function(){
    resetPlay();


    // prima condizione per uno dei 3 casi
    if(difficult.value === 'easy'){     //difficoltà easy
        const counter = 100;
        const randomNumber = boomb(counter);
        const classAddContent = 'box-uno';
            // funzione stampa campo da gioco
        handleGrid(counter, mainContainer,  typeOfHtmlTag, classAddContent);

        // click per box
        const box = document.querySelectorAll('.box-uno');
        const classAdd = 'click-col';

         // aggiunta punteggio
         const footer = document.querySelector('.punteggio');
         const span = document.createElement('span');
         span.innerHTML = 'il tuo punteggio è:';
         footer.append(span);
         let j = 0;

        for (let i = 0; i < box.length; i++) {
            handleClick(box[i], i, classAdd);
            // aggiungo evento per click su celle random
            box[i].addEventListener('click', function () {
            
                if (randomNumber.includes(parseInt(box[i].textContent))) {
                    resetPlay();
                    const finalScore = document.querySelector('.main-container');
                    const score = document.createElement('span');
                    span.innerHTML = 'il tuo punteggio è:';
                    span.textContent = 'mi dispiace hai perso, Il tuo punteggio finale è: ' + j;
                    finalScore.append(span);
                } else{
                    j++ - 1;
                    span.textContent = 'Il tuo punteggio è: ' + j;
                }

                    if (j === counter - 16) {
                        resetPlay();
                        const finalScore = document.querySelector('.main-container');
                        const score = document.createElement('span');
                        span.innerHTML = 'il tuo punteggio è:';
                        span.textContent = 'complimenti hai vinto, Il tuo punteggio finale è: ' + j;
                        finalScore.append(span);
                    }
            });
        }
        
    }

    //seconda condizione
    if(difficult.value === 'normal'){       //difficoltà normal
        const counter = 81;
        const randomNumber = boomb(counter);
        const classAddContent = 'box-due';
        // funzione stampa campo da gioco
        handleGrid(counter, mainContainer,  typeOfHtmlTag, classAddContent);
       
        // click per box
        const box = document.querySelectorAll('.box-due');
        const classAdd = 'click-col';
        // aggiunta punteggio
        const footer = document.querySelector('.punteggio');
        const span = document.createElement('span');
        span.innerHTML = 'il tuo punteggio è:';
        footer.append(span);
        let j = 0;
  
        for (let i = 0; i < box.length; i++) {
        
            handleClick(box[i], i, classAdd);

            box[i].addEventListener('click', function () {        // aggiungo evento per click su celle random

                if (randomNumber.includes(parseInt(box[i].textContent))) {
                    resetPlay();
                    const finalScore = document.querySelector('.main-container');
                    const score = document.createElement('span');
                    span.innerHTML = 'il tuo punteggio è:';
                    span.textContent = 'mi dispiace hai perso, Il tuo punteggio finale è: ' + j;
                    finalScore.append(span);
                } else{
                    j++ - 1;
                    span.textContent = 'Il tuo punteggio è: ' + j;
                }

                    if (j === counter - 16) {
                        resetPlay();
                        const finalScore = document.querySelector('.main-container');
                        const score = document.createElement('span');
                        span.innerHTML = 'il tuo punteggio è:';
                        span.textContent = 'complimenti hai vinto, Il tuo punteggio finale è: ' + j;
                        finalScore.append(span);
                    }
           
            });
    
        }
      
    }

    //terza condizione 
     if(difficult.value === 'hard'){        //difficoltà hard
        const counter = 49;
        const randomNumber = boomb(counter);
        const classAddContent = 'box-tre';
          // funzione stampa campo da gioco
        handleGrid(counter, mainContainer,  typeOfHtmlTag, classAddContent);
       
        // click per box
        const box = document.querySelectorAll('.box-tre');
        const classAdd = 'click-col';
         // aggiunta punteggio
         const footer = document.querySelector('.punteggio');
         const span = document.createElement('span');
         span.innerHTML = 'il tuo punteggio è:';
         footer.append(span);
         let j = 0;

        for (let i = 0; i < box.length; i++) {
            handleClick(box[i], i, classAdd);
            // aggiungo evento per click su celle random
            box[i].addEventListener('click', function () {
            
                if (randomNumber.includes(parseInt(box[i].textContent))) {
                    resetPlay();
                    const finalScore = document.querySelector('.main-container');
                    const score = document.createElement('span');
                    span.innerHTML = 'il tuo punteggio è:';
                    span.textContent = 'mi dispiace hai perso, Il tuo punteggio finale è: ' + j;
                    finalScore.append(span);
                } else{
                    j++ - 1;
                    span.textContent = 'Il tuo punteggio è: ' + j;
                }

                    if (j === counter - 16) {
                        resetPlay();
                        const finalScore = document.querySelector('.main-container');
                        const score = document.createElement('span');
                        span.innerHTML = 'il tuo punteggio è:';
                        span.textContent = 'complimenti hai vinto, Il tuo punteggio finale è: ' + j;
                        finalScore.append(span);
                    }
            });
        }
        
    }
});

