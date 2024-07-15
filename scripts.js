

  function changeImage(imageUrl) {
    document.getElementById('project-image').src = imageUrl;
  }
  document.addEventListener('DOMContentLoaded', function () {
    const contactUsBtn = document.getElementById('contactUsBtn');
    const contactFormContainer = document.getElementById('contactFormContainer');
    const closeFormBtn = document.getElementById('closeFormBtn');

    contactUsBtn.addEventListener('click', function () {
      contactFormContainer.classList.remove('hidden');
    });

    closeFormBtn.addEventListener('click', function () {
      contactFormContainer.classList.add('hidden');
    });

    window.addEventListener('click', function (event) {
      if (event.target === contactFormContainer) {
        contactFormContainer.classList.add('hidden');
      }
    });
  });




  const imgContainers = document.querySelectorAll('.img-container');
  const imgs = document.querySelectorAll('.img');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;

  function moveToSlide(index) {
    imgContainers.forEach((container, i) => {
      container.style.transform = `translateX(${-index * 100}%)`;
    });
    dots.forEach(dot => dot.classList.remove('red-dot'));
    dots[index].classList.add('red-dot');
  }

  function autoSlide() {
    currentIndex = (currentIndex + 1) % imgs.length;
    moveToSlide(currentIndex);
  }

  setInterval(autoSlide, 3000); // Change slide every 3 seconds

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      moveToSlide(currentIndex);
    });
  });



