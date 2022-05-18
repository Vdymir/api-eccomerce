import { Controller, Get } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getCategorys(): string {
    return 'listado de categoriasz';
  }
}
