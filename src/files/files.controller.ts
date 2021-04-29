import {
  Controller,
  Get,
  Post,
  Param,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File): any {
    return {
      // file: file.buffer.toString(),
      file,
    };
  }

  @Get()
  @UseGuards(AuthGuard())
  findAll() {
    // return this.filesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.filesService.findOne(+id);
  }
}
