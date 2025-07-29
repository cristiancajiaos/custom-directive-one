import { LimitKey } from './limit-key';

describe('LimitKey', () => {
  it('should create an instance', () => {
    const directive = new LimitKey();
    expect(directive).toBeTruthy();
  });
});
