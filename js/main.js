import { lionButton } from "./ButtonClass";
import { oursButton } from "./ButtonClass";
import { koalaButton } from "./ButtonClass";
import { girafeButton } from "./ButtonClass";

import { createAudioElement } from "./utils";
import { handleButtonClick } from "./utils";
import { resetHandleAudio } from "./utils";

const lionBtn = document.getElementById('lion');

lionBtn.addEventListener('click', function () {
    handleButtonClick('lion');
    lionButton();
    createAudioElement('./audio/lion.mp3', 'savane', 'lion');

});

const oursBtn = document.getElementById('ours');

oursBtn.addEventListener('click', function () {
    handleButtonClick('ours')
    oursButton();
    createAudioElement('./audio/ours.mp3', 'montagne', 'ours');
});

const koalaBtn = document.getElementById('koala');

koalaBtn.addEventListener('click', function () {
    handleButtonClick('koala')
    koalaButton();
    createAudioElement('./audio/koala.mp3', 'australie', 'koala');
})

const girafeBtn = document.getElementById('girafe');

girafeBtn.addEventListener('click', function () {
    handleButtonClick('girafe')
    girafeButton();
    createAudioElement('./audio/girafe.mp3', 'savaneNigth', 'girafe');
})

const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', function () {
    ['savane', 'savaneNigth', 'montagne', 'australie'].forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            container.innerHTML = '';

        }
    });
    resetHandleAudio();
});

