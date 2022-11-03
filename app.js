const express = require("express");
const app = express();
const clients = require("./routes/Clients.route");
const ceramique = require("./routes/Ceramique.route");
const orders = require("./routes/Orders.route");


app.use(express.json());
app.use("/client", clients);
app.use("/ceramique", ceramique);
app.use("/orders", orders);

app.all("/*", (req, res) => {
  res.status(404).send("Not Found");
});

app.listen(3000, () =>
  console.log("Adresse du serveur : http://localhost:3000")
);
