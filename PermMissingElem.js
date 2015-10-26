// https://codility.com/programmers/task/perm_missing_elem

function solution(A) {

  var N = A.length + 1;
  var sumExpected = N * (N + 1) / 2;

  if (!A.length) return 1;

  var sumCurrent = A.reduce(function(a, b) { return a + b; });

  return sumExpected - sumCurrent;

}

// sample
console.log(solution([2, 3, 1, 5]));
// empty array
console.log(solution([]));
