public class PostOfficeAPIService {
    
    public static String getPostOfficeDataByPin(String pinCode) {
        String endPoint = 'https://api.postalpincode.in/pincode/'+pinCode;
        String postOffices = '';
        try{
            HttpRequest request = new HttpRequest();
            request.setEndpoint(endPoint);
            request.setMethod('GET');
            Http http = new Http();
            HttpResponse response = http.send(request);
            if(response.getStatusCode() ==  200){
                String jsonData = response.getBody();
                List<PostOfficeApiResponse> responseData = (List<PostOfficeApiResponse>)Json.deserialize(jsonData, List<PostOfficeApiResponse>.class);
                for(PostOffice item: responseData[0].postOffice){
                   postOffices =  postOffices + item.Name + ',';
                }
                return postOffices;
            }else{
                System.debug('error occured' + response.getStatus());
                return response.getStatus();
            }
             
        }catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
  
    }

    public static String getPostOfficeDataByPlace(String place) {
                String endPoint = 'https://api.postalpincode.in/postoffice/'+ place;
                String postOffices = '';
                try{
                    HttpRequest request = new HttpRequest();
                    request.setEndpoint(endPoint);
                    request.setHeader('Content-Length', '0');
                    request.setMethod('GET');
                    Http http = new Http();
                    HttpResponse response = http.send(request);
                    if(response.getStatusCode() ==  200){
                        String jsonData = response.getBody();
                        List<PostOfficeApiResponse> responseData = (List<PostOfficeApiResponse>)Json.deserialize(jsonData, List<PostOfficeApiResponse>.class);
                        for(PostOffice item: responseData[0].postOffice){
                           postOffices =  postOffices + item.name + ' - ' + item.PINCode + ',';
                        }
                        return postOffices;
                    }else{
                        System.debug('error code' + response.getStatusCode());
                        return response.getStatus();
                    }
                     
                    
                }catch(Exception e){
                    throw new AuraHandledException(e.getMessage());
                }
               }
   class PostOfficeApiResponse{
       List<PostOffice> postOffice;
   }
       
   class PostOffice{
       String Name;
       String PINCode;     
   }
   
}