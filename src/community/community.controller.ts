import { Body, Controller, Post } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CreatePostDto } from './Dto/Post.dto';

@Controller('community')
export class CommunityController {
  constructor(private communityService: CommunityService) {}

  @Post('/post')
  async createPost(@Body() postData: CreatePostDto) {
    const userId: number = 111;
    await this.communityService.createPost(postData, userId);
    return { message: 'post created' };
  }
}
