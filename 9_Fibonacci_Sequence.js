// Fibonacci sequence = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144.......
// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8
// 5 + 8 = 13

function fibonacciGenerator(n) {
    // n = number of terms in the sequence

    let output = [];
    if (n === 1) {
        output = [0];
    }
    else if (n === 2) {
        output = [0, 1];
    }

    else {
        output = [0, 1];
        for (let i = 2; i < n ; i++) {
            sum = output[output.length - 2] + output[output.length - 1];  // sum = 1
            output.push(sum);  // [0, 1, 1]
        }

    }
    console.log( output);
}

fibonacciGenerator(6);