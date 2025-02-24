const express = require("express");
const app = express();

app.use(express.json());

app.use("/", require("./routes/index"));
app.use("/api", require("./routes/url"));

const PORT=process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
