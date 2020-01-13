function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function goTo(des) {
    var destination = des.target;
    // TODO: smooth scroll 
}

$('html').on('click', function () {
    $('.collapse').collapse('hide')
})