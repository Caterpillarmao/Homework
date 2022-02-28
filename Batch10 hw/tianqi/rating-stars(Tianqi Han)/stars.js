const container = document.querySelector('.rating');
const stars = container.querySelectorAll('.rating-star')

container.onclick = e => {
    const elClass = e.target.classList;
    if(!elClass.contains('active')){
        stars.forEach(
            item => item.classList.remove('active')
        );
        elClass.add('active');
    }
};
