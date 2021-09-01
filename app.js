const inputTextArea = document.querySelector("#input")
const translateButton = document.querySelector("#translate-button")
const outputTextArea = document.querySelector("#output")

function getURL(text){
    return 'https://api.funtranslations.com/translate/valyrian.json?text=' + text;
}

function errorHandler(error){
    console.log("Error occured: ",error)
    alert("Couldn't reach server!! Please try again after some time")
}

function translate(text){

    fetch(getURL(text))
        .then(response => response.json())
        .then(json =>{
            outputTextArea.value = json.contents.translated;
        })
        .catch(errorHandler)

}

translateButton.addEventListener('click',function(){
    translate(inputTextArea.value); 
})