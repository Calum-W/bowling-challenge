'use strict';

describe("Game", function() {

  var game = new Game();

  beforeEach(function() {
    game = new Game();
  })

  it("should initialise with a score of zero", function() {
    expect(game.score).toEqual(0);
  })
  it("should add the score from the frame once it's complete", function() {
    game.bowl(3)
    game.bowl(4)
    expect(game.score).toEqual(7)
  })
  it('should start a new frame on the third roll (no strike)', function() {
    game.bowl(2)
    game.bowl(6)
    game.bowl(2)
    expect(game.frameNumber).toEqual(2)
    expect(game.currentFrame.score).toEqual(2)
  })
  it('should start a new frame after a strike', function() {
    game.bowl(10)
    game.bowl(6)
    expect(game.frameNumber).toEqual(2)
    expect(game.currentFrame.score).toEqual(6)
  })
})
