// def si c'est un bébé ou non
import { RandomSize } from "./randomSize.js";

export function isBaby() {
    const taille = RandomSize();

    if (taille < (2.5 * 200)) {
        return true;
    } else {
        return false;
    }
}
