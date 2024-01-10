import { Module } from '@nestjs/common';
import { CommunityController } from './community.controller';
import { CommunityService } from './community.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostLike } from 'src/entities/PostLike.entity';
import { CommentLike } from 'src/entities/CommentLike.entity';
import { Post } from 'src/entities/Post.entity';
import { CoummnityRepository } from './community.repository';
import { Comment } from 'src/entities/Comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, PostLike, Comment, CommentLike])],
  controllers: [CommunityController],
  providers: [CommunityService, CoummnityRepository],
})
export class CommunityModule {}
