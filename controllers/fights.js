import client, { ObjectId } from "../db/mongo.js";
client.connect();

const getAllFights = async (req, res) => {
  try {
    const sort = { score: -1 };
    const results = await client
      .db("pokefightDB")
      .collection("pokefightHighScore")
      .find()
      .sort(sort)
      .limit(10)
      .toArray();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNewFight = async (req, res) => {
  try {
    const { name, pokename, score, win, numberofrolls } = req.body;
    const result = await client
      .db("pokefightDB")
      .collection("pokefightHighScore")
      .insertOne({
        name,
        pokename,
        score,
        win,
        numberofrolls,
      });
    res.json(result.ops[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getAllFights;
