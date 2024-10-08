public class RedirectController {
    public PageReference redirectToHome() {
        PageReference homePage = new PageReference('/home/home.jsp');
        homePage.setRedirect(true);
        return homePage;
    }
}