(function(){
  "use strict";
  window.addEventListener("load", init);

  function init(){
    console.log("This is working");
    let wordButton = document.getElementById("fetch-num");
    console.log(wordButton);
    wordButton.addEventListener("click", getWord);
    getWord();
  }

  function getWord(){
    let wordBox = document.getElementById("word-box");
    let word = wordBox.value;
    console.log(wordBox);
    console.log(word);
  }
})();
