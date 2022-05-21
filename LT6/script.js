var content = document.getElementById("content")
var button = document.getElementById("Show")

button.onclick = function(){
    if(content.className == "open") {
        content.className = ""
        button.innerHTML = "Show"
    } else {
        content.className = "open"
        button.innerHTML = "Close"
    }
}