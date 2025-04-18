function incrementKms() {
  const input = document.getElementById('kmsInput');
  let value = parseInt(input.value, 10) || 0;
  if (value < 999) {
    input.value = value + 1;
  }
}

function decrementKms() {
  const input = document.getElementById('kmsInput');
  let value = parseInt(input.value, 10) || 0;
  if (value > 0) {
    input.value = value - 1;
  }
}

function validateKmsInput() {
  const input = document.getElementById('kmsInput');
  let value = input.value;

  value = value.replace(/[^0-9]/g, '');

  if (parseInt(value, 10) > 999) {
    value = '999';
  }

  input.value = value;
}

function submitKms() {
  const kmsInput = document.getElementById('kmsInput').value;
  if (kmsInput && parseInt(kmsInput, 10) > 0) {
    Swal.fire({
      icon: 'sucess',
      title: 'Información',
      text: `Kilómetros cargados exitosamente: ${kmsInput}`,
    });
    const modal = bootstrap.Modal.getInstance(
      document.getElementById('confirmModal')
    );
    modal.hide();
    setTimeout(() => {
      location.reload();
    }, 3000);
  } else {
    Swal.fire({
      icon: 'info',
      title: 'Información',
      text: 'Ingrese un valor válido para los kilómetros.',
    });
  }
}
