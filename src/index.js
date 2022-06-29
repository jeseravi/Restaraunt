import{generateElement} from "./generateElement.js";
import{homeContent} from "./home.js";
import{menuContent} from "./menu.js";
import{contactContent} from "./contact.js";

generateElement("div","header","","content","header","")
generateElement("div","mainContentContainer","","content","mainContentContainer","")
generateElement("div","mainContent","","mainContentContainer","mainContent","")

generateElement("div","homeTab","Home","header","homeTab","tab")
generateElement("div","homeTab","Menu","header","menuTab","tab")
generateElement("div","homeTab","Contact","header","contactTab","tab")

homeContent();

let homeListener = document.getElementById("homeTab");
homeListener.addEventListener("click",function(event){

    homeContent();

})

let menuListener = document.getElementById("menuTab");
menuListener.addEventListener("click",function(event){

    menuContent();

})

let contactListener = document.getElementById("contactTab");
contactListener.addEventListener("click",function(event){

    contactContent();

})