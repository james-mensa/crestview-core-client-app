export function formatDate(date) {
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  }
  