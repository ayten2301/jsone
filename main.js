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

