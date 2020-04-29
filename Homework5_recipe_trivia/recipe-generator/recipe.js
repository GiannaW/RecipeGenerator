(function(){
  "use strict";
  window.addEventListener("load", init);

  function init(){
    console.log("This is working");
    let wordButton = document.getElementById("fetch-num");
    console.log(wordButton);
    wordButton.addEventListener("click", getWord);
  }

  function getWord(){
    let wordBox = document.getElementById("word-box");
    let word = wordBox.value;
    console.log(wordBox);
    console.log(word);
    let url = "/Users/jamesblair/Desktop/Web_Programming/CSC-435/Homework5_recipe_trivia/recipe-generator/Reciepe.html"+ word;
    console.log(url);
    fetch(url)
      .then(checkStatus)
      .then(resp => resp.json())
      .then(handleResponse)
      .catch(handleError);
  }
})();
