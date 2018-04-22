/* 
  Developed by:  Eduardo Zola - Zola Lab 2015 - www.zolalab.com.br - egzola@gmail.com

  Screen Set Wifi Library
  Copyright (c) 2015 Eduardo Zola.  All right reserved.

  This library is free software; you can redistribute it and/or
  modify it under the terms of the GNU Lesser General Public
  License as published by the Free Software Foundation; either
  version 2.1 of the License, or (at your option) any later version.

  This library is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
  Lesser General Public License for more details.
*/

var TXT = "";
var XBIN = "";
var box;
var TEXTO;
var cnt = 0;
var sz = 0;
var lastBit;
var thisBit;
var funcFinishPublic;


window.rtimeOut=function(callback,delay){
 var dateNow=Date.now,
     requestAnimation=window.requestAnimationFrame,
     start=dateNow(),
     stop,
     timeoutFunc=function(){
      dateNow()-start<delay?stop||requestAnimation(timeoutFunc):callback()
     };
 requestAnimation(timeoutFunc);
 return{
  clear:function(){stop=1}
 }
}



function Transfer(but,funcFinish)
{
   funcFinishPublic = funcFinish;
   var pbar1 = document.getElementById("pbar1");
   var pbar2 = document.getElementById("pbar2");
   pbar1.value = 0;
   pbar2.value = 0;

   but.innerText = "Stop";
   if(window.transf) {window.transf = false;cnt=sz;but.innerText="Transfer";return;};
   box = document.getElementById("box");
   
   var ssid = document.getElementById("ssid").value;
   var pwd = document.getElementById("pwd").value;

   ssid = ssid.trim();
   pwd = pwd.trim();

   
   if(ssid == "" || pwd == "") return;
  

   var PULSES = 0;
   
   
   TXT = ""
   TXT = TXT + ">"+ssid+ String.fromCharCode(10);
   TXT = TXT + pwd + String.fromCharCode(10);
   TXT = TXT + String.fromCharCode(crc(TXT));

   XBIN = binary(TXT) + "0";
   cnt = 0;
   sz = XBIN.length;
   
   pbar1.max = sz;
   pbar2.max = sz;
   
   window.transf = true;
   
   lastBit = 0;
   setTimeout(send,1000);
}

function send()
{
    if(!window.transf || cnt > sz) {box.style.backgroundColor="#000000";funcFinishPublic();return;};

    thisBit = XBIN[cnt];
	cnt++;
    pbar1.value = cnt;
    pbar2.value = cnt;
	
    if(thisBit != lastBit) 
	{
        if(thisBit == "1") box.style.backgroundColor="#FFFFFF"; else box.style.backgroundColor="#000000";
        lastBit = thisBit;
//        setTimeout("send()",34);
        rtimeOut(send,34);
	}
	else 
	{
        if(thisBit == "1") box.style.backgroundColor="#000000"; else box.style.backgroundColor="#FFFFFF";
        lastBit = thisBit;
//        setTimeout("goColor();",200);
        rtimeOut(goColor,204);
	}

}

function goColor()
{
   if(thisBit == "1") box.style.backgroundColor="#FFFFFF"; else box.style.backgroundColor="#000000";
//   setTimeout("send()",34);
   rtimeOut(send,34);
}




function binary(input) 
{
    output = "";
    for (i=0; i < input.length; i++) 
    {
        bin = input[i].charCodeAt(0).toString(2);
        ln = 8-bin.length;
        zeros = "";
        for(j=0;j<ln;j++) zeros = zeros + "0";
        bin = zeros + bin;
        output += bin;
    }
    return(output);
}


function dec2binary(dec)
{
    bin = (dec >>> 0).toString(2);
    ln = 8-bin.length;
    zeros = "";
    for(j=0;j<ln;j++) zeros = zeros + "0";
    bin = zeros + bin;
    return(bin);
}

function crc(str) 
{
    var xcrc = 0;
    var qtd = str.length;

    v1 = str.charCodeAt(0);
    for(var i = 1;i<qtd;i++) 
    {
        v2 = str.charCodeAt(i);
        if(v2 > v1) xcrc += (v2-v1); else xcrc += (v1-v2);
        if(xcrc > 255) xcrc -= 255;
        v1 = v2;
    }

    return(xcrc);

};

