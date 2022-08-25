const Employee = require('../lib/employee');

describe('Employee', ()=> {
    it('getName returns name', ()=>{
        const employ = new Employee("lucas", '1','lsfreigenberg@gmail.com')
        expect(employ.getName()).toEqual('lucas')
    })
    it('getId returns name', ()=>{
        const employ = new Employee("lucas", '1','lsfreigenberg@gmail.com')
        expect(employ.getId()).toEqual('1')
    })
    it('getEmail returns name', ()=>{
        const employ = new Employee("lucas", '1','lsfreigenberg@gmail.com')
        expect(employ.getEmail()).toEqual('lsfreigenberg@gmail.com')
    })
})