window.onload = function () {
  fetch('../database/mis_viajes.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching data: ' + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      llenarListaViajes(data, 3);
      botonCargarMasViajes(data);
    })
    .catch((error) => {
      console.error('Falla en la lectura del archivo', error);
    });
};

function llenarListaViajes(viajes, limit) {
  const tableBody = document.querySelector('.lista-viajes tbody');
  tableBody.innerHTML = '';

  // Display only the limited number of rows
  viajes.slice(0, limit).forEach((viaje, index) => {
    const fechaFormateada = formatFecha(viaje.fecha);
    const row = document.createElement('tr');
    row.innerHTML = `
      <th scope="row">${index + 1}</th>
      <td>${fechaFormateada} ${viaje.hora}</td>
      <td>${viaje.origen}</td>
      <td>${viaje.destino}</td>
    `;
    tableBody.appendChild(row);
  });
}

function botonCargarMasViajes(viajes) {
  const botonCargarMas = document.querySelector('.cargar-mas');
  let currentLimit = 3;

  botonCargarMas.addEventListener('click', () => {
    currentLimit += 3;
    llenarListaViajes(viajes, currentLimit);
    if (currentLimit >= viajes.length) {
      botonCargarMas.style.display = 'none';
    }
  });
}

function formatFecha(fecha) {
  const [year, month, day] = fecha.split('-');
  return `${day}/${month}/${year}`;
}
