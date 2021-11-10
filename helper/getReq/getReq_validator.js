const chai = require('chai');
const dataTest = require('../../lib/dataTest');

exports.responseBodyValidator = function(res){
    describe('Verify JSON Response OK', function(){
        it('Response OK', function(){
            chai.expect(res.body.userId).to.be.a('number');
            chai.expect(res.body.userId).to.have.equal(dataTest.testData.userId);
            chai.expect(res.body.id).to.be.a('number');
            chai.expect(res.body.id).to.have.equal(dataTest.testData.id);
            chai.expect(res.body.title).to.be.a('string');
            chai.expect(res.body.title).to.have.equal(dataTest.testData.title);
            chai.expect(res.body.body).to.be.a('string');
            chai.expect(res.body.body).to.have.equal(dataTest.testData.body);
        })
    })
}
exports.responseBodyValidatorwithComments = function(res){
    describe('Verify JSON Response Comment OK', function(){
        it('Response OK', function(){
            chai.expect(res.body[0].postId).to.be.a('number');
            chai.expect(res.body[0].postId).to.have.equal(dataTest.testData.postId);
            chai.expect(res.body[0].id).to.be.a('number');
            chai.expect(res.body[0].id).to.have.equal(dataTest.testData.id);
            chai.expect(res.body[0].name).to.be.a('string');
            chai.expect(res.body[0].name).to.have.equal(dataTest.testData.name);
            chai.expect(res.body[0].email).to.be.a('string');
            chai.expect(res.body[0].email).to.have.equal(dataTest.testData.email);
            chai.expect(res.body[0].body).to.be.a('string');
            chai.expect(res.body[0].body).to.have.equal(dataTest.testData.body1);
        })
    })
}