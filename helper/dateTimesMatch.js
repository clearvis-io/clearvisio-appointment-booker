import datesMatch from './datesMatch.js'

export default function (a, b) {
  return datesMatch(a, b) && a.getHours() == b.getHours() && a.getMinutes() == b.getMinutes() &&
    a.getSeconds() == b.getSeconds();
}
