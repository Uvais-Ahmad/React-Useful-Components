export default function getFinalState(baseState, queue) {
    console.log("BaseState init",baseState);
    queue.forEach(item => {
        if(typeof(item) == 'function'){
            baseState = item(baseState);
        }
        else {
            baseState = item;
        }
    })
    console.log("BaseState final",baseState);

    let finalState = baseState;
    // TODO: do something with the queue...
  
    return finalState;
  }
  