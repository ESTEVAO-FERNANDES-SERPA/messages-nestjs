import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    return body;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string, @Query('teste') teste: any) {
    return id + '-' + teste;
  }
}
