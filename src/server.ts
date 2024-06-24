import express from "express";
import path from "path";
import axios from "axios";

const app = express();
const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname, "src")));

app.get("/recipe", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.api-ninjas.com/v1/recipe?query=pasta"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching recipe");
  }
});

app.listen(port, () =>
  console.log(`Server is up and running on http://localhost:${port}`)
);
1;
