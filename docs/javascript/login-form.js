const loginForm = document.getElementById("loginForm");
const loginToast = document.getElementById("loginToast");
let toastTimer;

if (loginForm && loginToast) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!loginForm.reportValidity()) {
            return;
        }

        loginForm.reset();
        loginToast.classList.remove("opacity-0", "translate-y-2");
        loginToast.classList.add("opacity-100", "translate-y-0");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () {
            loginToast.classList.add("opacity-0", "translate-y-2");
            loginToast.classList.remove("opacity-100", "translate-y-0");
        }, 2600);
    });
}
