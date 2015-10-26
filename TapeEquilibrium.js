// https://codility.com/programmers/task/tape_equilibrium

function solution(A) {
  var minDiff,
    sumTotal = 0,
    sumLeft = 0;

  if (A.length == 2) {
    return Math.abs(A[0] - A[1]);
  }

  if (A.length == 1) {
    return Math.abs(A[0]);
  }

  for (i = 0; i < A.length; i++) {
    sumTotal += A[i];
  }

  for (p = 0; p < A.length - 1; p++) {
    sumLeft += A[p];
    var sumRight = sumTotal - sumLeft;
    var diff = Math.abs(sumLeft - sumRight);
    minDiff = (diff > minDiff) ? minDiff : diff;
  }

  return minDiff;

}

// sample
console.log(solution([3,1,2,4,3]));
// negative
console.log(solution([-10, -20, -30, -40, 100]));
