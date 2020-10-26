import 'mocha';
import {assert} from 'chai';
import * as api from '../src/api';


describe('Api get all ', () => {
    
    it('should be callable with async/await ', async () => {
        const res = await api.getAll();
        assert(res.length > 0);
    });

    it('should return a promise with data', () => {
        return api.getAll()
            .then(data => {
                assert.isOk(data);
                assert.isAtLeast(data.length, 1);
                assert.equal(data[0].fname.toLowerCase(), 'john');
            })
    });
});
