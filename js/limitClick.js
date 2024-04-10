let clickCount = {}; // Objet pour stocker le nombre de clics pour chaque bouton

export function handleButtonClick(buttonId) {
    if (clickCount[buttonId] === undefined || clickCount[buttonId] < 3) {
        clickCount[buttonId] = (clickCount[buttonId] || 0) + 1;
    } else {
        buttonId.removeEventListener('click', handleButtonClick);
        alert("Vous avez atteint le nombre maximal de clics pour le bouton", buttonId);
    }
}