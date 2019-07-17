import { Injectable, Param } from '@nestjs/common';
import * as svgCaptcha from "svg-captcha"

@Injectable()
export class PublicService {
  constructor() {}
  captchaObje={
    data:'',
    text:'',
  }

  async getCaptcha(): Promise<any> {
    var captcha = svgCaptcha.create({
      // 翻转颜色
      inverse: false,
      // 字体大小
      fontSize: 36,
      // 噪声线条数
      noise: 2,
      // 宽度
      width: 80,
      // 高度
      height: 30,
    });
    this.captchaObje=captcha
    return captcha;
  }
}
