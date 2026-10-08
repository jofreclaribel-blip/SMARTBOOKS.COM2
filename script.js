/*
 * Lógica JavaScript para la página de inicio de sesión
 */
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const directorCheckbox = document.getElementById('isDirector');
    const directorCodeGroup = document.getElementById('director-code-group');
    const directorCodeInput = document.getElementById('directorCode');

    // Muestra u oculta el campo del código especial
    directorCheckbox.addEventListener('change', () => {
        if (directorCheckbox.checked) {
            directorCodeGroup.style.display = 'block';
            directorCodeInput.setAttribute('required', 'true');
        } else {
            directorCodeGroup.style.display = 'none';
            directorCodeInput.removeAttribute('required');
        }
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const isDirector = directorCheckbox.checked;
        const directorCode = directorCodeInput.value;

        if (isDirector) {
            // 👇 CAMBIO CLAVE AQUÍ: Usamos 'admin123' y redirigimos a 'director.html'
            if (directorCode === 'admin123') {
                window.location.href = 'director.html'; // ⬅️ Redirección al panel del Administrador
            } else {
                alert('Código de director incorrecto. Inténtalo de nuevo.');
            }
        } else {
            // Si no es director, sigue el flujo normal
            window.location.href = 'seleccionar_perfil.html';
        }
    });
});