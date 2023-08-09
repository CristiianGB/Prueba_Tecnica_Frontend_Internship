//Explico paso a paso
// La función fizzBuzz toma un parámetro numbers, que representa la cantidad de números del 1 al numbers para los cuales se realizará la comprobación.
function fizzBuzz(numbers) {
    //el metodo para crea un nuevo array a partir de un objeto que tiene una propiedad length igual al valor de numbers. Esto crea un array de la longitud especificada.
    Array.from({ length: numbers }, (_, index) => {
      //El segundo argumento de Array.from es una función de mapeo que se ejecuta para cada índice en el nuevo array. En este caso, la función de mapeo recibe dos argumentos: _ (no se utiliza en este caso) y index, que representa el índice actual en el array.
      const num = index + 1;
      //const num = index + 1; calcula el número actual basado en el índice sumando 1 al índice. Esto ajusta el índice basado en la numeración real (1 al numbers).
      const output = (num % 3 === 0 ? 'Fizz' : '') + (num % 5 === 0 ? 'Buzz' : '');
      //const output = (num % 3 === 0 ? 'Fizz' : '') + (num % 5 === 0 ? 'Buzz' : ''); construye la cadena de resultado. Si num es múltiplo de 3, agrega 'Fizz' a la cadena output, y si es múltiplo de 5, agrega 'Buzz'. Si no es múltiplo de ninguno de los dos, se agregará una cadena vacía. Esto utiliza operadores ternarios para tomar decisiones basadas en las condiciones.
      console.log(output || num);
      //console.log(output || num); imprime output si tiene algún contenido (porque podría ser 'Fizz', 'Buzz' o 'FizzBuzz'), o imprime num si output está vacío.
    });
  }
  
  fizzBuzz(100);