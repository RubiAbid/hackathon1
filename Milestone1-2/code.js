var languagesList = document.getElementById("languages-list");
var toggleButton = document.getElementById("toggle-button");
toggleButton.addEventListener("click", function () {
    if (languagesList.style.display === "none") {
        languagesList.style.display = "block";
    }
    else {
        languagesList.style.display = "none";
    }
});
