public with sharing class Ctrl_ContactSearch
{
    public List<Contact> contacts { get; set; }
    public String name { get; set; }
   

    public Ctrl_ContactSearch()
    {
        contacts = new List<Contact>();
    }

    public PageReference searchContacts()
    {
        contacts = [select Id,Name from Contact where Name = :name];
            
        return null;
    } 
}