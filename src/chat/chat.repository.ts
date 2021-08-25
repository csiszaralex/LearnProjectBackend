import { EntityRepository, Repository } from 'typeorm';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { Chat } from './entities/chat.entity';

@EntityRepository(Chat)
export class ChatRepository extends Repository<Chat> {
  private logger = new Logger('ChatRepository');

  async sendMessage(id: number, to: number, message: string) {
    const chat = new Chat();
    chat.from = id;
    chat.to = to;
    chat.message = message;
    try {
      await chat.save();
      this.logger.verbose(`Message sent from ${id} to ${to}`);
      delete chat.id;
      return chat;
    } catch (error) {
      this.logger.warn(error);
      throw new InternalServerErrorException();
    }
  }
  async getHistory(id: number) {
    const chats = await Chat.find({
      where: [{ from: id }, { to: id }],
      order: { sent: -1 },
    });
    const filteredChat = chats.map(x => {
      if (x.from === id) return { id: x.to, message: x.message, sent: x.sent, type: 0 };
      return { id: x.from, message: x.message, sent: x.sent, type: 1 };
    });
    const history = [];
    filteredChat.map(chat => {
      if (history.filter(x => x.id === chat.id).length === 0) {
        history.push(chat);
      }
    });
    return history;
  }
  async getChat(id: number, to: number) {
    const chats = await Chat.find({
      where: [
        { from: id, to },
        { from: to, to: id },
      ],
      select: ['from', 'to', 'message', 'sent'],
      order: { sent: -1 },
    });
    const filteredChat = chats.map(x => {
      if (x.from === id) return { message: x.message, sent: x.sent, type: 0 };
      return { message: x.message, sent: x.sent, type: 1 };
    });
    return filteredChat;
  }
}
