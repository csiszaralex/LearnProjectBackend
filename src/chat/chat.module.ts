import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { UsersModule } from 'src/users/users.module';
import { ChatRepository } from './chat.repository';
import { UserRepository } from 'src/users/users.repository';

@Module({
  controllers: [ChatController],
  providers: [ChatService, ChatRepository, UserRepository],
  imports: [UsersModule],
})
export class ChatModule {}
