var textArea = document.getElementById("textbox");
var remainCount = document.getElementById("textbox").getAttribute("maxlength");

var counterText = document.getElementById("chcounter");
var remainCh = document.getElementById("remainch");



chCounter();

textArea.addEventListener("keyup", () =>{
    chCounter();
});

function chCounter(){
    var chCount = textArea.value.length;

    counterText.innerText = chCount;
    remainCh.innerText = remainCount - chCount;   

}


