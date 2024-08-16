function curry(callback) {
    // A function that returns another function to collect the arguments.
    return function curried(...args) {
        // If no arguments are passed, invoke the callback with all collected arguments.
        if (args.length === 0) {
            return callback();
        }

        // Return a new function that continues collecting arguments
        return function(...newArgs) {
            // If no new arguments are passed, invoke the callback with all accumulated arguments.
            if (newArgs.length === 0) {
                return callback(...args);
            }

            // Otherwise, return the curried function with accumulated arguments.
            return curried(...args, ...newArgs);
        };
    };
}
const sum = (...numbers) => numbers.reduce((total, number) => total + number, 0);
const curriedSum = curry(sum);
module.export=curry
