//  Portfolio Script (Final Version)

//  Sparkle animation around "Hello"

const hello = document.querySelector('.sprinkle');
if (hello) {
  for (let i = 0; i < 10; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.top = Math.random() * 40 - 10 + 'px';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.animationDelay = (Math.random() * 1.5) + 's';
    hello.appendChild(sparkle);
  }
}

//  Changing tag text every few seconds
const tagTexts = [
  "Git & GitHub for Version Control",
  "Clean Code & Best Practices",
  "UI Magic & Smooth UX",
  "JavaScript & React Developer",
  "Innovation Through Code"
];

let tagIndex = 0;
setInterval(() => {
  const changingText = document.getElementById('changingText');
  if (changingText) {
    tagIndex = (tagIndex + 1) % tagTexts.length;
    changingText.textContent = tagTexts[tagIndex];
  }
}, 3000);

//  Change name color dynamically
const nameElement = document.getElementById('name');
const colors = ['#ff00c1', '#8e008b', '#ffd86f', '#ffb7ff', '#ff8b6f', '#b9faf8'];
let colorIndex = 0;

if (nameElement) {
  setInterval(() => {
    colorIndex = (colorIndex + 1) % colors.length;
    nameElement.style.color = colors[colorIndex];
  }, 2000);
}

//  Create random sparkling stars
const sprinkle = document.querySelector(".sprinkle");
function createSparkle() {
  const sparkle = document.createElement("span");
  sparkle.classList.add("sparkle");

  const angle = Math.random() * 2 * Math.PI;
  const radius = 40 + Math.random() * 30;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  sparkle.style.left = 50 + x + "px";
  sparkle.style.top = 30 + y + "px";
  sparkle.style.animationDelay = Math.random() * 2 + "s";

  sprinkle?.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 3000);
}
setInterval(createSparkle, 500);

//  Typewriter Effect
const texts = ["Developer", "Designer", "Innovator", "Creator"];
let speed = 100;
let textIndex = 0;
let characterIndex = 0;
const textElement = document.querySelector(".typewriter-text");

function typeWriter() {
  if (!textElement) return;
  if (characterIndex < texts[textIndex].length) {
    textElement.innerHTML += texts[textIndex].charAt(characterIndex);
    characterIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (!textElement) return;
  if (textElement.innerHTML.length > 0) {
    textElement.innerHTML = textElement.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    characterIndex = 0;
    setTimeout(typeWriter, 500);
  }
}
document.addEventListener("DOMContentLoaded", typeWriter);

//  Orbit Icons
const icons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
];

const orbit = document.getElementById("orbit");
if (orbit) {
  const radius = 130;
  const centerX = 150;
  const centerY = 150;

  icons.forEach((icon, i) => {
    const img = document.createElement("img");
    img.src = icon;
    img.classList.add("icon");

    const angle = (i / icons.length) * (2 * Math.PI);
    const x = centerX + radius * Math.cos(angle) - 27.5;
    const y = centerY + radius * Math.sin(angle) - 27.5;

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    orbit.appendChild(img);
  });
}

//  Contact Form (Formspree)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");

  if (!form || !submitBtn) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerHTML = "Sending...";

    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value
    };

    try {
      const response = await fetch("https://formspree.io/f/xldpvezz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        form.reset();
      } else {
        alert("❌ There was a problem sending your message.");
      }
    } catch {
      alert("⚠️ Network error. Please try again.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send Message <i class="bi bi-send ms-2"></i>';
    }
  });
});

//  Chatbot Script (Aya Bot)
const chatToggle = document.getElementById("chatbot-toggle");
const chatBox = document.getElementById("chatbot-box");
const closeChat = document.getElementById("chatbot-close");
const chatForm = document.getElementById("chatbot-form");
const chatInput = document.getElementById("chatbot-input");
const chatMessages = document.getElementById("chatbot-messages");

if (chatToggle && chatBox && closeChat && chatForm && chatInput && chatMessages) {
  chatToggle.addEventListener("click", () => chatBox.classList.toggle("d-none"));
  closeChat.addEventListener("click", () => chatBox.classList.add("d-none"));

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (!message) return;

    addMessage(message, "user");
    chatInput.value = "";

    setTimeout(() => {
      const reply = getBotReply(message);
      addMessage(reply, "bot");
    }, 700);
  });

  document.querySelectorAll(".chat-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      addMessage(btn.textContent, "user");
      setTimeout(() => {
        addMessage(getBotReply(btn.textContent), "bot");
      }, 600);
    });
  });
}

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.classList.add(sender + "-message");
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotReply(input) {
  input = input.toLowerCase();

  if (input.includes("service"))
    return " I offer: Personal Portfolio Websites , Business Sites , Blogs , UI/UX Design , SEO Optimization , Mobile Apps , and Chatbot Programming ";

  if (input.includes("skill"))
    return " My skills include: HTML , CSS , JavaScript , React , Django , Tailwind , and Bootstrap !";

  if (input.includes("about"))
    return "👋 Hi! I’m Aya — a creative frontend developer with 5+ years of experience crafting elegant, responsive, and user-focused digital experiences ";

  if (input.includes("contact"))
    return " You can reach me anytime at: **dalacheaya635@gmail.com** ";

  if (["bye", "goodbye", "see you", "exit", "clear"].some(word => input.includes(word))) {
    setTimeout(() => clearChat(), 2500);
    return "👋 Goodbye, friend! It was lovely chatting with you \n I’ll clear the chat in a moment...";
  }

  return "🤔 Hmm... I’m still learning! Try asking about  Services, Skills, About, or Contact ";
}

function clearChat() {
  chatMessages.style.opacity = "0";
  setTimeout(() => {
    chatMessages.innerHTML = `<div class="bot-message"> Chat cleared! I'm ready for a new conversation 💬</div>`;
    chatMessages.style.opacity = "1";
  }, 500);
}


 // Projects data
const projects = [
    {
        id: 1,
        title: "A table & a chair",
        description: "How to create a table and chair to learn the basics of Blender.",
        previewImage: "images/Table_chair.png",
        report: "files/project1-report.pdf",
        animation: "files/project1-animation.mp4",
        fullImage: "images/Table_chair.png",
        blenderFile: "files/table.blend"
    },
    {
        id: 2,
        title: "A soft Body Physics(Balls)",
        description: "How to use soft body physics to simulate objects like rubber balls.",
        previewImage: "images/soft boddy.png",
        report: "files/BallRepport.pdf",
        animation: "files/ball.mp4",
        fullImage: "images/soft boddy.png",
        blenderFile: "files/Ball.blend"
    },
    {
        id: 3,
        title: "A realistic smoke simulation",
        description: "How to create a stylized smoke effect using Blender 4 (using different settings and parameters).",
        previewImage: "images/smoke_effect.png",
        report: "files/SmokeReport.pdf",
        animation: "files/smoke.mp4",
        fullImage: "images/smoke_effect.png",
        blenderFile: "files/smoke.blend"
    }
];

// Function to load projects
function loadProjects() {
    const container = document.getElementById('projects-container');
    
    projects.forEach((project, index) => {
        const projectCard = `
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
                <div class="project-card">
                    <div class="project-image">
                        <img src="${project.previewImage}" alt="${project.title}" class="img-fluid">
                    </div>
                    <div class="project-content">
                        <h4>${project.title}</h4>
                        <p>${project.description}</p>
                        <div class="project-buttons">
                            <a href="${project.report}" class="btn btn-report" target="_blank" download>
                                <i class="bi bi-file-text"></i> Report
                            </a>
                            <a href="${project.animation}" class="btn btn-animation" target="_blank">
                                <i class="bi bi-play-circle"></i> Animation
                            </a>
                            <a href="${project.fullImage}" class="btn btn-image" target="_blank">
                                <i class="bi bi-image"></i> Image
                            </a>
                            <a href="${project.blenderFile}" class="btn btn-blender" download>
                                <i class="bi bi-box"></i> Blender File
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += projectCard;
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
    
    loadProjects(); // Add this line to load your projects
    
    // Your other initialization code (particles, etc.)
});


// Enhanced Script with Animations 
   
        // Initialize AOS (Animate On Scroll)
        document.addEventListener('DOMContentLoaded', function() {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                offset: 100
            });

            // Particle Background for Hero Section
            const canvas = document.getElementById('particle-canvas');
            if (canvas) {
                const ctx = canvas.getContext('2d');
                
                // Set canvas size
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                
                const particles = [];
                
                class Particle {
                    constructor() {
                        this.x = Math.random() * canvas.width;
                        this.y = Math.random() * canvas.height;
                        this.size = Math.random() * 2 + 1;
                        this.speedX = Math.random() * 1 - 0.5;
                        this.speedY = Math.random() * 1 - 0.5;
                    }
                    
                    update() {
                        this.x += this.speedX;
                        this.y += this.speedY;
                        
                        if (this.x > canvas.width) this.x = 0;
                        else if (this.x < 0) this.x = canvas.width;
                        if (this.y > canvas.height) this.y = 0;
                        else if (this.y < 0) this.y = canvas.height;
                    }
                    
                    draw() {
                        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
                        ctx.beginPath();
                        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
                
                function init() {
                    for (let i = 0; i < 50; i++) {
                        particles.push(new Particle());
                    }
                }
                
                function animate() {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    for (let particle of particles) {
                        particle.update();
                        particle.draw();
                    }
                    requestAnimationFrame(animate);
                }
                
                init();
                animate();
                
                window.addEventListener('resize', function() {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                });
            }
        });
    