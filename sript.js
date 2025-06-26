
  // Typed.js Initialization
  var typed = new Typed(".text", {
    strings: ["Student", "Upcoming Developer", "Problem Solver"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  // Mobile Navbar Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');

  if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });

    // Auto-close menu on link click
    document.querySelectorAll('.navbar a').forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  }

  // Navbar Active Scroll Highlight
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('.navbar a');

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        let activeLink = document.querySelector('.navbar a[href*=' + id + ']');
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  };

  // Animate sections on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

