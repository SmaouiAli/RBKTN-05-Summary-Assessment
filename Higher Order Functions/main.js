function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function (element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}

var cohort3 = [
  {
    name: "Haythem",
    age: 10,
    rank: "Master",
    level:29,
    champion:"kha'Zix"
  },
  {
    name: "Rayyen",
    age: 9,
    rank: "Diamond",
    level:28,
    champion:"Vex"
  },
  {
    name: "Sameh",
    age: 10,
    rank: "Master",
    level:29,
    champion:"Sett"
  },
  {
    name: "Oussema",
    age: 11,
    rank: "Challenger",
    level:30,
    champion:"Ashe"
  },
];

//: you can only use one of the high order functions once.
//  Means that if you use filter in the first function you can not use it in the next function ! just use another higher order function.

var oldest = function (cohort3) {
  //return the oldest student in the group
};

var goodEnough = function (cohort3) {
  //return an array of the students good enough to participate (minimum level 29)
};

var champions = function (cohort3) {
  //return an array of all students' champions
};

var totalPoints = function (cohort3) {
  //return the total of all students points
};
