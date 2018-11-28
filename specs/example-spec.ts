import { HomePage } from "../pages/example-pages";
import { browser } from "protractor";


const homePage: HomePage = new HomePage();



describe('Testing todomvc.com with angularjs ', () => {
    beforeAll(() => {
    homePage.open()
    })
    //1
    it('Should open the page',()=> {
        expect(browser.getCurrentUrl()).toBe(homePage.url);
    })
    //2
    it('TODO list should contains one element "Make dinner"', ()=> {
        homePage.addTodo('Make dinner');
        expect<any>(homePage.getTodo()).toEqual('Make dinner');
    });
    //3
    /*
    it('TODO list should contains one element, which is marked as done', ()=> {
        homePage.markCompleted();
        expect<any>(homePage.remainingCount()).toEqual('0');
    });
    //4
    it('TODO list of active elements contains one element', ()=> {
        homePage.clickOnActiveTab();
        homePage.addTodo('Clear kitchen');
        expect<any>(homePage.getTodo()).toEqual('Clear kitchen');
    })
    //5
    it('TODO list of completed elements contains one element', ()=> {
        homePage.clickOnCompletedTab();
        expect<any>(homePage.getTodo()).toEqual('Make dinner');
    })
    //6
    it('Marked element will be removed from the list', ()=> {
        homePage.deletedEelement();
        expect<any>(homePage.remainingCount()).toEqual('1');
    })
    //7
    it('Deleted element will be removed from the list', ()=> {
        homePage.addTodo('Kiss');
        homePage.clickOnActiveTab();
        homePage.clearCompletedTodos();
        expect<any>(homePage.remainingCount()).toEqual('1');
    })
    //8
    it('TODO list contains two elements of "Runing"', ()=> {
        homePage.addTodo('Runing');
        homePage.addTodo('Runing');
        //expect<any>(homePage.secondTodo()).toEqual('Runing');
        
    })
    //9
    it('Elemenet shouldnt be added to list', ()=> {
        
    })

    it('TODO list contains two elements. First : "swimming:" Second: "FLYING"', ()=> {
        
    })

    it('TODO list contains two elements. First : "12345:" Second: "!@#$%"', ()=> {
        
    })

    it('TODO list contains elements.', ()=> {
        
    })*/


});