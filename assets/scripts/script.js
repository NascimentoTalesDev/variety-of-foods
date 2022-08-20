const allIcons = document.querySelectorAll('.section-1-icons i')

let i = 1

setInterval(() => {
    i++

    const icon = document.querySelector('.section-1-icons i.change')
    icon.classList.remove('change')

    if (i > allIcons.length) {
        allIcons[0].classList.add('change')
        i = 1
    }else{
        icon.nextElementSibling.classList.add('change')
    }

}, 4000);

