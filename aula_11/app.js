// var hj = new Date();
var mensagem = "";

hr = prompt("Digite o horário:")

if(hr>=6&&hr<12){
    mensagem ="bodia princesa";
}
 else if(hr>=12&&hr<18){
    mensagem ="botadi princesa";
 }
 else if (hr>=18){
    mensagem ="moanoite princesa";
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
 
 var idade = prompt("Qual sua idade?")
 mm = " "
 
 mm=(idade>=18) ? " vc tem muitos anos":"vc é 9vinho";
 document.write("<br>"+mm)
 
 