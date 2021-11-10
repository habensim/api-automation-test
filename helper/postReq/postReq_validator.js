const chai = require('chai');
const dataTest = require('../../lib/dataTest')

exports.responseBodyValidator = function(res){
    describe('Verify JSON Response OK', function(){
        it('Response OK', function(){
            chai.expect(res.body.title).to.be.a('string');
            chai.expect(res.body.title).to.have.equal(dataTest.testData.testTile);
            chai.expect(res.body.body).to.be.a('string');
            chai.expect(res.body.body).to.have.equal(dataTest.testData.testBody);
            chai.expect(res.body.userId).to.be.a('number');
            chai.expect(res.body.userId).to.have.equal(dataTest.testData.userId);
            chai.expect(res.body.id).to.be.a('number');
            chai.expect(res.body.id).to.have.equal(global._id);
        })
    })
}


