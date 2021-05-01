import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { UsersModule } from 'src/users/users.module';
import { FilesRepository } from './files.repository';

@Module({
  controllers: [FilesController],
  providers: [FilesService, FilesRepository],
  imports: [UsersModule],
})
export class FilesModule {}
