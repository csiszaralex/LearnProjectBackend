import { EntityRepository, Repository } from 'typeorm';
import { File } from './entities/file.entity';
import { InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';

@EntityRepository(File)
export class FilesRepository extends Repository<File> {
  private logger = new Logger('FilesRepository');

  async createFile(
    name: string,
    fileName: string,
    path: string,
    mime: string,
    size: number,
  ): Promise<void> {
    const file = new File();
    file.name = name;
    file.file = fileName;
    file.path = path;
    file.mime = mime;
    file.size = size;
    try {
      await file.save();
      this.logger.verbose('File created');
      return;
    } catch (err) {
      this.logger.warn(err);
      throw new InternalServerErrorException();
    }
  }

  async getAll(): Promise<File[]> {
    return await File.find();
  }

  async getById(id: number): Promise<File> {
    const file = await File.findOne(id);
    if (!file) throw new NotFoundException('File not found!');
    return file;
  }

  async deleteFile(id): Promise<void> {
    const file = await this.getById(id);
    try {
      await file.remove();
      this.logger.verbose('File deleted');
      return;
    } catch (err) {
      this.logger.warn(err);
      throw new InternalServerErrorException();
    }
  }
}
