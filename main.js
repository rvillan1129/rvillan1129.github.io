function reveal(divName, partnerName){
    hiddenState = document.querySelector(divName).hidden;

    if(hiddenState){
        document.querySelector(divName).hidden = false;
        
        document.querySelector(partnerName).style.border = "3px black solid";
        document.querySelector(partnerName).style.flex = "3";
    }
    if(!hiddenState){
        document.querySelector(divName).hidden = true;

        document.querySelector(partnerName).style.border = "8px black solid";
        document.querySelector(partnerName).style.flex = "1";
    }
    
}

function visitSite(siteName){
    window.open(siteName);
}