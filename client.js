$(document).ready(onReady);

function onReady() {
  $('#generate-button').on('click', newRow)

}

// append a new div element on click of button
function newRow(){
  $('#newGenerationArea').append('<div></div>')
}
