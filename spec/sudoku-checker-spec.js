var Sudoku = require('./../js/sudoku-checker.js').sudokuModule;

// describe('sudoku-checker', function() {
//   var reusableSudoku;
//
//   beforeEach(function() {
//     reusableSudoku = new Sudoku();
//   });
//
//     it('checks if set_list starts empty', function() {
//       var set_list = []
//       expect(reusableSudoku.set()).toEqual([]);
//     });
//
//     it('checks if set_list starts empty', function() {
//       var set_list = []
//       expect(reusableSudoku.set()).toEqual([]);
//     });
//
//     // it('checks if grid is a valid sudoku board', function() {
//     //   expect(reusableSudoku.check_sudoku(grid)).toEqual(null);
//     // });
//
//
// });

describe('rowChecker', function() {
  var reusableSudoku;

  beforeEach(function() {
    reusableSudoku = new Sudoku();
  });

    it('checks if user input matches winning set', function() {
      var user_input = [["1", "2", "3", "4", "5", "6", "7", "8", "9"], ["1", "2", "3", "4", "5", "6", "7", "8", "9"]]
      expect(reusableSudoku.rowChecker(user_input)).toEqual(true);
    });

    it('checks if user input matches winning set in any order', function() {
      var user_input = [["1", "2", "3", "4", "5", "6", "7", "8", "9"], ["4", "5", "6", "1", "2", "3", "7", "8", "9"]]
      expect(reusableSudoku.rowChecker(user_input)).toEqual(true);
    });


    it('checks if user input has any repeat variables', function() {
      var user_input = [["2", "2", "3", "4", "5", "6", "7", "8", "9"], ["4", "2", "4", "4", "5", "6", "7", "8", "9"]]
      expect(reusableSudoku.rowChecker(user_input)).toEqual(false);
    });
});

describe('columnChecker', function() {
  var reusableSudoku;

  beforeEach(function() {
    reusableSudoku = new Sudoku();
  });

    it('checks if column user input matches winning set', function() {
      var user_input = [["1"], ["2"], ["3"], ["4"], ["5"], ["6"], ["7"], ["8"], ["9"]]
      expect(reusableSudoku.rowChecker(user_input)).toEqual(true);
    });

});
