window.onload = function () {
  const emailGuardado = localStorage.getItem('email');
  if (emailGuardado) {
    document.getElementById('email').value = emailGuardado;
  }
};

function registroModal() {
  if (validarFormRegistro() && validarContrasenias()) {
    const modal = new bootstrap.Modal(document.getElementById('confirmModal'));
    modal.show();
  } else {
    if (!validarFormRegistro()) {
      alert('Debe completar todos los campos');
    } else {
      alert('Las contraseñas no coinciden');
    }
  }
}

function validarFormRegistro() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const contrasenia = document.getElementById('contrasenia').value;
  const contrasenia2 = document.getElementById('contrasenia2').value;
  return nombre && apellido && email && contrasenia && contrasenia2;
}

function validarContrasenias() {
  const contrasenia = document.getElementById('contrasenia').value;
  const contrasenia2 = document.getElementById('contrasenia2').value;
  return contrasenia === contrasenia2;
}

function registrarUsuario() {
  alert('Usuario registrado correctamente');
  const modal = new bootstrap.Modal(document.getElementById('confirmModal'));
  modal.hide();
  window.location.href = './login.html';
  //form.submit();
}
