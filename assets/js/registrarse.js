window.onload = function () {
  let emailGuardado = localStorage.getItem('email');
  if(emailGuardado) {
    document.getElementById('email').value = emailGuardado;
  }
};
