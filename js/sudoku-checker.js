function Sudoku() {
  this.matrix = [
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

Sudoku.prototype.rowChecker = function(user_input) {
  var winningSet = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  if ((user_input.sort().toString()) !== (winningSet.toString())) {
    return false;
  } else {
		return true;
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
//
// }
//
//
//
//
exports.sudokuModule = Sudoku;
