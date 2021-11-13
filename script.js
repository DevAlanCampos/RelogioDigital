function relogio() {
  let data = new Date();
  let dia = data.getDate();
  let mes = data.getMonth();
  let hor = data.getHours();
  let min = data.getMinutes();
  let seg = data.getSeconds();

  if (hor < 10) {
    hora = `0${hor}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  if (seg < 10) {
    seg = `0${seg}`;
  }
  let horas = `${hor} : ${min} : ${seg}`;

  document.getElementById("rel").value = horas;
  let mes_dia = document.getElementById("display-month-day");
  mes_dia.innerHTML = `${mes + 1}<small>m</small><br>
  ${dia}<small>d</small><br>`;
}
let tempo = setInterval(relogio, 1000);
