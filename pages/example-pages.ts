import { $, $$, browser, element, by, promise, ElementFinder, ElementArrayFinder } from 'protractor';
import { protractor } from 'protractor/built/ptor';


export class HomePage{
    public url: any;
    public enterText: ElementFinder;
    public firstTodo: ElementFinder;
    public clickToAdd: ElementFinder;
    public markDoneElement: ElementFinder;
    public completedTab: ElementFinder;
    public activeTab: ElementFinder;


    constructor(){
        this.url = 'http://todomvc.com/examples/angularjs/#/';

        this.enterText = $('[ng-model="newTodo"]');
        this.firstTodo = $$('[class="ng-binding"]').get(0);
        this.clickToAdd = $('[ng-model="newTodo"]');
        this.markDoneElement = $('[ng-model="todo.completed"]');
        this.completedTab = $$('[class="footer"] [ng-class]').get(2);
        this.activeTab = $$('[class="footer"] [ng-class]').get(1);

    }

    public open(): void {
        browser.get(this.url);
    }

    public clickToadd(): void {
        this.clickToAdd.click();
    }


    public addTodo(addTodoElement){
        this.enterText.sendKeys(addTodoElement);
        this.clickToAdd.sendKeys(protractor.Key.ENTER);
    }

    public getTodo(): promise.Promise<string> {
        return this.firstTodo.getText();
    }

    public markCompleted(): void{
        this.markDoneElement.click()
    }

    public clickOnCompletedTab(): void{
        this.completedTab.click();
    }

    public clickOnActiveTab(): void{
        this.activeTab.click();
    }


}