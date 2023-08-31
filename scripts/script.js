const sliderImages = document.querySelectorAll('.slider__img');
const sliderLine = document.querySelector('.slider__line');
const sliderDots = document.querySelectorAll('.slider__dot');
const sliderBtnNext = document.querySelector('.slider__btn-next');
const sliderBtnPrev = document.querySelector('.slider__btn-prev');
const header = document.querySelector('.header-js');
const text = document.querySelector('.text-js');

let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', showSlide);

//автоматическое прокручивание слайдов
setInterval(() => {
   showNextSlide()
}, 5000);

sliderBtnNext.addEventListener('click', showNextSlide);
sliderBtnPrev.addEventListener('click', showPrevSlide);

function showSlide(){
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();

function changeText(){
    if(sliderCount === 0){
        header.innerHTML = "Заголовок слайда";
        text.innerHTML = "Описание. Может занимать от 1 до 7 строк.<br>Описание. Может занимать от 1 до 7 строк.<br>Описание. Может занимать от 1 до 7 строк.<br>Описание. Может занимать от 1 до 7 строк.<br>Описание. Может занимать от 1 до 7 строк.<br>Описание. Может занимать от 1 до 7 строк. ";
    }else if(sliderCount === 1){
        header.innerHTML = "Заголовок слайда 2";
        text.innerHTML = "Описание 2. Может занимать от 1 до 7 строк.<br>Описание 2. Может занимать от 1 до 7 строк.<br>Описание 2. Может занимать от 1 до 7 строк.<br>Описание 2. Может занимать от 1 до 7 строк.<br>Описание 2. Может занимать от 1 до 7 строк.<br>Описание 2. Может занимать от 1 до 7 строк. ";
    }else if(sliderCount === 2){
        header.innerHTML = "Заголовок слайда 3";
        text.innerHTML = "Описание 3. Может занимать от 1 до 7 строк.<br>Описание 3. Может занимать от 1 до 7 строк.<br>Описание 3. Может занимать от 1 до 7 строк.<br>Описание 3. Может занимать от 1 до 7 строк.<br>Описание 3. Может занимать от 1 до 7 строк.<br>Описание 3. Может занимать от 1 до 7 строк. ";
    }else{
        header.innerHTML = "Заголовок слайда 4";
        text.innerHTML = "Описание 4. Может занимать от 1 до 7 строк.<br>Описание 4. Может занимать от 1 до 7 строк.<br>Описание 4. Может занимать от 1 до 7 строк.<br>Описание 4. Может занимать от 1 до 7 строк.<br>Описание 4. Может занимать от 1 до 7 строк.<br>Описание 4. Может занимать от 1 до 7 строк. ";
    }
}

function rollSlider(){
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function showNextSlide(){
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;

    rollSlider();
    thisSlider(sliderCount);
    changeText(sliderCount);
}

function showPrevSlide(){
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length -1;

    rollSlider();
    thisSlider(sliderCount);
    changeText(sliderCount);
}

function thisSlider(index){
    sliderDots.forEach(item => item.classList.remove('active'));
    sliderDots[index].classList.add('active');
}
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlider(sliderCount);
        changeText(sliderCount);
    })
})