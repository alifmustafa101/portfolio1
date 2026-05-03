document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("typed-text");

    if (!element) {
        console.error("typed-text element not found");
        return;
    }

    const text = "Hi there. welcome to the world where we will create the next level of coding.";
    let index = 0;
    const speed = 80;

    element.textContent = "";

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
});