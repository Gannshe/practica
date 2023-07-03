window.addEventListener('DOMContentLoaded', () => {
    const marquee = document.querySelector('.marquee ul');
    const marqueeItems = document.querySelectorAll('.marquee li');
  
    let totalWidth = 0;
    marqueeItems.forEach(item => {
      totalWidth += item.offsetWidth;
    });
  
    marquee.style.width = `${totalWidth}px`;
  });

  Fancybox.bind('[data-fancybox="awards"]', {
    // Your custom options
  });
  Fancybox.bind('[data-fancybox="social"]', {
    // Your custom options
  });