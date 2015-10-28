// https://codility.com/programmers/task/perm_check

function solution(A) {

  var sum = 0,
      hash = {},
      N = A.length,
      expect = N * (N + 1) / 2;

  // console.log('testing if array is empty...');
  if (!N) return 0;

  // console.log('testing for permutation...');
  for (var i = 0; i < N; i++) {
    sum += A[i];
    if (hash[A[i]]) {
      // console.log('exit: found a duplicate!');
      return 0;
    }
    hash[A[i]] = true;
  }

  // console.log('test if sum resembles a permutation...');
  return (sum != expect) ? 0 : 1;

}

// permutation example
console.log(solution([4, 1, 3, 2]));
// not permutation
console.log(solution([2, 1, 1, 1]));
// not permutation (same sum)
console.log(solution([1, 4, 4, 1]));
// empty array
console.log(solution([]));
