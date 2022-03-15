let digitalEl = document.querySelector(".digital");
let sEl = document.querySelector(".p_s");
let mEl = document.querySelector(".p_m");
let hEl = document.querySelector(".p_h");
let dataEl = document.querySelector(".data");

function intervalo() {
  let now = new Date();
  let hor = now.getHours();
  let min = now.getMinutes();
  let seg = now.getSeconds();

  function fxZero(time) {
    return time < 10 ? `0${time}` : time;
  }
  fxZero();

  digitalEl.innerHTML = `${fxZero(hor)}:${fxZero(min)}:${fxZero(seg)}`;

  dataEl.innerHTML = now.toLocaleDateString(now.toLocaleTimeString, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  //ponteiro do segundo
  let sDeg = (360 / 60) * seg - 90;
  sEl.style.transform = `rotate(${sDeg}deg)`;
  //ponteiro do minuto
  let mDeg = (360 / 60) * min - 90;
  mEl.style.transform = `rotate(${mDeg}deg)`;
  //ponteiro de hora
  let hDeg = (360 / 12) * hor - 90;
  hEl.style.transform = `rotate(${hDeg}deg)`;
}
setInterval(intervalo, 1000);
intervalo();
