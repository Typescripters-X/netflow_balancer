const User = require("../../models/user");


const generateMonths = (start, end) => {
  const result = [];
  const startDate = new Date(start);
  const endDate = new Date(end);
  
  let currentDate = startDate;

  while (currentDate <= endDate) {
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    result.push(`${year}-${month}`);
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return result;
};

const getClientsCountByMonths = async (req, res) => {
  try {
  
    const clientsCountByMonths = await User.aggregate([
      {
        $match: {
          isAdmin: false, 
          createdAt: {
            $gte: new Date("2024-01-01T00:00:00.000Z"),
            $lte: new Date("2024-10-31T23:59:59.999Z"),
          },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m",
              date: "$createdAt",
            },
          },
          count: {
            $sum: 1,
          },
        },
      },
      {
        $sort: { _id: 1 }, 
      },
    ]);

    
    const allMonths = generateMonths("2024-01-01", "2024-10-31");

    
    const countsByMonth = {};
    clientsCountByMonths.forEach((entry) => {
      countsByMonth[entry._id] = entry.count;
    });

   
    const result = allMonths.map((month) => ({
      month,
      count: countsByMonth[month] || 0,
    }));

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getClientsCountByMonths;
