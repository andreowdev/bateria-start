let numberOfDrumsButtons = document.querySelectorAll('.drum').length

let i = 0; 

while(i < numberOfDrumsButtons) {

    
    document.querySelectorAll('button')[i].addEventListener('click', function(){
       //this.style.color = '#fff' o this representa o proprio elemento no caso o button
      
      
    //selecionando os botões  
       let buttonInnerHTML = this.innerHTML
        
    makeSounds(buttonInnerHTML)

    buttonAnimation(buttonInnerHTML)
    })
    i++
}

document.addEventListener('keydown', function(event) {
        makeSounds(event.key)
        buttonAnimation(event.key)
})

function makeSounds(key) {

      switch (key) {
        case 'enter':
              let tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
              let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;    
       case 's':
              let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
              let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break; 
        case 'j':
              let snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;   
        case 'k':
              let crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break; 
        case 'l':
              let kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;    

        default: console.log(buttonInnerHTML)
            
       }
}

function buttonAnimation(currentKey) {
     
  let acctiveButton = document.querySelector('.' + currentKey) // .k ou .w
    
     acctiveButton.classList.add('pressed')
    
     setTimeout(function() {
      acctiveButton.classList.remove('pressed')
    }, 100);
  
}
