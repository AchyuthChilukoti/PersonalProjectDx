public with sharing class CustomSettingsController {
    @AuraEnabled
    public static CustomSettingsAccount__c getSettings() {
        // AdminPermissionEnforcer.enforceAdminReadPermissions();

        return getOrCreateDefaultSettings();
    }

    @AuraEnabled
    public static void updateCustomSettings(AppSettingsWrapper wrapper) {
        // Accessing the wrapper values
        String settingName = wrapper.SettingName;
        Integer settingAge = wrapper.SettingAge;


       // AdminPermissionEnforcer.enforceAdminPermissions();

        final CustomSettingsAccount__c currentValues = CustomSettingsAccount__c.getOrgDefaults();

        final CustomSettingsAccount__c newValues = new CustomSettingsAccount__c(
            Id = currentValues.Id,
            Age__c = SettingAge,
            Name__c = SettingName
        );

        if (currentValues.SetupOwnerId == null) {
            newValues.SetupOwnerId = UserInfo.getOrganizationId();

            Database.insert(newValues, AccessLevel.USER_MODE);
        } else {
            Database.update(newValues, AccessLevel.USER_MODE);
        }
    }

    private static CustomSettingsAccount__c getOrCreateDefaultSettings() {
        CustomSettingsAccount__c s = CustomSettingsAccount__c.getOrgDefaults();
        if (s.SetupOwnerId == null) {
            s.Age__c = 20;
            s.Name__c = 'test Name';
        }

        return s;
    }

}