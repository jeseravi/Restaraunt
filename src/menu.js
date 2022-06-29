import{clearContent} from "./contentClear.js";
import{generateElement} from "./generateElement.js";

export function menuContent(){

    clearContent();

    generateElement("div","menuContainer","","mainContent","menuContainer","")
    generateElement("div","menuTitle","Menu","menuContainer","menuTitle","")
    generateElement("hr","menuTitle","","menuContainer","menuHr","")
    generateElement("div","menuTitle","Exotic Momo Special","menuContainer","menuItem","")
    generateElement("div","menuTitle","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","menuContainer","menuDesc","")
    generateElement("div","menuTitle","$25","menuContainer","menuPrice","")
    generateElement("hr","menuTitle","","menuContainer","menuHr","")
    generateElement("div","menuTitle","Samosa w/ Curry","menuContainer","menuItem","")
    generateElement("div","menuTitle","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","menuContainer","menuDesc","")
    generateElement("div","menuTitle","$18","menuContainer","menuPrice","")
    generateElement("hr","menuTitle","","menuContainer","menuHr","")
    generateElement("div","menuTitle","Marsala Mango Chatney","menuContainer","menuItem","")
    generateElement("div","menuTitle","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","menuContainer","menuDesc","")
    generateElement("div","menuTitle","$18","menuContainer","menuPrice","")


    

    
}