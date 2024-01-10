import { Module } from '@nestjs/common';
import { CommunityController } from './community.controller';
import { CommunityService } from './community.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostLike } from 'src/entities/PostLike';
import { CommentLike } from 'src/entities/CommentLike';
import { Post } from 'src/entities/Post';
import { CoummnityRepository } from './community.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Post, PostLike, Comment, CommentLike])],
  controllers: [CommunityController],
  providers: [CommunityService, CoummnityRepository],
})
export class CommunityModule {}
