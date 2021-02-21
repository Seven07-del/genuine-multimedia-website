const navShow = () => {
    const navToggle = document.querySelector('.nav-toggle');
    const toggleContent = document.querySelector('.toggle-content');
    const toggleClose = document.querySelector('.toggle-close');

    // Show Toggle Content
    navToggle.addEventListener ('click', () => {
        toggleContent.classList.toggle('active');
    });
    // Close Toggle Content
    // toggleClose.addEventListener ('click', () => {
    //     toggleContent.remove('active')
    // });
}
navShow();

    


// $(document).ready(function() {
//     $('.nav-toggle').click(function() {
//         $('div').toggleClass('.toggle-class');
//     });
// });