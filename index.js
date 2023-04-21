for(var i=0;i<document.querySelectorAll(".drum").length;i++){

document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonInnerHtml= this.innerHTML;
    makeSound(buttonInnerHtml);
});
}
document.addEventListener("keypress", function(event){
    makeSound(event.key);
});
function makeSound(key) {
    switch (key) {
    case "b":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();  
        break;
    case "e":
         var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();  
         break;
    case "a":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();  
          break;
    case "t":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();  
          break;
     case "s":
           var snare = new Audio("sounds/snare.mp3");
           snare.play();  
            break;
      case "u":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();  
             break;   
       case "p":
           var kick = new Audio("sounds/kick-bass.mp3");
           kick.play();  
           break;   
    default:
        console.log(buttonInnerHtml);
}
}

