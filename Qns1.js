//Q:1
console.log([]+[])
console.log({}+{})
console.log({}+[])


// here + operator will try to typecast [] to a string and after typoe casting it will return empty string

// ex: console.log(string([]))  -> type casting [] to a string

// so,

  console.log(String([]))   // empty string return