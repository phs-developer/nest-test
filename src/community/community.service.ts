import { Injectable } from '@nestjs/common';
import { CoummnityRepository } from './community.repository';
import { CreatePostDto } from './Dto/Post.dto';

@Injectable()
export class CommunityService {
  constructor(private CommunityRepository: CoummnityRepository) {}

  async createPost(postData, userId) {
    const { title, subCategoryId, content } = postData;
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
    const { title, subCategoryId, content } = updateData;
    return await this.CommunityRepository.updatePost(
      postId,
      title,
      subCategoryId,
      content,
    );
  }

  async deletePost(postId: number) {
    return await this.CommunityRepository.deletePost(postId);
  }
}
