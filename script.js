$('.portfolio-button').mousedown(function(){
    timeout = setInterval(function(){
        window.scrollBy(0,-1); // May need to be -1 to go down
    }, 0); // Play around with this number. May go too fast

    return false;
});

// When the user clicks on the button, scroll to the top of the document
function bottomFunction() {

    window.scrollTo(0,document.body.scrollHeight); 

    //document.body.scrollTop = page; // For Safari
    //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }