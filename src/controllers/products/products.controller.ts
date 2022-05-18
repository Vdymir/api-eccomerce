import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(): string {
    return 'listado de productos';
  }
}
