const History = require("../../models/history");
const {formatDate} = require("../../utils/historyUtils");
const getHistoriesController = async (req, res) => {
    try {
        const  date =req.query.date;
        const histories = await History.find();
        // get all the seven days before the date
        const startDate = new Date(date);
        startDate.setDate(startDate.getDate() - 7);
        const endDate = new Date(date);
        const chartData = [];
        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            const currentFormattedDate = formatDate(currentDate);
            const items = histories.filter((item) => {
                const itemDateFormatted = formatDate(new Date(item.createdAt));
                return itemDateFormatted === currentFormattedDate;
            });
            if (items.length === 0) {
                chartData.push({
                    createdAt: currentFormattedDate,
                    requested_bw: 0,
                    allocated_bw: 0,
                });
            } else {
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
            currentDate.setDate(currentDate.getDate() + 1);
            currentDate.setHours(0, 0, 0, 0);
        }

console.log(chartData, "chart");
        res.status(200).json(chartData);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Server error" });
    }
    }

module.exports = getHistoriesController;