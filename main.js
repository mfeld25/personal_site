function copyToClipboard(event) {
    let clickedElement = event.path[0];
    let parentElement = event.path[1];
    let [clickedX, clickedY] = [clickedElement.x, clickedElement.y];
    let text = parentElement.firstElementChild.innerHTML;
    navigator.clipboard.writeText(text)
    
    
    console.log(clickedX, clickedY)
    
    let p = document.createElement("p");
    
    
    p.style.position = "absolute"
    p.style.right = "-50px"
    p.style.bottom = "35px"
   

    const popUpText = document.createTextNode("Copied!");
    p.appendChild(popUpText)
    parentElement.appendChild(p)
    setTimeout(function() {parentElement.removeChild(p)}, 500)
    

}

// find width and height of copy image, create element that says "copied!"

document.querySelector("#img-copy-linkedin").onclick = copyToClipboard
document.querySelector("#img-copy-email").onclick = copyToClipboard

