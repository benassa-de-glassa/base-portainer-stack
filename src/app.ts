import express from "express";
import { setRoutes } from "./routes/index";

const app = express();
const PORT = 3000;

app.use(express.json());
setRoutes(app);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
