const convertToChartData = (data, from, to) => {
  if (!data || data.length === 0) {
    return [];
  }

  console.log(data, "data");

  // Helper function to format the date as 'yyyy-MM-dd'
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const start = from ? new Date(from) : new Date(data[0].createdAt);
  const end = to ? new Date(to) : new Date(data[data.length - 1].createdAt);

  let chartData = [];

  // Loop through each day from start to end
  let currentDate = new Date(start); // Make a copy of the start date
  while (currentDate <= end) {
    const currentFormattedDate = formatDate(currentDate);

    console.log(currentFormattedDate, "currentFormattedDate");

    const items = data.filter((item) => {
      const itemDateFormatted = formatDate(new Date(item.createdAt));
      return itemDateFormatted === currentFormattedDate;
    });

    console.log(items, currentFormattedDate, "same day");

    if (items.length === 0) {
      // No data for the current date
      chartData.push({
        createdAt: currentFormattedDate,
        requested_bw: 0,
        allocated_bw: 0,
      });
    } else {
      // Average the bandwidth data for the current date
      const requested_bw = items.reduce(
        (acc, item) => acc + item.requested_bw,
        0
      );
      const allocated_bw = items.reduce(
        (acc, item) => acc + item.allocated_bw,
        0
      );
      chartData.push({
        createdAt: currentFormattedDate,
        requested_bw: requested_bw / items.length,
        allocated_bw: allocated_bw / items.length,
      });
    }

    // Increment the current date by one day
    currentDate.setDate(currentDate.getDate() + 1);
    currentDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 00:00:00

    console.log(currentDate, "currentDate");    
  }

  return chartData;
};


const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

module.exports = {
  convertToChartData,
  formatDate,
};
