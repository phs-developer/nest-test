import { Injectable } from '@nestjs/common';
import { CoummnityRepository } from './community.repository';

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
}
