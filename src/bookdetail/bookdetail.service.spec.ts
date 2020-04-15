import { Test, TestingModule } from '@nestjs/testing';
import { BookdetailService } from './bookdetail.service';

describe('BookdetailService', () => {
  let service: BookdetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookdetailService],
    }).compile();

    service = module.get<BookdetailService>(BookdetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
