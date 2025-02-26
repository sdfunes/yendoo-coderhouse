window.onload = function () {
  console.log('Página cargada completamente');
  suscribirseNewsletter();
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

function suscribirseNewsletter() {
  if (confirm('¿Desea suscribirse a nuestro newsletter?')) {
    let email = prompt('Ingrese su email');
    if (email) {
      alert('Gracias por suscribirse a nuestro newsletter');
    }
  }
}
