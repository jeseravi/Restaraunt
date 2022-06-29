import{clearContent} from "./contentClear.js";
import{generateElement} from "./generateElement.js";

export function contactContent(){

    clearContent();

    generateElement("div","menuContainer","","mainContent","menuContainer","")
    generateElement("div","menuTitle","Locations","menuContainer","menuTitle","")
    generateElement("hr","menuTitle","","menuContainer","menuHr","")
    generateElement("div","menuTitle","1245 Broadway, NYC","menuContainer","menuItem","")
    generateElement("div","menuTitle","385-187-1854 / nycmomo@himal.com","menuContainer","menuPrice","")
    generateElement("hr","menuTitle","","menuContainer","menuHr","")
    generateElement("div","menuTitle","5684 Buckhead, Atlanta","menuContainer","menuItem","")
    generateElement("div","menuTitle","597-467-1148 / atlmomo@himal.com","menuContainer","menuPrice","")

    
}