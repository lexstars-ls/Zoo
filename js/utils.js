// utils tire un chiffre random > def si c'est un enfant ou non
export function utils() {
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


