import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { FilesModule } from './files/files.module';
@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot({
      envFilePath: [process.env.NODE_ENV === 'production' ? '.env' : '.env.dev', '.env.example'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOSTNAME || 'localhost',
      port: 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'test',
      entities: [__dirname + '/../**/*.entity.js'],
      synchronize: true,
    }),
    UsersModule,
    FilesModule,
  ],
  providers: [],
})
export class AppModule {}
