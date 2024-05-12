const button = document.getElementById('btn5');
const values = [1, 2, 3, 6, 9, 8, 7, 4]

try {
  button.onclick = function () {
    values.unshift(values.pop());
    console.log("Hello user button clicked");
    document.getElementById('btn1').innerHTML = (values[0])
    document.getElementById('btn2').innerHTML = (values[1])
    document.getElementById('btn3').innerHTML = (values[2])
    document.getElementById('btn6').innerHTML = (values[3])
    document.getElementById('btn9').innerHTML = (values[4])
    document.getElementById('btn8').innerHTML = (values[5])
    document.getElementById('btn7').innerHTML = (values[6])
    document.getElementById('btn4').innerHTML = (values[7])
  }
} catch (error) {
  console.log(error)
}