'use strict'


window.addEventListener('load', WindowHandel);


function WindowHandel(){
    // Slider function
    sliderAutomatique();

    //Btn to go Down 
    document.getElementsByClassName('down-btn')[0].addEventListener('click', function(){
        window.location = "#about"
    });

    let open = false;
    //Hamburger icon fot mobile devices 
    document.getElementsByClassName('hamburger')[0].addEventListener('click', function(){
        if (open === false) {
            for (let index = 0; index < document.getElementsByClassName('nav-item').length; index++) {
                document.getElementsByClassName('nav-item')[index].style.display = "block";
            }
            open = true;
            }else{
                for (let index = 0; index < document.getElementsByClassName('nav-item').length; index++) {
                    document.getElementsByClassName('nav-item')[index].style.display = "none";
                }            
                open = false;
        }
    });




function sliderAutomatique(){
    let slider = document.getElementsByClassName('slider')[0];
    let sliderIndex = 1;

    setInterval(function(){ 
        if(sliderIndex > 3) {sliderIndex= 1}
        slider.style.backgroundImage  = "linear-gradient(to bottom,rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%),url('/test/images/" + "slide_0" + sliderIndex +  ".jpg  ')";
        sliderIndex++;
    }, 4000);
}
}
