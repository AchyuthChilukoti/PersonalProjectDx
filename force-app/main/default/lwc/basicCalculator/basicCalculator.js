import { LightningElement,track } from 'lwc';

export default class BasicCalculator extends LightningElement {

    result;
    showHistory = false;
    @track searchHistory = [];

    handleAdd(){
        this.result = parseInt(this.refs.num1.value) + parseInt(this.refs.num2.value);
        this.saveHistory('+');
    }

    handleSub(){
        this.result = parseInt(this.refs.num1.value) - parseInt(this.refs.num2.value);
        this.saveHistory('-');
    }

    handleMul(){
        this.result = parseInt(this.refs.num1.value) * parseInt(this.refs.num2.value);
        this.saveHistory('*');
    }

    handleDiv(){
        this.result = parseInt(this.refs.num1.value) / parseInt(this.refs.num2.value);
        this.saveHistory('/');
    }

    viewHistory(){
        this.showHistory = true;
        this.showVideo = true;
    }

    saveHistory(op){
        const calculationResult = this.result;
        // this.searchHistory.push(`Result: ${calculationResult}, num1: ${this.refs.num1.value}, num2: ${this.refs.num2.value}`);
        this.searchHistory.push(`${this.refs.num1.value} ${op} ${this.refs.num2.value} = ${calculationResult}`);
    }
}