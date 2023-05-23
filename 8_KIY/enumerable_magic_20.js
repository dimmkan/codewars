/*
Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.
*/

const eachCons = (array, n) => array.map((_, i) => array.slice(i, i + n)).filter(item => item.length === n);

/*{
  let result = [];
  for(let i = 0; i + n <= array.length; i++){
    result.push(array.slice(i, i + n));
  }  
	return result;
}*/