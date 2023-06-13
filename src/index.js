import app from "./app.js";
import dbConnect from "./utils/dbConnection.js";
import 'dotenv/config'

const PORT = process.env.PORT || 5000;

dbConnect();

app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
});
