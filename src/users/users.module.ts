import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from './users.repository';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  controllers: [UsersController],
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: () => {
        return {
          secret: process.env.SECRET || 'secret',
          signOptions: {
            expiresIn: '1h',
          },
        };
      },
    }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  providers: [UsersService, UserRepository, JwtStrategy],
  exports: [UsersModule, JwtStrategy, PassportModule],
})
export class UsersModule {}
