public class TestMaciej {
	public static void makeCallout() {
        HttpRequest req = new HttpRequest();
        req.setEndpoint('callout:ReleaseExtCred'); // + 'gnuip' +EncodingUtil.urlEncode('-', 'UTF-8') + 'user/health');
      //   req.setEndpoint('https://api-test.gn.com/gnuip-user/health');	
		//req.setEndpoint('https://api-test.gn.com/gnuip-user/v2/users/email/1a2n1t2oszewskimaciej3@gmail.com');
        req.setMethod('GET');
        Http http = new Http();
        HTTPResponse res = http.send(req);
        System.debug(res.getBody());
    }
}