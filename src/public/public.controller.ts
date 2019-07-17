import {
  Controller,
  Param,
  Body,
  ParseIntPipe,
  Get,
  Post,
  Query,
  Delete,
  Res,
  Req,
  Put,
  HttpException,
  HttpStatus,
  Session,
  UseGuards,
} from '@nestjs/common';
import {PublicService} from "./services/public.service";
@Controller('public')
export class PublicController {
  constructor(private readonly publicService: PublicService) {}

  @Get('captcha')
  async getCaptcha(@Req() req,@Res() res,@Session() session): Promise<object> {
    let {data,text}= await this.publicService.getCaptcha()
    // session.captcha = text;
    res.type('svg');
    return res.send(data);
  }


  @Get('captcha1')
  async getCaptcha1(@Req() req,@Res() res,@Session() session): Promise<any> {
    // let {data,text}= await this.publicService.getCaptcha()
    // console.log(text)
    // session.captcha = text;
    // console.log(data)
    console.log(session)
    // res.type('svg');
    // return res.send(data);
    return 123123
  }
}
