// Background floating shapes
const shapesContainer = document.getElementById('shapes-background');
const numberOfShapes = 25;
const shapes = ['circle', 'triangle', 'square', 'star'];

function createShape() {
    const shape = document.createElement('div');
    shape.classList.add('floating-shape');
    shape.classList.add(shapes[Math.floor(Math.random() * shapes.length)]);

    const size = Math.random() * 50 + 20; // Size between 20px and 70px
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    
    shape.style.left = `${Math.random() * 100}vw`;
    shape.style.top = `${Math.random() * 100}%`;
    
    shape.style.animationDelay = `${Math.random() * 10}s`;
    shape.style.animationDuration = `${Math.random() * 30 + 20}s`; // Duration between 20s and 50s
    
    shapesContainer.appendChild(shape);
}

for (let i = 0; i < numberOfShapes; i++) {
    createShape();
}

// FAQ Accordion
const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        // Close all other answers
        document.querySelectorAll(".faq-answer").forEach((item) => {
            if (item !== answer) item.style.display = "none";
        });

        // Toggle this answer
        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});

let translations = {};
let currentLang = 'en';

// Load translations JSON
fetch('translations.json')
  .then(res => res.json())
  .then(data => {
    translations = data;
    setLanguage(currentLang);
  });

// Set language and update all text
function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  if (!t) return;

  document.title = t.title;
  document.getElementById('hero_h2').textContent = t.hero_h2;
  document.getElementById('hero_p').textContent = t.hero_p;
  document.getElementById('cta_find').textContent = t.cta_find;
  document.getElementById('cta_demo').textContent = t.cta_demo;
  document.querySelector('.grade-selection h2').textContent = t.choose_path;
  document.querySelector('.how-it-works h2').textContent = t.how_work;
  document.querySelector('.explore-card h3').textContent = t.explore;
  document.querySelector('.explore-card p').textContent = t.explore_desc;
  document.querySelector('.play-card h3').textContent = t.play;
  document.querySelector('.play-card p').textContent = t.play_desc;
  document.querySelector('.achieve-card h3').textContent = t.achieve;
  document.querySelector('.achieve-card p').textContent = t.achieve_desc;
  document.querySelector('.about-text h2').textContent = t.about_us;
  document.querySelector('.about-text p').innerHTML = t.about_desc1;
  document.querySelectorAll('.about-text p')[1].innerHTML = t.about_desc2;
  document.querySelector('.faq-section h2').textContent = t.faq;
  // FAQ
  document.querySelectorAll('.faq-question')[0].textContent = t.faq_q1;
  document.querySelectorAll('.faq-answer')[0].querySelector('p').textContent = t.faq_a1;
  document.querySelectorAll('.faq-question')[1].textContent = t.faq_q2;
  document.querySelectorAll('.faq-answer')[1].querySelector('p').textContent = t.faq_a2;
  document.querySelectorAll('.faq-question')[2].textContent = t.faq_q3;
  document.querySelectorAll('.faq-answer')[2].querySelector('p').textContent = t.faq_a3;
  document.querySelectorAll('.faq-question')[3].textContent = t.faq_q4;
  document.querySelectorAll('.faq-answer')[3].querySelector('p').textContent = t.faq_a4;
  // Contact
  document.querySelector('.contact-section h2').textContent = t.contact_us;
  document.querySelector('.contact-form input[type="text"]').placeholder = t.contact_name;
  document.querySelector('.contact-form input[type="email"]').placeholder = t.contact_email;
  document.querySelector('.contact-form textarea').placeholder = t.contact_msg;
  document.querySelector('.contact-form button').textContent = t.contact_btn;
  // Footer
  document.querySelector('.footer p').innerHTML = t.footer;
  document.querySelectorAll('.footer-links a')[0].textContent = t.footer_about;
  document.querySelectorAll('.footer-links a')[1].textContent = t.footer_faq;
  document.querySelectorAll('.footer-links a')[2].textContent = t.footer_contact;

  // Nav link translations (FAQ / About)
  const linkFaq = document.getElementById('link-faq');
  const linkAbout = document.getElementById('link-about');
  if (linkFaq) linkFaq.textContent = t.faq || linkFaq.textContent;
  if (linkAbout) linkAbout.textContent = t.about_us || linkAbout.textContent;

  // Stat cards translations
  const statLabelSubjects = document.getElementById('stat_label_subjects');
  const statValueSubjects = document.getElementById('stat_value_subjects');
  const statLabelGames = document.getElementById('stat_label_games');
  const statValueGames = document.getElementById('stat_value_games');
  const statLabelQuizzes = document.getElementById('stat_label_quizzes');
  const statValueQuizzes = document.getElementById('stat_value_quizzes');

  if (statLabelSubjects) statLabelSubjects.textContent = t.stat_subjects_label || statLabelSubjects.textContent;
  if (statValueSubjects) statValueSubjects.textContent = t.stat_subjects_value || statValueSubjects.textContent;
  if (statLabelGames) statLabelGames.textContent = t.stat_games_label || statLabelGames.textContent;
  if (statValueGames) statValueGames.textContent = t.stat_games_value || statValueGames.textContent;
  if (statLabelQuizzes) statLabelQuizzes.textContent = t.stat_quizzes_label || statLabelQuizzes.textContent;
  if (statValueQuizzes) statValueQuizzes.textContent = t.stat_quizzes_value || statValueQuizzes.textContent;
}

// Listen for language change
document.getElementById('language-select').addEventListener('change', function() {
  setLanguage(this.value);
});

// Show footer only when user reaches page bottom
(function() {
  const footer = document.querySelector('.footer');
  if (!footer) return;

  const threshold = 64; // pixels from bottom to trigger show
  let ticking = false;

  function checkFooterVisibility() {
    const atBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - threshold);
    if (atBottom) footer.classList.remove('hidden');
    else footer.classList.add('hidden');
  }

  // initial state
  checkFooterVisibility();

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      checkFooterVisibility();
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
})();
