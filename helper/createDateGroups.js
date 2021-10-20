import datesMatch from './datesMatch.js';

const groupLength = 5;

const createDateGroup = (date) => {
  var dateGroup = [new Date(date)];

  for (let i = 0; i < groupLength - 1; i++) {
    date = new Date(date);
    date.setDate(date.getDate() + 1);
    dateGroup.push(date);
  }

  dateGroup.hasDate = function(date) {
    for (let i = 0; i < groupLength; i++) {
      if (datesMatch(this[i], date)) {
        return true;
      }
    }
  }

  return dateGroup;
}

var dateGroups = [];

export default function () {
  if (dateGroups.length) {
    return dateGroups;
  }

  var date = new Date();

  for (var i = 0; i <= 100; i++) {
    dateGroups.push(createDateGroup(date));
    date = new Date(date);
    date.setDate(date.getDate() + groupLength);
  }

  return dateGroups;
}
