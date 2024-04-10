import { isBaby } from "./utils";
import { Animal } from "./utils";

export function lionButton() {

    let lion = new Lion();
    console.log(lion);
}

class Lion extends Animal {
    constructor() {

        let imageLion = "";
        let audioLion = './audio/lion.mp3'

        if (isBaby()) {
            imageLion = './img/bebeLion.gif';
        } else {
            imageLion = './img/parentLion.gif';
        }


        super(imageLion, "savane", audioLion);
        console.log(imageLion);

        let image = document.createElement('img');
        image.src = imageLion;
        const container = document.getElementById('savane')
        container.appendChild(image);
    }

}

export function oursButton() {
    let ours = new Ours();
    console.log(ours)
}

class Ours extends Animal {
    constructor() {
        let imageOurs = "";
        if (isBaby()) {
            imageOurs = './img/bebeOurs.gif';
        } else {
            imageOurs = './img/parentOurs.gif';
        }

        super(imageOurs, "montagne", "rugissement")

        let image = document.createElement('img');
        image.src = imageOurs;
        const container = document.getElementById('montagne')
        container.appendChild(image);
    }
}

export function koalaButton() {
    let koala = new Koala();
    console.log(koala)
}

class Koala extends Animal {
    constructor() {
        let imageKoala = ""
        if (isBaby()) {
            imageKoala = './img/bebeKoala.gif';
        } else {
            imageKoala = './img/parentKoala.gif';
        }
        super(imageKoala, "australie", "rugissement")

        let image = document.createElement('img');
        image.src = imageKoala;
        const container = document.getElementById('australie')
        container.appendChild(image);
    }

}

export function girafeButton() {

    let girafe = new Girafe();
    console.log(girafe)
}

class Girafe extends Animal {
    constructor() {
        let imageGirafe = "";
        if (isBaby()) {
            imageGirafe = './img/bebeGirafe.gif';
        } else {
            imageGirafe = './img/parentGirafe.gif';
        }
        super(imageGirafe, "savane la nuit", "rugissement")

        let image = document.createElement('img')
        image.src = imageGirafe;
        const container = document.getElementById('savaneNigth')
        container.appendChild(image);
    }
}






