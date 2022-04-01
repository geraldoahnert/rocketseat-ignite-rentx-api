import { ICreateCarsDTO } from '../dtos/ICreateCarsDTO';

interface ICarsRepository {
  create(data: ICreateCarsDTO): Promise<void>;
}

export { ICarsRepository };
