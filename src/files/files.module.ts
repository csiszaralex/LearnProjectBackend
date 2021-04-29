import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [FilesController],
  providers: [FilesService],
  imports: [UsersModule],
})
export class FilesModule {}
