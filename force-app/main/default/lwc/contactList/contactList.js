import { LightningElement, track, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

const columns = [
    { label: 'Primer Nombre', fieldName: 'FirstName' },
    { label: 'Apellido', fieldName: 'LastName'},
    { label: 'Correo Electronico', fieldName: 'Email'}
];

export default class ContactList extends LightningElement {
    data
    columns = columns;

    handleClick(){
        window.alert("Holaaaaaaaaa");
    }
    // metodo Wire
    // @wire(getContacts)
    // contactLst({ error, data }){
    // if (data) {
    //     console.log('Este es el OBJETO de la data ' +JSON.stringify(data[0]));
    //     console.log('atributos de columnas '+ columns[0].fieldName);
    //     this.data = data;
    // } else if (error) {
    //     console.log('Error: ', error.body.message[0].message);
    // }else{
    //     console.log('Error no se recivio nada');
    // }
    // }   

 // metodo imperativo
    connectedCallback(){
        getContacts().then(data => {
            this.data = data;
            console.log(this.data)
        }).catch(error => {
            console.log('Error: ' +error.body.message);
        });
    }
    
}