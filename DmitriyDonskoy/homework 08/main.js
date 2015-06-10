var multiplicationTableHolder = document.getElementById('multiplication-table');
var matrixHolder = document.getElementById('matrix');
var pascalTriangleHolder = document.getElementById('pascal-triangle');

matrixHolder.innerHTML =  render(matrix(10));
multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
pascalTriangleHolder.innerHTML = render(pascal(10));

function multiplicationTable(size) {
  var table = [];
  var i, j;
  for (i=0; i<size; i++ ){
    table[i] = [];
    for (j=1; j<=size;j++) {
     table[i][j] = j*(i+1)
    }
  }
  return table;
}

function matrix (size) {
    var matrix = [];
    var i, j;
    for( i=0; i<size; i++){
        matrix[i] = [];
        matrix[i][i]=1;
        matrix[i][size-(i+1)]=2;

        for (var j = size-i; j < i; j++){
            matrix[j][i] = 4;
        };
        for(j=i+1;j<=size-(i+2);j++){
            matrix[i][j]=3;
        };
        for(j=size-i; j<i; j++){
            matrix[i][j]=5;
            };
    };
    for (i = 0; i<size; i++){
        for (j = i+1; j < (size-1)-i; j++){
            matrix[j][i] = 6;
            };
    }
    return matrix;
}

function pascal (size) {
  var triangle = [];
  var i,j;
    for(i=0;i<size;i++){
        triangle[i]=[];
        triangle[i][i]=1;
        triangle[i][0]=1;
        for(j=1;j<=i-1;j++){
            triangle[i][j]=triangle[i-1][j-1]+triangle[i-1][j];
        }
    }
  return triangle;
}

function render (array) {
  var rowsQty = array.length;
  var result = [];
  for (var i = 0; i < rowsQty; i++) {
    var row = ['<tr><td>', array[i].join('</td><td>'), '</td></tr>'].join('');
    result.push(row);
  }
  return result.join('');
};