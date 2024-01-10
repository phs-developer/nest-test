import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/entities/Comment.entity';
import { CommentLike } from 'src/entities/CommentLike.entity';
import { Post } from 'src/entities/Post.entity';
import { PostLike } from 'src/entities/PostLike.entity';
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

  async createPost(
    title: string,
    userId: number,
    subCategoryId: number,
    content: string,
  ) {
    const post = this.postRepository.create({
      title: title,
      content_url: content,
      sub_category_id: subCategoryId,
      user_id: userId,
    });
    return await this.postRepository.save(post);
  }
}
