import { Injectable } from '@nestjs/common';
import { CoummnityRepository } from './community.repository';

@Injectable()
export class CommunityService {
  constructor(private CommunityRepository: CoummnityRepository) {}
}
