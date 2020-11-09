//does active the nav section where we are
$('body').scrollspy({ target: '#main-nav' });

//add smoth scrolling. slim cdn version doesnt work!
$('#main-nav a').on('click', function (e) {
    // check for a hash value
    if (this.hash !== '') {
        //prevent default behavior
        e.preventDefault();
        //store hash
        const hash = this.hash;
        //animate smooth scroll
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function () {
            //hash to the URL after scroll
            window.location.hash = hash;
        });
    }
});
// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

// Button back to top
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $("#back-to-top").fadeIn();
        } else {
            $("#back-to-top").fadeOut();
        }
    });
// scroll body to 0px on click
$("#back-to-top").click(function () {
    $("body,html").animate(
        {
            scrollTop: 0,
        },
        900
        );
        return false;
    });
});

// //form 
// let onlyForm = document.querySelector('#form1')


// onlyForm.addEventListener('submit', function (e) {
//     e.preventDefault();console.log('submit');
//     //grab the input field to be cleared later
//     let nameInput = onlyForm.elements.name;
//     let emailInput = onlyForm.elements.email;
//     let textInput = onlyForm.elements.message;
//     //grab the value to be used in here
//     let nameValue = nameInput.value;
//     //sucess message
//     swal({
//         title: "Recibimos tu mensaje",
//         text: `Te responderemos en breve ${nameValue.toUpperCase()}`,
//         icon: "success",
//       });
//     //reset input
//     nameInput.value = '';
//     emailInput.value = '';
//     textInput.value = '';
// });

