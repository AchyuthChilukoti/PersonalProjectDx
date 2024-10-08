@isTest
public class CustomSettingsControllerTest {

    @testSetup
    static void setup() {
        // Insert a test custom setting record for the test context
        CustomSettingsAccount__c setting = new CustomSettingsAccount__c(
            Age__c = 25, 
            Name__c = 'Test Account',
            SetupOwnerId = UserInfo.getOrganizationId()
        );
        insert setting;
    }

    @isTest
    static void testGetSettings() {
        // Call the getSettings method and assert values
        Test.startTest();
        CustomSettingsAccount__c result = CustomSettingsController.getSettings();
        Test.stopTest();

        // Assert default values
        System.assertNotEquals(null, result);
        System.assertEquals('Test Account', result.Name__c);
        System.assertEquals(25, result.Age__c);
    }

    @isTest
    static void testUpdateCustomSettings_ExistingSetting() {
        // Create a test instance of AppSettingsWrapper
        AppSettingsWrapper wrapper = new AppSettingsWrapper();
        wrapper.SettingName = 'Updated Name';
        wrapper.SettingAge = 30;

        // Call the updateCustomSettings method with the wrapper
        Test.startTest();
        CustomSettingsController.updateCustomSettings(wrapper);
        Test.stopTest();

        // Query the custom settings and validate updates
        CustomSettingsAccount__c updatedSetting = CustomSettingsAccount__c.getOrgDefaults();
        System.assertEquals('Updated Name', updatedSetting.Name__c);
        System.assertEquals(30, updatedSetting.Age__c);
    }

    @isTest
    static void testUpdateCustomSettings_NewSetting() {
        // Delete existing settings to simulate the creation of a new record
        CustomSettingsAccount__c setting = CustomSettingsAccount__c.getOrgDefaults();
        delete setting;

        // Create a new test instance of AppSettingsWrapper
        AppSettingsWrapper wrapper = new AppSettingsWrapper();
        wrapper.SettingName = 'New Name';
        wrapper.SettingAge = 40;

        // Call the updateCustomSettings method with the wrapper
        Test.startTest();
        CustomSettingsController.updateCustomSettings(wrapper);
        Test.stopTest();

        // Query the custom settings and validate creation
        CustomSettingsAccount__c newSetting = CustomSettingsAccount__c.getOrgDefaults();
        System.assertEquals('New Name', newSetting.Name__c);
        System.assertEquals(40, newSetting.Age__c);
        System.assertNotEquals(null, newSetting.SetupOwnerId);
    }
}
