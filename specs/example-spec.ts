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
    it('TODO list should contains one element, which is marked as done', ()=> {
        homePage.markCompleted();
        expect<any>(homePage.remainingCount()).toEqual('0');
    });
    //4
    it('TODO list of active elements contains one element', ()=> {
        homePage.addTodo('Clear kitchen');
        homePage.clickOnActiveTab();
        expect<any>(homePage.getTodo()).toEqual('Clear kitchen');
    })
    //5
    it('TODO list of completed elements contains one element', ()=> {
        homePage.clickOnCompletedTab();
        expect<any>(homePage.getTodo()).toEqual('Make dinner');
    })
    //6
    it('Marked element will be removed from the list', ()=> {
        homePage.clearCompletedTodos();
        expect<any>(homePage.remainingCount()).toBeLessThan(2);
    })
    //7
    it('Deleted element will be removed from the list', ()=> {
        homePage.clickOnActiveTab();
        homePage.addTodo('Somethink');
        homePage.deletedEelement();
        expect<any>(homePage.remainingCount()).toBe(1);
        homePage.deletedEelement();
    })
    //8
    it('TODO list contains two elements of "Runing"', ()=> {
        homePage.clickOnActiveTab();
        homePage.addTodo('Runing');
        expect<any>(homePage.getTodoLast()).toEqual('Runing');
        homePage.addTodo('Runing');
        expect<any>(homePage.getTodoLast()).toEqual('Runing');
        
    })
    //9
    it('Elemenet shouldnt be added to list', ()=> {
        homePage.addTodo(' ');
        expect<any>(homePage.getTodoLast()).toEqual('Runing'); 
    })
    //10
    it('TODO list contains two elements. First : "swimming:" Second: "FLYING"', ()=> {
        homePage.addTodo('swimming');
        expect<any>(homePage.getTodoLast()).toEqual('swimming');
        homePage.addTodo('FLYING');
        expect<any>(homePage.getTodoLast()).toEqual('FLYING');
    })
    //11
    it('TODO list contains two elements. First : "12345:" Second: "!@#$%"', ()=> {
        homePage.addTodo('12345');
        expect<any>(homePage.getTodoLast()).toEqual('12345');
        homePage.addTodo('!@#$%');
        expect<any>(homePage.getTodoLast()).toEqual('!@#$%');
    })
    //12
    it('TODO list contains elements.', ()=> {
        homePage.refresh();
        expect<any>(homePage.remainingCount()).toBeGreaterThan(1);
    })


});