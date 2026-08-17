const form = document.querySelector("form");
const passwordInput = document.querySelector("#password");
const togglePassword = document.querySelector(".toggle-password");
const formStatus = document.querySelector(".form-status");

togglePassword.addEventListener("click", () => {
    const isHidden = passwordInput.type === "password";

    passwordInput.type = isHidden ? "text" : "password";
    togglePassword.textContent = isHidden ? "Ocultar" : "Mostrar";
    togglePassword.setAttribute("aria-label", isHidden ? "Ocultar senha" : "Mostrar senha");
    togglePassword.setAttribute("aria-pressed", String(isHidden));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Login demonstrativo: nenhuma conta foi acessada.";
    formStatus.classList.add("is-visible");
});
