  document.querySelectorAll('.card-product-selector').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const card = link.closest('.card-wrapper').querySelector('.zoom-trigger');
      card.classList.add('zooming');
      setTimeout(() => {
        window.location.href = link.href;
      }, 400);
    });
  });

