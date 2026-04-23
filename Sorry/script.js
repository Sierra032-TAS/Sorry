const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');

// Función para mover el botón No
btnNo.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
});

// Acción al presionar el botón Sí
btnSi.addEventListener('click', () => {
    alert('¡Sabía que me perdonarías! Te quiero mucho. ❤️');
});