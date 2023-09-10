const vocabulary = {
    english: [
        { word: "Hello", translation: "Hola" },
        { word: "Apple", translation: "Manzana" },
        // Add more words and translations
    ],
    spanish: [
        { word: "Hola", translation: "Hello" },
        { word: "Manzana", translation: "Apple" },
        // Add more words and translations
    ],
};

const languageSelect = document.getElementById("language-select");
const flashcardWord = document.getElementById("word");
const flashcardTranslation = document.getElementById("translation");
const revealButton = document.getElementById("reveal-button");

languageSelect.addEventListener("change", () => {
    const selectedLanguage = languageSelect.value;
    const randomIndex = Math.floor(Math.random() * vocabulary[selectedLanguage].length);
    const wordObj = vocabulary[selectedLanguage][randomIndex];
    flashcardWord.textContent = wordObj.word;
    flashcardTranslation.textContent = wordObj.translation;
    flashcardTranslation.style.display = "none";
});

revealButton.addEventListener("click", () => {
    flashcardTranslation.style.display = "block";
});
