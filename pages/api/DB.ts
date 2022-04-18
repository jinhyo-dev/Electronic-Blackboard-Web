import { db } from '../../utils/databases'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function DB(req: NextApiRequest, res: NextApiResponse) {
    const notice = await db.select('*').from('notice')
    console.log(notice)
    return res.send({ Success: true, notice })
}