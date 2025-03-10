window.onload = function () {
    const form = document.getElementById("form1");
    const pristine = new Pristine(form);

    form.addEventListener("submit", function (e) {
        const valid = pristine.validate(); // Retorna true si el formulario es válido

        if (!valid) {
            e.preventDefault(); // Detiene el envío si hay errores de validación
        }
    });
};