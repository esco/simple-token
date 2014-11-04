var tokenize = require('../simple-token.js');

describe('tokenize', function () {

  describe('immutables', function () {
    it('should tokenize boolean', function(){
      tokenize(true).should.equal('true');
      tokenize(false).should.equal('false');
    });

    it('should tokenize number', function(){
      tokenize(4).should.equal('4');
    });

    it('should tokenize string', function(){
      tokenize('test').should.equal("\"test\"");
    });

    it('should tokenize undefined', function(){
      tokenize(undefined).should.equal('undefined');
    });

    it('should tokenize null', function(){
      tokenize(null).should.equal('null');
    });
  });

  describe('mutables', function () {
    it('should tokenize array', function(){
      tokenize([]).should.equal('$1');
    });

    it('should tokenize object', function(){
      tokenize({}).should.equal('$2');
    });

    it('should tokenize function', function(){
      tokenize(function(){}).should.equal('$3')
    });

    it('should tokenize RegExp', function(){
      tokenize(/.*/).should.equal('$4');
    });

    it('should tokenize Date', function(){
      tokenize(new Date()).should.equal('$5');
    });
  });
});