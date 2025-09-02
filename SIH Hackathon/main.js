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
