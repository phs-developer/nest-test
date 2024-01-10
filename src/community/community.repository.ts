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
    const post = await this.postRepository
      .createQueryBuilder()
      .insert()
      .into(Post)
      .values({
        title: title,
        contentUrl: content,
        subCategoryId: subCategoryId,
        userId: userId,
      })
      .execute();

    return post;
  }

  async getPostDetail(postId: number) {
    const postDetail = await this.postRepository.findOne({
      where: { id: postId },
    });
    console.log('repository: ' + postDetail);
    return postDetail;
  }

  async updatePost(postId, title, subCategoryId, content) {
    return await this.postRepository
      .createQueryBuilder()
      .update(Post)
      .set({
        title: title,
        subCategoryId: subCategoryId,
        contentUrl: content,
      })
      .where('post.id = :id ', { id: postId })
      .execute();
  }

  async deletePost(postId) {
    // 논리 삭제
    return await this.postRepository.softDelete({ id: postId });
  }
}
