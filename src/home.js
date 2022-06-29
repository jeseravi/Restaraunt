import{clearContent} from "./contentClear.js";
import{generateElement} from "./generateElement.js";

export function homeContent(){

    clearContent();

    generateElement("div","welcomeContainer","","mainContent","welcomeContainer","")
    generateElement("div","welcome","Welcome","welcomeContainer","","welcome")
    generateElement("div","welcome","to","welcomeContainer","smallWelcome","welcome")
    generateElement("div","welcome","Himalayan Dumplings!","welcomeContainer","","welcome")
    generateElement("hr","welcome","","welcomeContainer","","welcomeHr")
    generateElement("button","welcome","Check out our Menu","welcomeContainer","welcomeButton","welcome")
    

    
}