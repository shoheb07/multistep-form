const steps = document.querySelectorAll(".form-step");
const indicators = document.querySelectorAll(".step");
let currentStep = 0;

function showStep(step) {
  steps.forEach((s, i) => {
    s.classList.toggle("active", i === step);
    indicators[i].classList.toggle("active", i <= step);
  });
}

document.querySelectorAll(".next-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

document.querySelectorAll(".prev-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

document.getElementById("multiStepForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Form submitted successfully!");
});
