export default function handler(req, res) {
  res.status(200).json({
    status: "NINEX API WORKING",
    credits: "infinite"
  });
}
