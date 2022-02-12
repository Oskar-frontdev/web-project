const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    
  })

  const btn = document.querySelector('.btn');
  const videoContainer = document.querySelector('.video-container');
  const close = document.querySelector('.close');
  const frame = document.querySelector('iframe');
  const src = frame.src;

  btn.addEventListener('click', () => {
    videoContainer.classList.add('show');
  })

  close.addEventListener('click', () => {
    videoContainer.classList.remove('show');
    frame.src="blank";
    frame.src=src;
  })

  
