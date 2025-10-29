// Smooth scroll effect for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Optional: Dark mode toggle
const toggle = document.createElement("button");
toggle.textContent = "🌓 Dark Mode";
toggle.style.position = "fixed";
toggle.style.bottom = "20px";
toggle.style.right = "20px";
toggle.style.padding = "10px";
toggle.style.borderRadius = "8px";
toggle.style.border = "none";
toggle.style.cursor = "pointer";
document.body.appendChild(toggle);

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Dark mode CSS toggle
const darkStyle = document.createElement("style");
darkStyle.textContent = `
  body.dark {
    background: #121212;
    color: #eee;
  }
  body.dark header {
    background: linear-gradient(135deg, #222, #444);
  }
  body.dark .project {
    background: #222;
  }
  body.dark footer {
    background: #000;
  }
`;
document.head.appendChild(darkStyle);
const toggleBtn = document.querySelector("#darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
// Navbar mobile toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});