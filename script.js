const form = document.querySelector('.forms__content');
form.addEventListener('click', (e) => {
    const { target } = e;
    if(target.classList.contains('forms__close')){
        form.parentElement.classList.add('_hide');
        e.preventDefault();
    }
});