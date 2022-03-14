const fs = require("fs")
const path = require("path")

const generate = () => {
  const options = {
    presets: ["next/babel"],
    plugins: ["istanbul"],
  }

  fs.writeFileSync(path.join(__dirname, "../.babelrc"), JSON.stringify(options, null, 2))
  console.log(".babelrc generated", options)
}

generate()
