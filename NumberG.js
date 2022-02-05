var message="";
var answer=8;
            
do{
        var accept_no=prompt("Guess the number between 0 to 20 that has been choosen by us");
        accept_no=parseInt(accept_no);
                
        if(accept_no>20||accept_no<0)
        {
            message="Dont try to fool us!!!";
        }
        else if(accept_no != answer){
            alert("Nope..Wrong.....");}
        else{
            message="Yes.. You are right..The number is 8 indeed";
        break;}
}while(accept_no<=20 && accept_no>=0)       