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
  "Fine-Tuning Transformer Models for Arabic NLP",
  "Building Safety-Focused LLM Agents",
  "Django & Laravel Backend Engineering",
  "Full-Stack JavaScript Development",
  "Git & GitHub for Version Control"
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
const texts = ["AI/ML Engineer", "NLP Engineer", "Backend Developer", "Full-Stack Developer"];
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

//  Orbit Icons (matches verified tech stack from CV)
const icons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
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
  const statusMessage = document.getElementById("form-status-message");

  if (!form || !submitBtn) return;

  function showStatus(text, type) {
    if (!statusMessage) return;
    statusMessage.textContent = text;
    statusMessage.classList.remove("success", "error");
    statusMessage.classList.add(type, "show");
    setTimeout(() => {
      statusMessage.classList.remove("show");
    }, 5000);
  }

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
        showStatus("✅ Message sent successfully!", "success");
        form.reset();
      } else {
        showStatus("❌ There was a problem sending your message.", "error");
      }
    } catch {
      showStatus("⚠️ Network error. Please try again.", "error");
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
  chatToggle.addEventListener("click", () => {
    chatBox.classList.toggle("d-none");
    if (!chatBox.classList.contains("d-none")) {
      chatInput.focus();
    }
  });
  closeChat.addEventListener("click", () => chatBox.classList.add("d-none"));

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (!message) return;

    addMessage(message, "user");
    chatInput.value = "";
    chatInput.disabled = true;

    showTyping();
    setTimeout(() => {
      hideTyping();
      const reply = getBotReply(message);
      addMessage(reply, "bot");
      chatInput.disabled = false;
      chatInput.focus();
    }, 700);
  });

  bindChatOptionButtons();
}

function bindChatOptionButtons() {
  document.querySelectorAll(".chat-option").forEach((btn) => {
    // Avoid double-binding the same button
    if (btn.dataset.bound === "true") return;
    btn.dataset.bound = "true";

    btn.addEventListener("click", () => {
      addMessage(btn.textContent, "user");
      showTyping();
      setTimeout(() => {
        hideTyping();
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

function showTyping() {
  const indicator = document.createElement("div");
  indicator.classList.add("typing-indicator");
  indicator.id = "typing-indicator";
  indicator.innerHTML = "<span></span><span></span><span></span>";
  chatMessages.appendChild(indicator);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTyping() {
  const indicator = document.getElementById("typing-indicator");
  if (indicator) indicator.remove();
}

function getBotReply(input) {
  input = input.toLowerCase();

  if (input.includes("service"))
    return "I offer: AI & Machine Learning Solutions, Personal Portfolio Websites, Business Sites, UI/UX Design, SEO Optimization, and Chatbot Programming.";

  if (input.includes("skill"))
    return "My skills span Python, PyTorch, Hugging Face Transformers, and LangChain for AI/ML; Django and Laravel for backend; JavaScript, HTML, CSS, and Tailwind for frontend; and PostgreSQL/MongoDB/MySQL for databases.";

  if (input.includes("experience"))
    return "I completed a Web & Software Development internship at Intellectsoft (Sétif, Algeria), working across the full development lifecycle. I'm currently a Master's candidate researching AI safety for Arabic LLM agents.";

  if (input.includes("project"))
    return "Some highlights: AMAN-LLM (my Master's thesis on AI safety for Arabic LLM agents), an Arabic Fiqh Information Retrieval system, and a full-stack real estate platform built with Django. Check the Projects section for more!";

  if (input.includes("about"))
    return "👋 Hi! I'm Aya — an AI/ML engineer and full-stack developer, currently pursuing a Master's in Data Engineering & Web Technologies with a research focus on AI safety and Arabic NLP.";

  if (input.includes("hire") || input.includes("price") || input.includes("rate") || input.includes("cost"))
    return "I'd love to hear about your project! Please reach out at ayadalache9@gmail.com or use the contact form below, and we can discuss scope and rates.";

  if (input.includes("contact"))
    return "You can reach me anytime at: ayadalache9@gmail.com";

  if (["bye", "goodbye", "see you", "exit", "clear"].some(word => input.includes(word))) {
    setTimeout(() => clearChat(), 2500);
    return "👋 Goodbye, friend! It was lovely chatting with you \nI'll clear the chat in a moment...";
  }

  return "🤔 Hmm... I'm still learning! Try asking about Services, Skills, Experience, Projects, About, or Contact.";
}

function clearChat() {
  chatMessages.style.opacity = "0";
  setTimeout(() => {
    chatMessages.innerHTML = `
      <div class="bot-message">Chat cleared! I'm ready for a new conversation 💬</div>
      <div class="chatbot-options">
        <button class="chat-option">About you</button>
        <button class="chat-option">Your skills</button>
        <button class="chat-option">Your experience</button>
        <button class="chat-option">Your services</button>
        <button class="chat-option">Contact you</button>
      </div>`;
    chatMessages.style.opacity = "1";
    bindChatOptionButtons();
  }, 500);
}


// Projects data — sourced from CV, categorized for filtering
const projects = [
  {
    title: "AMAN-LLM — Ethical Constraint Enforcement for Arabic LLM Agents",
    category: "AI & NLP",
    icon: "bi-shield-lock",
    featured: true,
    tech: ["Python", "PyTorch", "Transformers", "LangChain", "LangGraph"],
    description: "Master's thesis: a multi-layer AI safety framework for Arabic-speaking LLM agents. Fine-tuned MARBERT and AraBERT for dialect-aware content moderation, reaching 91.6% F1-score, and built a 118-case adversarial benchmark.",
    github: "https://github.com/ayadalache/aman-llm-agent"
  },
  {
    title: "Arabic Fiqh Information Retrieval System",
    category: "AI & NLP",
    icon: "bi-search",
    tech: ["Python", "Streamlit", "Transformers", "OCR"],
    description: "End-to-end Arabic search engine integrating OCR, NLP preprocessing, positional indexing, TF-IDF ranking, and transformer-based classification, with Boolean, phrase, proximity, and ranked retrieval modes.",
    github: "https://github.com/ayadalache/arabic-fiqh-ir-system"
  },
  {
    title: "Face Recognition System",
    category: "AI & NLP",
    icon: "bi-camera",
    tech: ["Python", "OpenCV", "Scikit-learn"],
    description: "End-to-end face recognition pipeline using PCA-based feature extraction paired with supervised machine learning classifiers.",
    github: "https://github.com/ayadalache/PCA-Face-Recognition"
  },
  {
    title: "Machine Learning Regression Projects",
    category: "AI & NLP",
    icon: "bi-graph-up",
    tech: ["Python", "PyTorch"],
    description: "A collection of end-to-end regression models covering housing-price prediction and medical-cost estimation, including preprocessing, exploratory analysis, and evaluation.",
    github: "https://github.com/ayadalache"
  },
  {
    title: "BT Real Estate Platform",
    category: "Full-Stack",
    icon: "bi-building",
    tech: ["Django", "Django REST Framework", "JWT", "REST APIs"],
    description: "Full-stack real estate platform with secure JWT authentication, RESTful APIs, advanced property search, inquiry management, and role-based dashboards for customers and staff.",
    github: "https://github.com/ayadalache/BT-Real-Estate-Full-Project"
  },
  {
    title: "Sift — Task Management Application",
    category: "Full-Stack",
    icon: "bi-check2-square",
    tech: ["Laravel", "Tailwind CSS"],
    description: "Laravel-based task manager with secure authentication, ownership-based authorization, category management, dashboard analytics, and a custom Tailwind design system.",
    github: "https://github.com/ayadalache/sift-real"
  },
  {
    title: "Virtual Chemistry Lab 3D",
    category: "Full-Stack",
    icon: "bi-flask",
    tech: ["Three.js", "WebGL", "PHP", "MySQL"],
    description: "Educational web app simulating chemistry experiments in an interactive 3D lab, featuring role-based access, experiment recording, submission workflows, and instructor grading.",
    github: "https://github.com/ayadalache/Virtual-Chemistry-Lab-3D"
  },
  {
    title: "TasteBite — Desktop Recipe Manager",
    category: "Full-Stack",
    icon: "bi-egg-fried",
    tech: ["Python", "Kivy"],
    description: "Desktop recipe management application using a custom binary search tree for efficient indexing, with advanced search, recommendations, and persistent local storage.",
    github: "https://github.com/ayadalache/tastebite"
  },
  {
    title: "Ledger — Framework-Free JavaScript Task Manager",
    category: "Systems & Performance",
    icon: "bi-list-check",
    tech: ["JavaScript", "IndexedDB", "Web Workers"],
    description: "Task manager built in vanilla JavaScript with a command-pattern undo/redo engine and custom reactive state management, optimized with virtualized rendering, Web Workers, and IndexedDB persistence.",
    github: "https://github.com/ayadalache/Ledger"
  },
  {
    title: "TPC-H PostgreSQL Benchmark & Partitioning",
    category: "Systems & Performance",
    icon: "bi-hdd-stack",
    tech: ["PostgreSQL", "Bash", "Linux"],
    description: "Implemented and evaluated multiple PostgreSQL table-partitioning strategies, benchmarking analytical SQL workload performance using the TPC-H dataset.",
    github: "https://github.com/ayadalache/tpch-postgresql-partitioning-project"
  }
];

const categoryClassMap = {
  "AI & NLP": "category-ai",
  "Full-Stack": "category-fullstack",
  "Systems & Performance": "category-systems"
};

function renderProjects(filter = "all") {
  const container = document.getElementById('projects-container');
  if (!container) return;
  container.innerHTML = "";

  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

  filtered.forEach((project, index) => {
    const bannerClass = categoryClassMap[project.category] || "";
    const featuredBadge = project.featured ? `<span class="project-featured-badge">Featured</span>` : "";
    const techTags = project.tech.map(t => `<span>${t}</span>`).join("");

    const projectCard = `
      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${(index % 3 + 1) * 100}">
        <div class="project-card">
          ${featuredBadge}
          <div class="project-banner ${bannerClass}">
            <i class="bi ${project.icon}"></i>
          </div>
          <div class="project-content">
            <span class="project-category-badge">${project.category}</span>
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <div class="project-tech-tags">${techTags}</div>
            <div class="project-buttons">
              <a href="${project.github}" class="btn-github" target="_blank" rel="noopener">
                <i class="bi bi-github"></i> View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += projectCard;
  });

  if (window.AOS) AOS.refreshHard();
}

function initProjectFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
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

    renderProjects();
    initProjectFilters();
});


// Enhanced Script with Animations

        // Particle Background for Hero Section
        document.addEventListener('DOMContentLoaded', function() {
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
