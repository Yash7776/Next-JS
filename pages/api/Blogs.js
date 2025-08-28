
import * as fs from 'fs'
export default async function handler(req, res) {
    let data= await fs.promises.readdir("BlogPostFiles");
    data=data.slice(0,req.query.count)
    console.log(req.query.count)
    let myfile;
    let allBlog=[];
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      myfile = await fs.promises.readFile(("BlogPostFiles/"+element),'utf-8')
      allBlog.push(JSON.parse(myfile))
    }
    res.status(200).json(allBlog)
}
