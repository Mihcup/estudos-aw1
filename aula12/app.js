// var hj = new Date();
var mensagem = "";
const body = document.querySelector('body');
hr = prompt("Digite o horário:")

if(hr>=6&&hr<12){
    mensagem ="bodia princesa<br>";
    body.style.backgroundColor = "beige";
}
 else if(hr>=12&&hr<18){
    mensagem ="botadi princesa<br>";
    body.style.backgroundColor = "rgb(255, 213, 196)";

 }
 else if (hr>=18){
    mensagem ="moanoite princesa<br>";
    body.style.backgroundColor = "rgb(31, 28, 31)";
    body.style['color'] = "white";
 }
 document.write(mensagem)


 var dia  = prompt("Dia da semana: (1/2/3/4/5)"); 
 var m=""; 
 switch (dia){
     case "1": 
         m="segunda"; 
         break; 
     case "2": 
         m="terça"; 
         break; 
     case "3": 
         m="quarta"; 
         break; 
     case "4": 
         m="quinta"; 
         break; 
     case "5": 
         m="sexta"; 
         break; 
     default: 
         m=" Fim de semana";
 }
 
 document.write("<br>Hoje eh "+m);
 

 
 var pessoa="pobre"; 
 var sal = 100;
 while(pessoa =="pobre" && sal < 1200){
    sal*=2;  
    document.write("<br>Seu salário é: "+ sal)
 }

