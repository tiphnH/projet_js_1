// Appeler l'heure locale
clock();

//fonction pour afficher l'heure
function clock() {

    //date
    const date = new Date();// récupère date actuelle
    const hours = ((date.getHours() + 11) % 12 + 1); /*récupère les heures actuelles. */
    const minutes = date.getMinutes();/* 
    récupère les minutes */
    const seconds = date.getSeconds();/*récupère les secondes*/

    //degrès, quand on a 12 = 360°, 360 / 12 = 30,
    const hour = hours * 30;
    console.log(hours);
    const minute = minutes * 6; /* 360/ 60=6*/
    const second = seconds * 6;

    //Afficher
    document.querySelector('.hour').style.transform = `rotate(${hour}deg)`;

    document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;

    document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;
};

//Interval
setInterval(clock, 1000);