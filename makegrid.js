function makeGrid() {  
  //  rows, columns, table  
  
  var rows = $('#input_height').val();
  var columns = $('#input_width').val();
  var table = $('#pixel_canvas');
  table.children().remove();
  
  //create rows and columns
  for (var i=0; i<rows; i++) {
    table.append('<tr></tr>');  
    for (var j=0; j<columns; j++) {
      table.children().last().append('<td></td>');
    }
  }
  //select color to the table
  table.on('click', 'td', function() {
    var color = $('#colorSelector').val();
    $(this).attr('bgcolor', color);
  });
}

  $('#submit').on('click', function(event) {
   event.preventDefault(); 
   makeGrid(); 
  });
  $('#submit').click('clear', function(event) {
    event.preventDefault();
  });