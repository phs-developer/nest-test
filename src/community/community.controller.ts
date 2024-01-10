import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Get('/post/:postId')
  async getPostDetail(@Param('postId') postId: number) {
    const result = await this.communityService.getPostDetail(postId);
    return result;
  }

  @Put('/posts/update/:postId')
  async updatePost(
    @Param('postId') postId: number,
    @Body() updateData: CreatePostDto,
  ) {
    return await this.communityService.updatePost(postId, updateData);
  }

  @Delete('/post/:postId')
  async deletePost(@Param('postId') postId: number) {
    return await this.communityService.deletePost(postId);
  }
}
