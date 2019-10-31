import { PostCountPipe } from './post-count.pipe';

describe('PostCountPipe', () => {
  it('create an instance', () => {
    const pipe = new PostCountPipe();
    expect(pipe).toBeTruthy();
  });
});
