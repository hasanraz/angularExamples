import { HellopipePipe } from './hellopipe.pipe';

describe('HellopipePipe', () => {
  it('create an instance', () => {
    const pipe = new HellopipePipe();
    expect(pipe).toBeTruthy();
  });
});
