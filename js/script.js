const slider = document.querySelectorAll('.repair__item-box');
const dotsBox = document.querySelector('.repair__dots');
const sliderLine = document.querySelector('.repair__items');
const showAllBtn = document.querySelector('.repair__button');
dotsBox.innerHTML =`<button class='dot'></button>`.repeat(slider.length);
dotsBox.firstChild.classList.add('active');
let dotsArray = [...dotsBox.children];
for (let i = 0; i < dotsArray.length; i++) {
    dotsArray[i].addEventListener('click', () => {
        for (let j = 0; j < dotsArray.length; j++) {
            dotsArray[j].classList.remove('active');
        }
        dotsArray[i].classList.add('active');
        sliderLine.style.left = `-${sliderLine.offsetWidth / slider.length * i}px`;
    });
}
const arrow = document.querySelector('.show__arrow');
const btnText = document.querySelector('.repair__button_text');

showAllBtn.addEventListener('click', () => {
    sliderLine.classList.toggle('show__brands');
    arrow.classList.toggle('hide__arrow');
    arrow.classList.contains('hide__arrow') ? 
        btnText.textContent = 'Скрыть':
        btnText.textContent = 'Показать все';
    
});
