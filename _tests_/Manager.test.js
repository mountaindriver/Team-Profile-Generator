const Manager = require('../lib/manager');

describe('Manager', ()=> {
    it('getRole returns name', ()=>{
        const employ = new Manager("lucas", '1','lsfreigenberg@gmail.com')
        expect(employ.getRole()).toEqual('Manager')
    })
});