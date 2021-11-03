const meetingPlanner = (slotsA, slotsB, dur) => {
  let indexA = 0;
  let indexB = 0;
  while (indexA < slotsA.length && indexB < slotsB.length) {
    let durStart = Math.max(slotsA[indexA][0], slotsB[indexB][0]);
    let durEnd = Math.min(slotsA[indexA][1], slotsB[indexB][1]);
    if (durEnd - durStart >= dur) {
      return [durStart, durStart + dur];
    }
    if (slotsA[indexA][1] < slotsB[indexB][1]) {
      indexA++;
    } else {
      indexB++;
    }
  }
  return [];
};

const slotsA = [
  [80, 70],
  [60, 120],
  [140, 210],
];
const slotsB = [
  [0, 15],
  [60, 70],
];
const dur = 8;

console.log(meetingPlanner(slotsA, slotsB, dur));

// Time Complexity: we are traversing every input array at most once, hence the time complexity is linear, i.e O(N+M), where N and N are lengths of slotsA and slotsB, respectively.

// Space Complexity: it’s O(1). We are using four auxiliary variables, all of which are occupying only a constant amount of space.
