public without sharing class TrainDetails {

    @AuraEnabled
    public static TrainDetailsWrapper getTrainDetails(String trainNo) {
        Http http = new Http();
        HttpRequest req = new HttpRequest();
        // Use the named credential 'TrainStatus'  https://rappid.in/apis
        req.setEndpoint('callout:TrainStatusAPI/train.php?train_no=' + trainNo);
        req.setMethod('GET');
        System.debug('req ' + req);
        HttpResponse resp = http.send(req);
        System.debug('resp ' + resp.getBody());

        TrainDetailsWrapper trDetWrap = new TrainDetailsWrapper();
        if (resp.getStatusCode() == 200) {
            trDetWrap = (TrainDetailsWrapper) JSON.deserialize(resp.getBody(), TrainDetailsWrapper.class);

            // Convert the timing to 12-hour format
            if (trDetWrap.data != null) {
                for (Data dataItem : trDetWrap.data) {
                    dataItem.timing = convertTo12HourFormat(dataItem.timing);
                }
            }

        }
        return trDetWrap;
    }

    private static String convertTo12HourFormat(String timing) {
        if (String.isBlank(timing)) {
            return timing;
        }
    
        // Extract the first 5 characters assuming it's in HH:mm format
        if (timing.length() >= 5 && timing !='Destination' ) {
            timing = timing.substring(0, 5);
        }else{
            return timing;
        }
    
        // Check if timing is in the correct format
        if (timing.length() != 5 || timing.indexOf(':') == -1) {
            // Return the original string or handle the error as needed
            return timing;
        }
    
        String[] timeParts = timing.split(':');
        if (timeParts.size() != 2) {
            return timing;
        }
    
        Integer hours = Integer.valueOf(timeParts[0]);
        Integer minutes = Integer.valueOf(timeParts[1]);
    
        String period = hours >= 12 ? 'PM' : 'AM';
        if (hours > 12) {
            hours -= 12;
        } else if (hours == 0) {
            hours = 12;
        }
    
        String hoursStr = hours < 10 ? '0' + hours : String.valueOf(hours);
        String minutesStr = minutes < 10 ? '0' + minutes : String.valueOf(minutes);
    
        return hoursStr + ':' + minutesStr + ' ' + period;
    }
    

    public class TrainDetailsWrapper {
        @AuraEnabled public boolean success { get; set; }
        @AuraEnabled public String train_name { get; set; }
        @AuraEnabled public String message { get; set; }
        @AuraEnabled public String updated_time { get; set; }
        @AuraEnabled public List<Data> data { get; set; }
    }

    public class Data {
        @AuraEnabled public boolean is_current_station { get; set; }
        @AuraEnabled public String station_name { get; set; }
        @AuraEnabled public String distance { get; set; }
        @AuraEnabled public String timing { get; set; }
        @AuraEnabled public String delay { get; set; }
        @AuraEnabled public String platform { get; set; }
        @AuraEnabled public String halt { get; set; }
    }
}
