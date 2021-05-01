import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { File } from './entities/file.entity';
import { FilesRepository } from './files.repository';
import { unlinkSync } from 'fs';

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

  downloadImage(id: number) {
    //! Egy fájl letöltése ID alapján
  }

  async deleteImage(id: number): Promise<void> {
    const file = await this.filesRepository.getById(id);
    unlinkSync(file.path);
    return this.filesRepository.deleteFile(id);
  }
}
