export class Application{
    constructor(){

    }

    async init(){
        await this.buildComponents();
        await this.bindEvents();
    }

    buildComponents(){
        return Promise.resolve();
    }

    bindEvents(){
        return Promise.resolve();
    }
}