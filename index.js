import express from "express";
import "dotenv/config.js";
import fights from "./routes/fights.js";

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use("/fights", fights);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send(
    "<h1>This is the PokeFight API</h1><p>Please use /fights to get all the fights or to post a new fight.</p>"
  );
});

app.listen(port, () => console.log(`Server running in ${port}`));
