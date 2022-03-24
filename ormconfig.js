module.exports = {
  type: 'postgres',
  host: 'database_ignite',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  entities: [
    './src/modules/cars/entities/*.ts',
    './src/modules/accounts/entities/*.ts',
  ],
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
  autoLoadEntities: true,
};
