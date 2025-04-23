
export default async function handler(req, res) {
  const { content } = req.body;
  const score = {
    clarity: content.length > 300 ? "✅ Clear" : "⚠️ Too brief",
    tone: content.includes("welcome") || content.includes("excited") ? "✅ Friendly" : "⚠️ May need warmth",
    usability: content.includes("click here") ? "✅ Actionable" : "⚠️ Lacks clear CTA"
  };
  res.status(200).json({ score });
}
