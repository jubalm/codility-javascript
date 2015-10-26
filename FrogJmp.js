// https://codility.com/programmers/task/frog_jmp

function solution(x, y, d) {
  var leap = 0;
  leap = Math.ceil((y - x) / d);
  return leap;
}

// sample
console.log(solution(10, 85, 30));
// exact
console.log(solution(10, 100, 30));
// over
console.log(solution(10, 101, 30));
