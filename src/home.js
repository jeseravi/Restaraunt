import{clearContent} from "./contentClear.js";
import{generateElement} from "./generateElement.js";

export function homeContent(){

    clearContent();

    generateElement("div","welcomeContainer","","mainContent","welcomeContainer","")
    generateElement("div","welcome","Welcome","welcomeContainer","","welcome")
    generateElement("div","welcome","to","welcomeContainer","smallWelcome","welcome")
    generateElement("div","welcome","Himalayan Dumplings!","welcomeContainer","","welcome")
    
}