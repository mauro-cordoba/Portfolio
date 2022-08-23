var typed = new Typed(".auto", {
    strings: ["Self-Taugth", "Mauro Cordoba", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 130,
    loop: true,
  });

  const btnSwicth = document.getElementById('switch');

  btnSwicth.addEventListener('click', () => {
    document.body.classList.toggle('ligth');
    btnSwicth.classList.toggle('active');

    if(document.body.classList.contains('ligth')) {
      localStorage.setItem('ligth-mode', 'true');
  } else {
    localStorage.setItem('ligth-mode', 'false');
  }
});

if(localStorage.getItem('ligth-mode') === 'true' ) {
  document.body.classList.add('ligth');
  btnSwicth.classList.add('active');
} else {
  document.body.classList.remove('ligth');
  btnSwicth.body.classList.remove('active');
};


prompt("Inserte un numero");
