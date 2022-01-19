import { LightningElement } from 'lwc';

export default class CheckboxExample1 extends LightningElement {
    handleSubscribe(event) {
        this.template
            .querySelectorAll('[data-element="subscribe-checkbox"]')
            .forEach((element) => {
                element.checked = true;
            });
    }
}