function ExampleConstructor() {}
console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var exConstruct = new ExampleConstructor();
console.log('value of exConstruct:', exConstruct);

var check = exConstruct instanceof ExampleConstructor;
console.log('value of check:', check);
