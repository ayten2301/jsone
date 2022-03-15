//teacher's question
let reqem1=prompt('reqem daxil et:');
let reqem2=prompt('reqem daxil et:');
let a;

a=reqem1;
reqem1=reqem2;
reqem2=a;

alert(reqem1 + ' ' +reqem2);

//lesson5 firstquestion
let price=prompt('Qiymet daxil et:');
let pul=price.split('.');
let manat=pul[0];
let qepik=pul[1];
alert(manat + ' manat ' + qepik + ' qepik');

//lesson5 secondquestion
let emekhaqqi=prompt('emek haqqinizi daxil edin:');
let value=(Number(emekhaqqi)/13)*100;
alert(value);

//lesson5 thirdquestion
let fullname=prompt('soyad,ad,ata adinizi daxil edin:');
let change=fullname.split(' ');
let firstname=change[0];
let secondname=change[1];
let thirdname=change[2];
let fullName=(firstname +' '+ secondname[0] + '.' + thirdname[0] + '.');
console.log(fullName);

//lesson7 question1
let id = prompt ('enter product id:');
switch(id){
  case '1':
  alert ('Available 10 pcs.');
  break;

  case '2':
  alert ('Available 256 pcs.');
  break;

  case '3':
  alert ('Available 53 pcs.');
  break;
  
  case '4':
  alert ('There are 3 available.');
  break;

  default:
  alert ('Out of stock');

}

//lesson7 question2
let gender=prompt('Cinsiniyyetinizi M(male) ve ya F(female) seklinde daxil edin:');
switch (gender) {
    case 'M':
        alert('Your gender is Male');
        break;
    
    case 'F':
        alert('Your gender is Female');
        break;

    default:
        alert('Cinsiyyetinizi duzgun daxil edin');
}
//lesson7 question3
let month=prompt('Ayin nomresini daxil edin:');

switch(month){
    case '1':
    alert('Yanvar');
    break;

    case '2':
    alert('Fevral');
    break;

    case '3':
    alert('Mart');
    break;
    
    case '4':
    alert('Aprel');
    break;
    

    case '5':
    alert('May');
    break;
    
    case '6':
    alert('Iyun');
    break;
    
    case(7):
    alert('Iyul');
    break;
    
    case '8':
    alert('Avqust');
    break;
    
    case '9':
    alert('Sentyabr');
    break;
    
    case '10':
    alert('Oktyabr');
    break;
    
    case '11':
    alert('Noyabr');
    break;

    case '12':
    alert('Dekabr');
    break;

    default:
    alert('Duzgun daxil edin:');
    
}
//lesson7 questionulduzlu
let date=prompt('Tarixi «YYYY.MM.DD» formatinda daxil edin:');
let newdate=date.split('.');
let il=newdate[0];
let ay=newdate[1];
let gun=newdate[2];

if (ay=='01'|| ay=='02' || ay=='03' || ay=='04 ' ||ay=='05'|| ay=='06'||ay=='07'||ay=='08'|| ay== '09' || ay=='10' || ay=='11'|| ay=='12') {
    switch(ay){
    case '01':
    ay='Yanvar';
    break;

    case '02':
    ay='Fevral';
    break;

    case '03':
    ay='Mart';
    break;
    
    case '04':
    ay='Aprel';
    break;
    

    case '05':
   ay='May';
    break;
    
    case '06':
    ay='Iyun';
    break;
    
    case'07':
    ay='Iyul';
    break;
    
    case '08':
    ay='Avqust';
    break;
    
    case '09':
    ay='Sentyabr';
    break;
    
    case '10':
   ay='Oktyabr';
    break;
    
    case '11':
   ay='Noyabr';
    break;

    case '12':
    ay='Dekabr';
    break;

    default:
    ay='Yanlış dəyər daxil edilib';
    
}
    alert(gun + ' '+ ay + ' ' + il + '-cu il' );
}
else{
    alert('Yanlış dəyər daxil edilib');
}




