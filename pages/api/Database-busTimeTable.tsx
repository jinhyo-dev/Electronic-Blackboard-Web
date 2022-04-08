import knex from 'knex'
const db = knex({
    client: 'mysql',
    connection: {
        host: '158.247.211.247', 
        port: 3306, 
        user: 'jinhyo', 
        database: 'Bus_TimeTable' 
    }
})

export default async function cityBusTableAPI(req, res) {
    const { start, destination } = req.query
    const sql = `SELECT * FROM ${start} WHERE destination LIKE '%${destination}%' AND time > curtime() ORDER BY time asc, ABS(time-curtime()) LIMIT 1`
    const sql2 = `SELECT * FROM ${start} WHERE destination  LIKE '%${destination}%' ORDER BY time asc;    `
    const [data] = await db.raw(sql)
    const [data2] = await db.raw(sql2)
    return res.json({ data, data2, Success:true})
}