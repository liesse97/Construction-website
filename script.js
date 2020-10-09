// document.querySelector('.menu-icon').
//     addEventListener('click', () => {
//         document.querySelector('.container').
//             classList.toggle('changed');
//     });

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const phone = document.querySelector('.fas')

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    // phone.classList.toggle('hide-me') // kommentera om du ej vill dölja telenr

})