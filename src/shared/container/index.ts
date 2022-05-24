import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { ICarsImagesRepository } from "@modules/cars/infra/typeorm/repositories/ICarsImagesRepository";
import { container } from "tsyringe";

import "@shared/container/providers";

import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { CarsRepository } from "@modules/cars/infra/typeorm/repositories/CarsRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationInMemory";
import { CarsImagesRepository } from "@modules/cars/infra/typeorm/repositories/CarsImagesRepository";
import { RentalsRepository } from "@modules/rentals/infra/typeorm/repositories/RentalsRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);

container.registerSingleton<ICarsImagesRepository>(
  "CarsImagesRepository",
  CarsImagesRepository
);

container.registerSingleton<IRentalsRepository>(
  "RentalsRepository",
  RentalsRepository
);
