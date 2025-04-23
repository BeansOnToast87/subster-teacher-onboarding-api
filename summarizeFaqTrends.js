
export default async function handler(req, res) {
  const { faqText } = req.body;
  const commonThemes = ["availability", "visa", "profile visibility", "working with children check"];
  const summary = commonThemes.filter(theme => faqText.toLowerCase().includes(theme)).map(theme => `✓ Frequently asked about: ${theme}`);
  res.status(200).json({ summary });
}
