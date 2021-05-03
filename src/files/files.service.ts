import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { File } from './entities/file.entity';
import { FilesRepository } from './files.repository';
import { unlinkSync, createReadStream } from 'fs';
import { Response } from 'express';

@Injectable()
export class FilesService {
  constructor(@InjectRepository(FilesRepository) private filesRepository: FilesRepository) {}

  uploadFile(file: Express.Multer.File): Promise<void> {
    if (!file) throw new BadRequestException('File is required');
    return this.filesRepository.createFile(
      file.originalname,
      file.filename,
      file.path,
      file.mimetype,
      file.size,
    );
  }

  getImages(): Promise<File[]> {
    return this.filesRepository.getAll();
  }

  async downloadImage(id: number, res: Response) {
    await this.filesRepository.addDownload(id);
    const file = await this.filesRepository.getById(id);
    res.header('Content-Type', file.mime);
    res.header('Content-Disposition', `attachment; filename="${file.name}"`);

    const data = createReadStream(file.path);
    data.pipe(res);
  }

  async deleteImage(id: number): Promise<void> {
    const file = await this.filesRepository.getById(id);
    unlinkSync(file.path);
    return this.filesRepository.deleteFile(id);
  }
}
