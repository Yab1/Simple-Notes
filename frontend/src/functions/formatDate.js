function formatDate(timestamp) {
  const date = new Date(timestamp);

  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const time = date.toLocaleTimeString("en-US", options);

  const dateFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", dateFormatOptions);

  return { time, date: formattedDate };
}

export default formatDate;
