const supertest = require('supertest');
const { expect } = require('chai');
const constants = require('../lib/constants');
let baseUrl = constants.baseUrl;
const request = supertest(baseUrl);
const endPoints = require('../helper/getReq/api_endpoint');
const validator = require('../helper/getReq/getReq_validator');

describe('GET /posts', () => {
    it('GET /posts', () => {
        return request.get(`posts`).then((res) => {
            expect(res.statusCode).to.equal(200);
            console.log('Status Code = ', res.statusCode);
            console.log('Isi dari Body = ', res.body);
            expect(res.body).to.not.be.empty;
        });
    });

    it('GET /posts/:id', () => {
        return request.get(endPoints.validEndpoint+endPoints.postsByID).then((res) => {
            expect(res.statusCode).to.equal(200);
            console.log('Status Code = ', res.statusCode);
            console.log('Isi dari Body = ', res.body);
            //check isi dari body
            validator.responseBodyValidator(res);
        });
    });

    it('GET /posts/:id/comments', () => {
        return request.get(endPoints.validEndpoint+endPoints.postsByID+endPoints.postsBycomments).then((res) => {
            console.log(res.body);
            expect(res.statusCode).to.equal(200);
            console.log('Status Code = ', res.statusCode);
            //check isi dari body & Comments
            validator.responseBodyValidatorwithComments(res);
        });
    });

    it('GET /comments?postId=id', () => {
        return request.get(endPoints.validEndpoint+endPoints.postsByID+endPoints.postsBycomments+endPoints.queryParameter).then((res) => {
            console.log(res.body);
            expect(res.statusCode).to.equal(200);
            console.log('Status Code = ', res.statusCode);
            //check isi dari body & Comments
            validator.responseBodyValidatorwithComments(res);
        });
    });
});