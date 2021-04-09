import express from "express";
import "dotenv/config.js";
import fights from "./routes/fights.js";

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use("/fights", fights);

app.get("/", (req, res) => {
  res.send("<h1>This is the PokeFight API</h1>");
});

app.listen(port, () => console.log(`Server running in ${port}`));
