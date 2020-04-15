import { Test, TestingModule } from '@nestjs/testing';
import { BookdetailController } from './bookdetail.controller';

describe('Bookdetail Controller', () => {
  let controller: BookdetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookdetailController],
    }).compile();

    controller = module.get<BookdetailController>(BookdetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
