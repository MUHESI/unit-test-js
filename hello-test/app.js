const sentence = "Hello World";
// const sentence = "";
function isPaladrom(world) {
    return world === world.split('').reverse().join('');
}

module.exports = {
    sentence, isPaladrom
}