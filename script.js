function curry(callback) {
    // Return the curried function that starts collecting arguments
    return function curried(...args) {
        // If no arguments are passed, call the callback with all collected arguments
        if (args.length === 0) {
            return callback();
        }

        // Return a new function that continues to collect arguments
        return function(...newArgs) {
            if (newArgs.length === 0) {
                return callback(...args);
            }
            return curried(...args, ...newArgs);
        };
    };
}

// Example of testing
const sum = (...numbers) => numbers.reduce((total, number) => total + number, 0);
const curriedSum = curry(sum);


module.export=curry
