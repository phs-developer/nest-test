// 데이터베이스와 typeorm 연결 파일

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'test',
  entities: [__dirname + '/../**/*entity.{js,ts}'],
  synchronize: true,
  logging: true,
};
