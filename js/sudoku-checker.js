function Sudoku() {
  var matrix = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]

}
//
// Sudoku.prototype.isPresent = function(element) {
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array.length; j++) {
//       if element != null {
//         true
//       }
//     }
//   }
// }

// Sudoku.prototype.winningCondition = function(user_input) {

  Sudoku.prototype.rowChecker = function(matrix) {
    var winningSet = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    // matrix.forEach(function(arr) {
    //   if ((arr.sort().toString()) !== (winningSet.toString())) {
    //     return false;
    //   }
    // });

    for (var i = 0; i < 8; i++) {
      var array = matrix[i];
      for (var j = 0; j < 8; j++) {
        if ((array.sort().toString()) !== (winningSet.toString())) {
          return false;
        } else {
          return true;
        }
      }
    }
  };

  // Sudoku.prototype.columnChecker = function(column) {
  //
  //   for (var i = 0; i < array.length; i++) {
  //     for (var j = 0; j < array.length; j++) {
  //       if element != null {
  //         true
  //       }
  //     }
  //   }
  // }
  //
  // Sudoku.prototype.blockChecker = function(block) {
  //
  // }

// }

exports.sudokuModule = Sudoku;
