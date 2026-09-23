const buttons = document.querySelectorAll(".answers button");
const result = document.querySelector(".result");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("correct", "incorrect"));

    const correct = button.dataset.correct === "true";
    button.classList.add(correct ? "correct" : "incorrect");

    result.textContent = correct
      ? "Good choice. Verify the destination or source before trusting the QR code."
      : "That is risky. A professional-looking poster can still lead to a phishing site.";
  });
});
