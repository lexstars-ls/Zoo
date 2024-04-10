import { isBaby } from "./taille";
import { Animal } from "./Class";

export function lionButton() {
   
    let lion = new Lion();
    console.log(lion);
}

class Lion extends Animal {
    constructor() {
        
        let imageLion ="";
     
        
        if (isBaby()) {
            imageLion = './img/bebeLion.gif';
        } else {
            imageLion = './img/parentLion.gif';
        }


        super(imageLion, "afrique", "rugissement");
        console.log(imageLion);

        let image = document.createElement('img');
        image.src = imageLion;
        const container = document.getElementById('savane')
        container.appendChild(image);
    }
    
}






