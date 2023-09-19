function receivesAFunction(callback) {
   return callback();
}

function returnsANamedFunction() {
    return function namedFunction(){
    };
}
const myFunction = returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return function() {

    };
}
