import { Injectable } from '@nestjs/common';
import { CoummnityRepository } from './community.repository';
import { CreatePostDto } from './Dto/Post.dto';
import { createCommentDto } from './Dto/Comment.dto';

@Injectable()
export class CommunityService {
  constructor(private CommunityRepository: CoummnityRepository) {}

  async createPost(postData) {
    const { title, subCategoryId, content, userId } = postData;
    await this.CommunityRepository.createPost(
      title,
      userId,
      subCategoryId,
      content,
    );
  }

  async getPostDetail(postId: number) {
    const postDetail = await this.CommunityRepository.getPostDetail(postId);
    console.log('service: ' + postDetail);
    return postDetail;
  }

  async updatePost(postId: number, updateData: CreatePostDto) {
    const { title, subCategoryId, content, userId } = updateData;
    return await this.CommunityRepository.updatePost(
      postId,
      title,
      subCategoryId,
      content,
      userId,
    );
  }

  async deletePost(postId: number) {
    return await this.CommunityRepository.deletePost(postId);
  }

  async createComment(postId: number, createComment: createCommentDto) {
    const { userId, content } = createComment;
    return await this.CommunityRepository.createComment(
      postId,
      userId,
      content,
    );
  }
}
