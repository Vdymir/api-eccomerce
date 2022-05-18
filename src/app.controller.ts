import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndpoint(): string {
    return 'hola';
  }

  @Get('api/user/:id')
  getUser(@Param('id') id: string): string {
    return `user => ${id}`;
  }
}
