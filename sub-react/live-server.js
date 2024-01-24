const liveServer = require("live-server");

liveServer.start({
  port: 6001,
  root: './build',
  open: true,
  cors: true
})
