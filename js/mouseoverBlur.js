document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.content-js');

    elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            elements.forEach(other => {
                if (other !== element) {
                    other.classList.add('blur');
                }
            });
        });

        element.addEventListener('mouseleave', () => {
            elements.forEach(other => {
                if (other.classList.contains('blur')) {  // ← Verificar primero
                    other.classList.remove('blur');
                }
            });
        });
    });
});
