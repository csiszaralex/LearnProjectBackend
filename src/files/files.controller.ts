import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Get,
  Param,
  Delete,
  ValidationPipe,
  Res,
  UseGuards,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
@ApiTags('File')
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      dest: 'uploads',
      limits: { fileSize: 1024 * 1024 * 1024 * 30, fieldSize: 1024 * 1024 * 1024 * 30 },
    }),
  )
  @UseGuards(AuthGuard())
  uploadFile(@UploadedFile() file: Express.Multer.File): Promise<void> {
    return this.filesService.uploadFile(file);
  }

  @Get()
  @UseGuards(AuthGuard())
  getImages() {
    return this.filesService.getImages();
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  downloadImage(@Param('id', ValidationPipe) id: number, @Res() res: Response) {
    this.filesService.downloadImage(id, res);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  deleteImage(@Param('id', ValidationPipe) id: number): Promise<void> {
    return this.filesService.deleteImage(id);
  }
}
