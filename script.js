document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const isHomepage = body.classList.contains('homepage');
  const isDespreMine = body.classList.contains('despremine2');
  const isProgramulElectoral = body.classList.contains('programulelectoral');

  // === HOMEPAGE: Butterflies + spark trail transition ===
  if (isHomepage) {
    const NUM_BUTTERFLIES = 12;

    for (let i = 0; i < NUM_BUTTERFLIES; i++) {
      const butterfly = document.createElement('div');
      butterfly.classList.add('butterfly');
      const type = (i % 4) + 1;
      butterfly.classList.add(`butterfly${type}`);
      body.appendChild(butterfly);

      butterfly.style.left = Math.random() * window.innerWidth + 'px';
      butterfly.style.top = Math.random() * window.innerHeight + 'px';
      butterfly.style.animationDelay = `${Math.random() * 10}s`;
      butterfly.style.animationDuration = `${10 + Math.random() * 5}s`;
    }

    const butterfly = document.getElementById('transition-butterfly');

    function createSpark(x, y) {
      const spark = document.createElement('div');
      spark.classList.add('spark');
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      body.appendChild(spark);
      setTimeout(() => spark.remove(), 1000);
    }

    function flyButterflyWithSparkTrailAndZoom(href) {
      butterfly.classList.remove('hidden');
      butterfly.classList.add('fly');

      const trailInterval = setInterval(() => {
        const rect = butterfly.getBoundingClientRect();
        createSpark(rect.left + 50, rect.top + 50);
      }, 50);

      setTimeout(() => {
        clearInterval(trailInterval);
        window.location.href = href;
      }, 1500);
    }

    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#') || this.target === '_blank') return;
        e.preventDefault();
        flyButterflyWithSparkTrailAndZoom(href);
      });
    });
  }

  // === DESPRE MINE: Floating hearts ===
  if (isDespreMine) {
    const NUM_HEARTS = 12;

    for (let i = 0; i < NUM_HEARTS; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      const type = (i % 4) + 1;
      heart.classList.add(`heart${type}`);
      body.appendChild(heart);

      heart.style.left = Math.random() * window.innerWidth + 'px';
      heart.style.top = Math.random() * window.innerHeight + 'px';
      heart.style.animationDelay = `${Math.random() * 10}s`;
      heart.style.animationDuration = `${10 + Math.random() * 5}s`;
    }
  }

  // === PROGRAMUL ELECTORAL: Stars ===
  if (isProgramulElectoral) {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;
      star.style.left = `${randomX}px`;
      star.style.top = `${randomY}px`;
    });
  }

  // === General entry animation ===
  body.classList.add("animate-stars-in");
});

// === Exit animation for all links ===
const links = document.querySelectorAll("a");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    const url = link.getAttribute("href");
    if (url.startsWith('#') || link.target === "_blank") return;

    e.preventDefault();

    document.body.classList.remove("animate-stars-in");
    document.body.classList.add("animate-stars-out");

    setTimeout(() => {
      window.location.href = url;
    }, 1500); // match the CSS animation duration
  });
});
