import { $, $$, browser, element, by, promise, ElementFinder, ElementArrayFinder } from 'protractor';
import { protractor, Ptor } from 'protractor/built/ptor';


export class HomePage{
    public url: any;
    public textBox: ElementFinder;
    public listTodo: ElementArrayFinder;
    public secondTodo: ElementFinder;
    public thirdTodo: ElementFinder;
    public clickOnTextBox: ElementFinder;
    public markDoneElement: ElementFinder;
    public completedTab: ElementFinder;
    public activeTab: ElementFinder;
    public remainingItem: ElementFinder;
    public clearCompletedItem: ElementFinder;
    public deletedItem: ElementFinder;


    constructor(){
        this.url = 'http://todomvc.com/examples/angularjs/#/';

        this.textBox = $('[ng-model="newTodo"]');
        this.listTodo = $$('.todo-list label');
        this.clickOnTextBox = $('[ng-model="newTodo"]');
        this.markDoneElement = $('[ng-model="todo.completed"]');
        this.completedTab = $$('[class="footer"] [ng-class]').get(2);
        this.activeTab = $$('[class="footer"] [ng-class]').get(1);
        this.remainingItem = $('[class="footer"] [class="ng-binding"]');
        this.clearCompletedItem= $('[ng-click="clearCompletedTodos()"]');
        this.deletedItem= $('[ng-click="removeTodo(todo)"]');

    }

    public open(): void {
        browser.get(this.url);
    }

    public close():void {
        browser.
    }

    public addTodo(addTodoElement){
        this.clickOnTextBox.click();
        this.textBox.sendKeys(addTodoElement);
        this.clickOnTextBox.sendKeys(protractor.Key.ENTER);
    }

    public getTodo(): promise.Promise<string> {
        let item = this.listTodo.first()
        return item.getText();
    }

    public getTodoLast(): promise.Promise<string> {
        let item = this.listTodo.last()
        return item.getText();
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

    public remainingCount(): promise.Promise<string> {
        return this.remainingItem.getText();
    }

    public clearCompletedTodos(): void {
        this.clearCompletedItem.click();
    }

    public deletedEelement(): void{
        browser.actions().mouseMove(this.deletedItem).perform();
        this.deletedItem.click();
    }

}


