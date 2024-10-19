const User = require('../../models/user');

const getSubscriptionsController = async (req, res) => {
    try {
        const subscriptions = await User.find({ isAdmin: false });
        const subscribersCount = subscriptions.length;
        
        const ten = subscriptions.filter(subscription => subscription.max_bw === 10).length;
        const twenty = subscriptions.filter(subscription => subscription.max_bw === 20).length;
        const thirty = subscriptions.filter(subscription => subscription.max_bw === 30).length;
        const forty = subscriptions.filter(subscription => subscription.max_bw === 40).length;
        const fifty = subscriptions.filter(subscription => subscription.max_bw === 50).length;

        const chartData  = [
        {max_bw: 10, count: ten,fill:"#1AB380"},
        {max_bw: 20, count: twenty ,fill:"#FF7B00"},
        {max_bw: 30, count: thirty ,fill:"#FFC300"},
        {max_bw: 40, count: forty ,fill:"#1A67B3"},
        {max_bw: 50, count: fifty ,fill:"#003566"}
    ];
        res.json(
            {
                subscribersCount,
                chartData 
            }
        );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    };

module.exports = getSubscriptionsController;