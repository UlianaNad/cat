const elParent = document.querySelector('.parent');
const elChild = document.querySelector('.child');


let isLeftSide = true;

elChild.addEventListener("mouseenter", () => {

    
     if(isLeftSide){
        elChild.classList.toggle("animatecatright");
        console.log('+800');
        isLeftSide = false;

     } 
     else{
        elChild.classList.toggle("animatecatleft");
        console.log('+100');
        isLeftSide = true;
     }
    
});




