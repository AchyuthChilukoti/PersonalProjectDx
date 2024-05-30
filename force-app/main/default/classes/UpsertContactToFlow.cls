public with sharing class UpsertContactToFlow {
    @InvocableMethod(label = 'Get Data')
    public static void UpsertContact(List<String> ContactName){
        List<Contact> conList = [Select id, LastName From Contact Where LastName =: ContactName[0]];
        if(conList.size() >0){
            for(Contact con : conList){
                con.HomePhone = '9999999999';
            }
            update conList;
        }else{
            Contact con = new Contact();
            con.LastName = ContactName[0];
            insert con;
        }
    }
}