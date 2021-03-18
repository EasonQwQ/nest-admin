import { Controller, Get, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ParsedRequest,
  CrudRequest,
  CrudRequestInterceptor,
} from '@nestjsx/crud';
@UseGuards(AuthGuard('jwt'))
@Crud({
  model: {
    type: User,
  },
  routes: {},
})
@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}

  @UseInterceptors(CrudRequestInterceptor)
  @Get('/3')
  getaaa(@ParsedRequest() req: CrudRequest) {
    return req;
  }
}
