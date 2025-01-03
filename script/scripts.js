const emailTo = "mas7qa387@gmail.com"

function setCopyRightYear() {
         
    var copy_right_year = document.getElementsByClassName("copy-right-year");
    if ( copy_right_year == null || copy_right_year.length == 0) {
        return;
     }
    const currentYear = ( new Date() ).getFullYear();
    for (let i = 0; i < copy_right_year.length; i++) {
        copy_right_year[i].textContent = currentYear;
    }

}

function setContactFormEvent(){
      
         var contactForm = document.getElementById('contactForm');
         if ( contactForm == null) {
            return;
         }
         contactForm.addEventListener('submit', function (event) {
         event.preventDefault(); 
    
         var name = document.getElementById('name-field').value;
         var message = document.getElementById('message-field').value;
         window.open('mailto:'+emailTo+'?subject=Let\'s work together,'+ name +'&body=' + message );
         contactForm.reset();

        }); 

}

function setProjectImages(){

         var nodes = document.getElementsByClassName("project-img")
        //  if ( nodes == null || nodes.length == 0) {
        //     return;
        //  }
         for (let i = 0; i < nodes.length; i++) {
              let backgroundPath = nodes[i].getAttribute('src');
              nodes[i].style.background = 'url("'+backgroundPath+'")';
        } 

}

document.addEventListener('DOMContentLoaded', function() {

     //Setting Copy Right Year
     setCopyRightYear(); 

     //Setting Contact Form Event
     setContactFormEvent();

     //Setting Project Background Images 
     setProjectImages(); 

});