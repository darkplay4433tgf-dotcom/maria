document.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.getElementById("noBtn");
const btnArea = document.querySelector(".buttons");

if (noBtn && btnArea) {
  noBtn.addEventListener("mouseover", () => {
    const rect = btnArea.getBoundingClientRect();

    const x = Math.random() * (rect.width - 120);
    const y = Math.random() * (rect.height - 60);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });
}

  // ================= HERO =================
  const hero = document.querySelector(".hero");
  const content = document.getElementById("content");

  window.openSite = function () {
    if (!hero || !content) return;

    hero.style.opacity = "0";
    hero.style.transform = "scale(.95)";

    setTimeout(() => {
      hero.style.display = "none";
      content.style.display = "block";
      const poll = document.getElementById("endPoll");
if (poll) poll.style.display = "block";

      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 700);
  };

  // ================= REVEAL (ОДИН observer) =================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
  });

  // ================= HEARTS =================
function heart() {
  const h = document.createElement("div");

  h.className = "heart";
  h.innerHTML = "🤍";

  /* ВСЕГДА старт сверху */
  h.style.top = "-50px";
  h.style.left = Math.random() * 100 + "vw";

  h.style.fontSize = (12 + Math.random() * 28) + "px";
  h.style.animationDuration = (3 + Math.random() * 5) + "s";

  document.body.appendChild(h);

  setTimeout(() => {
    h.remove();
  }, 9000);
}

setInterval(heart, 1000);

/* БЫЛО: 350ms → СТАЛО быстрее */
setInterval(heart, 1000);

  // ================= STARS =================
  const canvas = document.getElementById("bg");
  if (canvas) {
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    const stars = [];

    for (let i = 0; i < 180; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        s: 0.2 + Math.random()
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";

      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.s;

        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }

  // ================= PARALLAX =================
  window.addEventListener("mousemove", (e) => {
    if (!canvas) return;

    const x = (e.clientX / innerWidth - 0.5) * 20;
    const y = (e.clientY / innerHeight - 0.5) * 20;

    canvas.style.transform = `translate(${x}px, ${y}px)`;
  });

  // ================= LIGHTBOX =================
  const images = document.querySelectorAll(".gallery-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (images && lightbox && lightboxImg) {
    images.forEach(img => {
      img.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImg.src = img.src;
      });
    });

    lightbox.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  }

  // ================= FINAL SCREEN =================
  const yesBtn = document.getElementById("yesBtn");
  const finalScreen = document.getElementById("finalScreen");

  if (yesBtn && finalScreen) {
    yesBtn.addEventListener("click", () => {
      finalScreen.style.display = "flex";
    });
  }

});const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 120;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });
}document.addEventListener("DOMContentLoaded", () => {

  const yesButtons = document.querySelectorAll(".yesBtn");
  const finalScreen = document.getElementById("finalScreen");

  // если у тебя уже есть финальный экран — просто покажем его
  if (yesButtons && finalScreen) {
    yesButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        finalScreen.style.display = "flex";
      });
    });
  }

});