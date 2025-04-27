const express = require("express");
const app = express();
const User = require("./db/users")
const cors = require("cors")

app.use(express.json())
app.use(cors())

require("./db/config")

app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result)
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
