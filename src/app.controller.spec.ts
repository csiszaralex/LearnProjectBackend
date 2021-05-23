import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('Homepage', () => {
    it('Limit', () => {
      expect(appController.test(5, 1).length).toBe(5);
    });
    it('should return an array of cats', () => {
      let result;
      jest.spyOn(appController, 'test').mockImplementation(() => result);
      expect(appController.test()).toBe(result);
    });
  });
});
