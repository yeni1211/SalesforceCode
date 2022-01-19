export default class InputHandler extends LightningElement {
    value = 'initial value';

    handleClick(evt) {
        console.log('Current value of the input: ' + evt.target.value);

        const allValid = [
            ...this.template.querySelectorAll('lightning-input'),
        ].reduce((validSoFar, inputCmp) => {
            inputCmp.reportValidity();
            return validSoFar && inputCmp.checkValidity();
        }, true);
        if (allValid) {
            alert('All form entries look valid. Ready to submit!');
        } else {
            alert('Please update the invalid form entries and try again.');
        }
    }
}