import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Get,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('File')
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', { dest: 'uploads' }))
  uploadFile(@UploadedFile() file: Express.Multer.File): Promise<void> {
    return this.filesService.uploadFile(file);
  }

  @Get()
  getImages() {
    return this.filesService.getImages();
  }

  //TODO
  @Get(':id')
  downloadImage(@Param('id', ValidationPipe) id: number) {
    return this.filesService.downloadImage(id);
  }

  @Delete(':id')
  deleteImage(@Param('id', ValidationPipe) id: number): Promise<void> {
    return this.filesService.deleteImage(id);
  }
}
