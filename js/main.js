const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', 'Make your Outfit');
  searchInputEl.style.fontStyle = 'italic';
  searchInputEl.style.color = 'black';
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

//new swiper(선택자, 옵션)
new Swiper('.headerBg .swiper-container', {
  centeredSlides: true, //1번 슬라이드각 가운데
  loop: true, //반복
  autoplay: {
    delay: 4000
  },
  pagination: {
    el: '.headerBg .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 
  },
  navigation: {
    prevEl: '.headerBg .swiper-prev',
    nextEl: '.headerBg .swiper-next'
  }
});

new Swiper('.phasers .swiper-container', {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.phasers .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 
  },
  navigation: {
    prevEl: '.phasers .swiper-prev',
    nextEl: '.phasers .swiper-next'
  }
})
/* const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    //숨김처리!
    promotionEl.classList.add('hide');
  } else {
    //보임처리!
    promotionEl.classList.remove('hide');
  }
}); */



/* 뉴스구독 버튼  */
const signInEl = document.querySelector('.signIn');
const signInputEl = signInEl.querySelector('input');


signInEl.addEventListener('click', function() {
  signInputEl.focus();
});

signInputEl.addEventListener('focus', function() {
  signInEl.classList.add('focused');
  signInputEl.setAttribute('placeholder', 'Enter Your E-mail :)');
  signInputEl.style.fontStyle = 'italic';
  signInputEl.style.color = 'black';
});

signInputEl.addEventListener('blur', function() {
  signInEl.classList.remove('focused');
  signInputEl.setAttribute('placeholder', '');
});