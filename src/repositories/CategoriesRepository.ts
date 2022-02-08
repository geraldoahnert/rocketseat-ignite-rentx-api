import { Category } from '../model/Category'

// DTO -> Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];

  constructor(){
    this.categories = [];
  }

  create({ description, name }: ICreateCategoryDTO): void{
    const category = new Category();

    // category.name = name;
    // category.description = description;
    // category.created_at = new Date();
    // * Refac to Object Assign
    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })
  
    this.categories.push(category)
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);
    return category;
  }
}

export { CategoriesRepository }