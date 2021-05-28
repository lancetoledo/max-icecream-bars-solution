const expect = chai.expect,
  testarr = [1, 3, 2, 4, 1];
testcoins = 7;

describe('MaxIceCreamBars', () => {
  it('Find max ice cream bars.', () => {
    expect(maxIceCream(testarr, testcoins)).to.equal(
      4,
      'Please check your function!'
    );
  });
});
