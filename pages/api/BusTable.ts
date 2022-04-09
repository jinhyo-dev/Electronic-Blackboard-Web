import { db } from '../../utils/databases'
import moment from 'moment'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function cityBusTableAPI(req: NextApiRequest, res: NextApiResponse) {
    const { start, destination } = req.query
    const [hours, minutes] = moment(Date.now()).format('HH:mm').split(':')
    // const sql = `SELECT * FROM ${start} WHERE destination LIKE '%${destination}%' AND time > curtime() ORDER BY time asc, ABS(time-curtime()) LIMIT 1`
    // const sql2 = `SELECT * FROM ${start} WHERE destination  LIKE '%${destination}%' ORDER BY time asc;`
    // const [data] = await db.select('*').from("BusTable").where('start', start).andWhere('destination', destination).andWhere('hours', '>=', hours).andWhere('minutes', '>=', minutes).orderBy('id', 'desc')
    const [data2] = await db.select('*').from(String(start)).whereLike('destination', destination).orderBy('time', 'asc')
    return res.send({ data2 })
}
