var groupId = 34990436;

const { EmbedBuilder, WebhookClient } = require('discord.js');
const express = require("express");
const rbx = require("noblox.js");
const app = express();

const webhookClient = new WebhookClient({ id: process.env.ID, token: process.env.TOKEN });

app.use(express.static("public"));

async function startApp() {
  await rbx.setCookie(process.env.KEY);
  let currentUser = await rbx.getCurrentUser();
  console.log(currentUser.UserName);
}
startApp();

app.get("/ranker", (req, res) => {
  //var Group = req.param("groupid");
  var User = req.param("userid");
  var Rank = req.param("rank");

  rbx.setRank(groupId, parseInt(User), parseInt(Rank));
  res.json("Ranked!");
  webhookClient.send({
  content: 'Discord.js webhook test',
});
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});