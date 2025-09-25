import { Injectable } from '@nestjs/common';
import { CreateHelloDto } from './dto/create-hello.dto';
import { UpdateHelloDto } from './dto/update-hello.dto';

@Injectable()
export class HelloService {

  findAll() {
    return `Hello from HelloController!`;
  }
}
