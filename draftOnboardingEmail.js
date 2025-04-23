
export default async function handler(req, res) {
  const { name, stage } = req.body;

  const messages = {
    welcome: `Hi ${name}, welcome to Subster! We're excited to help you find relief teaching work that suits your schedule.`,
    activation: `Hi ${name}, you're almost there! Just one more step to activate your Subster profile and start receiving job offers.`,
    dashboard_intro: `Hi ${name}, your Subster dashboard is live! Here’s how to get the most from your teaching profile.`
  };

  res.status(200).json({ email: messages[stage] || "Stage not recognized." });
}
