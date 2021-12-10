// 1.input

// this is one way to take input and output in browser

// var username = prompt("give me usename")
// alert("this scripts works !!" + username)

// second way to take input and out put
// 2. input
// var username = prompt("give me usename")

// var welcomeMessage = "this scripts works !!" + username

// // output
// alert(welcomeMessage);

var btnTranslate = document.querySelector("#btn-translate");

// console.log(btnTranslate)
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// console.log(txtInput)

var serverURL =" https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(serverURL) {
    return serverURL + "?" + "text=" + txtInput.value
}


function errorHandler(){
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickHandler() {
    // console.log("clicked!");
    // console.log("input", txtInput.value);
    // var inputText = txtInput.value;  //taking input
    //calling server for processing
    fetch(getTranslationURL(serverURL))
        .then(response => response.json())
        .then(json =>{
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler)


