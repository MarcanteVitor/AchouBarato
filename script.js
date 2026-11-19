document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Em breve: este botão será conectado ao seu link de afiliado da Amazon.');
  });
});
