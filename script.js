const home = document.querySelector('.home');
const profile = document.querySelector('.profile');
const contact = document.querySelector('.contact');

home.addEventListener('click', function() {
    home.classList.toggle('btn-active');
    profile.classList.toggle('btn-inactive');
    contact.classList.toggle('btn-inactive');
});
profile.addEventListener('click', function(){
    home.classList.toggle('btn-inactive');
    profile.classList.toggle('btn-active');
    contact.classList.toggle('btn-inactive');
});
contact.addEventListener('click', function(){
    home.classList.toggle('btn-inactive');
    profile.classList.toggle('btn-inactive');
    contact.classList.toggle('btn-active');
});
