var inputBox = document.querySelector("#writeText");
var btnClick = document.querySelector("#btn-translate");
var outputBox = document.querySelector("#translateText");

var requestURL = "https://api.funtranslations.com/translate/minion.json";

function newURL(text){
    return requestURL+"?" + "text=" + text;
}

function errorHandler(error){
    console.log("Error occured :", error);
    alert("An error has occured, please refresh or try again after sometime if the problem persists.");
}

function clickHandler(){
    var inputText = inputBox.value;
    fetch(newURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedTExt = json.contents.translated;
        outputBox.innerText = translatedTExt;
    })
    .catch(errorHandler);
}



btnClick.addEventListener("click", clickHandler);