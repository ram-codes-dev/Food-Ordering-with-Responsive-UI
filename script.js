const cursorOuter = document.querySelector('.cursor-outer');
const cursorInner = document.querySelector('.cursor-inner');

// ✅ Only run cursor movement code on desktop (screen width > 768px)
if (window.innerWidth > 768) {
  document.addEventListener('mousemove', e => {
    cursorOuter.style.left = e.clientX + 'px';
    cursorOuter.style.top = e.clientY + 'px';
    cursorInner.style.left = e.clientX + 'px';
    cursorInner.style.top = e.clientY + 'px';
  });
}

const menuLinks = document.querySelectorAll('.navbar a');

menuLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();

      const target = document.querySelector(href);
      if (target) {
        smoothScrollTo(target, 400); // ✅ 400ms = slightly faster
      }
    }
  });
});


function smoothScrollTo(targetElement, duration) {
  const startY = window.pageYOffset;
  const targetY = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const distance = targetY - startY;
  const startTime = performance.now();

  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function scrollStep(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); // clamp to [0,1]
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (elapsed < duration) {
      requestAnimationFrame(scrollStep);
    }
  }
  // Select the heading
const signatureHeading = document.querySelector('.signature-description h2');

let pos = 0;

function animateGradient() {
  pos += 1;
  if (pos > 100) pos = 0;

  // Animate background-position from 0% to 100%
  signatureHeading.style.backgroundPosition = `${pos}% 70%`;

  requestAnimationFrame(animateGradient);
}

// Start animation if element exists
if (signatureHeading) {
  animateGradient();
}
  requestAnimationFrame(scrollStep);
}
const hamburgerBtn = document.getElementById('hamburger-btn');
const navbar = document.querySelector('.navbar');

hamburgerBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  
  alert('Thank you for reaching out! We’ll get back to you soon.');
  form.reset();
});
function triggerTracking() {
  const input = document.getElementById('orderInput');
  const value = input.value.trim();
  const statusDiv = document.getElementById('progress-track');
  const progressLine = document.getElementById('progressLine');
  const steps = document.querySelectorAll('.circle');
  
   
  if (value.length !== 10 || !/^\d{10}$/.test(value)) {
    alert("❗ Please enter a valid 10-digit number.");
    return;
  }

  statusDiv.classList.remove('hidden');
  progressLine.style.width = '0%';

  steps.forEach(step => step.classList.remove('active'));
  steps[0].classList.add('active');

  // Animate timeline slowly
  let currentStep = 0;
  const timeline = setInterval(() => {
    if (currentStep < steps.length) {
      steps[currentStep].classList.add('active');
      const maxWidth = 90; // Prevent 100% to avoid overshooting
      progressLine.style.width = `${(currentStep / (steps.length - 1)) * maxWidth}%`;
      currentStep++;
    } else {
      clearInterval(timeline);
    }
  }, 1500);
}

function rateModern(count) {
  const stars = document.querySelectorAll('.star-row span');
  stars.forEach((star, index) => {
    star.classList.toggle('active', index < count);
  });
}

 window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("sign-in").addEventListener("click", function () {
    window.location.href = "signin.html";
  });

  document.getElementById("subscribe-form").addEventListener("submit", function (event) {
    event.preventDefault(); // prevent scroll to top

    alert("✅ Thank you for subscribing!");

    // Clear the input AFTER alert is dismissed
    document.querySelector('#subscribe-form input[type="email"]').value = "";
  });
});
// Allow only 0–9 digits, limit to 10 digits
function validatePhone(input) {
  input.value = input.value.replace(/[^0-9]/g, '').slice(0, 10);
}
function submitFeedback() {
  const message = document.getElementById('feedbackMessage').value.trim();

  if (message === '') {
    alert("❗ Please enter your feedback before submitting.");
    return;
  }

  alert("✅ Thank you for your feedback!");

  // Clear the message
  document.getElementById('feedbackMessage').value = "";

  // Reset star rating
  const stars = document.querySelectorAll('.star-row span');
  stars.forEach(star => star.classList.remove('active'));
}
