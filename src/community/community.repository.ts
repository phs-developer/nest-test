import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentLike } from 'src/entities/CommentLike';
import { Post } from 'src/entities/Post';
import { PostLike } from 'src/entities/PostLike';
import { Repository } from 'typeorm';

@Injectable()
export class CoummnityRepository {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    @InjectRepository(PostLike)
    private postLikeRepository: Repository<PostLike>,
    @InjectRepository(Comment)
    private commentRepository: Repository<PostLike>,
    @InjectRepository(CommentLike)
    private commentLikeRepository: Repository<PostLike>,
  ) {}
}
