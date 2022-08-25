const Intern = require('../lib/intern');

describe('Intern', ()=> {
    it('getSchool returns name', ()=>{
        const employ = new Intern("lucas", '1','lsfreigenberg@gmail.com', "University of Utah")
        expect(employ.getSchool()).toEqual("University of Utah")
    })
    it('getId returns name', ()=>{
        const employ = new Intern("lucas", '1','lsfreigenberg@gmail.com', "University of Utah")
        expect(employ.getRole()).toEqual('Intern')
    })
});