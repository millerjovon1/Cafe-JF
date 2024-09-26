document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded and parsed");

  const navToggle = document.querySelector('.nav-toggle');
  const navMenuContainer = document.querySelector('.nav-menu-container');

  if (navToggle && navMenuContainer) {
    navToggle.addEventListener('click', () => {
      navMenuContainer.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
      if (!navMenuContainer.contains(event.target) && !navToggle.contains(event.target)) {
        navMenuContainer.classList.remove('active');
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll('h1');

  headers.forEach((header, index) => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              if (entry.isIntersecting) {
                  header.classList.remove('sticky');
              } else {
                  header.classList.add('sticky');
              }
          },
          {
              root: null, // viewport
              threshold: 0.5, // when 50% of the target is visible
              rootMargin: "0px 0px -100% 0px", // trigger when the next header is about to overlap
          }
      );

      if (headers[index + 1]) {
          observer.observe(headers[index + 1]);
      }
  });
});
