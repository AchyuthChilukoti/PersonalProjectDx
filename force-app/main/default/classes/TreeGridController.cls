public class TreeGridController {
    @AuraEnabled
    public static Map<String, Object> getTreeGridData() {
        Map<String, Object> result = new Map<String, Object>();

        List<Map<String, Object>> columns = new List<Map<String, Object>>{
            new Map<String, Object>{
                'type' => 'text',
                'fieldName' => 'accountName',
                'label' => 'Account Name',
                'initialWidth' => 300
            },
            new Map<String, Object>{
                'type' => 'number',
                'fieldName' => 'employees',
                'label' => 'Employees'
            },
            new Map<String, Object>{
                'type' => 'phone',
                'fieldName' => 'phone',
                'label' => 'Phone Number'
            },
            new Map<String, Object>{
                'type' => 'url',
                'fieldName' => 'accountOwner',
                'label' => 'Account Owner',
                'typeAttributes' => new Map<String, Object>{
                    'label' => new Map<String, Object>{'fieldName' => 'accountOwnerName'}
                }
            },
            new Map<String, Object>{
                'type' => 'text',
                'fieldName' => 'billingCity',
                'label' => 'Billing City'
            }
        };

        List<Map<String, Object>> data = new List<Map<String, Object>>{
            new Map<String, Object>{
                'name' => '123555',
                'accountName' => 'Rewis Inc',
                'employees' => 3100,
                'phone' => '837-555-0100',
                'accountOwner' => 'http://salesforce.com/fake/url/jane-doe',
                'accountOwnerName' => 'Jane Doe',
                'billingCity' => 'Phoeniz, AZ',
                '_children' => new List<Map<String, Object>>{}
            },
            new Map<String, Object>{
                'name' => '123556',
                'accountName' => 'Acme Corporation',
                'employees' => 10000,
                'phone' => '837-555-0100',
                'accountOwner' => 'http://salesforce.com/fake/url/john-doe',
                'accountOwnerName' => 'John Doe',
                'billingCity' => 'San Francisco, CA',
                '_children' => new List<Map<String, Object>>{
                    new Map<String, Object>{
                        'name' => '123556-A',
                        'accountName' => 'Acme Corporation (Bay Area)',
                        'employees' => 3000,
                        'phone' => '837-555-0100',
                        'accountOwner' => 'http://salesforce.com/fake/url/john-doe',
                        'accountOwnerName' => 'John Doe',
                        'billingCity' => 'New York, NY',
                        '_children' => new List<Map<String, Object>>{
                            new Map<String, Object>{
                                'name' => '123556-A-A',
                                'accountName' => 'Acme Corporation (Oakland)',
                                'employees' => 745,
                                'phone' => '837-555-0100',
                                'accountOwner' => 'http://salesforce.com/fake/url/john-doe',
                                'accountOwnerName' => 'John Doe',
                                'billingCity' => 'New York, NY'
                            },
                            new Map<String, Object>{
                                'name' => '123556-A-B',
                                'accountName' => 'Acme Corporation (San Francisco)',
                                'employees' => 578,
                                'phone' => '837-555-0100',
                                'accountOwner' => 'http://salesforce.com/fake/url/jane-doe',
                                'accountOwnerName' => 'Jane Doe',
                                'billingCity' => 'Los Angeles, CA'
                            }
                        }
                    },
                    new Map<String, Object>{
                        'name' => '123556-B',
                        'accountName' => 'Acme Corporation (East)',
                        'employees' => 430,
                        'phone' => '837-555-0100',
                        'accountOwner' => 'http://salesforce.com/fake/url/john-doe',
                        'accountOwnerName' => 'John Doe',
                        'billingCity' => 'San Francisco, CA',
                        '_children' => new List<Map<String, Object>>{
                            new Map<String, Object>{
                                'name' => '123556-B-A',
                                'accountName' => 'Acme Corporation (NY)',
                                'employees' => 1210,
                                'phone' => '837-555-0100',
                                'accountOwner' => 'http://salesforce.com/fake/url/jane-doe',
                                'accountOwnerName' => 'Jane Doe',
                                'billingCity' => 'New York, NY'
                            },
                            new Map<String, Object>{
                                'name' => '123556-B-B',
                                'accountName' => 'Acme Corporation (VA)',
                                'employees' => 410,
                                'phone' => '837-555-0100',
                                'accountOwner' => 'http://salesforce.com/fake/url/john-doe',
                                'accountOwnerName' => 'John Doe',
                                'billingCity' => 'New York, NY',
                                '_children' => new List<Map<String, Object>>{
                                    new Map<String, Object>{
                                        'name' => '123556-B-B-A',
                                        'accountName' => 'Allied Technologies',
                                        'employees' => 390,
                                        'phone' => '837-555-0100',
                                        'accountOwner' => 'http://salesforce.com/fake/url/jane-doe',
                                        'accountOwnerName' => 'Jane Doe',
                                        'billingCity' => 'Los Angeles, CA',
                                        '_children' => new List<Map<String, Object>>{
                                            new Map<String, Object>{
                                                'name' => '123556-B-B-A-A',
                                                'accountName' => 'Allied Technologies (UV)',
                                                'employees' => 270,
                                                'phone' => '837-555-0100',
                                                'accountOwner' => 'http://salesforce.com/fake/url/john-doe',
                                                'accountOwnerName' => 'John Doe',
                                                'billingCity' => 'San Francisco, CA'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            new Map<String, Object>{
                'name' => '123557',
                'accountName' => 'Rhode Enterprises',
                'employees' => 6000,
                'phone' => '837-555-0100',
                'accountOwner' => 'http://salesforce.com/fake/url/john-doe',
                'accountOwnerName' => 'John Doe',
                'billingCity' => 'New York, NY',
                '_children' => new List<Map<String, Object>>{
                    new Map<String, Object>{
                        'name' => '123557-A',
                        'accountName' => 'Rhode Enterprises (UCA)',
                        'employees' => 2540,
                        'phone' => '837-555-0100',
                        'accountOwner' => 'http://salesforce.com/fake/url/john-doe',
                        'accountOwnerName' => 'John Doe',
                        'billingCity' => 'New York, NY'
                    }
                }
            },
            new Map<String, Object>{
                'name' => '123558',
                'accountName' => 'Tech Labs',
                'employees' => 1856,
                'phone' => '837-555-0100',
                'accountOwner' => 'http://salesforce.com/fake/url/john-doe',
                'accountOwnerName' => 'John Doe',
                'billingCity' => 'New York, NY',
                '_children' => new List<Map<String, Object>>{
                    new Map<String, Object>{
                        'name' => '123558-A',
                        'accountName' => 'Opportunity Resources Inc',
                        'employees' => 1934,
                        'phone' => '837-555-0100',
                        'accountOwner' => 'http://salesforce.com/fake/url/john-doe',
                        'accountOwnerName' => 'John Doe',
                        'billingCity' => 'Los Angeles, CA'
                    }
                }
            }
        };

        result.put('columns', columns);
        result.put('data', data);

        return result;
    }
}
