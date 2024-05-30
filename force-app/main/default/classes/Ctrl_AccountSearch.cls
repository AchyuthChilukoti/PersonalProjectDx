public with sharing class Ctrl_AccountSearch {

   public List<Account> Accounts { get; set; }
    public String name { get; set; }
   

    public Ctrl_AccountSearch()
    {
        Accounts = new List<Account>();
        //return 300;
    }

    public PageReference searchAccount()
    {
        Accounts = [select Id,Name from Account where Name = :name];
            
        return null;
        }

}