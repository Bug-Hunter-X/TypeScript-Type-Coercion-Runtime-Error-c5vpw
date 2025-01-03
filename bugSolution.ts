function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers.');
  }
  return a + b;
}

let result = add(5, 5); // Works correctly

try {
  let result2 = add("hello", 5); // Throws an error at runtime
} catch (error) {
  console.error(error);
}

let result3 = add(5, "5"); //Throws an error at runtime