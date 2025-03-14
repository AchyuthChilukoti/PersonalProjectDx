public with sharing class Agent_TrainStatusDetails {

    @InvocableMethod(label='Get Live Train Status' description='Fetches train status using an API')

    public static List<String> getTrainStatus(List<String> trainNumber) {
        String trainNo = trainNumber[0];  
        String apiResponse = getTrainDataByNumber(trainNo);
        return new List<String> {apiResponse};
    }

    public static String getTrainDataByNumber(String trainNumber) {
        String endPoint = 'https://rappid.in/apis/train.php?train_no=' + trainNumber;  // Replace with actual API URL
        String trainStatus = '';

        try {
            HttpRequest request = new HttpRequest();
            request.setEndpoint(endPoint);
            request.setMethod('GET');

            Http http = new Http();
            HttpResponse response = http.send(request);

            if (response.getStatusCode() == 200) {
                String jsonData = response.getBody();
                TrainApiResponse responseData = (TrainApiResponse) JSON.deserialize(jsonData, TrainApiResponse.class);
                
                if (responseData != null && responseData.success) {
                    trainStatus = 'Train Name: ' + responseData.train_name + '\n' +
                                  'Last Updated: ' + responseData.updated_time + '\nStations:\n';
                    
                    for (TrainStation station : responseData.data) {
                        trainStatus += station.station_name + ' - Arrival: ' + station.timing +
                                       ' - Delay: ' + station.delay + ' - Platform: ' + station.platform + '\n';
                    }
                } else {
                    return 'No train data found.';
                }
            } else {
                System.debug('Error occurred: ' + response.getStatus());
                return response.getStatus();
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

        return trainStatus;
    }

    public class TrainApiResponse {
        public Boolean success;
        public String train_name;
        public String updated_time;
        public List<TrainStation> data;
    }

    public class TrainStation {
        public Boolean is_current_station;
        public String station_name;
        public String distance;
        public String timing;
        public String delay;
        public String platform;
        public String halt;
    }
}
