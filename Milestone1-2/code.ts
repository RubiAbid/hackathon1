const  languagesList= document.getElementById("languages-list") as HTMLElement;
const toggleButton = document.getElementById("toggle-button") as HTMLButtonElement;

toggleButton.addEventListener("click", ()=> {
    if (languagesList.style.display === "none") {
        languagesList.style.display = "block";
    } else {
        languagesList.style.display = "none";
    }
});
