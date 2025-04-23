
export default async function handler(req, res) {
  const { entry } = req.body;
  console.log("Logged prompt entry:", entry);
  res.status(200).json({ status: "Entry logged to prompt journal." });
}
