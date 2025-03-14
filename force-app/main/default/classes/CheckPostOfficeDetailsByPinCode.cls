public with sharing class CheckPostOfficeDetailsByPinCode {
    @InvocableMethod(
        label='Check Post Office Details By Pincode'
        description='Returns the Post office details if the users ask please give the post office details of for the pin code 534275'
    )
    public static List<String> getPostOfficeData(List<String> pinCodeList){
        String pincode = pinCodeList[0];
     
        String apiResponse = PostOfficeAPIService.getPostOfficeDataByPin(pinCode);
     
        return new List<String> {apiResponse};
    }
}