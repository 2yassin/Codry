/* Demo forms: <form data-demo data-success="message"> shows the message instead of sending.
   Replace with a real fetch() to your backend when one exists. */
document.querySelectorAll('form[data-demo]').forEach(function (f) {
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var out = f.querySelector('.form-result');
    out.textContent = f.dataset.success; out.hidden = false;
    out.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    f.reset();
  });
});
