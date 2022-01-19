@isTest
public with sharing class ContactControllerTest {
    @TestSetup
    static void makeData(){
        Contact contacto1 = new Contact(
            FirstName = 'contacto1',
            LastName = 'contacto1',
            Email = 'contacto1@contacto1.com'
        );
        insert contacto1;
        Contact contacto2 = new Contact(
            FirstName = 'contacto2',
            LastName = 'contacto2',
            Email = 'contacto2@contacto2.com'
        );
        insert contacto2;
    }
    @isTest
    public static void shouldGetAListOfContactsWithTwoRecords() {
        Test.startTest();
            List<Contact> contactLst = ContactController.getContacts();
        Test.stopTest();

        System.assertEquals(2, contactLst.size());
    }
}
