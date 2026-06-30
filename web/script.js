document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.button-primary, .button-secondary');
  buttons.forEach(button => {
    button.addEventListener('click', function (event) {
      const href = button.getAttribute('href');
      if (href && href.startsWith('#')) {
        event.preventDefault();
        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
