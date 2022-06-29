import{generateElement} from "./generateElement.js";
import{homeContent} from "./home.js";

generateElement("div","header","","content","header","")
generateElement("div","mainContentContainer","","content","mainContentContainer","")
generateElement("div","mainContent","","mainContentContainer","mainContent","")

generateElement("div","homeTab","Home","header","homeTab","tab")
generateElement("div","homeTab","Menu","header","menuTab","tab")
generateElement("div","homeTab","Contact","header","contactTab","tab")

let testListener = document.getElementById("homeTab");
testListener.addEventListener("click",function(event){

    homeContent();

})