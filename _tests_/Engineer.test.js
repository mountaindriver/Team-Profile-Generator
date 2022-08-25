const Engineer = require('../lib/engineer');

describe('Engineer', ()=> {
    it('getSchool returns name', ()=>{
        const employ = new Engineer("lucas", '1','lsfreigenberg@gmail.com', "mountaindriver")
        expect(employ.getSchool()).toEqual("mountaindriver")
    })
    it('getId returns name', ()=>{
        const employ = new Engineer("lucas", '1','lsfreigenberg@gmail.com', "mountaindriver")
        expect(employ.getRole()).toEqual('Engineer')
    })
});