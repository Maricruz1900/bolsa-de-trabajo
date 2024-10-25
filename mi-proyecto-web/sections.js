document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos las secciones del formulario
    const sections = document.querySelectorAll('.section');
    let currentSection = 0;
  
    // Función para cambiar de sección
    function showSection(index) {
      sections.forEach((section, i) => {
        section.classList.toggle('active', i === index);
      });
    }
  
    // Mostrar la siguiente sección al hacer clic en los botones
    document.getElementById('next1').addEventListener('click', function() {
      currentSection++;
      showSection(currentSection);
    });
  
    document.getElementById('next2').addEventListener('click', function() {
      currentSection++;
      showSection(currentSection);
    });
  
    // Inicialmente mostrar la primera sección
    showSection(currentSection);
  });
  
