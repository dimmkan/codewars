

function alphanumeric(string){
  return /^[0-9A-Za-z]+$/i.test(string);
}

console.log(alphanumeric("Mazinkaiser"));
console.log(alphanumeric("hello world_"));
console.log(alphanumeric("PassW0rd"));
console.log(alphanumeric("     "));
console.log(alphanumeric("43534h56jmTHHF3k"));
console.log(alphanumeric("2tSfx!3xh4uT38_s"));