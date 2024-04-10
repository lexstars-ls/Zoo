import { lionButton } from "./lion";
import { handleButtonClick } from "./limitClick";

const lionBtn = document.getElementById('lion');

lionBtn.addEventListener('click', function() {
    handleButtonClick('lion'); // Vérifie le nombre de clics avant d'appeler lionButton
    lionButton(); // Appelle lionButton seulement si le nombre de clics est inférieur à 3
});