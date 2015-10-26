function solution(X, A) {

  var N = A.length;
  var sumExpected = X * (X + 1) / 2;
  var sumCurrent = 0;
  var high = 0;
  var objectA = {};

  if (!A.length) return -1;
  if (X > N) return -1;
  if (A.indexOf(X) === -1) return -1;

  for (var i = 0; i < N; i++) {
    if (!objectA.hasOwnProperty(A[i])) {
      objectA[A[i]] = i;
    }
  }

  for (var key in objectA) {
    if (key <= X) {
      sumCurrent += parseInt(key);
      high = objectA[key] > high ? objectA[key] : high;
    }
  }

  if (sumCurrent != sumExpected) return -1;

  return high;

}

// sample
console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
// empty array
console.log(solution(3, []));
// not possible
console.log(solution(5, [1, 2, 3]));
// not possible
console.log(solution(2, [2, 2, 2, 2]));
