import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

@Controller()
export class AppController {
  constructor(private appService: AppService, private catService: CatsService) {}

    @Get(":cats")
    getCats() {
      return this.catService.getCats()
    }

}
