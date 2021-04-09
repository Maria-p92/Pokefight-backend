import express from "express";
import getAllFights, { createNewFight } from "../controllers/fights.js";

const fights = express.Router();

fights.get("/", getAllFights);
fights.post("/", createNewFight);

export default fights;
