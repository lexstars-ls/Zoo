// page réservé a mes fonctions utilitaires

export class Animal {
    constructor(image, territoire, son) {
        this.image = image;
        this.territoire = territoire;
        this.son = son;
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function isBaby() {
    // random number between 40 - 200
    const size = Math.floor(Math.random() * 200) + 40;

    // bien faire attention a l'orde de la division!
    const tailleMaxBaby = 200 / 2.5;

    // def si c'est un bébé ou non

    if (size < tailleMaxBaby) {
        return true;
    } else {
        return false;
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let clickCount = {};

export function handleButtonClick(buttonId) {
    if (clickCount[buttonId] === undefined || clickCount[buttonId] < 3) {
        clickCount[buttonId] = (clickCount[buttonId] || 0) + 1;
    } else {
        alert("Vous avez atteint le nombre maximal de clics pour le bouton", buttonId);
        buttonId.removeEventListener('click', handleButtonClick);

    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// remet a 0 mes functions handleButtonClick et audioCreated
export function resetHandleAudio() {
    clickCount = {};
    audioCreated ={};
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// objt pour que chaque id est son état (impossible avec un bolléen)
let audioCreated = {};

export function createAudioElement(audioId, containerId, id) {
    if (!audioCreated[id]) {

        let audioElement = document.createElement('audio');
        audioElement.src = audioId;


        audioElement.controls = true;

        // lecture automatiquement
        audioElement.autoplay = true;

        //volume (0 à 1)
        audioElement.volume = 0;

        const container = document.getElementById(containerId);
        container.appendChild(audioElement);

        audioCreated[id] = true;
        // Si l'élément audio n'a pas déjà été créé pour cet id.
        // audio created devient true
    }
}

export function resetFunction (){
 
  const resetCLick = document.getElementById('tirageContainer');
  tirageContainer.querySelectorAll('.imgContainer').forEach(element => {
      element.remove();
  });
  const h2Result = document.querySelector('.h2Result');
  if (h2Result) {
      h2Result.remove();
  }
}