const express = require("express")

express()
  .get("/", (request, response) => {
    console.log(request.ips)

    response.send(response.ips)
  })
  .listen(process.env.PORT, console.log(`Server started on ${process.env.PORT}`))
