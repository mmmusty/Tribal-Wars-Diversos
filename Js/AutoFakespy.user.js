// ==UserScript==
// @name                Auto Fake Spy 
// @namespace           @@marcosvinicius.santosmarques
// @icon                https://i.imgur.com/7WgHTT8.gif
// @website             https://tribalwarsbr100.wixsite.com/tw100
// @email               tribalwarsbr100@gmail.com
// @description         .Js feito para o game tribal wars, com finalidade de realizar comandos automatizados para atacar qualquer tipo de aldeia, deis que seja prenchido na tabela a coordenada da mesma. ou seja envio de fakes ou ataques reais. com painel com leque de opções podendo fazer toda tarefa sem a necessidade nenhuma de se modificar o codigo do script, ou mecher no mesmo toda vez que for atualizar coordenadas. ou tipos de tropas. ou quantidades de tropas.
// @codigo              Conteudo feito em linguagem javascript com base em EcmaScript totalmente Opensource
// @author              Marcos v.s Marques
// @copyright           2018, Tribalwarsbr100 (https://openuserjs.org//users/Tribalwarsbr100)
// @version             0.0.1
// @license             AGPL-3.0-or-later
// @include             http*://*.*screen=place&try=confirm*
// @include             http*://*.*screen=place*
// @updateURL           https://openuserjs.org/meta/Tribalwarsbr100/My_Script.meta.js
// @grant               GM_getValue
// @grant               GM_setValue
// @grant               GM_getResourceText
// @grant               GM_addStyle
// @grant               unsafeWindow
// ==/UserScript==

   var tempo = 300;
   var x = 0;

javascript:var FakesPorAldeia = 2;
var sp = 0;var sw = 0;var ax = 0;var scout = 5;var lc = 0;var ma = 0;var hv = 0;var cat = 0;var ra = 0;
var coords ='533|336 536|338 528|340 525|339 543|336';
var doc = document;
var url = document.URL;
var cookieName = "farmeruk";
var cookieNameTent = "tentcookie";
var maxTentativas = 2;
var data;
var h2 = document.getElementsByTagName('h2');
var Praca = true;
var EnviarAtaque = true;
for (i = 0; i < h2.length; i++)
{
    if (h2[i].innerHTML == "Praça de Reuniões (nível 1)")
    {
        Praca = true;
    }
    else if(h2[i].innerHTML.search("Confirmar ataque a") != -1)
    {
        EnviarAtaque=true;
    }
}
if (Praca == EnviarAtaque)

var tentCookie = document.cookie.match('(^|;) ?' + cookieNameTent + '=([^;]*)(;|$)');
if (tentCookie != null)
{
    var numTentativas = parseInt(tentCookie[2]);
} else
{
    data = new Date(2019, 11, 11);
    document.cookie = cookieNameTent + "=0;expires=" + data.toGMTString();
    var numTentativas = 0;
}
if (Praca)
{
    if (document.getElementsByClassName("error_box")[0] != undefined)
    {
        var erroFaltaUnid = document.getElementsByClassName("error_box");
        for (i = 0; i < erroFaltaUnid.length && !found; i++)
        {
            if (erroFaltaUnid[i].innerHTML.search("Não existem unidades suficientes") != -1)
            {
                document.getElementById("village_switch_right").click();
                throw ''
            }
        }
    }
    if (doc.forms[0].x.value != "")
    {
        var index = 0;  farmcookie = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)');
        if (farmcookie != null)
        {
            index = parseInt(farmcookie[2]);
        }
        if (index >= coords.length)
        {
            index = 0;
        }
        index = index + 1;
        cookie_date = new Date(2019, 11, 11);
        document.cookie = cookieName + "=" + index + ";expires=" + cookie_date.toGMTString();
        var link = document.getElementsByClassName("quickbar_link");
        for (i = 0; i < link.length; i++)
        {
            if (link[i].href.search(/screen=place/) != -1)
            {
                window.location.href = link[i].href;
            }
        }
    }
    else
    {
        if (window.frames.length > 0)
        {
            doc = window.main.document;
        }
        url = document.URL;
        coords = coords.split(" ");
        var index = 0;
        farmcookie = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)');
        if (farmcookie != null)
        {
            index = parseInt(farmcookie[2]);
        }
        if (index >= coords.length)
        {
            index = 0;
        }
        if (document.getElementsByClassName("command-list-count") [0] != undefined)
        {
            var numAtaques = document.getElementsByClassName("command-list-count") [0].innerHTML;
        }
        else
        {
            var numAtaques = 0;
        }
        if (numAtaques < FakesPorAldeia)
        {
            if (numTentativas <= maxTentativas)
            {
                coords = coords[index];
                coords = coords.split("|");
                index = index + 1;
                cookie_date = new Date(2019, 11, 11);
                document.cookie = cookieName + "=" + index + ";expires=" + cookie_date.toGMTString();
                doc.forms[0].x.value = coords[0];
                doc.forms[0].y.value = coords[1];
                doc.forms[0].spy.value = scout;
                doc.forms[0].spear.value = sp;
                doc.forms[0].sword.value = sw;
                doc.forms[0].axe.value = ax;
                doc.forms[0].spy.value = scout;
                doc.forms[0].light.value = lc;
                doc.forms[0].marcher.value = ma;
                doc.forms[0].heavy.value = hv;
                doc.forms[0].ram.value = ra;
                doc.forms[0].catapult.value = cat;
                document.forms[0].attack.click();
            }
            else
            {
                data = new Date(2019, 11, 11);
                document.cookie = cookieNameTent + "=0;expires=" + data.toGMTString();
                document.getElementById("village_switch_right").click();
            }
        }
        else
        {
            document.getElementById("village_switch_right").click();
        }
    }
}
else if (EnviarAtaque)
{
    var BNCheck = document.getElementsByClassName("error");
    var found = true;
    for (i = 0; i < BNCheck.length && !found; i++)
    {
        if (BNCheck[i].innerHTML == "Bónus noturno ativo!")
        {
            found = true;
        }
    }
    if (found)
    {
        var link = document.getElementById("village_switch_right").click();
        for (i = 0; i < link.length; i++)
        {
            if (link[i].href.search(/screen=place/) != -1)
            {
                numTentativas = numTentativas + 1;
                data = new Date(2019, 11, 11);
                document.cookie = cookieNameTent + "=" + numTentativas + ";expires=" + data.toGMTString();
                window.location.href = link[i].href;
            }
        }
    }
    else
    {
        document.forms[0].troop_confirm_go.click();
    }
}
else
{
    alert("Corra o script apartir da praça de reuniões");
}

doc = document;
if (window.frames.length > 0) doc =
    window.main.document;
url = document.URL;
if (url.indexOf('try=confirm') > 1) {
    doc.forms[0].troop_confirm_go
    .click();
}
doc.forms[0].attack.click();
