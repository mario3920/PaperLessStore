import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { ProductDescriptionModule } from './product-description/product-description.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [],
    synchronize: true,
    autoLoadEntities:true
  }),
    UserModule,
    ProductModule,
    ProductDescriptionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
