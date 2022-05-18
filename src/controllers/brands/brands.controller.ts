import { Controller, Get } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getProducts(): string {
    return 'listado de brands';
  }
}
