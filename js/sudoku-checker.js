//This is a clone of https://gist.github.com/hayd/3108041 (from Andy Hayden https://github.com/hayd)
//This is a conversion from a Python file to JavaScript (from https://gist.github.com/3097993)
//This is our attempt to implement Jasmine and Karma testing for this logic

function Sudoku() {

}

Sudoku.prototype.set = function set(list){
    /*
     * returns list with no repeated entries
     */
    var set_list = [];
    for (var element in list){
        if (!(element in set_list)){
            set_list.push(element);
        }
    }
    return set_list;
};

Sudoku.prototype.range = function range(start, stop, step){
    /*
     * A pythonic range function.
     *
     * Thanks to Tardeck on StackOverflow (http://stackoverflow.com/a/8273091)
    */
    if (typeof stop=='undefined'){
        // one param defined
        stop = start;
        start = 0;
    }
    if (typeof step=='undefined'){
        step = 1;
    }
    if ((step>0 && start>=stop) || (step<0 && start<=stop)){
        return [];
    }
    var result = [];
    for (var i=start; step>0 ? i<stop : i>stop; i+=step){
        result.push(i);
    }
    return result;
};

Sudoku.prototype.check_sudoku = function check_sudoku(grid){
    /**
     * If grid is a valid sudoku board, so far filled-in correctly: returns true
     * else if grid is a valid sudoku board but has been filled-in incorrectly: returns false
     * else: returns null
     *
     *  Note: returning true does not imply there is a solution for grid, see solve_sudoku.
     */
    function sanity_check(){
        /**
         * If grid is of the sudoku board format: returns true
         * Else: returns null
         */
        if (!( grid instanceof Array && grid.length === 9 )){
            return null;
        }
        for (var row in grid){
            if (!( row instanceof Array && row.length === 9 )){
                return null;
            }
            for (var element in row){
                if (!( element in range(10) && String(element).length === 1)){
                    return null;
                }
            }
        }
        return true;
    }

    function no_repeats_check(numbers){
        return numbers.length === set(numbers).length;
    }

    function row_check(row){
        var non_zero_in_row = [];
        for (var col in range(9)){
            if (grid[row][col] !==0){
                non_zero_in_col.push(grid[row][col]);
            }
        }
        return no_repeats_check(non_zero_in_row);
    }

    function col_check(col){
        var non_zero_in_col = [];
        for (var row in range(9)){
            if (grid[row][col] !==0){
                non_zero_in_col.push(grid[row][col]);
            }
        }
        return no_repeats_check(non_zero_in_col);
    }

    function square_check(start_row, start_col){
        var non_zero_in_square = [];
        for (var row in range(start_row, start_row+3)){
            for (var col in range(start_col, start_col+3)){
                if (grid[row][col] !== 0){
                    non_zero_in_square.push(grid[row][col]);
                }
            }
        }
        return no_repeats_check(non_zero_in_square);
    }

    if (! sanity_check()){
        return null;
    }
    for (var row in range(9)){
        if (! row_check(row)){
            return false;
        }
    }
    for (var col in range(9)){
        if (! col_check(col)){
            return false;
        }
    }
    for (var start_row in range(0,9,3)){
        for (var start_col in range(0,9,3)){
            if (!square_check(start_row,start_col)){
                return false;
            }
        }
    }
    return true;
};

Sudoku.prototype.solve = function solve_sudoku(grid){
    /**
     * If grid is a valid board and it can be completed: returns an example completed grid
     * Else if grid is a valid board, but there are no possible solutions: returns false
     * Else: returns null
     */
    var check_grid = check_sudoku(grid);
    if (! check_grid){
        return check_grid;
    }

    //recursion on the empty squares
    for (var row in range(9)){
        for (var col in range(9)){
            if (grid[row][col] === 0){
                //this is the first empty square
                for (var k in range(1,10)){
                    grid[row][col] = k;
                    var solved = solve_sudoku(grid);
                    if (solved){
                        //we've found a solution recursively
                        return solved;
                    }
                //reset the empty square, there's no way to fill it in.
                grid[row][col] = 0;
                return false;
                }
            }
        }
    }

    //there are no empty squares and check_sudoku is true, so grid is a solution.
    return grid;
};
