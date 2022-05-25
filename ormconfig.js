module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  entities: [
    './src/modules/cars/infra/typeorm/entities/*.ts',
    './src/modules/accounts/infra/typeorm/entities/*.ts',
    './src/modules/rentals/infra/typeorm/entities/*.ts',
  ],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
  autoLoadEntities: true,
};
