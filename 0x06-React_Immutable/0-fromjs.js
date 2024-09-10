// Import the fromJS function from Immutable.js
const { fromJS } = require('immutable');

// Function to convert an object into an immutable Map
function getImmutableObject(object) {
    return fromJS(object);
}

const myObject = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

console.log(getImmutableObject(myObject));
