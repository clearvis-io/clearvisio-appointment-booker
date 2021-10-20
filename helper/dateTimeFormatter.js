export default {
  formatTime: (date) => {
    date = new Date(date);
    return `${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`
  }
}
