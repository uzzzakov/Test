window.onerror = function(m, u, l)
        {	
            alert('Javascript Error: '+m+'nURL: '+u+'nLine Number: '+l);
            return true;
        }
    
    'use strict';
    window.onload = init;
    function init() 
    {
        enterYourName();
        document.getElementById('btn').onclick = validate;
        document.getElementById('btnclr').onclick = clear;
    }
    
    function enterYourName(){
    var name=prompt ("Меня зовут: ", "");
    if (name){
    document.getElementById("welcome").innerHTML = name + ', удачи!))';
    
    }
    else{
    document.getElementById("welcome").innerHTML ='Удачи! Но Манучер сделает минус 5 баллов за то, что имя не ввел))';
    
    }
}

    function validate() 
    {
        var radios = document.getElementById("quiz").getElementsByTagName("INPUT");
        var right = 0;
        var wrong = 0;
        for (var i=0, len=radios.length ; i<len ; i++) 
        {  
            if(radios[i].value == "x") 
            {    
                if(radios[i].checked == true)
                {      
                    right++;      
                    radios[i].parentNode.parentNode.className = 'rightans';    
                }
                                    
                else
                {      
                    wrong++;      
                    radios[i].parentNode.parentNode.className = 'wrongans';    
                }  
            }
            
        } 
        var pcnt = (right*2);
        document.getElementById("score").innerHTML = 'Правильно: '+ right +'<br/>Не правильно: ' + wrong +'<br/>Результат: ' + pcnt +' балл'+'&nbsp &nbsp &nbsp &nbsp  как закончишь, позови своего преподавателя';
    }
    function clear()
    {   
        var radios = document.getElementById("quiz").getElementsByTagName("INPUT");
        for(var i=0, len=radios.length ; i<len ; i++) 
        {
            radios[i].checked = false;
            if (radios[i].value == "x")
            { 
                radios[i].parentNode.parentNode.className = '';
            }
        }
        document.getElementById("score").innerHTML = '';
    }