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
    console.log(postId);
    return postDetail;
  }

  async updatePost(
    postId: number,
    title: string,
    subCategoryId: number,
    content: string,
    userId: number,
  ) {
    const originPost = await this.getPostDetail(postId);

    console.log('@@originPost: ' + originPost);

    return await this.postRepository
      .createQueryBuilder()
      .update(Post)
      .set({
        title: title,
        subCategoryId: subCategoryId,
        contentUrl: content,
        userId: userId,
      })
      .where('post.id = :id ', { id: postId })
      .execute();
  }

  async deletePost(postId: number) {
    // 논리 삭제
    return await this.postRepository.softDelete({ id: postId });
  }

  async createComment(postId: number, userId: number, content: string) {
    const result = await this.commentRepository
      .createQueryBuilder()
      .insert()
      .into(Comment)
      .values({
        comment: content,
        postId: postId,
        userId: userId,
      })
      .execute();
    console.log('레포 성공');
    return result;
  }
}
