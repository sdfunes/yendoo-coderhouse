window.onload = function () {
  console.log('Página cargada completamente');
  suscribirseAlNewsletter();
};

let selectedOption = null;
async function descargarApp() {
  let salir = false;
  let arraySistemas = ['Android', 'iOS', 'Otro'];
  let contador_intentos = 0;
  while (!salir) {
    if (contador_intentos > 3) {
      salir = true;
      alert(
        'Ha superado el número de intentos permitidos para descargar la app'
      );
      continue;
    }
    const modal = new bootstrap.Modal(document.getElementById('downloadModal'));
    modal.show();
    selectedOption = null;
    await new Promise((resolve) => {
      const interval = setInterval(() => {
        if (selectedOption !== null) {
          clearInterval(interval);
          resolve();
        }
      }, 100);
    });

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
    alert(mensaje);
  }
}

function selectOption(option) {
  selectedOption = option;
  const modal = bootstrap.Modal.getInstance(
    document.getElementById('downloadModal')
  );
  modal.hide();
}

function suscribirseAlNewsletter() {
  const emailGuardado = localStorage.getItem('email');
  if (!emailGuardado && confirm('¿Desea suscribirse a nuestro newsletter?')) {
    let email = prompt('Ingrese su email');
    if (email) {
      localStorage.setItem('email', email);
      alert('Gracias por suscribirse a nuestro newsletter');
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
  let html = 'PREGUNTAS FRECUENTES </br>';
  for (let i = 0; i < preguntas.length; i++) {
    html += '<h3>' + preguntas[i].pregunta + '</h3>';
    html += '<p>' + preguntas[i].respuesta + '</p></br>';
  }
  alert(html);
}
