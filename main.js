const express = require("express")

express()
  .get("/", (request, response) => {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress
    console.log(ip)

    response.send(ip)
  })
  .listen(process.env.PORT, console.log(`Server started on ${process.env.PORT}`))
