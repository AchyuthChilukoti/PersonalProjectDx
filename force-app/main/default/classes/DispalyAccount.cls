public class DispalyAccount {

    List<Account> lstAccount;
    public List<Account> getlstAccount(){
    return lstAccount;
    }
    
    public PageReference getAcc() {
        lstAccount=[SELECT id,Name FROM Account];
        return null;
    }
    
    public PageReference getDirAcc() {
        lstAccount=[SELECT Name,type FROM Account where type='Customer - Direct'];
        return null;
    }
    
    public PageReference searchAccount() {
        lstAccount=[SELECT Name,type FROM Account where type='Customer - Direct'];
        return null;
    }

}