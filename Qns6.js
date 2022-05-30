console.log(0.1 + 0.2);

// A Float number have a limited precision of 64 bits, about 16 digits
// Because of this limited percision floating point somethimes give 
// round off error while calculations

// solution:
// prevent round-off errors showing up in output
var ans = math.add(0.1, 0.2);       //  0.30000000000000004
math.format(ans, {precision: 14});  // '0.3'


