/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let num=init;
    return{
      increment: () => num = num+1, 
      decrement: ()=> num = num-1,
      reset: ()=> num = init
    };
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */