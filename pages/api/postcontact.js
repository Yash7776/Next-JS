import * as fs from 'fs'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let data= await fs.promises.readdir("PostContact")
    console.log (data.length)
    fs.promises.writeFile(`PostContact/${data.length+1}.json`, JSON.stringify(req.body))

    res.send({"masssage":"Post Request"})
  } else {
    res.send({"masssage":"Other Request"})
  }
}