const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

app.get("/compute", (req, res) => {
	let num = req.query.number;
	let n = parseFloat(num);
	let r = n ** 0.5;
	let msg = " num = " + n + " sqrt = " + r.toFixed(2);
	fs.appendFile("result.txt", msg + " " + new Date().toString() + "\n", (err) => {
		if(err)		console.log(err);
	})
	res.json({"msg":msg});
});

app.listen(9000, () => { console.log("server ready @ 9000"); })