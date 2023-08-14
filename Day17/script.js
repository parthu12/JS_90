function scrolltop() {
    let a = window.document;
    a = location.href = '#home';
}

let contact= document.getElementById('contactForm');
contact.addEventListner('submit', function(e){
    e.preventDefault();
    alert(`Sorry Request cannot be processed`);
})