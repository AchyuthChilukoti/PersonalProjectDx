trigger Opportunity_Trigger on Opportunity (before insert,before update) {
    //Opportunity opp = new Opportunity();
    if(Trigger.isBefore){
        if(Trigger.isInsert)
        {
            for(Opportunity opp:Trigger.New){
            if(opp.Amount<5000){
                opp.adderror('Amount should not be less than 5K'); 
                
            }
           }
        }
    }
        else if(Trigger.isUpdate){
            for(Opportunity opp:Trigger.New){
          if(opp.Amount<3000){
                opp.adderror('Amount should not be less than 3K');    
            }  
        }
        }
    }