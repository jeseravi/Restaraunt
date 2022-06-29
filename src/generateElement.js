export function generateElement(){

    let createDiv = document.createElement("div");
    createDiv.setAttribute("id","testid");
    createDiv.setAttribute("class","testClass");
    createDiv.innerHTML="testing html";
    document.getElementById("content").appendChild(createDiv);
}