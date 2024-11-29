function redLight() {
  clearLight();
  document.getElementById("redLight").style.backgroundColor = "red";
}

function yellowLight() {
  clearLight();
  document.getElementById("yellowLight").style.backgroundColor = "yellow";
}

function greenLight() {
  clearLight();
  document.getElementById("greenLight").style.backgroundColor = "green";
}

function clearLight() {
  document.getElementById("redLight").style.backgroundColor = "gray";
  document.getElementById("yellowLight").style.backgroundColor = "gray";
  document.getElementById("greenLight").style.backgroundColor = "gray";
}
