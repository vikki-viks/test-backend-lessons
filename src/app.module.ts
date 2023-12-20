import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './entity/user.entity';
import { Evaluation } from './entity/evaluation.entity';
import { Lesson } from './entity/lesson.entity';
import { LessonModule } from './lessons/lesson.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [User, Evaluation, Lesson],
      synchronize: true,
      dropSchema: false,
    }),
    UserModule,
    LessonModule,
    AuthModule,
  ],
})
export class AppModule {}
