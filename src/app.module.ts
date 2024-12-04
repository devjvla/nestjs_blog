import { Module } from '@nestjs/common';

/* Modules */
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
