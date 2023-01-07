const hambarContainer = document.getElementById("hambarContainer");

hambarContainer.style.maxWidth = "0px";
hambarContainer.style.opacity = "0";


function hambar() {
  
    if (hambarContainer.style.maxWidth == "0px") { 
        hambarContainer.style.maxWidth = "250px";

        hambarContainer.style.opacity = "1";
    }


    else {
        hambarContainer.style.maxWidth = "0px";
        hambarContainer.style.opacity = "0";
    }
}
