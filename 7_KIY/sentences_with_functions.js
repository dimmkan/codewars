/*
Implement all required functions in order to create the following sentences by calling those functions:

Adam(has(a(dog()))); // must return "Adam has a dog."
The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."
*/

function getName(args) {
  if (args.length == 0) {
    return arguments.callee.caller.name + ".";
  }
  return arguments.callee.caller.name + " " + args[0];
}

function Adam() {
  return getName(arguments);
}
function has() {
  return getName(arguments);
}
function a() {
  return getName(arguments);
}
function dog() {
  return getName(arguments);
}
function The() {
  return getName(arguments);
}
function name() {
  return getName(arguments);
}
function of() {
  return getName(arguments);
}
function the() {
  return getName(arguments);
}
function is() {
  return getName(arguments);
}
function also() {
  return getName(arguments);
}