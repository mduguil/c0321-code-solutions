/* exported getStudentNames */
function getStudentNames(students) {
  var nameValues = [];
  for (var i = 0; i < students.length; i++) {
    nameValues.push(students[i].name);
  }
  return nameValues;
}
