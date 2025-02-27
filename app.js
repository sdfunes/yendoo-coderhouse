window.onload = function () {
  console.log('Página cargada completamente');
  suscribirseAlNewsletter();
};

function descargarApp() {
  let salir = false;
  let arraySistemas = ['Android', 'iOS', 'Otro'];
  while (!salir) {
    let opcion = prompt(
      'Indique su Sistema Operativo para descargar la app: 0-Android, 1-iOS, 2-Otro S.O., 3-Cancelar'
    );
    let mensaje = 'Descargando app para ';
    if (!opcion) {
      alert(
        'Debe indicar una opción de descarga. Caso contrario marque 3 para cancelar'
      );
    } else {
      switch (opcion) {
        case '0':
        case '1':
        case '2':
          mensaje += arraySistemas[opcion];
          salir = true;
          break;
        case '3':
          return;
        default:
          mensaje = 'Opción inválida';
          salir = false;
          break;
      }
      alert(mensaje);
    }
  }
}

function suscribirseAlNewsletter() {
  if (confirm('¿Desea suscribirse a nuestro newsletter?')) {
    let email = prompt('Ingrese su email');
    if (email) {
      alert('Gracias por suscribirse a nuestro newsletter');
    }
  }
}

function mostrarPreguntasFrecuentes() {
  let preguntas = [
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
