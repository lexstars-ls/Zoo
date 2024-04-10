// def si c'est un bébé ou non
import { RandomSize } from "./randomSize.js";

export function isBaby() {
    const taille = RandomSize();
   
    // bien faire attention a l'orde de la division!
    const tailleMaxBaby = 200 / 2.5;
    
    if (taille < tailleMaxBaby) {
        
        return true;
    } else {
        return false;
    }

}
