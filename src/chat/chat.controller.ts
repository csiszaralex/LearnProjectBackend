import {
  Controller,
  Get,
  Body,
  Param,
  Put,
  UseGuards,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUserid } from 'src/users/decorators/get-userid.decorator';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Put(':to')
  @UseGuards(AuthGuard())
  sendMessage(
    @GetUserid() id: number,
    @Param('to', ParseIntPipe) to: number,
    @Body(ValidationPipe) createChatDto: CreateChatDto,
  ) {
    return this.chatService.sendMessage(+id, +to, createChatDto);
  }

  @Get('history')
  @UseGuards(AuthGuard())
  getHistory(@GetUserid() id: number) {
    return this.chatService.getHistory(+id);
  }

  @Get()
  @UseGuards(AuthGuard())
  getLastContactId(@GetUserid() id: number) {
    return this.chatService.getLastContactId(+id);
  }

  @Get(':to')
  @UseGuards(AuthGuard())
  getChat(@GetUserid() id: number, @Param('to', ParseIntPipe) to: string) {
    return this.chatService.getChat(+id, +to);
  }
}
