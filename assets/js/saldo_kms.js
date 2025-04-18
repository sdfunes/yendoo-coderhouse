window.onload = function () {
  fetch('../database/saldo_actual.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching data: ' + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      const labelSaldo = document.querySelector('.saldokms');
      labelSaldo.innerHTML = `${data[0].saldo_actual} kms.`;
    })
    .catch((error) => {
      console.error('Falla en la lectura del archivo', error);
    });
};
