function formatMonth(month) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthNames[month - 1];
}

function formatTanggalLahir(date) {
  const inputDate = new Date(date);
  const formattedDay = String(inputDate.getDate()).padStart(2, "0");
  const formattedMonth = String(inputDate.getMonth() + 1).padStart(2, "0");
  const formattedYear = String(inputDate.getFullYear());
  const formattedDate = `${formattedDay} ${formatMonth(
    formattedMonth
  )} ${formattedYear}`;

  return formattedDate;
}

function formatTanggalInput(date) {
  // Get individual date components
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // Construct the formatted date string
  const formattedDate = `${day} ${formatMonth(
    month
  )} ${year} ${hours}:${minutes}:${seconds}`;

  return formattedDate;
}

export { formatMonth, formatTanggalLahir, formatTanggalInput };
