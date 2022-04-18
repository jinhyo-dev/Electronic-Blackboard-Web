import knex from 'knex'

export const db = knex({
  client: 'mysql',
  connection: {
      host: '158.247.211.247', 
      port: 3306, 
      user: 'jinhyo', 
      database: 'Notice' 
  }
})