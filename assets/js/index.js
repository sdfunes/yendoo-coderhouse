window.onload = function () {
  console.log('Página cargada completamente');
  suscribirseAlNewsletter();
};

document.querySelector('.btn.btn-info').addEventListener('click', async () => {
  try {
    await descargarApp();
    console.log('La descarga ha comenzado.');
  } catch (error) {
    console.error('Hubo un problema al iniciar la descarga:', error);
  }
});

let selectedOption = null;

async function descargarApp() {
  let salir = false;
  let arraySistemas = ['Android', 'iOS', 'Otro'];
  let contador_intentos = 0;

  const modal = new bootstrap.Modal(document.getElementById('downloadModal'));
  while (!salir) {
    if (contador_intentos > 3) {
      salir = true;
      await Swal.fire({
        icon: 'error',
        title: 'Límite de intentos alcanzado',
        text: 'Ha superado el número de intentos permitidos para descargar la app.',
      });
      break;
    }

    modal.show();
    let selectedOption = await esperandoSeleccion();
    modal.hide();

    let mensaje = 'Descargando app para ';

    switch (selectedOption) {
      case 0:
      case 1:
      case 2:
        mensaje += arraySistemas[selectedOption];
        salir = true;
        break;
      case 3:
        salir = true;
        continue;
      default:
        mensaje = 'Opción inválida';
        salir = false;
        break;
    }
    contador_intentos++;
    await Swal.fire({
      icon: 'info',
      title: 'Información',
      text: mensaje,
    });
  }
}

function esperandoSeleccion() {
  const buttons = document.querySelectorAll('#downloadModal button');
  return new Promise((resolve) => {
    buttons.forEach((button) => {
      button.addEventListener('click', function handleClick(event) {
        const option = parseInt(event.target.dataset.option, 10);
        selectedOption = option;
        buttons.forEach((btn) => btn.removeEventListener('click', handleClick));
        resolve(option);
      });
    });
  });
}

function suscribirseAlNewsletter() {
  const emailGuardado = localStorage.getItem('email');
  if (!emailGuardado && confirm('¿Desea suscribirse a nuestro newsletter?')) {
    let email = prompt('Ingrese su email');
    if (email) {
      localStorage.setItem('email', email);
      Swal.fire({
        icon: 'success',
        title: 'Gracias por suscribirse a nuestro newsletter',
        text: mensaje,
      });
    }
  }
}

function mostrarPreguntasFrecuentes() {
  const preguntas = [
    {
      pregunta: '¿Cómo me registro a la APP?',
      respuesta:
        'Para registrarte en la APP debes dirigirte a la opción de "Registrarse" y allí podrás completar tus datos para registrarte.',
    },
    {
      pregunta: '¿Cómo ingreso a la aplicación?',
      respuesta:
        'Para ingresar a la aplicación debes dirigirte a la opción de "Login" e ingresar tu usuario y contraseña con los que te registraste.',
    },
    {
      pregunta: '¿Cómo cargo kilómetros?',
      respuesta:
        'Para cargar kilómetros debes dirigirte a la opción de "Cargar Kilómetros", ingresar la cantidad y seleccionar un modo de pago.',
    },
  ];
  const html = preguntas
    .map((item) => `<h3>${item.pregunta}</h3><p>${item.respuesta}</p></br>`)
    .join('');
  Swal.fire({
    icon: 'info',
    title: 'PREGUNTAS FRECUENTES',
    html: html,
  });
}
