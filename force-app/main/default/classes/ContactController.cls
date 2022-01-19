public with sharing class ContactController {
    @AuraEnabled (cacheable = true)
    
    public static List<Contact> getContacts() {
        List<Contact> contactLst = new List<Contact>();
        contactLst = [
            SELECT Id,FirstName, LastName, Email
            FROM Contact  
        ];
        return contactLst; 
    }

    public static List<Contact> getFirstName(){
        List<Contact> firstNameList = new List<Contact>();
        firstNameList = [
            SELECT Id,FirstName, LastName, Email
            FROM Contact 
        ];
        return firstNameList;
    }
}
//hola