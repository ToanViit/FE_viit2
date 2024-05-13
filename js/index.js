
// const listImage = document.querySelector('.imge-list')
// const imgs = document.querySelectorAll('.imageItem');
// const leftBtn = document.querySelector('.leftBtn')
// const rightBtn = document.querySelector('.rightBtn')
// let imgsLenth = imgs.length
// let current = 0;
// const handlesChangeSLide = () => {
//     if (current == imgsLenth - 1) {
//         current = 0
//     } else {
//         current++;
//     }
//     let width = imgs[0].offsetWidth;

//     listImage.style.transform = `translateX(${width * -1 * current}px)`

// }
// const  handleInterval = setInterval(handlesChangeSLide, 4000);


// rightBtn.addEventListener('click', () => {
//     clearInterval(handleInterval)
//     handlesChangeSLide()
//     handleInterval()
// })

// leftBtn.addEventListener('click', () => {
//     clearInterval(handleInterval)
//     if (current === 0) {
//         current = imgsLenth - 1; 
//     } else {
//         current--; 
//     }
//     let width = imgs[0].offsetWidth; 
//     listImage.style.transform = `translateX(${width * -1 * current}px)`; 
//     handleInterval()
// });

// FOOTER DROPDOWLIST 
document.addEventListener('DOMContentLoaded', function () {
    const menus = document.querySelectorAll('.footer-menu h4');

    menus.forEach(menu => {
        menu.addEventListener('click', function () {
            const parent = this.parentElement;
            parent.classList.toggle('active');
        });
    });
});



