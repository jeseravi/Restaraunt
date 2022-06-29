
import{generateElement} from "./generateElement.js";

export function clearContent(){

    //remove contents of mainContent
    document.getElementById("mainContent").remove();

    //recreate mainContent div
    generateElement("div","mainContent","","mainContentContainer","mainContent","")
    
}

