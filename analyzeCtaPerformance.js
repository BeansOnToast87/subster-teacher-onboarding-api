
export default async function handler(req, res) {
  const { fileData } = req.body;

  try {
    const rows = fileData.split("\n").slice(1).map(row => {
      const [cta_text, location, impressions, clicks, conversions] = row.split(",");
      return {
        cta_text: cta_text.replace(/"/g, '').trim(),
        conversion_rate: parseInt(conversions) / parseInt(clicks || 1)
      };
    });

    const topCTAs = rows.sort((a, b) => b.conversion_rate - a.conversion_rate).slice(0, 3);
    res.status(200).json({ topCTAs });
  } catch (err) {
    res.status(500).json({ error: "Failed to parse CTA data." });
  }
}
