document.addEventListener('DOMContentLoaded', () => {
const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
        timelineItems[0].classList.add('active');
        timelineItems.forEach(item => {
            item.addEventListener('click', () => {
                timelineItems.forEach(el => el.classList.remove('active'));
                item.classList.add('active');
            });
        });
    }
});
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.content-footer').forEach(container => {
        const img = container.querySelector('img');
        if (!img) return;

        container.addEventListener('mousemove', (e) => {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const rotateY = ((x / rect.width) - 0.5) * 30;
          const rotateX = (0.5 - (y / rect.height)) * 30;

          img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          img.style.opacity = '1';
        });

        container.addEventListener('mouseleave', () => {
          img.style.transform = 'rotateX(0) rotateY(0)';
          img.style.opacity - '0.1';
        });
      });
    });