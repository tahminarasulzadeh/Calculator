let input = document.getElementById("input");

function send(say) {
  input.value += say;
}

function equal() {
  input.value = eval(input.value);
}
function remove() {
  input.value = " ";
}
