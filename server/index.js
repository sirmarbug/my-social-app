const http = require("http")
const app = require("./src/app")

const { API_PORT } = process.env
const port = process.env.PORT || API_PORT

const server = http.createServer(app)

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})