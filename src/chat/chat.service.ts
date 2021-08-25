import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UserRepository } from 'src/users/users.repository';
import { ChatRepository } from './chat.repository';
import { CreateChatDto } from './dto/create-chat.dto';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatRepository) private chatRepository: ChatRepository,
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}

  sendMessage(id: number, to: number, createChatDto: CreateChatDto) {
    const { message } = createChatDto;
    return this.chatRepository.sendMessage(id, to, message);
  }

  async getHistory(id: number) {
    const chats = await this.chatRepository.getHistory(id);
    const extChats = [];
    for (const chat of chats) {
      const user: User = await this.userRepository.getUserById(chat.id);
      extChats.push({ ...chat, name: user.name });
    }

    return extChats;
  }

  async getLastContactId(id: number) {
    return (await this.getHistory(id))[0].id;
  }

  getChat(id: number, to: number) {
    return this.chatRepository.getChat(id, to);
  }
}
