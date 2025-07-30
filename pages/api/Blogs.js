// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs'
export default function handler(req, res) {
  fs.readdir("BlogPostFiles",(err,data)=>{
    console.log(data);
    res.status(200).json(data);
  })
}
