public class CheckPostOfficeDetailsByPlace {
    @InvocableMethod(
       label='Check Post Office Details by Place'
       description='Returns the Post office details if the users ask please give the post office details of for the name Hyderabad'
   )
   public static List<String> getPostOfficeData(List<String> nameList){
       String name = nameList[0];
       String apiResponse = PostOfficeAPIService.getPostOfficeDataByPlace(name);
       return new List<String> {apiResponse};
   }
}