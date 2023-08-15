$("a[href='#scroll-top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
let contact = document.getElementById('contactForm');
contact.addEventListener('submit', function (e) {
    e.preventDefault();
    alert(`Sorry Request cannot be accepted due to some technical errors`);
})