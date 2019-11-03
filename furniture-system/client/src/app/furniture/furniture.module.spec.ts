import { FurnitureModule } from './furniture.module';

describe('FurnitureModule', () => {
  let furnitureModule: FurnitureModule;

  beforeEach(() => {
    furnitureModule = new FurnitureModule();
  });

  it('should create an instance', () => {
    expect(furnitureModule).toBeTruthy();
  });
});
