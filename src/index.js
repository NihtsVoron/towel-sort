
// You should implement your task here.

module.exports = function towelSort (matrix) {

  var result =[];
  if (matrix == null)
    return [];

  if (matrix.length == 0)
    return [];

  let fromLeft=true;
  for (let matrix_row of matrix) {
    if (fromLeft){
      for (let i = 0; i < matrix_row.length; i++) {
        let matrix_element = matrix_row[i];
        result.push(matrix_element);
      }
    }
    else{
      for (let i = matrix_row.length-1; i >= 0; i--) {
        let matrix_element = matrix_row[i];
        result.push(matrix_element);
      }
    }
    fromLeft=!fromLeft;
  }

  return result;
}
