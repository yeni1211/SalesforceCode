import { LightningElement } from 'lwc';

export default class DemoInputSelection extends LightningElement {
    textvalue = 'initial value';
    handleChange(event) {
        this.textvalue = event.detail.value;
    }
    handleClick(event) {
        let input = this.template.querySelector('lightning-input');
        let end = input.value.length;
        input.selectionStart = 0;
        input.selectionEnd = end;
        // Optionally, focus to highlight the selected characters
        // input.focus();
    }
}