import { ICreateCarsDTO } from '@modules/cars/dtos/ICreateCarsDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amout,
    name,
    license_plate,
  }: ICreateCarsDTO): Promise<void> {
    const car = new Car();

    Object.assign(car, {
      brand,
      category_id,
      daily_rate,
      description,
      fine_amout,
      name,
      license_plate,
    });

    this.cars.push(car);
  }
}

export { CarsRepositoryInMemory };
