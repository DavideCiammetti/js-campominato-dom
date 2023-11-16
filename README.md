# le bombe 
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. 
nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

problema = creare numero randoma da 1 a 16 nel range di difficolta maaa quel numero non può ripetersi 

esempio:

array [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
per validare questo array posso incociarlo

## svolgimento 
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

## game over
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


