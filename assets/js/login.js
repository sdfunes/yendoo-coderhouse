function loginModal() {
  if (validarFormLogin()) {
    const modal = new bootstrap.Modal(document.getElementById('confirmModal'));
    modal.show();
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Debe completar todos los campos',
    });
  }
}

function validarFormLogin() {
  const email = document.getElementById('email').value;
  const contrasenia = document.getElementById('contrasenia').value;
  return email && contrasenia;
}

function ingresarApp() {
  const modal = new bootstrap.Modal(document.getElementById('confirmModal'));
  modal.hide();
  window.location.href = './home.html';
  //form.submit();
}
