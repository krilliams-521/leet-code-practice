/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  points.sort((a, b) => {

    // distance from origin = sqrt(x^2 + y^2)
    const distanceA = a[0] * a[0] + a[1] * a[1];
    const distanceB = b[0] * b[0] + b[1] * b[1];

    console.log(`Distance for ${a}: ${distanceA}`);
    console.log(`Distance for ${b}: ${distanceB}`);

    return distanceA - distanceB;
  });

  return points.slice(0, k);
};

console.log(kClosest([[1, 3], [-2, 2]], 1)) // [[-2,2]]
console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2)) // [[3,3],[-2,4]]