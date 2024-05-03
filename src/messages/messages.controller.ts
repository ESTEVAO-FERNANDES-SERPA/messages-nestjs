import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesRepo: MessageService) {}
  @Get()
  listMessages() {
    return this.messagesRepo.findAll();
  }

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    this.messagesRepo.create(body.content);
    return body;
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesRepo.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found');
    }

    return message;
  }
}
