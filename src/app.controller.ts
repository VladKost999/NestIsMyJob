import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './cats.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  GetHello(): string {
    return "WELCOME TO THE CLUB , BUDDY!!!"
  }
  
  @Get(":cats")
  GetCats(): string {
    return "Ты не кот!"
  }

  @Get(":id")
  GetCatsId(@Param() params): string {
    let id = params.id
    return `This action returns a ${id} cat`;
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
}
