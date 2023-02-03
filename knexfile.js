module.exports = {
  client: 'postgresql',
  connection: {
    database: 'monitoria',
    user: 'postgres',
    password: 'chiarelli'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}
