window.addEventListener("scroll", function() {
    const header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 2000 && window.scrollY < 3100);
});
