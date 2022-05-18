import { db } from '../../utils/databases'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function reg(req: NextApiRequest, res: NextApiResponse) {
  const { time, category, contents, link } = JSON.parse(req.body)
  await db.insert({Date: time, Category: category, Contents: contents, Link: link}).from('notice')
  res.send({ Success: true })
}