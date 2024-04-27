/*
Write

Array.prototype.ofType = function(type){}
that will filter an array based on a supplied type.

For example:

var arr = [{ a: 'a' }, /a-z/, [1, 2, 3], i=>i];
arr.ofType(Object) === [{ a: 'a' }, /a-z/, [1, 2, 3], i=>i];
arr.ofType(RegExp) === [/a-z/];
arr.ofType(Array) === [[1, 2, 3]];
*/

Array.prototype.ofType = function (type) {
    return this.filter(x => x !== null && (x instanceof type || typeof x === type.name.toLowerCase()));
}