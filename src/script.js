(function() {
    var containers, i$, len$, container, that;
    window.ig = {
        projectName: "senat-casovy-vyvoj-mapka",
        containers: {}
    };
    if (typeof _gaq != "undefined" && _gaq !== null) {
        _gaq.push([ "_trackEvent", "ig", ig.projectName ]);
    }
    containers = document.querySelectorAll(".ig");
    if (!containers.length) {
        document.body.className += " ig";
        window.ig.containers.base = document.body;
    } else {
        for (i$ = 0, len$ = containers.length; i$ < len$; ++i$) {
            container = containers[i$];
            window.ig.containers[container.getAttribute("data-ig")] = container;
        }
    }
    if (typeof d3 != "undefined" && d3 !== null) {
        if (that = document.getElementById("fallback")) {
            that.parentNode.removeChild(that);
        }
    }
}).call(this);

window.ig.data = {
    senatori: 'datum,obvod,vitez,vitezStrana\n19961116,1,Kulhánek Vladimír,ODS\n19961116,2,Vyvadil Jiří JUDr.,ČSSD\n19961116,3,Morávek Peter,ČSSD\n19961116,4,Falbr Richard JUDr.,NK\n19961116,5,Drlý Ladislav Ing.,KSČM\n19961116,6,"Havlíček Ivan RNDr.,CSc.",ČSSD\n19961116,7,Jurečka Jaroslav Ing.,ODS\n19961116,8,Jirava František MUDr.,ČSSD\n19961116,9,Kulhánek Bohumil,ODS\n19961116,10,Vachta Karel Mgr.,ČSSD\n19961116,11,Smutný Petr Ing.,ČSSD\n19961116,12,Rychetský Pavel JUDr.,ČSSD\n19961116,13,Eybert Pavel,ODS\n19961116,14,Pospíšil Jiří PhDr.,ODS\n19961116,15,Štěch Milan,ČSSD\n19961116,16,Rückl Jiří Ing.,ODA\n19961116,17,Krámek Jan,ODS\n19961116,18,Vojíř Zdeněk Ing.,ČSSD\n19961116,19,"Mencl Václav Ing., arch.",ODS\n19961116,20,Klausner Zdeněk,ODS\n19961116,21,Žantovský Michael,ODA\n19961116,22,Kondr Milan Ing.,ODS\n19961116,23,Palečková Alena RNDr.,ODS\n19961116,24,Pavlata Josef,ODS\n19961116,25,Koukal Jan,ODS\n19961116,26,Zeman Vladimír Ing.,ODS\n19961116,27,Benda Václav PhDr.,ODS\n19961116,28,Horák Jaroslav,ODS\n19961116,29,Burda Karel Ing.,ODS\n19961116,30,Svoboda Ladislav MUDr.,ČSSD\n19961116,31,Neubauer Oto,ČSSD\n19961116,32,"Musial Jaroslav JUDr., Ing.",ČSSD\n19961116,33,Lansky Egon,ČSSD\n19961116,34,Sobotka Přemysl MUDr.,ODS\n19961116,35,Vízek František PaedDr.,ČSSD\n19961116,36,Coufal Miroslav MUDr.,ČSSD\n19961116,37,Liška Jiří MVDr.,ODS\n19961116,38,Filipová Jarmila Ing.,ODS\n19961116,39,Šubrt Vlastimil Ing.,ODS\n19961116,40,Floss Karel Doc.PhDr.,ČSSD\n19961116,41,Benešová Libuše PhDr.,ODS\n19961116,42,Malát Vladislav Doc.RNDr. CSc.,ODS\n19961116,43,Moserová Jaroslava Doc. Dr. DrSc.,ODA\n19961116,44,Pithart Petr JUDr.,KDU-ČSL\n19961116,45,Barták Karel Doc. MUDr. CSc.,ODA\n19961116,46,Čada Bohumil,KDU-ČSL\n19961116,47,Müller Miloslav,ODS\n19961116,48,Bartoš František MVDr.,KDU-ČSL\n19961116,49,Pavlů Libor Ing.,ČSSD\n19961116,50,Brýdl Jiří Mgr.,KDU-ČSL\n19961116,51,Šenkýř Jiří Ing.,KDU-ČSL\n19961116,52,Jehlička Václav Mgr.,ODA\n19961116,53,Heřman Pavel MVDr.,DEU\n19961116,54,Špaček Milan MUDr.,KDU-ČSL\n19961116,55,Svobodová Vlasta RNDr.,ODS\n19961116,56,Pavlov Jiří Mgr.,ODS\n19961116,57,Dočekal Oldřich RNDr.,KDU-ČSL\n19961116,58,Zahradníček Luděk RNDr.,ODS\n19961116,59,Salzmann Richard JUDr.,ODS\n19961116,60,Zahradníček Jan,KDU-ČSL\n19961116,61,"Jařab Josef Prof.,PhDr. CSc.,Dr.hc",ODA\n19961116,62,Kavan Jan,ČSSD\n19961116,63,Seitlová Jitka RNDr.,ODA\n19961116,64,Babka Zdeněk Ing.,ČSSD\n19961116,65,Reitinger Václav Ing.,ČSSD\n19961116,66,Korytář Karel Ing.,ČSSD\n19961116,67,Konečný František Mgr.,ODS\n19961116,68,Voráček Jan,ODS\n19961116,69,Vašínková Věra,ČSSD\n19961116,70,Topolánek Mirek Ing.,ODS\n19961116,71,Zapletal Jan Ing.,ČSSD\n19961116,72,Matuška Vítězslav Ing.,ČSSD\n19961116,73,Škrabiš Emil Ing.,KDU-ČSL\n19961116,74,Michalík Alfréd Ing.,ČSSD\n19961116,75,Petráš Antonín Mgr.,KSČM\n19961116,76,Nováková Eva MUDr.,KDU-ČSL\n19961116,77,Oplt Vladimír Ing.,ODS\n19961116,78,Ondrová Irena,ODS\n19961116,79,Benda Jan,KDU-ČSL\n19961116,80,Stodůlka Jiří Ing.,KDU-ČSL\n19961116,81,Petřík Jaroslav Ing.,KDU-ČSL\n19981114,1,Kulhánek Vladimír Mgr.,ODS\n19981114,4,Falbr Richard JUDr.,ČSSD\n19981114,7,Skalický Jiří Ing.,4KOALICE\n19981114,10,Dvořák Martin MUDr.,ODS\n19981114,13,Eybert Pavel Mgr.,ODS\n19981114,16,Rűckl Jiří Ing.,4KOALICE\n19981114,19,Kroupa Daniel Mgr.,4KOALICE\n19981114,22,Roithová Zuzana MUDr. MBA,4KOALICE\n19981114,25,Ruml Jan,4KOALICE\n19981114,28,Horák Jaroslav,ODS\n19981114,31,Doubrava Jaroslav,KSČM\n19981114,34,Sobotka Přemysl MUDr.,ODS\n19981114,37,Liška Jiří MVDr.,ODS\n19981114,40,Fencl Jan Ing.,ČSSD\n19981114,43,Moserová Jaroslava doc. MUDr. DrSc.,4KOALICE\n19981114,46,Čada Bohumil,4KOALICE\n19981114,49,Bělehrádek Stanislav Ing.,4KOALICE\n19981114,52,Jehlička Václav Mgr.,4KOALICE\n19981114,55,Julínek Tomáš MUDr.,ODS\n19981114,58,Lastovecká Dagmar JUDr.,ODS\n19981114,61,Mezihorák  František  Prof.PhDr. CSc.,ČSSD\n19981114,64,Harazin Rostislav,KSČM\n19981114,67,Šula Jaroslav Ing.,4KOALICE\n19981114,70,Topolánek Mirek Ing.,ODS\n19981114,73,Škrabiš Emil Ing.,4KOALICE\n19981114,76,Kroupa František Ing.,4KOALICE\n19981114,79,Kaňa Josef Ing.,4KOALICE\n20001112,2,Hadrava Jan,US-DEU\n20001112,5,Novák Alexandr,ODS\n20001112,8,Sefzig Luděk MUDr.,ODS\n20001112,11,Smutný Petr Ing.,ČSSD\n20001112,14,Pospíšil Jiří PhDr.,ODS\n20001112,17,Outrata Edvard,US-DEU\n20001112,20,Zieleniec Josef,US-DEU\n20001112,23,Palečková Alena RNDr.,ODS\n20001112,26,Filipiová Daniela Ing.arch.,ODS\n20001112,29,Bárta Zdeněk Mgr.,KDU-ČSL\n20001112,32,Kubera Jaroslav,ODS\n20001112,35,Paukrtová Soňa Mgr.,US-DEU\n20001112,38,Mitlener Jaroslav MUDr.,ODS\n20001112,41,Rögnerová Helena Ing.,KDU-ČSL\n20001112,44,Pithart Petr Doc. JUDr.,KDU-ČSL\n20001112,47,Fejfar Petr,US-DEU\n20001112,50,Brýdl Jiří Mgr.,KDU-ČSL\n20001112,53,Janata Pavel Ing.,KDU-ČSL\n20001112,56,Schovánek Vladimír Ing.,US-DEU\n20001112,59,Šimonovský Milan Ing.,KDU-ČSL\n20001112,62,Kolář Robert Ing.,US-DEU\n20001112,65,Jílek Adolf Ing.,KDU-ČSL\n20001112,68,Jařab Josef PhDr.,ODA\n20001112,71,Balabán Milan Ing.,ODS\n20001112,74,Feber Ondřej Ing.,US-DEU\n20001112,77,Kubín Jaroslav JUDr.,NK\n20001112,80,Stodůlka Jiří,KDU-ČSL\n20021025,3,Macák Ladislav Mgr.,ČSSD\n20021025,6,Pelc Miloslav,ODS\n20021025,9,Sequens Richard MUDr.,US-DEU\n20021025,12,Rychetský Pavel JUDr.,ČSSD\n20021025,15,Štěch Milan,ČSSD\n20021025,18,Volný Jaromír Ing.,ODS\n20021025,21,Škaloud Miroslav RNDr.,ODS\n20021025,24,Pavlata Josef,ODS\n20021025,27,Mejstřík Martin,CZ\n20021025,30,Svoboda Ladislav MUDr.,ČSSD\n20021025,33,Zoser Josef,HNHRM\n20021025,36,Tejnora Karel MUDr.,ODS\n20021025,39,Adamec Ivan Mgr.,ODS\n20021025,42,Rakušan Jan MUDr.,ČSSD\n20021025,45,Barták Karel Doc.MUDr. CSc.,NK\n20021025,48,Domšová Václava Ing.,SNK ED\n20021025,51,Novotný Josef Ing.,SNK ED\n20021025,54,Železný Vladimír PhDr.,NEZ\n20021025,57,Bárek Ivo Ing.,ČSSD\n20021025,60,Zlatuška Jiří prof. RNDr. CSc.,LIB\n20021025,63,Seitlová Jitka RNDr.,NEZ\n20021025,66,Vavroušek Vítězslav MUDr.,ODS\n20021025,69,Kopecký František Ing.,ODS\n20021025,72,Roubíček Václav Prof. Ing. CSc.,ODS\n20021025,75,Matykiewicz Eduard,KSČM\n20021025,78,Gajdůšková Alena PaedDr.,ČSSD\n20021025,81,Vaculík Josef Ing.,KDU-ČSL\n20041105,1,Horník Jan Ing.,SD-SN\n20041105,4,Balín Vlastimil RSDr.,KSČM\n20041105,7,Šneberger Jiří Ing.,ODS\n20041105,10,Jirsa Tomáš Ing.,ODS\n20041105,13,Eybert Pavel Mgr.,ODS\n20041105,16,Oberfalzer Jiří,ODS\n20041105,19,Nádvorník Jan,ODS\n20041105,22,Štětina Jaromír,Zelení\n20041105,25,Schwarzenberg Karel,US-DEU\n20041105,28,Nedoma Jiří,ODS\n20041105,31,Sušický Pavel MUDr.,ODS\n20041105,34,Sobotka Přemysl MUDr.,ODS\n20041105,37,Liška Jiří MVDr.,ODS\n20041105,40,Moldan Bedřich Prof. RNDr. CSc.,ODS\n20041105,43,Stříteský Jiří Ing.,ODS\n20041105,46,Müllerová Ludmila Ing.,KDU-ČSL\n20041105,49,Sehnal Vlastimil,ODS\n20041105,52,Jehlička Václav Mgr.,KDU-ČSL\n20041105,55,Julínek Tomáš MUDr.,ODS\n20041105,58,Slavotínek Rostislav Ing.,KDU-ČSL\n20041105,61,Hálek Jan Prof.Ing. CSc.,ODS\n20041105,64,Žák Jiří,ODS\n20041105,67,Bureš Milan Mgr.,ODS\n20041105,70,Janáčková Liana Ing. Arch.,NEZ\n20041105,73,Petrov Igor Ing.,SNK ED\n20041105,76,Janalík Zdeněk PaedDr.,ODS\n20041105,79,Venhodová Alena MUDr.,ODS\n20061020,2,Čáslava Pavel PhDr.,ODS\n20061020,5,Skála Petr MUDr.,NK\n20061020,8,Sefzig Luděk MUDr.,ODS\n20061020,11,Rippelová Jiřina JUDr.,ČSSD\n20061020,14,Pospíšil Jiří PhDr.,ODS\n20061020,17,Grulich Tomáš PhDr.,ODS\n20061020,20,Töpfer Tomáš,ODS\n20061020,23,Palečková Alena RNDr.,ODS\n20061020,26,Filipiová Daniela Ing. arch.,ODS\n20061020,29,Vondra Alexandr RNDr.,ODS\n20061020,32,Kubera Jaroslav,ODS\n20061020,35,Paukrtová Soňa Mgr.,SOS\n20061020,38,Jermář Jaromír PhDr.,ČSSD\n20061020,41,Šebek Karel,ODS\n20061020,44,Pithart Petr Doc. JUDr.,KDU-ČSL\n20061020,47,Pakosta Petr Ing.,ODS\n20061020,50,Koukal Václav,KDU-ČSL\n20061020,53,Jonáš Vítězslav,ODS\n20061020,56,Hajda Jan Ing.,ČSSD\n20061020,59,Svoboda Richard PhDr. MBA,ODS\n20061020,62,Sekaninová Božena,ČSSD\n20061020,65,Jílek Adolf Ing.,KDU-ČSL\n20061020,68,Vlček Václav MUDr.,ODS\n20061020,71,Veřovský Otakar Mgr.,ČSSD\n20061020,74,Vícha Petr Ing.,ČSSD\n20061020,77,Čunek Jiří,KDU-ČSL\n20061020,80,Juřenčáková Jana Ing.,STAN\n20081017,3,Nenutil Miroslav Mgr.,ČSSD\n20081017,6,Chládek Marcel PhDr. MBA,ČSSD\n20081017,9,Bis Jiří Ing.,ČSSD\n20081017,12,Krejča Miroslav Ing. Bc. CSc.,ČSSD\n20081017,15,Štěch Milan,ČSSD\n20081017,18,Řihák Josef MVDr.,ČSSD\n20081017,21,Škaloud Miroslav RNDr.,ODS\n20081017,24,Kladívko Tomáš,ODS\n20081017,27,Schwarz Zdeněk MUDr.,ODS\n20081017,30,Dienstbier Jiří,ČSSD\n20081017,33,Sykáček Jaroslav Ing.,ČSSD\n20081017,36,Kapoun Karel Ing.,ČSSD\n20081017,39,Trpák Pavel MUDr.,ČSSD\n20081017,42,Lebeda Pavel MUDr.,ČSSD\n20081017,45,Dryml Vladimír MUDr.,ČSSD\n20081017,48,Antl Miroslav JUDr.,ČSSD\n20081017,51,Zvěřinová Dagmar Ing.,ČSSD\n20081017,54,Bayerová Marta RNDr.,KSČM\n20081017,57,Bárek Ivo Ing.,ČSSD\n20081017,60,Janeček Miloš prof. MUDr. CSc.,ČSSD\n20081017,63,Lajtoch Jiří Ing.,ČSSD\n20081017,66,Korytář Karel Ing.,ČSSD\n20081017,69,Richtrová Eva Ing.,ČSSD\n20081017,72,Guziana Petr MUDr.,ČSSD\n20081017,75,Sušil Radek MUDr.,ČSSD\n20081017,78,Gajdůšková Alena PaedDr.,ČSSD\n20081017,81,Doupovcová Hana Ing.,ČSSD\n20101015,1,Horník Jan,STAN\n20101015,4,Dernerová Alena MUDr.,S.cz\n20101015,7,Terelmešová Dagmar,ČSSD\n20101015,10,Jirsa Tomáš Ing.,ODS\n20101015,13,Eybert Pavel Mgr.,ODS\n20101015,16,Oberfalzer Jiří,ODS\n20101015,19,Pešák Milan PhDr.,ODS\n20101015,22,Štětina Jaromír,TOP 09\n20101015,25,Bratský Petr Ing.,ODS\n20101015,28,Vrecionová Veronika Ing.,ODS\n20101015,31,Doubrava Jaroslav,S.cz\n20101015,34,Sobotka Přemysl MUDr.,ODS\n20101015,37,Táborský Josef Ing.,ČSSD\n20101015,40,Strnad Jaromír Ing.,ČSSD\n20101015,43,Horská Miluše Mgr.,Nestran.\n20101015,46,Šilar Petr Ing.,KDU-ČSL\n20101015,49,Regec Jozef,ČSSD\n20101015,52,Vystrčil Miloš RNDr.,ODS\n20101015,55,Žaloudík Jan prof. MUDr. CSc.,ČSSD\n20101015,58,Juránek Stanislav Ing.,KDU-ČSL\n20101015,61,Tesařík Martin Ing.,ČSSD\n20101015,64,Palas Jaroslav Ing.,ČSSD\n20101015,67,Besta Zdeněk Ing.,ČSSD\n20101015,70,Maštalíř Antonín Ing.,ČSSD\n20101015,73,Gawlas Petr,ČSSD\n20101015,76,Malý Miloš Mgr.,ČSSD\n20101015,79,Škromach Zdeněk Ing.,ČSSD\n20121012,2,Berka Zdeněk Ing.,ČSSD\n20121012,5,Homolka Václav PaedDr.,KSČM\n20121012,8,Emmerová Milada Doc.MUDr. CSc.,ČSSD\n20121012,11,Látka Jan,ČSSD\n20121012,14,Šesták Jiří Mgr.,STAN\n20121012,17,Grulich Tomáš PhDr.,ODS\n20121012,20,Syková Eva prof. MUDr. DrSc. FCMA,ČSSD\n20121012,23,Filipiová Daniela Ing. arch.,ODS\n20121012,26,Michálek Libor Mgr. MPA,Piráti\n20121012,29,Mezian Hassan MUDr.,ČSSD\n20121012,32,Kubera Jaroslav,ODS\n20121012,35,Zeman Jaroslav,ODS\n20121012,38,Jermář Jaromír PhDr.,ČSSD\n20121012,41,Jeništa Luděk Mgr.,STAN\n20121012,44,Veleba Jan Ing.,NK\n20121012,47,Franc Lubomír Bc.,ČSSD\n20121012,50,Martínek Radko Mgr.,ČSSD\n20121012,53,Bublan František Mgr.,ČSSD\n20121012,56,Hajda Jan Ing.,ČSSD\n20121012,59,Wagnerová Eliška JUDr. Ph.D.,Zelení\n20121012,62,Sekaninová Božena,ČSSD\n20121012,65,Brož Zdeněk Mgr. Bc.,KDU-ČSL\n20121012,68,Plaček Vladimír MUDr. Mgr.,ČSSD\n20121012,71,Sulovský Leopold Ing.,Ostravak\n20121012,74,Vícha Petr Ing.,ČSSD\n20121012,77,Čunek Jiří,KDU-ČSL\n20121012,80,Okamura Tomio,NK\n20141010,3,Nenutil Miroslav Mgr.,ČSSD\n20141010,6,Hamousová Zdeňka Mgr.,ANO\n20141010,9,Aschenbrenner Lumír Ing.,ODS\n20141010,12,Kratochvíle Karel Ing.,ČSSD\n20141010,15,Štěch Milan,ČSSD\n20141010,18,Burian Jiří Ing.,ODS\n20141010,21,Láska Václav Mgr.,Zelení\n20141010,24,Baudyšová Zuzana Ing.,ANO\n20141010,27,Hampl Václav prof. RNDr. DrSc.,KDU-ČSL\n20141010,30,DIENSTBIER Jiří Mgr.,ČSSD\n20141010,33,Linhart Zbyněk Ing.,STAN\n20141010,36,Vosecký Jiří,SLK\n20141010,39,Hlavatý Jiří Ing.,ANO\n20141010,42,Třísková Emilie,ČSSD\n20141010,45,Malý Jaroslav prof. MUDr. CSc.,ČSSD\n20141010,48,Antl Miroslav JUDr.,ČSSD\n20141010,51,Bradáč František Ing.,KDU-ČSL\n20141010,54,Štohl Pavel Ing.,ČSSD\n20141010,57,Bárek Ivo Ing.,ČSSD\n20141010,60,Papoušek Zdeněk PhDr.,KDU-ČSL\n20141010,63,Seitlová Jitka RNDr.,Zelení\n20141010,66,Šromová Alena MUDr.,KDU-ČSL\n20141010,69,Carbol Jiří Ing.,KDU-ČSL\n20141010,72,Koliba Peter doc. MUDr. CSc.,ANO\n20141010,75,Sušil Radek MUDr.,ČSSD\n20141010,78,Čuba František doc. Ing. CSc.,SPOZ\n20141010,81,Valenta Ivo,Soukromníci\n20161007,1,Horník Jan Ing.,STAN\n20161007,4,Dernerová Alena MUDr.,S.cz\n20161007,7,Chaloupek Václav Mgr.,OPAT\n20161007,10,Jirsa Tomáš Ing. MBA,ODS\n20161007,13,Větrovský Jaroslav Mgr.,ANO\n20161007,16,Oberfalzer Jiří,ODS\n20161007,19,Kos Ladislav Ing.,HPP 11\n20161007,22,Chmelová Renata,KDU-ČSL\n20161007,25,Růžička Jiří Mgr.,TOP 09\n20161007,28,Holeček Petr,STAN\n20161007,31,Doubrava Jaroslav,S.cz\n20161007,34,Canov Michael Ing.,SLK\n20161007,37,Czernin Tomáš Ing.,TOP 09\n20161007,40,Strnad Jaromír Ing.,ČSSD\n20161007,43,Horská Miluše Mgr.,Nestran.\n20161007,46,Šilar Petr Ing.,KDU-ČSL\n20161007,49,Vítková Jaromíra Ing.,KDU-ČSL\n20161007,52,Vystrčil Miloš RNDr.,ODS\n20161007,55,Žaloudík Jan prof. MUDr. CSc.,ČSSD\n20161007,58,Dušek Jiří Mgr. Ph.D.,ANO\n20161007,61,Kantor Lumír MUDr. Ph.D.,KDU-ČSL\n20161007,64,Václavec Ladislav MUDr.,ANO\n20161007,67,Orel Petr,Zelení\n20161007,70,Nytra Zdeněk Ing.,NK\n20161007,73,Cieńciała Jiří doc. Ing. CSc.,"""OSN"""\n20161007,76,Jelínková Šárka Mgr.,KDU-ČSL\n20161007,79,Hubáčková Anna Ing. Bc.,KDU-ČSL\n20181005,2,Balatka Miroslav Ing.,STAN\n20181005,5,Rabas Přemysl MVDr.,SEN 21\n20181005,8,Karpíšek Pavel Ing. Mgr.,ODS\n20181005,11,Vilímec Vladislav Ing.,ODS\n20181005,14,Faktor Ladislav JUDr.,NK\n20181005,17,Fischer Pavel,NK\n20181005,20,Drahoš Jiří prof. Ing. DrSc.,STAN\n20181005,23,Wagenknecht Lukáš Ing.,Piráti\n20181005,26,Hilšer Marek MUDr. Bc. Ph.D.,NK\n20181005,29,Chlupáč Ladislav Mgr.,ODS\n20181005,32,Kubera Jaroslav,ODS\n20181005,35,Zeman Jaroslav,ODS\n20181005,38,Nwelati Raduan MUDr.,ODS\n20181005,41,Hraba Zdeněk JUDr. Ing. Ph.D.,STAN\n20181005,44,Tecl Jan Mgr. MBA,ODS\n20181005,47,Červíček Martin brig.gen.v.v. Mgr.,ODS\n20181005,50,Kortyš Michal,ODS\n20181005,53,Žáková Hana,STAN\n20181005,56,Koštial Rostislav,ODS\n20181005,59,Bek Mikuláš doc. PhDr. Ph.D.,STAN\n20181005,62,Chalánková Jitka MUDr.,NK\n20181005,65,Adámek Miroslav Mgr.,ANO\n20181005,68,Pavera Herbert Mgr.,TOP 09\n20181005,71,Sulovský Leopold Ing.,Ostravak\n20181005,74,Vícha Petr Ing.,ČSSD\n20181005,77,Čunek Jiří,KDU-ČSL\n20181005,80,Kunčar Patrik Ing. Bc.,KDU-ČSL\n19990828,27,Fischer Václav,NK\n20031031,12,Kalbáč Josef Ing.,KDU-ČSL\n20031107,58,Jarůšek Karel,ODS\n20041008,20,Příhoda František,ODS\n20041008,54,Špaček Milan MUDr.,KDU-ČSL\n20070427,63,Lajtoch Jiří Ing.,ČSSD\n20070413,5,Homolka Václav PaedDr.,KSČM\n20110318,30,Dienstbier Jiří Mgr.,ČSSD\n20140919,22,Cabrnochová Ivana,Zelení\n20140110,80,Kunčar Patrik Bc.,KDU-ČSL\n20180105,39,Sobotka Jan Ing.,STAN\n20180518,78,Goláň Tomáš Ing.,SEN 21\n',
    mapa: {
        type: "Topology",
        objects: {
            data: {
                type: "GeometryCollection",
                bbox: [ 12.100045027793065, 48.55772845881593, 18.855723547545107, 51.05600549764847 ],
                geometries: [ {
                    type: "MultiPolygon",
                    properties: {
                        OBJECTID: 1,
                        obvod: 1,
                        Shape_Leng: 189027.755574,
                        Shape_Area: 1377441321.3,
                        InPoly_FID: 1,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ [ 0, 1, 2, 3, 4 ] ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 2,
                        obvod: 2,
                        Shape_Leng: 196977.63148,
                        Shape_Area: 1133908728.76,
                        InPoly_FID: 2,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -4, 5, 6, 7 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 3,
                        obvod: 3,
                        Shape_Leng: 311315.904943,
                        Shape_Area: 2178881782.96,
                        InPoly_FID: 3,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -7, 8, 9, 10, 11 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 4,
                        obvod: 4,
                        Shape_Leng: 112257.532329,
                        Shape_Area: 467464642.153,
                        InPoly_FID: 4,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 12, 13, 14, 15 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 5,
                        obvod: 5,
                        Shape_Leng: 152125.449529,
                        Shape_Area: 936688149.066,
                        InPoly_FID: 5,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -15, 16, -1, 17 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 6,
                        obvod: 6,
                        Shape_Leng: 266443.700284,
                        Shape_Area: 2059879257.65,
                        InPoly_FID: 6,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ 18, 19, 20, -2, -17, -14, 21, 22 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 7,
                        obvod: 7,
                        Shape_Leng: 218147.368002,
                        Shape_Area: 1556545150.73,
                        InPoly_FID: 7,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 23, 24, 25, 26, -10, 27, 28 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 8,
                        obvod: 8,
                        Shape_Leng: 269366.281492,
                        Shape_Area: 2012326268.11,
                        InPoly_FID: 8,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ 29, 30, -24, 31, -28, -9, -6, -3, -21 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 9,
                        obvod: 9,
                        Shape_Leng: 56966.5216547,
                        Shape_Area: 116372973.874,
                        InPoly_FID: 9,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -29, -32 ] ]
                }, {
                    type: "MultiPolygon",
                    properties: {
                        OBJECTID: 10,
                        obvod: 10,
                        Shape_Leng: 348166.00859,
                        Shape_Area: 3310723382.45,
                        InPoly_FID: 10,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ [ 32 ] ], [ [ 33, 34, 35, 36, 37 ] ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 11,
                        obvod: 11,
                        Shape_Leng: 290733.910401,
                        Shape_Area: 2620360905.42,
                        InPoly_FID: 11,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -27, 38, 39, -11 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 12,
                        obvod: 12,
                        Shape_Leng: 235952.077485,
                        Shape_Area: 2116035492.85,
                        InPoly_FID: 12,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 40, -37, 41, -39, -26, 42 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 13,
                        obvod: 13,
                        Shape_Leng: 275460.632381,
                        Shape_Area: 2087315841.07,
                        InPoly_FID: 13,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 43, 44, 45, -38, -41, 46 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 14,
                        obvod: 14,
                        Shape_Leng: 160722.081428,
                        Shape_Area: 845481708.152,
                        InPoly_FID: 14,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -46, 47, -34 ], [ -33 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 15,
                        obvod: 15,
                        Shape_Leng: 326048.747853,
                        Shape_Area: 2590237812.91,
                        InPoly_FID: 15,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 48, 49, -35, -48, -45, 50 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 16,
                        obvod: 16,
                        Shape_Leng: 195381.521962,
                        Shape_Area: 870921484.841,
                        InPoly_FID: 16,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 51, 52, 53, 54, 55, 56, 57, 58, -30, -20, 59 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 17,
                        obvod: 17,
                        Shape_Leng: 52728.8462779,
                        Shape_Area: 91027319.392,
                        InPoly_FID: 17,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 60, 61, -56, 62 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 18,
                        obvod: 18,
                        Shape_Leng: 283923.394369,
                        Shape_Area: 2162257789.98,
                        InPoly_FID: 18,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 63, 64, -47, -43, -25, -31, -59 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 19,
                        obvod: 19,
                        Shape_Leng: 44014.7516457,
                        Shape_Area: 62361687.7814,
                        InPoly_FID: 19,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 65, 66, -57, -62, 67, 68, 69 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 20,
                        obvod: 20,
                        Shape_Leng: 21857.0200264,
                        Shape_Area: 23952776.1527,
                        InPoly_FID: 20,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 70, -68, -61, 71, 72 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 21,
                        obvod: 21,
                        Shape_Leng: 37969.9521413,
                        Shape_Area: 50204012.5033,
                        InPoly_FID: 21,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -72, -63, -55, 73, 74 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 22,
                        obvod: 22,
                        Shape_Leng: 17399.1067017,
                        Shape_Area: 11248039.3357,
                        InPoly_FID: 22,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -70, 75, 76 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 23,
                        obvod: 23,
                        Shape_Leng: 37651.5546618,
                        Shape_Area: 53203027.7612,
                        InPoly_FID: 23,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ 77, 78, 79, 80, 81 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 24,
                        obvod: 24,
                        Shape_Leng: 46264.8045617,
                        Shape_Area: 91915877.4121,
                        InPoly_FID: 24,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 82, -66, -77, 83, -78, 84 ] ]
                }, {
                    type: "MultiPolygon",
                    properties: {
                        OBJECTID: 25,
                        obvod: 25,
                        Shape_Leng: 33489.5580038,
                        Shape_Area: 19687231.1732,
                        InPoly_FID: 25,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ [ -74, -54, 85 ] ], [ [ 86, 87 ] ], [ [ 88, 89, -52 ] ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 26,
                        obvod: 26,
                        Shape_Leng: 22656.6083743,
                        Shape_Area: 25263123.6392,
                        InPoly_FID: 26,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -76, -69, -71, 90, -79, -84 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 27,
                        obvod: 27,
                        Shape_Leng: 51381.5903918,
                        Shape_Area: 67080027.5233,
                        InPoly_FID: 27,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -80, -91, -73, -75, -86, -53, -90, 91, -88, 92 ] ]
                }, {
                    type: "MultiPolygon",
                    properties: {
                        OBJECTID: 28,
                        obvod: 28,
                        Shape_Leng: 139131.387596,
                        Shape_Area: 634523961.817,
                        InPoly_FID: 28,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ [ 93, 94, 95, -85, -82, 96, 97, 98, 99, 100 ] ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 29,
                        obvod: 29,
                        Shape_Leng: 188953.196739,
                        Shape_Area: 1323824167.7,
                        InPoly_FID: 29,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 101, -100, 102, -23, 103, 104, 105 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 30,
                        obvod: 30,
                        Shape_Leng: 118740.804437,
                        Shape_Area: 450358527.264,
                        InPoly_FID: 30,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ -99, 106, -93, -87, -92, -89, -60, -19, -103 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 31,
                        obvod: 31,
                        Shape_Leng: 86311.3082688,
                        Shape_Area: 407257660.354,
                        InPoly_FID: 31,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 107, -105, 108, 109 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 32,
                        obvod: 32,
                        Shape_Leng: 100245.731517,
                        Shape_Area: 466092992.474,
                        InPoly_FID: 32,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -109, -104, -22, -13, 110 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 33,
                        obvod: 33,
                        Shape_Leng: 165212.851856,
                        Shape_Area: 909818974.833,
                        InPoly_FID: 33,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 111, -106, -108, 112 ] ]
                }, {
                    type: "MultiPolygon",
                    properties: {
                        OBJECTID: 34,
                        obvod: 34,
                        Shape_Leng: 151446.710324,
                        Shape_Area: 652171663.131,
                        InPoly_FID: 34,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ [ 113, 114, 115, 116 ] ] ]
                }, {
                    type: "MultiPolygon",
                    properties: {
                        OBJECTID: 35,
                        obvod: 35,
                        Shape_Leng: 149300.597837,
                        Shape_Area: 980974315.644,
                        InPoly_FID: 35,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ [ 117, -118, 118 ] ], [ [ 119, 120, 121, 122, -114, 123 ] ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 36,
                        obvod: 36,
                        Shape_Leng: 235485.780426,
                        Shape_Area: 1737333882.07,
                        InPoly_FID: 36,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -116, 124, -101, -102, -112, 125 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 37,
                        obvod: 37,
                        Shape_Leng: 232756.835151,
                        Shape_Area: 1505878649.15,
                        InPoly_FID: 37,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ -122, 126, 127, 128, 129, 130, 131, 132 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 38,
                        obvod: 38,
                        Shape_Leng: 187750.707335,
                        Shape_Area: 1143659649.96,
                        InPoly_FID: 38,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -115, -123, -133, 133, -94, -125 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 39,
                        obvod: 39,
                        Shape_Leng: 196468.166569,
                        Shape_Area: 1268177017.36,
                        InPoly_FID: 39,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ 134, -128, -118, -120, 135 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 40,
                        obvod: 40,
                        Shape_Leng: 261592.135348,
                        Shape_Area: 1982173608.79,
                        InPoly_FID: 40,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 136, 137, 138, -51, -44, -65, 139, 140 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 41,
                        obvod: 41,
                        Shape_Leng: 215892.809033,
                        Shape_Area: 1267115366.23,
                        InPoly_FID: 41,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 141, -140, -64, -58, -67, -83, -96 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 42,
                        obvod: 42,
                        Shape_Leng: 189444.586893,
                        Shape_Area: 998158666.879,
                        InPoly_FID: 42,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 142, -141, -142, -95, -134, -132 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 43,
                        obvod: 43,
                        Shape_Leng: 119375.345343,
                        Shape_Area: 553066874.78,
                        InPoly_FID: 43,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 143, 144, -137, -143, -131, 145 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 44,
                        obvod: 44,
                        Shape_Leng: 204825.587159,
                        Shape_Area: 1319347205.18,
                        InPoly_FID: 44,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 146, 147, 148, 149, -138, -145 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 45,
                        obvod: 45,
                        Shape_Leng: 110685.175123,
                        Shape_Area: 606540666.854,
                        InPoly_FID: 45,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 150, 151, -146, -130 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 46,
                        obvod: 46,
                        Shape_Leng: 191955.312772,
                        Shape_Area: 1189452934.02,
                        InPoly_FID: 46,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ 152, 153, 154, 155, 156, 157, 158 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 47,
                        obvod: 47,
                        Shape_Leng: 194104.525589,
                        Shape_Area: 916127251.042,
                        InPoly_FID: 47,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 159, -151, -129, -135, 160 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 48,
                        obvod: 48,
                        Shape_Leng: 204456.114198,
                        Shape_Area: 1486783146.9,
                        InPoly_FID: 48,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -158, 161, -147, -144, -152, -160, 162 ] ]
                }, {
                    type: "MultiPolygon",
                    properties: {
                        OBJECTID: 49,
                        obvod: 49,
                        Shape_Leng: 169801.498165,
                        Shape_Area: 1053773618.47,
                        InPoly_FID: 49,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ [ 163, 164, 165 ] ], [ [ 166, 167, 168, 169, 170, 171, 172 ], [ 173 ] ] ]
                }, {
                    type: "MultiPolygon",
                    properties: {
                        OBJECTID: 50,
                        obvod: 50,
                        Shape_Leng: 213531.830856,
                        Shape_Area: 1637904821.54,
                        InPoly_FID: 50,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ [ 174, 154, 175 ] ], [ [ -157, 176, 177, 178, 179, -173, 163, 180, -148, -162 ] ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 51,
                        obvod: 51,
                        Shape_Leng: 193433.192052,
                        Shape_Area: 1577245511.12,
                        InPoly_FID: 51,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ -181, 164, 181, -171, 182, 183, 184, 185, 186, -149 ] ]
                }, {
                    type: "MultiPolygon",
                    properties: {
                        OBJECTID: 52,
                        obvod: 52,
                        Shape_Leng: 274633.355858,
                        Shape_Area: 1597959936.69,
                        InPoly_FID: 52,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ [ -188, -189, -190, 184, -191 ] ], [ [ 191, 192, 193 ] ], [ [ -187, 194, 195, 196, 197, -49, -139, -150 ] ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 53,
                        obvod: 53,
                        Shape_Leng: 190687.222756,
                        Shape_Area: 1463331964.8,
                        InPoly_FID: 53,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ 192, 198, -189, -190, -184, 199, 200, -196 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 54,
                        obvod: 54,
                        Shape_Leng: 193505.63324,
                        Shape_Area: 1632031454.29,
                        InPoly_FID: 54,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 201, 202, 203, -197, -201 ] ]
                }, {
                    type: "MultiPolygon",
                    properties: {
                        OBJECTID: 55,
                        obvod: 55,
                        Shape_Leng: 192411.02565,
                        Shape_Area: 850041437.238,
                        InPoly_FID: 55,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ [ -174 ] ], [ [ -170, 204, 205, 206, 207, 208, -202, -200, -183 ] ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 56,
                        obvod: 56,
                        Shape_Leng: 177117.098559,
                        Shape_Area: 1171888772.69,
                        InPoly_FID: 56,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 209, 210, -203, -209, 211 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 57,
                        obvod: 57,
                        Shape_Leng: 183542.356442,
                        Shape_Area: 1071431969.48,
                        InPoly_FID: 57,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 212, 213, -212, -208, 214, 215, -168, 216 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 58,
                        obvod: 58,
                        Shape_Leng: 52464.4311589,
                        Shape_Area: 87278323.3921,
                        InPoly_FID: 58,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -215, -207, 217, 218, 219 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 59,
                        obvod: 59,
                        Shape_Leng: 28265.8722433,
                        Shape_Area: 30486222.0817,
                        InPoly_FID: 59,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 218, -219, -218, -206, 220 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 60,
                        obvod: 60,
                        Shape_Leng: 39474.8992016,
                        Shape_Area: 60281878.2574,
                        InPoly_FID: 60,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -216, -220, -219, -221, -205, -169 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 61,
                        obvod: 61,
                        Shape_Leng: 139570.72106,
                        Shape_Area: 703240414.283,
                        InPoly_FID: 61,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ 221, 222, 223, 224, 225, 226, 227, 228, 229 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 62,
                        obvod: 62,
                        Shape_Leng: 199241.726764,
                        Shape_Area: 917757689.476,
                        InPoly_FID: 62,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ -228, 230, 231, 232, -217, -167, -180, 233 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 63,
                        obvod: 63,
                        Shape_Leng: 169850.772669,
                        Shape_Area: 927104879.468,
                        InPoly_FID: 63,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 234, 235, 236, 231, -231, -227, 237 ] ]
                }, {
                    type: "MultiPolygon",
                    properties: {
                        OBJECTID: 64,
                        obvod: 64,
                        Shape_Leng: 234065.581187,
                        Shape_Area: 1869393945.21,
                        InPoly_FID: 64,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ [ 238, 239, -225, 240 ] ], [ [ 241, 242, 243, 244, 222, 245 ] ], [ [ 246, 247, 248, -230, 249, 250, 251 ] ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 65,
                        obvod: 65,
                        Shape_Leng: 216867.935822,
                        Shape_Area: 1700921098.62,
                        InPoly_FID: 65,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -251, 252, -153, 253 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 66,
                        obvod: 66,
                        Shape_Leng: 211619.827083,
                        Shape_Area: 1245528052.86,
                        InPoly_FID: 66,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ -250, -229, -234, -179, 254, -154, -253 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 67,
                        obvod: 67,
                        Shape_Leng: 138271.850267,
                        Shape_Area: 686628653.188,
                        InPoly_FID: 67,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 255, 256, 257, 258, -235, 259, 260 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 68,
                        obvod: 68,
                        Shape_Leng: 138720.877256,
                        Shape_Area: 669791128.232,
                        InPoly_FID: 68,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ 261, -260, -238, -226, -240, 262, 242, 263, -247, 264 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 69,
                        obvod: 69,
                        Shape_Leng: 119214.018626,
                        Shape_Area: 653752415.204,
                        InPoly_FID: 69,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 265, 266, 267, 268, -258, 269 ] ]
                }, {
                    type: "MultiPolygon",
                    properties: {
                        OBJECTID: 70,
                        obvod: 70,
                        Shape_Leng: 86937.0814112,
                        Shape_Area: 189383131.56,
                        InPoly_FID: 70,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ [ -270, -257, 270, 271, 272, 273 ] ], [ [ -275, -276, -277 ] ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 71,
                        obvod: 71,
                        Shape_Leng: 35639.5823791,
                        Shape_Area: 36067408.3265,
                        InPoly_FID: 71,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -256, 277, -271 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 72,
                        obvod: 72,
                        Shape_Leng: 72422.0234966,
                        Shape_Area: 181432903.614,
                        InPoly_FID: 72,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ 278, 275, 279, -272, -278, -261, -262, 280 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 73,
                        obvod: 73,
                        Shape_Leng: 123876.941426,
                        Shape_Area: 611411148.63,
                        InPoly_FID: 73,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -267, 281, 282, 283 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 74,
                        obvod: 74,
                        Shape_Leng: 66477.5683262,
                        Shape_Area: 116327704.734,
                        InPoly_FID: 74,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ 284, -282, -266, -274, 276, -279, 285 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 75,
                        obvod: 75,
                        Shape_Leng: 65438.7010656,
                        Shape_Area: 184516658.458,
                        InPoly_FID: 75,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -283, -285, 286 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 76,
                        obvod: 76,
                        Shape_Leng: 209599.939769,
                        Shape_Area: 930701562.363,
                        InPoly_FID: 76,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 287, 288, 289, 290, 291, -213, -233, -237 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 77,
                        obvod: 77,
                        Shape_Leng: 143150.171044,
                        Shape_Area: 964438436.727,
                        InPoly_FID: 77,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -259, -269, 292, 293, -288, -236 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 78,
                        obvod: 78,
                        Shape_Leng: 137778.724449,
                        Shape_Area: 698146928.904,
                        InPoly_FID: 78,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ 294, 295, -289, -294 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 79,
                        obvod: 79,
                        Shape_Leng: 148103.30671,
                        Shape_Area: 859664883.59,
                        InPoly_FID: 79,
                        SmoPgnFlag: 0
                    },
                    arcs: [ [ -292, 296, 297, 298, -210, -214 ] ]
                }, {
                    type: "MultiPolygon",
                    properties: {
                        OBJECTID: 80,
                        obvod: 80,
                        Shape_Leng: 162892.734685,
                        Shape_Area: 911650366.085,
                        InPoly_FID: 80,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ [ 299, 300, 301 ] ], [ [ -296, 302, 303, -304, 304, -290 ] ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 81,
                        obvod: 81,
                        Shape_Leng: 129195.55318,
                        Shape_Area: 830709507.533,
                        InPoly_FID: 81,
                        SmoPgnFlag: 1
                    },
                    arcs: [ [ -305, 305, 300, 306, 297, -298, -297, -291 ] ]
                } ]
            }
        },
        arcs: [ [ [ 1257, 7396 ], [ 6, -8 ], [ 16, -18 ], [ 7, -7 ], [ 4, -3 ], [ 13, -7 ], [ 11, -3 ], [ 9, -3 ], [ 9, -1 ], [ 23, 0 ], [ 3, -2 ], [ 8, -3 ], [ 16, -8 ], [ 9, -3 ], [ 7, -2 ], [ 11, 0 ], [ 7, -1 ], [ 14, -4 ], [ 4, -2 ], [ 5, 0 ], [ 3, -3 ], [ 5, -4 ], [ 17, -14 ], [ 4, -6 ], [ 6, -9 ], [ 3, -4 ], [ 2, -4 ], [ 1, -6 ], [ 1, -4 ], [ 1, -7 ], [ 0, -29 ], [ -1, -9 ], [ 1, -7 ], [ 1, -4 ], [ 0, -3 ], [ 2, -4 ], [ 0, -3 ], [ 5, -6 ], [ 2, -3 ], [ 7, -3 ], [ 2, -1 ], [ 3, -2 ], [ 1, 0 ], [ 6, 4 ], [ 10, 4 ], [ 4, 4 ], [ 5, 2 ], [ 6, 1 ], [ 6, 0 ], [ 6, -1 ], [ 6, -1 ], [ 15, -5 ], [ 9, -2 ], [ 29, 0 ], [ 11, 5 ], [ 12, 4 ], [ 3, 1 ], [ 4, 0 ], [ 4, -2 ], [ 6, -6 ], [ 4, -4 ], [ 3, -5 ], [ 1, -3 ], [ 3, -3 ], [ 1, -5 ], [ 5, -10 ], [ 4, -11 ], [ 3, -15 ], [ 3, -12 ], [ 2, -7 ], [ 1, -8 ], [ 0, -31 ], [ -1, -7 ], [ -1, -10 ], [ -4, -23 ], [ 0, -8 ], [ -1, -6 ], [ 0, -15 ], [ 1, -28 ], [ 0, -4 ], [ 0, -6 ], [ 0, -8 ], [ -4, -19 ], [ -4, -29 ], [ -1, -13 ], [ -2, -11 ], [ 0, -9 ], [ 2, -6 ], [ 2, -6 ], [ 5, -16 ], [ 2, -10 ], [ 2, -9 ], [ 1, -14 ], [ 1, -8 ], [ 0, -9 ], [ 1, -13 ], [ 0, -18 ], [ -1, -4 ], [ -2, -14 ], [ 0, -5 ], [ -2, -8 ], [ 2, -8 ], [ 0, -4 ], [ 1, -7 ], [ 2, -4 ], [ 2, -6 ], [ 3, -4 ], [ 11, -16 ], [ 4, -7 ], [ 8, -13 ], [ 1, -5 ], [ 0, -6 ] ], [ [ 1705, 6664 ], [ -1, -4 ], [ -1, -4 ], [ -1, -8 ], [ -1, -5 ], [ 0, -13 ], [ 1, -5 ], [ 2, -7 ], [ 2, -4 ], [ 8, -24 ], [ 9, -23 ], [ 3, -10 ], [ 2, -7 ], [ 10, -36 ], [ 3, -16 ], [ 2, -13 ], [ 2, -25 ], [ 3, -15 ], [ 0, -18 ], [ -1, -7 ], [ 0, -2 ], [ -2, -4 ], [ -3, -9 ], [ -2, -5 ], [ -1, -3 ], [ 0, -12 ], [ 1, -7 ], [ 3, -10 ], [ 1, -6 ], [ 1, -7 ], [ 0, -6 ], [ 0, -4 ], [ -1, -4 ], [ -1, -1 ], [ -2, -1 ], [ -6, 0 ], [ -9, 3 ], [ -3, 2 ], [ -11, 1 ], [ -6, 0 ], [ -6, -5 ], [ -5, -2 ], [ -3, -2 ], [ -2, -5 ], [ -1, -2 ], [ -2, -7 ], [ -3, -7 ], [ -1, -5 ], [ 1, -2 ], [ 0, -2 ], [ 1, -4 ], [ 5, -10 ], [ 3, -3 ], [ 2, 0 ], [ 7, -4 ], [ 20, -6 ], [ 7, -3 ], [ 5, -4 ], [ 5, -3 ], [ 4, -4 ], [ 4, -7 ], [ 3, -6 ], [ 14, -27 ], [ 6, -16 ], [ 2, -9 ], [ 4, -10 ], [ 3, -16 ], [ 1, -1 ], [ 0, -1 ] ], [ [ 1780, 6172 ], [ -8, -2 ], [ -3, -1 ], [ -3, -3 ], [ -2, -6 ], [ -1, -2 ], [ -1, -5 ], [ -4, -13 ], [ -2, -11 ], [ -3, -11 ], [ -1, -8 ], [ 0, -13 ], [ 1, -6 ], [ 1, -3 ], [ 8, -15 ], [ 2, -4 ], [ 2, -9 ], [ 0, -15 ], [ 0, -4 ], [ 0, -3 ], [ -2, -5 ], [ -1, -3 ], [ -1, -3 ], [ -2, -6 ], [ -3, -4 ], [ -10, -10 ], [ -6, -10 ], [ -4, -5 ], [ -6, -3 ], [ -15, -10 ], [ -8, -8 ], [ -4, 0 ], [ -8, -3 ], [ -6, -4 ], [ -1, -2 ], [ -2, 0 ], [ -2, -2 ], [ -3, -9 ], [ 0, -3 ], [ -1, -6 ], [ 0, -4 ], [ 2, -16 ], [ 1, -21 ], [ 0, -31 ], [ -1, -9 ], [ -5, -28 ], [ -3, -25 ], [ -2, -12 ], [ 0, -5 ], [ -2, -6 ], [ -3, -5 ], [ -2, -1 ], [ -2, -3 ], [ -4, -1 ], [ -6, 0 ], [ -2, 1 ], [ -5, 3 ], [ -5, 2 ], [ -5, 3 ], [ -4, 6 ], [ -5, 5 ], [ -9, 10 ], [ -10, 16 ], [ -2, 2 ], [ -6, 5 ], [ -3, 3 ], [ -8, 12 ], [ -8, 9 ], [ -6, 9 ], [ -5, 4 ], [ -7, 5 ], [ -11, 5 ], [ -6, 1 ], [ -4, 0 ], [ -16, 2 ], [ -12, 0 ], [ -8, 1 ], [ -16, 4 ], [ -5, 2 ], [ -9, 6 ], [ -7, 1 ], [ -4, 0 ], [ -3, -1 ], [ -3, -1 ], [ -1, -2 ], [ -2, -2 ], [ 0, -2 ] ], [ [ 1457, 5884 ], [ -6, 27 ], [ -3, 15 ], [ -2, 9 ], [ -3, 10 ], [ -2, 9 ], [ -8, 20 ], [ -3, 10 ], [ -2, 8 ], [ -2, 13 ], [ -3, 16 ], [ -6, 23 ], [ -3, 14 ], [ -1, 3 ], [ -1, 3 ], [ 0, 7 ], [ 1, 2 ], [ 1, 7 ], [ 4, 11 ], [ 0, 5 ], [ 2, 3 ], [ 0, 11 ], [ -2, 3 ], [ -2, 6 ], [ -2, 5 ], [ -3, 7 ], [ -6, 15 ], [ -2, 2 ], [ -4, 2 ], [ -2, 0 ], [ -4, 1 ], [ -7, 1 ], [ -4, -1 ], [ -9, -1 ], [ -21, 0 ], [ -18, 0 ], [ -4, 0 ], [ -9, -4 ], [ -4, -6 ], [ -3, -6 ], [ -1, -4 ], [ -2, -4 ], [ -1, -6 ], [ -9, -34 ], [ -2, -11 ], [ -2, -9 ], [ -3, -9 ], [ -4, -8 ], [ -7, -14 ], [ -10, -21 ], [ -7, -12 ], [ -1, -4 ], [ -4, -14 ], [ -1, -5 ], [ -2, -5 ], [ -1, -3 ], [ -3, -6 ], [ -2, -3 ], [ -5, -1 ], [ -3, -2 ], [ -3, -1 ], [ -5, 0 ], [ -10, 3 ], [ -3, 2 ], [ -2, 2 ], [ -5, 5 ], [ -28, 35 ], [ -8, 13 ], [ -5, 4 ], [ -4, 3 ], [ -5, 6 ], [ -4, 2 ], [ -6, 2 ], [ -6, 2 ], [ -4, 0 ], [ -10, -3 ], [ -10, -2 ], [ -12, -3 ], [ -6, -4 ], [ -10, -4 ], [ -6, -2 ], [ -1, 0 ], [ -4, 2 ], [ -6, 4 ], [ -2, 4 ], [ -6, 13 ], [ -12, 28 ], [ -2, 4 ], [ -1, 5 ], [ -1, 4 ], [ 0, 11 ], [ 2, 10 ], [ 3, 6 ], [ 3, 6 ], [ 3, 5 ], [ 18, 28 ], [ 4, 7 ], [ 4, 8 ], [ 6, 14 ], [ 9, 19 ], [ 2, 4 ], [ 5, 9 ], [ 2, 5 ], [ 3, 5 ], [ 1, 5 ], [ 0, 4 ], [ -1, 4 ], [ -3, 5 ], [ -4, 1 ], [ -6, 1 ], [ -3, 1 ], [ -2, 2 ], [ -4, 3 ], [ -3, 3 ], [ -3, 2 ], [ -1, 5 ], [ -1, 3 ], [ 0, 10 ], [ 1, 4 ], [ 4, 8 ], [ 3, 5 ], [ 10, 7 ], [ 4, 5 ], [ 4, 1 ], [ 8, 2 ], [ 3, 4 ], [ 0, 4 ], [ -2, 4 ], [ -2, 6 ], [ -11, 19 ], [ -2, 8 ], [ -4, 10 ], [ -3, 12 ], [ -1, 4 ], [ 0, 57 ], [ -1, 5 ], [ -2, 4 ], [ -1, 7 ], [ -2, 7 ], [ -2, 3 ], [ -3, 5 ], [ -3, 1 ], [ -2, 2 ], [ -7, 0 ], [ -3, 1 ], [ -1, 1 ], [ -1, 2 ], [ -1, 0 ], [ 0, 4 ], [ 1, 6 ], [ 1, 3 ], [ 3, 10 ], [ 2, 7 ], [ 2, 4 ], [ 0, 16 ], [ -2, 4 ], [ -2, 5 ], [ -2, 2 ], [ -2, 5 ], [ -6, 6 ], [ -2, 1 ], [ -2, 3 ], [ -5, 1 ], [ -6, 2 ], [ -7, 1 ], [ -5, 0 ], [ -3, -1 ], [ -8, -2 ], [ -3, -1 ], [ -7, 2 ], [ -3, 2 ], [ -4, 7 ], [ -11, 13 ], [ -5, 10 ], [ -3, 7 ], [ -2, 4 ], [ -1, 7 ], [ -1, 8 ], [ 0, 5 ], [ -1, 26 ], [ -2, 6 ], [ 0, 7 ], [ -1, 9 ], [ -4, 28 ], [ -2, 14 ], [ -1, 10 ], [ 0, 8 ], [ 0, 59 ], [ -2, 7 ], [ -1, 6 ], [ -9, 21 ], [ -7, 27 ], [ -4, 10 ], [ -2, 7 ], [ -5, 5 ], [ -3, 4 ], [ -5, 3 ], [ -14, 7 ], [ -2, 2 ], [ -2, 1 ], [ -3, 6 ], [ -5, 10 ], [ -10, 14 ], [ -4, 8 ], [ -3, 8 ], [ -5, 6 ], [ -3, 9 ], [ -2, 8 ], [ -2, 10 ], [ -1, 7 ], [ -1, 5 ], [ -1, 14 ], [ -1, 4 ], [ -1, 3 ], [ -1, 5 ], [ -1, 2 ], [ -1, 2 ], [ -6, 7 ], [ -9, 10 ], [ -8, 8 ], [ -3, 1 ], [ -9, 0 ], [ -2, 1 ], [ -1, 1 ], [ -3, 7 ], [ -1, 3 ], [ -2, 15 ], [ 0, 22 ], [ 2, 23 ], [ 0, 39 ], [ -1, 13 ], [ -2, 12 ], [ -3, 13 ], [ -3, 21 ], [ -2, 11 ], [ -1, 11 ], [ -1, 7 ], [ 0, 4 ], [ 1, 9 ], [ 1, 10 ], [ 1, 7 ], [ 3, 20 ], [ 3, 23 ], [ 4, 22 ], [ 0, 18 ], [ -1, 5 ], [ 0, 3 ], [ -3, 10 ], [ -3, 10 ], [ -4, 11 ], [ -3, 7 ], [ -5, 7 ], [ -9, 16 ], [ -6, 14 ], [ -5, 5 ], [ -1, 4 ] ], [ [ 797, 7426 ], [ 25, 0 ], [ 7, -2 ], [ 7, -1 ], [ 7, -2 ], [ 6, -2 ], [ 5, -3 ], [ 5, -4 ], [ 9, -8 ], [ 11, -11 ], [ 5, -3 ], [ 2, -1 ], [ 2, -1 ], [ 2, 0 ], [ 3, 1 ], [ 5, 5 ], [ 1, 3 ], [ 8, 22 ], [ 6, 12 ], [ 16, 34 ], [ 9, 17 ], [ 6, 11 ], [ 4, 9 ], [ 7, 7 ], [ 6, 9 ], [ 8, 8 ], [ 8, 5 ], [ 11, 10 ], [ 7, 4 ], [ 9, 5 ], [ 9, 4 ], [ 4, 1 ], [ 6, 0 ], [ 2, -1 ], [ 4, -2 ], [ 6, -5 ], [ 8, -11 ], [ 3, -4 ], [ 2, -1 ], [ 1, 0 ], [ 1, 1 ], [ 2, 5 ], [ 1, 3 ], [ 4, 22 ], [ 6, 29 ], [ 5, 19 ], [ 1, 2 ], [ 4, -3 ], [ 21, -21 ], [ 5, -7 ], [ 13, -15 ], [ 5, -6 ], [ 26, -29 ], [ 11, -12 ], [ 9, -10 ], [ 12, -16 ], [ 10, -12 ], [ 3, -4 ], [ 4, -5 ], [ 11, -6 ], [ 8, -9 ], [ 8, -9 ], [ 7, -11 ], [ 5, -7 ], [ 7, -10 ], [ 7, -14 ], [ 3, -5 ], [ 3, -3 ], [ 3, -2 ], [ 1, -2 ], [ 1, 0 ], [ 1, 2 ] ], [ [ 1457, 5884 ], [ 0, -2 ], [ -2, -2 ], [ 0, -4 ], [ -2, -4 ], [ -2, -7 ], [ -5, -13 ], [ -15, -28 ], [ -3, -5 ], [ -4, -5 ], [ -8, -8 ], [ -5, -4 ], [ -8, -11 ], [ -9, -9 ], [ -9, -13 ], [ -13, -16 ], [ -12, -14 ], [ -4, -5 ], [ -6, -3 ], [ -3, -4 ], [ -5, -3 ], [ -2, -1 ], [ -4, -6 ], [ -6, -12 ], [ -2, -2 ], [ -4, -2 ], [ -14, -12 ], [ -13, -8 ], [ -4, -4 ], [ -3, -2 ], [ -4, -2 ], [ -2, -3 ], [ -2, -5 ], [ -2, -2 ], [ 0, -5 ], [ -2, -10 ], [ 0, -11 ], [ 2, -17 ], [ 0, -19 ], [ -1, -7 ], [ -2, -18 ], [ -1, -15 ], [ -1, -12 ], [ 0, -5 ], [ -1, -3 ], [ 0, -4 ], [ -1, -2 ], [ -1, -1 ] ], [ [ 1272, 5534 ], [ -18, -29 ], [ -7, -8 ], [ -6, -9 ], [ -4, -3 ], [ -7, -6 ], [ -7, -4 ], [ -6, 0 ], [ -11, 6 ], [ -13, 7 ], [ -4, 4 ], [ -5, 3 ], [ -6, 0 ], [ -6, 0 ], [ -4, 0 ], [ -5, -2 ], [ -12, -6 ], [ -7, -2 ], [ -8, 0 ], [ -7, 0 ], [ -6, 0 ], [ -5, 0 ], [ -3, 2 ], [ -3, 1 ], [ -14, 9 ], [ -6, 5 ], [ -3, 2 ], [ -17, 5 ], [ -4, 3 ], [ -7, 3 ], [ -7, 6 ], [ -3, 2 ], [ -3, 2 ], [ -5, 0 ], [ -5, 0 ], [ -5, 1 ], [ -2, 0 ], [ -3, -1 ], [ -3, 0 ], [ -3, -1 ], [ -20, -17 ], [ -3, -2 ], [ -5, -2 ], [ -10, -1 ], [ -4, 0 ], [ -23, -8 ], [ -3, -2 ], [ -13, -8 ], [ -7, -5 ], [ -4, -1 ], [ -4, -1 ], [ -6, 0 ], [ -6, 1 ], [ -6, 3 ], [ -4, 4 ], [ -5, 2 ], [ -6, 6 ], [ -4, 4 ], [ -4, 8 ], [ -6, 9 ], [ -12, 21 ], [ -13, 24 ], [ -2, 7 ], [ -2, 6 ], [ -1, 10 ], [ 0, 4 ], [ 0, 5 ], [ 1, 3 ], [ 4, 4 ], [ 1, 4 ], [ 1, 2 ], [ 0, 2 ], [ 1, 7 ], [ -1, 7 ], [ 0, 10 ], [ -4, 28 ], [ -3, 26 ], [ 0, 10 ], [ 0, 20 ], [ 1, 38 ], [ 0, 25 ], [ -1, 10 ], [ 0, 7 ], [ -1, 7 ], [ -1, 3 ], [ -1, 4 ], [ -3, 5 ], [ -1, 1 ], [ -5, 8 ], [ -9, 11 ], [ -5, 8 ], [ -7, 9 ], [ -8, 13 ], [ -4, 8 ], [ -5, 8 ], [ -2, 7 ], [ -1, 4 ], [ 0, 2 ], [ 1, 1 ], [ 0, 2 ], [ 3, 7 ], [ 4, 3 ], [ 5, 6 ], [ 4, 3 ], [ 14, 9 ], [ 3, 3 ], [ 4, 6 ], [ 4, 6 ], [ 1, 2 ], [ 3, 4 ], [ 7, 24 ], [ 1, 7 ], [ 1, 6 ], [ 1, 6 ], [ -1, 4 ], [ -1, 4 ], [ -1, 6 ], [ -1, 2 ], [ -11, 14 ], [ -5, 6 ], [ -2, 6 ], [ -2, 5 ], [ -8, 17 ], [ -5, 10 ], [ -1, 0 ], [ -1, 1 ], [ -1, -1 ], [ -1, 0 ], [ -1, -1 ], [ -2, -3 ], [ -2, -6 ], [ -5, -14 ], [ -3, -9 ], [ -4, -9 ], [ -2, -7 ], [ -5, -7 ], [ -7, -7 ], [ -5, -6 ], [ -4, -2 ], [ -4, -2 ], [ -4, 0 ], [ -2, -1 ], [ -3, 1 ], [ -3, 1 ], [ -3, 2 ], [ -12, 9 ], [ -10, 7 ], [ -7, 4 ], [ -4, 4 ], [ -2, 6 ], [ -4, 10 ], [ -1, 3 ], [ -2, 7 ], [ 0, 7 ], [ -3, 19 ], [ -2, 10 ], [ -2, 7 ], [ -1, 4 ], [ -2, 3 ], [ -1, 3 ], [ -3, 3 ], [ -8, 5 ], [ -3, 4 ], [ -4, 3 ], [ -13, 7 ], [ -4, 2 ], [ -6, 5 ], [ -2, 4 ], [ -4, 3 ], [ -4, 4 ], [ -3, 6 ], [ -1, 4 ], [ -3, 6 ], [ -1, 4 ], [ -2, 6 ], [ -7, 21 ], [ -3, 9 ], [ -3, 9 ], [ -1, 6 ], [ -3, 5 ], [ -7, 10 ], [ -5, 6 ], [ -14, 10 ], [ -14, 11 ], [ -2, 2 ], [ -2, 1 ], [ -2, 3 ], [ -3, 9 ], [ 0, 13 ], [ -1, 10 ], [ 1, 19 ], [ 1, 24 ], [ 1, 17 ], [ 2, 13 ], [ 1, 7 ], [ 2, 5 ], [ 2, 7 ], [ 1, 5 ], [ 4, 12 ], [ 8, 20 ], [ 2, 5 ], [ 3, 5 ], [ 1, 4 ], [ 0, 4 ], [ 1, 5 ], [ 0, 22 ], [ -1, 8 ], [ -2, 8 ], [ -2, 4 ], [ -2, 6 ], [ -6, 12 ], [ -1, 4 ], [ -1, 5 ], [ 0, 15 ], [ 2, 6 ], [ 2, 16 ], [ 2, 7 ], [ 1, 10 ], [ 0, 17 ], [ -2, 20 ], [ 0, 17 ], [ -1, 20 ], [ 0, 14 ], [ -1, 8 ], [ -1, 6 ], [ 0, 4 ], [ -2, 9 ], [ -3, 9 ], [ -14, 38 ], [ -16, 42 ], [ -3, 11 ], [ -8, 25 ], [ -4, 6 ], [ -4, 9 ], [ -3, 6 ], [ -4, 4 ], [ -22, 23 ], [ -9, 8 ], [ -12, 10 ], [ -3, 1 ], [ -2, 1 ], [ -2, -1 ], [ -4, -1 ], [ -3, 0 ], [ -3, 1 ], [ -4, 3 ], [ -3, 4 ], [ -4, 6 ], [ -22, 31 ], [ -15, 22 ] ], [ [ 419, 6933 ], [ 1, -1 ], [ 2, 2 ], [ 2, 2 ], [ 2, 5 ], [ 2, 3 ], [ 2, 4 ], [ 2, 6 ], [ 3, 9 ], [ 4, 22 ], [ 4, 28 ], [ 3, 18 ], [ 3, 8 ], [ 2, 5 ], [ 2, 6 ], [ 2, 3 ], [ 2, 6 ], [ 8, 7 ], [ 10, 8 ], [ 4, 5 ], [ 9, 10 ], [ 3, 4 ], [ 3, 7 ], [ 12, 23 ], [ 6, 15 ], [ 2, 5 ], [ 4, 6 ], [ 5, 5 ], [ 4, 5 ], [ 7, 10 ], [ 9, 5 ], [ 5, 4 ], [ 10, 4 ], [ 5, 2 ], [ 2, 1 ], [ 1, 4 ], [ 2, 2 ], [ 2, 2 ], [ 0, 5 ], [ 1, 3 ], [ 1, 3 ], [ 1, 6 ], [ 2, 8 ], [ 2, 24 ], [ 3, 15 ], [ 2, 12 ], [ 2, 5 ], [ 2, 8 ], [ 2, 10 ], [ 6, 19 ], [ 5, 9 ], [ 3, 8 ], [ 7, 13 ], [ 3, 6 ], [ 2, 3 ], [ 9, 8 ], [ 6, 4 ], [ 10, 7 ], [ 5, 1 ], [ 5, 3 ], [ 11, 4 ], [ 19, 5 ], [ 10, 6 ], [ 14, 6 ], [ 40, 23 ], [ 8, 4 ], [ 4, 3 ], [ 6, 7 ], [ 3, 5 ], [ 2, 2 ], [ 1, 1 ], [ 0, 1 ], [ 2, -1 ], [ 5, 0 ], [ 4, 2 ], [ 1, 0 ], [ 1, -1 ], [ 2, 0 ], [ 4, -4 ], [ 2, -1 ], [ 2, -3 ], [ 3, -1 ], [ 1, -1 ], [ 1, -1 ], [ 2, -3 ] ], [ [ 1272, 5534 ], [ 1, -1 ], [ 3, -2 ], [ 5, -7 ], [ 5, -7 ], [ 6, -6 ], [ 5, -8 ], [ 5, -12 ], [ 12, -20 ], [ 3, -6 ], [ 4, -8 ], [ 8, -11 ], [ 3, -4 ], [ 3, -6 ], [ 5, -11 ], [ 3, -8 ], [ 3, -5 ], [ 7, -24 ], [ 3, -13 ], [ 8, -31 ], [ 2, -9 ], [ 2, -8 ], [ 2, -6 ], [ 3, -4 ], [ 11, -22 ], [ 1, -4 ], [ 1, -5 ], [ 2, -11 ], [ 2, -12 ], [ 0, -7 ], [ 1, -10 ], [ 0, -13 ], [ -1, -6 ], [ 0, -9 ], [ -2, -11 ], [ -2, -9 ], [ -7, -21 ], [ -1, -8 ], [ -2, -8 ], [ 0, -20 ], [ 1, -4 ], [ 2, -2 ], [ 1, -4 ], [ 3, -2 ], [ 1, -1 ], [ 5, -2 ], [ 13, -8 ], [ 9, -4 ], [ 6, -6 ], [ 9, -8 ], [ 2, -5 ], [ 5, -8 ], [ 8, -16 ], [ 6, -13 ], [ 5, -13 ], [ 6, -16 ], [ 4, -12 ], [ 3, -11 ], [ 1, -7 ], [ 0, -4 ], [ 0, -18 ], [ -1, -7 ], [ -3, -9 ], [ -8, -19 ], [ -7, -20 ], [ -2, -10 ], [ -2, -8 ], [ -2, -8 ], [ -1, -8 ], [ 0, -17 ], [ 3, -11 ], [ 2, -4 ], [ 2, -7 ], [ 7, -11 ], [ 5, -10 ], [ 6, -15 ], [ 4, -9 ], [ 3, -4 ], [ 8, -12 ], [ 6, -15 ], [ 3, -6 ], [ 0, -12 ], [ -1, -2 ], [ -2, -2 ], [ -1, -2 ], [ -4, -4 ], [ -14, -10 ], [ -9, -10 ], [ -12, -14 ], [ -4, -7 ], [ -4, -6 ], [ -4, -7 ], [ -5, -9 ], [ -3, -9 ], [ -2, -8 ], [ -3, -5 ], [ -3, -12 ], [ -1, -4 ], [ 0, -5 ], [ 1, -4 ], [ 3, -10 ], [ 2, -3 ], [ 8, -14 ], [ 5, -12 ], [ 3, -5 ], [ 0, -10 ], [ -1, -7 ], [ -2, -3 ], [ -5, -15 ], [ -2, -4 ], [ -1, -8 ], [ -1, -10 ], [ -1, -20 ], [ 0, -3 ], [ -1, -5 ], [ -2, -6 ], [ -7, -17 ], [ -2, -10 ], [ -1, -8 ], [ 0, -8 ], [ 1, -3 ], [ 0, -4 ], [ 1, -4 ], [ 1, -2 ] ], [ [ 1416, 4444 ], [ -1, 0 ], [ -6, -13 ], [ -1, -5 ], [ -2, -12 ], [ -1, -10 ], [ 0, -4 ], [ -1, -3 ], [ -7, -13 ], [ -3, -7 ], [ -2, -7 ], [ -1, -14 ], [ -2, -5 ], [ -2, -5 ], [ -2, -1 ], [ -5, 0 ], [ -7, 1 ], [ -2, -1 ], [ -2, 0 ], [ -3, -1 ], [ -9, -8 ], [ -3, -3 ], [ -2, -4 ], [ -3, -5 ], [ -2, -3 ], [ 0, -4 ], [ -2, -8 ], [ -2, -1 ] ], [ [ 1343, 4308 ], [ 0, 3 ], [ -1, 3 ], [ -2, 2 ], [ -1, 5 ], [ -4, 5 ], [ -3, 6 ], [ -15, 12 ], [ -6, 3 ], [ -13, 2 ], [ -4, 0 ], [ -5, -1 ], [ -12, -3 ], [ -4, -1 ], [ -12, 0 ], [ -23, 2 ], [ -12, 1 ], [ -5, 0 ], [ -13, -2 ], [ -5, -1 ], [ -7, -3 ], [ -11, -10 ], [ 0, -5 ], [ -2, -3 ], [ -3, -8 ], [ -6, -13 ], [ -2, -8 ], [ -2, -8 ], [ -1, -4 ], [ -1, -7 ], [ -2, -21 ], [ 0, -5 ], [ -1, -4 ], [ -2, -3 ], [ -1, -4 ], [ -1, -2 ], [ -1, -1 ], [ -4, 0 ], [ -4, 4 ], [ -3, 6 ], [ -6, 11 ], [ -2, 2 ], [ -4, 3 ], [ -4, 2 ], [ -18, 0 ], [ -11, 5 ], [ -10, 5 ], [ -2, 2 ], [ -6, 0 ], [ -5, -2 ], [ -12, -7 ], [ -13, -8 ], [ -2, -2 ], [ -5, -1 ], [ -5, 0 ], [ -6, -1 ], [ -16, 1 ], [ -7, -2 ], [ -11, -7 ], [ -5, -1 ], [ -4, -1 ], [ -8, 0 ], [ -3, 1 ], [ -2, 0 ], [ -2, 1 ], [ -5, 5 ], [ -2, 2 ], [ -3, 2 ], [ -4, 6 ], [ -3, 6 ], [ -1, 6 ], [ -1, 3 ], [ -2, 10 ], [ -1, 5 ], [ 1, 2 ], [ -2, 0 ], [ -1, -2 ], [ -2, -4 ], [ -3, -4 ], [ -2, -8 ], [ -4, -14 ], [ -1, -7 ], [ -2, -6 ], [ -1, -4 ], [ -2, -3 ], [ -2, -6 ], [ -2, -2 ], [ -9, -8 ], [ -5, -4 ], [ -3, -2 ], [ -9, -2 ], [ -9, -3 ], [ -9, -7 ], [ -6, -2 ], [ -2, -1 ], [ -11, -9 ], [ -4, -5 ], [ -4, -4 ], [ -4, -8 ], [ -8, -12 ], [ -3, -4 ], [ -14, -16 ], [ -6, -8 ], [ -5, -2 ], [ -9, -2 ], [ -4, 0 ], [ -5, 1 ], [ -3, 1 ], [ -3, 2 ], [ -3, 5 ], [ -14, 20 ], [ -2, 2 ], [ -3, 1 ], [ -2, 1 ], [ -1, 0 ], [ -3, -1 ], [ -8, -1 ], [ -8, 0 ], [ -3, 1 ], [ -5, 3 ], [ -21, 14 ], [ -29, 18 ], [ -9, 5 ], [ -5, 4 ] ], [ [ 684, 4210 ], [ 0, 5 ], [ -5, 11 ], [ -4, 7 ], [ -8, 6 ], [ -15, 12 ], [ -4, 3 ], [ -5, 8 ], [ -4, 7 ], [ -6, 15 ], [ -2, 8 ], [ -1, 5 ], [ -1, 8 ], [ 0, 6 ], [ -1, 13 ], [ 0, 7 ], [ -1, 5 ], [ -2, 15 ], [ 0, 20 ], [ 2, 19 ], [ 2, 24 ], [ 2, 20 ], [ 1, 7 ], [ 0, 7 ], [ -1, 6 ], [ 0, 7 ], [ -1, 6 ], [ -1, 7 ], [ -4, 13 ], [ 0, 6 ], [ -2, 4 ], [ -2, 6 ], [ -2, 2 ], [ -4, 4 ], [ -2, 3 ], [ -3, 2 ], [ -4, 2 ], [ -13, 7 ], [ -5, 3 ], [ -6, 5 ], [ -7, 4 ], [ -16, 17 ], [ -24, 21 ], [ -15, 16 ], [ -4, 4 ], [ -5, 10 ], [ -4, 6 ], [ -4, 5 ], [ -3, 8 ], [ -3, 8 ], [ -7, 19 ], [ -12, 33 ], [ -3, 8 ], [ -8, 19 ], [ -5, 11 ], [ -4, 13 ], [ -1, 7 ], [ -1, 7 ], [ -1, 6 ], [ 0, 8 ], [ -1, 8 ], [ 0, 22 ], [ 1, 8 ], [ 1, 5 ], [ 1, 7 ], [ 2, 7 ], [ 3, 6 ], [ 7, 10 ], [ 5, 7 ], [ 8, 12 ], [ 11, 11 ], [ 24, 29 ], [ 7, 7 ], [ 5, 7 ], [ 4, 6 ], [ 4, 7 ], [ 3, 6 ], [ 3, 5 ], [ 2, 9 ], [ 0, 3 ], [ 1, 6 ], [ 1, 30 ], [ 1, 27 ], [ 1, 9 ], [ 0, 5 ], [ 1, 9 ], [ 6, 54 ], [ 2, 9 ], [ 1, 7 ], [ 3, 7 ], [ 1, 4 ], [ 3, 7 ], [ 2, 4 ], [ 3, 7 ], [ 8, 10 ], [ 2, 2 ], [ 3, 6 ], [ 2, 4 ], [ 2, 10 ], [ 6, 24 ], [ 4, 11 ], [ 3, 5 ], [ 7, 20 ], [ 6, 18 ], [ 5, 16 ], [ 6, 26 ], [ 5, 15 ], [ 3, 11 ], [ 5, 8 ], [ 12, 33 ], [ 4, 9 ], [ 2, 8 ], [ 3, 12 ], [ 1, 8 ], [ 2, 10 ], [ 0, 18 ], [ -1, 8 ], [ -1, 8 ], [ -1, 8 ], [ -1, 3 ], [ -2, 6 ], [ -2, 6 ], [ -3, 3 ], [ -4, 6 ], [ -4, 6 ], [ -13, 12 ], [ -6, 6 ], [ -14, 8 ], [ -8, 6 ], [ -8, 6 ], [ -6, 5 ], [ -11, 13 ], [ -6, 5 ], [ -3, 7 ], [ -2, 4 ], [ -1, 4 ], [ -2, 4 ], [ -1, 3 ], [ -1, 7 ], [ 0, 18 ], [ 2, 9 ], [ 2, 10 ], [ 2, 8 ], [ 5, 16 ], [ 1, 7 ], [ 2, 6 ], [ 1, 7 ], [ 3, 15 ], [ 0, 12 ], [ -2, 4 ], [ -1, 6 ], [ -1, 6 ], [ -2, 4 ], [ -1, 6 ], [ -2, 4 ], [ -3, 4 ], [ -12, 17 ], [ -6, 8 ], [ -5, 7 ], [ -4, 2 ], [ -3, 2 ], [ -2, 1 ], [ -3, 1 ], [ -11, 0 ], [ -10, -2 ], [ -8, 0 ], [ -4, 2 ], [ -4, 5 ], [ -1, 4 ], [ -1, 4 ], [ -3, 10 ], [ -2, 4 ], [ -1, 3 ], [ -4, 6 ], [ -3, 3 ], [ -25, 27 ], [ -6, 8 ], [ -8, 10 ], [ -2, 3 ], [ -4, 3 ], [ -11, 7 ], [ -4, 4 ], [ -4, 5 ], [ -15, 14 ], [ -4, 6 ], [ -11, 12 ], [ -4, 8 ], [ -14, 21 ], [ -4, 5 ], [ -2, 4 ], [ -3, 2 ], [ -4, 4 ], [ -4, 2 ], [ -6, 2 ], [ -2, 2 ], [ -2, 1 ], [ -7, 9 ], [ -5, 9 ], [ -3, 10 ], [ -7, 16 ], [ -3, 4 ], [ -8, 12 ], [ -5, 6 ], [ -7, 6 ], [ -7, 3 ], [ -15, 5 ], [ -9, 6 ], [ -11, 9 ], [ -2, 1 ], [ -1, 3 ], [ -2, 4 ], [ -1, 3 ], [ -1, 6 ], [ 0, 7 ], [ 1, 17 ], [ 0, 16 ], [ -1, 5 ], [ -3, 8 ], [ -5, 11 ], [ -5, 12 ], [ -6, 17 ], [ -6, 9 ], [ -5, 9 ], [ -3, 5 ], [ -4, 5 ], [ -11, 4 ], [ -16, 17 ], [ -14, 14 ], [ -4, 5 ], [ -2, 4 ], [ -5, 13 ], [ -3, 7 ], [ -2, 10 ], [ -3, 15 ], [ -3, 13 ], [ -1, 12 ], [ -1, 14 ], [ 0, 43 ], [ 1, 7 ], [ 1, 8 ], [ 8, 40 ], [ 4, 27 ], [ 2, 13 ], [ 0, 23 ], [ -1, 10 ], [ -2, 16 ], [ -1, 14 ], [ -3, 16 ], [ -2, 11 ], [ -4, 9 ], [ -7, 24 ], [ -4, 20 ], [ -2, 4 ], [ -8, 13 ], [ -6, 12 ], [ -8, 17 ], [ -5, 5 ], [ -8, 12 ], [ -2, 6 ], [ -2, 2 ], [ -1, 5 ], [ -5, 12 ], [ -3, 10 ], [ -3, 11 ], [ -2, 6 ], [ -2, 4 ], [ -9, 12 ], [ -3, 5 ], [ -3, 2 ], [ -3, 1 ], [ -8, 2 ], [ -4, 3 ], [ -4, 2 ], [ -5, 2 ], [ -9, 7 ], [ -6, 6 ], [ -9, 10 ], [ -4, 7 ], [ -4, 9 ], [ -3, 7 ], [ -2, 5 ], [ -2, 6 ], [ -1, 4 ], [ -1, 5 ], [ 0, 7 ], [ 1, 6 ], [ 1, 6 ], [ 2, 8 ], [ 1, 6 ], [ 2, 4 ], [ 2, 4 ], [ 1, 3 ], [ 5, 9 ], [ 6, 7 ], [ 7, 10 ], [ 5, 5 ], [ 5, 7 ], [ 8, 15 ], [ 0, 4 ], [ 2, 13 ], [ 0, 9 ], [ -1, 9 ], [ -1, 9 ], [ -5, 22 ], [ -2, 11 ], [ -4, 17 ], [ -2, 21 ], [ -1, 9 ], [ -3, 9 ], [ -2, 10 ], [ -4, 9 ], [ -9, 16 ], [ -3, 7 ], [ -1, 5 ], [ -1, 3 ], [ 1, 1 ], [ 0, 1 ], [ 1, 1 ], [ 1, -1 ], [ 2, -3 ], [ 2, -2 ], [ 4, -3 ], [ 2, -1 ], [ 3, -1 ], [ 3, 0 ], [ 2, 0 ], [ 6, 0 ], [ 8, 1 ], [ 6, 2 ], [ 18, 6 ], [ 8, 1 ], [ 6, 1 ], [ 5, 0 ], [ 13, -1 ], [ 3, -1 ], [ 8, -4 ], [ 4, -3 ], [ 3, -2 ], [ 3, -4 ], [ 1, -5 ], [ 4, -5 ], [ 7, -14 ], [ 4, -9 ], [ 3, -7 ], [ 1, -8 ], [ 1, -7 ], [ 1, -8 ], [ 3, -26 ], [ 1, -12 ], [ 1, -9 ], [ 4, -19 ], [ 3, -13 ], [ 1, -9 ], [ 2, -7 ], [ 3, -7 ], [ 6, -10 ], [ 5, -4 ], [ 5, -5 ], [ 4, -1 ], [ 6, -3 ], [ 27, -13 ], [ 7, -4 ], [ 4, -3 ], [ 4, -6 ], [ 2, -4 ], [ 2, -7 ], [ 2, -8 ], [ 1, -5 ], [ 0, -11 ], [ -1, -4 ], [ -2, -2 ], [ -1, -2 ], [ -5, -5 ], [ -2, -2 ], [ -2, -1 ], [ -2, -7 ], [ -1, -5 ], [ 0, -10 ], [ 1, -7 ], [ 4, -7 ], [ 4, -10 ], [ 4, -7 ], [ 4, -7 ], [ 8, -9 ], [ 12, -17 ], [ 5, -5 ], [ 3, -6 ], [ 2, -3 ], [ 1, -3 ], [ 3, -9 ], [ 3, -8 ], [ 2, -7 ], [ 0, -15 ], [ -1, -17 ], [ -1, -21 ], [ -2, -16 ], [ -2, -19 ], [ 0, -7 ], [ 0, -6 ], [ 0, -8 ], [ 1, -4 ], [ 1, -7 ], [ 4, -14 ], [ 7, -16 ], [ 4, -11 ], [ 2, -5 ], [ 1, -3 ], [ 3, -3 ], [ 9, -8 ], [ 4, -2 ], [ 3, -4 ], [ 4, -2 ], [ 5, -1 ], [ 5, -1 ], [ 4, 0 ], [ 7, 1 ], [ 3, 1 ], [ 2, 2 ], [ 1, 4 ], [ 1, 3 ], [ 0, 3 ], [ 1, 22 ], [ 2, 27 ], [ 1, 7 ], [ 0, 16 ], [ -2, 17 ], [ -2, 17 ], [ -1, 9 ], [ 0, 41 ], [ 2, 17 ], [ 1, 6 ], [ 0, 23 ], [ 1, 12 ], [ 1, 14 ], [ 1, 7 ], [ 1, 6 ], [ 2, 5 ], [ 4, 5 ], [ 3, 1 ], [ 8, 2 ], [ 3, 2 ], [ 2, 1 ], [ 1, 3 ], [ 2, 3 ], [ 2, 3 ], [ 2, 7 ], [ 0, 2 ], [ 1, 5 ], [ 0, 30 ], [ 1, 9 ], [ 0, 8 ], [ 1, 7 ], [ 1, 9 ], [ 2, 8 ], [ 1, 9 ], [ 5, 16 ], [ 6, 18 ], [ 4, 15 ], [ 3, 11 ], [ 11, 22 ], [ 2, 3 ], [ 3, 5 ], [ 2, 2 ] ], [ [ 2201, 8630 ], [ 0, -2 ], [ 2, -5 ], [ 4, -12 ], [ 3, -3 ], [ 2, -6 ], [ 15, -20 ], [ 4, -7 ], [ 3, -4 ], [ 4, -9 ], [ 7, -18 ], [ 2, -3 ], [ 3, -7 ], [ 3, -5 ], [ 3, -8 ], [ 3, -4 ], [ 1, -5 ], [ 0, -31 ], [ 1, -11 ], [ 0, -7 ], [ -1, -3 ], [ 0, -5 ], [ -4, -21 ], [ -2, -12 ], [ 0, -12 ], [ 1, -6 ], [ 1, -5 ], [ 3, -7 ], [ 3, -8 ], [ 20, -36 ], [ 4, -7 ], [ 2, -8 ], [ 4, -10 ], [ 5, -11 ], [ 10, -29 ], [ 6, -20 ], [ 3, -7 ], [ 1, -4 ], [ 0, -6 ], [ -1, -15 ], [ 0, -6 ], [ 1, -4 ], [ 0, -5 ], [ 1, -3 ], [ 3, -9 ], [ 2, -6 ], [ 3, -5 ], [ 12, -18 ], [ 4, -8 ], [ 1, -3 ], [ 2, -7 ], [ 6, -22 ], [ 3, -4 ], [ 3, -7 ], [ 5, -10 ], [ 2, -6 ], [ 3, -4 ], [ 2, -8 ], [ 2, -4 ], [ 1, -7 ], [ 0, -3 ], [ -1, -8 ], [ -2, -4 ], [ -1, -6 ], [ -4, -20 ], [ -5, -26 ], [ -1, -6 ], [ -1, -5 ], [ 0, -5 ], [ 1, -5 ], [ 1, -2 ], [ 2, -3 ], [ 1, -3 ], [ 2, -2 ], [ 28, -23 ], [ 7, -5 ], [ 3, -2 ], [ 13, -4 ], [ 7, -4 ], [ 3, -1 ], [ 4, -2 ], [ 3, -2 ], [ 3, -7 ], [ 5, -10 ], [ 3, -8 ], [ 3, -3 ], [ 7, -29 ], [ 1, -5 ], [ 1, -10 ], [ 0, -39 ], [ 0, -10 ], [ 0, -14 ], [ 0, -5 ], [ 2, -7 ], [ 3, -9 ], [ 19, -38 ], [ 1, -3 ], [ 1, -7 ], [ 1, -6 ], [ 2, -7 ], [ 0, -20 ], [ 1, -11 ], [ 1, -8 ], [ 2, -11 ], [ 2, -10 ], [ 3, -9 ], [ 0, -2 ], [ 2, 0 ] ], [ [ 2495, 7656 ], [ -2, -2 ], [ -2, -5 ], [ -2, -7 ], [ -2, -7 ], [ -1, -9 ], [ -1, -8 ], [ 0, -24 ], [ 1, -6 ], [ 1, -9 ], [ 1, -5 ], [ 1, -5 ], [ 2, -8 ], [ 5, -20 ], [ 2, -4 ], [ 1, -6 ], [ 0, -16 ], [ -1, -6 ], [ -1, -3 ], [ -2, -5 ], [ 0, -2 ], [ -2, -2 ], [ -3, -7 ], [ -5, -3 ], [ -9, -7 ], [ -22, -13 ], [ -11, -7 ], [ -15, -5 ], [ -10, -5 ], [ -6, 0 ], [ -9, -1 ], [ -7, -2 ], [ -6, 0 ], [ -12, 2 ], [ -4, 1 ], [ -18, 10 ], [ -13, 7 ], [ -17, 9 ], [ -8, 3 ], [ -16, 4 ], [ -9, 2 ], [ -6, -2 ], [ -4, 0 ], [ -4, -1 ], [ -7, -3 ], [ -3, -4 ], [ -12, -10 ], [ -4, -6 ], [ -14, -10 ], [ -8, -8 ], [ -1, -1 ], [ -3, -2 ], [ -2, -1 ], [ -7, 0 ], [ -6, 2 ], [ -2, 1 ], [ -4, 3 ], [ -16, 16 ], [ -9, 8 ], [ -10, 12 ], [ -10, 10 ] ], [ [ 2161, 7489 ], [ 1, 3 ], [ 2, 15 ], [ 2, 4 ], [ 0, 31 ], [ -4, 21 ], [ -2, 11 ], [ -4, 18 ], [ -2, 8 ], [ -2, 11 ], [ -2, 13 ], [ 0, 16 ], [ 1, 8 ], [ 1, 20 ], [ 1, 10 ], [ 0, 11 ], [ -2, 10 ], [ -3, 12 ], [ -5, 8 ], [ -3, 5 ], [ -8, 13 ], [ -6, 8 ], [ -2, 4 ], [ -3, 8 ], [ -3, 8 ], [ -2, 6 ], [ -2, 6 ], [ -4, 12 ], [ -4, 10 ], [ -4, 16 ], [ 0, 3 ], [ -2, 5 ], [ -4, 5 ], [ -1, 5 ], [ -2, 3 ], [ -2, 6 ], [ -4, 13 ], [ -7, 40 ], [ -3, 10 ], [ -2, 7 ], [ -2, 5 ], [ -4, 7 ], [ -2, 5 ], [ -8, 16 ], [ -11, 10 ], [ -3, 7 ], [ -4, 4 ], [ -9, 16 ], [ -8, 16 ], [ -3, 6 ], [ -3, 3 ], [ -3, 2 ], [ -6, 5 ], [ -3, 1 ], [ -4, 0 ], [ -10, -1 ], [ -4, 1 ], [ -3, 1 ], [ -1, 1 ], [ -3, 7 ], [ -1, 3 ], [ 0, 6 ], [ -2, 5 ], [ 0, 7 ], [ 2, 5 ], [ 2, 14 ], [ 1, 6 ], [ 0, 9 ], [ -1, 5 ], [ 0, 3 ], [ -1, 6 ], [ -4, 9 ], [ -1, 1 ], [ 0, 1 ], [ -2, 1 ], [ -1, 0 ], [ -2, -1 ], [ -2, 0 ], [ -5, -4 ], [ -11, -8 ], [ -2, -2 ], [ -3, -2 ], [ -5, 0 ], [ -3, 2 ], [ -5, 1 ], [ -4, 3 ], [ -5, 3 ], [ -8, 7 ], [ -2, 3 ], [ -4, 5 ], [ -4, 5 ], [ -5, 7 ], [ -4, 6 ], [ -2, 5 ], [ -3, 8 ], [ -10, 23 ], [ -4, 17 ], [ -5, 27 ], [ -1, 11 ], [ -2, 20 ], [ 0, 8 ], [ 1, 1 ] ], [ [ 1873, 8250 ], [ 0, -1 ], [ 1, 2 ], [ 1, 4 ], [ 3, 10 ], [ 1, 11 ], [ 2, 17 ], [ 4, 42 ], [ 2, 9 ], [ 1, 8 ], [ 1, 4 ], [ 2, 5 ], [ 1, 1 ], [ 3, 0 ], [ 2, -1 ], [ 2, -1 ], [ 3, -4 ], [ 4, -2 ], [ 4, -4 ], [ 4, -8 ], [ 10, -19 ], [ 3, -9 ], [ 4, -10 ], [ 10, -30 ], [ 5, -10 ], [ 3, -7 ], [ 3, -6 ], [ 3, -7 ], [ 10, -11 ], [ 12, -13 ], [ 13, -8 ], [ 5, -5 ], [ 6, -2 ], [ 4, -1 ], [ 2, -1 ], [ 6, 0 ], [ 2, 1 ], [ 4, 0 ], [ 3, 2 ], [ 4, 6 ], [ 3, 3 ], [ 5, 8 ], [ 7, 10 ], [ 20, 37 ], [ 9, 20 ], [ 5, 6 ], [ 5, 9 ], [ 14, 21 ], [ 4, 8 ], [ 2, 8 ], [ 2, 8 ], [ 1, 10 ], [ 0, 29 ], [ 1, 6 ], [ 1, 8 ], [ 2, 9 ], [ 5, 11 ], [ 4, 12 ], [ 7, 18 ], [ 2, 8 ], [ 2, 6 ], [ 2, 6 ], [ 1, 8 ], [ 2, 14 ], [ 0, 25 ], [ -2, 13 ], [ -5, 22 ], [ 0, 7 ], [ -1, 6 ], [ 0, 10 ], [ 2, 10 ], [ 1, 5 ], [ 4, 7 ], [ 3, 7 ], [ 9, 14 ], [ 7, 8 ], [ 6, 5 ], [ 3, 3 ], [ 3, -3 ], [ 7, -4 ], [ 3, -1 ], [ 2, -1 ], [ 2, 1 ], [ 4, 1 ], [ 5, 0 ], [ 3, -1 ], [ 3, -1 ], [ 6, 1 ], [ 4, 1 ] ], [ [ 2161, 7489 ], [ 0, -1 ], [ -1, -6 ], [ -13, -43 ], [ -5, -12 ], [ -4, -20 ], [ 0, -9 ], [ -1, -8 ], [ 0, -11 ], [ 1, -8 ], [ 0, -5 ], [ 2, -8 ], [ 4, -16 ], [ 4, -12 ], [ 1, -8 ], [ 1, -4 ], [ 1, -7 ], [ 0, -10 ], [ -3, -3 ], [ -10, -2 ], [ -9, -4 ], [ -6, -1 ], [ -2, 0 ], [ -3, 1 ], [ -2, 1 ], [ -16, 12 ], [ -3, 4 ], [ -4, 2 ], [ -5, 0 ], [ -2, 0 ], [ -3, 0 ], [ -2, -2 ], [ -4, -4 ], [ -7, -7 ], [ -3, -6 ], [ -1, -2 ], [ -2, -9 ], [ -3, -10 ], [ -1, -4 ], [ -2, -3 ], [ -2, -3 ], [ -2, -1 ], [ -6, -5 ], [ -3, -2 ], [ -3, -2 ], [ -3, -1 ], [ -5, -1 ], [ -11, -2 ], [ -18, -2 ], [ -5, -1 ], [ -6, -2 ], [ -4, -1 ], [ -3, -3 ], [ -3, -4 ], [ -1, -3 ], [ -1, -2 ], [ -1, -4 ], [ 0, -17 ], [ 1, -7 ], [ 2, -8 ], [ 1, -7 ], [ 3, -12 ], [ 2, -5 ], [ 0, -7 ], [ 1, -9 ], [ 0, -7 ], [ -1, -12 ], [ -2, -6 ], [ 0, -6 ], [ 2, -12 ], [ 0, -5 ], [ -2, -3 ], [ 0, -2 ], [ -3, -12 ], [ -2, -6 ], [ -8, -11 ], [ -2, -7 ], [ -2, -6 ], [ -2, -7 ], [ -2, -17 ], [ 0, -33 ], [ -1, -9 ], [ 0, -3 ], [ -2, -6 ], [ -2, -3 ], [ -4, -6 ], [ -5, -5 ], [ -9, -12 ], [ -5, -4 ], [ -3, -7 ], [ -3, -3 ], [ -1, -6 ], [ -2, -6 ], [ -5, -23 ], [ -5, -15 ], [ -6, -21 ], [ 0, -5 ], [ -2, -3 ], [ -1, -4 ], [ -2, -5 ], [ -3, -4 ], [ -5, -6 ], [ -3, -3 ], [ -1, -4 ], [ -3, -2 ], [ -2, -1 ], [ -2, 0 ], [ -5, -1 ], [ -2, 0 ], [ -3, 1 ], [ -2, 1 ], [ -8, 9 ], [ -14, 19 ], [ -4, 3 ], [ -2, 3 ], [ -3, 1 ], [ -3, 0 ], [ -4, 1 ], [ -3, -1 ], [ -4, 0 ], [ -5, -3 ], [ -4, -3 ], [ -3, -1 ], [ -8, -9 ], [ -4, -3 ], [ -4, -6 ], [ -2, -3 ], [ -7, -20 ], [ -3, -5 ], [ -8, -13 ], [ -6, -17 ], [ -5, -12 ], [ -8, -19 ], [ 0, -3 ], [ -2, -5 ], [ -2, -3 ], [ -3, -3 ], [ -12, -10 ], [ -3, -6 ], [ -6, -8 ], [ -5, -6 ], [ -4, -12 ], [ -1, -7 ], [ -2, -12 ], [ -2, -10 ], [ -1, -4 ], [ -4, -3 ], [ -3, -1 ], [ -3, -2 ], [ -4, 0 ], [ -4, 2 ] ], [ [ 1257, 7396 ], [ -2, 2 ], [ 0, 4 ], [ 1, 4 ], [ 1, 2 ], [ 1, 2 ], [ 2, 3 ], [ 27, 28 ], [ 10, 9 ], [ 12, 16 ], [ 3, 4 ], [ 6, 11 ], [ 13, 26 ], [ 14, 28 ], [ 6, 13 ], [ 3, 6 ], [ 1, 5 ], [ 2, 9 ], [ 2, 9 ], [ 2, 18 ], [ 2, 13 ], [ 1, 40 ], [ 1, 28 ], [ 1, 13 ], [ 1, 14 ], [ 2, 24 ], [ 2, 10 ], [ 2, 11 ], [ 1, 11 ], [ 3, 10 ], [ 2, 9 ], [ 3, 8 ], [ 3, 4 ], [ 2, 5 ], [ 3, 2 ], [ 2, 2 ], [ 3, 1 ], [ 4, 1 ], [ 4, -1 ], [ 4, -1 ], [ 11, -4 ], [ 5, -2 ], [ 5, -1 ], [ 4, -3 ], [ 8, 0 ], [ 6, -1 ], [ 6, 1 ], [ 7, 1 ], [ 9, 4 ], [ 5, 2 ], [ 6, 2 ], [ 6, 3 ], [ 4, 4 ], [ 16, 12 ], [ 5, 4 ], [ 7, 4 ], [ 3, 1 ], [ 6, 0 ], [ 4, -2 ], [ 5, -4 ], [ 8, -6 ], [ 4, -2 ], [ 4, -3 ], [ 8, -2 ], [ 21, -7 ], [ 11, -2 ], [ 7, 0 ], [ 4, 1 ], [ 5, 2 ], [ 3, 2 ], [ 3, 3 ], [ 3, 1 ], [ 1, 3 ], [ 2, 5 ], [ 1, 3 ], [ 3, 8 ], [ 12, 32 ], [ 6, 18 ], [ 13, 48 ], [ 5, 23 ], [ 5, 18 ], [ 2, 10 ], [ 1, 8 ], [ 0, 6 ], [ 2, 24 ], [ 0, 9 ], [ 1, 9 ], [ 1, 10 ], [ 5, 22 ], [ 6, 21 ], [ 2, 9 ], [ 2, 7 ], [ 3, 7 ], [ 5, 13 ], [ 4, 6 ], [ 4, 6 ], [ 4, 2 ], [ 3, 3 ], [ 2, 3 ], [ 9, 2 ], [ 4, -1 ], [ 4, -1 ], [ 5, -3 ], [ 6, -3 ], [ 3, -2 ], [ 3, -4 ], [ 2, -3 ], [ 11, -13 ], [ 4, -5 ], [ 4, -4 ], [ 3, -3 ], [ 3, -2 ], [ 10, 0 ], [ 3, 2 ], [ 3, 1 ], [ 3, 1 ], [ 4, 2 ], [ 3, 3 ], [ 4, 5 ], [ 3, 10 ], [ 2, 5 ], [ 1, 8 ], [ 6, 30 ], [ 1, 9 ], [ 1, 6 ], [ 2, 5 ], [ 3, 8 ], [ 1, 4 ], [ 3, 7 ], [ 4, 6 ], [ 7, 10 ], [ 5, 6 ], [ 9, 10 ], [ 14, 16 ], [ 1, 1 ], [ 1, 1 ], [ 3, 0 ], [ 2, -1 ], [ 2, -3 ] ], [ [ 2941, 6585 ], [ 0, -2 ], [ -2, -5 ], [ -19, -28 ], [ -7, -11 ], [ -10, -15 ], [ -12, -15 ], [ -11, -12 ], [ -19, -24 ], [ -11, -10 ], [ -2, -5 ], [ -2, -1 ], [ -3, -1 ], [ -3, -2 ], [ -6, 0 ], [ -3, 2 ], [ -2, 2 ], [ -3, 5 ], [ -3, 4 ], [ -2, 3 ], [ -1, 6 ], [ -2, 3 ], [ 0, 6 ], [ 3, 12 ], [ 0, 10 ], [ -3, 8 ], [ -1, 5 ], [ -1, 4 ], [ -2, 3 ], [ -1, 3 ], [ -3, 7 ], [ -8, 10 ], [ -4, 3 ], [ -2, 1 ], [ -3, 2 ], [ -4, -2 ], [ -4, -2 ], [ -6, -2 ], [ -5, -4 ], [ -10, -12 ], [ -5, -4 ], [ -2, -4 ], [ -4, -8 ], [ -3, -5 ], [ -3, -3 ], [ -7, -4 ], [ -2, -3 ], [ 0, -3 ], [ -2, -1 ], [ -1, -5 ], [ -4, -12 ], [ -4, -12 ], [ -3, -8 ], [ -2, -9 ], [ -2, -18 ], [ 0, -8 ], [ 1, -9 ], [ 2, -15 ], [ 3, -14 ], [ 3, -15 ], [ 5, -20 ], [ 1, -4 ], [ 0, -12 ], [ -1, -6 ], [ 0, -2 ], [ -2, -6 ], [ -1, -5 ], [ -4, -8 ], [ -3, -3 ], [ -2, -5 ], [ -7, -8 ], [ -4, -2 ], [ -5, -2 ], [ -4, -1 ], [ -2, -1 ], [ -5, 0 ], [ -6, 1 ], [ -12, 3 ], [ -15, 7 ], [ -4, 1 ], [ -3, 1 ], [ -3, 0 ], [ -3, -1 ], [ -3, 0 ], [ -3, -2 ], [ -1, -3 ], [ -2, -2 ], [ -1, -2 ], [ -2, -3 ], [ -1, -5 ], [ -1, -2 ], [ -1, -9 ], [ -1, -11 ], [ -3, -12 ], [ 0, -7 ], [ -1, -8 ], [ 0, -16 ], [ 1, -7 ], [ 1, -7 ], [ 6, -20 ], [ 5, -13 ], [ 1, -7 ], [ 2, -4 ], [ 4, -8 ], [ 11, -20 ], [ 10, -22 ], [ 5, -8 ], [ 3, -7 ], [ 3, -6 ], [ 16, -24 ], [ 3, -5 ], [ 3, -7 ], [ 3, -8 ], [ 5, -10 ], [ 2, -8 ], [ 4, -14 ], [ 3, -8 ], [ 2, -5 ], [ 4, -6 ], [ 4, -5 ], [ 9, -8 ], [ 20, -12 ], [ 11, -11 ], [ 4, -5 ], [ 17, -25 ], [ 2, -4 ], [ 3, -8 ], [ 5, -9 ], [ 2, -4 ] ], [ [ 2803, 5901 ], [ 0, -3 ], [ -1, -26 ], [ -1, -8 ], [ -2, -12 ], [ -2, -16 ], [ -2, -5 ], [ -1, -6 ], [ -1, -3 ], [ -3, -3 ], [ -3, -3 ], [ -4, -2 ], [ -8, 0 ], [ -1, 1 ], [ -3, 1 ], [ -4, 4 ], [ -3, 3 ], [ -6, 6 ], [ -6, 10 ], [ -4, 3 ], [ -3, 2 ], [ -5, 2 ], [ -4, 0 ], [ -2, -1 ], [ -3, -3 ], [ -2, -3 ], [ -1, -4 ], [ -1, -3 ], [ 0, -4 ], [ -1, -4 ], [ 0, -2 ], [ 1, -6 ], [ 2, -13 ], [ 0, -16 ], [ -2, -7 ], [ -1, -7 ], [ -4, -7 ], [ -6, -23 ], [ -5, -10 ], [ -11, -24 ], [ -4, -11 ], [ -1, -3 ], [ -1, -3 ], [ 0, -6 ], [ -2, -14 ], [ -2, -22 ], [ -3, -18 ], [ 0, -22 ], [ 2, -2 ] ], [ [ 2689, 5608 ], [ -2, -1 ], [ -3, 0 ], [ -12, 1 ], [ -10, 2 ], [ -8, 3 ], [ -8, 2 ], [ -5, 2 ], [ -18, 11 ], [ -11, 6 ], [ -11, 3 ], [ -7, 1 ], [ -31, 0 ], [ -4, -1 ], [ -5, 0 ], [ -4, -2 ], [ -4, -2 ], [ -6, -6 ], [ -6, -3 ], [ -3, -4 ], [ -3, -10 ], [ -2, -6 ], [ -1, -7 ], [ 0, -12 ], [ 1, -6 ], [ 1, -4 ], [ 1, -4 ], [ 5, -22 ], [ 1, -3 ], [ 1, -3 ], [ 0, -15 ], [ -2, -7 ], [ -2, -6 ], [ -5, -7 ], [ -7, 0 ], [ -3, 1 ], [ -6, 5 ], [ -15, 9 ], [ -6, 3 ], [ -12, 6 ], [ -8, 3 ], [ -15, 6 ], [ -4, 2 ], [ -3, 2 ], [ -1, 1 ], [ -3, 3 ], [ -1, 4 ], [ -1, 4 ], [ -1, 28 ], [ -1, 8 ], [ -1, 4 ], [ 0, 7 ], [ -2, 6 ], [ -2, 4 ], [ -2, 4 ], [ -3, 5 ], [ -4, 2 ], [ -5, 5 ], [ -6, 3 ], [ -4, 1 ], [ -6, 2 ], [ -17, 4 ], [ -4, 1 ], [ -4, 3 ], [ -2, 0 ], [ -2, 2 ], [ -4, 7 ], [ -15, 24 ], [ -13, 17 ], [ -4, 9 ], [ -8, 12 ], [ -10, 27 ], [ -5, 9 ], [ -3, 2 ], [ -6, 9 ], [ -7, 5 ], [ -6, 4 ], [ -4, 1 ], [ -3, 0 ], [ -7, -2 ], [ -7, -1 ], [ -4, -3 ], [ -9, -5 ], [ -8, -5 ], [ -7, -3 ], [ -9, -1 ], [ -5, -1 ], [ -17, 0 ], [ -15, 2 ], [ -9, 4 ], [ -5, 4 ], [ -5, 2 ], [ -13, 13 ], [ -8, 11 ], [ -10, 15 ], [ -9, 10 ], [ -6, 5 ], [ -4, 6 ], [ -7, 3 ], [ -10, 10 ], [ -7, 6 ], [ -6, 8 ], [ -3, 5 ], [ -3, 5 ], [ -5, 8 ], [ 0, 8 ], [ 2, 4 ], [ 1, 3 ], [ 3, 5 ], [ 2, 3 ], [ 3, 2 ], [ 12, 8 ], [ 2, 1 ], [ 1, 1 ], [ 0, 2 ], [ -3, 7 ], [ -9, 8 ], [ -4, 3 ], [ -3, 2 ], [ -9, 3 ], [ -7, 0 ], [ -4, -2 ], [ -14, -4 ], [ -7, 0 ], [ -6, 1 ], [ -13, 6 ], [ -8, 3 ], [ -5, 0 ], [ -10, -1 ], [ -11, -3 ], [ -5, -3 ], [ -5, -3 ], [ -12, -11 ], [ -6, -5 ], [ -5, -3 ], [ -2, 0 ], [ -2, -1 ], [ -3, 0 ], [ -4, 1 ], [ -15, 7 ], [ -6, 2 ], [ -4, 2 ], [ -1, 2 ], [ -2, 6 ], [ -1, 6 ], [ 0, 4 ], [ 1, 6 ], [ 1, 7 ], [ 1, 7 ], [ 1, 4 ], [ 1, 6 ], [ 7, 25 ], [ 8, 21 ], [ 6, 14 ], [ 4, 12 ], [ 2, 7 ], [ 0, 8 ], [ 1, 4 ], [ -1, 7 ], [ -2, 7 ], [ -2, 10 ], [ -2, 4 ], [ -3, 8 ], [ -3, 8 ], [ -11, 13 ], [ -2, 3 ], [ -3, 1 ], [ -2, -1 ], [ -17, -9 ], [ -3, -1 ], [ -11, -2 ], [ -3, -1 ], [ -6, 2 ], [ -2, 2 ], [ -2, 2 ], [ -2, 3 ], [ -2, 1 ], [ -2, 6 ], [ -5, 13 ], [ -1, 5 ], [ -10, 19 ], [ -5, 11 ], [ -3, 6 ], [ -1, 2 ], [ -2, 2 ], [ -2, 0 ], [ -2, -1 ], [ -6, -3 ], [ -8, -10 ], [ -4, -3 ], [ -3, -1 ], [ -3, -3 ], [ -4, 0 ], [ -1, 1 ], [ -2, 3 ], [ -4, 5 ], [ -2, 10 ], [ 0, 14 ], [ -1, 2 ], [ -2, 0 ], [ -1, -1 ], [ 0, -5 ], [ -3, -2 ], [ -9, -2 ], [ -11, 0 ], [ -1, 1 ], [ -2, -1 ], [ -1, -2 ], [ -2, -4 ] ], [ [ 2495, 7656 ], [ 0, 1 ], [ 1, 1 ], [ 1, 0 ], [ 14, 4 ], [ 3, 2 ], [ 8, 0 ], [ 2, -2 ], [ 10, -6 ], [ 2, 0 ], [ 5, -1 ], [ 2, 1 ], [ 4, 4 ], [ 1, 1 ], [ 2, 1 ], [ 4, 0 ], [ 7, -2 ], [ 2, 0 ], [ 1, 1 ], [ 2, 4 ], [ 1, 3 ], [ 2, 2 ], [ 2, 8 ], [ 6, 17 ], [ 1, 3 ], [ 3, 5 ], [ 7, 13 ], [ 13, 17 ], [ 6, 6 ], [ 10, 14 ], [ 3, 3 ] ], [ [ 2620, 7756 ], [ 2, -6 ], [ 2, -2 ], [ 2, -1 ], [ 0, 1 ], [ 1, 1 ], [ 1, 7 ], [ 0, 1 ], [ 1, 0 ], [ 1, 0 ], [ 0, -1 ], [ -1, -8 ], [ -2, -20 ], [ 0, -14 ], [ 1, -10 ], [ 2, -25 ], [ 5, -30 ], [ 4, -19 ], [ 0, -5 ], [ 1, -8 ], [ 0, -9 ], [ -2, -29 ], [ 0, -12 ], [ 1, -7 ], [ 2, -10 ], [ 5, -21 ], [ 2, -6 ], [ 4, -5 ], [ 2, -8 ], [ 3, -4 ], [ 3, -5 ], [ 2, -3 ], [ 5, -7 ], [ 3, -1 ], [ 6, -1 ], [ 2, 0 ], [ 3, 1 ], [ 4, 2 ], [ 11, 8 ], [ 2, 2 ], [ 8, 3 ], [ 4, 1 ], [ 22, 0 ], [ 9, -3 ], [ 7, -3 ], [ 3, -3 ], [ 4, -4 ], [ 2, -5 ], [ 3, -5 ], [ 4, -5 ], [ 4, -15 ], [ 1, -5 ], [ 1, -9 ], [ 1, -8 ], [ 0, -9 ], [ -1, -9 ], [ 0, -6 ], [ -1, -7 ], [ 0, -7 ], [ -2, -9 ], [ -5, -16 ], [ -4, -25 ], [ -3, -16 ], [ 0, -6 ], [ -1, -3 ], [ 0, -5 ], [ 1, -3 ], [ 1, -7 ], [ 2, -3 ], [ 7, -9 ], [ 13, -13 ], [ 10, -7 ], [ 17, -10 ], [ 9, -9 ], [ 11, -4 ], [ 11, -6 ], [ 5, -1 ], [ 5, -4 ], [ 2, -3 ], [ 6, -9 ], [ 6, -8 ], [ 4, -7 ], [ 7, -25 ], [ 7, -25 ], [ 3, -10 ], [ 1, -4 ], [ 0, -2 ], [ -1, -1 ], [ -2, -1 ], [ -11, 0 ], [ -11, 0 ], [ -12, 1 ], [ -4, 0 ], [ -4, -1 ], [ -4, 0 ], [ -2, -1 ], [ -4, -2 ], [ -6, -5 ], [ -7, -5 ], [ -4, -8 ], [ -3, -5 ], [ -2, -4 ], [ -3, -4 ], [ -3, -6 ], [ -2, -6 ], [ -3, -12 ], [ 0, -9 ], [ -1, -10 ], [ 1, -8 ], [ 1, -16 ], [ 0, -37 ], [ -1, -3 ], [ -1, -6 ], [ -2, -3 ], [ -3, -7 ], [ -4, -2 ], [ -4, 0 ], [ -2, -1 ], [ -12, 0 ], [ -9, -1 ], [ -2, -1 ], [ -3, -3 ], [ -2, -2 ], [ -1, -2 ], [ 0, -1 ], [ -1, -6 ], [ -2, -13 ], [ -1, -7 ], [ -3, -8 ], [ -3, -7 ], [ -3, -8 ], [ -9, -18 ], [ -6, -8 ], [ -4, -5 ], [ -4, -7 ], [ -12, -11 ], [ -4, -3 ], [ -4, -4 ], [ -4, -2 ], [ -17, -7 ], [ -7, -3 ], [ -5, -3 ], [ -7, -5 ], [ -7, -4 ], [ -4, -6 ], [ -4, -4 ], [ -2, -5 ], [ -3, -4 ], [ -6, -9 ], [ -3, -10 ], [ -3, -12 ], [ -1, -7 ], [ -1, -4 ], [ 0, -16 ], [ 1, -2 ], [ 2, -9 ], [ 2, -3 ], [ 2, -5 ], [ 2, -2 ], [ 5, -2 ], [ 5, -1 ], [ 5, -3 ], [ 1, -1 ], [ 1, -1 ], [ 0, -2 ], [ -1, -7 ], [ 0, -4 ], [ 3, -7 ], [ 8, -3 ], [ 2, -2 ], [ 3, -5 ], [ 2, -3 ], [ 3, -8 ], [ 9, -20 ], [ 2, -3 ], [ 3, -7 ], [ 2, -1 ], [ 4, -2 ], [ 4, -1 ], [ 8, 0 ], [ 3, 1 ], [ 9, 3 ], [ 10, 6 ], [ 10, 7 ], [ 9, 8 ], [ 17, 18 ], [ 5, 3 ], [ 5, 4 ], [ 5, 3 ], [ 4, 0 ], [ 4, 0 ], [ 5, 0 ], [ 6, -2 ], [ 2, -2 ], [ 4, -3 ], [ 2, -3 ], [ 1, -1 ], [ 1, -1 ], [ 0, -8 ], [ 2, -2 ], [ 0, -2 ], [ 1, -4 ], [ 2, -1 ], [ 2, -3 ], [ 2, -3 ], [ 4, -3 ], [ 27, -9 ], [ 5, -2 ], [ 4, -2 ], [ 5, -5 ], [ 14, -13 ], [ 16, -13 ], [ 5, -8 ], [ 11, -19 ], [ 6, -11 ], [ 4, -5 ], [ 5, -4 ], [ 4, -3 ], [ 4, -3 ], [ 5, -1 ], [ 13, -3 ], [ 1, -1 ] ], [ [ 2028, 4760 ], [ 0, -1 ], [ 1, -1 ], [ 1, -5 ], [ 4, -5 ], [ 5, -7 ], [ 4, -7 ], [ 2, -3 ], [ 6, -7 ], [ 7, -3 ], [ 6, -4 ], [ 6, -4 ], [ 14, -4 ], [ 8, -4 ], [ 8, -5 ], [ 3, -5 ], [ 5, -5 ], [ 11, -17 ], [ 8, -12 ], [ 11, -18 ], [ 2, -5 ], [ 0, -6 ], [ -2, -7 ], [ -7, -15 ], [ -2, -7 ], [ 0, -9 ], [ 1, -3 ], [ 1, -6 ], [ 1, -3 ], [ 1, -3 ], [ 2, -5 ], [ 1, -3 ], [ 2, -4 ], [ 4, -4 ], [ 5, -2 ], [ 8, -4 ], [ 3, -2 ], [ 3, -2 ], [ 9, -7 ], [ 5, -3 ], [ 5, -3 ], [ 10, -5 ], [ 5, -3 ], [ 2, -2 ], [ 4, -7 ], [ 3, -6 ], [ 1, -4 ], [ 1, -8 ], [ 0, -19 ], [ -1, -14 ], [ -1, -15 ], [ -3, -14 ], [ -4, -21 ], [ -1, -7 ], [ 0, -14 ], [ 1, -4 ], [ 0, -3 ], [ 1, -2 ], [ 3, -7 ], [ 3, -1 ], [ 3, -2 ], [ 4, -5 ], [ 24, -14 ], [ 17, -8 ], [ 4, -4 ], [ 9, -7 ], [ 3, -1 ], [ 1, -1 ], [ 2, 0 ], [ 0, 1 ], [ 2, 1 ], [ 5, 3 ], [ 2, 5 ], [ 5, 11 ], [ 3, 3 ], [ 0, 2 ], [ 2, 3 ], [ 4, 2 ], [ 7, 0 ], [ 4, -1 ], [ 5, -2 ], [ 10, -5 ], [ 14, -7 ] ], [ [ 2334, 4358 ], [ 0, -1 ], [ 1, -2 ], [ 4, -4 ], [ 6, -6 ], [ 13, -11 ], [ 7, -9 ], [ 6, -5 ], [ 3, -4 ], [ 1, -1 ], [ 2, -7 ], [ 0, -7 ], [ -4, -13 ], [ -1, -2 ], [ 0, -1 ], [ 1, -2 ], [ 0, -2 ], [ 1, -3 ], [ 3, -3 ], [ 4, -1 ], [ 6, 0 ], [ 10, 1 ], [ 6, 1 ], [ 6, 0 ], [ 5, -1 ], [ 3, -2 ], [ 12, -10 ], [ 4, -5 ], [ 2, -3 ], [ 1, -3 ], [ 2, -5 ], [ 3, -12 ], [ 0, -9 ], [ 1, -20 ], [ -1, -19 ], [ 0, -13 ], [ -1, -14 ], [ -2, -12 ], [ -3, -32 ], [ -2, -23 ], [ -2, -36 ], [ 0, -68 ], [ 1, -6 ], [ 0, -5 ], [ 1, -1 ], [ 0, -3 ], [ 3, -4 ], [ 6, -3 ], [ 4, -4 ], [ 6, -6 ], [ 2, -3 ], [ 3, -8 ], [ 2, -6 ], [ 2, -8 ], [ 2, -8 ], [ 4, -12 ], [ 1, -8 ], [ 1, -12 ], [ 1, -10 ], [ 0, -14 ], [ -1, -12 ], [ -1, -12 ], [ -1, -15 ] ], [ [ 2467, 3829 ], [ -1, 0 ], [ -3, 0 ], [ -1, -3 ], [ -2, -4 ], [ -2, -4 ], [ -1, -5 ], [ -2, -4 ], [ 0, -6 ], [ -1, -6 ], [ -3, -19 ], [ -3, -15 ], [ -1, -6 ], [ 0, -8 ], [ -1, -3 ], [ 1, -5 ], [ 0, -5 ], [ 4, -16 ], [ 2, -3 ], [ 5, -11 ], [ 2, -5 ], [ 1, -10 ], [ 1, -9 ], [ 3, -15 ], [ 0, -7 ], [ 1, -30 ], [ 0, -7 ], [ 1, -10 ], [ 3, -20 ], [ 1, -10 ], [ 2, -8 ], [ 4, -15 ], [ 7, -23 ], [ 4, -16 ], [ 0, -2 ], [ 1, -4 ], [ -1, -4 ], [ -1, -4 ], [ -11, -28 ], [ -4, -11 ], [ -3, -9 ], [ -2, -13 ], [ -2, -6 ], [ -2, -10 ], [ -2, -29 ], [ -1, -16 ], [ 0, -13 ], [ 1, -9 ], [ 2, -11 ], [ 3, -16 ], [ 2, -9 ], [ 6, -21 ], [ 2, -9 ], [ 4, -11 ], [ 2, -5 ], [ 10, -17 ], [ 1, -4 ], [ 2, -5 ], [ 1, -5 ], [ 1, -6 ], [ 0, -13 ], [ -1, -8 ], [ -3, -16 ], [ -1, -13 ], [ -1, -8 ], [ -2, -8 ], [ -7, -16 ], [ -2, -8 ], [ -2, -8 ], [ -2, -11 ], [ -3, -18 ], [ -4, -18 ], [ -1, -6 ], [ -2, -6 ], [ -3, -5 ], [ -4, -6 ], [ -13, -18 ], [ -12, -15 ], [ -5, -8 ], [ -5, -6 ], [ -5, -12 ], [ -6, -9 ], [ -2, -3 ], [ -1, -4 ], [ -1, -6 ], [ -2, -7 ], [ -1, -10 ], [ 0, -9 ], [ 1, -5 ], [ 0, -8 ], [ 4, -17 ], [ 0, -12 ], [ -1, -3 ], [ -1, -6 ], [ -2, -3 ], [ -3, -8 ], [ -5, -9 ], [ -3, -2 ], [ -4, -3 ], [ -4, -1 ], [ -4, -2 ], [ -3, -1 ], [ -6, 0 ], [ -4, 3 ], [ -2, 1 ] ], [ [ 2369, 2893 ], [ 2, 9 ], [ 1, 7 ], [ 0, 8 ], [ -1, 6 ], [ -2, 5 ], [ -2, 6 ], [ -2, 3 ], [ -3, 5 ], [ -2, 1 ], [ -2, 2 ], [ -5, 1 ], [ -5, 0 ], [ -7, 2 ], [ -13, 0 ], [ -8, 1 ], [ -13, 5 ], [ -3, 2 ], [ -3, 1 ], [ -11, 10 ], [ -4, 5 ], [ -22, 14 ], [ -11, 5 ], [ -3, 2 ], [ -13, 2 ], [ -14, 6 ], [ -8, 1 ], [ -3, 1 ], [ -4, 0 ], [ -9, -1 ], [ -4, -1 ], [ -2, -2 ], [ -4, -2 ], [ -2, -2 ], [ -5, -4 ], [ -5, -8 ], [ -2, -6 ], [ -8, -8 ], [ -4, -2 ], [ -3, -1 ], [ -3, 0 ], [ -3, 1 ], [ -12, 5 ], [ -11, 5 ], [ -4, 0 ], [ -2, 1 ], [ -3, 0 ], [ -6, -1 ], [ -5, -1 ], [ -14, 0 ], [ -14, -1 ], [ -6, 0 ], [ -4, 1 ], [ -4, 2 ], [ -5, 4 ], [ -5, 3 ], [ -14, 13 ], [ -3, 3 ], [ -3, 4 ], [ -3, 3 ], [ -2, 4 ], [ -1, 3 ], [ -1, 3 ], [ 0, 8 ], [ 2, 20 ], [ 0, 11 ], [ -1, 7 ], [ -1, 8 ], [ -1, 4 ], [ -1, 9 ], [ -2, 5 ], [ -2, 4 ], [ -2, 1 ], [ -4, 3 ], [ -3, 3 ], [ -3, 3 ], [ -3, 2 ], [ -2, 6 ], [ -2, 4 ], [ -2, 6 ], [ -1, 3 ], [ 0, 11 ], [ 2, 6 ], [ 3, 9 ], [ 1, 2 ], [ 0, 8 ], [ -1, 2 ], [ -3, 5 ], [ -3, 3 ], [ -2, 2 ], [ -5, 1 ], [ -10, 6 ], [ -22, 8 ], [ -6, 4 ], [ -6, 4 ], [ -7, 8 ], [ -6, 7 ], [ -3, 5 ], [ -7, 13 ], [ -2, 4 ], [ -2, 4 ], [ 0, 3 ], [ -1, 2 ], [ 0, 5 ], [ 1, 4 ], [ 1, 3 ], [ 4, 15 ], [ 2, 3 ], [ 1, 3 ], [ 7, 10 ], [ 7, 8 ], [ 11, 12 ], [ 3, 5 ], [ 3, 3 ], [ 3, 8 ], [ 2, 5 ], [ 5, 18 ], [ 6, 14 ], [ 2, 4 ], [ 0, 8 ], [ -1, 3 ], [ 0, 5 ], [ -1, 4 ], [ -3, 2 ], [ -5, 12 ], [ -1, 5 ], [ -2, 3 ], [ 0, 6 ], [ -1, 6 ], [ -1, 6 ], [ 0, 11 ], [ 1, 6 ], [ 0, 4 ], [ 1, 5 ], [ 0, 3 ], [ 2, 2 ], [ 1, 3 ], [ 8, 9 ], [ 3, 6 ], [ 2, 3 ], [ 1, 4 ], [ 4, 15 ], [ 0, 8 ], [ 1, 10 ], [ 0, 11 ], [ -1, 6 ], [ -2, 7 ], [ -1, 3 ], [ -2, 3 ], [ -3, 1 ], [ -9, 5 ], [ -4, 1 ], [ -14, 3 ], [ -5, 2 ], [ -25, 26 ], [ -4, 2 ], [ -3, 2 ], [ -7, 5 ], [ -13, 4 ], [ -7, 2 ], [ -7, 1 ], [ -12, 3 ], [ -13, 3 ], [ -7, 0 ], [ -7, -1 ], [ -5, -2 ], [ -23, -8 ], [ -11, -2 ], [ -8, 1 ], [ -32, 4 ], [ -4, 1 ], [ -6, 3 ], [ -3, 2 ], [ -3, 2 ], [ -2, 2 ], [ -1, 3 ], [ -6, 7 ], [ -6, 11 ], [ -2, 4 ], [ -3, 2 ], [ -4, 8 ], [ -4, 4 ], [ -2, 5 ], [ -2, 4 ], [ -2, 5 ], [ -4, 20 ], [ -2, 4 ], [ -1, 4 ], [ -3, 4 ], [ -2, 2 ], [ -3, 1 ], [ -4, 0 ], [ -4, -1 ], [ -3, -2 ], [ 0, -2 ], [ -1, -4 ], [ -1, -5 ], [ -4, -30 ], [ -1, -7 ], [ -1, -3 ], [ -1, -3 ], [ -3, -3 ], [ -2, -1 ], [ -3, -1 ], [ -3, -1 ], [ -5, 1 ], [ -5, 1 ], [ -3, 0 ], [ -3, 3 ], [ -9, 7 ], [ -6, 4 ], [ -3, 6 ], [ -3, 7 ], [ -1, 4 ], [ -5, 13 ], [ -4, 8 ], [ -4, 8 ], [ -3, 4 ], [ -3, 4 ], [ -13, 5 ], [ -3, 3 ], [ -1, 2 ], [ -2, 2 ], [ -4, 9 ], [ -1, 3 ], [ -1, 6 ], [ -2, 5 ], [ 0, 10 ], [ 2, 6 ], [ 4, 37 ], [ 1, 11 ], [ 0, 12 ], [ -1, 7 ], [ -1, 4 ], [ -2, 8 ], [ -4, 8 ], [ -6, 11 ], [ -4, 9 ], [ -3, 4 ], [ -3, 4 ], [ -8, 8 ], [ -5, 6 ], [ -6, 9 ], [ -5, 5 ], [ -3, 6 ], [ -2, 8 ], [ -1, 5 ], [ -2, 10 ], [ -2, 17 ], [ 0, 21 ], [ -3, 12 ], [ 0, 12 ], [ 1, 4 ], [ 0, 2 ], [ 2, 4 ], [ 1, 3 ], [ 2, 2 ], [ 5, 8 ], [ 8, 8 ], [ 4, 3 ], [ 3, 6 ], [ 3, 4 ], [ 2, 7 ], [ 2, 3 ], [ 2, 7 ], [ 2, 5 ], [ 2, 8 ], [ 0, 13 ], [ -1, 7 ], [ -5, 16 ], [ -1, 4 ], [ -3, 9 ], [ -5, 8 ], [ -2, 3 ], [ -2, 7 ], [ -4, 6 ], [ -2, 6 ], [ -6, 23 ], [ -5, 27 ], [ -2, 8 ], [ -8, 13 ], [ -4, 8 ], [ -4, 4 ], [ -11, 11 ], [ -4, 6 ], [ -6, 10 ], [ -6, 11 ], [ -2, 4 ], [ -4, 6 ], [ -5, 7 ], [ -2, 2 ], [ -3, 2 ], [ -6, 3 ], [ -3, 1 ], [ -10, 2 ], [ -16, 0 ], [ -7, -2 ], [ -5, -1 ], [ -13, -6 ], [ -6, -4 ], [ -11, -8 ], [ -4, -6 ], [ -3, -3 ], [ -4, -7 ], [ -6, -6 ], [ -20, -40 ], [ -4, -6 ], [ -2, -2 ], [ -2, 0 ], [ -2, 1 ], [ -2, 3 ], [ -1, 4 ], [ 0, 23 ], [ 1, 8 ], [ 0, 6 ], [ -1, 8 ], [ 0, 8 ], [ -1, 7 ], [ -1, 11 ], [ -4, 23 ], [ 0, 9 ], [ 1, 3 ], [ 0, 1 ], [ 1, 0 ] ], [ [ 1416, 4444 ], [ 4, -3 ], [ 3, -3 ], [ 9, -4 ], [ 9, -3 ], [ 5, -1 ], [ 7, 0 ], [ 5, 2 ], [ 4, 2 ], [ 4, 3 ], [ 11, 13 ], [ 8, 11 ], [ 5, 9 ], [ 5, 6 ], [ 7, 16 ], [ 4, 8 ], [ 4, 4 ], [ 5, 5 ], [ 4, 4 ], [ 4, 3 ], [ 15, 10 ], [ 9, 6 ], [ 9, 0 ], [ 3, -1 ], [ 12, -7 ], [ 3, 0 ], [ 4, 2 ], [ 5, 5 ], [ 5, 2 ], [ 3, 0 ], [ 6, 0 ], [ 2, 0 ], [ 4, -2 ], [ 15, -16 ], [ 4, -5 ], [ 5, -8 ], [ 2, -6 ], [ 6, -13 ], [ 5, -11 ], [ 4, -5 ], [ 5, -4 ], [ 9, -6 ], [ 7, -1 ], [ 5, -1 ], [ 7, -1 ], [ 8, 1 ], [ 6, 0 ], [ 6, 2 ], [ 9, 5 ], [ 6, 2 ], [ 8, 8 ], [ 2, 3 ], [ 4, 8 ], [ 11, 20 ], [ 13, 27 ], [ 16, 26 ], [ 9, 17 ], [ 3, 3 ], [ 1, 3 ], [ 1, 1 ], [ 1, 0 ] ], [ [ 1781, 4580 ], [ 0, -6 ], [ 1, -9 ], [ 0, -6 ], [ 1, -7 ], [ 2, -7 ], [ 0, -4 ], [ 2, -7 ], [ 2, -4 ], [ 4, -6 ], [ 2, -3 ], [ 3, -5 ], [ 3, -2 ], [ 2, -2 ], [ 3, -2 ], [ 9, -5 ], [ 6, -2 ], [ 8, 0 ], [ 15, 1 ], [ 16, 2 ], [ 15, 5 ], [ 5, 2 ], [ 17, 8 ], [ 4, 1 ], [ 10, 0 ], [ 3, -1 ], [ 7, -2 ], [ 5, -3 ], [ 8, -6 ], [ 5, -4 ], [ 8, -3 ], [ 7, -2 ], [ 10, -1 ], [ 5, 0 ], [ 5, 2 ], [ 7, 5 ], [ 1, 4 ], [ 1, 2 ], [ 1, 2 ], [ 0, 11 ], [ -1, 5 ], [ -1, 9 ], [ -1, 4 ], [ -3, 6 ], [ -3, 9 ], [ -4, 8 ], [ -3, 7 ], [ -3, 5 ], [ -4, 3 ], [ -11, 8 ], [ -6, 4 ], [ -5, 6 ], [ -5, 6 ], [ -5, 6 ], [ -5, 2 ], [ -3, 1 ], [ -3, 4 ], [ 0, 2 ], [ -1, 2 ], [ 0, 5 ], [ -1, 8 ], [ 0, 6 ], [ -2, 6 ], [ -4, 16 ], [ -1, 7 ], [ -2, 7 ], [ -1, 10 ], [ -1, 7 ], [ 0, 17 ], [ 1, 9 ], [ 2, 10 ], [ 2, 9 ], [ 2, 8 ], [ 2, 3 ], [ 0, 4 ], [ 2, 5 ], [ 2, 2 ], [ 4, 5 ], [ 3, 1 ], [ 0, -7 ], [ 1, -3 ], [ 1, -7 ], [ 6, -20 ], [ 2, -2 ], [ 2, -4 ], [ 4, -3 ], [ 2, 0 ], [ 2, -1 ], [ 6, -1 ], [ 4, 0 ], [ 3, 2 ], [ 3, 1 ], [ 1, 2 ], [ 7, 14 ], [ 2, 3 ], [ 4, 6 ], [ 7, 3 ], [ 4, 2 ], [ 4, 2 ], [ 7, 4 ], [ 10, 2 ], [ 5, 0 ], [ 16, -1 ] ], [ [ 2689, 5608 ], [ 0, -1 ], [ 1, -2 ], [ 1, -7 ], [ 0, -5 ], [ 1, -9 ], [ 0, -19 ], [ -1, -10 ], [ 0, -8 ], [ -2, -13 ], [ -5, -19 ], [ -3, -10 ], [ -4, -10 ], [ -2, -8 ], [ -3, -5 ], [ -13, -27 ], [ -2, -7 ], [ -2, -4 ], [ -1, -8 ], [ -1, -8 ], [ 0, -32 ], [ -1, -9 ], [ -3, -8 ], [ -2, -6 ], [ -2, -7 ], [ -3, -8 ], [ -3, -6 ], [ -5, -7 ], [ -5, -6 ], [ -4, -3 ], [ -8, -10 ], [ -6, -6 ], [ -2, -4 ], [ -1, -2 ], [ -1, -4 ], [ 0, -4 ], [ 0, -9 ], [ 1, -17 ], [ 1, -17 ], [ 1, -9 ], [ 2, -14 ], [ 5, -24 ], [ 2, -10 ], [ 1, -9 ], [ 3, -32 ], [ 3, -29 ], [ 3, -25 ], [ 5, -13 ], [ 2, -18 ], [ 8, -42 ], [ 2, -9 ], [ 2, -20 ], [ 1, -11 ], [ 0, -19 ] ], [ [ 2649, 4979 ], [ -1, 0 ], [ -1, 0 ], [ -2, -2 ], [ -1, -2 ], [ -1, -5 ], [ 0, -6 ], [ -1, -4 ], [ 0, -5 ], [ 1, -25 ], [ 0, -8 ], [ -1, -5 ], [ -1, -13 ], [ -1, -8 ], [ -1, -8 ], [ -2, -7 ], [ -2, -3 ], [ -2, -4 ], [ -2, -1 ], [ -6, -4 ], [ -3, -5 ], [ -1, -3 ], [ -5, -9 ], [ -4, -4 ], [ -11, -17 ], [ -9, -10 ], [ -3, -3 ], [ -11, -14 ], [ -4, -3 ], [ -3, 0 ], [ -4, -2 ], [ -1, 1 ], [ -6, 1 ], [ -4, 0 ], [ -4, -1 ], [ -2, -2 ], [ -6, -6 ], [ -6, -4 ], [ -27, -31 ], [ -7, -9 ], [ -7, -8 ], [ -4, -6 ], [ -11, -22 ], [ -2, -6 ], [ -6, -15 ], [ -2, -8 ], [ -5, -10 ], [ -2, -2 ], [ -5, -5 ], [ -5, 0 ], [ -2, 3 ], [ -4, 2 ], [ -3, 2 ], [ -8, 10 ], [ -6, 8 ], [ -4, 3 ], [ -9, 0 ], [ -3, -2 ], [ -4, 0 ], [ -7, -6 ], [ -7, -5 ], [ -8, -9 ], [ -7, -9 ], [ -7, -8 ], [ -7, -9 ], [ -7, -15 ], [ -3, -9 ], [ -16, -32 ], [ -3, -12 ], [ -3, -8 ], [ -5, -20 ], [ -1, -7 ], [ 0, -19 ], [ 1, -10 ], [ 2, -3 ], [ 2, -7 ], [ 1, -1 ], [ 3, -3 ], [ 5, 0 ], [ 2, 1 ], [ 9, 3 ], [ 5, 2 ], [ 6, 1 ], [ 6, 0 ], [ 10, -3 ], [ 3, -1 ], [ 9, -9 ], [ 1, -2 ], [ 1, -2 ], [ 0, -5 ], [ -1, -2 ], [ -1, -3 ], [ -4, -6 ], [ -3, -2 ], [ -11, -10 ], [ -4, -3 ], [ -11, -7 ], [ -1, -1 ], [ -3, -7 ], [ 0, -12 ], [ 3, -12 ], [ 1, -5 ], [ 4, -5 ], [ 8, -10 ], [ 2, -6 ], [ 3, -4 ], [ 2, -7 ], [ 2, -7 ], [ 0, -4 ], [ 0, -6 ], [ -2, -5 ], [ -5, -6 ], [ -3, -2 ], [ -5, -1 ], [ -3, -1 ], [ -10, 0 ], [ -5, 1 ], [ -8, 3 ], [ -8, 3 ] ], [ [ 2028, 4760 ], [ 2, 15 ], [ 1, 18 ], [ 1, 12 ], [ 0, 12 ], [ -2, 19 ], [ 0, 5 ], [ -1, 8 ], [ -1, 3 ], [ 0, 6 ], [ -2, 2 ], [ -1, 2 ], [ -1, 4 ], [ -3, 3 ], [ -3, 1 ], [ -4, 1 ], [ -8, 5 ], [ -6, 1 ], [ -4, 1 ], [ -8, 0 ], [ -3, 1 ], [ -3, 1 ], [ -4, 3 ], [ -3, 5 ], [ -2, 3 ], [ -2, 9 ], [ 0, 2 ], [ -2, 4 ], [ -2, 2 ], [ -4, 0 ], [ -2, -1 ], [ -6, -4 ], [ -4, 0 ], [ -1, 1 ], [ -2, 2 ], [ -5, 10 ], [ -3, 7 ], [ -4, 23 ], [ -3, 12 ], [ 0, 5 ], [ -4, 10 ], [ -2, 5 ], [ -3, 4 ], [ -4, 5 ], [ -2, 2 ], [ -4, 2 ], [ -7, 5 ], [ -7, 0 ], [ 0, -1 ], [ -1, 1 ], [ -1, 0 ], [ -1, -3 ], [ -4, -2 ], [ -13, -12 ], [ -2, -2 ], [ -2, -6 ], [ -6, -15 ], [ -2, -8 ], [ -6, -22 ], [ -3, -13 ], [ -3, -5 ], [ -4, -7 ], [ -3, -2 ], [ -2, -2 ], [ -4, -3 ], [ -3, 0 ], [ -3, -1 ], [ -4, 1 ], [ -10, 3 ], [ -4, 1 ], [ -10, 5 ], [ -13, 11 ], [ -8, 6 ], [ -10, 11 ], [ -7, 6 ], [ -3, 1 ], [ -7, 0 ], [ -4, -2 ], [ -4, -4 ], [ -4, -8 ], [ -2, -4 ], [ -2, -8 ], [ -2, -10 ], [ -1, -6 ], [ -1, -6 ], [ 0, -18 ], [ 2, -5 ], [ 1, -6 ], [ 1, -4 ], [ 5, -12 ], [ 6, -14 ], [ 1, -7 ], [ 1, -8 ], [ 1, -15 ], [ 1, -32 ], [ 1, -11 ], [ 1, -9 ], [ 1, -8 ], [ 1, -7 ], [ 2, -5 ], [ 2, -6 ], [ 6, -8 ], [ 2, -3 ], [ 1, -2 ], [ 1, -5 ], [ 0, -4 ], [ 1, -17 ], [ 0, -29 ], [ -1, -33 ], [ 0, -12 ], [ 1, -10 ], [ 0, -9 ], [ 1, -9 ], [ 1, -2 ] ], [ [ 3539, 2599 ], [ 4, -10 ], [ 3, -7 ], [ 6, -6 ], [ 4, -6 ], [ 5, -5 ], [ 7, -6 ], [ 9, -4 ], [ 10, -6 ], [ 7, -6 ], [ 4, -2 ], [ 3, -5 ], [ 3, -7 ], [ 1, -3 ], [ 0, -14 ], [ 1, -21 ], [ 0, -12 ], [ -1, -17 ], [ -1, -19 ], [ -3, -10 ], [ 0, -2 ], [ -1, -1 ], [ -1, 0 ], [ -1, 1 ], [ -8, 11 ], [ -6, 7 ], [ -3, 2 ], [ -7, 7 ], [ -3, 2 ], [ -3, 6 ], [ -8, 13 ], [ -2, 3 ], [ -7, 7 ], [ -20, 17 ], [ -5, 3 ], [ -2, 2 ], [ -4, 6 ], [ -5, 6 ], [ -1, 4 ], [ -2, 4 ], [ -3, 5 ], [ -1, 3 ], [ 0, 6 ], [ -1, 5 ], [ 0, 6 ], [ 1, 3 ], [ 0, 4 ], [ 3, 5 ], [ 1, 3 ], [ 2, 6 ], [ 2, 3 ], [ 7, 12 ], [ 5, 7 ], [ 5, 6 ], [ 4, 3 ], [ 0, -1 ], [ 0, -4 ], [ 2, -2 ], [ 0, -2 ] ], [ [ 3523, 2780 ], [ -3, 0 ], [ 0, -1 ], [ 0, -1 ], [ -1, -7 ], [ -5, -24 ], [ -2, -13 ], [ -3, -16 ], [ -2, -29 ], [ -2, -17 ], [ 0, -12 ], [ -2, -14 ], [ -2, -11 ], [ -1, -7 ], [ -2, -4 ], [ -2, -6 ], [ -2, -3 ], [ -4, -5 ], [ -8, -7 ], [ -3, -5 ], [ -1, -3 ], [ -2, -4 ], [ -2, -8 ], [ 0, -4 ], [ -2, -7 ], [ 0, -14 ], [ 2, -28 ], [ 1, -8 ], [ 1, -6 ], [ 2, -8 ], [ 2, -7 ], [ 2, -6 ], [ 10, -18 ], [ 5, -9 ], [ 4, -8 ], [ 6, -8 ], [ 15, -14 ], [ 20, -18 ], [ 21, -18 ], [ 16, -12 ], [ 11, -9 ], [ 3, -3 ], [ 3, -5 ], [ 3, -5 ], [ 3, -6 ], [ 5, -8 ], [ 4, -13 ], [ 1, -7 ], [ 0, -16 ], [ -1, -4 ], [ -2, -3 ], [ -2, -3 ], [ -1, -3 ], [ -2, -2 ], [ -10, -6 ], [ -4, -6 ], [ -4, -4 ], [ -4, -5 ], [ -5, -11 ], [ -3, -10 ], [ -3, -8 ], [ -2, -8 ], [ -6, -23 ], [ -2, -8 ], [ -3, -12 ], [ -2, -9 ], [ -3, -8 ], [ -3, -5 ], [ -4, -8 ], [ -4, -7 ], [ -3, -5 ], [ -19, -19 ], [ -3, -5 ], [ -2, -4 ], [ -2, -2 ], [ -2, -5 ], [ -3, -5 ], [ -5, -16 ], [ -2, -10 ], [ -2, -4 ], [ 0, -5 ], [ -1, -3 ], [ 0, -10 ], [ 2, -10 ], [ 0, -6 ], [ 3, -6 ], [ 8, -25 ], [ 0, -4 ], [ 1, -7 ], [ -1, -4 ], [ -3, -11 ], [ -1, -7 ], [ -1, -5 ], [ -1, -2 ], [ -2, -2 ], [ -3, -9 ], [ -3, -4 ], [ -9, -12 ], [ -2, -4 ], [ -2, -6 ], [ -2, -5 ], [ -2, -6 ], [ -1, -5 ], [ -3, -16 ], [ -2, -13 ], [ -5, -28 ], [ -2, -14 ], [ -2, -6 ], [ -2, -6 ], [ -3, -4 ], [ -4, -8 ], [ -6, -6 ], [ -9, -13 ], [ -5, -3 ], [ -7, -6 ], [ -17, -10 ], [ -5, -4 ], [ -4, -2 ], [ -2, -2 ], [ -2, -4 ], [ -2, -2 ], [ -2, -4 ], [ -2, -10 ], [ 0, -10 ], [ 1, -6 ], [ 1, -8 ], [ 1, -4 ], [ 1, -4 ], [ 3, -2 ], [ 2, -3 ], [ 6, -8 ], [ 4, -6 ], [ 3, -3 ], [ 5, -1 ], [ 12, -8 ], [ 4, -2 ], [ 5, -4 ], [ 2, -5 ], [ 1, -2 ], [ 8, -23 ], [ 5, -8 ], [ 3, -8 ], [ 3, -3 ], [ 2, -6 ], [ 11, -11 ], [ 2, -3 ], [ 3, -5 ], [ 5, -10 ], [ 1, -4 ], [ 2, -5 ], [ 1, -5 ], [ 5, -17 ], [ 1, -9 ], [ 1, -9 ], [ 3, -19 ], [ 1, -6 ], [ 0, -4 ], [ 0, -3 ], [ 2, -1 ], [ 0, -1 ], [ 2, -1 ], [ 2, 1 ], [ 4, 1 ], [ 4, 3 ], [ 5, 5 ], [ 13, 13 ], [ 3, 2 ], [ 3, 1 ], [ 2, 3 ], [ 3, 1 ], [ 12, 2 ], [ 2, 1 ], [ 3, 1 ], [ 14, 9 ], [ 2, 1 ], [ 5, 0 ], [ 1, -1 ], [ 3, 0 ], [ 7, -8 ], [ 3, -5 ], [ 5, -8 ], [ 7, -12 ], [ 3, -7 ], [ 6, -20 ], [ 6, -16 ], [ 3, -5 ], [ 4, -18 ], [ 2, -11 ], [ 2, -20 ], [ 0, -9 ], [ 1, -2 ], [ 1, -5 ], [ 1, -3 ], [ 2, -3 ], [ 3, -4 ], [ 16, -16 ], [ 10, -7 ], [ 2, 0 ], [ 0, -2 ], [ 2, -4 ], [ 3, -5 ], [ 10, -27 ], [ 2, -3 ], [ 2, -5 ], [ 19, -25 ], [ 12, -18 ], [ 5, -8 ], [ 10, -9 ], [ 3, -4 ], [ 4, -7 ], [ 6, -14 ], [ 3, -6 ], [ 4, -3 ], [ 5, -7 ], [ 3, -2 ], [ 3, -3 ], [ 4, -5 ], [ 5, -1 ], [ 24, -14 ], [ 7, -4 ], [ 10, -2 ], [ 2, 0 ], [ 4, 0 ], [ 3, 1 ], [ 10, 3 ], [ 12, 6 ], [ 2, 0 ], [ 4, 1 ], [ 8, 0 ], [ 3, -1 ], [ 5, -1 ], [ 5, -5 ], [ 5, -4 ], [ 4, -6 ], [ 5, -4 ], [ 3, -7 ], [ 7, -14 ], [ 8, -15 ], [ 9, -16 ], [ 8, -14 ], [ 3, -5 ], [ 4, -6 ], [ 2, -3 ], [ 4, -2 ], [ 3, -2 ], [ 7, -4 ], [ 7, -2 ], [ 6, -3 ], [ 5, -2 ], [ 6, 0 ], [ 3, 3 ], [ 2, 2 ], [ 3, 2 ], [ 3, 7 ], [ 2, 5 ], [ 1, 5 ], [ 2, 9 ], [ 1, 10 ], [ 2, 12 ], [ 5, 34 ], [ 3, 16 ], [ 2, 32 ] ], [ [ 3999, 1252 ], [ 7, -14 ], [ 4, -12 ], [ 7, -13 ], [ 5, -7 ], [ 3, -7 ], [ 5, -9 ], [ 12, -13 ], [ 7, -7 ], [ 5, -2 ], [ 7, -6 ], [ 6, -2 ], [ 6, -1 ], [ 6, -1 ], [ 3, -1 ], [ 13, 0 ], [ 4, -1 ], [ 4, -3 ], [ 1, -2 ], [ 3, -2 ], [ 4, -10 ], [ 2, -15 ], [ 1, -9 ], [ 1, -7 ], [ 0, -31 ], [ 1, -8 ], [ 0, -7 ], [ 1, -5 ], [ 1, -9 ], [ 3, -8 ], [ 3, -9 ], [ 8, -20 ], [ 3, -11 ], [ 2, -9 ], [ 2, -8 ], [ 0, -43 ], [ 3, -21 ], [ 6, -21 ], [ 3, -12 ], [ 1, -6 ], [ 0, -18 ], [ -2, -7 ], [ 0, -2 ], [ -1, -1 ], [ -2, 0 ] ], [ [ 4147, 852 ], [ -4, 2 ], [ -4, 3 ], [ -11, 13 ], [ -6, 3 ], [ -5, 6 ], [ -6, 3 ], [ -6, 2 ], [ -4, 1 ], [ -17, 5 ], [ -4, 1 ], [ -17, 5 ], [ -5, 3 ], [ -7, 1 ], [ -5, -1 ], [ -7, -3 ], [ -5, -2 ], [ -6, -2 ], [ -3, -4 ], [ -3, -6 ], [ -3, -6 ], [ -2, -4 ], [ -1, -7 ], [ -3, -8 ], [ -1, -6 ], [ -3, -31 ], [ -3, -35 ], [ -2, -12 ], [ 0, -12 ], [ -2, -26 ], [ -1, -11 ], [ -1, -7 ], [ -2, -5 ], [ -1, -7 ], [ -3, -5 ], [ -5, -16 ], [ -7, -17 ], [ -9, -14 ], [ -5, -11 ], [ -4, -8 ], [ -5, -7 ], [ -6, -6 ], [ -15, -16 ], [ -18, -26 ], [ -5, -7 ], [ -6, -10 ], [ -3, -7 ], [ -2, -4 ], [ -4, -7 ], [ -2, -8 ], [ -2, -7 ], [ -2, -7 ], [ -3, -15 ], [ -3, -11 ], [ -5, -23 ], [ -3, -16 ], [ -2, -11 ], [ -1, -13 ], [ -2, -10 ], [ 0, -11 ], [ 0, -10 ], [ -1, -12 ], [ 0, -11 ], [ 3, -45 ], [ 0, -47 ], [ -2, -42 ], [ 0, -38 ], [ -1, -12 ], [ -1, -7 ], [ -1, -11 ], [ -5, -20 ], [ -4, -11 ], [ -3, -10 ], [ -4, -9 ], [ -3, -6 ], [ -4, -4 ], [ -2, -2 ], [ -3, -2 ], [ -3, -2 ], [ -4, -1 ], [ -5, -1 ], [ -8, -1 ], [ -6, 0 ], [ -5, 1 ], [ -6, 3 ], [ -4, 5 ], [ -4, 5 ], [ -3, 8 ], [ -4, 9 ], [ -8, 19 ], [ -4, 9 ], [ -2, 7 ], [ -3, 5 ], [ -5, 8 ], [ -4, 3 ], [ -4, 4 ], [ -8, 4 ], [ -5, 2 ], [ -3, 4 ], [ -2, 4 ], [ -3, 4 ], [ -6, 15 ], [ -6, 20 ], [ -4, 9 ], [ -3, 3 ], [ -2, 5 ], [ -2, 3 ], [ -3, 1 ], [ -4, 1 ], [ -3, 0 ], [ -2, -2 ], [ -5, -2 ], [ -6, -6 ], [ -9, -11 ], [ -21, -26 ], [ -8, -5 ], [ -4, -6 ], [ -5, -3 ], [ -4, -1 ], [ -5, 0 ], [ -4, 1 ], [ -1, 0 ], [ -3, 1 ], [ -11, 9 ], [ -5, 2 ], [ -17, 10 ], [ -7, 5 ], [ -21, 14 ], [ -9, 7 ], [ -1, 2 ], [ -4, 5 ], [ -3, 6 ], [ -3, 6 ], [ -9, 16 ], [ -2, 8 ], [ -17, 28 ], [ -6, 11 ], [ -2, 3 ], [ -2, 3 ], [ -3, 3 ], [ -6, 2 ], [ -3, -1 ], [ -2, -1 ], [ -3, 0 ], [ -3, -2 ], [ -6, -6 ], [ -2, -2 ], [ 0, -3 ], [ -2, -5 ], [ 0, -2 ], [ 0, -3 ], [ -1, -8 ], [ 0, -36 ], [ -1, -7 ], [ -2, -20 ], [ -2, -19 ], [ -2, -13 ], [ -3, -10 ], [ -4, -20 ], [ -2, -9 ], [ -2, -6 ], [ -4, -8 ], [ -3, -8 ], [ -7, -12 ], [ -5, -6 ], [ -4, -2 ], [ -3, -1 ], [ -4, 0 ], [ -23, -2 ], [ -4, -1 ], [ -3, -1 ], [ -3, -3 ], [ -5, -4 ], [ -1, -1 ], [ -1, -7 ], [ -2, -8 ], [ -3, -19 ], [ -3, -12 ], [ -2, -4 ], [ -7, -9 ], [ -2, -2 ], [ -4, -5 ], [ -5, -2 ], [ -8, -1 ], [ -2, -1 ], [ -6, -5 ], [ -4, -3 ], [ -4, -6 ], [ -9, -17 ], [ -2, -6 ], [ -5, -7 ], [ -5, -5 ], [ -7, -8 ], [ -3, 0 ], [ -4, 0 ], [ -7, 3 ], [ -14, 15 ], [ -31, 27 ], [ -11, 10 ], [ -25, 24 ], [ -6, 4 ], [ -6, 5 ], [ -5, 1 ], [ -10, 2 ], [ -12, 4 ], [ -6, 1 ], [ -9, 4 ], [ -21, 13 ], [ -24, 15 ], [ -14, 6 ], [ -7, 2 ], [ -5, 2 ], [ -5, 0 ], [ -4, 0 ], [ -16, 1 ], [ -8, 1 ], [ -5, 1 ], [ -14, 6 ], [ -5, 1 ], [ -8, 0 ], [ -13, 1 ], [ -10, 0 ], [ -15, -7 ], [ -8, -1 ], [ -3, -1 ], [ -2, 0 ], [ -3, 1 ], [ -4, 1 ], [ -4, 3 ], [ -4, 2 ], [ -2, 1 ], [ -8, 8 ], [ -7, 3 ], [ -7, 3 ], [ -18, 6 ], [ -3, 3 ], [ -2, 4 ], [ -7, 10 ], [ -2, 3 ], [ -8, 10 ], [ -2, 3 ], [ -5, 6 ], [ -3, 5 ], [ -2, 8 ], [ -3, 7 ], [ -1, 4 ], [ -2, 7 ], [ -3, 16 ], [ -3, 10 ], [ -6, 12 ], [ -8, 11 ], [ -2, 3 ], [ -5, 6 ], [ -3, 4 ], [ -2, 8 ], [ -2, 8 ], [ -2, 8 ], [ 0, 13 ], [ 1, 6 ], [ 2, 4 ], [ 3, 12 ], [ 2, 6 ], [ 3, 3 ], [ 5, 7 ], [ 9, 10 ], [ 12, 7 ], [ 4, 4 ], [ 5, 9 ], [ 1, 3 ], [ 2, 7 ], [ 3, 13 ], [ 0, 15 ], [ -3, 12 ], [ -2, 4 ], [ -3, 7 ], [ -16, 20 ], [ -5, 4 ], [ -7, 15 ], [ -6, 9 ], [ -9, 22 ], [ -6, 13 ], [ -7, 12 ], [ -5, 14 ], [ -4, 9 ], [ -5, 4 ], [ -3, 6 ], [ -6, 7 ], [ -5, 3 ], [ -8, 4 ], [ -13, 7 ], [ -9, 6 ], [ -9, 5 ], [ -7, 6 ], [ -4, 3 ], [ -4, 5 ], [ -17, 22 ], [ -5, 5 ], [ -5, 7 ], [ -4, 8 ], [ -5, 9 ], [ -8, 13 ], [ -14, 30 ], [ -13, 26 ], [ -8, 13 ], [ -8, 12 ], [ -6, 9 ], [ -7, 9 ], [ -7, 10 ], [ -7, 9 ], [ -12, 11 ], [ -7, 7 ], [ -9, 3 ], [ -8, 6 ], [ -31, 12 ], [ -14, 7 ], [ -5, 4 ], [ -4, 7 ], [ -4, 4 ], [ -2, 5 ], [ -4, 6 ], [ -1, 5 ], [ -1, 4 ], [ -1, 7 ], [ -1, 9 ], [ -2, 34 ], [ 0, 8 ], [ -1, 8 ], [ -2, 11 ], [ -4, 14 ], [ -11, 45 ], [ -2, 11 ], [ -3, 10 ], [ -5, 14 ], [ -3, 6 ], [ -2, 3 ], [ -5, 8 ], [ -16, 16 ], [ -2, 3 ], [ -2, 4 ], [ -2, 6 ], [ -3, 4 ], [ -2, 7 ], [ -4, 9 ], [ -3, 10 ], [ -4, 20 ], [ -10, 41 ], [ -8, 38 ], [ -2, 13 ], [ -4, 17 ], [ -1, 4 ], [ -1, 2 ] ], [ [ 2428, 1285 ], [ 2, 0 ], [ 2, 4 ], [ 4, 14 ], [ 2, 12 ], [ 2, 7 ], [ 1, 9 ], [ 5, 24 ], [ 2, 11 ], [ 2, 6 ], [ 2, 6 ], [ 1, 6 ], [ 2, 3 ], [ 0, 1 ], [ 2, 2 ], [ 4, 4 ], [ 19, 12 ], [ 8, 3 ], [ 4, 5 ], [ 4, 4 ], [ 9, 8 ], [ 4, 4 ], [ 24, 37 ], [ 7, 9 ], [ 5, 9 ], [ 7, 13 ], [ 9, 16 ], [ 6, 14 ], [ 6, 17 ], [ 5, 11 ], [ 2, 9 ], [ 3, 11 ], [ 2, 11 ], [ 1, 11 ], [ 2, 10 ], [ 0, 9 ], [ 0, 9 ], [ 0, 8 ], [ -2, 5 ], [ 0, 7 ], [ -1, 7 ], [ -3, 13 ], [ -8, 20 ], [ -4, 10 ], [ -3, 17 ], [ -1, 7 ], [ 0, 16 ], [ 1, 3 ], [ 0, 4 ], [ 2, 5 ], [ 0, 3 ], [ 2, 2 ], [ 1, 2 ], [ 2, 1 ], [ 9, 5 ], [ 3, 1 ], [ 16, 0 ], [ 5, 1 ], [ 3, 0 ], [ 2, 1 ], [ 7, 3 ], [ 4, 4 ], [ 3, 5 ], [ 14, 19 ], [ 3, 7 ], [ 2, 4 ], [ 1, 6 ], [ 2, 5 ], [ 0, 22 ], [ -1, 8 ], [ -2, 15 ], [ -1, 4 ], [ 0, 11 ], [ 1, 6 ], [ 2, 4 ], [ 2, 5 ], [ 4, 3 ], [ 4, 3 ], [ 3, 3 ], [ 3, 2 ], [ 4, 1 ], [ 9, 0 ], [ 3, -1 ], [ 6, -2 ], [ 4, -1 ], [ 12, 0 ], [ 3, 1 ], [ 13, 5 ], [ 2, 2 ], [ 8, 0 ], [ 7, -1 ], [ 2, 0 ], [ 13, 3 ], [ 17, 0 ], [ 10, 1 ], [ 15, 3 ], [ 8, 2 ], [ 10, 6 ], [ 16, 6 ], [ 6, 4 ], [ 4, 1 ], [ 6, 0 ], [ 18, -7 ], [ 11, -1 ], [ 4, -1 ], [ 4, 0 ], [ 8, -7 ], [ 2, -3 ], [ 3, -2 ], [ 4, -6 ], [ 3, -3 ], [ 3, -8 ], [ 9, -22 ], [ 5, -7 ], [ 4, -3 ], [ 5, -5 ], [ 2, -2 ], [ 2, -2 ], [ 5, -6 ], [ 1, -2 ], [ 3, -1 ], [ 4, 0 ], [ 7, 2 ], [ 15, 8 ], [ 4, 2 ], [ 6, 5 ], [ 8, 6 ], [ 9, 6 ], [ 5, 4 ], [ 5, 6 ], [ 3, 4 ], [ 2, 4 ], [ 5, 6 ], [ 3, 6 ], [ 7, 23 ], [ 6, 15 ], [ 2, 8 ], [ 2, 6 ], [ 4, 17 ], [ 2, 13 ], [ 0, 17 ], [ 2, 19 ], [ 0, 14 ], [ -2, 21 ], [ -2, 13 ], [ 0, 3 ], [ -2, 4 ], [ -6, 12 ], [ -4, 4 ], [ -5, 13 ], [ -3, 9 ], [ -2, 6 ], [ -1, 2 ], [ 0, 7 ], [ 1, 2 ], [ 5, 6 ], [ 13, 4 ], [ 25, 3 ], [ 10, 1 ], [ 7, 0 ], [ 19, -2 ], [ 6, 0 ], [ 9, 1 ], [ 6, 1 ], [ 10, 5 ], [ 5, 2 ], [ 6, 5 ], [ 7, 4 ], [ 5, 4 ], [ 5, 6 ], [ 1, 3 ], [ 7, 10 ], [ 4, 7 ], [ 2, 6 ], [ 1, 5 ], [ 2, 8 ], [ 0, 8 ], [ 0, 26 ], [ 0, 16 ], [ 0, 10 ], [ 0, 3 ], [ 0, 4 ], [ 3, 5 ], [ 5, 9 ], [ 2, 5 ], [ 5, 16 ], [ 4, 8 ], [ 2, 7 ], [ 10, 13 ], [ 5, 9 ], [ 2, 7 ], [ 4, 11 ], [ 1, 2 ], [ 4, 9 ], [ 2, 12 ], [ 3, 16 ], [ 3, 31 ], [ 2, 8 ], [ 2, 14 ], [ 3, 10 ], [ 3, 8 ], [ 4, 9 ], [ 7, 14 ], [ 9, 19 ], [ 6, 12 ], [ 0, 4 ], [ 4, 6 ], [ 0, 7 ], [ 2, 8 ], [ 1, 10 ], [ 0, 10 ], [ -1, 8 ], [ -1, 5 ], [ -1, 9 ], [ -7, 36 ], [ -1, 9 ], [ -1, 3 ], [ 0, 1 ] ], [ [ 3253, 2648 ], [ 0, 3 ], [ -1, 7 ], [ 0, 26 ], [ 1, 7 ], [ 1, 7 ], [ 2, 12 ], [ 2, 7 ], [ 2, 4 ], [ 3, 8 ], [ 2, 4 ], [ 6, 4 ], [ 4, 2 ], [ 4, 1 ], [ 2, 0 ], [ 9, -3 ], [ 4, -3 ], [ 14, -13 ], [ 5, -3 ], [ 15, -9 ], [ 4, -1 ], [ 5, -1 ], [ 2, 0 ], [ 1, 1 ], [ 3, 0 ], [ 1, 0 ], [ 2, 4 ], [ 0, 13 ], [ -2, 10 ], [ -3, 4 ], [ -9, 26 ], [ -2, 8 ], [ -3, 8 ], [ -7, 28 ], [ -3, 14 ], [ 0, 11 ], [ -2, 12 ], [ -2, 11 ], [ 0, 17 ], [ 0, 23 ], [ -1, 10 ], [ -4, 49 ], [ 0, 12 ], [ 1, 5 ], [ 0, 3 ], [ 1, 4 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 4, 4 ], [ 8, 7 ], [ 7, 3 ], [ 4, 2 ], [ 12, 5 ], [ 5, 3 ], [ 3, 3 ], [ 1, 4 ], [ 3, 3 ], [ 3, 8 ], [ 5, 18 ], [ 4, 20 ], [ 2, 4 ], [ 1, 6 ], [ 3, 4 ], [ 3, 5 ], [ 3, 3 ], [ 0, -1 ], [ 1, 0 ], [ 2, -2 ], [ 0, -3 ], [ 2, -3 ], [ 2, -5 ], [ 1, -5 ], [ 2, -10 ], [ 4, -15 ], [ 5, -24 ], [ 6, -33 ], [ 4, -19 ], [ 3, -11 ], [ 6, -22 ], [ 3, -16 ], [ 2, -11 ], [ 1, -9 ], [ 2, -12 ], [ 1, -15 ], [ 1, -5 ], [ 3, -12 ], [ 1, -3 ], [ 1, -3 ], [ 2, -4 ], [ 2, -2 ], [ 3, 0 ], [ 2, 1 ], [ 1, 3 ], [ 11, 11 ], [ 5, 5 ], [ 10, 7 ], [ 3, 1 ], [ 6, 0 ], [ 6, 0 ], [ 3, 0 ], [ 4, -3 ], [ 6, -7 ], [ 2, -3 ], [ 2, -6 ], [ 4, -3 ], [ 2, -5 ], [ 1, -3 ], [ 4, -12 ], [ 1, -5 ], [ 3, -23 ], [ 0, -9 ], [ 1, -17 ] ], [ [ 2369, 2893 ], [ 0, -3 ], [ 2, -6 ], [ 1, -10 ], [ 2, -10 ], [ 2, -8 ], [ 2, -8 ], [ 3, -8 ], [ 2, -6 ], [ 8, -17 ], [ 3, -4 ], [ 2, -4 ], [ 3, -2 ], [ 4, -7 ], [ 3, -5 ], [ 0, -6 ], [ -1, -5 ], [ -4, -17 ], [ -1, -6 ], [ -1, -3 ], [ -2, -2 ], [ -3, -2 ], [ -6, -3 ], [ -3, -2 ], [ -2, -2 ], [ -2, -3 ], [ 0, -4 ], [ -3, -6 ], [ -2, -5 ], [ -1, -2 ], [ -7, -9 ], [ -4, -9 ], [ -2, -4 ], [ 0, -6 ], [ -2, -8 ], [ 0, -5 ], [ -1, -7 ], [ 1, -9 ], [ 1, -6 ], [ 1, -7 ], [ 4, -12 ], [ 5, -10 ], [ 2, -7 ], [ 6, -12 ], [ 2, -7 ], [ 2, -6 ], [ 2, -6 ], [ 1, -5 ], [ 1, -5 ], [ 0, -6 ], [ 1, -4 ], [ 0, -5 ], [ -1, -4 ], [ 0, -8 ], [ -6, -14 ], [ -6, -11 ], [ -8, -15 ], [ -3, -9 ], [ -2, -6 ], [ 0, -8 ], [ -2, -10 ], [ -3, -27 ], [ -3, -14 ], [ -1, -10 ], [ -2, -4 ], [ -3, -5 ], [ -3, -4 ], [ -16, -10 ], [ -6, -5 ], [ -8, -8 ], [ -3, -4 ], [ -14, -24 ], [ -10, -12 ], [ -4, -6 ], [ -10, -9 ], [ -3, -2 ], [ -3, -2 ], [ -4, 0 ], [ -9, 0 ], [ -16, 6 ], [ -9, 4 ], [ -3, 0 ], [ -2, 1 ], [ -7, -1 ], [ -2, -2 ], [ -1, -4 ], [ 0, -2 ], [ -1, -2 ], [ 0, -13 ], [ -2, -26 ], [ -1, -17 ], [ -1, -14 ], [ 0, -46 ], [ -2, -12 ], [ -3, -15 ], [ -2, -15 ], [ 0, -5 ], [ 1, -8 ], [ 1, -9 ], [ 2, -9 ], [ 5, -21 ], [ 2, -12 ], [ 1, -8 ], [ 7, -41 ], [ 2, -14 ], [ 0, -32 ], [ -1, -7 ], [ -1, -5 ], [ -3, -8 ], [ -1, -4 ], [ -4, -10 ], [ -2, -6 ], [ -3, -4 ], [ -4, -7 ], [ -5, -6 ], [ -5, -3 ], [ -10, -7 ], [ -6, -4 ], [ -3, -6 ], [ -3, -3 ], [ -3, -7 ], [ -3, -6 ], [ -4, -7 ], [ -3, -7 ], [ -3, -11 ], [ -2, -9 ], [ -2, -9 ], [ -4, -13 ], [ -2, -9 ], [ -3, -11 ], [ -3, -12 ], [ -1, -17 ], [ -2, -11 ], [ -2, -34 ], [ -1, -12 ], [ -1, -10 ], [ 0, -25 ], [ 1, -11 ], [ 1, -8 ], [ 1, -10 ], [ 1, -8 ], [ 2, -10 ], [ 4, -22 ], [ 3, -10 ], [ 2, -9 ], [ 0, -3 ] ], [ [ 2149, 1643 ], [ -1, 2 ], [ -4, 1 ], [ -4, 2 ], [ -2, 0 ], [ -4, 2 ], [ -5, 0 ], [ -6, -1 ], [ -2, -1 ], [ -3, -1 ], [ -5, -3 ], [ -7, -5 ], [ -4, -3 ], [ -3, -6 ], [ -2, -3 ], [ -4, -8 ], [ -4, -8 ], [ -2, -5 ], [ -1, -8 ], [ -3, -21 ], [ -2, -7 ], [ -2, -5 ], [ -2, -2 ], [ -1, -4 ], [ -2, -2 ], [ -5, -1 ], [ -4, 0 ], [ -5, 2 ], [ -3, 2 ], [ -11, 10 ], [ -18, 19 ], [ -19, 25 ], [ -19, 21 ], [ -7, 10 ], [ -8, 10 ], [ -6, 9 ], [ -4, 5 ], [ -4, 8 ], [ -7, 11 ], [ -3, 8 ], [ -7, 13 ], [ -4, 8 ], [ -3, 12 ], [ -1, 7 ], [ -2, 9 ], [ 0, 10 ], [ -1, 39 ], [ -2, 28 ], [ -1, 13 ], [ -2, 35 ], [ -1, 14 ], [ -1, 14 ], [ -7, 38 ], [ -2, 15 ], [ -1, 11 ], [ -2, 3 ], [ -1, 8 ], [ -2, 4 ], [ -3, 8 ], [ -8, 14 ], [ -7, 15 ], [ -12, 25 ], [ -16, 32 ], [ -12, 28 ], [ -13, 24 ], [ -3, 9 ], [ -13, 20 ], [ -9, 17 ], [ -12, 15 ], [ -6, 9 ], [ -11, 13 ], [ -5, 7 ], [ -7, 9 ], [ -8, 7 ], [ -4, 3 ], [ -10, 7 ], [ -4, 2 ], [ -5, 0 ], [ -8, 2 ], [ -9, 0 ], [ -7, -1 ], [ -21, -1 ], [ -10, 0 ], [ -5, 0 ], [ -7, 1 ], [ -3, 2 ], [ -7, 4 ], [ -9, 3 ], [ -5, 6 ], [ -7, 5 ], [ -9, 8 ], [ -6, 8 ], [ -5, 7 ], [ -8, 10 ], [ -4, 8 ], [ -5, 11 ], [ -5, 8 ], [ -2, 6 ], [ -4, 11 ], [ -1, 11 ], [ -2, 9 ], [ -1, 10 ], [ -2, 11 ], [ -2, 30 ], [ -3, 14 ], [ -6, 27 ], [ -2, 8 ], [ -3, 5 ], [ -4, 11 ], [ -12, 20 ], [ -19, 34 ], [ -23, 40 ], [ -4, 8 ], [ -4, 5 ], [ -5, 17 ], [ -2, 8 ], [ -5, 21 ], [ -2, 9 ], [ -3, 5 ], [ -3, 6 ], [ -3, 8 ], [ -10, 22 ], [ -6, 10 ], [ -8, 30 ], [ -3, 10 ], [ -4, 8 ], [ -4, 7 ], [ -2, 4 ], [ -2, 6 ], [ -13, 15 ], [ -7, 13 ], [ -5, 9 ], [ -9, 18 ], [ -7, 15 ], [ -9, 11 ], [ -5, 6 ], [ -4, 10 ], [ -2, 6 ], [ -3, 9 ], [ -1, 7 ], [ -3, 7 ], [ -2, 17 ], [ -3, 34 ], [ -1, 7 ], [ 0, 10 ], [ -1, 9 ], [ -4, 15 ], [ -2, 5 ], [ -3, 6 ], [ -4, 5 ], [ -9, 16 ], [ -4, 8 ], [ -35, 62 ], [ -9, 13 ], [ -5, 9 ], [ -5, 8 ], [ -5, 4 ], [ -5, 6 ], [ -3, 4 ], [ -5, 6 ], [ -13, 10 ], [ -3, 3 ], [ -6, 5 ], [ -9, 3 ], [ -14, 7 ], [ -29, 11 ], [ -7, 2 ], [ -8, 0 ], [ -10, 0 ], [ -2, 0 ], [ -3, -2 ], [ -2, -1 ], [ 0, -3 ], [ -2, -2 ], [ -1, -2 ], [ -1, -2 ], [ -1, -7 ], [ -2, -10 ], [ -2, -8 ], [ -5, -5 ], [ -2, -2 ], [ -3, -2 ], [ -3, 0 ], [ -5, 2 ], [ -7, 2 ], [ -13, 5 ], [ -11, 7 ], [ -6, 1 ], [ -6, 1 ], [ -20, 1 ], [ -11, 3 ], [ -11, 2 ], [ -10, 3 ], [ -9, 5 ], [ -7, 5 ], [ -6, 6 ], [ -2, 3 ], [ -3, 3 ], [ -3, 6 ], [ -6, 15 ], [ -9, 26 ], [ -10, 29 ], [ -5, 14 ], [ -5, 20 ], [ -1, 10 ], [ -3, 20 ], [ -3, 16 ], [ -4, 10 ], [ -3, 12 ], [ -3, 8 ], [ -3, 11 ], [ -4, 9 ], [ -4, 8 ], [ -8, 13 ], [ -4, 8 ], [ -4, 6 ], [ -6, 6 ], [ -13, 19 ], [ -11, 13 ], [ -4, 6 ], [ -6, 8 ], [ -8, 5 ], [ -6, 6 ], [ -20, 13 ], [ -8, 6 ], [ -5, 4 ], [ -5, 7 ], [ -7, 9 ], [ -2, 2 ], [ -2, 6 ], [ -4, 7 ], [ -1, 10 ], [ -3, 14 ], [ -2, 12 ], [ -6, 30 ], [ -3, 20 ], [ -4, 20 ], [ -5, 21 ], [ -2, 8 ], [ -3, 10 ], [ -2, 10 ], [ 0, 14 ], [ 1, 7 ], [ 3, 19 ], [ 0, 9 ], [ 1, 10 ], [ 0, 12 ], [ -1, 28 ], [ 1, 33 ], [ 0, 13 ], [ -1, 12 ], [ -3, 12 ], [ -1, 9 ], [ -2, 8 ], [ -3, 6 ], [ -1, 4 ], [ -1, 2 ], [ -3, 3 ], [ -2, 3 ], [ -4, 1 ], [ -14, 9 ], [ -7, 4 ], [ -4, 2 ], [ -5, 6 ], [ -5, 3 ], [ -9, 10 ], [ -2, 3 ], [ -2, 6 ], [ -3, 8 ], [ -9, 19 ], [ -9, 32 ], [ -4, 18 ], [ -4, 12 ], [ -2, 13 ], [ -2, 11 ], [ -1, 10 ], [ -2, 55 ], [ -1, 13 ], [ -3, 27 ], [ -8, 43 ], [ -2, 13 ], [ -1, 8 ] ], [ [ 2782, 3829 ], [ 8, -14 ], [ 3, -6 ], [ 6, -7 ], [ 8, -6 ], [ 5, -4 ], [ 5, -3 ], [ 8, -2 ], [ 9, -2 ], [ 3, -2 ], [ 6, -4 ], [ 5, -10 ], [ 9, -14 ], [ 2, -6 ], [ 4, -3 ], [ 2, -4 ], [ 2, -3 ], [ 3, -1 ], [ 9, -6 ], [ 5, -4 ], [ 19, -22 ], [ 5, -7 ], [ 8, -11 ], [ 8, -8 ], [ 1, -3 ], [ 3, -7 ], [ 0, -10 ], [ -1, -2 ], [ -1, 0 ], [ -4, -2 ], [ -3, -3 ], [ -2, -1 ], [ -2, -2 ], [ -2, -2 ], [ -2, -4 ], [ -2, -4 ], [ -2, -7 ], [ -2, -7 ], [ 0, -6 ], [ 0, -4 ], [ 0, -25 ], [ 0, -3 ], [ 0, -4 ], [ 3, -10 ], [ 1, -4 ], [ 6, -12 ], [ 1, -6 ], [ 3, -10 ], [ 2, -11 ], [ 6, -40 ], [ 5, -15 ], [ 2, -8 ], [ 6, -16 ], [ 1, -6 ], [ 0, -3 ], [ 2, -4 ], [ 0, -7 ], [ -2, -6 ], [ -1, -8 ], [ -1, -5 ], [ 0, -7 ], [ 1, -4 ], [ 1, -2 ], [ 0, -5 ], [ 4, -10 ], [ 2, -5 ], [ 2, -8 ], [ 0, -14 ], [ 2, -3 ], [ 1, -2 ], [ 1, -4 ], [ 7, -17 ], [ 2, -7 ], [ 2, -2 ], [ 3, -4 ], [ 3, -5 ], [ 4, -4 ], [ 3, -4 ], [ 5, -3 ], [ 9, -7 ], [ 5, -2 ], [ 12, -1 ], [ 7, -1 ], [ 4, -1 ], [ 1, -1 ], [ 2, -3 ], [ 1, -2 ], [ 3, -2 ], [ 1, -7 ], [ 2, -7 ], [ 4, -28 ], [ 1, -12 ], [ 0, -7 ], [ 0, -32 ], [ 2, -9 ], [ 0, -9 ], [ 0, -10 ], [ 2, -11 ], [ 4, -24 ], [ 5, -22 ], [ 1, -6 ], [ 1, -4 ], [ 2, -4 ], [ 1, -4 ], [ 1, -2 ], [ 2, -3 ], [ 3, -5 ], [ 3, -2 ], [ 6, -2 ], [ 19, -8 ], [ 5, -2 ], [ 6, -5 ], [ 9, -4 ], [ 9, -9 ], [ 16, -14 ], [ 2, -6 ], [ 5, -3 ], [ 4, -7 ], [ 4, -9 ], [ 4, -7 ], [ 1, -7 ], [ 2, -7 ], [ 1, -6 ], [ 3, -5 ], [ 1, -9 ], [ 4, -30 ], [ 1, -15 ], [ 0, -11 ], [ 1, -13 ], [ 0, -23 ], [ -1, -8 ], [ 0, -11 ], [ -1, -9 ], [ -1, -6 ], [ -2, -6 ], [ -1, -6 ], [ -4, -7 ], [ -3, -4 ], [ -3, -5 ], [ -5, -4 ], [ -11, -4 ], [ -3, -4 ], [ -3, -2 ], [ -5, -7 ], [ -2, -3 ], [ -2, -1 ], [ 0, -5 ], [ -1, -4 ], [ 0, -6 ], [ 3, -8 ], [ 6, -34 ], [ 4, -25 ], [ 2, -9 ], [ 3, -9 ], [ 3, -8 ], [ 3, -8 ], [ 2, -4 ], [ 2, -5 ], [ 6, -10 ], [ 3, -4 ], [ 7, -9 ], [ 4, -3 ], [ 5, -6 ], [ 3, -1 ], [ 6, -2 ], [ 8, -6 ], [ 10, -2 ], [ 9, 0 ], [ 5, 0 ], [ 7, 0 ], [ 9, 6 ], [ 5, 3 ], [ 7, 4 ], [ 14, 15 ], [ 1, 2 ] ], [ [ 2428, 1285 ], [ 0, 4 ], [ -4, 6 ], [ -2, 1 ], [ -1, 1 ], [ -2, 0 ], [ -2, 1 ], [ -3, -1 ], [ -16, -5 ], [ -10, -2 ], [ -23, 0 ], [ -10, 0 ], [ -4, 1 ], [ -4, 2 ], [ -4, 2 ], [ -5, 4 ], [ -3, 2 ], [ -3, 4 ], [ -3, 4 ], [ -5, 8 ], [ -16, 34 ], [ -4, 11 ], [ -3, 8 ], [ -2, 8 ], [ -4, 9 ], [ -4, 14 ], [ -8, 34 ], [ -3, 13 ], [ -8, 29 ], [ -8, 39 ], [ -2, 8 ], [ -5, 16 ], [ -1, 5 ], [ -1, 2 ], [ -1, 2 ], [ -2, 4 ], [ -6, 0 ], [ -10, -2 ], [ -3, 0 ], [ -5, 5 ], [ -2, 1 ], [ -3, 4 ], [ -3, 6 ], [ -3, 4 ], [ -5, 16 ], [ -6, 19 ], [ -5, 10 ], [ -3, 6 ], [ -3, 4 ], [ -3, 4 ], [ -7, 7 ], [ -9, 5 ], [ -4, 1 ], [ -9, 2 ], [ -10, 0 ], [ -3, -1 ], [ -1, -1 ] ], [ [ 2467, 3829 ], [ 1, -1 ], [ 2, -3 ], [ 3, -4 ], [ 3, -2 ], [ 4, -1 ], [ 10, -3 ], [ 3, 1 ], [ 2, 2 ], [ 1, 2 ], [ 4, 9 ], [ 6, 12 ], [ 1, 3 ], [ 1, 1 ], [ 3, 1 ], [ 2, 0 ], [ 5, -1 ], [ 8, -3 ], [ 2, 0 ], [ 5, 7 ], [ 2, 3 ], [ 2, 8 ], [ 4, 8 ], [ 3, 6 ], [ 4, 6 ], [ 0, 1 ], [ 0, 1 ], [ 5, -14 ], [ 6, -10 ], [ 2, -8 ], [ 3, -4 ], [ 2, -5 ], [ 1, -2 ], [ 5, -6 ], [ 5, -2 ], [ 5, 0 ], [ 3, 1 ], [ 3, 4 ], [ 4, 3 ], [ 13, 16 ], [ 3, 3 ], [ 2, 0 ], [ 4, 2 ], [ 2, 1 ], [ 3, 0 ], [ 3, -1 ], [ 3, -2 ], [ 2, -1 ], [ 2, -1 ], [ 11, -16 ], [ 3, -3 ], [ 10, -10 ], [ 4, -7 ], [ 3, -9 ], [ 5, -4 ], [ 12, -8 ], [ 4, -4 ], [ 6, -3 ], [ 6, -2 ], [ 5, -1 ], [ 10, 2 ], [ 4, 2 ], [ 3, 3 ], [ 2, 3 ], [ 9, 10 ], [ 3, 4 ], [ 2, 4 ], [ 3, 2 ], [ 4, 2 ], [ 2, 4 ], [ 5, 1 ], [ 6, 2 ], [ 4, 1 ], [ 6, 0 ], [ 16, -1 ], [ 3, 0 ], [ 2, 1 ] ], [ [ 4009, 4183 ], [ 1, 1 ], [ 0, -1 ], [ 2, -4 ], [ 15, -32 ], [ 8, -11 ], [ 4, -9 ], [ 7, -10 ], [ 12, -15 ], [ 2, -3 ], [ 3, -2 ], [ 2, 0 ], [ 2, 0 ], [ 2, 0 ], [ 3, 3 ], [ 6, 10 ], [ 4, 6 ], [ 3, 3 ], [ 8, 6 ], [ 3, 1 ], [ 2, 0 ], [ 3, -2 ], [ 3, -7 ], [ 1, -3 ], [ 5, -25 ], [ 4, -13 ], [ 4, -17 ], [ 6, -22 ], [ 5, -18 ], [ 3, -6 ], [ 5, -20 ], [ 2, -5 ], [ 2, -5 ], [ 5, -8 ], [ 2, -4 ], [ 8, -7 ], [ 2, -1 ], [ 2, -2 ], [ 6, -2 ], [ 5, 0 ], [ 6, 1 ], [ 5, 3 ], [ 4, 3 ], [ 6, 4 ], [ 0, 1 ] ], [ [ 4192, 3971 ], [ 0, -8 ], [ 2, -12 ], [ 3, -26 ], [ 1, -9 ], [ 0, -21 ], [ -2, -16 ], [ -2, -2 ], [ -2, -5 ], [ -2, -2 ], [ -3, -2 ], [ -10, -3 ], [ -4, -4 ], [ -4, -2 ], [ -3, -3 ], [ -2, -1 ], [ -1, -4 ], [ -2, -2 ], [ -2, -8 ], [ 0, -6 ], [ 1, -5 ], [ 1, -4 ], [ 3, -7 ], [ 9, -26 ], [ 4, -8 ], [ 1, -8 ], [ 2, -8 ], [ 2, -10 ], [ 2, -8 ], [ 1, -8 ], [ 1, -14 ], [ 0, -21 ], [ -3, -27 ], [ -1, -11 ], [ 0, -9 ], [ 1, -21 ], [ 0, -11 ], [ -3, -25 ], [ -1, -10 ], [ -2, -11 ], [ -4, -14 ], [ -5, -25 ], [ -7, -30 ], [ -5, -21 ], [ -2, -8 ], [ 0, -13 ], [ 2, -8 ], [ 2, -2 ], [ 0, -10 ], [ -2, -7 ], [ -3, -25 ], [ -3, -22 ], [ -1, -12 ], [ -3, -16 ], [ -7, -24 ], [ 0, -9 ], [ -2, -5 ], [ 0, -7 ], [ 0, -6 ], [ 0, -17 ], [ 0, -8 ], [ 2, -4 ], [ 0, -6 ], [ 0, -3 ], [ 1, -4 ], [ 11, -20 ], [ 5, -7 ], [ 12, -15 ], [ 4, -4 ], [ 3, -7 ], [ 2, -4 ], [ 3, -7 ], [ 6, -17 ], [ 1, -2 ], [ 0, -10 ], [ -1, -2 ], [ -2, -4 ], [ -7, -12 ], [ -4, -11 ], [ -3, -8 ], [ -3, -11 ], [ -2, -5 ], [ -1, -6 ], [ -1, -5 ], [ -2, -6 ], [ 0, -9 ], [ 3, -10 ], [ 2, -9 ], [ 7, -21 ], [ 2, -6 ], [ 0, -4 ], [ 0, -4 ], [ 2, -6 ], [ 0, -3 ], [ -4, -17 ], [ -2, -3 ], [ -2, -4 ], [ -11, -10 ], [ -6, -5 ], [ -3, -2 ], [ -10, -6 ], [ -17, -6 ], [ -9, -4 ], [ -4, -5 ], [ -4, -4 ], [ -2, -4 ], [ -2, -5 ], [ 0, -2 ], [ -2, -3 ], [ 0, -3 ], [ 2, -3 ], [ 0, -6 ], [ 2, -8 ], [ 2, -6 ], [ 18, -36 ], [ 1, -4 ], [ 2, -2 ], [ 0, -14 ], [ -2, -4 ], [ -1, -7 ], [ -3, -14 ], [ -5, -18 ], [ -2, -7 ], [ -2, -7 ], [ -3, -16 ], [ -3, -9 ], [ -2, -48 ], [ -2, -7 ], [ 0, -6 ], [ -2, -6 ], [ -1, -4 ], [ -2, -5 ], [ -5, -4 ], [ -9, -9 ], [ -4, -2 ], [ -10, -12 ], [ -3, -4 ], [ -17, -14 ], [ -6, -5 ], [ -6, -4 ], [ -13, -6 ], [ -10, -5 ], [ -4, -2 ], [ -5, -1 ], [ -5, 0 ], [ -14, 4 ], [ -15, 7 ], [ -5, 4 ], [ -10, 8 ], [ -2, 1 ], [ -4, 1 ], [ -2, 0 ], [ -2, 1 ], [ -3, -1 ], [ -3, -1 ], [ -3, 0 ], [ -1, -2 ], [ -3, -4 ], [ -2, -8 ], [ -1, -6 ], [ 0, -11 ], [ 1, -7 ], [ 4, -35 ], [ 1, -10 ], [ 4, -16 ], [ 5, -12 ], [ 5, -15 ], [ 2, -5 ], [ 2, -6 ], [ 2, -4 ], [ 4, -5 ], [ 2, -3 ], [ 2, 0 ], [ 9, -8 ], [ 3, -3 ], [ 11, -11 ], [ 4, -8 ], [ 2, -2 ], [ 5, -8 ], [ 1, -5 ], [ 0, -3 ], [ 1, -3 ], [ 0, -8 ], [ -1, -7 ], [ 0, -3 ], [ -1, -3 ], [ -3, -6 ], [ -2, -3 ], [ -2, -6 ], [ -7, -13 ], [ -4, -7 ], [ -6, -10 ], [ -3, -8 ], [ -2, -7 ], [ 0, -4 ], [ -1, -3 ], [ 0, -17 ], [ 1, -4 ], [ 0, -5 ], [ 4, -15 ], [ 2, -10 ], [ 5, -10 ], [ 8, -21 ], [ 5, -9 ], [ 12, -18 ], [ 2, -6 ], [ 7, -8 ], [ 5, -6 ], [ 2, -6 ], [ 1, -4 ], [ 1, -4 ], [ 0, -10 ], [ -1, -3 ], [ -2, -1 ], [ -1, -1 ], [ -2, 0 ], [ -1, 0 ], [ -3, 0 ], [ -6, 5 ], [ -2, 4 ], [ -6, 10 ], [ -4, 3 ], [ -4, 5 ], [ -3, 4 ], [ -4, 2 ], [ -7, 5 ], [ -4, 1 ], [ -5, 1 ], [ -11, 0 ], [ -3, -1 ], [ -5, -2 ], [ -4, -4 ], [ -6, -4 ], [ -4, -6 ], [ -2, -4 ] ], [ [ 3932, 2251 ], [ 0, -1 ], [ -4, 0 ], [ -2, 1 ], [ -2, 1 ], [ -2, 2 ], [ -4, 5 ], [ -2, 3 ], [ -5, 9 ], [ -4, 11 ], [ -7, 12 ], [ -8, 25 ], [ -7, 13 ], [ -4, 8 ], [ -4, 5 ], [ -2, 6 ], [ -6, 6 ], [ -3, 2 ], [ -6, 2 ], [ -5, 1 ], [ -8, -1 ], [ -5, 0 ], [ -7, 1 ], [ -13, 7 ], [ -8, 3 ], [ -6, 2 ], [ -7, 5 ], [ -6, 4 ], [ -9, 7 ], [ -2, 2 ], [ -4, 5 ], [ -3, 4 ], [ -4, 8 ], [ -10, 15 ], [ -7, 13 ], [ -8, 7 ], [ -4, 6 ], [ -3, 4 ], [ -11, 19 ], [ -3, 6 ], [ -2, 3 ], [ 0, 6 ], [ -1, 3 ], [ -4, 20 ], [ -2, 6 ], [ -1, 4 ], [ -4, 6 ], [ -8, 15 ], [ -14, 26 ], [ -4, 5 ], [ -1, 6 ], [ -3, 9 ], [ -2, 8 ], [ -1, 10 ], [ -4, 22 ], [ -1, 8 ], [ -1, 4 ], [ -2, 8 ], [ -2, 4 ], [ -2, 6 ], [ -2, 3 ], [ -1, 3 ], [ -2, 2 ], [ -10, 5 ], [ -15, 6 ], [ -4, 2 ], [ -7, 5 ], [ -14, 8 ], [ -9, 6 ], [ -6, 1 ], [ -5, 2 ], [ -18, 6 ], [ -4, 1 ], [ -3, 2 ], [ -5, 4 ], [ -3, 4 ], [ -4, 6 ], [ -3, 4 ], [ -3, 7 ], [ -6, 8 ], [ -17, 33 ], [ -2, 3 ], [ -1, 1 ], [ -1, 0 ] ], [ [ 2782, 3829 ], [ 0, 1 ], [ 1, 6 ], [ 2, 8 ], [ 2, 6 ], [ 2, 5 ], [ 2, 5 ], [ 2, 4 ], [ 1, 1 ], [ 1, 2 ], [ 2, 0 ], [ 1, 1 ], [ 4, -1 ], [ 5, -3 ], [ 3, 0 ], [ 2, 2 ], [ 1, 3 ], [ 1, 3 ], [ 1, 10 ], [ 1, 5 ], [ 1, 1 ], [ 4, 8 ], [ 2, 3 ], [ 3, 12 ], [ 3, 17 ], [ 0, 6 ], [ 0, 5 ], [ 2, 13 ], [ 0, 6 ], [ 0, 5 ], [ 3, 5 ], [ 6, 6 ], [ 4, 3 ], [ 4, 2 ], [ 5, 5 ], [ 4, 3 ], [ 12, 13 ], [ 7, 7 ], [ 5, 1 ], [ 5, 3 ], [ 20, 12 ], [ 0, -2 ], [ 1, -1 ], [ 2, -3 ], [ 1, -4 ], [ 1, -6 ], [ 0, -46 ], [ 2, -17 ], [ 1, -8 ], [ 0, -6 ], [ 1, -5 ], [ 1, -6 ], [ 4, -10 ], [ 2, -3 ], [ 3, -4 ], [ 2, -3 ], [ 9, -3 ], [ 5, -2 ], [ 8, 0 ], [ 5, 1 ], [ 4, 2 ], [ 6, 3 ], [ 3, 1 ], [ 4, 0 ], [ 11, -3 ], [ 3, 0 ], [ 7, 1 ], [ 2, 1 ], [ 6, 5 ], [ 7, 2 ], [ 8, 0 ], [ 15, -1 ], [ 6, 0 ], [ 21, 2 ], [ 17, 2 ], [ 17, 5 ], [ 7, 1 ], [ 8, 0 ], [ 8, -1 ], [ 2, 0 ], [ 3, 1 ], [ 3, 2 ], [ 4, 6 ], [ 1, 4 ], [ 4, 12 ], [ 7, 16 ], [ 3, 9 ], [ 4, 13 ], [ 3, 18 ], [ 4, 11 ], [ 4, 7 ], [ 7, 6 ], [ 19, 9 ], [ 6, 2 ], [ 5, 2 ], [ 6, 1 ], [ 6, 0 ], [ 4, -3 ], [ 9, -3 ], [ 2, -1 ], [ 4, -3 ], [ 5, -6 ], [ 4, -2 ], [ 4, -7 ], [ 1, -2 ], [ 3, -9 ], [ 5, -13 ], [ 1, -4 ], [ 4, -5 ], [ 3, -5 ], [ 3, -3 ], [ 1, -2 ], [ 4, -1 ], [ 6, -4 ], [ 7, -3 ], [ 6, -7 ], [ 2, -3 ], [ 2, -1 ], [ 5, -6 ], [ 2, -3 ], [ 4, -8 ], [ 2, -4 ], [ 0, -6 ], [ 3, -16 ], [ 2, -6 ], [ 1, -2 ], [ 4, -4 ], [ 2, 0 ], [ 2, -1 ], [ 7, -1 ], [ 15, -4 ], [ 3, 0 ], [ 2, 1 ], [ 12, 4 ], [ 2, 3 ], [ 2, 1 ], [ 2, 3 ], [ 15, 20 ], [ 3, 4 ], [ 6, 6 ], [ 5, 3 ], [ 5, 4 ], [ 4, 1 ], [ 4, -1 ], [ 3, 0 ], [ 8, -4 ], [ 1, 0 ], [ 2, 3 ], [ 1, 2 ], [ 0, 22 ], [ -1, 14 ], [ 0, 7 ], [ 1, 1 ], [ 0, 3 ], [ 7, 5 ], [ 1, 0 ], [ 3, -1 ], [ 4, -3 ], [ 2, -5 ], [ 11, -11 ], [ 4, -4 ], [ 4, -4 ], [ 10, -3 ], [ 5, -5 ], [ 2, -4 ], [ 15, -18 ], [ 6, -8 ], [ 4, -3 ], [ 2, -1 ], [ 3, -1 ], [ 3, -1 ], [ 3, 0 ], [ 3, 2 ], [ 9, 10 ], [ 5, 8 ], [ 4, 3 ], [ 7, 3 ], [ 8, 0 ], [ 12, -2 ], [ 5, 0 ], [ 2, -1 ], [ 6, -3 ], [ 10, -8 ], [ 5, -6 ], [ 3, -2 ], [ 8, -2 ], [ 8, -3 ], [ 9, -3 ], [ 11, -3 ], [ 7, -1 ], [ 12, 0 ], [ 3, 1 ], [ 11, 6 ], [ 8, 3 ], [ 16, 10 ], [ 4, 0 ], [ 1, -1 ], [ 1, -3 ], [ 0, -8 ], [ -1, -8 ], [ -5, -22 ], [ 0, -12 ], [ 2, -6 ], [ 3, -3 ], [ 4, -5 ], [ 3, -2 ], [ 2, 0 ], [ 5, -2 ], [ 16, -2 ], [ 7, -3 ], [ 8, -2 ], [ 8, -5 ], [ 8, -5 ], [ 5, -6 ], [ 4, -5 ], [ 9, -11 ], [ 3, -5 ], [ 3, -2 ], [ 5, 0 ], [ 5, 5 ], [ 1, 4 ], [ 4, 8 ], [ 4, 14 ], [ 1, 8 ], [ 6, 11 ], [ 5, 10 ], [ 3, 8 ], [ 4, 4 ], [ 27, 37 ], [ 9, 12 ], [ 4, 5 ], [ 7, 3 ], [ 4, 2 ], [ 10, 6 ], [ 11, 4 ], [ 4, 5 ], [ 8, 7 ], [ 4, 3 ], [ 3, 3 ], [ 2, 5 ], [ 0, 3 ], [ 1, 6 ], [ 0, 8 ], [ -1, 5 ], [ 0, 7 ], [ -4, 15 ], [ -2, 18 ], [ -3, 11 ], [ 0, 8 ], [ -1, 6 ], [ 0, 9 ], [ 1, 10 ], [ 1, 7 ], [ 3, 16 ], [ 1, 10 ], [ 0, 19 ], [ 2, 7 ], [ 0, 4 ], [ 0, 3 ], [ 2, 3 ], [ 1, 5 ], [ 2, 2 ], [ 10, 12 ], [ 2, 6 ], [ 4, 12 ], [ 2, 7 ], [ 5, 6 ], [ 6, 9 ], [ 2, 6 ], [ 12, 13 ], [ 4, 5 ], [ 2, 1 ], [ 1, -1 ], [ 4, -2 ], [ 2, -4 ], [ 23, -22 ], [ 5, -5 ], [ 6, -4 ], [ 15, -10 ], [ 4, -2 ], [ 1, 0 ] ], [ [ 3932, 2251 ], [ 0, -4 ], [ 3, -15 ], [ 7, -41 ], [ 7, -56 ], [ 2, -15 ], [ 4, -26 ], [ 1, -8 ], [ 3, -11 ], [ 2, -9 ], [ 3, -9 ], [ 3, -6 ], [ 3, -8 ], [ 2, -3 ], [ 2, -5 ], [ 13, -12 ], [ 5, -7 ], [ 12, -13 ], [ 12, -18 ], [ 5, -5 ], [ 8, -9 ], [ 5, -4 ], [ 8, -4 ], [ 2, -3 ], [ 4, -6 ], [ 9, -17 ], [ 3, -3 ], [ 3, -4 ], [ 2, -4 ], [ 12, -6 ], [ 1, -3 ], [ 2, -3 ], [ 4, -3 ], [ 1, -5 ], [ 2, -4 ], [ 3, -8 ], [ 2, -8 ], [ 2, -18 ], [ 0, -23 ], [ -1, -16 ], [ -1, -11 ], [ -2, -20 ], [ -2, -7 ], [ 0, -22 ], [ 2, -11 ], [ 1, -9 ], [ 1, -7 ], [ 3, -16 ], [ 2, -9 ], [ 1, -11 ], [ 1, -14 ], [ 0, -20 ], [ -2, -12 ], [ -1, -4 ], [ 1, -10 ], [ 0, -16 ], [ 1, -6 ], [ 1, -10 ], [ 2, -9 ], [ 7, -16 ], [ 13, -40 ], [ 2, -8 ], [ 5, -12 ], [ 2, -12 ], [ 7, -30 ], [ 0, -10 ], [ 2, -9 ], [ 0, -13 ], [ -2, -6 ], [ -2, -11 ], [ -4, -7 ], [ -3, -3 ], [ -13, -13 ], [ -6, -5 ], [ -4, -1 ], [ -4, -1 ], [ -5, -1 ], [ -20, -3 ], [ -18, -3 ], [ -12, -2 ], [ -9, 0 ], [ -3, 1 ], [ -7, 2 ], [ -6, 3 ], [ -17, 9 ], [ -12, 3 ], [ -3, -1 ], [ -3, -2 ], [ -2, -3 ], [ -1, -2 ], [ -2, -2 ], [ -1, -3 ], [ -2, -5 ], [ 0, -3 ], [ -2, -2 ], [ 0, -9 ], [ 2, -6 ], [ 2, -13 ], [ 2, -7 ], [ 7, -26 ], [ 1, -7 ], [ 1, -8 ], [ 2, -9 ], [ 0, -9 ], [ 1, -11 ], [ 3, -20 ], [ 0, -9 ], [ 1, -3 ], [ 1, -4 ], [ 0, -1 ] ], [ [ 4921, 3770 ], [ -1, -1 ], [ -3, -4 ], [ -16, -20 ], [ -12, -15 ], [ -6, -8 ], [ -3, -6 ], [ -3, -8 ], [ -6, -16 ], [ -3, -6 ], [ -13, -33 ], [ -4, -9 ], [ -2, -6 ], [ -4, -17 ], [ -1, -7 ], [ -1, -7 ], [ 0, -29 ], [ 1, -14 ], [ 1, -20 ], [ 2, -13 ], [ 2, -11 ], [ 2, -9 ], [ 7, -22 ], [ 4, -16 ], [ 6, -18 ], [ 2, -7 ], [ 3, -15 ], [ 0, -9 ], [ -4, -9 ], [ -3, -11 ], [ -3, -5 ], [ -2, -9 ], [ -2, -10 ], [ -1, -9 ], [ -1, -9 ], [ 0, -7 ], [ 1, -6 ], [ 1, -4 ], [ 2, -8 ], [ 2, -4 ], [ 1, -4 ], [ 9, -12 ], [ 10, -22 ], [ 10, -20 ], [ 2, -4 ], [ 1, -5 ], [ 0, -5 ], [ -2, -5 ], [ 0, -1 ], [ -2, -1 ], [ -5, -2 ], [ -7, -2 ], [ -5, -3 ], [ -7, -4 ], [ -5, -7 ], [ -3, -3 ], [ -3, -6 ], [ -5, -6 ], [ -2, -7 ], [ -1, -4 ], [ 0, -6 ], [ -2, -6 ], [ 0, -4 ], [ 2, -6 ], [ 0, -5 ], [ 2, -20 ], [ 2, -11 ], [ 0, -20 ], [ -1, -5 ], [ -1, -2 ], [ 0, -1 ], [ -2, -2 ], [ 0, -2 ], [ -4, -3 ], [ -15, -5 ], [ -4, -5 ], [ -1, -2 ], [ -1, -2 ], [ -1, -5 ], [ 0, -32 ], [ -1, -8 ], [ -1, -6 ], [ -1, -5 ], [ -2, -3 ], [ -1, -5 ], [ -6, -11 ], [ -2, -3 ], [ -1, -6 ], [ -1, -6 ], [ -5, -20 ], [ -6, -21 ], [ -2, -14 ], [ -4, -18 ], [ -2, -16 ], [ -3, -28 ], [ -1, -4 ], [ -1, -4 ], [ -5, -8 ], [ -1, -1 ], [ -2, -1 ], [ -2, -1 ], [ -5, 0 ], [ -18, 3 ], [ -5, 2 ], [ -5, 1 ], [ -5, 3 ], [ -2, 0 ], [ -5, 0 ], [ -2, 0 ], [ -4, -1 ], [ -2, -2 ], [ -2, -3 ], [ -2, -3 ], [ -2, -1 ], [ -1, -4 ], [ -2, -4 ], [ -1, -3 ], [ -7, -30 ], [ -3, -19 ], [ -1, -16 ], [ -2, -12 ], [ 0, -41 ], [ 0, -10 ], [ -1, -9 ], [ -2, -11 ], [ -4, -17 ], [ -6, -18 ], [ -6, -22 ], [ 0, -5 ], [ -2, -11 ], [ -1, -6 ], [ 0, -18 ], [ 3, -2 ], [ 4, 0 ], [ 6, 1 ], [ 9, 2 ], [ 3, 1 ], [ 7, 3 ], [ 11, 4 ], [ 8, 3 ], [ 6, 2 ], [ 14, 3 ], [ 4, 1 ], [ 9, 2 ], [ 7, 1 ], [ 9, 0 ], [ 3, -1 ], [ 9, -3 ], [ 2, -2 ], [ 3, -3 ], [ 3, -7 ], [ 5, -10 ], [ 1, -8 ], [ 2, -11 ], [ 2, -16 ], [ 1, -12 ], [ 1, -11 ], [ 1, -15 ], [ -1, -13 ], [ -1, -14 ], [ -3, -32 ], [ 0, -36 ], [ 1, -7 ], [ 1, -7 ], [ 2, -9 ], [ 2, -6 ], [ 2, -9 ], [ 7, -12 ], [ 7, -11 ], [ 5, -8 ], [ 4, -7 ], [ 9, -11 ], [ 6, -10 ], [ 1, -6 ], [ 3, -5 ], [ 8, -20 ], [ 3, -10 ], [ 2, -8 ], [ 2, -6 ], [ 0, -6 ], [ 0, -6 ], [ 0, -5 ], [ -2, -6 ], [ -2, -12 ], [ -1, -9 ], [ -1, -7 ], [ -1, -11 ], [ -2, -14 ], [ -2, -21 ], [ -4, -23 ], [ -1, -3 ], [ 0, -3 ], [ -2, -5 ], [ -3, -2 ], [ -3, 0 ], [ -4, 1 ], [ -7, 2 ], [ -26, 13 ], [ -18, 7 ], [ -6, 3 ], [ -2, 0 ], [ -4, -2 ], [ -4, -1 ], [ -2, -3 ], [ -1, -1 ], [ -1, -3 ], [ -1, -5 ], [ 0, -7 ], [ 1, -4 ], [ 0, -4 ], [ 6, -36 ], [ 1, -19 ], [ 2, -20 ], [ 2, -9 ], [ 2, -11 ], [ 3, -13 ], [ 3, -13 ], [ 2, -11 ], [ 4, -13 ], [ 5, -11 ], [ 2, -8 ], [ 4, -9 ], [ 13, -27 ], [ 2, -4 ], [ 2, -9 ], [ 1, -4 ], [ 1, -5 ], [ 0, -18 ], [ -1, -3 ], [ -2, -11 ], [ -2, -7 ], [ 0, -3 ], [ -1, -1 ], [ -1, -1 ], [ -3, 0 ], [ -2, 1 ], [ -18, 18 ], [ -6, 5 ], [ -5, 5 ], [ -7, 3 ], [ -6, 3 ], [ -6, 4 ], [ -10, 3 ], [ -6, 1 ], [ -29, 0 ], [ -3, 1 ], [ -6, 2 ], [ -4, 2 ], [ -4, 2 ], [ -10, 10 ], [ -5, 2 ], [ -4, 3 ], [ -5, 1 ], [ -8, 3 ], [ -6, 2 ], [ -3, 1 ], [ -30, 20 ], [ -6, 2 ], [ -2, 1 ], [ -5, 3 ], [ -5, 1 ], [ -9, 2 ], [ -2, 0 ], [ -3, -1 ], [ -4, -1 ], [ -4, -2 ], [ -4, -4 ], [ -8, -10 ], [ -7, -8 ], [ -4, -4 ], [ -2, -5 ], [ -9, -8 ], [ -1, -4 ], [ 0, -2 ], [ 1, -1 ], [ 4, -2 ], [ 9, -3 ], [ 1, -1 ], [ 4, -1 ], [ 2, -2 ], [ 2, -3 ], [ 2, -4 ], [ 2, -3 ], [ 1, -6 ], [ 1, -7 ], [ 2, -7 ], [ 2, -19 ], [ 2, -10 ], [ 3, -5 ], [ 3, -6 ], [ 9, -21 ], [ 2, -6 ], [ 5, -13 ], [ 1, -5 ], [ 0, -18 ], [ -2, -9 ], [ -3, -7 ], [ -7, -13 ], [ -5, -9 ], [ -3, -6 ], [ -5, -4 ], [ -2, -4 ], [ -4, -3 ], [ -5, -2 ], [ -7, -2 ], [ -9, -4 ], [ -8, -1 ], [ -9, 0 ], [ -6, 1 ], [ -11, 1 ], [ -1, 0 ] ], [ [ 4527, 1739 ], [ -1, 2 ], [ -2, 3 ], [ -3, 1 ], [ -6, 3 ], [ -4, 3 ], [ -4, 3 ], [ -10, 2 ], [ -12, 2 ], [ -16, 3 ], [ -10, 1 ], [ -14, -1 ], [ -6, 0 ], [ -5, 1 ], [ -5, 2 ], [ -7, 1 ], [ -14, 10 ], [ -9, 8 ], [ -2, 3 ], [ -1, 3 ], [ -7, 16 ], [ -5, 7 ], [ -7, 10 ], [ -8, 3 ], [ -17, 6 ], [ -19, 7 ], [ -6, 1 ], [ -4, 0 ], [ -4, -1 ], [ -5, -2 ], [ -8, -5 ], [ -7, -6 ], [ -2, -2 ], [ -2, -4 ], [ -3, -4 ], [ -3, -11 ], [ 0, -7 ], [ -2, -13 ], [ 0, -9 ], [ -2, -11 ], [ -2, -10 ], [ -1, -8 ], [ -2, -7 ], [ -9, -25 ], [ -1, -9 ], [ -2, -8 ], [ -2, -11 ], [ -2, -9 ], [ -2, -18 ], [ 0, -13 ], [ -1, -18 ], [ 1, -19 ], [ 0, -20 ], [ 2, -18 ], [ 4, -44 ], [ 0, -10 ], [ 0, -22 ], [ 2, -10 ], [ 0, -14 ], [ 5, -35 ], [ 2, -18 ], [ 1, -11 ], [ 0, -29 ], [ -1, -9 ], [ 0, -8 ], [ -1, -10 ], [ -3, -12 ], [ -7, -50 ], [ -1, -10 ], [ -3, -16 ], [ -2, -7 ], [ -2, -28 ], [ 0, -30 ], [ 2, -21 ], [ 0, -25 ], [ -1, -6 ], [ -1, -6 ], [ -6, -19 ], [ -3, -13 ], [ -2, -14 ], [ -3, -27 ], [ -6, -28 ], [ -3, -12 ], [ -1, -10 ], [ -2, -12 ], [ 0, -21 ], [ -2, -12 ], [ 0, -18 ], [ 2, -9 ], [ 0, -7 ], [ 2, -7 ], [ 2, -7 ], [ 4, -6 ], [ 7, -17 ], [ 2, -8 ], [ 2, -5 ], [ 2, -10 ], [ 0, -18 ], [ -4, -15 ], [ -2, -8 ], [ -4, -5 ], [ -4, -6 ], [ -6, -3 ], [ -3, -3 ], [ -4, -1 ], [ -5, 0 ], [ -6, 1 ], [ -12, 3 ], [ -9, 4 ], [ -24, 14 ], [ -10, 4 ], [ -9, 5 ], [ -4, 2 ] ], [ [ 4192, 3971 ], [ 0, 5 ], [ 2, 2 ], [ 0, 5 ], [ 2, 5 ], [ 7, 15 ], [ 2, 4 ], [ 0, 3 ], [ 1, 7 ], [ 0, 11 ], [ -2, 15 ], [ 0, 14 ], [ 2, 9 ], [ 1, 8 ], [ 2, 4 ], [ 1, 2 ], [ 3, 5 ], [ 2, 1 ], [ 4, 0 ], [ 17, 1 ], [ 13, 2 ], [ 4, 1 ], [ 5, 1 ], [ 8, 5 ], [ 4, 4 ], [ 2, 4 ], [ 1, 3 ], [ 0, 8 ], [ -2, 4 ], [ -1, 8 ], [ -4, 8 ], [ -4, 11 ], [ -2, 4 ], [ -1, 4 ], [ -1, 3 ], [ 0, 9 ], [ 1, 3 ], [ 2, 7 ], [ 5, 11 ], [ 10, 9 ], [ 7, 5 ], [ 6, 4 ], [ 2, 1 ], [ 1, -1 ], [ 2, -2 ], [ 6, -8 ], [ 2, -3 ], [ 15, -13 ], [ 5, -2 ], [ 5, -2 ], [ 6, -2 ], [ 23, -6 ], [ 16, -4 ], [ 4, -1 ], [ 9, 0 ], [ 10, 2 ], [ 6, 2 ], [ 10, 3 ], [ 5, 4 ], [ 7, 5 ], [ 17, 14 ], [ 8, 4 ], [ 6, 5 ], [ 2, 1 ], [ 6, 0 ], [ 2, -1 ], [ 5, -5 ], [ 4, -4 ], [ 4, -5 ], [ 11, -4 ], [ 10, -5 ], [ 3, -1 ], [ 3, -1 ], [ 5, -6 ], [ 11, -13 ], [ 3, -3 ], [ 5, -4 ], [ 2, 0 ], [ 2, 2 ], [ 1, 2 ], [ 2, 2 ], [ 2, 3 ], [ 2, 8 ], [ 5, 19 ], [ 5, 21 ], [ 0, 5 ], [ 2, 3 ], [ 2, 3 ], [ 5, 7 ], [ 5, 7 ], [ 3, 3 ], [ 4, 2 ], [ 4, 1 ], [ 8, -2 ], [ 8, -3 ], [ 6, -1 ], [ 8, 0 ], [ 5, 1 ], [ 9, 2 ], [ 3, 0 ], [ 2, 2 ], [ 16, 12 ], [ 3, 5 ], [ 9, 1 ], [ 3, 0 ], [ 3, -2 ], [ 15, -16 ], [ 5, -3 ], [ 5, -4 ], [ 9, -3 ], [ 6, -1 ], [ 6, -1 ], [ 8, 1 ], [ 7, 1 ], [ 12, 5 ], [ 5, 1 ], [ 5, 1 ], [ 14, 1 ], [ 13, 1 ], [ 6, 2 ], [ 8, 4 ], [ 6, 2 ], [ 3, 4 ], [ 7, 7 ], [ 11, 12 ], [ 3, 5 ], [ 1, 1 ], [ 5, 0 ], [ 2, -1 ], [ 5, -6 ], [ 15, -21 ], [ 10, -12 ], [ 7, -7 ], [ 3, -4 ], [ 7, -16 ], [ 2, -5 ], [ 3, -5 ], [ 5, -4 ], [ 3, -5 ], [ 6, -4 ], [ 7, -7 ], [ 4, -3 ], [ 6, -5 ], [ 9, -3 ], [ 4, -2 ], [ 5, -4 ], [ 3, -3 ], [ 2, -4 ], [ 4, -6 ], [ 6, -17 ], [ 2, -6 ], [ 0, -6 ], [ 1, -4 ], [ -1, -5 ], [ -1, -2 ], [ -4, -10 ], [ -17, -35 ], [ -2, -6 ], [ -5, -9 ], [ -2, -10 ], [ -4, -12 ], [ -1, -10 ], [ -1, -13 ], [ -1, -10 ], [ 0, -43 ], [ -1, -11 ], [ -1, -8 ], [ -2, -18 ], [ -3, -19 ], [ -4, -20 ], [ -1, -8 ], [ 0, -9 ], [ 1, -6 ], [ 0, -4 ], [ 2, -8 ], [ 4, -10 ], [ 4, -10 ], [ 6, -15 ], [ 11, -21 ], [ 3, -5 ], [ 3, -6 ] ], [ [ 3273, 6288 ], [ -2, 0 ], [ -2, 1 ], [ -1, 2 ], [ -3, 4 ], [ 0, 1 ], [ -1, 0 ], [ -1, -3 ], [ -1, 2 ], [ -2, 0 ], [ -3, -13 ], [ -1, -2 ], [ -3, -3 ], [ -1, -1 ], [ 0, -1 ], [ -1, -4 ], [ 0, -2 ], [ 1, -7 ], [ 1, -3 ], [ -1, -2 ], [ -1, -2 ], [ -3, -4 ], [ -7, -9 ], [ -2, -3 ], [ -3, 0 ] ], [ [ 3236, 6239 ], [ -2, 1 ], [ -2, 1 ], [ -4, 0 ], [ -4, -1 ], [ -7, -1 ], [ -10, -3 ], [ -12, -7 ], [ -13, -8 ], [ -11, -4 ], [ -3, -2 ], [ -1, -3 ], [ -9, -12 ], [ -2, -2 ], [ -2, -4 ], [ -1, -2 ], [ 0, -3 ], [ 1, -1 ], [ 5, -2 ], [ 4, -1 ], [ 9, -2 ], [ 5, -1 ], [ 3, -1 ], [ 2, -1 ], [ 2, -1 ], [ 6, -9 ], [ 6, -12 ], [ 2, -6 ], [ 3, -13 ], [ 2, -5 ], [ 2, -3 ], [ 3, -5 ], [ 10, -10 ], [ 9, -16 ], [ 10, -10 ], [ 4, -7 ] ], [ [ 3241, 6083 ], [ 0, -3 ], [ -2, -5 ], [ -2, -3 ], [ -13, -5 ], [ 0, -1 ], [ -8, 1 ], [ -6, -1 ], [ -5, -3 ], [ -2, -1 ], [ -2, -1 ], [ -2, -4 ], [ -2, -4 ], [ 0, -2 ], [ -3, -10 ], [ -5, -10 ], [ -5, -8 ], [ 0, -2 ], [ 0, -1 ], [ -2, -2 ], [ 0, -4 ], [ 2, -3 ], [ 0, -3 ], [ 2, -4 ], [ 5, -5 ], [ 3, -2 ], [ 6, -5 ], [ 6, -4 ], [ 9, -5 ], [ 1, -1 ], [ 1, -1 ], [ 0, -3 ] ], [ [ 3217, 5978 ], [ -1, -4 ], [ -1, -3 ], [ 0, -16 ], [ 1, -10 ], [ 2, -9 ], [ 2, -7 ], [ 2, -7 ], [ 6, -14 ], [ 5, -6 ], [ 4, -8 ], [ 15, -14 ], [ 5, -4 ], [ 8, -5 ], [ 6, -5 ], [ 4, -5 ], [ 2, -7 ], [ 0, -3 ], [ 0, -11 ], [ 0, -5 ], [ 0, -3 ], [ -1, -6 ], [ -1, -3 ], [ -2, -4 ], [ -2, -4 ], [ -2, -2 ], [ -6, -3 ], [ -1, -2 ], [ -2, -4 ], [ 0, -1 ], [ -2, -8 ], [ -1, -5 ], [ 0, -7 ], [ 1, -1 ], [ 0, -3 ], [ 2, -6 ], [ 2, -4 ], [ 1, -4 ], [ 3, -4 ], [ 4, -5 ], [ 3, -2 ], [ 3, -2 ], [ 5, -5 ], [ 3, -2 ], [ 7, -2 ], [ 5, 0 ], [ 4, 1 ], [ 3, 1 ], [ 3, 2 ], [ 1, 0 ], [ 0, 2 ] ], [ [ 3307, 5749 ], [ 1, 0 ], [ 0, -2 ], [ 1, -3 ], [ 0, -1 ], [ 1, -4 ], [ 0, -28 ], [ -2, -27 ], [ 0, -8 ], [ 1, -2 ], [ 0, -3 ], [ 4, -8 ], [ 0, -3 ], [ 0, -7 ], [ -1, -10 ], [ -3, -9 ], [ -2, -10 ], [ 0, -12 ], [ 1, -7 ], [ 1, -4 ], [ 2, -7 ], [ 2, -3 ], [ 2, -5 ], [ 2, -3 ], [ 3, -2 ], [ 2, -4 ], [ 5, -2 ], [ 3, -1 ], [ 4, -2 ], [ 4, -1 ], [ 18, -4 ], [ 11, -2 ], [ 17, 0 ], [ 3, 1 ], [ 2, 0 ], [ 4, 5 ], [ 2, 8 ], [ 7, 25 ], [ 2, 7 ], [ 2, 4 ], [ 2, 7 ], [ 2, 3 ], [ 3, 7 ], [ 3, 2 ], [ 5, 1 ], [ 3, 1 ], [ 9, 2 ], [ 5, 3 ], [ 6, 2 ], [ 4, 1 ], [ 11, 8 ], [ 13, 9 ], [ 12, 6 ], [ 4, 3 ], [ 8, 6 ], [ 4, 7 ], [ 27, 38 ], [ 10, 13 ], [ 2, 5 ], [ 2, 3 ], [ 7, 4 ], [ 10, 7 ], [ 11, 3 ], [ 4, 3 ], [ 7, 7 ], [ 6, 7 ], [ 4, 8 ], [ 6, 12 ], [ 5, 10 ], [ 9, 8 ], [ 9, 5 ], [ 12, 6 ], [ 1, 1 ], [ 2, 0 ] ], [ [ 3634, 5823 ], [ 3, 0 ], [ 7, 0 ], [ 3, -3 ], [ 2, -5 ], [ 0, -1 ], [ 0, -1 ], [ 4, 0 ], [ 0, -1 ], [ 0, -2 ], [ 1, -5 ] ], [ [ 3654, 5805 ], [ 1, -2 ], [ 1, -6 ], [ 1, -14 ], [ 1, -9 ], [ 0, -9 ], [ -3, -21 ], [ -4, -19 ], [ -2, -4 ], [ 0, -6 ], [ 0, -6 ], [ 0, -15 ], [ 0, -7 ], [ 0, -34 ], [ 0, -9 ], [ -1, -10 ], [ -1, -8 ], [ -2, -8 ], [ -1, -8 ], [ -5, -13 ], [ -3, -7 ], [ -2, -5 ], [ -5, -7 ], [ -6, -7 ], [ -3, -6 ], [ -10, -20 ], [ -4, -10 ], [ -2, -8 ], [ -3, -5 ], [ 0, -8 ], [ 3, -22 ], [ 0, -11 ], [ -2, -9 ], [ -1, -10 ], [ -1, -8 ], [ -2, -17 ], [ -2, -5 ], [ 0, -28 ], [ 2, -7 ], [ 0, -4 ], [ 1, -7 ], [ 2, -4 ], [ 5, -13 ], [ 7, -13 ], [ 2, -7 ], [ 0, -3 ], [ 0, -2 ], [ 2, -6 ], [ -2, -2 ], [ 0, -9 ], [ 0, -7 ], [ -4, -12 ], [ -2, -7 ], [ -11, -25 ], [ -4, -12 ], [ -1, -8 ], [ -1, -7 ], [ -1, -4 ], [ 0, -2 ] ], [ [ 3591, 5243 ], [ -1, 0 ], [ -1, 1 ], [ -2, 3 ], [ -3, 3 ], [ -4, 15 ], [ -1, 8 ], [ -4, 11 ], [ -1, 12 ], [ -1, 11 ], [ -2, 10 ], [ -2, 23 ], [ -1, 25 ], [ -1, 43 ], [ 0, 9 ], [ -2, 6 ], [ -3, 9 ], [ -2, 4 ], [ -2, 1 ], [ -2, 1 ], [ -2, 1 ], [ -3, -1 ], [ -3, -2 ], [ -11, -8 ], [ -7, -3 ], [ -6, -2 ], [ -15, -6 ], [ -3, -1 ], [ -3, -3 ], [ -5, -6 ], [ -8, -8 ], [ -8, -13 ], [ -4, -4 ], [ -6, -6 ], [ -4, -4 ], [ -5, -5 ], [ -7, -2 ], [ -8, -3 ], [ -16, -4 ], [ -3, -1 ], [ -5, 1 ], [ -3, 0 ], [ -7, 5 ], [ -4, 2 ], [ -6, 7 ], [ -3, 2 ], [ -8, 3 ], [ -4, 1 ], [ -3, 0 ], [ -5, -1 ], [ -5, 0 ], [ -2, -1 ], [ -4, -2 ], [ -4, -4 ], [ -10, -6 ], [ -5, -5 ], [ -7, -9 ], [ -4, -3 ], [ -6, -3 ], [ -2, -1 ], [ -7, 0 ], [ -5, 2 ], [ -5, 5 ], [ -9, 12 ], [ -7, 6 ], [ -4, 6 ], [ -10, 5 ], [ -4, 3 ], [ -5, 1 ], [ -5, 1 ], [ -5, 1 ], [ -3, -1 ], [ -1, 0 ], [ -2, -1 ], [ -3, 3 ], [ -3, 0 ], [ -2, 1 ], [ -4, -1 ], [ -7, -1 ], [ -4, -2 ], [ -8, -4 ], [ -26, -13 ], [ -13, -8 ], [ -8, -4 ], [ -5, -6 ], [ -9, -5 ], [ -18, -19 ], [ -9, -9 ], [ -8, -7 ], [ -12, -8 ], [ -6, -4 ], [ -5, -8 ], [ -5, -7 ], [ -16, -24 ], [ -2, -3 ], [ -15, -15 ], [ -3, -2 ], [ -14, -6 ], [ -6, -3 ], [ -3, -1 ], [ -8, -9 ], [ -4, -4 ], [ -4, -7 ], [ -10, -16 ], [ -10, -23 ], [ -14, -23 ], [ -19, -38 ], [ -6, -13 ], [ -9, -25 ], [ -5, -21 ], [ -3, -8 ], [ -2, -4 ], [ -1, -3 ], [ -3, -3 ], [ -7, -9 ], [ -4, -4 ], [ -5, -8 ], [ -5, -8 ], [ -3, -10 ], [ -2, -10 ], [ -1, -6 ], [ 0, -15 ], [ -1, -8 ], [ 0, -4 ], [ -2, -6 ], [ -1, -3 ], [ -2, -3 ], [ -5, -7 ], [ -3, -7 ], [ -2, -3 ], [ -4, -5 ], [ -3, -2 ], [ -2, -1 ], [ -7, 0 ], [ -3, 2 ], [ -2, 3 ], [ -2, 3 ], [ -15, 15 ], [ -3, 4 ], [ -3, 2 ], [ -8, 6 ], [ -8, 4 ], [ -2, 0 ], [ -6, 6 ], [ -1, 2 ], [ -2, 6 ], [ -7, 23 ], [ -5, 18 ], [ -5, 13 ], [ -3, 8 ], [ -4, 9 ], [ -2, 5 ], [ -2, 3 ], [ -3, 5 ], [ -4, 2 ], [ -6, 9 ], [ -6, 7 ], [ -3, 1 ], [ -6, 0 ], [ -2, -1 ], [ -2, -4 ], [ -2, -3 ], [ -3, -3 ], [ -9, -14 ], [ -3, -3 ], [ -4, -6 ], [ -4, -3 ], [ -13, -5 ], [ -3, 0 ], [ -3, -2 ], [ -3, 2 ], [ -10, 2 ], [ -6, 0 ], [ -7, -4 ], [ -6, -4 ], [ -16, -10 ], [ -6, -6 ], [ -6, -4 ], [ -21, -20 ] ], [ [ 2803, 5901 ], [ 1, 0 ], [ 0, 1 ], [ 2, 0 ], [ 8, 12 ], [ 7, 8 ], [ 16, 23 ], [ 6, 7 ], [ 5, 7 ], [ 11, 11 ], [ 5, 3 ], [ 5, 4 ], [ 3, 1 ], [ 6, 2 ], [ 17, 2 ], [ 27, 8 ], [ 10, 1 ], [ 5, 0 ], [ 6, 0 ], [ 4, -1 ], [ 10, -5 ], [ 3, -1 ], [ 2, 1 ], [ 8, 3 ], [ 3, 1 ], [ 9, 0 ], [ 14, 1 ], [ 4, 1 ], [ 8, 2 ], [ 15, 8 ], [ 5, 1 ], [ 3, 2 ], [ 5, 7 ], [ 2, 3 ], [ 0, 4 ], [ 1, 3 ], [ 0, 6 ], [ 1, 11 ], [ 0, 4 ], [ 1, 8 ], [ 1, 4 ], [ 4, 13 ], [ 2, 4 ], [ 8, 19 ], [ 3, 7 ], [ 4, 9 ], [ 5, 18 ], [ 2, 6 ], [ 0, 3 ], [ 4, 7 ], [ 3, 6 ], [ 14, 13 ], [ 4, 3 ], [ 8, 8 ], [ 5, 8 ], [ 4, 5 ], [ 2, 6 ], [ 2, 3 ], [ 3, 8 ], [ 2, 8 ], [ 2, 7 ], [ 2, 18 ], [ 2, 18 ], [ 2, 8 ], [ 0, 6 ], [ 2, 3 ], [ 1, 3 ], [ 11, 16 ], [ 1, 2 ], [ 2, 6 ], [ 4, 21 ], [ 7, 21 ], [ 0, 21 ], [ -4, 17 ], [ -1, 6 ], [ -1, 9 ], [ 0, 17 ], [ 1, 5 ], [ 1, 7 ], [ 0, 8 ], [ 3, 7 ], [ 1, 5 ], [ 1, 2 ], [ 0, 2 ], [ 2, -3 ], [ 7, -12 ], [ 3, -1 ], [ 2, -2 ], [ 5, -2 ], [ 9, -5 ], [ 7, -2 ], [ 6, -6 ], [ 6, -3 ], [ 4, -5 ], [ 4, -4 ], [ 2, -2 ], [ 2, -5 ], [ 2, -7 ], [ 3, -10 ], [ 0, -5 ], [ 3, -7 ], [ 1, -3 ], [ 5, -5 ], [ 3, -2 ], [ 3, -2 ], [ 9, -2 ], [ 4, -1 ], [ 3, -1 ], [ 5, -6 ], [ 7, -9 ], [ 7, -6 ], [ 2, -4 ], [ 1, -3 ], [ 1, -3 ], [ 0, -15 ], [ -1, -4 ], [ -2, -8 ] ], [ [ 3406, 5900 ], [ -1, -1 ], [ 0, -3 ], [ -1, -4 ], [ -1, -9 ], [ 0, -15 ], [ 1, -6 ], [ 1, -1 ], [ 1, -3 ], [ 1, -3 ], [ 1, -3 ], [ 2, -1 ], [ 0, -2 ], [ 2, -1 ], [ 2, -3 ], [ 10, 0 ], [ 3, 1 ], [ 15, 5 ], [ 14, 1 ], [ 7, 3 ], [ 2, 0 ], [ 3, -1 ], [ 4, -2 ], [ 4, -2 ], [ 6, -8 ], [ 2, -2 ], [ 2, -1 ], [ 3, -2 ], [ 5, 2 ], [ 3, 2 ], [ 1, 1 ], [ 1, 1 ], [ 1, 1 ], [ 1, 2 ], [ 0, 3 ], [ 0, 3 ], [ 0, 20 ], [ 0, 10 ], [ 2, 4 ], [ 2, 3 ], [ 0, 2 ], [ 2, 1 ], [ 2, 1 ], [ 4, 1 ], [ 7, 0 ] ], [ [ 3520, 5894 ], [ 0, -1 ], [ 3, -1 ], [ 10, -12 ], [ 4, -6 ], [ 4, -3 ], [ 7, -6 ], [ 7, -3 ], [ 5, -1 ], [ 13, 0 ], [ 4, 1 ], [ 3, 1 ], [ 11, 7 ], [ 7, 3 ], [ 8, 7 ], [ 5, 3 ], [ 6, 8 ], [ 2, 4 ], [ 1, 5 ], [ 3, 10 ], [ 1, 2 ], [ 2, 3 ], [ 1, 3 ], [ 2, 3 ], [ 3, 3 ], [ 2, 1 ], [ 2, 3 ], [ 2, 0 ], [ 2, 1 ], [ 4, 0 ], [ 2, -1 ], [ 5, -3 ], [ 2, -3 ], [ 1, -1 ], [ 1, -1 ], [ 0, -8 ], [ -1, -3 ], [ -15, -16 ], [ -1, -1 ], [ -4, -7 ], [ 0, -3 ], [ -2, -3 ], [ 0, -6 ], [ -1, -3 ], [ 0, -16 ], [ 1, -9 ], [ 2, -15 ], [ 0, -7 ] ], [ [ 3307, 5749 ], [ -1, 1 ], [ -6, 1 ], [ -2, 2 ], [ -4, 1 ], [ -5, 6 ], [ -1, 3 ], [ -1, 1 ], [ 0, 3 ], [ -2, 6 ], [ 2, 4 ], [ 0, 6 ], [ 2, 10 ], [ 7, 26 ], [ 0, 4 ], [ 2, 6 ], [ 0, 7 ], [ -2, 16 ], [ 2, 3 ], [ 0, 3 ], [ 0, 4 ], [ 3, 7 ], [ 1, 4 ], [ 7, 19 ], [ 1, 3 ], [ 2, 3 ], [ 1, 4 ], [ 4, 1 ], [ 11, 9 ], [ 8, 6 ], [ 0, -2 ], [ 0, -3 ], [ 3, -12 ], [ 0, -8 ], [ 1, -9 ], [ 0, -2 ], [ 3, -4 ], [ 1, -2 ], [ 6, -2 ], [ 5, -3 ], [ 1, 0 ], [ 2, 1 ], [ 9, 10 ], [ 5, 3 ], [ 2, 1 ], [ 8, -1 ], [ 5, 0 ], [ 2, 3 ], [ 4, 1 ], [ 11, 10 ], [ 1, 1 ], [ 1, 0 ] ], [ [ 3591, 5243 ], [ 1, -2 ], [ 0, -1 ], [ 1, -3 ], [ 0, -3 ], [ -1, -5 ], [ 0, -3 ], [ -3, -7 ], [ -3, -4 ], [ -6, -6 ], [ -5, -4 ], [ -14, -8 ], [ -3, -2 ], [ -3, -1 ], [ -4, -1 ], [ -7, 0 ], [ -9, 4 ], [ -9, 5 ], [ -8, 12 ], [ -4, 3 ], [ -3, 2 ], [ -6, 1 ], [ -28, 0 ], [ -7, -2 ], [ -3, -1 ], [ -4, -1 ], [ 0, -2 ], [ -3, -4 ], [ -2, -2 ], [ 0, -2 ], [ -1, -2 ], [ 0, -5 ], [ 1, -1 ], [ 5, -10 ], [ 4, -9 ], [ 2, -3 ], [ 2, -8 ], [ 1, -6 ], [ 3, -6 ], [ 0, -9 ], [ 1, -19 ], [ 0, -10 ], [ -2, -11 ], [ -5, -19 ], [ -2, -8 ], [ 0, -4 ], [ -2, -5 ], [ -7, -11 ], [ -3, -5 ], [ -4, -7 ], [ -2, -9 ], [ -1, -10 ], [ -2, -12 ], [ 0, -10 ], [ -2, -20 ], [ 0, -8 ], [ 0, -7 ], [ -1, -4 ], [ -2, -7 ], [ -2, -4 ], [ -6, -13 ], [ -2, -6 ], [ -2, -8 ], [ 0, -6 ], [ -2, -5 ], [ 0, -12 ], [ 0, -14 ], [ -2, -15 ], [ 0, -12 ], [ 2, -8 ], [ 0, -7 ], [ 4, -24 ], [ 1, -7 ], [ 0, -7 ], [ -1, -3 ], [ -1, -7 ], [ -1, -5 ], [ -5, -15 ], [ -2, -6 ], [ 0, -4 ], [ -1, -5 ], [ 0, -5 ], [ -1, -4 ], [ 1, -11 ], [ 2, -15 ], [ 1, -5 ], [ 1, -6 ], [ 2, -3 ], [ 5, -7 ], [ 4, -2 ], [ 2, -4 ], [ 4, -2 ], [ 6, -2 ], [ 3, -1 ], [ 1, -2 ], [ 3, -4 ], [ 1, -3 ], [ 7, -20 ], [ 2, -2 ], [ 5, -12 ], [ 4, -6 ], [ 4, -4 ], [ 9, -10 ], [ 5, -7 ], [ 3, -5 ], [ 3, -6 ], [ 7, -17 ], [ 1, -3 ], [ 2, -2 ], [ 5, -3 ], [ 4, 0 ], [ 2, 1 ], [ 1, 3 ], [ 5, 6 ], [ 2, 4 ], [ 4, 2 ], [ 2, 1 ], [ 6, 2 ], [ 7, 2 ], [ 6, 2 ], [ 3, -2 ], [ 1, -1 ], [ 4, -3 ], [ 1, -2 ], [ 3, -7 ], [ 11, -24 ], [ 4, -10 ], [ 10, -9 ], [ 4, -1 ], [ 5, -3 ], [ 15, -2 ], [ 14, -3 ], [ 8, -1 ], [ 10, 0 ], [ 3, 2 ], [ 3, 1 ], [ 6, 6 ], [ 6, 6 ], [ 4, 7 ], [ 5, 9 ], [ 4, 10 ], [ 6, 11 ], [ 2, 6 ], [ 5, 15 ], [ 3, 10 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2 ], [ 4, 0 ], [ 1, -1 ], [ 1, -4 ], [ 1, -2 ], [ 1, -13 ], [ 2, -12 ], [ 4, -29 ], [ 0, -13 ], [ 2, -14 ], [ 0, -6 ], [ 2, -4 ], [ 3, -10 ], [ 2, -3 ], [ 1, -5 ], [ 3, -3 ], [ 2, -3 ], [ 4, -5 ], [ 3, -1 ], [ 4, 0 ], [ 8, 4 ], [ 2, 5 ], [ 6, 10 ], [ 4, 3 ], [ 3, 6 ], [ 10, 12 ], [ 11, 17 ], [ 11, 12 ], [ 3, 3 ], [ 2, 1 ], [ 3, 1 ], [ 2, -1 ], [ 2, -2 ], [ 1, -1 ], [ 2, -3 ], [ 2, -5 ], [ 6, -14 ], [ 1, -5 ], [ 1, -9 ], [ 1, -12 ], [ 0, -18 ], [ -1, -5 ], [ 0, -6 ], [ -3, -16 ], [ 0, -6 ], [ -1, -4 ], [ 1, -5 ], [ 0, -3 ], [ 1, -5 ], [ 1, -3 ], [ 2, -3 ], [ 1, -4 ], [ 2, -2 ], [ 0, -1 ], [ 2, -1 ], [ 5, 0 ], [ 10, 6 ], [ 4, 2 ], [ 3, 3 ], [ 14, 12 ], [ 5, 6 ], [ 10, 5 ], [ 14, 8 ], [ 4, 2 ], [ 3, 2 ], [ 5, 1 ], [ 18, 0 ], [ 8, 1 ], [ 11, 2 ], [ 15, 8 ], [ 8, 2 ], [ 5, 0 ], [ 4, -2 ], [ 2, -2 ], [ 3, -4 ], [ 3, -3 ], [ 3, -6 ], [ 2, -5 ], [ 3, -11 ], [ 2, -7 ], [ 3, -11 ], [ 4, -12 ], [ 2, -6 ], [ 2, -4 ], [ 1, -13 ], [ 2, -6 ], [ 1, -4 ], [ 5, -10 ], [ 2, -4 ], [ 4, -6 ], [ 6, -3 ], [ 5, -3 ], [ 5, -4 ], [ 6, -1 ], [ 6, -1 ], [ 2, 0 ], [ 2, 1 ] ], [ [ 4044, 4386 ], [ 0, -22 ], [ -2, -13 ], [ 2, -7 ], [ 2, -18 ], [ 0, -2 ], [ 1, -8 ], [ 3, -11 ], [ 3, -14 ], [ 3, -13 ], [ 0, -23 ], [ -1, -3 ], [ 0, -4 ], [ -1, -3 ], [ -1, -1 ], [ -3, -2 ], [ -4, -4 ], [ -9, -8 ], [ -5, -3 ], [ -2, -3 ], [ -3, -5 ], [ -6, -13 ], [ -9, -14 ], [ -2, -4 ], [ -1, -2 ], [ 0, -3 ] ], [ [ 3733, 6027 ], [ 2, 0 ], [ 1, -2 ], [ 4, -7 ], [ 0, -4 ], [ -1, -3 ], [ 0, -6 ], [ 1, -4 ], [ 0, -1 ], [ 2, -5 ], [ 2, -3 ], [ 2, -1 ], [ 2, 0 ], [ 0, 1 ], [ 7, 6 ], [ 4, 4 ], [ 2, 1 ], [ 0, -1 ] ], [ [ 3761, 6002 ], [ 0, -2 ], [ 1, -6 ], [ 1, -6 ], [ 2, -6 ], [ 2, -4 ], [ 1, -4 ], [ 3, -3 ], [ 8, -9 ], [ 3, -3 ], [ 3, -10 ], [ 4, -13 ], [ 3, -12 ], [ 0, -13 ], [ 1, -11 ], [ 1, -10 ], [ 3, -27 ], [ 1, -10 ], [ 0, -7 ], [ -1, -7 ], [ -1, -5 ], [ -1, -4 ], [ -1, -7 ], [ -2, -4 ], [ -1, -5 ], [ -3, -3 ], [ -4, -7 ], [ -8, -8 ], [ -7, -6 ], [ -3, -6 ], [ -3, -9 ], [ -1, -2 ], [ -3, -3 ], [ -3, -3 ], [ -2, -1 ], [ -6, -2 ], [ -6, 1 ], [ -7, 2 ], [ -6, 3 ], [ -6, 3 ], [ -4, 3 ], [ -5, 6 ], [ -4, 5 ], [ -7, 9 ], [ -3, 5 ], [ -5, 2 ], [ -6, 6 ], [ -4, 2 ], [ -5, 2 ], [ -7, 2 ], [ -3, 0 ], [ -3, 1 ], [ -3, -1 ], [ -3, -2 ], [ -3, -1 ], [ -3, -4 ], [ -1, -2 ], [ 0, -1 ] ], [ [ 3520, 5894 ], [ -6, 7 ], [ -2, 3 ], [ -1, 4 ], [ -2, 2 ], [ -1, 2 ], [ 0, 2 ], [ -1, 7 ], [ 1, 4 ], [ 0, 3 ], [ 1, 2 ], [ 0, 1 ], [ 3, 1 ], [ 2, 1 ], [ 12, 5 ], [ 4, 2 ], [ 2, 1 ], [ 3, 6 ], [ 1, 3 ], [ 0, 1 ], [ 1, 0 ], [ 2, -2 ], [ 3, 0 ], [ 1, 2 ] ], [ [ 3543, 5951 ], [ 6, 1 ], [ 3, 0 ], [ 3, 2 ], [ 1, 2 ], [ 2, 4 ], [ 2, 2 ], [ 4, 9 ], [ 3, 1 ], [ 2, 3 ], [ 5, 6 ], [ 1, 2 ], [ 0, 6 ], [ 0, 5 ], [ 2, 15 ], [ 0, 3 ], [ 0, 5 ], [ 5, 21 ], [ 1, 3 ], [ 3, 8 ], [ 5, 14 ], [ 1, 3 ], [ 1, 1 ], [ 1, 1 ], [ 4, 0 ], [ 0, -2 ], [ 1, -2 ] ], [ [ 3599, 6064 ], [ 3, -5 ], [ 4, -8 ], [ 1, -3 ], [ 0, -1 ], [ 1, -2 ], [ 0, -1 ], [ 9, 0 ], [ 4, 3 ], [ 17, 5 ], [ 4, 1 ], [ 4, 0 ], [ 3, -2 ], [ 2, 0 ], [ 2, -3 ], [ 8, -20 ], [ 4, -9 ], [ 0, -2 ], [ 2, -6 ], [ 0, -2 ], [ 1, -11 ], [ 0, -8 ], [ 2, -9 ], [ 2, -1 ], [ 1, -2 ], [ 1, -3 ], [ 2, -2 ], [ 5, -2 ], [ 6, 0 ], [ 2, 1 ], [ 2, 2 ], [ 1, 1 ], [ 7, 7 ], [ 9, 10 ], [ 12, 9 ], [ 4, 4 ], [ 3, 6 ], [ 3, 4 ], [ 1, 4 ], [ 1, 2 ], [ 1, 3 ], [ 0, 3 ] ], [ [ 3465, 6041 ], [ 19, -20 ], [ 8, -11 ], [ 2, -2 ], [ 2, -1 ], [ 7, -3 ], [ 11, -5 ], [ 8, -5 ], [ 2, -2 ], [ 3, -3 ], [ 5, -8 ], [ 7, -8 ], [ 2, -3 ], [ 0, -3 ], [ 2, -4 ], [ 1, -4 ], [ 0, -7 ], [ -1, -1 ] ], [ [ 3406, 5900 ], [ 4, 12 ], [ 3, 14 ], [ 5, 14 ], [ 2, 12 ], [ 4, 25 ], [ 5, 24 ], [ 0, 8 ], [ 0, 4 ], [ 0, 7 ], [ 0, 2 ] ], [ [ 3429, 6022 ], [ 2, 3 ], [ 2, 0 ], [ 5, -2 ], [ 2, -2 ], [ 1, 0 ], [ 1, 1 ], [ 2, 7 ], [ 4, 2 ], [ 4, 3 ], [ 3, 1 ], [ 1, 3 ], [ 3, 3 ], [ 2, 2 ], [ 1, 0 ], [ 1, -2 ], [ 2, 0 ] ], [ [ 3217, 5978 ], [ 5, -3 ], [ 5, 0 ], [ 12, 5 ], [ 6, 2 ], [ 3, 2 ], [ 3, 1 ], [ 2, 3 ], [ 4, 7 ], [ 5, 9 ], [ 3, 8 ], [ 3, 6 ], [ 3, 3 ], [ 8, 7 ], [ 3, 3 ], [ 3, 4 ], [ 3, 4 ], [ 1, 2 ], [ 2, 4 ], [ 0, 6 ], [ 2, 12 ], [ 0, 5 ], [ 1, 3 ], [ 1, 1 ], [ 0, 1 ] ], [ [ 3295, 6073 ], [ 9, 2 ], [ 3, 0 ], [ 3, -1 ], [ 1, 0 ], [ 11, 5 ], [ 6, 0 ], [ 2, 1 ], [ 4, 2 ], [ 5, 2 ], [ 5, 4 ], [ 1, 1 ], [ 6, 1 ], [ 6, 0 ], [ 5, 0 ], [ 4, -1 ], [ 2, 0 ], [ 8, 1 ], [ 13, 0 ], [ 2, 0 ], [ 3, 0 ], [ 10, 7 ], [ 4, 1 ], [ 2, 1 ], [ 2, 0 ], [ 2, -1 ], [ 4, -4 ], [ 2, -3 ], [ 1, -4 ], [ 2, -6 ], [ 1, -10 ], [ 3, -34 ], [ 0, -12 ], [ 2, -3 ] ], [ [ 3599, 6064 ], [ 6, 3 ], [ 4, 0 ], [ 0, 1 ], [ 1, 2 ], [ -1, 2 ], [ 0, 1 ], [ -3, 4 ], [ 0, 4 ], [ 2, 2 ], [ 3, 1 ], [ 1, 2 ], [ 0, 14 ] ], [ [ 3612, 6100 ], [ 5, 1 ], [ 0, -1 ], [ 1, -2 ], [ 2, 1 ], [ 8, 0 ], [ 4, -2 ], [ 4, -4 ], [ 4, -3 ], [ 11, -9 ], [ 2, -1 ], [ 4, 0 ], [ 5, 2 ], [ 3, 2 ], [ 5, 6 ], [ 2, 3 ], [ 1, 1 ], [ 6, 0 ], [ 3, -3 ], [ 2, -2 ], [ 5, -10 ], [ 2, -4 ], [ 0, -2 ], [ 2, -1 ], [ 2, 0 ], [ 13, 3 ], [ 2, -1 ], [ 3, -2 ], [ 1, -2 ], [ 4, -4 ], [ 6, -17 ], [ 1, -6 ], [ 4, -6 ], [ 3, -6 ], [ 1, -3 ], [ 0, -1 ] ], [ [ 3643, 6397 ], [ -3, -1 ], [ -8, -12 ], [ -3, -8 ], [ -5, -12 ], [ -12, -31 ], [ -3, -6 ], [ -5, -16 ], [ -3, -6 ], [ -2, -6 ], [ -3, -3 ], [ -3, -6 ], [ -3, -3 ], [ -6, -5 ], [ -3, -3 ], [ -4, 0 ], [ -2, 0 ], [ -8, 1 ], [ -9, 5 ], [ -13, 5 ], [ -2, 0 ], [ -2, -1 ], [ -2, 0 ], [ -4, -4 ], [ -2, -5 ], [ -3, -4 ], [ -4, -9 ], [ -1, -7 ], [ -1, -4 ], [ 1, -4 ], [ 0, -3 ], [ 1, -1 ], [ 4, -9 ], [ 2, -4 ], [ 1, -6 ], [ 0, -2 ], [ -1, -4 ], [ -1, -6 ], [ -5, -23 ], [ -4, -23 ], [ 0, -3 ], [ 0, -1 ] ], [ [ 3522, 6167 ], [ -9, -14 ], [ -1, -2 ], [ -3, -1 ], [ -2, -1 ], [ -15, -8 ], [ -8, -4 ], [ -10, -5 ], [ -4, -2 ], [ -3, -4 ], [ -5, -6 ] ], [ [ 3462, 6120 ], [ 0, 1 ], [ -1, 1 ], [ 1, 4 ], [ 0, 4 ], [ 1, 4 ], [ 2, 6 ], [ 3, 7 ], [ 16, 24 ], [ 2, 7 ], [ 2, 4 ], [ 2, 8 ], [ 0, 15 ], [ -2, 5 ], [ -2, 8 ], [ -4, 4 ], [ -4, 7 ], [ -7, 6 ], [ -8, 6 ], [ -1, 4 ], [ -3, 3 ], [ -4, 9 ], [ -3, 2 ], [ -8, 6 ], [ -7, 4 ], [ -10, 8 ], [ -4, 2 ], [ -2, 2 ], [ -3, 5 ], [ -8, 10 ], [ -3, 5 ], [ -2, 7 ], [ -2, 8 ], [ -2, 4 ], [ 0, 5 ], [ -1, 4 ], [ 0, 7 ], [ 1, 3 ], [ 0, 5 ], [ 1, 4 ], [ 1, 1 ] ], [ [ 3403, 6349 ], [ 1, 3 ] ], [ [ 3404, 6352 ], [ 1, 3 ], [ 2, 1 ], [ 3, 2 ], [ 15, 11 ], [ 6, 7 ], [ 2, 2 ], [ 6, 8 ], [ 5, 5 ], [ 4, 7 ], [ 4, 3 ], [ 4, 3 ], [ 4, 1 ], [ 21, 5 ], [ 6, 5 ], [ 5, 3 ], [ 2, 1 ], [ 2, 4 ], [ 1, 2 ], [ 9, 18 ], [ 2, 4 ], [ 6, 4 ], [ 9, 7 ], [ 5, 3 ], [ 8, 3 ], [ 18, 3 ], [ 9, 1 ], [ 16, 7 ], [ 15, 5 ], [ 5, 1 ], [ 1, 0 ], [ 0, -43 ], [ 1, -4 ], [ 1, -4 ], [ 0, -1 ], [ 3, -1 ], [ 3, 0 ], [ 5, 2 ], [ 4, 0 ], [ 7, 5 ], [ 2, 1 ], [ 2, 0 ], [ 4, -2 ], [ 4, -6 ], [ 3, -3 ], [ 1, -2 ], [ 3, -4 ], [ 1, -3 ], [ 0, -5 ], [ 1, -3 ], [ 0, -3 ], [ -1, -5 ], [ 0, -2 ], [ -1, -1 ] ], [ [ 3749, 6296 ], [ 0, -3 ], [ 2, -4 ], [ 3, -1 ], [ 4, -6 ], [ 13, -13 ], [ 6, -7 ], [ 3, -4 ], [ 2, -3 ], [ 0, -5 ], [ 2, -5 ], [ 1, -6 ], [ 3, -16 ], [ 3, -7 ], [ 2, -5 ], [ 1, -3 ], [ 4, -7 ], [ 3, -3 ], [ 4, -6 ], [ 7, -4 ], [ 12, -10 ], [ 6, -6 ], [ 2, -2 ], [ 3, -3 ], [ 9, -17 ], [ 5, -8 ], [ 2, -4 ], [ 3, -12 ], [ 1, -6 ], [ 0, -20 ], [ -1, -3 ], [ -2, -10 ], [ -1, -3 ], [ -2, -6 ], [ -2, -4 ], [ -3, -3 ], [ -3, -4 ], [ -4, -6 ], [ -7, -6 ], [ -25, -20 ], [ -13, -10 ], [ -27, -17 ], [ -4, -6 ] ], [ [ 3612, 6100 ], [ -1, 0 ], [ 0, 2 ], [ -1, 5 ], [ -5, 7 ], [ -3, 5 ], [ -1, 4 ], [ -1, 7 ], [ -1, 1 ], [ -3, 0 ], [ -9, -3 ], [ -3, -1 ], [ -3, -1 ], [ -2, 1 ], [ -2, 0 ], [ -9, 3 ], [ -8, 4 ], [ -2, 4 ], [ -3, 2 ], [ -3, 4 ], [ -1, 4 ], [ -6, 12 ], [ -2, 4 ], [ -1, 2 ], [ -5, 2 ], [ -4, -1 ], [ -11, -3 ], [ 0, 3 ] ], [ [ 3643, 6397 ], [ 4, -18 ], [ 6, -1 ], [ 3, 0 ], [ 6, 1 ], [ 8, 3 ], [ 4, 3 ], [ 7, 3 ], [ 4, 1 ], [ 2, 1 ], [ 4, 0 ], [ 1, -1 ], [ 1, -1 ], [ 0, -3 ], [ -1, -7 ], [ -3, -14 ], [ -2, -5 ], [ 0, -1 ], [ 0, -4 ], [ 2, -16 ], [ 0, -3 ], [ 2, -7 ], [ 0, -8 ], [ 3, -7 ], [ 1, -4 ], [ 5, -9 ], [ 4, -4 ], [ 4, -5 ], [ 4, -2 ], [ 2, -1 ], [ 6, 0 ], [ 5, 1 ], [ 14, 1 ], [ 5, 2 ], [ 5, 4 ] ], [ [ 3241, 6083 ], [ 2, 0 ], [ 3, 1 ], [ 1, 2 ], [ 5, -3 ], [ 11, 0 ], [ 2, -1 ], [ 10, -2 ], [ 16, 0 ], [ 4, -2 ], [ 0, -5 ] ], [ [ 3349, 6240 ], [ -1, 2 ], [ 0, 7 ], [ -3, 11 ], [ -5, 12 ], [ 0, 7 ], [ 3, 4 ], [ 2, 6 ], [ 0, 4 ], [ -2, 6 ], [ -2, 0 ], [ 0, 1 ] ], [ [ 3341, 6300 ], [ 6, -1 ], [ 2, 1 ], [ 1, 0 ], [ 1, -1 ], [ 9, -10 ], [ 5, -2 ], [ 2, -2 ], [ 5, 0 ], [ 2, 1 ], [ 2, 2 ], [ 2, 1 ], [ 3, 0 ], [ 4, -2 ], [ 2, -4 ], [ 1, -3 ], [ 0, -4 ], [ -1, -4 ], [ -2, -3 ], [ -3, -3 ], [ -5, -6 ], [ -9, -7 ], [ -2, -2 ], [ -2, -2 ], [ -2, -4 ], [ -5, -9 ], [ -1, -3 ], [ 0, -1 ], [ -1, -1 ], [ -2, 0 ], [ -2, 4 ], [ -2, 4 ], [ 0, 1 ] ], [ [ 3273, 6288 ], [ 2, 1 ], [ 2, -1 ], [ 0, -2 ], [ 2, -1 ], [ 0, -4 ], [ 0, -2 ], [ 2, -14 ], [ 1, -8 ], [ 1, -6 ], [ 1, -3 ], [ 3, -3 ], [ 1, -4 ], [ 2, -2 ], [ 2, 0 ], [ 8, 2 ], [ 15, 1 ], [ 7, -1 ], [ 15, -1 ] ], [ [ 3337, 6240 ], [ -1, -11 ], [ -2, -9 ], [ -2, -3 ], [ -1, -2 ], [ -2, -2 ], [ -4, -1 ], [ -6, -1 ], [ -7, 0 ], [ -6, -1 ], [ -4, -1 ], [ -8, -6 ], [ -17, -10 ], [ -7, -3 ], [ -5, 0 ], [ -3, 0 ], [ -2, 0 ], [ -10, 10 ], [ -3, 6 ], [ -3, 5 ], [ -3, 9 ], [ -4, 17 ], [ -1, 1 ], [ 0, 1 ] ], [ [ 3465, 6041 ], [ 7, 6 ], [ 2, 1 ], [ 1, 2 ], [ 0, 4 ], [ -4, 6 ], [ 0, 2 ], [ 1, 2 ], [ 4, 4 ], [ 2, 3 ], [ 0, 12 ], [ -1, 5 ], [ 0, 2 ], [ -2, 3 ], [ -1, 4 ], [ -2, 2 ], [ -5, 4 ], [ -2, 4 ], [ 0, 3 ], [ -2, 8 ], [ 0, 2 ], [ -1, 0 ] ], [ [ 3337, 6240 ], [ 1, 0 ], [ 9, -1 ], [ 1, 0 ], [ 1, 1 ] ], [ [ 3341, 6300 ], [ 0, 9 ], [ -1, 7 ], [ -1, 3 ], [ -1, 3 ], [ 0, 5 ], [ 1, 2 ], [ 2, 6 ], [ 0, 6 ], [ 4, 7 ], [ 4, 10 ], [ 1, 3 ], [ 1, 3 ], [ 4, 2 ], [ 2, -1 ], [ 3, 1 ], [ 3, 0 ], [ 4, -1 ], [ 7, -3 ], [ 9, 0 ], [ 3, -3 ], [ 3, -3 ], [ 2, -6 ], [ 3, -5 ], [ 0, -1 ], [ 1, -2 ], [ 1, 0 ], [ 3, 2 ], [ 1, 2 ], [ 3, 3 ] ], [ [ 3759, 6977 ], [ 0, -1 ], [ 2, -2 ], [ 4, -3 ], [ 4, -4 ], [ 9, -4 ], [ 14, -9 ], [ 25, -10 ], [ 8, -7 ], [ 9, -3 ], [ 9, -10 ], [ 7, -8 ], [ 4, -2 ], [ 4, -4 ], [ 13, -9 ], [ 3, -5 ], [ 3, -5 ], [ 8, -13 ], [ 6, -12 ], [ 8, -16 ], [ 4, -6 ], [ 2, -4 ], [ 3, -9 ], [ 1, -8 ], [ 1, -9 ], [ 1, -16 ], [ 0, -23 ], [ -1, -10 ], [ -2, -9 ], [ -1, -9 ], [ -3, -10 ], [ -3, -6 ], [ -4, -10 ], [ -3, -9 ], [ -7, -17 ], [ -20, -45 ], [ -4, -7 ], [ -5, -18 ], [ -2, -6 ], [ -1, -5 ], [ 0, -16 ], [ 1, -14 ], [ 2, -18 ], [ 2, -9 ], [ 2, -8 ], [ 8, -13 ], [ 7, -9 ], [ 5, -1 ], [ 5, -1 ], [ 7, 0 ], [ 2, 1 ], [ 4, 1 ], [ 7, 4 ], [ 6, 6 ], [ 6, 7 ], [ 7, 6 ], [ 4, 7 ], [ 4, 7 ], [ 4, 7 ], [ 11, 17 ], [ 0, 2 ], [ 2, 0 ] ], [ [ 3951, 6590 ], [ 0, -4 ], [ 5, -18 ], [ 4, -12 ], [ 2, -7 ], [ 1, -5 ], [ 0, -6 ], [ 1, -4 ], [ 0, -14 ], [ -2, -15 ], [ -3, -22 ], [ -2, -6 ], [ -1, -2 ], [ -1, -4 ], [ -1, -2 ], [ -3, -2 ], [ -19, -12 ], [ -9, -5 ], [ -5, 0 ], [ -8, -1 ], [ -2, 0 ], [ -3, -1 ], [ -2, -2 ], [ -7, -9 ], [ -2, -3 ], [ -2, -4 ], [ 0, -9 ], [ -1, -4 ], [ -2, -2 ], [ -4, -8 ], [ -5, -9 ], [ -3, -12 ], [ -4, -7 ], [ 0, -1 ] ], [ [ 3873, 6378 ], [ -2, 0 ], [ -5, 1 ], [ -5, 0 ], [ -5, -1 ], [ -2, 0 ], [ -3, 3 ], [ -1, 3 ], [ 0, 4 ], [ -1, 19 ], [ -1, 9 ], [ 0, 2 ], [ -4, 9 ], [ -3, 18 ], [ 0, 2 ], [ 3, 11 ], [ 1, 8 ], [ 0, 11 ], [ -1, 4 ], [ -2, 6 ], [ -1, 3 ], [ -2, 3 ], [ -2, 0 ], [ -10, -5 ], [ -10, -2 ], [ -7, -2 ], [ -7, -5 ], [ -5, -5 ], [ -2, -5 ], [ -3, -4 ], [ -5, -8 ], [ -8, -20 ], [ 0, -5 ], [ -4, -12 ], [ -1, -4 ], [ -2, -2 ], [ -2, -4 ], [ -5, -3 ], [ -3, -7 ], [ -1, -3 ], [ -3, -7 ], [ -1, -5 ], [ -1, -5 ], [ 0, -12 ], [ 2, -13 ], [ 1, -16 ], [ 2, -10 ], [ 1, -4 ], [ 0, -9 ], [ -2, -7 ], [ 0, -1 ], [ -2, -4 ], [ -3, -4 ], [ -2, -2 ], [ -4, -2 ], [ -1, 0 ] ], [ [ 3404, 6352 ], [ -1, -2 ] ], [ [ 3403, 6350 ], [ 0, 1 ] ], [ [ 3403, 6351 ], [ 1, 6 ], [ 1, 12 ], [ 0, 17 ], [ -1, 12 ], [ -1, 8 ], [ 0, 5 ], [ -2, 7 ], [ -1, 7 ], [ -1, 3 ], [ -6, 11 ], [ -2, 4 ], [ -3, 5 ], [ -4, 3 ], [ -4, 3 ], [ -6, 3 ], [ -4, 1 ], [ -10, 2 ], [ -3, 1 ], [ -2, 2 ], [ -2, 2 ], [ -2, 2 ], [ -2, 7 ], [ 0, 10 ], [ 1, 3 ], [ 1, 7 ], [ 4, 15 ], [ 3, 10 ], [ 1, 7 ], [ 1, 4 ], [ 0, 21 ], [ -1, 6 ], [ -1, 6 ], [ -2, 5 ], [ -1, 8 ], [ -2, 4 ], [ -3, 6 ], [ -3, 6 ], [ -3, 4 ], [ -4, 4 ], [ -10, 12 ], [ -9, 5 ], [ -3, 1 ], [ -3, 2 ], [ -6, 2 ], [ -28, 0 ], [ -5, 1 ], [ -6, 2 ], [ -12, 4 ], [ -13, 8 ], [ -4, 5 ], [ -13, 14 ], [ -3, 2 ], [ -3, 2 ], [ -4, 4 ], [ -9, 3 ], [ -9, 5 ], [ -6, 3 ], [ -17, 11 ], [ -12, 8 ], [ -4, 3 ], [ -4, 6 ], [ -3, 2 ], [ -2, 2 ], [ -2, 9 ], [ 0, 11 ], [ 1, 17 ], [ 10, 29 ], [ 2, 12 ], [ 2, 9 ], [ 2, 10 ], [ 0, 8 ] ], [ [ 3167, 6812 ], [ 1, -1 ], [ 4, -2 ], [ 6, -1 ], [ 6, 0 ], [ 6, 3 ], [ 10, 5 ], [ 6, 8 ], [ 4, 5 ], [ 10, 15 ], [ 4, 9 ], [ 4, 9 ], [ 6, 12 ], [ 5, 17 ], [ 8, 29 ], [ 6, 17 ], [ 4, 16 ], [ 1, 11 ], [ 0, 10 ], [ 2, 8 ], [ -2, 4 ], [ 0, 14 ], [ 0, 4 ], [ -1, 7 ], [ -4, 12 ], [ -1, 3 ], [ -6, 11 ], [ -2, 6 ], [ -1, 8 ], [ -5, 14 ], [ -1, 6 ], [ -4, 3 ], [ -1, 2 ], [ -3, 0 ], [ -4, 2 ], [ -6, -3 ], [ -11, 0 ], [ -3, 3 ], [ -2, 2 ], [ -3, 3 ], [ -3, 8 ], [ -2, 5 ], [ -1, 6 ], [ 0, 7 ], [ 2, 13 ], [ 2, 10 ], [ 3, 9 ], [ 4, 11 ], [ 3, 8 ], [ 7, 9 ], [ 9, 9 ], [ 1, 1 ], [ 6, 1 ], [ 12, 2 ], [ 19, 4 ], [ 13, 6 ], [ 10, 1 ], [ 11, 4 ], [ 3, 1 ], [ 4, 0 ], [ 4, -1 ], [ 4, 0 ], [ 7, -4 ], [ 16, -8 ], [ 7, -2 ], [ 5, 0 ], [ 7, -1 ], [ 2, 1 ], [ 1, 1 ] ], [ [ 3356, 7184 ], [ 2, -2 ], [ 4, -1 ], [ 3, -1 ], [ 4, -1 ], [ 5, 0 ], [ 7, 2 ], [ 3, 2 ], [ 4, 2 ], [ 24, 23 ], [ 12, 9 ], [ 7, 7 ], [ 3, 3 ], [ 5, 2 ], [ 3, 0 ], [ 23, -2 ], [ 9, 0 ], [ 6, 2 ], [ 2, 1 ], [ 2, 5 ], [ 0, 6 ], [ 2, 7 ], [ -2, 22 ], [ 0, 10 ], [ 2, 5 ], [ 0, 12 ], [ 2, 24 ], [ 1, 9 ], [ 0, 18 ], [ -1, 9 ], [ 0, 4 ], [ -2, 11 ], [ -2, 16 ], [ 0, 2 ], [ 15, -1 ], [ 4, -2 ], [ 3, -1 ], [ 6, -3 ], [ 4, -3 ], [ 4, -3 ], [ 4, -5 ], [ 9, -10 ], [ 3, -5 ], [ 3, -8 ], [ 2, -8 ], [ 3, -11 ], [ 7, -18 ], [ 1, -3 ], [ 2, -7 ], [ 2, -4 ], [ 2, -6 ], [ 4, -4 ], [ 6, -7 ], [ 24, -32 ], [ 14, -17 ], [ 7, -5 ], [ 5, -5 ], [ 6, -2 ], [ 8, -3 ], [ 3, -3 ], [ 3, -1 ], [ 4, -2 ], [ 2, -1 ], [ 4, -7 ], [ 3, -3 ], [ 0, -5 ], [ 2, -3 ], [ 2, -6 ], [ 3, -14 ], [ 0, -4 ], [ 1, -8 ], [ 0, -5 ], [ 2, -3 ], [ 6, -12 ], [ 13, -18 ], [ 6, -10 ], [ 3, -8 ], [ 6, -10 ], [ 3, -6 ], [ 3, -7 ], [ 2, -7 ], [ 2, -7 ], [ 1, -12 ], [ 2, -4 ], [ 0, -5 ], [ 0, -13 ], [ 2, -8 ], [ 0, -2 ], [ 1, -6 ], [ 2, -4 ], [ 4, -4 ], [ 3, -6 ], [ 3, -2 ], [ 4, -5 ], [ 9, -5 ], [ 23, -14 ] ], [ [ 3334, 8402 ], [ 2, 0 ], [ 0, -1 ], [ 1, -1 ], [ 2, -7 ], [ 2, -10 ], [ 5, -18 ], [ 2, -20 ], [ 2, -14 ], [ 3, -28 ], [ 0, -10 ], [ 2, -5 ], [ 0, -7 ], [ 7, -20 ], [ 2, -8 ], [ 8, -29 ], [ 2, -10 ], [ 7, -24 ], [ 3, -10 ], [ 5, -15 ], [ 8, -21 ], [ 7, -12 ], [ 4, -8 ], [ 3, -13 ], [ 7, -18 ], [ 3, -12 ], [ 4, -15 ], [ 12, -55 ], [ 2, -7 ], [ 2, -9 ], [ 12, -39 ], [ 6, -13 ], [ 6, -19 ], [ 0, -6 ], [ 3, -3 ], [ 6, -10 ], [ 4, -7 ], [ 6, -5 ], [ 14, -13 ], [ 3, -4 ], [ 8, -10 ], [ 4, -4 ], [ 2, -6 ], [ 2, -7 ], [ 3, -7 ], [ 0, -6 ], [ 2, -7 ], [ 0, -3 ], [ 1, -6 ], [ -1, -4 ], [ 0, -4 ], [ -2, -4 ], [ -4, -9 ], [ -2, -5 ], [ -6, -14 ], [ -5, -15 ], [ -2, -8 ], [ 0, -6 ], [ 0, -14 ], [ 0, -8 ], [ 2, -12 ], [ 3, -27 ], [ 1, -15 ], [ 1, -11 ], [ 1, -27 ], [ 0, -20 ], [ -2, -12 ], [ -2, -8 ], [ -2, -3 ], [ 0, -4 ], [ -2, -2 ], [ -3, -2 ], [ -2, -1 ], [ -3, -3 ], [ -11, -4 ], [ -7, -4 ], [ -5, -3 ], [ -15, -3 ], [ -3, -2 ], [ -2, -1 ], [ -2, -4 ], [ -2, -4 ], [ -2, -8 ], [ -7, -21 ], [ -6, -20 ], [ 0, -5 ], [ -1, -3 ], [ 0, -11 ], [ -1, -2 ], [ 0, -4 ], [ -2, -4 ], [ -2, -1 ], [ -2, -2 ], [ -4, 0 ], [ -4, 1 ], [ -5, 1 ], [ -4, 2 ], [ -6, 3 ], [ -19, 14 ], [ -6, 2 ], [ -3, 0 ], [ -3, 0 ], [ -3, -1 ], [ -4, -2 ], [ -3, -3 ], [ -1, -2 ], [ -1, -3 ], [ -1, -2 ], [ 0, -11 ], [ 4, -38 ], [ 0, -17 ], [ -1, -13 ], [ 1, -8 ], [ 0, -7 ], [ 3, -11 ], [ 1, -7 ], [ 3, -13 ], [ 1, -8 ], [ 0, -5 ], [ 1, -7 ], [ 0, -29 ], [ -1, -11 ], [ -1, -9 ], [ -3, -20 ], [ -1, -11 ], [ -3, -20 ], [ -1, -28 ], [ -1, -11 ], [ -1, -10 ], [ 0, -6 ], [ -1, -2 ] ], [ [ 3167, 6812 ], [ -3, 0 ], [ -2, 2 ], [ 0, 15 ], [ -1, 0 ], [ -1, -1 ], [ -2, -1 ], [ -10, -2 ], [ -3, -3 ], [ -2, -2 ], [ -27, -23 ], [ -4, -2 ], [ -4, -6 ], [ -6, -10 ], [ -5, -5 ], [ -3, -6 ], [ -6, -15 ], [ -3, -6 ], [ -3, -3 ], [ -8, -9 ], [ -14, -21 ], [ -4, -5 ], [ -3, -4 ], [ -6, -7 ], [ -8, -4 ], [ -6, -5 ], [ -16, -6 ], [ -9, -7 ], [ -5, -2 ], [ -9, -10 ], [ -6, -8 ], [ -5, -7 ], [ -2, -3 ], [ -4, -8 ], [ -3, -11 ], [ -9, -15 ], [ -5, -8 ], [ -4, -8 ], [ -4, -4 ], [ -4, -3 ], [ -5, -3 ], [ -2, -1 ] ], [ [ 2620, 7756 ], [ 0, 1 ], [ 1, 1 ], [ 4, 6 ], [ 4, 3 ], [ 8, 6 ], [ 3, 3 ], [ 4, 10 ], [ 1, 3 ], [ 1, 8 ], [ 1, 8 ], [ 0, 16 ], [ 1, 4 ], [ 0, 2 ], [ 1, 2 ], [ 6, 7 ], [ 2, 4 ], [ 3, 15 ], [ 4, 21 ], [ 1, 10 ], [ 0, 17 ], [ 1, 19 ], [ 1, 13 ], [ 1, 14 ], [ 5, 25 ], [ 0, 13 ], [ 1, 6 ], [ 0, 2 ], [ 1, 3 ], [ 2, 3 ], [ 2, 2 ], [ 2, 1 ], [ 8, 1 ], [ 24, 12 ], [ 7, 7 ], [ 10, 7 ], [ 6, 5 ], [ 21, 18 ], [ 17, 13 ], [ 17, 15 ], [ 4, 2 ], [ 1, 2 ], [ 0, 1 ] ], [ [ 2796, 8087 ], [ 3, -3 ], [ 3, 0 ], [ 7, 0 ], [ 4, 2 ], [ 13, 11 ], [ 7, 7 ], [ 7, 2 ], [ 5, 4 ], [ 5, 2 ], [ 3, 1 ], [ 16, 0 ], [ 16, 3 ], [ 11, 0 ], [ 9, -2 ], [ 3, 0 ], [ 10, -1 ], [ 4, 0 ], [ 5, 1 ], [ 10, 3 ], [ 6, 4 ], [ 6, 3 ], [ 5, 1 ], [ 3, 2 ], [ 6, 0 ], [ 4, -1 ], [ 14, -6 ], [ 3, -2 ], [ 5, 0 ], [ 1, 2 ], [ 2, 1 ], [ 2, 2 ], [ 2, 3 ], [ 17, 25 ], [ 6, 10 ], [ 10, 16 ], [ 4, 7 ], [ 3, 3 ], [ 11, 6 ], [ 8, 1 ], [ 6, 4 ], [ 4, 5 ], [ 4, 6 ], [ 1, 4 ], [ 2, 3 ], [ 2, 8 ], [ 7, 23 ], [ 2, 6 ], [ 3, 6 ], [ 2, 4 ], [ 1, 1 ], [ 4, 1 ], [ 0, 1 ], [ 2, 2 ], [ 5, -2 ], [ 7, -2 ], [ 3, -1 ], [ 3, 0 ], [ 4, 1 ], [ 5, 4 ], [ 9, 8 ], [ 7, 8 ], [ 2, 5 ], [ 2, 3 ], [ 4, 8 ], [ 0, 3 ], [ 2, 6 ], [ 2, 7 ], [ 1, 13 ], [ 2, 21 ], [ 3, 20 ], [ 1, 15 ], [ 0, 44 ], [ 1, 4 ], [ 0, 3 ], [ 1, 3 ], [ 0, 1 ] ], [ [ 3159, 8440 ], [ 1, -2 ], [ 3, -4 ], [ 4, -7 ], [ 1, -3 ], [ 1, -2 ], [ 2, -6 ], [ 1, -2 ], [ 0, -1 ], [ 1, -1 ], [ 3, -3 ], [ 4, -4 ], [ 4, -3 ], [ 16, -8 ], [ 9, -4 ], [ 6, -2 ], [ 7, 0 ], [ 11, 2 ], [ 8, 1 ], [ 7, 0 ], [ 9, -2 ], [ 3, -2 ], [ 5, -3 ], [ 10, -9 ], [ 6, -9 ], [ 4, -4 ], [ 7, -2 ], [ 4, 0 ], [ 5, 2 ], [ 12, 9 ], [ 6, 4 ], [ 3, 4 ], [ 4, 3 ], [ 3, 6 ], [ 1, 3 ], [ 2, 5 ], [ 0, 4 ], [ 2, 2 ] ], [ [ 3403, 6351 ], [ 0, -2 ] ], [ [ 2886, 9019 ], [ -1, -12 ], [ -2, -20 ], [ -2, -24 ], [ 0, -17 ], [ 1, -8 ], [ 2, -14 ], [ 2, -6 ], [ 1, -6 ], [ 3, -4 ], [ 8, -8 ], [ 11, -10 ], [ 9, -7 ], [ 1, -4 ], [ 1, -1 ], [ 1, -3 ], [ 0, -21 ], [ -1, -16 ], [ 0, -32 ], [ 1, -8 ], [ 1, -7 ], [ 0, -4 ], [ 2, -6 ], [ 4, -5 ], [ 12, -16 ], [ 5, -9 ], [ 12, -19 ], [ 22, -41 ], [ 5, -9 ], [ 5, -5 ], [ 4, -5 ], [ 7, -5 ], [ 11, -6 ], [ 4, -2 ], [ 5, -6 ], [ 8, -5 ], [ 8, -9 ], [ 24, -30 ], [ 4, -6 ], [ 3, -5 ], [ 12, -34 ], [ 5, -10 ], [ 3, -3 ], [ 2, -4 ], [ 2, -4 ], [ 5, -5 ], [ 4, -4 ], [ 2, -3 ], [ 4, -10 ], [ 2, -8 ], [ 7, -13 ], [ 11, -17 ], [ 5, -6 ], [ 19, -25 ], [ 6, -8 ], [ 3, -3 ], [ 0, -1 ] ], [ [ 2796, 8087 ], [ 0, 4 ], [ -3, 12 ], [ -2, 7 ], [ -3, 5 ], [ -4, 6 ], [ -4, 4 ], [ -4, 6 ], [ -2, 3 ], [ -4, 4 ], [ -5, 5 ], [ -5, 2 ], [ -6, 6 ], [ -14, 6 ], [ -16, 10 ], [ -4, 3 ], [ -3, 4 ], [ -7, 15 ], [ -2, 3 ], [ -2, 2 ], [ 0, 10 ], [ 2, 5 ], [ 2, 10 ], [ 1, 4 ], [ 0, 13 ], [ -2, 7 ], [ -4, 12 ], [ -2, 7 ], [ -5, 23 ], [ -16, 68 ], [ -3, 15 ], [ -1, 14 ], [ 0, 10 ], [ -1, 8 ], [ 0, 14 ], [ 1, 8 ], [ 1, 25 ], [ 2, 18 ], [ 0, 26 ], [ 0, 10 ], [ -2, 10 ], [ -4, 30 ], [ -1, 9 ], [ -1, 8 ], [ 0, 11 ], [ 1, 3 ], [ 1, 6 ], [ 2, 9 ], [ 8, 31 ], [ 2, 8 ], [ 3, 8 ], [ 3, 19 ], [ 3, 18 ], [ -1, 6 ], [ -1, 5 ], [ -1, 4 ], [ -1, 2 ], [ -3, 4 ], [ -6, 7 ], [ -16, 16 ], [ -8, 6 ], [ -5, 6 ], [ -6, 2 ], [ -4, 3 ], [ -2, 1 ] ], [ [ 2642, 8733 ], [ 1, 0 ], [ 0, 2 ], [ 3, 4 ], [ 3, 4 ], [ 5, 10 ], [ 2, 6 ], [ 2, 8 ], [ 1, 6 ], [ 0, 29 ], [ -1, 7 ], [ -4, 19 ], [ -2, 9 ], [ 0, 5 ], [ -2, 6 ], [ 0, 11 ], [ 2, 8 ], [ 1, 8 ], [ 4, 20 ], [ 5, 28 ], [ 4, 9 ], [ 1, 4 ], [ 4, 2 ], [ 2, 1 ], [ 3, 1 ], [ 5, 0 ], [ 17, -1 ], [ 7, 0 ], [ 6, 1 ], [ 5, 3 ], [ 3, 2 ], [ 4, 3 ], [ 4, 2 ], [ 6, 8 ], [ 3, 6 ], [ 3, 6 ], [ 3, 8 ], [ 4, 7 ], [ 4, 11 ], [ 2, 4 ], [ 7, 13 ], [ 11, 10 ], [ 15, 14 ], [ 8, 7 ], [ 6, 4 ], [ 4, 1 ], [ 1, 0 ], [ 2, -2 ], [ 3, -1 ], [ 1, -3 ], [ 3, -5 ], [ 2, -4 ], [ 3, -8 ], [ 2, -2 ], [ 1, -1 ], [ 1, 0 ], [ 1, -1 ], [ 9, 0 ], [ 4, -2 ], [ 4, -2 ], [ 4, -2 ], [ 2, -3 ], [ 2, -4 ], [ 6, -9 ], [ 1, -1 ], [ 4, -2 ], [ 2, 0 ], [ 1, 1 ], [ 2, 1 ], [ 2, 2 ], [ 3, 7 ], [ 2, 3 ], [ 5, 5 ], [ 3, 1 ], [ 2, 1 ], [ 3, 0 ], [ 2, 1 ] ], [ [ 2201, 8630 ], [ 2, -1 ], [ 9, -5 ], [ 4, -2 ], [ 4, -1 ], [ 4, 0 ], [ 4, 1 ], [ 1, 0 ], [ 8, 7 ], [ 10, 3 ], [ 5, 5 ], [ 2, 2 ], [ 2, 2 ], [ 1, 4 ], [ 2, 2 ], [ 0, 3 ], [ 2, 11 ], [ 1, 5 ], [ 2, 3 ], [ 10, 11 ], [ 8, 10 ], [ 3, 2 ], [ 3, 2 ], [ 1, 2 ], [ 14, 5 ], [ 0, 1 ], [ 1, 0 ], [ 2, -1 ], [ 2, -1 ], [ 4, -2 ], [ 9, -8 ], [ 22, -19 ], [ 4, -3 ], [ 4, -3 ], [ 6, -4 ], [ 4, -1 ], [ 4, -1 ], [ 7, 0 ], [ 3, 1 ], [ 2, 0 ], [ 2, 2 ], [ 2, 5 ], [ 9, 10 ], [ 6, 5 ], [ 7, 8 ], [ 10, 6 ], [ 3, 1 ], [ 13, 2 ], [ 5, 1 ], [ 6, 2 ], [ 12, 6 ], [ 3, 2 ], [ 7, 1 ], [ 7, 1 ], [ 10, 1 ], [ 6, 0 ], [ 8, -1 ], [ 9, -1 ], [ 10, -2 ], [ 11, -4 ], [ 6, -5 ], [ 17, -10 ], [ 5, -2 ], [ 5, -2 ], [ 6, -1 ], [ 12, 0 ], [ 7, 1 ], [ 7, 4 ], [ 4, 2 ], [ 6, 5 ], [ 3, 3 ], [ 4, 5 ], [ 14, 18 ], [ 3, 5 ], [ 2, 1 ], [ 4, 3 ], [ 6, 3 ], [ 7, 0 ], [ 1, -2 ] ], [ [ 3729, 9208 ], [ 0, -2 ], [ -2, -4 ], [ -2, -6 ], [ -7, -17 ], [ -5, -4 ], [ -3, -7 ], [ -7, -9 ], [ -9, -9 ], [ -7, -6 ], [ -13, -12 ], [ -4, -6 ], [ -5, -6 ], [ -1, -3 ], [ -2, -2 ], [ -3, -7 ], [ -2, -6 ], [ -2, -8 ], [ -2, -17 ], [ -2, -11 ], [ -8, -50 ], [ -1, -9 ], [ -3, -7 ], [ -1, -4 ], [ -4, -9 ], [ 0, -2 ], [ -3, -5 ], [ -2, -3 ], [ -3, -2 ], [ -3, -2 ], [ -4, -4 ], [ -4, -1 ], [ -3, -1 ], [ -8, 0 ], [ -6, 0 ], [ -4, 2 ], [ -4, 2 ], [ -9, 6 ], [ -6, 6 ], [ -5, 4 ], [ -14, 16 ], [ -5, 4 ], [ -5, 3 ], [ -5, 5 ], [ -11, 5 ], [ -3, 3 ], [ -5, 4 ], [ -2, 2 ], [ -2, 1 ], [ -3, 0 ], [ -4, 1 ], [ -8, -2 ], [ -16, -4 ], [ -3, -2 ], [ 0, -3 ], [ -2, -2 ], [ 0, -1 ], [ -1, -3 ], [ 0, -7 ], [ 1, -12 ], [ 0, -28 ], [ 2, -17 ], [ 0, -7 ], [ 0, -6 ], [ -2, -16 ], [ 0, -15 ], [ -1, -8 ], [ -1, -4 ], [ -1, -4 ], [ -1, -4 ], [ -4, -8 ], [ -4, -6 ], [ -7, -14 ], [ -3, -4 ], [ -2, -5 ], [ -2, -5 ], [ -4, -6 ], [ -2, -8 ], [ -1, -4 ], [ -3, -13 ], [ -2, -14 ], [ -2, -11 ], [ -1, -12 ], [ -2, -17 ], [ 0, -29 ], [ -3, -9 ], [ -4, -3 ], [ -9, -6 ], [ -2, -2 ], [ -3, -3 ], [ -8, -13 ], [ -4, -6 ], [ -15, -19 ], [ -5, -7 ], [ -5, -6 ], [ -4, -7 ], [ -3, -9 ], [ -2, -7 ], [ -2, -9 ], [ -3, -10 ], [ -2, -11 ], [ -2, -15 ], [ 0, -9 ], [ -1, -19 ], [ 0, -8 ], [ -2, -8 ], [ -2, -13 ], [ -3, -9 ], [ -10, -31 ], [ -7, -17 ], [ -4, -14 ], [ -2, -8 ], [ 0, -9 ], [ -2, -15 ], [ -1, -7 ], [ 1, -7 ], [ 0, -5 ], [ 1, -5 ], [ 1, -2 ], [ 2, 0 ] ], [ [ 2886, 9019 ], [ 1, -1 ], [ 2, 1 ], [ 7, 3 ], [ 6, 3 ], [ 5, 3 ], [ 6, 5 ], [ 5, 5 ], [ 19, 22 ], [ 6, 8 ], [ 5, 7 ], [ 7, 4 ], [ 9, 8 ], [ 8, 7 ], [ 38, 28 ], [ 22, 19 ], [ 9, 7 ], [ 10, 8 ], [ 7, 3 ], [ 29, 17 ], [ 9, 6 ], [ 12, 7 ], [ 4, 5 ], [ 4, 3 ], [ 8, 9 ], [ 7, 9 ], [ 7, 10 ], [ 5, 8 ], [ 2, 4 ], [ 3, 7 ], [ 4, 12 ], [ 5, 13 ], [ 10, 36 ], [ 4, 10 ], [ 5, 5 ], [ 5, 5 ], [ 5, 4 ], [ 9, 6 ], [ 6, 5 ], [ 6, 2 ], [ 13, 0 ], [ 5, -1 ], [ 6, -3 ], [ 14, -6 ], [ 18, -4 ], [ 6, 1 ], [ 7, 2 ], [ 7, 2 ], [ 9, 2 ], [ 6, 3 ], [ 9, 5 ], [ 5, 2 ], [ 8, 7 ], [ 12, 9 ], [ 2, 2 ], [ 3, 1 ], [ 9, 2 ], [ 14, 5 ], [ 4, 2 ], [ 3, 1 ], [ 5, 3 ], [ 2, 3 ], [ 2, 2 ], [ 4, 5 ], [ 2, 3 ], [ 1, 4 ], [ 2, 6 ], [ 2, 8 ], [ 4, 26 ], [ 5, 20 ], [ 3, 10 ], [ 1, 8 ], [ 1, 5 ], [ 1, 6 ], [ 0, 4 ], [ -1, 6 ], [ -1, 6 ], [ -1, 4 ], [ -2, 4 ], [ -1, 5 ], [ -2, 3 ], [ -3, 6 ], [ -2, 3 ], [ -6, 7 ], [ -6, 2 ], [ -11, 8 ], [ -18, 10 ], [ -44, 28 ], [ -6, 4 ], [ -8, 9 ], [ -3, 6 ], [ -3, 3 ], [ -1, 2 ], [ -1, 5 ], [ -1, 4 ], [ -2, 10 ], [ -2, 6 ], [ 0, 4 ], [ 0, 12 ], [ 0, 4 ], [ 4, 12 ], [ 6, 13 ], [ 1, 4 ], [ 0, 4 ], [ 1, 4 ], [ 0, 4 ], [ -1, 3 ], [ 0, 1 ], [ -1, 4 ], [ -2, 1 ], [ -1, 2 ], [ -2, 2 ], [ -1, 0 ], [ -4, 1 ], [ -7, 0 ], [ -15, -1 ], [ -12, 0 ], [ -2, 0 ], [ -4, 1 ], [ -3, 1 ], [ -6, 4 ], [ -6, 4 ], [ -3, 5 ], [ -4, 4 ], [ -7, 10 ], [ -2, 6 ], [ -1, 5 ], [ 0, 5 ], [ 0, 4 ], [ 0, 10 ], [ 0, 23 ], [ 0, 7 ], [ 1, 5 ], [ 1, 6 ], [ 2, 8 ], [ 9, 22 ], [ 2, 9 ], [ 2, 9 ], [ 3, 14 ], [ 2, 11 ], [ 1, 9 ], [ 1, 8 ], [ 2, 16 ], [ 0, 8 ], [ 1, 7 ], [ 1, 7 ], [ 1, 3 ], [ 2, 6 ], [ 3, 8 ], [ 19, 41 ], [ 4, 7 ], [ 1, 4 ], [ 1, 0 ], [ 5, -2 ], [ 4, -4 ], [ 6, -6 ], [ 14, -16 ], [ 5, -5 ], [ 8, -7 ], [ 6, -3 ], [ 5, -5 ], [ 7, -2 ], [ 6, -1 ], [ 10, -4 ], [ 7, -2 ], [ 4, -2 ], [ 5, -4 ], [ 4, -4 ], [ 5, -3 ], [ 3, -6 ], [ 4, -3 ], [ 3, -7 ], [ 13, -20 ], [ 3, -5 ], [ 11, -10 ], [ 6, -5 ], [ 5, -3 ], [ 7, -1 ], [ 10, 0 ], [ 6, 1 ], [ 5, 1 ], [ 9, 7 ], [ 17, 13 ], [ 8, 6 ], [ 7, 3 ], [ 5, 2 ], [ 3, 0 ], [ 4, 1 ], [ 4, 0 ], [ 8, -3 ], [ 12, -4 ], [ 4, -1 ], [ 6, 0 ], [ 3, 1 ], [ 6, 5 ], [ 4, 10 ], [ 4, 18 ], [ 3, 4 ], [ 4, 5 ], [ 2, 0 ], [ 1, -2 ], [ 1, -1 ], [ 2, -6 ], [ 0, -8 ], [ 2, -13 ], [ 0, -8 ], [ 1, -8 ], [ 1, -5 ], [ 7, -16 ], [ 3, -3 ], [ 5, -8 ], [ 12, -12 ], [ 5, -8 ], [ 6, -9 ], [ 9, -13 ], [ 2, -2 ], [ 2, -4 ], [ 4, -2 ], [ 10, -5 ], [ 13, -3 ], [ 9, -3 ], [ 9, -10 ], [ 6, -8 ], [ 4, -7 ], [ 5, -12 ], [ 11, -19 ], [ 5, -11 ], [ 2, -10 ], [ 1, -4 ], [ 1, -5 ], [ 1, -4 ], [ 0, -6 ], [ 1, -11 ], [ 0, -11 ], [ -1, -15 ], [ -1, -15 ], [ -2, -20 ], [ -4, -17 ], [ -3, -18 ], [ -7, -23 ], [ -5, -20 ], [ -9, -31 ], [ -4, -10 ], [ -2, -9 ], [ -1, -11 ], [ -1, -6 ], [ 0, -9 ], [ 1, -4 ], [ 1, -2 ], [ 2, -8 ], [ 3, -4 ], [ 3, -4 ], [ 3, -2 ], [ 4, -2 ], [ 2, -1 ], [ 9, 0 ], [ 6, 2 ], [ 6, 2 ], [ 13, 8 ], [ 19, 11 ], [ 12, 6 ], [ 7, 3 ], [ 10, 1 ], [ 7, 0 ], [ 2, -1 ], [ 2, -2 ], [ 2, -4 ], [ 2, -4 ], [ 3, -5 ], [ 1, -5 ], [ 1, -8 ], [ 0, -29 ], [ -1, -5 ], [ -1, -10 ], [ -4, -14 ], [ -8, -32 ], [ -6, -28 ], [ -13, -59 ], [ -8, -36 ], [ -6, -30 ], [ 0, -3 ] ], [ [ 4759, 9216 ], [ -1, -1 ], [ -10, -26 ], [ -11, -27 ], [ -8, -23 ], [ -2, -6 ], [ -3, -11 ], [ -5, -15 ], [ -1, -4 ], [ 0, -7 ], [ 0, -10 ], [ 0, -29 ], [ -2, -3 ], [ 0, -6 ], [ -2, -5 ], [ -4, -3 ], [ -4, 0 ], [ -4, 2 ], [ -5, 3 ], [ -10, 5 ], [ -24, 17 ], [ -8, 4 ], [ -10, 5 ], [ -13, 6 ], [ -6, 2 ], [ -3, 2 ], [ -11, 9 ], [ -8, 2 ], [ -4, 3 ], [ -3, 2 ], [ -16, 3 ], [ -5, 1 ], [ -6, 3 ], [ -14, 9 ], [ -12, 7 ], [ -6, 1 ], [ -6, 0 ], [ -4, -1 ], [ -3, -2 ], [ -3, -1 ], [ -9, -8 ], [ -2, -7 ], [ -4, -5 ], [ -4, -8 ], [ -6, -9 ], [ -3, -12 ], [ -2, -6 ], [ -2, -8 ], [ -3, -11 ], [ -3, -12 ], [ -7, -25 ], [ -2, -12 ], [ -2, -11 ], [ 0, -10 ], [ 0, -20 ], [ 2, -10 ], [ 1, -3 ], [ 2, -7 ], [ 8, -13 ], [ 4, -11 ], [ 4, -8 ], [ 2, -7 ], [ 2, -8 ], [ 2, -5 ], [ 0, -14 ], [ -2, -7 ], [ -6, -38 ], [ -2, -11 ], [ -1, -7 ], [ -1, -4 ], [ -5, -14 ], [ -5, -14 ], [ -3, -12 ], [ -6, -15 ], [ -4, -10 ], [ -2, -8 ], [ -1, -6 ], [ 0, -4 ], [ -2, -3 ], [ 2, -3 ], [ 0, -5 ], [ 1, -10 ], [ 4, -16 ], [ 2, -15 ], [ 0, -5 ], [ -2, -15 ], [ -2, -4 ], [ -6, -17 ], [ -2, -9 ], [ -1, -10 ], [ -2, -16 ], [ -1, -13 ], [ -2, -15 ], [ -1, -47 ], [ -1, -11 ], [ 1, -7 ], [ 0, -14 ], [ 1, -6 ], [ 2, -10 ], [ 4, -19 ], [ 1, -5 ], [ 0, -6 ], [ 4, -32 ], [ 1, -18 ], [ 3, -26 ], [ 2, -44 ], [ 1, -10 ], [ 1, -9 ], [ 1, -8 ], [ 0, -8 ], [ 4, -13 ], [ 1, -8 ], [ 3, -9 ], [ 3, -6 ], [ 2, -4 ] ], [ [ 4484, 8246 ], [ -1, -1 ], [ -1, -4 ], [ -6, -15 ], [ -1, -7 ], [ -8, -36 ], [ -2, -8 ], [ -3, -8 ], [ -6, -14 ], [ -5, -18 ], [ -5, -17 ], [ -2, -4 ], [ -2, -9 ], [ -3, -17 ], [ -2, -12 ], [ 0, -6 ], [ -6, -15 ], [ -6, -9 ], [ -4, -2 ], [ -5, -5 ], [ -3, -1 ], [ -10, 0 ], [ -7, 3 ], [ -12, 4 ], [ -11, 5 ], [ -4, 1 ], [ -4, 1 ], [ -6, 3 ], [ -2, 4 ], [ -4, 7 ], [ -11, 22 ], [ -5, 13 ], [ -15, 27 ], [ -14, 30 ], [ -4, 9 ], [ -4, 6 ], [ -2, 2 ], [ -3, 2 ], [ -10, 6 ], [ -26, 10 ], [ -4, 0 ], [ -1, -1 ] ], [ [ 4254, 8192 ], [ 1, 9 ], [ 3, 13 ], [ 0, 19 ], [ 1, 10 ], [ 4, 33 ], [ 0, 9 ], [ 1, 14 ], [ -1, 9 ], [ -2, 20 ], [ -4, 20 ], [ -2, 11 ], [ -1, 3 ], [ 0, 2 ], [ 1, 10 ], [ 2, 5 ], [ -2, 5 ], [ 0, 7 ], [ -1, 3 ], [ -1, 2 ], [ -2, 8 ], [ -2, 6 ], [ -4, 5 ], [ -5, 7 ], [ -2, 3 ], [ -4, 3 ], [ -6, 5 ], [ -8, 9 ], [ -4, 3 ], [ -1, 5 ], [ -2, 3 ], [ 0, 10 ], [ 2, 4 ], [ 1, 8 ], [ 3, 7 ], [ 10, 26 ], [ 3, 11 ], [ 6, 19 ], [ 1, 3 ], [ 1, 3 ], [ 4, 6 ], [ 3, 3 ], [ 7, 5 ], [ 4, 1 ], [ 4, 2 ], [ 8, 10 ], [ 2, 4 ], [ 5, 7 ], [ 3, 8 ], [ 2, 7 ], [ 3, 10 ], [ 2, 5 ], [ 0, 6 ], [ 2, 8 ], [ 1, 8 ], [ 0, 22 ], [ -1, 10 ], [ -2, 5 ], [ -2, 10 ], [ -6, 19 ], [ -4, 12 ], [ -3, 9 ], [ -2, 9 ], [ -4, 18 ], [ -4, 28 ], [ -2, 10 ], [ -22, 89 ], [ -2, 9 ], [ -1, 6 ], [ 0, 16 ], [ 1, 6 ], [ 3, 16 ], [ 1, 12 ], [ 1, 5 ], [ 1, 4 ], [ 2, 5 ], [ 1, 3 ], [ 13, 12 ], [ 5, 5 ], [ 8, 6 ], [ 14, 9 ], [ 5, 6 ], [ 7, 5 ], [ 7, 10 ], [ 4, 5 ], [ 8, 12 ], [ 7, 15 ], [ 5, 13 ], [ 6, 10 ], [ 2, 9 ], [ 2, 8 ], [ 1, 8 ], [ 1, 12 ], [ 0, 57 ], [ -1, 7 ], [ 0, 7 ], [ -1, 4 ], [ -2, 7 ], [ -2, 2 ], [ -2, 6 ], [ -3, 3 ], [ -2, 4 ], [ -4, 6 ], [ -15, 20 ], [ -19, 24 ], [ -4, 5 ], [ 0, 1 ] ], [ [ 4285, 9255 ], [ 2, 0 ], [ 0, 3 ], [ 2, 6 ], [ 0, 9 ], [ 0, 60 ], [ 1, 14 ], [ 0, 19 ], [ 2, 21 ], [ 0, 17 ], [ -2, 21 ], [ -1, 18 ], [ 0, 20 ], [ 1, 7 ], [ 2, 10 ], [ 10, 35 ], [ 4, 16 ], [ 2, 12 ], [ 2, 12 ], [ 1, 15 ], [ 3, 15 ], [ 1, 31 ], [ 1, 23 ], [ 0, 18 ], [ -1, 5 ], [ -1, 8 ], [ -3, 8 ], [ -2, 5 ], [ -1, 6 ], [ -2, 4 ], [ -2, 5 ], [ -1, 2 ], [ -2, 2 ], [ -2, 2 ], [ -2, 1 ], [ -6, 3 ], [ -9, 3 ], [ -4, 0 ], [ -8, 8 ], [ -2, 3 ], [ -5, 10 ], [ -1, 6 ], [ -1, 3 ], [ -1, 6 ], [ 0, 14 ], [ 1, 7 ], [ 4, 13 ], [ 1, 7 ], [ 4, 10 ], [ 3, 5 ], [ 5, 7 ], [ 6, 8 ], [ 22, 25 ], [ 10, 15 ], [ 4, 3 ], [ 3, 9 ], [ 2, 0 ], [ 3, -3 ], [ 5, -6 ], [ 8, -9 ], [ 4, -3 ], [ 5, -5 ], [ 4, -2 ], [ 3, -1 ], [ 4, -1 ], [ 6, 0 ], [ 3, 1 ], [ 3, 1 ], [ 7, 7 ], [ 3, 1 ], [ 5, 1 ], [ 4, 0 ], [ 5, -1 ], [ 5, -3 ], [ 12, -7 ], [ 13, -8 ], [ 7, -4 ], [ 3, -5 ], [ 2, -2 ], [ 2, -4 ], [ 3, -6 ], [ 0, -2 ], [ 1, -5 ], [ -1, -15 ], [ 0, -5 ], [ 1, -3 ], [ 0, -4 ], [ 1, -6 ], [ 2, -3 ], [ 1, -5 ], [ 2, -2 ], [ 1, -3 ], [ 4, -6 ], [ 2, -1 ], [ 4, -1 ], [ 3, -1 ], [ 4, -1 ], [ 13, 0 ], [ 3, 1 ], [ 2, 1 ], [ 3, 3 ], [ 2, 4 ], [ 2, 4 ], [ 6, 21 ], [ 3, 9 ], [ 2, 7 ], [ 4, 10 ], [ 4, 8 ], [ 2, 5 ], [ 4, 1 ], [ 3, 5 ], [ 6, 3 ], [ 2, 1 ], [ 3, 0 ], [ 4, -1 ], [ 3, -1 ], [ 1, -1 ], [ 3, -7 ], [ 3, -11 ], [ 2, -9 ], [ 2, -10 ], [ 3, -31 ], [ 3, -9 ], [ 1, -7 ], [ 2, -5 ], [ 2, -6 ], [ 3, -4 ], [ 1, -4 ], [ 4, -2 ], [ 4, -2 ], [ 3, 0 ], [ 3, 1 ], [ 2, 2 ], [ 3, 3 ], [ 9, 8 ], [ 6, 6 ], [ 6, 3 ], [ 9, 6 ], [ 6, 3 ], [ 5, 3 ], [ 11, 0 ], [ 3, -3 ], [ 2, -2 ], [ 7, -9 ], [ 9, -18 ], [ 3, -4 ], [ 8, -10 ], [ 13, -13 ], [ 8, -11 ], [ 4, -6 ], [ 2, -7 ], [ 3, -8 ], [ 1, -7 ], [ 6, -21 ], [ 5, -19 ], [ 2, -6 ], [ 1, -10 ], [ 0, -6 ], [ 0, -17 ], [ 0, -6 ], [ -1, -6 ], [ -2, -11 ], [ -12, -43 ], [ -2, -10 ], [ 0, -9 ], [ -2, -18 ], [ 0, -41 ], [ 1, -11 ], [ 1, -11 ], [ 2, -13 ], [ 1, -16 ], [ 5, -23 ], [ 2, -8 ], [ 1, -9 ], [ 2, -7 ], [ 4, -11 ], [ 11, -32 ], [ 6, -17 ], [ 8, -22 ], [ 8, -14 ], [ 4, -9 ], [ 5, -10 ], [ 2, -5 ], [ 1, -1 ] ], [ [ 5161, 7835 ], [ 1, -1 ] ], [ [ 5161, 7835 ], [ 0, 0 ] ], [ [ 5086, 8895 ], [ 0, -15 ], [ 2, -10 ], [ 2, -13 ], [ 2, -7 ], [ 1, -10 ], [ 5, -13 ], [ 6, -16 ], [ 5, -15 ], [ 12, -27 ], [ 4, -9 ], [ 3, -13 ], [ 2, -8 ], [ 1, -9 ], [ 1, -7 ], [ 1, -11 ], [ -2, -25 ], [ -3, -35 ], [ 0, -12 ], [ 0, -10 ], [ 0, -9 ], [ 0, -40 ], [ 2, -59 ], [ 0, -11 ], [ 0, -10 ], [ 2, -21 ], [ 4, -27 ], [ 3, -21 ], [ 4, -27 ], [ 2, -13 ], [ 0, -12 ], [ -1, -25 ], [ 0, -18 ], [ 1, -6 ], [ 0, -8 ], [ 2, -8 ], [ 13, -34 ], [ 3, -10 ], [ 3, -14 ], [ 1, -7 ], [ 1, -7 ], [ 1, -4 ], [ 0, -15 ], [ -1, -9 ], [ -2, -11 ], [ -4, -21 ], [ -2, -10 ], [ -3, -18 ], [ -2, -15 ], [ -2, -12 ], [ 0, -24 ], [ 1, -7 ], [ 2, -6 ], [ 2, -7 ], [ 5, -17 ], [ 1, -4 ], [ 2, -13 ], [ 2, -5 ], [ 7, -22 ], [ 4, -14 ], [ 2, -4 ], [ 6, -14 ], [ 12, -26 ], [ 7, -17 ], [ 5, -12 ], [ 4, -9 ], [ 3, -10 ], [ 1, -15 ], [ 0, -15 ], [ 0, -3 ], [ -2, -7 ], [ -2, -2 ], [ -7, -7 ], [ -2, -2 ], [ -8, -7 ], [ -15, -9 ], [ -19, -13 ], [ -2, -1 ], [ -1, -1 ] ], [ [ 5161, 7835 ], [ -2, 7 ] ], [ [ 5159, 7842 ], [ -2, 4 ], [ -7, 8 ], [ -7, 8 ], [ -10, 3 ], [ -2, 1 ], [ -3, 0 ], [ -3, -1 ], [ -3, -2 ], [ -8, -5 ], [ -16, -11 ], [ -4, -1 ], [ -4, -1 ], [ -4, -1 ], [ -5, 1 ], [ -7, 2 ], [ -11, 9 ], [ -6, 6 ], [ -5, 6 ], [ -5, 10 ], [ -5, 10 ], [ -5, 11 ], [ -4, 9 ], [ -6, 19 ], [ -2, 6 ], [ -2, 3 ], [ -5, 4 ], [ -2, 4 ], [ -2, 1 ], [ -5, 0 ], [ -2, -2 ], [ -2, -4 ], [ -3, -3 ], [ -3, -10 ], [ -6, -10 ], [ -8, -10 ], [ -7, -12 ], [ -4, -6 ], [ -13, -16 ], [ -4, -5 ], [ -3, -5 ], [ -1, -4 ], [ -1, -3 ], [ -2, -7 ], [ -1, -5 ], [ 0, -24 ], [ 1, -10 ], [ 1, -9 ], [ 3, -17 ], [ 0, -14 ], [ -1, -2 ], [ -2, -10 ], [ -2, -7 ], [ -4, -6 ], [ -2, -5 ], [ -1, -2 ], [ -3, -2 ], [ -5, -5 ], [ -4, -3 ], [ -9, -12 ], [ -3, -5 ], [ -3, -1 ], [ -2, -1 ], [ -6, -1 ], [ -3, -1 ], [ -6, -1 ], [ -10, 0 ], [ -3, 1 ], [ -2, 1 ], [ -3, 1 ], [ -2, 3 ], [ -3, 4 ], [ -2, 2 ], [ -3, 4 ], [ -2, 7 ], [ -2, 7 ], [ 0, 2 ], [ -2, 9 ], [ 0, 3 ], [ -2, 16 ], [ -1, 5 ], [ -2, 6 ], [ -1, 2 ], [ -2, 3 ], [ -3, 3 ], [ -1, 0 ], [ -1, 1 ], [ -2, 0 ], [ -4, -1 ], [ -5, -4 ], [ -3, -1 ], [ -5, 1 ], [ -4, 3 ], [ -8, 5 ], [ -11, 9 ], [ -5, 6 ], [ -12, 13 ], [ -7, 5 ], [ -4, 3 ], [ -10, 3 ], [ -3, 1 ], [ -10, 2 ], [ -2, 2 ], [ -4, 2 ], [ -7, 4 ], [ -13, 12 ], [ -13, 9 ], [ -6, 5 ], [ -7, 4 ], [ -16, 8 ], [ -3, 0 ], [ -1, 2 ] ], [ [ 4686, 7878 ], [ -2, 0 ], [ -6, 5 ], [ -1, 3 ], [ -19, 22 ], [ -3, 6 ], [ -3, 3 ], [ -3, 8 ], [ -3, 4 ], [ -6, 36 ], [ 0, 4 ], [ -1, 7 ], [ 1, 7 ], [ 0, 4 ], [ 2, 14 ], [ 0, 4 ], [ 0, 19 ], [ 0, 4 ], [ -2, 11 ], [ 0, 5 ], [ 0, 32 ], [ 0, 5 ], [ 0, 3 ], [ 2, 4 ], [ 2, 6 ], [ 1, 3 ], [ 7, 16 ], [ 9, 20 ], [ 2, 4 ], [ 3, 7 ], [ 4, 10 ], [ 1, 6 ], [ 1, 4 ], [ 1, 8 ], [ 0, 12 ], [ -1, 9 ], [ -1, 7 ], [ -5, 14 ], [ -3, 6 ], [ -2, 6 ], [ -2, 4 ], [ -3, 3 ], [ -2, 3 ], [ -3, 4 ], [ -6, 3 ], [ -9, 8 ], [ -3, 2 ], [ -7, 8 ], [ -3, 2 ], [ -2, 0 ], [ -2, 1 ], [ -3, 0 ], [ -3, -1 ], [ -5, -3 ], [ -6, -7 ], [ -6, -8 ], [ -5, -1 ], [ -2, 0 ], [ -2, 2 ], [ -2, 3 ], [ -8, 6 ], [ -6, 5 ], [ -5, 3 ], [ -4, 2 ], [ -2, -1 ], [ -2, 0 ], [ -11, -4 ], [ -5, -3 ], [ -5, -1 ], [ -11, 0 ], [ -6, -1 ], [ -26, -10 ], [ -4, -1 ], [ -4, 0 ], [ -1, 1 ], [ -1, 0 ], [ 0, 1 ] ], [ [ 4759, 9216 ], [ 5, 2 ], [ 1, -1 ], [ 1, 1 ], [ 0, -1 ], [ 2, -1 ], [ 17, -9 ], [ 7, -3 ], [ 3, -3 ], [ 5, -5 ], [ 5, -3 ], [ 4, -6 ], [ 2, -3 ], [ 3, -7 ], [ 7, -10 ], [ 3, -6 ], [ 2, -7 ], [ 2, -10 ], [ 3, -8 ], [ 5, -16 ], [ 1, -6 ], [ 2, -8 ], [ 1, -10 ], [ 3, -28 ], [ 0, -12 ], [ 1, -31 ], [ -1, -17 ], [ 0, -43 ], [ 2, -19 ], [ 2, -18 ], [ 0, -5 ], [ 2, -6 ], [ 1, -6 ], [ 2, -3 ], [ 1, -2 ], [ 3, -3 ], [ 3, -3 ], [ 2, -1 ], [ 3, -1 ], [ 5, 0 ], [ 4, 1 ], [ 3, 2 ], [ 7, 7 ], [ 2, 4 ], [ 9, 13 ], [ 6, 11 ], [ 15, 31 ], [ 8, 13 ], [ 2, 4 ], [ 4, 3 ], [ 4, 3 ], [ 3, 3 ], [ 4, 1 ], [ 2, 2 ], [ 7, 0 ], [ 6, -1 ], [ 4, -2 ], [ 5, -4 ], [ 10, -5 ], [ 4, -5 ], [ 7, -3 ], [ 20, -19 ], [ 8, -9 ], [ 11, -8 ], [ 21, -12 ], [ 7, -8 ], [ 8, -5 ], [ 14, -15 ], [ 6, -3 ], [ 2, -2 ], [ 2, -1 ], [ 2, 0 ], [ 0, 1 ] ], [ [ 4254, 8192 ], [ 0, -7 ], [ -1, -3 ], [ -1, -4 ], [ -1, -4 ], [ -4, -8 ], [ -2, -8 ], [ -1, -3 ], [ -2, -1 ], [ -1, 0 ], [ -6, 0 ], [ -3, 2 ], [ -3, 2 ], [ -4, 5 ], [ -4, 6 ], [ 0, 2 ], [ 2, 5 ], [ 0, 8 ], [ -2, 3 ], [ -1, 4 ], [ -3, 3 ], [ -2, 2 ], [ -2, 2 ], [ -2, 2 ], [ -5, 1 ], [ -3, 2 ], [ -7, 6 ], [ 0, 2 ], [ -2, 5 ], [ -3, 16 ], [ -2, 4 ], [ -2, 4 ], [ -1, 3 ], [ -2, 1 ], [ -7, 5 ], [ -8, 3 ], [ -3, 0 ], [ 0, -2 ], [ -1, -17 ], [ -2, -10 ], [ -3, -9 ], [ -6, -20 ], [ 0, -7 ], [ -2, -5 ], [ 0, -6 ], [ -1, -3 ], [ 0, -20 ], [ -1, -10 ], [ 0, -5 ], [ -2, -7 ], [ -1, -4 ], [ -2, -4 ], [ -4, -6 ], [ -2, -3 ], [ -2, -3 ], [ -5, -6 ], [ -20, -13 ], [ -9, -8 ], [ -6, -7 ], [ -6, -6 ], [ -6, -6 ], [ -3, -4 ], [ -2, -5 ], [ -1, -8 ], [ -1, -4 ], [ -1, -5 ], [ 0, -4 ], [ -1, -16 ], [ 0, -5 ], [ -1, -6 ], [ -1, -5 ], [ -2, -6 ], [ -3, -5 ], [ -2, -6 ], [ -4, -5 ], [ -2, -6 ], [ -4, -4 ], [ -11, -12 ], [ -4, -2 ], [ -3, -1 ], [ -10, 0 ], [ -6, 2 ], [ -6, 4 ], [ -20, 12 ], [ -10, 4 ], [ -11, 5 ], [ -8, 2 ], [ -8, 2 ], [ -12, 0 ], [ -2, -1 ], [ -5, -1 ], [ -5, -4 ], [ -2, -4 ], [ -2, -4 ], [ -2, -7 ], [ 0, -5 ], [ 0, -6 ], [ -1, -8 ], [ 0, -33 ], [ -1, -7 ], [ 0, -8 ], [ -1, -6 ], [ -2, -8 ], [ -1, -8 ], [ -2, -5 ], [ -5, -8 ], [ -4, -7 ], [ -3, -4 ], [ -12, -10 ], [ -2, -5 ], [ -4, -4 ], [ -2, -7 ], [ -3, -7 ], [ -10, -25 ], [ -8, -17 ], [ -5, -7 ], [ -9, -14 ], [ -3, -6 ], [ -4, -7 ], [ -3, -7 ], [ -1, -4 ], [ -1, -4 ], [ -1, -3 ], [ 0, -15 ], [ 1, -4 ], [ 0, -6 ], [ 5, -15 ], [ 8, -26 ], [ 2, -5 ], [ 2, -7 ], [ 0, -2 ], [ -2, -2 ], [ 0, -2 ], [ -2, -2 ], [ -2, -2 ], [ -9, -3 ], [ -3, -1 ], [ -3, -3 ], [ -3, -5 ], [ -2, -5 ], [ -2, -3 ], [ -1, -4 ], [ -6, -18 ], [ -1, -9 ], [ -2, -8 ], [ -4, -24 ], [ -3, -24 ], [ -1, -5 ], [ 1, -7 ], [ 0, -6 ], [ 2, -4 ], [ 1, -7 ], [ 2, -3 ], [ 2, -3 ], [ 10, -14 ], [ 9, -13 ], [ 6, -10 ], [ 5, -11 ], [ 4, -9 ], [ 4, -11 ], [ 4, -15 ], [ 4, -11 ], [ 2, -10 ], [ 1, -3 ], [ 0, -6 ], [ 1, -3 ], [ -1, -6 ], [ 0, -4 ], [ -1, -4 ], [ 0, -6 ], [ -2, -4 ], [ -2, -8 ], [ -3, -6 ], [ -5, -10 ], [ -2, -5 ], [ -1, -5 ], [ -1, -5 ], [ 0, -6 ], [ 1, -3 ], [ 1, -7 ], [ 2, -7 ], [ 2, -5 ], [ 3, -8 ], [ 9, -13 ], [ 11, -17 ], [ 6, -8 ], [ 3, -5 ], [ 2, -6 ], [ 4, -15 ], [ 0, -17 ], [ -2, -11 ], [ -2, -8 ], [ 0, -6 ], [ -2, -4 ], [ -6, -9 ], [ -11, -11 ], [ -3, -3 ], [ -2, -3 ], [ -6, -2 ], [ -4, -1 ], [ -11, -1 ], [ -6, 0 ], [ -8, -1 ], [ -4, -1 ], [ -15, -9 ], [ -10, -2 ], [ -13, -4 ], [ -5, -2 ], [ -3, -1 ], [ -1, -1 ], [ -2, -2 ], [ -2, -3 ], [ -1, -3 ], [ -2, -3 ], [ -3, -8 ], [ -4, -10 ], [ -2, -8 ], [ -1, -5 ], [ -2, -11 ], [ 0, -22 ], [ 1, -11 ], [ 3, -14 ], [ 0, -7 ], [ 1, -6 ], [ 0, -3 ], [ -1, -1 ], [ 0, -3 ], [ -3, -9 ], [ -4, -9 ], [ -2, -3 ], [ -1, -2 ] ], [ [ 3729, 9208 ], [ 4, -1 ], [ 9, -3 ], [ 2, -2 ], [ 5, -4 ], [ 3, -2 ], [ 4, -4 ], [ 5, -7 ], [ 18, -9 ], [ 10, -7 ], [ 14, -8 ], [ 26, -18 ], [ 20, -11 ], [ 6, -6 ], [ 3, -1 ], [ 2, -3 ], [ 6, -7 ], [ 4, -8 ], [ 7, -12 ], [ 3, -7 ], [ 5, -2 ], [ 3, -3 ], [ 3, -1 ], [ 3, -2 ], [ 16, -2 ], [ 5, -1 ], [ 5, -1 ], [ 23, -9 ], [ 6, -2 ], [ 6, -1 ], [ 8, 1 ], [ 5, 1 ], [ 4, 1 ], [ 7, 2 ], [ 4, 4 ], [ 3, 2 ], [ 3, 3 ], [ 1, 4 ], [ 2, 4 ], [ 2, 4 ], [ 1, 5 ], [ 5, 12 ], [ 3, 11 ], [ 8, 43 ], [ 6, 18 ], [ 5, 18 ], [ 6, 22 ], [ 4, 14 ], [ 4, 5 ], [ 3, 6 ], [ 2, 3 ], [ 1, 4 ], [ 6, 4 ], [ 5, 1 ], [ 3, 1 ], [ 18, 6 ], [ 11, 3 ], [ 11, 6 ], [ 7, 2 ], [ 8, 0 ], [ 24, -6 ], [ 5, 0 ], [ 10, 1 ], [ 8, 0 ], [ 6, -1 ], [ 6, -2 ], [ 7, -2 ], [ 8, -3 ], [ 19, -8 ], [ 11, -6 ], [ 11, -2 ], [ 4, -1 ], [ 6, -1 ], [ 11, 0 ], [ 16, 2 ], [ 7, 3 ], [ 9, 4 ], [ 6, 3 ] ], [ [ 5159, 7842 ], [ 3, -8 ] ], [ [ 5162, 7834 ], [ 0, -1 ], [ 4, -10 ], [ 4, -6 ], [ 6, -8 ], [ 5, -8 ], [ 10, -8 ], [ 11, -9 ], [ 12, -10 ], [ 20, -16 ], [ 8, -9 ], [ 5, -4 ], [ 3, -6 ], [ 2, -5 ], [ 2, -7 ], [ 1, -8 ], [ 1, -9 ], [ 0, -15 ], [ -1, -7 ], [ -3, -20 ], [ -1, -8 ], [ 0, -23 ], [ 1, -9 ], [ 4, -13 ], [ 3, -13 ], [ 3, -5 ], [ 4, -5 ], [ 5, -5 ], [ 11, -15 ], [ 6, -5 ], [ 11, -18 ], [ 4, -4 ], [ 4, -10 ], [ 2, -7 ], [ 1, -7 ], [ 2, -14 ], [ 2, -8 ], [ 5, -23 ], [ 3, -15 ], [ 2, -3 ], [ 1, -5 ], [ 4, -12 ], [ 4, -6 ], [ 7, -14 ], [ 12, -18 ], [ 2, -3 ], [ 2, -6 ], [ 1, -4 ], [ 3, -2 ], [ 0, -7 ], [ 1, -10 ], [ 0, -4 ], [ -1, -15 ], [ -1, -21 ], [ -2, -11 ], [ 2, -15 ], [ 1, -14 ], [ 2, -12 ], [ 4, -18 ], [ 1, -7 ], [ 0, -5 ], [ 2, -24 ], [ 2, -25 ], [ 2, -15 ], [ 2, -8 ], [ 1, -8 ], [ 4, -7 ], [ 4, -14 ], [ 2, -5 ], [ 2, -7 ], [ 2, -2 ] ], [ [ 5390, 7134 ], [ 0, -1 ], [ -3, -8 ], [ -1, -5 ], [ -2, -9 ], [ 0, -16 ], [ -2, -11 ], [ -2, -12 ], [ -1, -2 ], [ -3, -4 ], [ -1, -1 ], [ -2, -2 ], [ -2, 0 ], [ -2, 0 ], [ -15, 0 ], [ -4, 1 ], [ -4, 2 ], [ -6, -2 ], [ -5, -1 ], [ -7, -9 ] ], [ [ 5328, 7054 ], [ 0, 1 ], [ -1, 0 ], [ -3, 3 ], [ -12, 5 ], [ -13, 3 ], [ -11, 7 ], [ -6, 2 ], [ -13, 7 ], [ -1, 0 ], [ -2, 0 ], [ -2, -1 ], [ -2, -5 ], [ -1, -6 ], [ -2, -8 ], [ -3, -4 ], [ -19, -31 ], [ -13, -16 ], [ -5, -8 ], [ -1, -4 ], [ -10, -20 ], [ -3, -6 ], [ -3, -4 ], [ -2, -3 ], [ -6, -3 ], [ -5, 0 ], [ -4, 2 ], [ -8, 9 ], [ -2, 7 ], [ -1, 3 ], [ -5, 12 ], [ -2, 4 ], [ -4, 4 ], [ -5, 3 ], [ -13, 9 ], [ -5, 4 ], [ -5, 3 ], [ -3, 3 ], [ -4, 7 ], [ -11, 14 ], [ -12, 16 ], [ -8, 11 ], [ -3, 7 ], [ -8, 19 ], [ -5, 10 ], [ -7, 10 ], [ -5, 6 ], [ -7, 12 ], [ -5, 4 ], [ -1, 0 ], [ -6, -10 ], [ -4, -6 ], [ -2, -4 ], [ -2, -4 ], [ -1, -6 ], [ -6, -24 ], [ -2, -9 ], [ -1, -5 ], [ -2, -3 ], [ -2, -4 ], [ -4, -4 ], [ -6, 0 ], [ -5, 3 ], [ -16, 9 ], [ -4, 1 ], [ -5, 2 ], [ -5, 0 ], [ -3, -2 ], [ -2, -2 ], [ -2, -1 ], [ -2, -2 ], [ -2, -2 ], [ -2, -5 ], [ -2, -2 ], [ -3, -4 ], [ -1, -5 ], [ -1, -7 ], [ -2, -13 ], [ 0, -14 ], [ -2, -8 ], [ -2, -6 ], [ 0, -4 ], [ -2, -5 ], [ -3, -4 ], [ -4, -8 ], [ -5, -4 ], [ -3, -5 ], [ -8, -5 ], [ -7, -3 ], [ -4, -1 ], [ -8, -2 ], [ -7, -1 ], [ -2, -2 ], [ -2, -1 ], [ -1, -3 ], [ -3, -5 ], [ -6, -15 ], [ -7, -18 ], [ -2, -5 ], [ 0, -4 ], [ -3, -6 ], [ -7, -10 ], [ -9, -11 ], [ -2, -7 ], [ -1, -3 ], [ -2, -5 ], [ -2, -7 ], [ -1, -10 ], [ -3, -17 ], [ -1, -23 ], [ 0, -10 ], [ -2, -12 ], [ -3, -24 ], [ 0, -47 ], [ 0, -13 ], [ 2, -9 ], [ 0, -7 ], [ 2, -6 ], [ 2, -8 ], [ 3, -8 ], [ 2, -4 ], [ 6, -17 ], [ 4, -8 ], [ 5, -19 ], [ 3, -12 ], [ 5, -21 ], [ 1, -2 ], [ 0, -17 ] ], [ [ 4882, 6567 ], [ -5, -16 ], [ -2, -5 ], [ -1, -8 ], [ -4, -13 ], [ -2, -10 ], [ -2, -8 ], [ -3, -10 ], [ -10, -19 ], [ -2, -3 ], [ -7, -8 ], [ -1, -2 ], [ -7, -10 ], [ -5, -8 ], [ -3, -7 ], [ -2, -1 ], [ 0, -5 ], [ 2, -3 ], [ 0, -1 ], [ 10, -14 ], [ 2, -5 ], [ 1, -3 ], [ 1, -2 ], [ 0, -7 ], [ -3, -8 ], [ -1, -3 ], [ -5, -6 ], [ -3, -5 ], [ -5, -7 ], [ -4, -4 ], [ -4, -4 ], [ -6, -3 ], [ -2, -1 ] ], [ [ 4809, 6358 ], [ -2, 0 ], [ -4, 1 ], [ -6, 3 ], [ -9, 6 ], [ -29, 18 ], [ -15, 8 ], [ -7, 1 ], [ -2, 0 ], [ -3, -1 ], [ -4, -2 ], [ -6, -4 ], [ -10, -7 ], [ -5, -4 ], [ -2, -3 ], [ -2, -2 ], [ 0, -5 ], [ 2, -9 ], [ 0, -7 ], [ -2, -12 ], [ -3, -14 ], [ 0, -10 ], [ 1, -6 ], [ 5, -19 ], [ 1, -9 ], [ 0, -4 ], [ 1, -5 ], [ 0, -4 ], [ -1, -6 ], [ 0, -5 ], [ -1, -6 ], [ -3, -4 ], [ -2, -7 ], [ -2, -7 ], [ -5, -12 ], [ -2, -2 ], [ -3, -4 ], [ -25, -18 ], [ -9, -7 ], [ -3, -1 ], [ -8, 0 ], [ -7, 1 ], [ -7, 3 ], [ -17, 8 ], [ -16, 5 ], [ -12, 0 ], [ -4, -1 ], [ -3, -2 ], [ -6, -4 ], [ -2, -8 ], [ -4, -2 ], [ -7, -9 ], [ -8, -12 ], [ -4, -4 ], [ -4, -4 ], [ -4, 0 ], [ -4, 0 ], [ -5, 0 ], [ -7, 3 ], [ -16, 6 ], [ -9, 3 ], [ -6, 7 ], [ 0, 2 ], [ -2, 6 ], [ 0, 3 ], [ 0, 8 ], [ 2, 14 ], [ 4, 19 ], [ 1, 6 ], [ 3, 6 ], [ 3, 6 ], [ 2, 3 ], [ 15, 16 ], [ 8, 10 ], [ 2, 4 ], [ 2, 10 ], [ 0, 10 ], [ -2, 5 ], [ -4, 17 ], [ -2, 9 ], [ -2, 13 ], [ -3, 22 ], [ -3, 16 ], [ -3, 12 ], [ 0, 6 ], [ -9, 27 ], [ -2, 6 ], [ -7, 12 ], [ -3, 7 ], [ -7, 10 ], [ -3, 3 ], [ -4, 1 ], [ -9, 5 ], [ -6, 3 ], [ -26, 20 ], [ -4, 2 ], [ -8, 5 ], [ -7, 0 ], [ -2, -2 ], [ -1, -3 ], [ -7, -7 ], [ -4, -2 ], [ -7, -4 ], [ -3, -2 ], [ -3, -5 ], [ -6, -5 ], [ -3, -5 ], [ -2, -5 ], [ -7, -13 ], [ -2, -4 ], [ -2, -7 ], [ -5, -11 ], [ -1, -3 ], [ 0, -2 ], [ -2, -2 ], [ -2, -2 ], [ -3, 0 ], [ -12, 2 ], [ -7, 0 ], [ -5, -1 ], [ -22, -6 ], [ -6, 0 ], [ -6, 1 ], [ -19, 4 ], [ -26, 6 ], [ -6, 2 ], [ -7, 2 ], [ -8, 5 ], [ -5, 4 ], [ -12, 8 ], [ -4, 3 ], [ -4, 6 ], [ -5, 4 ], [ -6, 7 ], [ -2, 3 ], [ -3, 7 ], [ -3, 8 ], [ -5, 11 ], [ -10, 18 ], [ -4, 6 ], [ -16, 19 ], [ -13, 17 ], [ -5, 7 ], [ -3, 5 ], [ -3, 7 ], [ -2, 4 ], [ -3, 9 ], [ -4, 17 ], [ -3, 13 ], [ -3, 7 ], [ -5, 6 ], [ -11, 15 ], [ -14, 14 ], [ -4, 4 ], [ -1, 3 ], [ -4, 1 ], [ -3, 1 ], [ -3, 1 ], [ -6, -2 ], [ -4, -1 ], [ -22, -11 ], [ -3, -2 ], [ -3, -1 ], [ -3, -5 ], [ -5, -7 ], [ -2, -3 ], [ -12, -9 ], [ -6, -4 ], [ -2, -1 ], [ -9, 1 ], [ -3, 0 ], [ -2, 1 ], [ -2, 1 ], [ -2, 1 ], [ -1, 2 ], [ -2, 4 ], [ -1, 2 ], [ 0, 18 ], [ 1, 11 ], [ 1, 3 ], [ -1, 2 ], [ 0, 1 ], [ -1, 3 ], [ -1, 1 ], [ -3, 1 ], [ -3, 0 ], [ -2, -2 ], [ -10, -7 ] ], [ [ 3960, 6666 ], [ 0, 10 ], [ 2, 7 ], [ 1, 7 ], [ 3, 6 ], [ 2, 9 ], [ 2, 7 ], [ 4, 5 ], [ 5, 9 ], [ 7, 9 ], [ 6, 10 ], [ 16, 19 ], [ 3, 4 ], [ 2, 4 ], [ 3, 4 ], [ 6, 18 ], [ 1, 4 ], [ 0, 8 ], [ 2, 3 ], [ 0, 5 ], [ 2, 2 ], [ 2, 4 ], [ 12, 9 ], [ 7, 5 ], [ 9, 1 ], [ 8, 0 ], [ 4, -1 ], [ 4, 0 ], [ 5, -1 ], [ 4, -2 ], [ 3, -4 ], [ 16, -10 ], [ 4, -3 ], [ 9, -3 ], [ 15, -6 ], [ 8, -3 ], [ 6, -6 ], [ 20, -13 ], [ 10, -7 ], [ 11, -5 ], [ 6, -3 ], [ 4, -2 ], [ 12, -2 ], [ 16, -2 ], [ 14, 0 ], [ 7, 1 ], [ 8, 2 ], [ 4, 4 ], [ 3, 6 ], [ 3, 6 ], [ 0, 3 ], [ 2, 11 ], [ 5, 39 ], [ 2, 10 ], [ 11, 40 ], [ 3, 10 ], [ 1, 10 ], [ 4, 21 ], [ 5, 21 ], [ 2, 14 ], [ 1, 5 ], [ 2, 5 ], [ 2, 3 ], [ 3, 3 ], [ 4, 4 ], [ 5, 4 ], [ 6, 6 ], [ 12, 6 ], [ 6, 6 ], [ 8, 7 ], [ 3, 3 ], [ 2, 2 ], [ 2, 2 ], [ 1, 5 ], [ 5, 11 ], [ 1, 3 ], [ 2, 4 ], [ 6, 8 ], [ 5, 8 ], [ 5, 11 ], [ 6, 12 ], [ 2, 4 ], [ 3, 6 ], [ 1, 15 ], [ 3, 12 ], [ 4, 8 ], [ 1, 3 ], [ 6, 5 ], [ 11, 4 ], [ 6, 3 ], [ 3, 1 ], [ 14, 1 ], [ 4, 1 ], [ 4, 1 ], [ 8, 6 ], [ 5, 4 ], [ 5, 4 ], [ 3, 3 ], [ 2, 3 ], [ 1, 1 ], [ 2, 3 ], [ 0, 6 ], [ 2, 3 ], [ 2, 5 ], [ 0, 5 ], [ 0, 8 ], [ 1, 18 ], [ 0, 17 ], [ -1, 5 ], [ -2, 6 ], [ -3, 10 ], [ -3, 8 ], [ -2, 6 ], [ -1, 8 ], [ -1, 6 ], [ -1, 4 ], [ 1, 6 ], [ 0, 4 ], [ 2, 7 ], [ 2, 4 ], [ 2, 7 ], [ 2, 3 ], [ 2, 4 ], [ 3, 3 ], [ 12, 9 ], [ 4, 4 ], [ 2, 4 ], [ 1, 3 ], [ 1, 1 ], [ 2, 7 ], [ 6, 25 ], [ 4, 17 ], [ 8, 20 ], [ 3, 8 ], [ 2, 6 ], [ 2, 10 ], [ 2, 11 ], [ 1, 11 ], [ 0, 17 ], [ -1, 8 ], [ -7, 45 ], [ -3, 7 ], [ -2, 9 ], [ -2, 8 ], [ -3, 8 ], [ -5, 12 ], [ -3, 6 ], [ -2, 5 ], [ -2, 7 ], [ 0, 9 ], [ -1, 14 ], [ 1, 39 ], [ 1, 19 ], [ 0, 9 ], [ -2, 7 ], [ -3, 14 ], [ 0, 5 ], [ -3, 18 ], [ -3, 12 ], [ -3, 12 ], [ -7, 20 ], [ -1, 6 ], [ -2, 6 ], [ 0, 6 ], [ 0, 4 ], [ 0, 5 ], [ 0, 3 ], [ 0, 3 ], [ 2, 7 ], [ 3, 7 ], [ 7, 8 ], [ 5, 10 ], [ 15, 19 ], [ 3, 6 ], [ 3, 1 ], [ 2, 2 ], [ 1, 1 ], [ 1, 0 ], [ 0, -4 ], [ 3, -3 ], [ 3, -4 ], [ 37, -32 ], [ 14, -16 ], [ 9, -6 ], [ 17, -15 ], [ 14, -10 ], [ 5, -3 ], [ 8, -5 ], [ 7, 0 ], [ 5, 2 ], [ 5, 3 ], [ 4, 5 ], [ 1, 3 ], [ 2, 3 ], [ 1, 3 ], [ 2, 6 ], [ 1, 9 ], [ 2, 4 ], [ 6, 19 ], [ 9, 17 ], [ 12, 25 ], [ 1, 7 ], [ 3, 7 ], [ 0, 4 ] ], [ [ 3960, 6666 ], [ 1, -4 ], [ 2, -12 ], [ 1, -4 ], [ 2, -4 ], [ 4, -8 ], [ 0, -1 ], [ 0, -1 ], [ 0, -3 ], [ -2, -2 ], [ -8, -5 ], [ -4, -3 ], [ -2, -2 ], [ -1, -3 ], [ -2, -8 ], [ 0, -16 ] ], [ [ 6216, 8420 ], [ 1, -1 ], [ 0, -4 ], [ 2, -8 ], [ 0, -28 ], [ -2, -19 ], [ -3, -61 ], [ -2, -20 ], [ 0, -5 ], [ -2, -4 ], [ -4, -13 ], [ -4, -8 ], [ -9, -17 ], [ -2, -7 ], [ -4, -9 ], [ -4, -11 ], [ -5, -11 ], [ -2, -11 ], [ -2, -10 ], [ -4, -18 ], [ 0, -3 ], [ -2, -7 ], [ -4, -3 ], [ -4, -1 ], [ -3, 0 ], [ -9, -1 ], [ -8, 0 ], [ -4, 1 ], [ -4, 3 ], [ -3, 3 ], [ -8, 9 ], [ -4, 4 ], [ -4, 2 ], [ -2, 1 ], [ -1, 0 ], [ -3, -2 ], [ 0, -3 ], [ -3, -7 ], [ -2, -6 ], [ -6, -13 ], [ -6, -18 ], [ -3, -10 ], [ -6, -14 ], [ -5, -25 ], [ -4, -13 ], [ -14, -34 ], [ 0, -3 ], [ -4, -3 ], [ -1, -4 ], [ -4, -1 ], [ -11, -1 ], [ -3, 1 ], [ -9, 2 ], [ -14, 7 ], [ -5, 2 ], [ -4, 3 ], [ -3, 0 ], [ -4, -2 ], [ -4, -2 ], [ -4, -3 ], [ -4, -6 ], [ -2, -5 ], [ -8, -12 ], [ -5, -9 ], [ -2, -6 ], [ -2, -7 ], [ -3, -16 ], [ -5, -17 ], [ -5, -23 ], [ -2, -9 ], [ -8, -21 ], [ -3, -8 ], [ -1, -6 ], [ -3, -13 ], [ 0, -17 ], [ 1, -16 ], [ 2, -9 ], [ 0, -7 ], [ -2, -4 ], [ 0, -4 ], [ -1, -3 ], [ -2, -9 ], [ -2, -2 ], [ -2, -10 ], [ 0, -5 ], [ -2, -3 ], [ -4, -7 ], [ -3, -3 ], [ -15, -11 ], [ -6, -5 ], [ -14, -7 ], [ -5, -5 ], [ -6, -4 ], [ -15, -18 ], [ -4, -4 ], [ -10, -7 ], [ -3, -3 ], [ -4, -2 ], [ -2, -2 ], [ -8, -1 ], [ -11, -1 ], [ -7, -2 ], [ -3, -3 ], [ -5, -2 ], [ -10, -9 ], [ -3, -2 ], [ -6, -2 ], [ -6, -1 ], [ -6, 0 ], [ -4, 1 ], [ -3, 1 ], [ -7, 2 ], [ -12, 8 ], [ -4, 1 ], [ -3, 1 ], [ -7, 0 ], [ -5, -2 ], [ -4, -1 ], [ -3, -2 ], [ -2, -4 ], [ -5, -3 ], [ -7, -10 ], [ -5, -8 ], [ -4, -5 ], [ -3, -6 ], [ -8, -27 ], [ -2, -4 ], [ -3, -16 ], [ -2, -14 ], [ -3, -18 ], [ 0, -10 ], [ -1, -21 ], [ 0, -13 ], [ 1, -15 ], [ 3, -13 ], [ 1, -12 ], [ 2, -11 ], [ 9, -45 ], [ 1, -9 ], [ 0, -11 ], [ -1, -4 ], [ -4, -13 ], [ -1, -2 ], [ -2, -2 ], [ -3, -2 ], [ -2, -3 ], [ -6, -3 ], [ -1, -1 ], [ -2, 0 ], [ -6, 1 ], [ -8, 2 ], [ -5, 3 ], [ -9, 5 ], [ -6, 2 ], [ -4, 0 ], [ -2, -1 ], [ -3, -1 ], [ -4, -5 ], [ -3, -5 ], [ -3, -4 ], [ -4, -8 ], [ -6, -19 ], [ -8, -16 ], [ -3, -3 ], [ -4, -10 ], [ -6, -9 ], [ -6, -8 ], [ -1, -3 ], [ -5, -19 ], [ -3, -10 ], [ -2, -3 ], [ -3, -5 ], [ -3, -3 ], [ -13, -13 ], [ -5, -4 ], [ -9, -7 ], [ -10, -6 ], [ -3, -1 ], [ -9, -2 ], [ -11, -4 ], [ -5, -2 ], [ -7, -2 ], [ -7, -5 ], [ -6, -4 ], [ -2, -4 ], [ -2, -6 ], [ -2, -10 ], [ -2, -4 ], [ -1, -3 ], [ -2, -2 ], [ -6, -3 ], [ -2, 0 ], [ -6, 1 ], [ -5, 0 ], [ -6, -2 ], [ -7, -4 ], [ -14, -8 ], [ -11, -5 ], [ -9, -8 ], [ -7, -4 ], [ -3, -5 ] ], [ [ 5086, 8895 ], [ 6, 3 ], [ 1, 0 ], [ 12, -2 ], [ 9, -2 ], [ 27, -5 ], [ 12, -1 ], [ 11, -4 ], [ 11, -5 ], [ 8, -2 ], [ 4, -5 ], [ 7, -4 ], [ 5, -3 ], [ 5, -6 ], [ 15, -13 ], [ 4, -5 ], [ 8, -6 ], [ 13, -10 ], [ 31, -20 ], [ 5, -6 ], [ 11, -9 ], [ 4, -5 ], [ 9, -9 ], [ 8, -14 ], [ 5, -5 ], [ 7, -8 ], [ 6, -6 ], [ 5, -3 ], [ 6, -2 ], [ 7, -3 ], [ 4, -2 ], [ 4, 0 ], [ 15, -2 ], [ 10, 0 ], [ 7, 2 ], [ 5, 3 ], [ 9, 3 ], [ 38, 17 ], [ 9, 5 ], [ 18, 14 ], [ 4, 2 ], [ 6, 2 ], [ 4, 1 ], [ 11, 0 ], [ 6, -2 ], [ 4, -6 ], [ 3, -3 ], [ 5, -8 ], [ 5, -10 ], [ 1, -4 ], [ 2, -7 ], [ 1, -7 ], [ 2, -8 ], [ 2, -13 ], [ 5, -26 ], [ 8, -36 ], [ 12, -41 ], [ 3, -12 ], [ 6, -29 ], [ 9, -37 ], [ 3, -14 ], [ 7, -22 ], [ 2, -4 ], [ 1, -3 ], [ 4, -4 ], [ 2, -3 ], [ 3, -1 ], [ 9, -3 ], [ 2, 0 ], [ 7, 2 ], [ 18, 9 ], [ 24, 14 ], [ 16, 9 ], [ 13, 9 ], [ 13, 8 ], [ 8, 3 ], [ 7, 1 ], [ 5, 1 ], [ 7, 0 ], [ 6, -1 ], [ 5, -1 ], [ 7, -4 ], [ 5, -5 ], [ 9, -11 ], [ 5, -8 ], [ 3, -5 ], [ 3, -8 ], [ 5, -20 ], [ 2, -7 ], [ 3, -7 ], [ 3, -18 ], [ 4, -17 ], [ 2, -16 ], [ 0, -15 ], [ 4, -31 ], [ 4, -40 ], [ 2, -9 ], [ 0, -10 ], [ -2, -7 ], [ 0, -3 ], [ -2, -6 ], [ -2, -4 ], [ -8, -21 ], [ -2, -6 ], [ -1, -7 ], [ -1, -4 ], [ -1, -5 ], [ 0, -4 ], [ 1, -4 ], [ 1, -6 ], [ 3, -9 ], [ 4, -7 ], [ 4, -3 ], [ 4, -3 ], [ 7, -5 ], [ 4, -2 ], [ 6, -1 ], [ 3, 0 ], [ 4, 1 ], [ 6, 2 ], [ 2, 5 ], [ 6, 3 ], [ 17, 20 ], [ 5, 6 ], [ 2, 3 ], [ 4, 8 ], [ 4, 9 ], [ 2, 12 ], [ 9, 32 ], [ 4, 15 ], [ 2, 7 ], [ 4, 8 ], [ 2, 8 ], [ 3, 8 ], [ 12, 22 ], [ 7, 13 ], [ 6, 9 ], [ 8, 11 ], [ 5, 8 ], [ 4, 6 ], [ 4, 3 ], [ 4, 1 ], [ 11, 0 ], [ 6, -1 ], [ 5, -1 ], [ 4, -2 ], [ 6, -5 ], [ 6, -4 ], [ 26, -20 ], [ 6, -8 ], [ 8, -9 ], [ 7, -8 ], [ 4, -7 ], [ 21, -35 ], [ 4, -4 ], [ 3, -4 ], [ 3, -2 ], [ 4, 0 ], [ 7, 0 ], [ 5, 1 ], [ 4, 2 ], [ 12, 9 ], [ 3, 6 ], [ 3, 3 ], [ 1, 5 ], [ 2, 4 ], [ 2, 6 ], [ 2, 6 ], [ 2, 11 ], [ 6, 26 ], [ 3, 13 ], [ 2, 14 ], [ 4, 9 ], [ 4, 10 ], [ 2, 4 ], [ 4, 6 ], [ 1, 3 ], [ 2, 1 ], [ 8, 7 ], [ 4, 1 ], [ 9, 0 ], [ 6, -1 ], [ 7, -1 ], [ 6, -1 ], [ 10, -5 ], [ 9, -3 ], [ 8, -6 ], [ 11, -9 ], [ 6, -2 ], [ 4, -2 ] ], [ [ 4888, 5849 ], [ 2, 1 ], [ 2, 2 ], [ 7, 0 ], [ 3, -1 ], [ 5, -3 ], [ 7, -6 ], [ 4, -5 ], [ 3, -4 ], [ 4, -10 ], [ 2, -2 ], [ 3, -2 ], [ 18, -9 ], [ 5, -1 ], [ 8, -3 ], [ 3, -1 ], [ 3, -2 ], [ 2, -2 ], [ 2, -2 ], [ 3, -8 ], [ 2, -5 ], [ 2, -1 ], [ 2, -1 ], [ 3, 0 ], [ 3, -1 ], [ 1, -2 ], [ 1, -5 ], [ 1, -3 ], [ 0, -4 ], [ 1, -6 ], [ 0, -8 ], [ -1, -19 ], [ 0, -3 ], [ 1, -6 ], [ 0, -4 ], [ 2, -4 ], [ 1, -5 ], [ 6, -12 ], [ 5, -9 ], [ 6, -9 ], [ 6, -9 ], [ 8, -9 ], [ 13, -12 ], [ 10, -9 ], [ 5, -4 ], [ 3, -5 ], [ 3, -2 ], [ 8, -10 ], [ 7, -14 ], [ 1, -6 ], [ 2, -8 ], [ 1, -6 ], [ 3, -18 ], [ 0, -7 ] ], [ [ 5080, 5565 ], [ -1, 0 ], [ -3, 0 ], [ 0, -1 ], [ -2, -3 ], [ -1, -4 ], [ 0, -2 ], [ 0, -4 ], [ 0, -19 ], [ 0, -9 ], [ 2, -21 ], [ 1, -11 ], [ 0, -14 ], [ -1, -5 ], [ -1, -6 ], [ -1, -13 ], [ -4, -14 ], [ -2, -10 ], [ -11, -35 ], [ -2, -8 ], [ -10, -21 ], [ -2, -8 ], [ -3, -5 ], [ -1, -6 ], [ -1, -3 ], [ 0, -10 ], [ 0, -23 ], [ -2, -24 ], [ 0, -9 ], [ -2, -12 ], [ 0, -17 ], [ 2, -18 ], [ 2, -9 ], [ 2, -4 ], [ 3, -7 ], [ 3, -5 ], [ 4, -7 ], [ 5, -9 ], [ 22, -32 ], [ 9, -11 ], [ 16, -18 ], [ 12, -16 ], [ 26, -30 ], [ 4, -5 ], [ 10, -18 ], [ 11, -18 ], [ 6, -12 ], [ 3, -2 ], [ 4, -6 ], [ 9, -8 ], [ 3, -3 ], [ 4, -4 ], [ 3, -7 ], [ 3, -4 ], [ 3, -7 ], [ 2, -6 ], [ 0, -5 ], [ 2, -7 ], [ 1, -7 ], [ 3, -27 ], [ 1, -6 ], [ 0, -4 ], [ 1, -6 ], [ 5, -16 ], [ 4, -17 ], [ 2, -6 ], [ 1, -5 ], [ 4, -6 ], [ 2, -6 ], [ 4, -5 ], [ 4, -7 ], [ 12, -12 ], [ 20, -20 ], [ 5, -7 ], [ 4, -8 ], [ 10, -16 ], [ 2, -4 ], [ 0, -2 ], [ 2, -8 ], [ 0, -14 ], [ -1, -2 ], [ 0, -4 ], [ -1, -3 ], [ -4, -8 ], [ -5, -6 ], [ -4, -7 ], [ -2, -1 ], [ -5, -4 ], [ -4, -4 ], [ -6, -7 ], [ -4, -3 ], [ -5, -3 ], [ -4, -1 ], [ -4, 0 ], [ -4, 1 ], [ -2, 1 ], [ -4, 2 ], [ -6, 7 ], [ -7, 9 ], [ -4, 4 ], [ -4, 2 ], [ -2, 0 ], [ -3, -1 ], [ 0, -1 ], [ -1, -1 ], [ 0, -3 ], [ 1, -3 ], [ 0, -4 ], [ 4, -17 ], [ 1, -7 ], [ 0, -8 ], [ -1, -3 ], [ -1, -3 ], [ -1, -1 ], [ -6, -7 ], [ -4, -3 ], [ -2, -6 ], [ -2, -4 ], [ -3, -8 ], [ -2, -5 ], [ -6, -18 ], [ -4, -15 ], [ -2, -5 ], [ -2, -7 ], [ -4, -5 ], [ -6, -7 ], [ -3, -7 ], [ -14, -13 ], [ -5, -9 ], [ -5, -9 ], [ -5, -10 ], [ -9, -20 ], [ -2, -11 ], [ -2, -10 ], [ -2, -10 ], [ -1, -11 ], [ -1, -12 ], [ -2, -44 ], [ 0, -63 ], [ -2, -14 ], [ -1, -7 ], [ -4, -18 ], [ -2, -4 ], [ -1, -5 ], [ -5, -11 ], [ -6, -9 ], [ -7, -10 ], [ -2, -7 ], [ -3, -4 ], [ -9, -19 ], [ -3, -4 ], [ -2, -6 ], [ -3, -4 ], [ -8, -8 ], [ -3, -6 ], [ -3, -5 ], [ -6, -12 ], [ -3, -4 ], [ -19, -19 ], [ -3, -3 ], [ -3, -10 ], [ -2, -7 ], [ 0, -11 ], [ 2, -4 ], [ 1, -6 ], [ 2, -3 ], [ 5, -7 ], [ 7, -10 ], [ 6, -7 ], [ 7, -2 ], [ 8, -1 ], [ 13, -2 ], [ 12, -7 ], [ 15, -10 ], [ 9, -3 ], [ 6, 0 ], [ 3, 1 ], [ 9, 2 ], [ 5, 0 ], [ 2, -1 ], [ 0, -2 ], [ 2, -3 ], [ 1, -3 ], [ 2, -2 ], [ 2, -3 ], [ 0, -5 ], [ 1, -4 ], [ 0, -18 ], [ -1, -7 ], [ 0, -4 ], [ -7, -25 ], [ -4, -27 ], [ -2, -8 ], [ -2, -8 ], [ -2, -5 ], [ -4, -4 ], [ -5, -4 ], [ -10, -6 ], [ -7, -4 ], [ -6, -7 ], [ -2, -3 ], [ -3, -6 ], [ -5, -7 ], [ -9, -23 ], [ -4, -10 ], [ -3, -3 ], [ -2, -4 ], [ -4, -4 ], [ -3, -2 ], [ -3, -1 ], [ -3, 0 ], [ -2, 1 ], [ -5, 3 ], [ -7, 12 ], [ -2, 2 ], [ -2, 2 ], [ -4, 0 ], [ -3, -3 ], [ -2, -3 ], [ -2, -3 ], [ -4, -7 ], [ -12, -20 ], [ -6, -12 ], [ -5, -12 ], [ -7, -17 ], [ -4, -10 ], [ 0, -7 ], [ -2, -9 ], [ 0, -10 ] ], [ [ 4976, 3791 ], [ -7, -4 ], [ -7, -6 ], [ -3, -1 ], [ -4, -4 ], [ -1, -3 ], [ -2, -3 ], [ -3, -9 ], [ -3, -2 ], [ -1, -2 ], [ -2, -4 ], [ -5, -6 ], [ -2, -2 ], [ -1, 0 ], [ -1, -2 ], [ -1, 2 ], [ -2, 1 ], [ -2, 3 ], [ -4, 11 ], [ -4, 10 ] ], [ [ 4044, 4386 ], [ 7, 10 ], [ 3, 2 ], [ 6, 5 ], [ 3, 1 ], [ 3, 0 ], [ 33, 0 ], [ 4, 0 ], [ 17, -9 ], [ 6, -1 ], [ 5, -1 ], [ 6, 0 ], [ 3, 1 ], [ 5, 3 ], [ 4, 7 ], [ 1, 2 ], [ 2, 6 ], [ 4, 14 ], [ 2, 9 ], [ 1, 6 ], [ 2, 3 ], [ 5, 7 ], [ 3, 3 ], [ 6, 3 ], [ 2, 2 ], [ 12, 0 ], [ 16, -2 ], [ 14, 0 ], [ 6, 3 ], [ 4, 2 ], [ 3, 2 ], [ 3, 3 ], [ 3, 4 ], [ 3, 12 ], [ 0, 16 ], [ -1, 4 ], [ -2, 6 ], [ -3, 4 ], [ -2, 2 ], [ -3, 4 ], [ -3, 5 ], [ -5, 5 ], [ -11, 6 ], [ -2, 2 ], [ -2, 4 ], [ -3, 4 ], [ -3, 5 ], [ -3, 5 ], [ -2, 8 ], [ -4, 8 ], [ -1, 5 ], [ -2, 7 ], [ -5, 23 ], [ -4, 13 ], [ -3, 23 ], [ -2, 11 ], [ -2, 6 ], [ -2, 6 ], [ -2, 7 ], [ -1, 3 ], [ -5, 6 ], [ -2, 1 ], [ -3, 1 ], [ -5, 0 ], [ -6, -3 ], [ -6, -6 ], [ -2, -2 ], [ -4, 0 ], [ -1, 1 ], [ -1, 2 ], [ -2, 3 ], [ -3, 8 ], [ -1, 5 ], [ 0, 9 ], [ 1, 3 ], [ 2, 5 ], [ 2, 4 ], [ 3, 8 ], [ 2, 5 ], [ 3, 5 ], [ 5, 5 ], [ 11, 13 ], [ 17, 17 ], [ 4, 6 ], [ 8, 10 ], [ 9, 11 ], [ 2, 6 ], [ 3, 5 ], [ 2, 4 ], [ 0, 21 ], [ -3, 14 ], [ 0, 9 ], [ 1, 3 ], [ 3, 5 ], [ 1, 1 ], [ 2, 0 ], [ 3, -1 ], [ 3, -2 ], [ 10, -8 ], [ 8, -6 ], [ 3, -2 ], [ 4, -4 ], [ 9, -9 ], [ 2, -4 ], [ 4, 0 ], [ 1, 1 ], [ 1, 2 ], [ 0, 2 ], [ 1, 3 ], [ 0, 7 ], [ -1, 8 ], [ -4, 40 ], [ -2, 23 ], [ -2, 11 ], [ -4, 7 ], [ -8, 9 ], [ -3, 5 ], [ -2, 6 ], [ -7, 21 ], [ -2, 8 ], [ -4, 23 ], [ -2, 8 ], [ 0, 2 ], [ 0, 5 ], [ 0, 10 ], [ 0, 4 ], [ 0, 6 ], [ -2, 7 ], [ -1, 4 ], [ -9, 20 ], [ -5, 15 ], [ -2, 18 ], [ 0, 9 ], [ -2, 9 ], [ -2, 7 ], [ -1, 4 ], [ -2, 3 ], [ -3, 7 ], [ -6, 9 ], [ -3, 5 ], [ -2, 4 ], [ 0, 3 ], [ 0, 3 ], [ -1, 5 ], [ 0, 41 ], [ -1, 16 ], [ 0, 7 ], [ -2, 15 ], [ -1, 8 ], [ 0, 5 ], [ 1, 17 ], [ 0, 5 ], [ -1, 16 ], [ -1, 15 ], [ 0, 6 ], [ -1, 9 ], [ -3, 19 ], [ 0, 12 ], [ 2, 9 ], [ 2, 12 ], [ 6, 25 ], [ 2, 9 ], [ 7, 13 ], [ 4, 6 ], [ 8, 11 ] ], [ [ 4194, 5443 ], [ 2, -24 ], [ 3, -22 ], [ 3, -12 ], [ 2, -9 ], [ 2, -9 ], [ 3, -7 ], [ 2, -5 ], [ 4, -6 ], [ 1, -1 ], [ 3, -2 ], [ 4, 0 ], [ 2, 1 ], [ 7, 3 ], [ 12, 5 ], [ 10, 4 ], [ 3, 1 ], [ 5, 0 ], [ 4, -2 ], [ 6, -6 ], [ 3, -6 ], [ 5, -10 ], [ 5, -13 ], [ 4, -5 ], [ 1, -2 ], [ 2, -2 ], [ 5, -2 ], [ 2, 0 ], [ 2, 1 ], [ 3, 1 ], [ 0, 2 ], [ 2, 1 ], [ 2, 3 ], [ 1, 5 ], [ 4, 12 ], [ 6, 22 ], [ 3, 14 ], [ 1, 11 ], [ 6, 50 ], [ 3, 8 ], [ 1, 4 ], [ 2, 6 ], [ 2, 4 ], [ 4, 6 ], [ 1, 1 ], [ 5, 0 ], [ 4, -1 ], [ 3, -3 ], [ 12, -8 ], [ 8, -5 ], [ 8, -1 ], [ 4, -1 ], [ 4, 0 ], [ 6, 1 ], [ 5, 1 ], [ 6, 5 ], [ 25, 15 ], [ 3, 1 ], [ 2, 4 ], [ 3, 4 ], [ 4, 4 ], [ 3, 7 ], [ 9, 29 ], [ 6, 20 ], [ 2, 7 ], [ 4, 11 ], [ 3, 8 ], [ 4, 6 ], [ 4, 7 ], [ 6, 7 ], [ 7, 7 ], [ 4, 2 ], [ 17, 8 ], [ 17, 10 ], [ 2, 2 ], [ 2, 1 ], [ 6, 1 ], [ 4, -1 ], [ 5, -3 ], [ 15, -4 ], [ 10, 0 ], [ 6, 1 ], [ 11, 7 ], [ 13, 8 ], [ 10, 10 ], [ 4, 5 ], [ 2, 5 ], [ 10, 18 ], [ 4, 7 ], [ 4, 6 ], [ 4, 3 ], [ 5, 4 ], [ 2, 2 ], [ 4, 0 ], [ 2, -2 ], [ 3, -3 ], [ 6, -5 ], [ 4, -4 ], [ 4, 0 ], [ 2, 1 ], [ 2, 4 ], [ 2, 4 ], [ 4, 18 ], [ 5, 11 ], [ 2, 8 ], [ 5, 12 ], [ 1, 6 ], [ 2, 13 ], [ 2, 8 ], [ 1, 2 ], [ 1, 3 ], [ 5, 7 ], [ 5, 4 ], [ 3, 4 ], [ 6, 3 ], [ 2, 1 ], [ 6, 0 ], [ 9, -3 ], [ 20, -5 ], [ 4, 0 ], [ 0, 2 ], [ 1, 1 ], [ 0, 14 ], [ 1, 15 ], [ 1, 4 ], [ 4, 17 ], [ 0, 6 ], [ -1, 5 ], [ -3, 13 ], [ -1, 5 ], [ 0, 3 ], [ 1, 2 ], [ 0, 4 ], [ 4, 7 ], [ 9, 13 ], [ 17, 15 ], [ 10, 12 ], [ 2, 1 ], [ 1, 0 ], [ 4, 4 ], [ 3, 0 ], [ 6, -1 ], [ 3, -3 ], [ 1, -1 ], [ 2, -2 ], [ 2, -2 ], [ 8, -11 ], [ 4, -6 ], [ 4, -3 ], [ 8, -9 ], [ 6, -4 ], [ 6, -8 ], [ 6, -11 ], [ 4, -4 ], [ 2, -1 ], [ 3, 0 ], [ 8, 5 ], [ 1, 0 ] ], [ [ 3873, 6378 ], [ 0, -1 ], [ 1, -1 ], [ 3, -5 ], [ 5, -5 ], [ 12, -8 ], [ 22, -12 ], [ 11, -8 ], [ 5, -3 ], [ 6, -9 ], [ 3, -2 ], [ 2, -2 ], [ 1, -1 ], [ 7, -1 ], [ 3, -1 ], [ 11, -10 ], [ 7, -4 ], [ 3, -4 ], [ 3, -3 ], [ 1, -1 ], [ 1, -4 ], [ 3, -13 ], [ 1, -9 ], [ 1, -4 ], [ 0, -6 ], [ -1, -3 ], [ 0, -5 ], [ -1, -4 ], [ -2, -7 ], [ -2, -4 ], [ -3, -3 ], [ -3, -6 ], [ -3, -4 ], [ -14, -15 ], [ -13, -18 ], [ -11, -15 ], [ -12, -15 ], [ -4, -5 ], [ -3, -7 ], [ -6, -14 ], [ -1, -5 ], [ 0, -17 ], [ 1, -4 ], [ 4, -9 ], [ 0, -5 ], [ 2, -5 ], [ 0, -13 ], [ 2, -7 ], [ 0, -7 ], [ 4, -13 ], [ 1, -3 ], [ 0, -5 ], [ 2, -5 ], [ 1, -20 ], [ 2, -37 ], [ 2, -49 ], [ 1, -17 ], [ 1, -13 ], [ 1, -14 ], [ 2, -10 ], [ 3, -9 ], [ 8, -20 ], [ 3, -5 ], [ 1, -3 ], [ 2, -5 ], [ 8, -8 ], [ 3, -2 ], [ 3, -1 ], [ 7, -2 ], [ 24, -4 ], [ 12, -3 ], [ 2, -1 ], [ 3, 0 ], [ 9, 2 ], [ 3, 3 ], [ 4, 2 ], [ 14, 9 ], [ 9, 4 ], [ 4, 4 ], [ 6, 4 ], [ 6, 8 ], [ 2, 2 ], [ 4, 5 ], [ 3, 5 ], [ 5, 13 ], [ 0, 4 ], [ 2, 2 ], [ 2, 0 ], [ 0, 1 ], [ 2, 1 ], [ 5, -2 ], [ 4, -6 ], [ 1, -4 ], [ 2, -10 ], [ 5, -26 ], [ 4, -13 ], [ 8, -20 ], [ 7, -20 ], [ 7, -12 ], [ 5, -9 ], [ 3, -6 ], [ 4, -3 ], [ 8, -7 ], [ 5, -4 ], [ 13, -8 ], [ 10, -7 ], [ 5, -2 ], [ 7, -1 ], [ 2, 0 ], [ 3, -1 ], [ 0, -1 ], [ 2, -2 ], [ 1, -4 ], [ 0, -20 ], [ -3, -32 ], [ -2, -43 ], [ 0, -18 ], [ -3, -30 ], [ -2, -16 ], [ -1, -5 ], [ -1, -3 ], [ -1, -1 ], [ -4, 0 ], [ -2, 3 ], [ -5, 5 ], [ -2, 5 ], [ -3, 2 ], [ -3, 1 ], [ -6, 0 ], [ -3, -1 ], [ -2, -2 ], [ -4, -5 ], [ -3, -3 ], [ -2, -7 ], [ -4, -4 ], [ -2, -7 ], [ 0, -7 ], [ 0, -6 ], [ -2, -9 ], [ 2, -8 ], [ 0, -8 ], [ 0, -4 ], [ 2, -8 ], [ 2, -7 ], [ 7, -10 ], [ 4, -4 ], [ 2, -5 ], [ 3, -3 ], [ 5, -2 ], [ 3, -2 ], [ 4, -3 ], [ 2, -1 ], [ 15, -2 ], [ 6, -3 ] ], [ [ 4809, 6358 ], [ 3, 0 ], [ 20, -4 ], [ 12, -4 ], [ 5, -2 ], [ 6, -1 ], [ 18, -10 ], [ 8, -5 ], [ 6, -2 ], [ 8, -1 ], [ 2, 0 ], [ 4, -1 ], [ 3, -2 ], [ 7, -7 ], [ 14, -17 ], [ 11, -12 ], [ 3, -3 ], [ 3, -6 ], [ 1, -3 ], [ 2, -6 ], [ 1, -4 ], [ 0, -13 ], [ -1, -7 ], [ -3, -19 ], [ 0, -6 ], [ -2, -4 ], [ -5, -14 ], [ -2, -6 ], [ -2, -2 ], [ -1, -4 ], [ -4, -2 ], [ -1, -1 ], [ -4, -1 ], [ -7, -1 ], [ -7, -2 ], [ -3, -5 ], [ -2, -2 ], [ -1, -3 ], [ -2, -4 ], [ 0, -2 ], [ -1, -4 ], [ 0, -6 ], [ 1, -2 ], [ 1, -5 ], [ 2, -3 ], [ 4, -8 ], [ 1, -2 ], [ 2, -3 ], [ 0, -3 ], [ 2, -3 ], [ 0, -1 ], [ -2, -1 ], [ 0, -2 ], [ -3, -9 ], [ -2, -5 ], [ -2, -7 ], [ 0, -6 ], [ -1, -4 ], [ -1, -22 ], [ 0, -10 ], [ -1, -5 ], [ -3, -12 ], [ -3, -7 ], [ -4, -7 ], [ -2, -3 ], [ -4, -5 ], [ -6, -6 ], [ -6, -6 ], [ -2, -2 ], [ -3, -4 ], [ 0, -3 ], [ 0, -3 ], [ -2, -1 ], [ 0, -3 ], [ 2, -3 ], [ 0, -3 ], [ 9, -11 ], [ 3, -6 ], [ 0, -6 ], [ -1, -3 ], [ -9, -5 ], [ -9, -6 ], [ -3, -2 ], [ -3, -2 ], [ -3, -5 ], [ -3, -4 ], [ -2, -5 ], [ 0, -4 ], [ 0, -8 ], [ 2, -10 ], [ 3, -13 ], [ 7, -12 ], [ 6, -10 ], [ 3, -7 ], [ 4, -3 ], [ 6, -7 ], [ 4, -6 ], [ 5, -4 ], [ 3, -3 ] ], [ [ 5312, 6279 ], [ 5, -6 ], [ 9, -12 ], [ 4, -6 ], [ 1, -6 ], [ 2, -6 ], [ 4, -15 ], [ 5, -15 ], [ 3, -8 ], [ 1, -12 ], [ 4, -26 ], [ 5, -35 ], [ 4, -22 ], [ 1, -9 ], [ 4, -13 ], [ 2, -7 ], [ 3, -4 ], [ 4, -5 ], [ 5, -4 ], [ 10, -6 ], [ 4, -1 ], [ 15, -3 ], [ 2, -1 ], [ 8, -7 ], [ 9, -13 ], [ 19, -20 ], [ 3, -3 ], [ 5, -2 ], [ 5, -1 ], [ 8, -1 ], [ 11, -3 ], [ 6, -3 ], [ 17, -2 ], [ 6, -1 ], [ 5, 0 ], [ 3, -2 ], [ 2, -1 ], [ 3, -3 ], [ 3, -5 ], [ 2, -5 ], [ 4, -4 ], [ 4, -10 ], [ 3, -9 ], [ 3, -13 ], [ 8, -29 ], [ 2, -14 ], [ 3, -23 ], [ 2, -8 ], [ 1, -4 ], [ 1, -5 ], [ 2, -4 ], [ 2, -4 ], [ 2, -6 ], [ 5, -3 ], [ 2, -4 ], [ 3, -1 ], [ 5, 0 ], [ 3, 1 ], [ 10, 5 ], [ 2, 1 ], [ 2, 0 ], [ 2, -1 ], [ 5, -6 ], [ 4, -3 ], [ 2, -8 ], [ 0, -8 ], [ -2, -10 ], [ -2, -4 ], [ -3, -7 ], [ -4, -8 ], [ -5, -9 ], [ -11, -15 ], [ -3, -5 ], [ -3, -3 ], [ -3, -1 ], [ -2, 0 ] ], [ [ 5568, 5763 ], [ -1, 0 ], [ -3, -2 ], [ 0, -1 ], [ -2, -3 ], [ 0, -10 ], [ -1, -1 ], [ -2, 0 ], [ 0, 1 ], [ -2, 0 ], [ 0, 3 ], [ 0, 3 ], [ -2, 1 ], [ -2, 5 ], [ -1, 1 ], [ -1, 2 ], [ -1, 5 ], [ -1, 9 ], [ -1, 0 ], [ -2, -2 ], [ -6, -5 ], [ -4, -6 ], [ -6, -13 ], [ -5, -7 ], [ -3, -4 ], [ -7, -10 ], [ -4, -6 ], [ -2, -4 ], [ -5, -12 ], [ -2, -3 ], [ -2, -2 ], [ -5, -4 ], [ -9, -6 ], [ -3, -2 ], [ -4, -1 ], [ -5, 1 ], [ -7, 1 ], [ -15, 7 ], [ -15, 11 ], [ -13, 6 ], [ -8, 8 ], [ -5, 2 ], [ -8, 4 ], [ -3, 0 ], [ -3, -2 ], [ -3, 0 ], [ -2, -2 ], [ -2, -1 ], [ -2, -2 ], [ -6, -8 ], [ -13, -16 ], [ -5, -4 ], [ -7, -3 ], [ -3, -1 ], [ -13, -6 ], [ -12, -6 ], [ -6, -1 ], [ -5, -1 ], [ -11, 0 ], [ -8, 1 ], [ -6, 0 ], [ -3, -1 ], [ -6, -5 ], [ -4, -5 ], [ -4, -6 ], [ -6, -15 ], [ -6, -9 ], [ -3, -8 ], [ -9, -24 ], [ -5, -9 ], [ -5, -7 ], [ -4, -4 ], [ -10, -11 ], [ -10, -8 ], [ -6, -4 ], [ -8, -6 ], [ -4, -1 ], [ -5, -2 ], [ -12, -3 ], [ -8, -4 ], [ -13, -6 ], [ -3, -1 ], [ -3, 0 ], [ -5, 1 ], [ -11, 5 ], [ -14, 2 ], [ -7, 2 ], [ -8, 4 ], [ -13, 7 ], [ -6, 3 ], [ -11, 3 ], [ -1, 0 ] ], [ [ 4882, 6567 ], [ 3, 0 ], [ 2, -1 ], [ 2, -1 ], [ 5, -3 ], [ 22, -19 ], [ 20, -16 ], [ 8, -7 ], [ 6, -4 ], [ 22, -20 ], [ 9, -11 ], [ 5, -5 ], [ 6, -2 ], [ 5, -1 ], [ 10, -1 ], [ 5, -1 ], [ 6, -1 ], [ 7, -3 ], [ 8, -4 ], [ 6, -3 ], [ 18, -14 ], [ 7, -3 ], [ 9, -7 ], [ 4, -2 ], [ 3, -3 ], [ 3, -3 ], [ 7, -11 ], [ 4, -5 ], [ 5, -8 ], [ 3, -6 ], [ 5, -14 ], [ 11, -22 ], [ 2, -5 ], [ 4, -5 ], [ 2, -1 ], [ 2, 0 ], [ 3, -1 ], [ 5, 2 ], [ 3, 0 ], [ 2, -1 ], [ 3, -1 ], [ 3, -4 ], [ 2, -2 ], [ 8, -16 ], [ 2, -2 ], [ 4, -4 ], [ 3, -4 ], [ 6, -2 ], [ 2, -1 ], [ 5, 0 ], [ 4, 2 ], [ 2, 1 ], [ 4, 2 ], [ 5, 0 ], [ 16, -2 ], [ 6, -1 ], [ 7, -1 ], [ 11, -1 ], [ 4, -1 ], [ 7, 0 ], [ 9, 1 ], [ 5, -1 ], [ 2, -1 ], [ 3, -2 ], [ 9, -5 ], [ 9, -8 ], [ 21, -16 ], [ 9, -7 ] ], [ [ 5568, 5763 ], [ 2, -10 ], [ 2, -7 ], [ 2, -9 ], [ 2, -6 ], [ 3, -6 ], [ 2, -3 ], [ 3, -2 ], [ 3, -3 ], [ 4, 0 ], [ 4, 3 ], [ 2, 3 ], [ 8, 9 ], [ 6, 5 ], [ 3, 2 ], [ 16, 0 ], [ 3, -2 ], [ 9, -4 ], [ 3, 0 ], [ 3, 0 ], [ 5, 2 ], [ 7, 0 ], [ 6, -3 ], [ 6, -8 ], [ 8, -5 ], [ 5, -5 ], [ 3, -5 ], [ 17, -28 ], [ 4, -6 ], [ 2, -3 ], [ 5, -6 ], [ 3, -2 ], [ 2, -1 ] ], [ [ 5721, 5663 ], [ 0, -3 ], [ -1, -28 ], [ -1, -12 ], [ 0, -13 ], [ -7, -32 ], [ -3, -13 ], [ -6, -26 ], [ -5, -19 ], [ -5, -12 ], [ -3, -10 ], [ -9, -21 ], [ -12, -29 ], [ -5, -15 ], [ -4, -6 ], [ -2, -5 ], [ -10, -13 ], [ -4, -6 ], [ -3, -6 ], [ -2, -7 ], [ -2, -3 ], [ 0, -5 ], [ -1, -4 ], [ 0, -18 ], [ 1, -4 ], [ 0, -6 ], [ 2, -2 ], [ 1, -2 ], [ 2, -2 ], [ 1, -1 ], [ 11, -3 ], [ 5, -1 ], [ 5, -4 ], [ 2, -4 ], [ 3, -2 ], [ 5, -9 ], [ 7, -12 ], [ 3, -12 ], [ 2, -12 ], [ 2, -12 ], [ 2, -22 ], [ 0, -11 ], [ 2, -9 ], [ 5, -14 ], [ 8, -15 ], [ 7, -10 ], [ 8, -13 ], [ 3, -9 ], [ 3, -8 ], [ 2, -8 ], [ 3, -12 ], [ 2, -8 ], [ 3, -18 ], [ 0, -7 ], [ 1, -6 ], [ 0, -34 ], [ 1, -8 ], [ 3, -16 ], [ 2, -3 ], [ 2, -6 ], [ 2, -3 ], [ 4, -6 ], [ 14, -14 ], [ 18, -16 ], [ 6, -5 ], [ 3, -5 ], [ 2, -3 ], [ 2, -3 ], [ 0, -5 ], [ 0, -3 ], [ 2, -5 ], [ -2, -3 ], [ 0, -2 ], [ -2, -6 ], [ -4, -12 ], [ -7, -21 ], [ -6, -20 ], [ -4, -11 ], [ 0, -19 ], [ 4, -38 ], [ 0, -11 ], [ 2, -10 ], [ 0, -33 ], [ -2, -10 ], [ 0, -30 ], [ 0, -7 ] ], [ [ 5777, 4731 ], [ -2, -3 ], [ -13, -27 ], [ -13, -27 ], [ -2, -8 ], [ -4, -13 ], [ -4, -11 ], [ -4, -17 ], [ -7, -22 ], [ -2, -7 ], [ 0, -3 ], [ -3, -9 ], [ -6, -11 ], [ -3, -4 ], [ -5, -16 ], [ -4, -6 ], [ -1, -4 ], [ -3, -3 ], [ -6, -7 ], [ -5, -1 ], [ -2, -1 ], [ -4, -1 ], [ -18, 0 ], [ -6, 1 ], [ -10, 4 ], [ -11, 8 ], [ -6, 3 ], [ -2, 0 ], [ -2, 1 ], [ -4, 0 ], [ -7, -2 ], [ -4, -2 ], [ -9, -10 ], [ -3, -3 ], [ -5, -7 ], [ -4, -7 ], [ -3, -7 ], [ -3, -8 ], [ -4, -10 ], [ -3, -8 ], [ -2, -9 ], [ -2, -12 ], [ -5, -28 ], [ -3, -13 ], [ -2, -7 ], [ -5, -10 ], [ -2, -4 ], [ -2, -6 ], [ -2, -2 ], [ -1, -4 ], [ -3, -2 ], [ -2, -1 ], [ -3, -1 ], [ -10, -1 ], [ -4, -1 ], [ -2, -1 ], [ -1, -3 ], [ -2, -2 ], [ -2, -2 ], [ -1, -4 ], [ 0, -4 ], [ -1, -2 ], [ 0, -4 ], [ 1, -8 ], [ 3, -18 ], [ 1, -6 ], [ 0, -5 ], [ -4, -16 ], [ -1, -2 ], [ -2, -4 ], [ -2, -4 ], [ -5, -3 ], [ -10, -6 ], [ -4, -2 ], [ -8, -9 ], [ -4, -4 ], [ -3, -8 ], [ -10, -18 ], [ -11, -15 ], [ -3, -9 ], [ -1, -5 ], [ -2, -3 ], [ -1, -7 ], [ -3, -14 ], [ 0, -10 ], [ 1, -10 ], [ 0, -9 ], [ 2, -9 ], [ 4, -30 ], [ 1, -9 ], [ 0, -8 ], [ 0, -33 ], [ 0, -10 ], [ -2, -10 ], [ -2, -7 ], [ -4, -11 ], [ 0, -2 ], [ -2, -9 ], [ 0, -4 ], [ 1, -17 ], [ 0, -7 ], [ -1, -5 ], [ 0, -7 ], [ -3, -11 ], [ -4, -20 ], [ -2, -11 ], [ -3, -9 ], [ -4, -10 ], [ -4, -8 ], [ -4, -9 ], [ -4, -7 ], [ -3, -5 ], [ -1, -2 ], [ -1, 0 ] ], [ [ 5419, 3895 ], [ -9, 10 ], [ -3, 4 ], [ -1, 2 ], [ -5, 4 ], [ -3, 1 ], [ -8, 2 ], [ -3, 0 ], [ -3, 2 ], [ -5, 5 ], [ -3, 1 ], [ -5, 2 ], [ -2, 1 ], [ -2, 2 ], [ -2, 4 ], [ -2, 3 ], [ -6, 9 ], [ 0, 1 ], [ -2, 0 ], [ 0, -1 ], [ -1, -2 ], [ 0, -6 ], [ 0, -7 ], [ -2, -11 ], [ 2, -37 ], [ 0, -17 ], [ -2, -16 ], [ 0, -5 ], [ -2, -10 ], [ 0, -7 ], [ -1, -4 ], [ -1, -5 ], [ -8, -20 ], [ -3, -3 ], [ -4, -7 ], [ -2, -1 ], [ -2, -2 ], [ -2, -1 ], [ -7, 0 ], [ -6, 2 ], [ -4, 3 ], [ -6, 6 ], [ -7, 8 ], [ -6, 6 ], [ -13, 18 ], [ -2, 3 ], [ -7, 14 ], [ -2, 3 ], [ -5, 3 ], [ -3, 2 ], [ -2, 0 ], [ -2, 1 ], [ -10, -4 ], [ -3, -3 ], [ -2, -1 ], [ -8, -17 ], [ -8, -14 ], [ -7, -18 ], [ -10, -22 ], [ -3, -13 ], [ -2, -4 ], [ 0, -13 ], [ 2, -9 ], [ 2, -21 ], [ 2, -14 ], [ 0, -4 ], [ 2, -5 ], [ 0, -3 ], [ -2, -2 ], [ 0, -4 ], [ -1, -2 ], [ -1, -2 ], [ -4, -4 ], [ -8, -6 ], [ -11, -6 ], [ -4, 0 ], [ -3, 2 ], [ -4, 1 ], [ -21, 10 ], [ -4, 2 ], [ -4, 3 ], [ -17, 12 ], [ -6, 6 ], [ -7, 3 ], [ -6, 4 ], [ -7, 2 ], [ -8, 1 ], [ -23, 0 ], [ -11, 0 ], [ -4, 1 ], [ -4, 1 ], [ -5, 2 ], [ -4, 3 ], [ -8, 4 ], [ -8, 8 ], [ -26, 27 ], [ -9, 11 ], [ -7, 8 ], [ -5, 6 ], [ 0, 4 ], [ -2, 3 ], [ 0, 3 ] ], [ [ 5328, 7054 ], [ 0, -1 ], [ 1, -3 ], [ 1, -5 ], [ 1, -3 ], [ 17, -30 ], [ 4, -8 ], [ 2, -3 ], [ 9, -10 ], [ 3, -4 ], [ 3, -2 ], [ 2, 0 ], [ 3, -1 ], [ 2, 0 ], [ 5, 1 ], [ 7, 5 ], [ 4, 1 ], [ 6, 0 ], [ 4, -1 ], [ 3, -1 ], [ 4, -4 ], [ 2, -2 ], [ 5, -4 ], [ 10, -13 ], [ 17, -16 ], [ 2, -6 ], [ 4, -7 ], [ 12, -21 ], [ 8, -18 ], [ 9, -17 ], [ 3, -7 ], [ 4, -4 ], [ 2, -6 ], [ 1, -2 ], [ 10, -9 ], [ 4, -5 ], [ 4, -3 ], [ 5, -1 ], [ 7, -4 ], [ 7, -4 ], [ 13, -2 ], [ 10, -5 ], [ 6, -2 ], [ 5, -3 ], [ 3, -3 ], [ 5, -6 ], [ 6, -10 ], [ 3, -10 ], [ 2, -6 ], [ 2, -10 ], [ 1, -3 ], [ 3, -4 ], [ 3, -4 ], [ 2, -3 ], [ 4, -3 ], [ 10, -6 ], [ 18, -9 ], [ 9, -4 ], [ 3, -2 ], [ 1, -2 ], [ 2, -2 ], [ 4, -3 ], [ 2, -5 ], [ 3, -14 ], [ 0, -39 ], [ 2, -7 ], [ 3, -15 ], [ 3, -9 ], [ 3, -7 ], [ 13, -28 ], [ 2, -5 ], [ 0, -7 ], [ 0, -2 ], [ 0, -4 ], [ -4, -23 ], [ -3, -42 ], [ -4, -24 ], [ -2, -16 ], [ -3, -10 ], [ -3, -12 ], [ 0, -6 ], [ -2, -1 ] ], [ [ 5650, 6458 ], [ 2, 0 ], [ -2, -2 ], [ -2, -7 ], [ -4, -5 ], [ -15, -16 ], [ -15, -21 ], [ -9, -19 ], [ -5, -7 ], [ -3, -4 ], [ -7, -9 ], [ -4, -2 ], [ -15, -10 ], [ -6, -6 ], [ -6, -4 ], [ -10, -15 ], [ -5, -3 ], [ -4, -3 ], [ -2, -4 ], [ -3, -2 ], [ -3, 0 ], [ -9, 0 ], [ -9, 3 ], [ -4, 4 ], [ -5, 3 ], [ -3, 4 ], [ -3, 5 ], [ -3, 7 ], [ -2, 4 ], [ -2, 5 ], [ -1, 5 ], [ -1, 6 ], [ -3, 11 ], [ -2, 25 ], [ -2, 7 ], [ -2, 4 ], [ -2, 11 ], [ -2, 6 ], [ -2, 7 ], [ -3, 3 ], [ -5, 6 ], [ -5, 4 ], [ -5, 6 ], [ -10, 4 ], [ -4, 0 ], [ -4, -1 ], [ -4, -1 ], [ -6, -2 ], [ -6, -6 ], [ -3, -2 ], [ -4, -3 ], [ -5, -6 ], [ -4, -6 ], [ -6, -9 ], [ -2, -5 ], [ -1, -3 ], [ -4, -8 ], [ -2, -9 ], [ -4, -22 ], [ -2, -8 ], [ -4, -12 ], [ -3, -7 ], [ -5, -7 ], [ -3, -4 ], [ -3, -6 ], [ -4, -3 ], [ -4, -2 ], [ -12, -8 ], [ -13, -8 ], [ -4, -4 ], [ -6, -8 ], [ -6, -7 ], [ -3, -3 ], [ -4, -9 ], [ 0, -1 ] ], [ [ 7051, 6568 ], [ 0, -1 ], [ 0, -3 ], [ 2, -11 ], [ 0, -24 ], [ -2, -12 ], [ -2, -12 ], [ 0, -11 ], [ -4, -14 ], [ -2, -15 ], [ -9, -33 ], [ -8, -35 ], [ -13, -66 ], [ -4, -19 ], [ -3, -10 ], [ -3, -11 ], [ -5, -18 ], [ -6, -22 ], [ -2, -6 ], [ -3, -9 ], [ -6, -17 ], [ -2, -4 ], [ -2, -7 ], [ -2, -7 ], [ 0, -29 ], [ 4, -20 ], [ 0, -12 ], [ 0, -24 ], [ 0, -7 ], [ -2, -8 ], [ -5, -19 ], [ -3, -10 ], [ 0, -9 ], [ -1, -8 ], [ 0, -14 ], [ 1, -9 ], [ 3, -20 ], [ 1, -8 ], [ 2, -33 ], [ 0, -19 ], [ -2, -9 ], [ -1, -11 ], [ -3, -13 ], [ -2, -5 ], [ -2, -4 ], [ -1, -6 ], [ -2, -3 ], [ -6, -8 ], [ -21, -29 ], [ -8, -10 ], [ -7, -13 ], [ -8, -15 ], [ -5, -14 ], [ -4, -8 ], [ -6, -10 ], [ -4, -7 ], [ -7, -5 ], [ -6, -5 ], [ -3, -1 ], [ -12, -1 ], [ -6, -1 ], [ -4, -1 ], [ -5, -2 ], [ -2, -1 ], [ -2, -3 ], [ -2, -3 ], [ -2, -1 ], [ 0, -2 ], [ -2, -4 ], [ 0, -5 ], [ 0, -6 ], [ -1, -5 ], [ 1, -7 ], [ 0, -7 ], [ 2, -12 ], [ 4, -21 ], [ 4, -13 ], [ 1, -13 ], [ 3, -14 ], [ 1, -10 ], [ 2, -10 ], [ 4, -48 ], [ 4, -21 ], [ 2, -14 ], [ 3, -17 ], [ 4, -15 ], [ 15, -55 ], [ 2, -5 ], [ 2, -3 ], [ 0, -1 ] ], [ [ 6893, 5455 ], [ 0, -6 ], [ 0, -20 ], [ -2, -22 ], [ 0, -37 ], [ -3, -14 ], [ 0, -3 ], [ 0, -5 ], [ 0, -4 ], [ 1, -6 ], [ 3, -12 ], [ 9, -37 ], [ 2, -3 ], [ 2, -10 ], [ 2, -3 ], [ 0, -5 ], [ -2, -4 ], [ -2, -5 ], [ -2, -4 ], [ -2, -5 ], [ -2, -3 ], [ -4, -3 ], [ -9, -8 ], [ -4, -5 ], [ -2, -3 ], [ -4, -4 ], [ -2, -5 ], [ -3, -9 ], [ 0, -1 ] ], [ [ 6869, 5209 ], [ 0, -5 ] ], [ [ 6869, 5204 ], [ -2, -6 ] ], [ [ 6867, 5198 ], [ -2, -3 ], [ 0, -5 ], [ -4, -2 ], [ -2, -3 ], [ -2, -4 ], [ -9, -5 ], [ -4, -1 ], [ -9, -3 ], [ -10, -1 ], [ -13, 0 ], [ -6, 1 ], [ -8, 2 ], [ -12, 3 ], [ -19, 5 ], [ -12, 3 ], [ -4, 2 ], [ -3, 1 ], [ -14, 9 ], [ -4, 2 ], [ -4, 2 ], [ -11, 3 ], [ -5, -2 ], [ -5, -1 ], [ -5, -2 ], [ -4, -1 ], [ -4, -3 ], [ -4, -5 ], [ -5, -3 ], [ -6, -7 ], [ -13, -15 ], [ -15, -19 ], [ -8, -11 ], [ -10, -15 ], [ -5, -6 ], [ -2, -6 ], [ -4, -9 ], [ -8, -17 ], [ -3, -5 ], [ -2, -6 ], [ -2, -3 ], [ -2, -2 ], [ -2, -1 ], [ -2, -3 ], [ -2, -1 ], [ -9, 0 ], [ -4, 2 ], [ -2, 4 ], [ -2, 2 ], [ -2, 5 ], [ -1, 5 ], [ -3, 6 ], [ -3, 23 ], [ -4, 18 ], [ -4, 12 ], [ -2, 8 ], [ -3, 10 ], [ -4, 6 ], [ -4, 6 ], [ -4, 4 ], [ -7, 5 ], [ -6, 1 ], [ -8, 1 ], [ -8, 1 ], [ -13, -1 ], [ -9, 0 ], [ -6, 1 ], [ -4, 1 ], [ -2, 1 ], [ -1, 2 ], [ -3, 4 ], [ -1, 2 ], [ 0, 3 ], [ 0, 9 ], [ 0, 2 ], [ -2, 1 ], [ -2, -1 ], [ -10, -9 ], [ -2, -1 ], [ -3, -3 ], [ -6, -1 ], [ -5, 0 ], [ -8, 1 ], [ -8, 3 ], [ -4, 2 ], [ -6, 4 ], [ -3, 6 ], [ -6, 8 ], [ -4, 6 ], [ -6, 9 ], [ -3, 8 ], [ -10, 26 ], [ -11, 23 ], [ -4, 4 ], [ -3, 7 ], [ -3, 2 ], [ -1, 4 ], [ -4, 2 ], [ -6, 2 ], [ -21, 1 ], [ -30, 2 ], [ -10, 3 ], [ -4, 1 ], [ -7, 2 ], [ -9, 5 ], [ -4, 4 ], [ -8, 8 ], [ -4, 4 ], [ -6, 9 ], [ -5, 9 ], [ -2, 5 ], [ -6, 16 ], [ -3, 2 ], [ -3, 4 ], [ -3, 3 ], [ -4, 1 ], [ -19, 9 ], [ -12, 5 ], [ -7, 5 ], [ -4, 3 ], [ -4, 4 ], [ -5, 4 ], [ -15, 17 ], [ -8, 7 ], [ -14, 19 ], [ -11, 13 ], [ -5, 3 ], [ -6, 1 ], [ -4, 1 ], [ -5, 0 ], [ -14, 1 ], [ -4, -1 ], [ -4, -2 ], [ -3, -2 ], [ -2, -5 ], [ -2, -10 ], [ -2, -13 ], [ 0, -41 ], [ 0, -8 ], [ -2, -19 ], [ -1, -18 ], [ -1, -9 ], [ -2, -4 ], [ 0, -5 ], [ -2, -7 ], [ -2, -4 ], [ -3, -3 ], [ -4, -7 ], [ -2, -3 ], [ -4, -2 ], [ -7, -5 ], [ -12, -4 ], [ -7, -3 ], [ -6, -6 ], [ -23, -20 ], [ -4, -3 ], [ -2, -3 ], [ -7, 0 ], [ -12, 2 ], [ -15, 3 ], [ -6, 1 ], [ -15, 11 ], [ -9, 8 ], [ -8, 5 ], [ -2, 4 ], [ -2, 2 ], [ -3, 6 ], [ 0, 4 ], [ 0, 7 ], [ 0, 10 ], [ 0, 21 ], [ 3, 21 ], [ 1, 8 ], [ 0, 15 ], [ -1, 6 ], [ -1, 3 ], [ -2, 9 ], [ -4, 8 ], [ -4, 13 ], [ -3, 9 ], [ -6, 20 ], [ 0, 8 ], [ -2, 10 ], [ -2, 22 ], [ 0, 12 ], [ -2, 12 ], [ -4, 24 ], [ -2, 7 ], [ 0, 5 ], [ 0, 9 ], [ 0, 27 ], [ 0, 15 ], [ 0, 15 ], [ -2, 18 ], [ -2, 19 ], [ 0, 7 ], [ -3, 15 ], [ -4, 19 ], [ -2, 10 ], [ 0, 2 ] ], [ [ 5874, 5723 ], [ 0, -1 ], [ 2, -1 ], [ 2, -2 ], [ 5, -3 ], [ 6, 3 ], [ 8, 4 ], [ 4, 2 ], [ 5, 5 ], [ 2, 3 ], [ 4, 3 ], [ 4, 7 ], [ 7, 14 ], [ 2, 4 ], [ 4, 4 ], [ 4, 2 ], [ 6, 0 ], [ 3, -2 ], [ 8, -4 ], [ 4, -2 ], [ 26, -10 ], [ 6, -3 ], [ 2, 1 ], [ 12, 0 ], [ 3, -2 ], [ 2, -2 ], [ 4, -6 ], [ 6, -6 ], [ 4, -7 ], [ 3, -5 ], [ 6, -12 ], [ 9, -16 ], [ 13, -28 ], [ 4, -7 ], [ 4, -3 ], [ 2, -2 ], [ 2, 0 ], [ 0, -1 ], [ 2, 0 ], [ 13, 4 ], [ 4, 0 ], [ 4, 3 ], [ 6, 7 ], [ 1, 3 ], [ 4, 7 ], [ 11, 20 ], [ 4, 10 ], [ 4, 9 ], [ 2, 7 ], [ 2, 6 ], [ 7, 26 ], [ 3, 9 ], [ 7, 18 ], [ 2, 10 ], [ 2, 7 ], [ 0, 7 ], [ 1, 8 ], [ 0, 26 ], [ 3, 11 ], [ 1, 7 ], [ 4, 7 ], [ 2, 7 ], [ 4, 4 ], [ 4, 6 ], [ 3, 4 ], [ 5, 5 ], [ 11, 10 ], [ 1, 2 ], [ 2, 2 ], [ 1, 4 ], [ 0, 5 ], [ -1, 3 ], [ -2, 12 ], [ -1, 6 ], [ 1, 3 ], [ 0, 7 ], [ 2, 5 ], [ 1, 4 ], [ 1, 3 ], [ 3, 4 ], [ 1, 2 ], [ 4, 4 ], [ 4, 4 ], [ 2, 0 ], [ 3, 1 ], [ 4, -1 ], [ 4, -3 ], [ 6, -2 ], [ 13, -7 ], [ 4, -2 ], [ 4, -1 ], [ 7, -1 ], [ 4, 0 ], [ 2, 1 ], [ 4, 3 ], [ 0, 3 ], [ 2, 3 ], [ 0, 3 ], [ 0, 6 ], [ -2, 10 ], [ -2, 20 ], [ -2, 9 ], [ 0, 8 ], [ 2, 10 ], [ 0, 3 ], [ 2, 3 ], [ 0, 4 ], [ 3, 3 ], [ 3, 3 ], [ 11, 11 ], [ 5, 8 ], [ 3, 5 ], [ 3, 4 ], [ 4, 9 ], [ 2, 6 ], [ 0, 37 ], [ 2, 13 ], [ 4, 12 ], [ 3, 7 ], [ 5, 7 ], [ 3, 7 ], [ 6, 7 ], [ 15, 12 ], [ 7, 7 ], [ 8, 10 ], [ 19, 23 ], [ 6, 6 ], [ 11, 7 ], [ 13, 11 ], [ 15, 13 ], [ 7, 9 ], [ 9, 8 ], [ 15, 13 ], [ 6, 3 ], [ 8, 8 ], [ 7, 9 ], [ 4, 6 ], [ 5, 7 ], [ 6, 15 ], [ 4, 7 ], [ 2, 10 ], [ 2, 9 ], [ 5, 24 ], [ 4, 12 ], [ 4, 10 ], [ 2, 3 ], [ 2, 4 ], [ 3, 3 ], [ 4, 2 ], [ 2, 1 ], [ 4, 1 ], [ 6, 0 ], [ 5, -2 ], [ 4, 0 ], [ 4, -4 ], [ 12, -12 ], [ 11, -15 ], [ 15, -17 ], [ 9, -6 ], [ 16, -13 ], [ 9, -5 ], [ 8, -6 ], [ 9, -3 ], [ 6, -3 ], [ 4, -2 ], [ 5, 0 ], [ 2, 2 ], [ 0, 1 ], [ 1, 1 ] ], [ [ 6634, 6346 ], [ 1, -1 ], [ 2, -3 ], [ 4, -3 ], [ 12, -10 ], [ 9, -12 ], [ 6, -9 ], [ 5, -9 ], [ 4, -8 ], [ 9, -15 ], [ 5, -9 ], [ 5, -8 ], [ 6, -11 ], [ 11, -15 ], [ 4, -4 ], [ 4, -4 ], [ 15, -13 ], [ 21, -15 ], [ 25, -16 ], [ 5, -1 ], [ 4, -3 ], [ 4, -1 ], [ 3, -2 ], [ 12, 0 ], [ 4, 2 ], [ 5, 2 ], [ 4, 2 ], [ 6, 6 ], [ 4, 5 ], [ 6, 9 ], [ 3, 8 ], [ 6, 9 ], [ 2, 10 ], [ 11, 25 ], [ 6, 16 ], [ 6, 11 ], [ 5, 11 ], [ 4, 9 ], [ 4, 5 ], [ 17, 23 ], [ 12, 15 ], [ 7, 12 ], [ 2, 5 ], [ 2, 6 ], [ 5, 9 ], [ 6, 18 ], [ 4, 13 ], [ 4, 13 ], [ 4, 9 ], [ 3, 11 ], [ 8, 39 ], [ 2, 10 ], [ 3, 8 ], [ 4, 9 ], [ 4, 11 ], [ 2, 8 ], [ 4, 5 ], [ 4, 6 ], [ 5, 6 ], [ 8, 11 ], [ 11, 15 ], [ 6, 5 ], [ 6, 5 ], [ 5, 2 ], [ 4, 2 ], [ 8, 3 ], [ 4, 0 ], [ 3, -3 ], [ 4, -2 ], [ 2, -2 ], [ 2, -2 ], [ 0, -6 ] ], [ [ 6191, 7243 ], [ 0, -4 ], [ 0, -4 ], [ 0, -4 ], [ -2, -3 ], [ -2, -5 ], [ -4, -9 ], [ -5, -10 ], [ -4, -7 ], [ -6, -8 ], [ -6, -7 ], [ -5, -2 ], [ -4, -2 ], [ -4, -1 ], [ -4, 0 ], [ -5, 1 ], [ -6, 3 ], [ -4, 1 ], [ -7, 8 ], [ -4, 2 ], [ -2, 1 ], [ -2, 0 ], [ -2, -1 ], [ -2, 0 ], [ -2, -1 ], [ -2, -3 ], [ -3, -5 ], [ -2, -4 ], [ -4, -8 ], [ -7, -19 ], [ -3, -4 ], [ -5, -7 ], [ -4, -6 ], [ -4, -3 ], [ -6, -3 ], [ -13, -7 ], [ -6, -4 ], [ -7, -6 ], [ -13, -16 ], [ -6, -4 ], [ -5, -4 ], [ -8, -6 ], [ -12, -6 ], [ -6, -2 ], [ -5, -3 ], [ -10, -10 ], [ -7, -12 ], [ -2, -6 ], [ -2, -4 ], [ -2, -6 ], [ -6, -17 ], [ -1, -7 ], [ -3, -7 ], [ -3, -6 ], [ -2, -5 ], [ -4, -6 ], [ -3, -2 ], [ -4, -3 ], [ -6, -4 ], [ -6, -2 ], [ -4, 0 ], [ -15, -1 ], [ -6, -1 ], [ -5, -2 ], [ -4, -1 ], [ -8, -6 ], [ -7, -3 ], [ -6, 0 ], [ -2, 2 ], [ -6, 4 ], [ -3, 8 ], [ -2, 6 ], [ -8, 16 ], [ -6, 13 ], [ -3, 4 ], [ -2, 2 ], [ -11, 8 ], [ -3, 1 ], [ -3, 0 ], [ -4, 1 ], [ -2, -1 ], [ -2, 0 ], [ -4, -1 ], [ -1, -2 ], [ -6, -5 ], [ -8, -9 ], [ -2, -4 ], [ -5, -3 ], [ -4, -4 ], [ -4, -2 ], [ -2, -1 ], [ -17, -6 ], [ -5, -3 ], [ -6, -3 ], [ -4, -5 ], [ -2, -3 ], [ -2, -2 ], [ 0, -5 ], [ 0, -3 ], [ 0, -17 ], [ 0, -6 ], [ 2, -12 ], [ 7, -24 ], [ 6, -29 ], [ 3, -11 ], [ 4, -20 ], [ 3, -10 ], [ 3, -13 ], [ 6, -46 ], [ 2, -16 ], [ 4, -11 ], [ 2, -6 ], [ 2, -7 ], [ 2, -8 ], [ 3, -5 ], [ 4, -9 ], [ 4, -7 ], [ 13, -23 ], [ 6, -11 ], [ 2, -4 ], [ 0, -3 ], [ 2, -3 ], [ 0, -16 ], [ -2, -6 ], [ 0, -5 ], [ -2, -7 ], [ -2, -6 ], [ -10, -23 ], [ -3, -9 ], [ -2, -6 ], [ -2, -16 ], [ -4, -19 ], [ -2, -6 ], [ -2, -7 ], [ 0, -7 ], [ -1, -4 ], [ 0, -20 ], [ 1, -7 ], [ 2, -19 ], [ 0, -5 ], [ -2, -3 ], [ 0, -1 ], [ 0, -1 ], [ -1, 0 ], [ -4, -1 ], [ -6, 1 ], [ -6, -2 ], [ -2, -1 ], [ -3, -3 ], [ -3, -5 ], [ -5, -18 ], [ -3, -6 ], [ -3, -6 ], [ -2, -4 ], [ -5, -5 ], [ -2, -1 ], [ -2, -1 ], [ -3, -2 ], [ -3, -1 ], [ -6, -2 ], [ -9, 0 ], [ -5, 2 ], [ -12, 4 ], [ -9, 5 ], [ -16, 9 ], [ -10, 6 ], [ -6, 7 ], [ -16, 13 ] ], [ [ 6216, 8420 ], [ 1, 0 ], [ 6, -5 ], [ 2, -1 ], [ 4, 2 ], [ 4, 6 ], [ 2, 1 ], [ 0, 4 ], [ 4, 5 ], [ 1, 1 ], [ 6, 7 ], [ 2, 2 ], [ 4, 0 ], [ 2, -1 ], [ 1, -3 ], [ 2, 0 ], [ 1, -2 ], [ 4, -3 ], [ 3, -4 ], [ 4, -6 ], [ 7, -10 ], [ 16, -26 ], [ 13, -22 ], [ 6, -7 ], [ 8, -15 ], [ 11, -21 ], [ 13, -30 ], [ 10, -18 ], [ 7, -13 ], [ 13, -20 ], [ 6, -9 ], [ 13, -21 ], [ 6, -11 ], [ 4, -11 ], [ 7, -15 ], [ 4, -10 ], [ 4, -12 ], [ 2, -11 ], [ 2, -9 ], [ 0, -10 ], [ 0, -9 ], [ 0, -7 ], [ 0, -2 ], [ -2, -9 ], [ -2, -7 ], [ -4, -5 ], [ -2, -8 ], [ -4, -7 ], [ -5, -6 ], [ -10, -14 ], [ -2, -4 ], [ -3, -7 ], [ -4, -6 ], [ 0, -5 ], [ -2, -4 ], [ -4, -27 ], [ -2, -9 ], [ 0, -4 ], [ -3, -10 ], [ -8, -24 ], [ -2, -4 ], [ -2, -8 ], [ 0, -5 ], [ -2, -19 ], [ 0, -12 ], [ -2, -10 ], [ -2, -4 ], [ -1, -4 ], [ -4, -12 ], [ -6, -12 ], [ -23, -42 ], [ -5, -10 ], [ -4, -7 ], [ -10, -12 ], [ -2, -2 ], [ -3, -2 ], [ -8, -5 ], [ -4, -1 ], [ -10, 2 ], [ -12, 5 ], [ -4, 1 ], [ -8, 0 ], [ -2, -1 ], [ -2, -3 ], [ -3, -2 ], [ -7, -8 ], [ -9, -20 ], [ -11, -22 ], [ -4, -8 ], [ -4, -5 ], [ -4, -5 ], [ -7, -4 ], [ -4, -1 ], [ -10, -5 ], [ -4, -2 ], [ -11, -11 ], [ -6, -3 ], [ -3, -4 ], [ -2, -3 ], [ -4, -2 ], [ -9, -20 ], [ -4, -6 ], [ -2, -2 ], [ -2, -4 ], [ -8, -9 ], [ -3, -4 ], [ -12, -23 ], [ -2, -7 ], [ 0, -4 ], [ 0, -19 ], [ -1, -4 ], [ -4, -6 ], [ -4, -2 ], [ -8, 0 ], [ -3, -1 ], [ -3, -4 ], [ -5, -2 ], [ 0, -3 ], [ -2, -4 ], [ -2, -4 ], [ -3, -9 ], [ 0, -2 ], [ -3, -7 ], [ 0, -9 ], [ 0, -4 ], [ 0, -6 ], [ 0, -5 ], [ 0, -4 ], [ 2, -4 ], [ 2, -8 ], [ 8, -31 ], [ 3, -11 ], [ 3, -9 ], [ 1, -4 ], [ 2, -4 ], [ 2, -3 ], [ 4, -2 ], [ 2, -4 ], [ 4, -1 ], [ 11, -4 ], [ 6, -5 ], [ 5, -2 ], [ 8, -10 ], [ 4, -10 ], [ 1, -4 ], [ 7, -17 ], [ 1, -6 ], [ 2, -5 ], [ 8, -18 ], [ 7, -16 ], [ 4, -14 ], [ 8, -25 ], [ 8, -24 ], [ 3, -14 ], [ 2, -4 ] ], [ [ 5874, 5723 ], [ -2, 0 ], [ -2, 0 ], [ -2, -2 ], [ -2, -7 ], [ -3, -13 ], [ -2, -8 ], [ -2, -2 ], [ 0, -1 ], [ -2, -1 ], [ -2, -2 ], [ -4, -1 ], [ -4, 0 ], [ -5, 1 ], [ -8, 2 ], [ -8, 4 ], [ -3, 2 ], [ 0, 2 ], [ -2, 4 ], [ -2, 4 ], [ 0, 5 ], [ 0, 4 ], [ 0, 15 ], [ -2, 2 ], [ -2, 0 ], [ -4, -2 ], [ -7, 0 ], [ -6, 2 ], [ -6, 3 ], [ -1, 1 ], [ 0, 1 ], [ -1, 0 ], [ 0, -3 ], [ -5, -16 ], [ 0, -6 ], [ -2, -6 ], [ -4, -5 ], [ -4, -4 ], [ -2, -1 ], [ -3, -1 ], [ -11, 0 ], [ -3, 0 ], [ -2, -2 ], [ -1, -2 ], [ -1, -5 ], [ -1, -11 ], [ -2, -6 ], [ -1, -3 ], [ -3, -3 ], [ -4, -4 ], [ -1, -1 ], [ -4, 0 ], [ -3, 1 ], [ -10, 6 ], [ -1, 0 ], [ -1, -1 ] ], [ [ 6191, 7243 ], [ 4, 2 ], [ 2, 3 ], [ 9, 10 ], [ 0, 3 ], [ 2, 1 ], [ 0, 9 ], [ 2, 7 ], [ 6, 13 ], [ 1, 7 ], [ 2, 3 ], [ 4, 3 ], [ 4, 3 ], [ 4, 2 ], [ 0, -1 ], [ 4, -1 ], [ 13, -4 ], [ 15, -4 ], [ 11, -3 ], [ 8, -4 ], [ 4, -2 ], [ 7, -6 ], [ 6, -4 ], [ 2, -3 ], [ 0, -4 ], [ 2, -2 ], [ 4, -9 ], [ 4, -15 ], [ 1, -8 ], [ 0, -14 ], [ 3, -28 ], [ 1, -7 ], [ 2, -13 ], [ 2, -11 ], [ 4, -13 ], [ 4, -12 ], [ 5, -15 ], [ 4, -10 ], [ 2, -6 ], [ 10, -18 ], [ 5, -8 ], [ 10, -10 ], [ 4, -1 ], [ 5, -2 ], [ 19, -4 ], [ 6, -1 ], [ 4, -2 ], [ 5, -2 ], [ 4, -4 ], [ 4, -6 ], [ 4, -7 ], [ 13, -23 ], [ 21, -52 ], [ 6, -16 ], [ 11, -34 ], [ 12, -32 ], [ 7, -22 ], [ 12, -22 ], [ 3, -8 ], [ 4, -8 ], [ 9, -17 ], [ 4, -6 ], [ 10, -24 ], [ 7, -15 ], [ 10, -20 ], [ 4, -7 ], [ 13, -15 ], [ 4, -8 ], [ 2, -5 ], [ 5, -6 ], [ 6, -15 ], [ 2, -6 ], [ 4, -9 ], [ 2, -10 ], [ 3, -9 ], [ 0, -6 ], [ 2, -6 ], [ 2, -16 ], [ 2, -9 ], [ 0, -9 ], [ 0, -10 ], [ 0, -38 ], [ 2, -24 ], [ 0, -18 ], [ 2, -24 ], [ 2, -25 ], [ 2, -6 ], [ 0, -8 ], [ 2, -13 ], [ 3, -14 ], [ 4, -12 ], [ 10, -28 ], [ 3, -10 ], [ 2, -8 ], [ 2, -8 ], [ 1, -9 ], [ 0, -9 ] ], [ [ 6354, 4093 ], [ 0, 2 ] ], [ [ 6354, 4095 ], [ 0, -1 ] ], [ [ 6354, 4094 ], [ 0, -1 ] ], [ [ 6964, 4168 ], [ -2, -2 ], [ -2, -7 ], [ -6, -20 ], [ 0, -7 ], [ -2, -25 ], [ 0, -7 ], [ -2, -7 ], [ -5, -6 ], [ 0, -2 ], [ -4, -2 ], [ -4, -1 ], [ -6, 0 ], [ -5, 3 ], [ -19, 10 ], [ -19, 5 ], [ -4, 0 ], [ 0, -2 ], [ -2, -1 ], [ -2, -6 ], [ -2, -5 ], [ 0, -9 ], [ 0, -33 ], [ 0, -16 ], [ 0, -19 ], [ -1, -29 ], [ 0, -13 ], [ 1, -7 ], [ 2, -2 ], [ 2, -2 ], [ 2, -2 ], [ 5, -5 ], [ 31, -14 ], [ 26, -16 ], [ 6, -1 ], [ 6, -2 ], [ 6, -1 ], [ 9, -3 ], [ 8, -3 ], [ 5, -1 ], [ 2, -2 ], [ 3, -1 ], [ 1, -3 ], [ 0, -3 ], [ -1, -1 ], [ -3, -3 ], [ -7, -7 ], [ -4, -4 ], [ -4, -7 ], [ -1, -6 ], [ -3, -3 ], [ -1, -7 ], [ -4, -15 ], [ -6, -15 ], [ -8, -15 ], [ 0, -6 ], [ -2, -3 ], [ -2, -8 ], [ -1, -9 ], [ -2, -8 ], [ 0, -10 ], [ 0, -19 ], [ 0, -21 ], [ 2, -13 ], [ 3, -21 ], [ 6, -45 ], [ 2, -12 ], [ 2, -13 ], [ 2, -14 ], [ 4, -10 ], [ 5, -12 ], [ 8, -17 ], [ 2, -4 ], [ 2, -7 ], [ 3, -14 ], [ 6, -20 ], [ 1, -3 ], [ 0, -8 ], [ -1, -6 ], [ -2, -3 ], [ -4, -9 ], [ -1, -1 ], [ -10, -12 ], [ -4, -6 ], [ -5, -11 ], [ -2, -9 ], [ -4, -14 ], [ 0, -16 ], [ 2, -9 ], [ 2, -2 ], [ 7, -19 ], [ 3, -3 ], [ 3, -6 ], [ 6, -9 ], [ 19, -25 ], [ 21, -27 ], [ 22, -28 ], [ 2, -4 ], [ 2, -1 ] ], [ [ 7047, 3299 ], [ 0, -6 ], [ -2, -3 ], [ -1, -7 ], [ -3, -2 ], [ 0, -2 ], [ -3, -3 ], [ -2, -2 ], [ -2, -1 ], [ -4, 0 ], [ -8, 0 ], [ -11, 0 ], [ -4, 1 ], [ -7, -1 ], [ -2, -1 ], [ -2, -2 ], [ 0, -3 ], [ -2, -2 ], [ -3, -9 ], [ 0, -3 ], [ -1, -4 ], [ 0, -10 ], [ 1, -6 ], [ 1, -13 ], [ 6, -34 ], [ 4, -22 ], [ 1, -12 ], [ 2, -14 ], [ 0, -16 ], [ -2, -2 ], [ -1, -7 ], [ -12, -30 ], [ -3, -8 ], [ -3, -10 ], [ -3, -10 ], [ -2, -10 ], [ 0, -7 ], [ 0, -13 ], [ 2, -4 ], [ 2, -6 ], [ 3, -9 ], [ 2, -4 ], [ 4, -7 ], [ 13, -20 ], [ 4, -9 ], [ 0, -2 ], [ 1, -4 ], [ 0, -3 ], [ -1, -1 ], [ 0, -3 ], [ -2, -4 ], [ -1, -2 ], [ -3, -2 ], [ -3, -3 ], [ -4, -4 ], [ -5, -4 ], [ -12, -8 ], [ -6, -2 ], [ -8, -2 ], [ -7, 0 ], [ -25, 5 ], [ -6, 1 ], [ -5, 0 ], [ -10, -1 ], [ -9, 0 ], [ -14, 1 ], [ -5, 1 ], [ -4, 3 ], [ -7, 2 ], [ -19, 9 ], [ -10, 4 ], [ -15, 10 ], [ -6, 7 ], [ -6, 8 ], [ -9, 11 ], [ -4, 3 ], [ -6, 7 ], [ -3, 2 ], [ -6, 2 ], [ -3, 1 ], [ -7, 1 ], [ -5, 0 ], [ -4, -1 ], [ -3, -3 ], [ -1, -2 ], [ -2, -6 ], [ -1, -3 ], [ -1, -6 ], [ 0, -5 ], [ -2, -15 ], [ -5, -20 ], [ -6, -12 ], [ -1, -2 ], [ -3, -2 ], [ -2, -3 ], [ -3, -1 ], [ -2, -1 ], [ -2, 1 ], [ -2, 0 ], [ 0, 1 ] ], [ [ 6734, 2919 ], [ -8, 7 ], [ -2, 2 ], [ -9, 10 ], [ -5, 6 ], [ -1, 0 ], [ -2, -1 ], [ 0, -1 ], [ 0, -3 ], [ -2, -5 ], [ -2, -8 ], [ -1, -3 ], [ 0, -6 ], [ 0, -1 ], [ -2, 0 ], [ -4, 2 ], [ 0, 2 ], [ -4, 8 ], [ -1, 4 ], [ -1, 2 ], [ -3, 2 ], [ -3, 0 ], [ -3, 0 ], [ -9, 0 ], [ -4, -1 ], [ -3, 1 ], [ -1, 0 ], [ -2, 1 ], [ 0, 1 ], [ 0, -1 ], [ -6, -8 ], [ -2, -3 ], [ -13, -20 ], [ -4, -6 ], [ -2, -3 ], [ -1, -3 ], [ -10, -24 ], [ -2, -4 ], [ -4, -7 ], [ -6, -5 ], [ -1, -4 ], [ -4, -3 ], [ -6, -12 ], [ 0, -4 ], [ 0, -23 ], [ -2, -8 ], [ 0, -3 ], [ -2, -2 ], [ -4, 0 ], [ -3, 1 ], [ -2, 1 ], [ -2, 0 ], [ -2, -1 ], [ -4, -2 ], [ -6, -6 ], [ -5, -3 ], [ -2, -1 ], [ -2, -4 ], [ -2, -7 ], [ 0, -6 ], [ 0, -18 ], [ 0, -5 ], [ 2, -4 ] ], [ [ 6565, 2740 ], [ 0, -1 ], [ -2, 0 ], [ -5, 4 ], [ -3, 3 ], [ -3, 3 ], [ -4, 6 ], [ -8, 12 ], [ -7, 11 ], [ -4, 12 ], [ -4, 10 ], [ -8, 27 ], [ -3, 8 ], [ -4, 5 ], [ -5, 10 ], [ -12, 17 ], [ -4, 8 ], [ -10, 11 ], [ -3, 6 ], [ -6, 12 ], [ 0, 3 ], [ -2, 8 ], [ -1, 7 ], [ 0, 6 ], [ -1, 15 ], [ -2, 6 ], [ 0, 7 ], [ -2, 18 ], [ -2, 11 ], [ 0, 16 ], [ 2, 34 ], [ 0, 37 ], [ -2, 10 ], [ -1, 9 ], [ -2, 6 ], [ -2, 8 ], [ -7, 31 ], [ -3, 20 ], [ -1, 10 ], [ -3, 6 ], [ -1, 4 ], [ -2, 7 ], [ -2, 4 ], [ -2, 6 ], [ -4, 8 ], [ -4, 3 ], [ -2, 3 ], [ -3, 4 ], [ -8, 5 ], [ -6, 5 ], [ -11, 3 ], [ -12, 2 ], [ -9, 6 ], [ -4, 1 ], [ -9, 0 ], [ -10, 6 ], [ -5, 3 ], [ -4, 1 ], [ -4, 7 ], [ 0, 3 ], [ -2, 2 ], [ -2, 4 ], [ 0, 4 ], [ -1, 4 ], [ -3, 23 ], [ -1, 11 ], [ 0, 22 ], [ 1, 18 ], [ 3, 30 ], [ 1, 25 ], [ 0, 12 ], [ -1, 5 ], [ -3, 9 ], [ -3, 9 ], [ 0, 5 ], [ -2, 7 ], [ -2, 8 ], [ 0, 21 ], [ -2, 35 ], [ -3, 28 ], [ -1, 12 ], [ 0, 22 ] ], [ [ 6318, 3569 ], [ 1, 0 ], [ 1, 1 ], [ 0, 1 ], [ 2, 3 ], [ 2, 7 ], [ 2, 8 ], [ 2, 6 ], [ 5, 22 ], [ 4, 23 ], [ 2, 8 ], [ 2, 4 ], [ 0, 5 ], [ 0, 4 ], [ 0, 3 ], [ 0, 6 ], [ -2, 6 ], [ -4, 14 ], [ -4, 10 ], [ -3, 6 ], [ -6, 10 ], [ -3, 6 ], [ -3, 7 ], [ -2, 6 ], [ -2, 6 ], [ -3, 9 ], [ 0, 7 ], [ 0, 3 ], [ 0, 1 ], [ 2, 2 ], [ 5, 0 ], [ 8, -3 ], [ 4, -1 ], [ 3, 0 ], [ 4, 0 ], [ 8, 4 ], [ 4, 5 ], [ 9, 14 ], [ 6, 10 ], [ 7, 16 ], [ 4, 8 ], [ 2, 5 ], [ 4, 10 ], [ 2, 11 ], [ 2, 10 ], [ 1, 12 ], [ 0, 16 ], [ -1, 8 ], [ 0, 6 ], [ -2, 5 ], [ -2, 7 ], [ -2, 3 ], [ -2, 6 ], [ -4, 4 ], [ -6, 7 ], [ -11, 10 ], [ -4, 3 ], [ -3, 6 ], [ -6, 6 ], [ -2, 5 ], [ -2, 5 ], [ -2, 13 ], [ 0, 10 ], [ 0, 3 ], [ 2, 8 ], [ 6, 21 ], [ 2, 13 ], [ 4, 14 ], [ 4, 25 ], [ 1, 12 ], [ 0, 10 ] ], [ [ 6354, 4090 ], [ 0, 3 ] ], [ [ 6354, 4093 ], [ 0, -2 ], [ 2, -2 ], [ 4, -2 ], [ 4, 0 ], [ 5, 4 ], [ 4, 4 ], [ 2, 4 ], [ 4, 6 ], [ 4, 5 ], [ 5, 9 ], [ 8, 17 ], [ 0, 4 ], [ 6, 6 ], [ 5, 4 ], [ 6, 5 ], [ 6, 1 ], [ 7, 0 ], [ 3, 0 ], [ 1, -2 ], [ 2, -1 ], [ 6, -7 ], [ 2, -2 ], [ 7, -2 ], [ 6, 0 ], [ 10, 3 ], [ 9, 1 ], [ 15, 7 ], [ 4, 1 ], [ 7, 0 ], [ 4, -1 ], [ 6, -3 ], [ 9, -4 ], [ 6, -2 ], [ 8, -2 ], [ 8, -3 ], [ 9, 0 ], [ 7, 1 ], [ 4, 0 ], [ 3, 2 ], [ 5, 4 ], [ 4, 2 ], [ 0, 2 ], [ 2, 4 ], [ 1, 6 ], [ 4, 10 ], [ 0, 7 ], [ 2, 9 ], [ 10, 67 ], [ 3, 13 ], [ 2, 10 ], [ 2, 9 ], [ 0, 2 ], [ 2, 4 ], [ 2, 1 ], [ 0, 2 ], [ 2, 0 ], [ 0, -1 ], [ 0, -1 ], [ 2, -1 ], [ 29, -13 ], [ 9, -2 ], [ 9, -1 ], [ 6, -1 ], [ 11, 0 ], [ 4, 1 ], [ 6, 2 ], [ 15, 8 ], [ 2, 1 ], [ 4, 0 ], [ 5, -1 ], [ 6, -1 ], [ 4, -3 ], [ 14, -7 ], [ 3, -2 ], [ 4, -1 ], [ 7, 0 ], [ 14, 3 ], [ 7, 2 ], [ 8, 0 ], [ 10, -2 ], [ 13, -2 ], [ 11, -5 ], [ 8, -3 ], [ 6, -5 ], [ 7, -4 ], [ 4, -4 ], [ 13, -13 ], [ 34, -32 ], [ 8, -5 ], [ 10, -7 ], [ 7, -6 ], [ 23, -14 ], [ 8, -2 ], [ 7, -4 ], [ 13, -2 ], [ 8, 1 ], [ 2, 1 ] ], [ [ 6453, 3344 ], [ -2, -1 ], [ 0, -6 ], [ -2, -14 ], [ 0, -10 ], [ 0, -10 ], [ 0, -8 ], [ 2, -6 ], [ 2, -9 ], [ 2, -10 ], [ 2, -5 ], [ 0, -4 ], [ -2, -5 ], [ -2, -13 ], [ 0, -7 ], [ -2, -6 ], [ 0, -9 ], [ 2, -5 ], [ 0, -1 ], [ 2, -1 ], [ 4, 0 ], [ 5, 1 ], [ 3, 1 ], [ 3, 5 ], [ 4, 2 ], [ 5, 7 ], [ 3, 3 ], [ 3, 4 ], [ 4, 14 ], [ 2, 2 ], [ 2, 3 ], [ 0, 7 ], [ -2, 2 ], [ -4, 8 ], [ -2, 3 ], [ -2, 4 ], [ -4, 2 ], [ -3, 2 ], [ -2, 1 ], [ -4, 7 ], [ 0, 2 ], [ 0, 5 ], [ -2, 4 ], [ 0, 3 ], [ 0, 8 ], [ 0, 17 ], [ 0, 3 ], [ 0, 5 ], [ -2, 5 ], [ 0, 2 ], [ -2, 2 ], [ -4, 0 ], [ -5, 4 ], [ -2, -1 ], [ 0, -7 ] ], [ [ 6867, 5201 ], [ 2, 8 ] ], [ [ 6869, 5204 ], [ -2, -3 ] ], [ [ 6867, 5198 ], [ 0, 3 ] ], [ [ 6867, 5201 ], [ 0, -29 ] ], [ [ 6867, 5172 ], [ 0, -43 ], [ 0, -11 ], [ 2, -9 ], [ 0, -8 ], [ 5, -12 ], [ 10, -27 ], [ 4, -10 ], [ 1, -9 ], [ 2, -5 ], [ 2, -9 ], [ 2, -10 ], [ 2, -21 ], [ 2, -12 ], [ 2, -10 ], [ 4, -10 ], [ 2, -9 ], [ 5, -18 ], [ 4, -9 ], [ 4, -11 ], [ 6, -11 ], [ 8, -17 ], [ 11, -21 ], [ 4, -6 ], [ 1, -4 ], [ 2, -3 ], [ 1, -6 ], [ 1, -6 ], [ 0, -4 ], [ 0, -4 ], [ 2, -24 ], [ 0, -8 ], [ 2, -10 ], [ 4, -22 ], [ 2, -5 ], [ 0, -15 ], [ -2, -9 ], [ 0, -4 ], [ -4, -19 ], [ -2, -10 ], [ 0, -3 ], [ -2, -4 ], [ 2, -2 ], [ 0, -1 ], [ 0, -3 ], [ 2, -3 ], [ 0, -1 ], [ 2, -1 ], [ 4, -1 ], [ 8, 0 ], [ 5, -2 ], [ 17, -7 ], [ 4, -2 ], [ 5, -5 ], [ 3, -4 ], [ 3, -2 ], [ 4, -7 ], [ 6, -14 ], [ 2, -7 ], [ 1, -6 ], [ 0, -6 ], [ 2, -8 ], [ 1, -19 ], [ 1, -16 ], [ 0, -9 ], [ 0, -8 ], [ 0, -8 ], [ 0, -12 ], [ -2, -11 ], [ -2, -14 ], [ -1, -12 ], [ -4, -13 ], [ -2, -11 ], [ -2, -8 ], [ -2, -9 ], [ -4, -10 ], [ -5, -15 ], [ -2, -2 ], [ 0, -1 ] ], [ [ 7e3, 4444 ], [ -6, -4 ], [ -6, -5 ], [ -4, -5 ], [ -5, -7 ], [ -7, -15 ], [ -3, -6 ], [ -2, -7 ], [ -2, -8 ], [ -1, -6 ], [ 0, -7 ], [ 0, -20 ], [ 0, -17 ], [ 0, -3 ], [ 1, -6 ], [ 3, -6 ], [ 3, -9 ], [ 6, -17 ], [ 4, -11 ], [ 3, -6 ], [ 0, -5 ], [ -3, 0 ], [ -2, -1 ], [ -2, -1 ], [ -2, -7 ], [ -4, -16 ], [ -2, -8 ], [ -1, -6 ], [ -1, -8 ], [ -2, -10 ], [ -1, -16 ], [ 0, -18 ], [ 0, -15 ] ], [ [ 6354, 4095 ], [ -1, 2 ], [ -22, 51 ], [ -3, 10 ], [ -4, 8 ], [ -4, 7 ], [ -4, 3 ], [ -13, 16 ], [ -15, 18 ], [ -4, 6 ], [ -6, 6 ], [ -7, 5 ], [ -6, 5 ], [ -21, 13 ], [ -13, 7 ], [ -4, 3 ], [ -6, 1 ], [ -9, 2 ], [ -4, 4 ], [ -3, 2 ], [ -3, 2 ], [ -2, 3 ], [ -3, 4 ], [ -8, 12 ], [ -6, 10 ], [ -4, 9 ], [ -7, 19 ], [ -2, 9 ], [ -6, 10 ], [ -19, 39 ], [ -7, 11 ], [ -6, 9 ], [ -4, 7 ], [ -7, 7 ], [ -8, 9 ], [ -9, 8 ], [ -4, 4 ], [ -17, 12 ], [ -19, 19 ], [ -6, 6 ], [ -4, 2 ], [ -7, 5 ], [ -6, 2 ], [ -19, 11 ], [ -15, 7 ], [ -4, 2 ], [ -4, 2 ], [ -11, 10 ], [ -6, 5 ], [ -5, 3 ], [ -6, 1 ], [ -6, 0 ], [ -21, 0 ], [ -8, 1 ], [ -1, 1 ], [ -4, 1 ], [ -4, 5 ], [ -3, 2 ], [ -3, 2 ], [ -2, 5 ], [ -3, 4 ], [ -6, 13 ], [ -11, 24 ], [ -2, 6 ], [ -4, 7 ], [ -4, 7 ], [ -2, 3 ], [ -4, 6 ], [ -3, 3 ], [ -4, 5 ], [ -6, 4 ], [ -3, 2 ], [ -4, 2 ], [ -8, 4 ], [ -11, 2 ], [ -6, 2 ], [ -8, 4 ], [ -9, 5 ], [ -6, 3 ], [ -4, 4 ], [ -4, 3 ], [ -3, 5 ], [ -8, 12 ], [ -2, 6 ], [ -7, 16 ], [ -2, 9 ], [ -2, 11 ], [ -4, 16 ], [ -2, 3 ] ], [ [ 6354, 4094 ], [ 0, -4 ] ], [ [ 6318, 3569 ], [ 0, 3 ], [ -2, 2 ], [ -1, 3 ], [ -6, 2 ], [ -4, -1 ], [ -2, -1 ], [ -2, -4 ], [ -2, -1 ], [ -2, 0 ], [ -1, 2 ], [ -1, 4 ], [ -2, 3 ], [ 0, 8 ], [ -3, 14 ], [ 0, 17 ], [ 2, 7 ], [ 1, 4 ], [ 0, 16 ], [ -1, 2 ], [ -2, 1 ], [ -6, -1 ], [ -4, 1 ], [ -3, 0 ], [ -6, 2 ], [ -8, 7 ], [ -6, -9 ], [ -5, -8 ], [ -4, -6 ], [ -4, -8 ], [ -15, -27 ], [ -4, -7 ], [ -1, -4 ], [ -3, -4 ], [ -1, -6 ], [ 0, -2 ], [ 1, -3 ], [ 2, -2 ], [ 4, -2 ], [ 12, -3 ], [ 9, -5 ], [ 2, -2 ], [ 4, -2 ], [ 4, -7 ], [ 1, -3 ], [ 3, -6 ], [ 0, -12 ], [ -3, -6 ], [ 0, -4 ], [ -4, -8 ], [ -3, -5 ], [ -6, -5 ], [ -3, -2 ], [ -10, -2 ], [ -12, -4 ], [ -9, -1 ], [ -11, -1 ], [ -12, -3 ], [ -11, -9 ], [ -4, -5 ], [ -4, -4 ], [ -2, -4 ], [ -2, -6 ], [ -3, -6 ], [ -4, -10 ], [ -2, -8 ], [ -6, -23 ], [ -3, -9 ], [ -3, -4 ], [ -1, -4 ], [ -12, -20 ], [ -2, -5 ], [ -1, -5 ], [ -3, -8 ], [ -7, -18 ], [ 0, -7 ], [ 0, -4 ], [ -2, -7 ], [ 0, -39 ], [ 0, -10 ], [ -2, -9 ], [ -2, -16 ], [ -2, -16 ], [ -4, -17 ], [ 0, -11 ], [ 0, -14 ], [ 0, -5 ], [ 4, -7 ], [ 2, -5 ], [ 2, -3 ], [ 19, -26 ], [ 15, -19 ], [ 10, -11 ], [ 1, -2 ], [ 3, -2 ], [ 0, -7 ], [ -1, -1 ], [ -3, -3 ], [ -4, -5 ], [ -4, -2 ], [ -2, -4 ], [ -1, -3 ], [ 0, -2 ], [ -1, -1 ], [ 0, -5 ], [ 1, -3 ], [ 1, -3 ], [ 2, -4 ], [ 4, -4 ], [ 4, -3 ], [ 5, -4 ], [ 10, -5 ], [ 13, -6 ], [ 2, -2 ], [ 6, -4 ], [ 0, -4 ], [ 2, -2 ], [ 1, -11 ], [ 0, -8 ], [ -1, -8 ], [ -2, -6 ], [ -2, -9 ], [ -4, -14 ], [ -4, -11 ], [ -7, -12 ], [ -8, -16 ], [ -3, -7 ], [ -3, -6 ], [ 0, -5 ], [ -1, -8 ], [ -1, -6 ], [ 0, -6 ], [ 1, -8 ], [ 0, -5 ], [ 4, -15 ], [ 3, -8 ], [ 9, -18 ], [ 4, -9 ], [ 2, -3 ], [ 2, -5 ], [ 0, -4 ], [ 0, -10 ], [ 0, -4 ], [ -4, -9 ], [ -5, -9 ], [ -4, -5 ], [ -6, -3 ], [ -5, -2 ], [ -6, -4 ], [ -9, -3 ], [ -3, -1 ] ], [ [ 6145, 2777 ], [ -1, 1 ], [ -4, 1 ], [ -4, 0 ], [ -8, -1 ], [ -9, -1 ], [ -12, -3 ], [ -13, -7 ], [ -9, -6 ], [ -4, -2 ], [ -2, -1 ], [ -2, 0 ], [ -2, 2 ], [ -6, 5 ], [ -3, 4 ], [ -4, 8 ], [ -2, 6 ], [ 0, 4 ], [ -2, 10 ], [ 0, 8 ], [ -1, 4 ], [ 1, 11 ], [ 0, 7 ], [ -4, 6 ], [ -7, 7 ], [ -2, 4 ], [ -4, 5 ], [ -2, 8 ], [ -2, 5 ], [ -4, 5 ], [ -3, 2 ], [ -2, 3 ], [ -10, 5 ], [ -7, 5 ], [ -10, 11 ], [ -2, 1 ], [ -3, 1 ], [ -3, 0 ], [ -3, -1 ], [ -2, -1 ], [ -7, 0 ], [ -3, -1 ], [ -5, -3 ], [ -4, -2 ], [ -6, -3 ], [ -2, -5 ], [ -3, -3 ], [ -4, -6 ], [ -2, -4 ], [ -4, -6 ], [ -4, -14 ], [ -1, -2 ], [ -3, -4 ], [ -2, -1 ], [ -3, -1 ], [ -4, 1 ], [ -4, 1 ], [ -3, 5 ], [ -6, 7 ], [ -6, 5 ], [ -6, 6 ], [ -4, 3 ], [ -3, 4 ], [ -6, 14 ], [ -4, 9 ], [ -2, 4 ], [ -4, 3 ], [ -5, 5 ], [ -14, 3 ], [ -3, 1 ], [ -2, 3 ], [ -6, 3 ], [ -8, 8 ], [ -3, 3 ], [ -2, 6 ], [ -2, 5 ], [ -15, 46 ], [ -4, 14 ], [ -2, 8 ], [ -2, 9 ], [ -6, 13 ], [ -5, 8 ], [ -4, 6 ], [ -8, 7 ], [ -5, 5 ], [ -4, 2 ], [ -4, 2 ], [ -12, 4 ], [ -3, -2 ], [ -2, 0 ], [ -2, -2 ], [ -3, -2 ], [ -6, -9 ], [ -6, -14 ], [ -6, -7 ], [ -3, 0 ], [ -3, 0 ], [ -4, 0 ], [ -3, 0 ], [ -2, 0 ], [ -2, 1 ], [ -3, 2 ], [ -4, 4 ], [ -4, 3 ], [ -2, 6 ], [ -4, 5 ], [ -6, 19 ], [ -3, 12 ], [ -6, 18 ], [ -6, 18 ], [ -1, 3 ], [ -1, 4 ], [ -4, 5 ], [ -6, 7 ], [ -3, 2 ], [ -4, 2 ], [ -9, 0 ], [ -3, -1 ], [ -3, -2 ], [ -2, -2 ], [ -2, -4 ], [ -12, -13 ], [ -4, -7 ], [ -7, -6 ], [ -7, -6 ], [ -5, -2 ], [ -5, -1 ], [ -7, 0 ], [ -2, 1 ], [ -2, 2 ], [ -3, 2 ], [ -3, 2 ], [ -2, 4 ], [ -20, 31 ], [ -5, 6 ], [ -5, 14 ], [ -3, 8 ], [ -2, 4 ], [ -1, 7 ], [ 0, 9 ], [ 1, 2 ], [ 1, 1 ], [ 1, 0 ] ], [ [ 5554, 3185 ], [ 0, 1 ], [ -1, 4 ] ], [ [ 5553, 3190 ], [ -12, 23 ] ], [ [ 5541, 3213 ], [ -3, 10 ], [ -4, 10 ], [ -9, 21 ], [ -13, 43 ], [ -3, 9 ], [ -5, 11 ], [ -4, 8 ], [ -2, 5 ], [ -4, 3 ], [ -8, 6 ], [ -1, 1 ], [ 0, 2 ], [ -2, 2 ], [ 0, 15 ], [ -3, 24 ], [ -2, 9 ], [ -4, 12 ], [ -5, 14 ], [ -1, 4 ], [ 0, 7 ], [ 5, 3 ], [ 3, 1 ], [ 3, 0 ], [ 4, -1 ], [ 14, -6 ], [ 5, -1 ], [ 6, -1 ], [ 9, 0 ], [ 6, 4 ], [ 4, 2 ], [ 2, 1 ], [ 2, 1 ], [ 1, 2 ], [ 2, 4 ], [ 6, 14 ], [ 2, 12 ], [ 4, 17 ], [ 3, 19 ], [ 2, 21 ], [ 2, 13 ], [ 1, 5 ], [ 0, 13 ], [ -3, 12 ], [ -3, 8 ], [ -4, 8 ], [ -15, 34 ], [ -4, 9 ], [ -4, 9 ], [ -2, 8 ], [ -2, 9 ], [ -4, 13 ], [ -7, 25 ], [ -2, 4 ], [ 0, 5 ], [ -4, 4 ], [ -1, 7 ], [ -14, 22 ], [ -4, 7 ], [ -17, 35 ], [ -8, 19 ], [ -4, 12 ], [ -5, 11 ], [ -4, 14 ], [ -12, 34 ], [ -5, 13 ], [ -7, 21 ] ], [ [ 5552, 3193 ], [ -1, 0 ] ], [ [ 5553, 3190 ], [ -1, 3 ] ], [ [ 5554, 3185 ], [ -1, 5 ] ], [ [ 5551, 3193 ], [ 2, -3 ] ], [ [ 5551, 3193 ], [ -3, 8 ] ], [ [ 5548, 3201 ], [ 2, 0 ], [ 1, -1 ], [ 0, -6 ] ], [ [ 5551, 3194 ], [ 0, -1 ] ], [ [ 5541, 3213 ], [ 7, -12 ] ], [ [ 5548, 3201 ], [ -5, 0 ], [ -2, -1 ], [ 0, 1 ], [ -1, -1 ], [ -4, -5 ], [ -15, -19 ], [ -5, -6 ], [ -3, -4 ], [ -4, -2 ], [ -5, -3 ], [ -5, -3 ], [ -4, -2 ], [ -3, -1 ], [ -5, -1 ], [ -2, 0 ], [ -6, 2 ], [ -12, 7 ], [ -5, 1 ], [ -4, 1 ], [ -5, 0 ], [ -5, -1 ], [ -3, -2 ], [ -4, -6 ], [ -7, -9 ], [ -4, -3 ], [ -4, -1 ], [ -2, 0 ], [ -4, -2 ], [ -4, -6 ], [ -4, -1 ], [ -2, 0 ], [ -4, 1 ], [ -2, -1 ], [ -1, 0 ], [ -2, -3 ], [ -2, -7 ], [ -1, -8 ], [ -1, -9 ], [ 0, -25 ], [ -1, -9 ], [ 0, -7 ], [ -2, -5 ], [ -2, -10 ], [ 0, -5 ], [ -2, -3 ], [ -4, -9 ], [ -2, -2 ], [ -2, -4 ], [ -6, -3 ], [ -2, -3 ], [ -1, -5 ], [ -2, -3 ], [ 0, -36 ], [ 2, -10 ], [ 1, -3 ], [ 4, -9 ], [ 1, -6 ], [ 0, -10 ], [ -1, -4 ], [ -2, -2 ], [ -3, -7 ], [ -2, -2 ], [ -2, -2 ], [ -7, -6 ], [ -6, -4 ], [ -6, -6 ], [ -3, -4 ], [ -4, -7 ], [ -5, -10 ], [ -2, -11 ], [ 0, -7 ], [ 1, -6 ], [ 1, -10 ], [ 3, -15 ], [ 6, -29 ], [ 3, -13 ], [ 2, -17 ], [ 0, -23 ], [ -2, -8 ], [ 0, -6 ], [ -2, -6 ], [ -3, -9 ], [ -2, -5 ], [ -8, -6 ], [ -4, -3 ], [ -8, 0 ], [ -5, 2 ], [ -4, 3 ], [ -5, 3 ], [ -6, 5 ], [ -10, 10 ], [ -3, 3 ], [ -5, 7 ], [ -5, 8 ], [ -10, 18 ], [ -8, 13 ], [ -1, 2 ], [ -2, 1 ], [ -2, 1 ], [ -6, -2 ], [ -2, -2 ], [ -5, -7 ], [ -1, -2 ], [ -1, -4 ], [ -2, -5 ], [ -2, -6 ], [ 0, -5 ], [ -1, -12 ], [ -2, -10 ], [ -5, -8 ], [ -1, -3 ], [ -1, -3 ], [ -4, -10 ], [ 0, -4 ], [ -1, -6 ], [ 0, -5 ], [ 1, -6 ], [ 1, -6 ], [ 1, -5 ], [ 6, -19 ], [ 1, -9 ], [ 2, -7 ], [ 1, -7 ], [ 0, -16 ], [ -1, -23 ], [ 0, -15 ], [ 1, -5 ], [ 1, -6 ], [ 1, -5 ], [ 10, -26 ], [ 2, -7 ], [ 1, -10 ], [ 3, -15 ], [ 3, -27 ], [ 4, -19 ], [ 1, -7 ], [ 1, -10 ], [ 1, -12 ], [ 0, -30 ], [ -1, -9 ], [ -4, -34 ], [ -2, -9 ], [ -1, -13 ], [ -1, -12 ], [ 0, -55 ], [ -1, -7 ], [ -2, -18 ], [ -3, -27 ], [ -4, -18 ], [ -3, -10 ], [ -2, -5 ], [ -2, -3 ], [ -6, -10 ], [ -8, -12 ], [ -7, -16 ], [ -10, -14 ], [ -2, -5 ], [ -3, -3 ], [ -2, -2 ], [ -2, -2 ], [ -13, -9 ], [ -4, -6 ], [ -4, -5 ], [ -7, -12 ], [ -2, -3 ], [ -7, -9 ], [ -4, -2 ], [ -7, -2 ], [ -10, -5 ], [ -10, -2 ], [ -4, 0 ], [ -6, -7 ], [ -3, -5 ], [ -1, -4 ], [ -5, -16 ], [ -6, -17 ], [ -2, -7 ], [ -1, -6 ], [ -1, -7 ], [ -3, -26 ], [ -1, -7 ], [ -2, -5 ], [ -2, -4 ], [ -1, -8 ], [ -2, -6 ], [ -6, -13 ], [ -2, -5 ], [ -2, -8 ], [ -4, -21 ], [ -3, -16 ], [ -2, -5 ], [ -3, -7 ], [ -7, -11 ], [ -6, -10 ], [ -6, -11 ], [ -10, -18 ], [ -6, -14 ], [ -3, -8 ], [ -4, -16 ], [ 0, -4 ], [ -1, -5 ], [ 0, -4 ], [ 1, -5 ], [ 2, -3 ], [ 1, -1 ], [ 1, -2 ], [ 2, -2 ], [ 5, 0 ], [ 8, 2 ], [ 3, -2 ], [ 2, 0 ], [ 2, -1 ], [ 3, -2 ], [ 6, -4 ], [ 1, -3 ], [ 2, -2 ], [ 2, -5 ], [ 2, -7 ], [ 5, -21 ], [ 1, -8 ], [ 2, -2 ], [ 1, -5 ], [ 5, -5 ], [ 2, -2 ], [ 3, -5 ], [ 5, -4 ], [ 6, -5 ], [ 14, -11 ], [ 9, -7 ], [ 5, -4 ], [ 4, -4 ], [ 2, -6 ], [ 5, -4 ], [ 4, -6 ], [ 2, -4 ], [ 2, -6 ], [ 2, -6 ], [ 2, -5 ], [ 1, -8 ], [ 6, -18 ], [ 2, -8 ], [ 3, -7 ], [ 1, -4 ], [ 0, -1 ] ], [ [ 5162, 1559 ], [ -2, -3 ], [ -6, -13 ], [ -3, -4 ], [ -4, -3 ], [ -3, -2 ], [ -4, 0 ], [ -2, -3 ], [ -1, -4 ], [ -1, -7 ], [ 0, -3 ], [ -3, -9 ], [ -2, -3 ], [ -3, -9 ], [ -2, -2 ], [ 0, -6 ], [ 2, -1 ], [ 2, -3 ], [ 0, -3 ], [ -2, -2 ], [ -2, -3 ], [ -5, -7 ], [ -7, -3 ], [ -3, -4 ], [ -2, -4 ], [ -2, -6 ], [ -7, -31 ], [ -2, -11 ], [ -1, -8 ] ], [ [ 5097, 1402 ], [ -2, 0 ], [ -1, 2 ], [ -4, 3 ], [ -4, 3 ], [ -6, 6 ], [ -12, 14 ], [ -4, 7 ], [ -8, 11 ], [ -4, 12 ], [ -7, 16 ], [ -12, 30 ], [ -2, 5 ], [ -3, 6 ], [ -4, 6 ], [ -5, 6 ], [ -5, 8 ], [ -5, 7 ], [ -8, 6 ], [ -9, 8 ], [ -4, 3 ], [ -3, 2 ], [ -5, 1 ], [ -9, 3 ], [ -6, 0 ], [ -21, 10 ], [ -11, 6 ], [ -7, 4 ], [ -5, 2 ], [ -9, 10 ], [ -6, 6 ], [ -5, 5 ], [ -20, 26 ], [ -15, 20 ], [ -4, 7 ], [ -7, 7 ], [ -6, 7 ], [ -9, 9 ], [ -9, 7 ], [ -3, 2 ], [ -5, 2 ], [ -5, 2 ], [ -6, 1 ], [ -6, 3 ], [ -10, 0 ], [ -8, -1 ], [ -13, -5 ], [ -5, -1 ], [ -6, 0 ], [ -8, 1 ], [ -4, 2 ], [ -5, 1 ], [ -3, 3 ], [ -5, 3 ], [ -6, 4 ], [ -8, 10 ], [ -5, 5 ], [ -2, 0 ], [ -2, 1 ], [ -4, -2 ], [ -3, -7 ], [ -1, -3 ], [ -1, -8 ], [ -4, -19 ], [ -2, -12 ], [ -2, -15 ], [ -4, -14 ], [ -6, -19 ], [ -3, -8 ], [ -2, -3 ], [ -4, -6 ], [ -5, -5 ], [ -3, -1 ], [ -2, 0 ], [ -7, -1 ], [ -12, 0 ], [ -13, -2 ], [ -10, -2 ], [ -7, -2 ], [ -7, -3 ], [ -8, -6 ], [ -9, -8 ], [ -17, -15 ], [ -5, -5 ], [ -7, -3 ], [ -4, -1 ], [ -15, -3 ], [ -2, -2 ], [ -2, 0 ], [ -3, 2 ], [ -2, 1 ], [ -5, 3 ], [ -1, 2 ], [ 0, 4 ], [ -1, 2 ], [ -1, 2 ], [ 0, 18 ], [ 2, 22 ], [ 0, 20 ], [ -1, 10 ], [ -1, 11 ], [ -2, 32 ], [ -3, 22 ], [ -1, 8 ], [ 0, 22 ], [ 1, 7 ] ], [ [ 5551, 3194 ], [ 1, -1 ] ], [ [ 6145, 2777 ], [ 0, -1 ], [ 0, -6 ], [ -7, -30 ], [ -4, -21 ], [ -4, -13 ], [ 0, -11 ], [ -2, -13 ], [ -2, -11 ], [ 0, -23 ], [ 2, -6 ], [ 2, -5 ], [ 0, -5 ], [ 2, -4 ], [ 2, -3 ], [ 4, -5 ], [ 15, -18 ], [ 6, -5 ], [ 3, -6 ], [ 2, -5 ], [ 4, -6 ], [ 0, -3 ], [ 2, -6 ], [ 2, -4 ], [ 0, -7 ], [ 0, -7 ], [ 0, -14 ], [ 2, -10 ], [ -2, -11 ], [ 0, -7 ], [ 0, -5 ], [ -2, -6 ], [ -2, -3 ], [ -4, -5 ], [ -13, -12 ], [ -3, -3 ], [ -12, -7 ], [ -4, -4 ], [ -3, -4 ], [ -3, -2 ], [ -4, -9 ], [ -1, -5 ], [ -2, -7 ], [ -2, -8 ], [ 0, -12 ], [ 2, -8 ], [ 3, -21 ], [ 1, -10 ], [ 2, -8 ], [ 1, -6 ], [ 0, -5 ], [ -1, -4 ], [ -2, -6 ], [ -2, -6 ], [ -4, -10 ], [ -4, -4 ], [ -3, -2 ], [ -4, -5 ], [ -4, -2 ], [ -10, -1 ], [ -1, -1 ], [ -3, -3 ], [ -3, -6 ], [ 0, -8 ], [ 2, -4 ], [ 1, -6 ], [ 4, -6 ], [ 6, -13 ], [ 17, -29 ], [ 7, -12 ], [ 8, -12 ], [ 2, -8 ], [ 4, -5 ], [ 4, -13 ], [ 1, -10 ], [ 0, -4 ], [ -1, -6 ], [ 0, -2 ], [ 0, -1 ], [ -2, -1 ] ], [ [ 6138, 2171 ], [ -2, 1 ], [ -4, 0 ], [ -2, 0 ], [ -2, 0 ], [ -9, -10 ], [ -2, -2 ], [ -2, -5 ], [ -2, -4 ], [ -2, -7 ], [ -2, -6 ], [ -3, -16 ], [ -2, -7 ], [ -2, -8 ], [ -4, -6 ], [ -4, -9 ], [ -3, -8 ], [ -8, -10 ], [ -4, -2 ], [ -6, -3 ], [ -7, -4 ], [ -9, -2 ], [ -19, -3 ], [ -14, -1 ], [ -9, -3 ], [ -4, -1 ], [ -10, -3 ], [ -4, -3 ], [ -7, -6 ], [ -4, -2 ], [ 0, -4 ], [ -4, -4 ], [ -4, -8 ], [ -1, -4 ], [ -1, -8 ], [ 0, -17 ], [ 1, -12 ], [ 1, -10 ], [ 0, -2 ], [ -1, -4 ], [ 0, -2 ], [ -3, -5 ], [ -1, -3 ], [ -4, -4 ], [ -6, -9 ], [ -9, -9 ], [ -2, -2 ], [ -4, -2 ], [ -6, -2 ], [ -13, -5 ], [ -15, -3 ], [ -6, -2 ], [ -7, -5 ], [ -2, -1 ], [ -4, 0 ], [ -4, 1 ], [ -9, 5 ], [ -12, 4 ], [ -15, 8 ], [ -6, 2 ], [ -7, 2 ], [ -6, 1 ], [ -4, 1 ], [ -6, -2 ], [ -1, -2 ], [ -8, -11 ], [ -4, -6 ], [ -9, -10 ], [ -6, -5 ], [ -2, -2 ], [ -6, -4 ], [ -7, -2 ], [ -8, 0 ], [ -4, 2 ], [ -5, 1 ], [ -4, 4 ], [ -4, 3 ], [ -6, 7 ], [ -13, 16 ], [ -3, 6 ], [ -5, 10 ], [ -3, 13 ], [ -4, 8 ], [ -3, 7 ], [ -3, 4 ], [ -3, 2 ], [ -4, 2 ], [ -2, 0 ], [ -4, -2 ], [ -5, -3 ], [ -12, -8 ], [ -3, -2 ], [ -3, -3 ], [ -4, -8 ], [ -3, -6 ], [ -6, -13 ], [ -3, -9 ], [ -8, -11 ], [ -4, -4 ], [ -6, -5 ], [ -5, -1 ], [ -3, 0 ], [ -5, 0 ], [ -5, 4 ], [ -4, 2 ], [ -3, 2 ], [ -7, 0 ], [ -2, -1 ], [ -3, -5 ], [ -2, -2 ], [ -2, -4 ], [ -2, -7 ], [ -3, -9 ], [ -5, -13 ], [ 0, -8 ], [ -4, -14 ], [ -1, -7 ], [ -1, -6 ], [ -2, -4 ], [ -5, -10 ], [ -3, -3 ], [ -3, -2 ], [ -2, -1 ], [ -4, 0 ], [ -15, 2 ], [ -4, 0 ], [ -10, -1 ], [ -9, -2 ], [ -4, -1 ], [ -5, -2 ], [ -14, -9 ], [ -7, -5 ], [ -4, -5 ], [ -8, -10 ], [ -4, -5 ], [ -2, -4 ], [ -3, -9 ], [ -4, -13 ], [ -4, -8 ], [ -2, -6 ], [ -7, -12 ], [ -4, -7 ], [ -1, -3 ], [ -6, -7 ], [ -6, -6 ], [ -4, -5 ], [ -14, -11 ], [ -5, -4 ], [ -2, -5 ], [ -4, -4 ], [ -4, -8 ], [ -6, -11 ], [ -3, -6 ], [ -6, -11 ], [ -7, -12 ], [ -2, -6 ], [ -5, -16 ], [ -3, -7 ], [ -2, -6 ], [ -2, -2 ], [ -1, -2 ], [ -4, 0 ], [ -2, 0 ], [ -2, 0 ], [ -5, 4 ], [ -3, 5 ], [ -11, 13 ], [ -3, 6 ], [ -5, 5 ], [ -7, 6 ], [ -4, 1 ], [ -4, 2 ], [ -11, 0 ], [ -21, -4 ], [ -5, -1 ], [ -3, -1 ], [ -3, -3 ], [ -2, -1 ], [ -5, -5 ], [ -1, -6 ], [ -2, -3 ], [ -4, -14 ], [ -3, -6 ], [ -6, -16 ], [ -4, -8 ], [ -3, -8 ], [ -3, -6 ], [ -3, -2 ], [ -3, -2 ], [ -3, -2 ], [ -2, 0 ], [ -6, 2 ], [ -4, 2 ], [ -3, 1 ], [ -4, 1 ], [ -2, 3 ], [ -6, 8 ], [ -9, 13 ], [ -4, 7 ], [ -2, 3 ], [ -6, 5 ], [ -9, 0 ], [ -7, -2 ], [ -4, -3 ], [ -6, -4 ], [ -3, -3 ], [ -1, -3 ], [ -2, -3 ], [ -1, -2 ], [ 0, -2 ], [ -1, -3 ], [ 0, -2 ] ], [ [ 6138, 2171 ], [ 0, -1 ], [ 0, -2 ], [ 0, -3 ], [ 4, -3 ], [ 9, -6 ], [ 6, -4 ], [ 2, -1 ], [ 4, -3 ], [ 4, -6 ], [ 3, -6 ], [ 2, -7 ], [ 2, -7 ], [ 4, -13 ], [ 4, -8 ], [ 1, -7 ], [ 4, -4 ], [ 0, -3 ], [ 4, -4 ], [ 6, -2 ], [ 28, 0 ], [ 4, -1 ], [ 6, -1 ], [ 3, -2 ], [ 6, -4 ], [ 10, -10 ], [ 17, -20 ], [ 7, -6 ], [ 8, -7 ], [ 4, -5 ], [ 3, -3 ], [ 4, -6 ], [ 8, -13 ], [ 4, -7 ], [ 3, -4 ], [ 4, -2 ], [ 2, -1 ], [ 4, 0 ], [ 2, 1 ], [ 4, 3 ], [ 11, 11 ], [ 4, 3 ], [ 4, 4 ], [ 5, 2 ], [ 4, 2 ], [ 4, 1 ], [ 6, 0 ], [ 11, -2 ], [ 4, -2 ], [ 5, -3 ], [ 2, -3 ], [ 4, -3 ], [ 4, -6 ], [ 4, -4 ], [ 9, -11 ], [ 10, -17 ], [ 7, -10 ], [ 4, -7 ], [ 6, -11 ], [ 9, -17 ], [ 8, -30 ], [ 7, -23 ], [ 4, -15 ], [ 4, -17 ], [ 2, -9 ], [ 2, -18 ], [ 0, -6 ], [ 0, -21 ], [ -2, -8 ], [ 0, -6 ], [ -2, -2 ] ], [ [ 6468, 1765 ], [ 0, -8 ], [ 0, -5 ], [ 4, -15 ], [ 0, -9 ], [ 2, -14 ], [ 2, -9 ], [ 0, -12 ], [ -2, -6 ], [ 0, -4 ], [ 0, -5 ], [ -2, -5 ], [ -2, -7 ], [ -2, -7 ], [ -6, -13 ], [ -2, -4 ], [ -1, -5 ], [ 0, -2 ], [ -2, -6 ], [ -2, -16 ], [ -2, -8 ], [ 0, -8 ], [ -2, -6 ], [ -3, -6 ], [ -5, -12 ], [ -3, -6 ], [ -2, -4 ], [ 0, -6 ], [ -2, -8 ], [ 0, -6 ], [ -2, -6 ], [ 0, -6 ], [ 2, -3 ], [ 0, -4 ], [ 0, -4 ], [ 2, -7 ], [ 5, -7 ], [ 10, -18 ], [ 4, -8 ], [ 3, -9 ], [ 3, -5 ], [ 1, -6 ], [ 2, -4 ], [ 1, -5 ], [ 1, -6 ], [ 0, -5 ], [ 0, -22 ], [ 0, -7 ], [ -1, -5 ], [ -3, -8 ], [ -1, -3 ], [ -3, -7 ], [ -3, -4 ], [ -12, -26 ], [ -4, -9 ], [ -3, -9 ], [ -4, -10 ], [ -4, -10 ], [ -2, -9 ], [ -3, -10 ], [ -1, -6 ], [ -3, -8 ], [ -4, -28 ], [ -4, -29 ], [ -2, -9 ], [ -2, -21 ], [ -2, -11 ], [ -1, -13 ], [ 0, -17 ], [ 1, -13 ], [ 2, -20 ], [ 2, -15 ], [ 2, -13 ], [ 2, -13 ], [ 2, -10 ], [ 2, -7 ], [ 3, -7 ], [ 4, -7 ], [ 4, -6 ], [ 4, -6 ], [ 4, -7 ], [ 6, -5 ], [ 18, -19 ] ], [ [ 6462, 1011 ], [ -2, 0 ], [ -1, -2 ], [ -8, -21 ], [ -4, -15 ], [ -6, -15 ], [ -7, -30 ], [ -5, -22 ], [ -4, -16 ], [ -6, -25 ], [ 0, -6 ], [ -2, -6 ], [ -2, -10 ], [ -2, -4 ], [ -3, -8 ], [ -12, -26 ], [ -4, -12 ], [ -15, -38 ], [ -2, -6 ], [ -4, -7 ], [ -5, -8 ], [ -6, -8 ], [ -4, -3 ], [ -6, -9 ], [ -11, -11 ], [ -4, -3 ], [ -4, -3 ], [ -2, -2 ], [ -3, 0 ], [ -6, -1 ], [ -3, 1 ], [ -3, 0 ], [ -4, 2 ], [ -5, 5 ], [ -6, 8 ], [ -4, 10 ], [ -4, 4 ], [ -5, 6 ], [ -4, 2 ], [ -3, 0 ], [ -3, -2 ], [ -2, -3 ], [ -9, -9 ], [ -2, -2 ], [ -6, -3 ], [ -4, -1 ], [ -7, 0 ], [ -10, 2 ], [ -21, 8 ], [ -13, 3 ], [ -11, 2 ], [ -14, 3 ], [ -7, 0 ], [ -12, -2 ], [ -9, 0 ], [ -15, 3 ], [ -17, 2 ], [ -12, 1 ], [ -9, 2 ], [ -63, 15 ], [ -11, 2 ], [ -8, 0 ], [ -13, 0 ], [ -15, -1 ], [ -10, -1 ], [ -7, 0 ], [ -12, 2 ], [ -13, 2 ], [ -13, 2 ], [ -8, 2 ], [ -6, 2 ], [ -18, 9 ], [ -6, 3 ], [ -8, 6 ], [ -5, 4 ], [ -8, 7 ], [ -11, 11 ], [ -73, 70 ], [ -13, 13 ], [ -5, 7 ], [ -6, 4 ], [ -5, 9 ], [ -8, 10 ], [ -10, 15 ], [ -7, 13 ], [ -7, 10 ], [ -6, 13 ], [ -8, 15 ], [ -3, 6 ], [ -3, 13 ], [ -2, 5 ], [ 0, 10 ], [ -2, 24 ], [ -3, 12 ], [ -2, 5 ], [ -2, 4 ], [ -5, 4 ], [ -1, 2 ], [ -2, 2 ], [ -2, 1 ], [ -5, 0 ], [ -3, 1 ], [ -7, 3 ], [ -2, 5 ], [ -2, 3 ], [ -2, 3 ], [ -4, 11 ], [ -2, 6 ], [ -5, 4 ], [ -4, 6 ], [ -6, 3 ], [ -13, 6 ], [ -5, 2 ], [ -2, 2 ], [ -2, 4 ], [ -1, 3 ], [ 0, 10 ], [ -2, 3 ], [ -2, 4 ], [ -2, 3 ], [ -1, 1 ], [ -2, 2 ], [ -5, 5 ], [ -4, 3 ], [ -2, 3 ], [ -3, 5 ], [ -7, 14 ], [ 0, 5 ], [ -2, 2 ], [ -2, 2 ], [ -3, 1 ], [ -2, 1 ], [ -8, 3 ], [ -2, 1 ], [ -3, 2 ], [ -4, 2 ], [ -8, 8 ], [ -4, 4 ], [ -1, 5 ], [ -2, 4 ], [ -4, 17 ], [ -2, 3 ], [ -2, 5 ], [ -3, 4 ], [ -1, 5 ], [ -5, 4 ], [ -3, 2 ], [ -2, 0 ], [ -5, 2 ], [ -28, 0 ], [ -12, -2 ], [ -9, -2 ], [ -9, -2 ], [ -5, -1 ], [ -4, -2 ], [ -4, -4 ], [ -7, -6 ], [ -5, -7 ], [ -18, -21 ], [ -3, -7 ], [ -10, -9 ], [ -4, -2 ], [ -4, -2 ], [ -5, -2 ], [ -6, 0 ], [ -4, -2 ], [ -8, 2 ], [ -7, 0 ], [ -11, 3 ], [ -17, 3 ], [ -14, 4 ], [ -12, 4 ], [ -5, 3 ], [ -5, 7 ], [ -8, 7 ], [ -11, 18 ], [ -17, 27 ], [ -7, 11 ], [ -12, 16 ], [ -5, 7 ], [ -6, 3 ], [ -12, 12 ], [ -5, 4 ], [ -12, 14 ], [ -8, 8 ], [ -4, 2 ], [ -2, 2 ], [ -15, 7 ], [ -16, 3 ], [ -8, 4 ], [ -11, 3 ], [ -13, 8 ], [ -9, 5 ], [ -31, 21 ] ], [ [ 6565, 2740 ], [ 2, -2 ], [ 0, -1 ], [ 2, -3 ], [ 0, -6 ], [ 0, -32 ], [ 0, -6 ], [ -2, -13 ], [ -2, -17 ], [ 0, -2 ], [ 0, -2 ], [ -6, -9 ], [ -1, -3 ], [ -3, -4 ], [ 0, -3 ], [ -1, -6 ], [ -2, -11 ], [ 0, -5 ], [ 2, -3 ], [ 5, -3 ], [ 4, -2 ], [ 0, -4 ], [ 2, -4 ], [ 2, -4 ], [ 0, -8 ], [ -2, -1 ] ], [ [ 6565, 2586 ], [ 0, -4 ], [ -2, -3 ], [ -1, -7 ], [ -3, -4 ], [ -4, -5 ], [ -1, -4 ], [ -6, -4 ], [ -4, -4 ], [ -2, -1 ], [ -3, -1 ], [ -4, 0 ], [ -10, -1 ], [ -4, -1 ], [ -1, -1 ], [ -3, -1 ], [ -3, -4 ], [ -2, -2 ], [ 0, -2 ], [ -2, -4 ], [ 0, -11 ], [ 2, -3 ], [ 2, -4 ], [ 2, -6 ], [ 3, -7 ], [ 14, -21 ], [ 3, -6 ], [ 7, -14 ], [ 9, -11 ], [ 3, -4 ], [ 3, -2 ], [ 4, -1 ], [ 9, -1 ], [ 3, 0 ], [ 4, -2 ], [ 4, -1 ], [ 2, -2 ], [ 2, -4 ], [ 6, -12 ], [ 5, -12 ], [ 0, -3 ], [ 4, -5 ], [ 2, -2 ], [ 2, -1 ], [ 2, 0 ], [ 0, -1 ], [ 2, 1 ], [ 5, 1 ], [ 2, 2 ], [ 4, 3 ], [ 2, 4 ], [ 2, 2 ], [ 0, 2 ], [ 0, 4 ], [ 2, 2 ], [ -2, 1 ] ], [ [ 6624, 2419 ], [ 5, -2 ], [ 5, -4 ], [ 3, -3 ], [ 2, -2 ], [ 4, -2 ], [ 2, -5 ], [ 0, -3 ], [ 3, -5 ], [ 1, -5 ], [ 1, -6 ], [ 2, -4 ], [ 0, -37 ], [ 1, -9 ], [ 1, -3 ], [ 0, -2 ], [ 0, -3 ], [ 2, -2 ], [ 4, -1 ], [ 2, -1 ], [ 19, 1 ], [ 7, 0 ], [ 8, 3 ], [ 9, 7 ], [ 6, 8 ], [ 2, 2 ], [ 4, 0 ], [ 2, -4 ], [ 0, -2 ], [ 0, -3 ], [ 2, -5 ], [ 0, -8 ], [ -2, -7 ], [ 0, -3 ], [ 0, -4 ], [ -4, -10 ], [ -4, -7 ], [ -4, -19 ], [ -2, -11 ], [ -5, -30 ], [ 0, -16 ] ], [ [ 6700, 2212 ], [ -8, -2 ], [ -6, -4 ], [ -22, -11 ], [ -23, -13 ], [ -8, -10 ], [ -4, -6 ], [ -5, -7 ], [ 0, -5 ], [ -2, -4 ], [ -2, -15 ], [ 0, -7 ], [ 2, -13 ], [ 0, -20 ], [ 4, -49 ], [ 1, -29 ], [ 3, -10 ], [ 1, -6 ], [ 0, -7 ], [ 3, -5 ], [ 1, -5 ], [ 2, -8 ], [ 2, -6 ], [ 2, -5 ], [ 2, -2 ], [ 5, -6 ], [ 8, -9 ], [ 2, -2 ], [ 2, -4 ], [ 4, -8 ], [ 13, -29 ], [ 6, -13 ], [ 7, -8 ], [ 2, -4 ], [ 2, -4 ], [ 6, -3 ], [ 5, -3 ], [ 2, -2 ], [ 3, -1 ], [ 3, 3 ], [ 4, 3 ], [ 11, 11 ], [ 2, 3 ], [ 4, 3 ], [ 4, 3 ], [ 6, 3 ], [ 5, 2 ], [ 6, 3 ], [ 8, 3 ], [ 11, 0 ], [ 9, 0 ], [ 17, 0 ], [ 2, 0 ] ], [ [ 6802, 1904 ], [ 0, -3 ], [ 0, -6 ], [ -1, -3 ], [ -1, -7 ], [ -3, -8 ], [ -12, -38 ], [ -7, -15 ], [ -10, -21 ], [ -11, -20 ], [ -4, -8 ], [ -2, -8 ], [ -2, -8 ], [ -2, -11 ], [ -6, -21 ], [ -1, -5 ], [ -2, -6 ], [ -2, -3 ], [ -6, -9 ], [ -2, -4 ], [ -4, -3 ], [ -3, -1 ], [ -6, -2 ], [ -4, 0 ], [ -4, 1 ], [ -5, 1 ], [ -8, 3 ], [ -6, 5 ], [ -5, 2 ], [ -14, 13 ], [ -9, 7 ], [ -8, 6 ], [ -17, 7 ], [ -4, 4 ], [ -7, 3 ], [ -2, 3 ], [ -4, 6 ], [ -2, 2 ], [ 0, 5 ], [ -2, 4 ], [ -2, 10 ], [ -3, 11 ], [ -1, 11 ], [ -3, 20 ], [ 0, 6 ], [ -2, 3 ], [ -2, 7 ], [ -2, 3 ], [ -2, 4 ], [ -2, 1 ], [ -5, 0 ], [ -4, -1 ], [ -4, -3 ], [ -4, -3 ], [ -7, -4 ], [ -6, -6 ], [ -19, -19 ], [ -6, -4 ], [ -9, -7 ], [ -7, -7 ], [ -14, -6 ], [ -13, -7 ], [ -10, -3 ], [ -11, -6 ], [ -4, -1 ], [ -4, 0 ] ], [ [ 7106, 2020 ], [ 0, -50 ], [ -2, -22 ], [ 0, -10 ], [ -2, -12 ], [ 2, -11 ], [ 0, -8 ], [ 0, -10 ], [ 4, -21 ], [ 2, -12 ], [ 2, -22 ], [ 3, -14 ], [ 1, -9 ], [ 1, -15 ], [ 0, -8 ], [ 3, -8 ], [ 1, -3 ], [ 2, -2 ], [ 4, -5 ], [ 13, -13 ], [ 2, -3 ], [ 6, -8 ], [ 2, -5 ], [ 3, -7 ], [ 2, -7 ], [ 3, -7 ], [ 1, -4 ], [ 2, -10 ], [ 2, -12 ], [ 0, -19 ], [ 0, -29 ], [ -2, -25 ], [ -2, -13 ], [ -1, -12 ], [ -3, -10 ], [ -4, -23 ], [ -1, -10 ], [ 0, -5 ], [ 0, -15 ], [ 0, -4 ], [ 1, -4 ], [ 6, -13 ], [ 2, -5 ], [ 2, -5 ], [ 2, -3 ], [ 7, -9 ], [ 4, -3 ], [ 0, -1 ], [ 0, -3 ], [ 2, -2 ], [ 0, -5 ], [ -2, -5 ], [ -1, -3 ], [ -4, -2 ], [ -2, -2 ], [ -2, 0 ], [ -10, 2 ], [ -7, 0 ], [ -4, -2 ], [ -2, -1 ], [ -6, -3 ], [ -7, -7 ], [ -2, -3 ], [ 0, -2 ], [ -2, -4 ], [ -2, -3 ], [ 0, -2 ], [ 0, -8 ], [ -2, -8 ], [ 2, -24 ], [ -2, -27 ], [ 0, -14 ], [ 2, -14 ], [ 2, -30 ], [ 0, -37 ], [ 0, -6 ], [ 2, -6 ], [ 0, -4 ], [ 2, -4 ], [ 2, -6 ], [ 1, -6 ], [ 6, -12 ], [ 6, -12 ], [ 11, -22 ], [ 4, -9 ], [ 6, -10 ], [ 4, -14 ], [ 4, -7 ], [ 1, -9 ], [ 4, -9 ], [ 2, -9 ], [ 2, -17 ], [ 7, -34 ], [ 2, -8 ], [ 2, -8 ], [ 4, -12 ], [ 2, -3 ], [ 4, -6 ], [ 5, -4 ], [ 4, -3 ], [ 3, -2 ], [ 3, -1 ], [ 4, -1 ], [ 5, 0 ], [ 6, 1 ], [ 4, 2 ], [ 6, 4 ], [ 13, 9 ], [ 4, 3 ], [ 4, 1 ], [ 5, 1 ], [ 8, 0 ], [ 2, -1 ], [ 5, -1 ], [ 4, -3 ], [ 4, -5 ], [ 4, -5 ], [ 4, -6 ], [ 5, -7 ], [ 4, -5 ], [ 8, -18 ], [ 7, -8 ], [ 4, -5 ], [ 6, -9 ], [ 6, -6 ], [ 5, -5 ], [ 6, -6 ], [ 8, -6 ], [ 5, -4 ], [ 6, -1 ], [ 7, -2 ], [ 5, 0 ], [ 1, 1 ], [ 4, 0 ], [ 4, 4 ], [ 0, 2 ] ], [ [ 7391, 966 ], [ 2, -1 ], [ -2, -1 ], [ 0, -4 ], [ -2, -6 ], [ 0, -5 ], [ -4, -10 ], [ -6, -10 ], [ -7, -16 ], [ -14, -25 ], [ -26, -45 ], [ -7, -16 ], [ -3, -6 ], [ -5, -9 ], [ -18, -57 ], [ -5, -12 ], [ -13, -48 ], [ -4, -13 ], [ -8, -34 ], [ -11, -36 ], [ -4, -18 ], [ -8, -38 ], [ -3, -13 ], [ -4, -15 ], [ -9, -25 ], [ -4, -14 ], [ -6, -20 ], [ -4, -17 ], [ -2, -8 ], [ -2, -8 ], [ -1, -14 ], [ -3, -24 ], [ -3, -34 ], [ -2, -17 ], [ -2, -10 ], [ -4, -14 ], [ -1, -14 ], [ -3, -6 ], [ -4, -13 ], [ -5, -15 ], [ -4, -7 ], [ -3, -3 ], [ -4, -5 ], [ -4, -3 ], [ -6, -2 ], [ -2, 0 ], [ -6, 2 ], [ -4, 1 ], [ -1, 3 ], [ -4, 4 ], [ -2, 8 ], [ -2, 10 ], [ 0, 7 ], [ 0, 33 ], [ 0, 8 ], [ -2, 8 ], [ -1, 19 ], [ -1, 16 ], [ 0, 38 ], [ -2, 14 ], [ 0, 16 ], [ 0, 5 ], [ -1, 8 ], [ 0, 4 ], [ -4, 18 ], [ -2, 7 ], [ 0, 6 ], [ 0, 12 ], [ 0, 23 ], [ 0, 10 ], [ 0, 13 ], [ -2, 13 ], [ 0, 7 ], [ -2, 9 ], [ -4, 10 ], [ -2, 15 ], [ -9, 20 ], [ -2, 4 ], [ -4, 5 ], [ -2, 3 ], [ -4, 1 ], [ -5, 3 ], [ -6, 4 ], [ -4, 2 ], [ -2, 0 ], [ -6, 0 ], [ -3, 0 ], [ -15, -10 ], [ -4, -2 ], [ -6, -4 ], [ -6, -2 ], [ -7, -1 ], [ -6, -1 ], [ -18, -2 ], [ -22, -7 ], [ -21, -2 ], [ -5, -1 ], [ -6, 1 ], [ -6, 2 ], [ -19, 8 ], [ -9, 4 ], [ -4, 4 ], [ -6, 3 ], [ -9, 10 ], [ -4, 4 ], [ -3, 5 ], [ -3, 5 ], [ -13, 20 ], [ -3, 5 ], [ -3, 3 ], [ -5, 5 ], [ -10, 10 ], [ -4, 3 ], [ -7, 3 ], [ -4, 3 ], [ -4, 2 ], [ -4, 1 ], [ -5, 0 ], [ -10, -1 ], [ -19, -5 ], [ -2, -1 ], [ -3, 0 ], [ -4, 2 ], [ -4, 5 ], [ -3, 4 ], [ -3, 7 ], [ -1, 7 ], [ -3, 7 ], [ 0, 6 ], [ 0, 6 ], [ -1, 33 ], [ -2, 10 ], [ -2, 30 ], [ -2, 10 ], [ -4, 16 ], [ -4, 8 ], [ -4, 12 ], [ -5, 9 ], [ -6, 10 ], [ -4, 4 ], [ -4, 4 ], [ -3, 4 ], [ -4, 2 ], [ -8, 1 ], [ -5, 1 ], [ -4, 0 ], [ -14, -2 ], [ -5, 0 ], [ -6, 0 ], [ -13, 1 ], [ -6, 2 ], [ -5, 3 ], [ -6, 3 ], [ -4, 2 ], [ -5, 6 ], [ -35, 33 ], [ -7, 10 ], [ -15, 20 ], [ -8, 9 ], [ -10, 10 ], [ -5, 1 ], [ -6, 0 ], [ -2, -1 ], [ -6, -3 ], [ -11, -9 ], [ -4, -3 ], [ -8, -2 ], [ -5, -1 ], [ -7, 0 ], [ -7, 1 ], [ -9, 1 ], [ -10, 3 ], [ -9, 3 ], [ -7, 2 ], [ -8, 5 ], [ -6, 4 ], [ -5, 6 ], [ -1, 2 ], [ 0, 1 ] ], [ [ 6802, 1904 ], [ 0, 1 ], [ 2, 0 ], [ 2, 2 ], [ 11, 7 ], [ 6, 4 ], [ 6, 3 ], [ 4, 1 ], [ 3, 0 ], [ 8, -2 ], [ 8, -5 ], [ 7, -4 ], [ 11, -9 ], [ 8, -7 ], [ 6, -3 ], [ 7, -4 ], [ 6, -2 ], [ 10, 0 ], [ 5, 1 ], [ 8, 4 ], [ 7, 3 ], [ 4, 1 ], [ 4, 5 ], [ 2, 4 ], [ 4, 6 ], [ 4, 6 ], [ 9, 20 ], [ 10, 18 ], [ 1, 2 ], [ 2, 2 ], [ 2, 2 ], [ 6, 0 ], [ 2, -3 ], [ 10, -3 ], [ 5, -2 ], [ 4, -2 ], [ 4, -2 ], [ 9, 0 ], [ 4, 2 ], [ 4, 2 ], [ 4, 1 ], [ 4, 2 ], [ 24, 18 ], [ 8, 7 ], [ 7, 4 ], [ 10, 11 ], [ 5, 8 ], [ 10, 12 ], [ 2, 2 ], [ 0, 2 ], [ 15, 1 ] ], [ [ 7391, 3132 ], [ 0, -1 ], [ 0, -3 ], [ -2, -5 ], [ -2, -8 ], [ -2, -8 ], [ -6, -12 ], [ -13, -32 ], [ -3, -8 ], [ -3, -7 ], [ -2, -10 ], [ -2, -5 ], [ -1, -5 ], [ 0, -16 ], [ 1, -8 ], [ 3, -9 ], [ 1, -9 ], [ 4, -8 ], [ 4, -10 ], [ 4, -11 ], [ 22, -41 ], [ 7, -17 ], [ 5, -13 ], [ 2, -10 ], [ 4, -14 ], [ 1, -14 ], [ 3, -11 ], [ 7, -42 ], [ 2, -24 ], [ 4, -23 ], [ 2, -11 ], [ 0, -7 ], [ 1, -6 ], [ 0, -27 ], [ -1, -15 ], [ 0, -10 ], [ -2, -8 ], [ -2, -8 ], [ -4, -18 ], [ -2, -6 ], [ 0, -8 ], [ -4, -23 ], [ -1, -5 ], [ -1, -7 ], [ -3, -7 ], [ -2, -5 ], [ -8, -20 ], [ -2, -6 ], [ -2, -3 ], [ -5, -6 ], [ -4, -3 ], [ -2, -4 ], [ -4, -4 ], [ -11, -8 ], [ -4, -3 ], [ -4, -1 ], [ -6, -2 ], [ -7, -1 ], [ -4, 1 ], [ -10, 1 ], [ -13, 0 ], [ -2, -1 ], [ -1, -2 ], [ 0, -4 ], [ -2, -5 ], [ 3, -27 ], [ 0, -32 ], [ -1, -13 ], [ -2, -13 ], [ -2, -21 ], [ -2, -11 ], [ 0, -9 ], [ 0, -27 ], [ -2, -12 ], [ 0, -9 ], [ -4, -22 ], [ -3, -32 ] ], [ [ 7306, 2278 ], [ -3, 5 ], [ -1, -1 ], [ -4, -4 ], [ -6, -15 ], [ -2, -8 ], [ -4, -14 ], [ -2, -8 ], [ 0, -5 ], [ -1, -10 ], [ -2, -9 ], [ 0, -26 ], [ 2, -33 ], [ 0, -9 ], [ -2, -8 ], [ 0, -7 ], [ 0, -6 ], [ -2, -5 ], [ -2, -3 ], [ -2, -2 ], [ -4, -3 ], [ -3, 0 ], [ -6, 3 ], [ -8, 2 ], [ -17, 4 ], [ -6, 3 ], [ -4, 0 ], [ -5, -1 ], [ -15, -5 ], [ -14, -3 ], [ -5, -1 ], [ -10, -2 ], [ -4, 0 ], [ -9, -4 ], [ -4, -1 ], [ -6, -8 ], [ -4, -3 ], [ -5, -9 ], [ -10, -16 ], [ -9, -16 ], [ -8, -14 ], [ -3, -4 ], [ -4, -6 ], [ -4, -3 ], [ -2, -3 ] ], [ [ 6700, 2212 ], [ 2, 0 ], [ 3, 4 ], [ 4, 5 ], [ 4, 2 ], [ 4, 2 ], [ 5, 4 ], [ 7, 1 ], [ 22, 3 ], [ 9, 2 ], [ 4, 3 ], [ 8, 3 ], [ 4, 2 ], [ 5, 5 ], [ 5, 5 ], [ 18, 27 ], [ 4, 5 ], [ 6, 10 ], [ 2, 7 ], [ 1, 9 ], [ 3, 18 ], [ 0, 13 ], [ -1, 9 ], [ -5, 19 ], [ -2, 14 ], [ -2, 26 ], [ 0, 10 ], [ 0, 71 ], [ 2, 10 ], [ 0, 5 ], [ 4, 10 ], [ 9, 23 ], [ 2, 8 ], [ 2, 8 ], [ 2, 8 ], [ 1, 12 ], [ 1, 13 ], [ 2, 10 ], [ 0, 18 ], [ 1, 20 ], [ 0, 21 ], [ 3, 22 ], [ 3, 27 ], [ 0, 8 ], [ 0, 4 ], [ 0, 4 ], [ 0, 4 ], [ -2, 2 ], [ -2, 2 ], [ -3, 0 ], [ -4, -1 ], [ -6, -7 ], [ -13, -20 ], [ -4, -7 ], [ -8, -10 ], [ -7, -9 ], [ -6, -6 ], [ -2, -2 ], [ -4, -1 ], [ -5, 0 ], [ -4, 1 ], [ -2, 2 ], [ -2, 4 ], [ -1, 4 ], [ -3, 7 ], [ -7, 16 ], [ -4, 9 ], [ -4, 14 ], [ -6, 11 ], [ -5, 9 ], [ -6, 9 ], [ -6, 6 ], [ -1, 2 ], [ -1, 0 ] ], [ [ 6724, 2761 ], [ 0, 3 ], [ 2, 10 ], [ 3, 5 ], [ 0, 7 ], [ 1, 7 ], [ -2, 14 ], [ -2, 6 ], [ -4, 12 ], [ -3, 6 ], [ -4, 7 ], [ -2, 6 ], [ -8, 9 ], [ -3, 4 ], [ -4, 5 ], [ -6, 13 ], [ 0, 3 ], [ 0, 7 ], [ 0, 1 ], [ 2, 6 ], [ 2, 5 ], [ 4, 3 ], [ 2, 2 ], [ 9, 2 ], [ 6, 2 ], [ 5, 4 ], [ 6, 5 ], [ 4, 2 ], [ 2, 2 ] ], [ [ 7047, 3299 ], [ 0, 2 ], [ 2, 5 ], [ 2, 7 ], [ 4, 10 ], [ 9, 18 ], [ 17, 30 ], [ 2, 8 ], [ 4, 6 ], [ 2, 9 ], [ 4, 10 ], [ 1, 8 ], [ 4, 20 ], [ 4, 14 ], [ 2, 8 ], [ 4, 9 ], [ 2, 5 ], [ 5, 8 ], [ 2, 5 ], [ 0, 3 ], [ 3, 8 ], [ 0, 10 ], [ -1, 8 ], [ -2, 10 ], [ -1, 9 ], [ -1, 4 ], [ -2, 7 ], [ -5, 15 ], [ -2, 6 ], [ -2, 8 ], [ -2, 12 ], [ 0, 7 ], [ -2, 10 ], [ -3, 6 ], [ -4, 6 ], [ -25, 42 ], [ -2, 8 ], [ -2, 2 ], [ -1, 5 ], [ -6, 16 ], [ 0, 6 ], [ 0, 3 ], [ 0, 2 ], [ 2, 4 ], [ 13, 22 ], [ 7, 8 ], [ 4, 5 ], [ 4, 6 ], [ 6, 4 ], [ 19, 16 ], [ 11, 10 ], [ 6, 2 ], [ 2, 1 ], [ 1, -2 ], [ 4, -4 ], [ 4, -6 ], [ 4, -3 ], [ 6, -6 ], [ 11, -8 ], [ 6, -5 ], [ 5, -6 ], [ 2, -5 ], [ 4, -7 ], [ 4, -9 ], [ 2, -7 ], [ 2, -5 ], [ 2, -8 ], [ 4, -15 ], [ 1, -6 ], [ 3, -7 ], [ 1, -4 ], [ 2, -3 ], [ 8, -15 ], [ 4, -7 ], [ 1, -5 ], [ 4, -10 ], [ 2, -7 ], [ 2, -4 ], [ 6, -15 ], [ 1, -4 ], [ 2, -6 ], [ 2, -6 ], [ 2, -9 ], [ 2, -20 ], [ 4, -29 ], [ 4, -29 ], [ 2, -8 ], [ 4, -11 ], [ 3, -8 ], [ 4, -5 ], [ 6, -13 ], [ 3, -3 ], [ 3, -7 ], [ 3, -10 ], [ 6, -23 ], [ 2, -9 ], [ 7, -13 ], [ 4, -12 ], [ 4, -10 ], [ 4, -8 ], [ 2, -4 ], [ 3, -2 ], [ 4, -1 ], [ 2, 0 ], [ 4, 1 ], [ 2, 1 ], [ 2, 5 ], [ 1, 4 ], [ 4, 15 ], [ 4, 7 ], [ 2, 3 ], [ 2, 0 ], [ 2, -5 ], [ 2, -10 ], [ 0, -3 ], [ 2, -7 ], [ 0, -25 ], [ -2, -14 ], [ -2, -19 ], [ -6, -34 ], [ 0, -8 ], [ -2, -14 ], [ -2, -7 ], [ -3, -19 ], [ 0, -10 ], [ 3, -3 ], [ 0, -4 ], [ 3, -3 ], [ 5, -6 ], [ 6, -7 ], [ 24, -25 ], [ 10, -9 ], [ 8, -5 ], [ 11, -8 ], [ 2, -2 ] ], [ [ 6624, 2419 ], [ 0, 1 ], [ 0, 1 ], [ -2, 9 ], [ -2, 6 ], [ -2, 6 ], [ 0, 9 ], [ -2, 20 ], [ -1, 11 ], [ 0, 5 ], [ 1, 2 ], [ 2, 1 ], [ 2, 0 ], [ 4, -1 ], [ 6, -1 ], [ 1, -2 ], [ 3, -2 ], [ 3, -5 ], [ 9, -22 ], [ 4, -7 ], [ 2, -4 ], [ 2, -3 ], [ 2, -1 ], [ 2, 0 ], [ 2, 1 ], [ 2, 0 ], [ 0, 3 ], [ 5, 4 ], [ 2, 2 ], [ 0, 4 ], [ 6, 15 ], [ 6, 13 ], [ 5, 9 ], [ 4, 10 ], [ 8, 24 ], [ 2, 11 ], [ 2, 4 ], [ 1, 6 ], [ 2, 8 ], [ 1, 5 ], [ 0, 8 ] ], [ [ 6706, 2569 ], [ 0, 0 ] ], [ [ 6706, 2569 ], [ -1, 0 ], [ 0, 2 ], [ 2, 10 ], [ 0, 7 ], [ 2, 4 ], [ 2, 7 ], [ 6, 15 ], [ 2, 5 ], [ 2, 5 ], [ 0, 4 ], [ 0, 2 ], [ 0, 11 ], [ -4, 18 ], [ 0, 10 ], [ -4, 11 ], [ 0, 9 ], [ -3, 10 ], [ -1, 7 ], [ -2, 6 ], [ 0, 13 ], [ 0, 8 ], [ -2, 11 ], [ -2, 4 ], [ 0, 11 ], [ 2, 4 ], [ 1, 4 ], [ 1, 0 ], [ 0, 2 ], [ 2, 1 ], [ 2, -1 ], [ 2, -2 ], [ 2, -1 ], [ 4, 1 ], [ 2, -2 ], [ 3, -4 ] ], [ [ 6565, 2586 ], [ 2, -3 ], [ 4, -2 ], [ 3, -2 ], [ 6, -2 ], [ 8, -1 ], [ 2, -1 ], [ 3, -5 ], [ 6, -4 ], [ 2, -4 ], [ 6, -7 ], [ 0, -3 ], [ 2, 0 ], [ 2, 1 ], [ 1, 3 ], [ 2, 10 ], [ 4, 10 ], [ 2, 3 ], [ 2, 2 ], [ 4, 2 ], [ 8, 6 ], [ 1, 2 ], [ 8, 12 ], [ 7, 7 ], [ 3, 1 ], [ 1, 0 ], [ 0, -1 ], [ 0, -1 ], [ 8, 2 ], [ 2, 0 ], [ 1, -1 ], [ 4, -1 ], [ 0, -1 ], [ 4, 0 ], [ 2, -1 ], [ 2, -2 ], [ 2, -6 ], [ 2, -3 ], [ 2, -9 ], [ 1, -5 ], [ 4, -3 ], [ 4, 0 ], [ 0, -1 ], [ 4, -7 ], [ 0, -1 ], [ 2, -1 ], [ 5, 0 ], [ 3, 0 ] ], [ [ 8271, 4789 ], [ 2, -8 ] ], [ [ 8273, 4781 ], [ 2, -8 ], [ 0, -6 ], [ 3, -7 ], [ 0, -8 ], [ 1, -8 ] ], [ [ 8279, 4744 ], [ 0, -9 ] ], [ [ 8279, 4735 ], [ 0, -4 ] ], [ [ 8279, 4731 ], [ 4, -2 ], [ -2, 0 ], [ 0, -4 ], [ 0, -1 ], [ 0, -2 ], [ 2, -5 ], [ 2, -4 ], [ 2, -1 ], [ 0, -3 ], [ 0, -4 ], [ 0, -3 ], [ -2, -10 ], [ 0, -13 ], [ 2, -4 ], [ 0, -1 ] ], [ [ 8287, 4674 ], [ -2, -1 ], [ 0, -3 ], [ -2, -6 ], [ -2, -8 ], [ -3, -14 ], [ -3, -9 ], [ 0, -9 ], [ -4, -31 ], [ -1, -18 ], [ -2, -29 ], [ 0, -13 ], [ -2, -13 ], [ -2, -7 ], [ -2, -4 ], [ -2, -7 ], [ -8, -18 ], [ -9, -22 ], [ -15, -32 ], [ -13, -24 ], [ -8, -14 ], [ -4, -9 ], [ -6, -17 ], [ -9, -23 ], [ -6, -22 ], [ -2, -6 ], [ -3, -6 ], [ -2, -2 ], [ -4, -4 ], [ -7, -6 ], [ -3, -1 ], [ -1, -1 ], [ -4, -9 ], [ -2, -4 ], [ 0, -5 ], [ -2, -4 ], [ 0, -9 ], [ 2, -5 ], [ 0, -6 ], [ 6, -15 ], [ 1, -9 ], [ 3, -6 ], [ 1, -17 ], [ 3, -8 ], [ 7, -41 ], [ 5, -19 ], [ 2, -12 ], [ 1, -4 ], [ 0, -15 ], [ -1, -8 ], [ -2, -12 ], [ -1, -5 ], [ -2, -2 ], [ -2, 4 ], [ -4, 4 ], [ 0, -1 ], [ -2, -1 ], [ -1, -11 ], [ -1, -6 ], [ -3, -5 ], [ -3, -3 ], [ -1, -1 ], [ -4, -2 ], [ -11, -2 ], [ -4, -2 ], [ -4, -3 ], [ -6, -4 ], [ -2, -1 ], [ -13, -5 ], [ -4, -2 ], [ -4, -2 ], [ -7, -6 ], [ -6, -5 ], [ -7, -9 ], [ -19, -19 ], [ -4, -2 ], [ -4, -2 ], [ -4, -1 ], [ -3, -3 ], [ -7, 0 ], [ -3, 1 ], [ -2, 3 ], [ -7, 4 ], [ -10, 8 ], [ -9, 9 ], [ -4, 4 ], [ -4, 5 ], [ -2, 3 ], [ -2, 3 ], [ -2, 5 ], [ 0, 3 ], [ 0, 10 ], [ -2, 3 ], [ 0, 2 ], [ -2, 0 ], [ -2, -2 ], [ -11, -10 ], [ -6, -4 ], [ -1, 0 ], [ -3, 0 ], [ -9, 0 ], [ -6, -1 ], [ -9, -3 ], [ -2, -2 ], [ -4, -4 ], [ -2, -2 ], [ -3, -5 ], [ -6, -10 ], [ 0, -4 ], [ -4, -12 ], [ -2, -6 ], [ 0, -10 ], [ 0, -15 ], [ 0, -15 ], [ 0, -41 ], [ 0, -6 ], [ 0, -3 ], [ -2, -8 ], [ -2, -4 ], [ -2, -4 ], [ -1, -4 ], [ -3, -2 ], [ -3, -4 ], [ -2, -3 ], [ -7, -1 ], [ -3, 0 ], [ -4, 0 ], [ -9, 6 ], [ -6, 2 ], [ -13, 0 ], [ -3, -1 ], [ -8, -3 ], [ -8, -4 ], [ -7, -3 ], [ -18, -13 ], [ -5, -2 ], [ -8, -1 ], [ -13, 0 ], [ -4, -1 ], [ -4, -4 ], [ -1, -4 ], [ -3, -3 ], [ -1, -6 ], [ -3, -12 ], [ -3, -36 ], [ -2, -10 ], [ -2, -5 ], [ -2, -7 ], [ 0, -2 ], [ -2, 0 ] ], [ [ 7774, 3759 ], [ -4, -3 ], [ -7, -5 ], [ -9, -6 ], [ -6, -6 ], [ -13, -12 ], [ -6, -9 ], [ -4, -8 ], [ -2, -3 ], [ -4, -10 ], [ -2, -6 ], [ 0, -8 ], [ 0, -5 ], [ 0, -9 ], [ 2, -7 ], [ 2, -9 ], [ 2, -6 ], [ 9, -21 ], [ 3, -8 ], [ 1, -8 ], [ 4, -13 ], [ 2, -11 ], [ 2, -9 ], [ 0, -8 ], [ 2, -8 ], [ 0, -7 ], [ -2, -6 ], [ -2, -6 ], [ -2, -9 ], [ -2, -2 ], [ -2, -2 ], [ 0, -1 ], [ -2, -1 ], [ -3, 0 ], [ -2, 2 ], [ -6, 5 ], [ -2, 4 ], [ -13, 11 ], [ -12, 12 ], [ -5, 3 ], [ -4, 3 ], [ -5, 2 ], [ -4, 1 ], [ -10, 1 ], [ -5, 0 ], [ -5, 2 ], [ -5, 5 ], [ -8, 5 ], [ -2, 5 ], [ -3, 3 ], [ -6, 7 ], [ -4, 9 ], [ -6, 14 ], [ -2, 6 ], [ -7, 32 ], [ -10, 38 ], [ -9, 31 ], [ -14, 51 ], [ -13, 41 ], [ -9, 38 ], [ -2, 8 ], [ -2, 6 ], [ 0, 7 ] ], [ [ 7556, 3879 ], [ 2, 2 ], [ 0, 3 ], [ 2, 4 ], [ 0, 2 ], [ 1, 8 ], [ 3, 9 ], [ 0, 7 ], [ 1, 6 ], [ 0, 9 ], [ -1, 7 ], [ 0, 4 ], [ -1, 7 ], [ -3, 5 ], [ 0, 5 ], [ -2, 3 ], [ -4, 5 ], [ -2, 4 ], [ -9, 9 ], [ -1, 3 ], [ -1, 3 ], [ 0, 3 ], [ -2, 6 ], [ 0, 17 ], [ 0, 6 ], [ 2, 7 ], [ 5, 16 ], [ 3, 7 ], [ 1, 8 ], [ 4, 16 ], [ 2, 7 ], [ 0, 3 ], [ 0, 8 ], [ 0, 3 ], [ -4, 6 ], [ -2, 3 ], [ -4, 3 ], [ -11, 0 ], [ -15, -4 ], [ -8, 0 ], [ -2, 1 ], [ -2, 4 ], [ -1, 3 ], [ -2, 1 ], [ 0, 4 ], [ 0, 8 ], [ 0, 23 ], [ 0, 6 ], [ 0, 7 ], [ 5, 27 ], [ 0, 7 ], [ -2, 5 ], [ 0, 4 ], [ -5, 15 ], [ -2, 7 ], [ -2, 3 ], [ 0, 2 ], [ 0, 6 ], [ 0, 5 ], [ 2, 6 ], [ 2, 8 ], [ 2, 5 ], [ 3, 7 ], [ 4, 2 ], [ 2, 2 ], [ 4, 1 ], [ 4, 1 ], [ 11, -2 ], [ 31, 0 ], [ 15, 1 ], [ 5, 0 ], [ 4, 1 ], [ 4, 5 ], [ 2, 2 ], [ 0, 5 ], [ 2, 4 ], [ 0, 8 ], [ 0, 4 ], [ 0, 7 ], [ -4, 31 ], [ 0, 7 ], [ 0, 9 ], [ 0, 9 ], [ 0, 4 ], [ 2, 6 ], [ 0, 4 ], [ 2, 2 ], [ 2, 5 ], [ 1, 3 ], [ 3, 1 ], [ 1, 2 ], [ 4, 0 ], [ 0, -2 ], [ 2, -1 ], [ 0, -3 ], [ 4, -11 ], [ 4, -28 ], [ 1, -7 ], [ 3, -6 ], [ 1, -4 ], [ 2, -2 ], [ 2, -1 ], [ 2, 0 ], [ 4, 2 ], [ 5, 2 ], [ 16, 17 ], [ 7, 5 ], [ 4, 4 ], [ 19, 11 ], [ 6, 3 ], [ 5, 5 ], [ 27, 23 ], [ 11, 10 ], [ 8, 10 ], [ 6, 7 ], [ 5, 5 ], [ 4, 7 ], [ 4, 8 ], [ 4, 6 ], [ 2, 7 ], [ 2, 8 ], [ 3, 9 ], [ 4, 21 ], [ 4, 19 ], [ 2, 12 ], [ 2, 8 ], [ 0, 6 ], [ 3, 49 ], [ 3, 26 ], [ 1, 11 ], [ 2, 8 ], [ 1, 5 ], [ 3, 6 ], [ 4, 10 ], [ 2, 6 ], [ 3, 4 ], [ 8, 7 ], [ 4, 3 ], [ 4, 1 ], [ 2, 2 ], [ 13, 4 ], [ 7, 0 ], [ 14, -1 ], [ 4, 1 ], [ 4, 0 ], [ 4, 3 ], [ 1, 3 ], [ 2, 5 ], [ 2, 4 ], [ 2, 8 ], [ 2, 10 ], [ 2, 13 ], [ 1, 12 ], [ 3, 20 ], [ 0, 6 ], [ 1, 7 ], [ 2, 8 ], [ 1, 5 ], [ 1, 6 ], [ 4, 3 ], [ 4, 7 ], [ 6, 4 ], [ 5, 4 ], [ 6, 3 ], [ 5, 1 ], [ 6, 0 ], [ 6, 0 ], [ 7, -2 ], [ 8, -4 ], [ 8, -4 ], [ 7, -2 ], [ 4, -5 ], [ 4, -3 ], [ 4, -3 ], [ 13, -17 ], [ 6, -6 ], [ 3, -4 ], [ 10, -6 ], [ 5, -2 ], [ 6, -1 ], [ 2, 1 ], [ 2, 1 ], [ 2, 3 ], [ 2, 2 ], [ 2, 2 ], [ 0, 3 ], [ 2, 8 ], [ 1, 6 ], [ 3, 15 ], [ 0, 30 ], [ 1, 14 ], [ 0, 6 ], [ 2, 8 ], [ 1, 5 ], [ 0, 1 ], [ 1, 0 ] ], [ [ 8036, 4857 ], [ 0, 1 ], [ 2, 5 ], [ 2, 5 ], [ 0, 1 ], [ 0, -1 ], [ 2, -6 ], [ 0, -2 ], [ 0, -2 ], [ 2, 2 ], [ 2, 0 ], [ 3, -1 ], [ 2, -1 ], [ 3, -1 ], [ 9, -9 ], [ 3, -6 ], [ 14, -21 ], [ 4, -4 ], [ 3, -6 ], [ 6, -6 ], [ 8, -6 ], [ 13, -12 ], [ 6, -5 ], [ 7, -2 ], [ 19, -9 ], [ 6, -1 ], [ 4, 0 ], [ 4, 1 ], [ 1, 1 ], [ 8, 8 ], [ 4, 1 ], [ 10, 7 ], [ 11, 6 ], [ 13, 7 ], [ 15, 9 ], [ 13, 6 ], [ 8, 4 ], [ 4, 1 ], [ 7, 0 ], [ 2, -1 ], [ 3, -2 ], [ 1, -4 ], [ 4, -4 ], [ 2, -5 ], [ 0, -4 ], [ 4, -6 ], [ 1, -6 ] ], [ [ 7774, 3759 ], [ 0, -2 ], [ 2, -7 ], [ 2, -4 ], [ 2, -5 ], [ 5, -8 ], [ 14, -13 ], [ 9, -7 ], [ 8, -5 ], [ 11, -8 ], [ 4, -2 ], [ 4, -2 ], [ 4, -5 ], [ 2, -2 ], [ 1, -5 ], [ 4, -4 ], [ 2, -6 ], [ 1, -4 ], [ 1, -7 ], [ 2, -4 ], [ 0, -5 ], [ 0, -7 ], [ 0, -5 ], [ 0, -3 ], [ -2, -8 ], [ -4, -8 ], [ -5, -11 ], [ -8, -15 ], [ -2, -6 ], [ -8, -10 ], [ -3, -8 ], [ -4, -5 ], [ -2, -9 ], [ -2, -6 ], [ 0, -6 ], [ -1, -8 ], [ 0, -8 ], [ 1, -7 ], [ 0, -4 ], [ 0, -5 ], [ 2, -3 ], [ 2, -2 ], [ 2, -3 ], [ 2, -2 ], [ 5, 0 ], [ 6, 5 ], [ 2, 2 ], [ 4, 7 ], [ 9, 13 ], [ 6, 6 ], [ 2, 1 ], [ 2, 0 ], [ 0, -6 ], [ -2, -3 ], [ -4, -11 ], [ -2, -9 ], [ -7, -15 ], [ -6, -14 ], [ -6, -10 ], [ -6, -9 ], [ -9, -17 ], [ -11, -19 ], [ -2, -2 ] ], [ [ 7801, 3424 ], [ 0, 0 ] ], [ [ 7801, 3424 ], [ 0, -1 ], [ -2, -1 ], [ -10, -12 ], [ -3, -5 ], [ -8, -13 ], [ -4, -10 ], [ -5, -18 ], [ -8, -14 ], [ -4, -15 ], [ -2, -4 ], [ -1, -10 ], [ -1, -7 ], [ -2, -11 ], [ 0, -11 ], [ 3, -25 ], [ 3, -13 ], [ 2, -11 ], [ 6, -25 ], [ 5, -21 ], [ 2, -7 ], [ 1, -6 ], [ 0, -26 ], [ -1, -5 ], [ -2, -3 ], [ -1, -5 ], [ -6, -8 ], [ -15, -23 ], [ -8, -10 ], [ -6, -9 ], [ -3, -7 ], [ -4, -3 ], [ -4, -10 ], [ -10, -27 ], [ -9, -21 ], [ -10, -21 ], [ -7, -15 ], [ -4, -7 ], [ -5, -7 ], [ -10, -9 ], [ -2, -2 ], [ -4, 0 ], [ -3, -1 ], [ -4, -1 ], [ -6, 0 ], [ -13, 1 ], [ -8, 0 ], [ -17, -6 ], [ -12, -2 ], [ -11, -3 ], [ -19, -8 ], [ -2, -1 ], [ -6, 0 ], [ -11, -1 ], [ -7, -2 ], [ -2, -3 ], [ -4, -4 ], [ -6, -13 ], [ -4, -8 ], [ -3, -8 ], [ -2, -6 ], [ -4, -18 ], [ -2, -8 ], [ -2, -6 ], [ 0, -3 ], [ -2, -2 ], [ -1, -3 ], [ -3, -1 ], [ -1, 0 ], [ -4, 1 ], [ -2, 2 ], [ -2, 3 ], [ -2, 2 ], [ -2, 6 ], [ -3, 5 ], [ -3, 10 ], [ -3, 6 ], [ -2, 12 ], [ -11, 50 ], [ -3, 10 ], [ -3, 14 ], [ -2, 19 ], [ -4, 18 ], [ -2, 21 ], [ -1, 10 ], [ -3, 13 ], [ -1, 4 ], [ -1, 3 ], [ -2, 5 ], [ -3, 4 ], [ -12, 17 ], [ -9, 13 ], [ -4, 5 ], [ -6, 5 ], [ -4, 5 ], [ -5, 2 ], [ -7, 7 ], [ -4, 2 ], [ -6, 0 ], [ 0, -1 ] ], [ [ 7e3, 4444 ], [ 6, 0 ], [ 7, 0 ], [ 6, 1 ], [ 5, 2 ], [ 2, 1 ], [ 0, 2 ], [ 4, 4 ], [ 2, 2 ], [ 2, 1 ], [ 4, 0 ], [ 3, 6 ], [ 6, 5 ], [ 2, 2 ], [ 2, -2 ], [ 2, -1 ], [ 0, -2 ], [ 0, -2 ], [ 2, -2 ], [ 2, -4 ], [ 3, -5 ], [ 14, -18 ], [ 9, -8 ], [ 10, -10 ], [ 8, -9 ], [ 1, -2 ], [ 2, -1 ], [ 2, 0 ], [ 2, 1 ], [ 2, 2 ], [ 3, 6 ], [ 3, 1 ], [ 1, 2 ], [ 4, 2 ], [ 4, 0 ], [ 2, -3 ], [ 4, -5 ], [ 3, -8 ], [ 2, -14 ], [ 3, -7 ], [ 3, -13 ], [ 2, -4 ], [ 4, -8 ], [ 6, -5 ], [ 1, -4 ], [ 4, -2 ], [ 4, 0 ], [ 7, -4 ], [ 16, -4 ], [ 2, -2 ], [ 4, 0 ], [ 7, -9 ], [ 4, -4 ], [ 5, -7 ], [ 2, -3 ], [ 1, -4 ], [ 1, -4 ], [ 2, -6 ], [ 2, -6 ], [ 4, -23 ], [ 2, -13 ], [ 4, -11 ], [ 3, -10 ], [ 5, -11 ], [ 7, -17 ], [ 9, -11 ], [ 4, -7 ], [ 6, -12 ], [ 2, -5 ], [ 3, -7 ], [ 12, -47 ], [ 7, -25 ], [ 4, -11 ], [ 10, -33 ], [ 5, -9 ], [ 4, -7 ], [ 2, -7 ], [ 4, -8 ], [ 4, -2 ], [ 5, -7 ], [ 6, -4 ], [ 11, -6 ], [ 4, -1 ], [ 2, -1 ], [ 18, 0 ], [ 5, -2 ], [ 6, -2 ], [ 11, -6 ], [ 6, -6 ], [ 6, -4 ], [ 4, -6 ], [ 3, -4 ], [ 8, -17 ], [ 9, -13 ], [ 4, -8 ], [ 2, -3 ], [ 2, -4 ], [ 3, -2 ], [ 4, -1 ], [ 2, 0 ], [ 4, 2 ], [ 6, 7 ], [ 7, 11 ], [ 4, 6 ], [ 6, 5 ], [ 9, 7 ], [ 6, 4 ], [ 4, 3 ], [ 2, 1 ], [ 3, 1 ], [ 3, 0 ], [ 7, -5 ], [ 4, -4 ], [ 7, -9 ], [ 2, -6 ], [ 10, -22 ], [ 9, -16 ], [ 4, -9 ], [ 6, -8 ], [ 1, -3 ], [ 4, -6 ], [ 4, 0 ], [ 2, -1 ], [ 4, 2 ] ], [ [ 8444, 4768 ], [ 0, -1 ], [ 2, -6 ], [ 13, -18 ], [ 4, -5 ], [ 2, -6 ], [ 4, -3 ], [ 2, -6 ], [ 0, -2 ], [ 2, -4 ], [ 0, -4 ], [ 0, -3 ], [ 2, -18 ], [ 0, -16 ], [ -2, -23 ], [ 0, -18 ], [ 0, -5 ], [ 3, -5 ], [ 0, -3 ], [ 3, -2 ], [ 4, -2 ], [ 7, 0 ], [ 13, 3 ], [ 4, 0 ], [ 4, -1 ], [ 3, 0 ], [ 3, -2 ], [ 3, -2 ], [ 2, -3 ], [ 4, -3 ], [ 2, -6 ], [ 2, -3 ], [ 2, -7 ], [ 1, -8 ], [ 3, -10 ], [ 1, -7 ], [ 0, -22 ], [ 3, -10 ], [ 1, -5 ], [ 2, -7 ], [ 2, -4 ], [ 2, -5 ], [ 7, -5 ], [ 8, -5 ], [ 4, -1 ], [ 5, -1 ], [ 19, -1 ], [ 10, -2 ], [ 11, -5 ], [ 8, -5 ], [ 13, -14 ], [ 30, -36 ], [ 14, -20 ], [ 4, -7 ], [ 3, -4 ], [ 2, -9 ], [ 0, -14 ], [ 0, -3 ], [ -2, -10 ], [ -3, -8 ], [ -7, -19 ], [ -4, -7 ], [ -7, -17 ], [ -5, -9 ], [ -6, -16 ], [ -4, -12 ], [ -5, -15 ], [ -4, -10 ], [ -2, -6 ], [ 0, -4 ], [ 0, -6 ], [ -1, -7 ], [ 0, -10 ], [ 1, -3 ], [ 0, -6 ], [ 0, -4 ], [ 8, -21 ], [ 6, -12 ], [ 14, -24 ], [ 10, -20 ], [ 9, -13 ], [ 5, -10 ], [ 5, -13 ], [ 6, -15 ], [ 3, -7 ], [ 1, -5 ], [ 3, -12 ], [ 0, -13 ], [ -2, -4 ], [ -1, -18 ], [ -2, -25 ], [ -1, -12 ], [ -3, -10 ], [ -2, -9 ], [ -2, -9 ], [ -4, -21 ], [ -2, -8 ], [ -2, -6 ], [ 0, -2 ], [ 2, -1 ] ], [ [ 8687, 3925 ], [ -2, -4 ], [ 0, -3 ], [ -1, 0 ], [ -1, -1 ], [ -2, 1 ], [ -3, 6 ], [ -6, 5 ], [ -2, 1 ], [ -5, 1 ], [ -4, 0 ], [ -10, -1 ], [ -7, -1 ], [ -6, 1 ], [ -2, 0 ], [ -1, 1 ], [ -1, 0 ], [ -6, -4 ], [ -2, -7 ], [ -3, -3 ], [ -4, -7 ], [ -10, -24 ], [ -19, -37 ], [ -5, -9 ], [ -2, -4 ], [ -4, -5 ], [ -8, -3 ], [ -2, -1 ], [ -5, -1 ], [ -4, 1 ], [ -8, 2 ], [ -7, 2 ], [ -6, 5 ], [ -13, 9 ], [ -6, 3 ], [ -6, 1 ], [ -5, 1 ], [ -2, 0 ], [ -2, -1 ], [ -2, -2 ], [ -1, -2 ], [ -1, -5 ], [ -6, -19 ], [ -3, -10 ], [ -4, -6 ], [ -2, -6 ], [ -2, -4 ], [ -4, -6 ], [ -4, -6 ], [ -11, -10 ], [ -2, -4 ], [ -3, -2 ], [ -3, -7 ], [ -9, -15 ], [ -13, -18 ], [ -4, -10 ], [ -1, -7 ], [ 0, -7 ], [ -1, -7 ], [ 0, -33 ], [ -2, -5 ], [ -2, -15 ], [ -2, -11 ], [ -3, -11 ], [ -6, -20 ], [ -2, -11 ], [ -2, -10 ], [ -3, -18 ], [ -1, -9 ], [ 0, -2 ] ], [ [ 8406, 3551 ], [ 1, -2 ], [ -1, -4 ], [ -2, -2 ], [ 0, -2 ], [ -2, -3 ], [ -1, -3 ], [ -4, -2 ], [ -5, -2 ], [ -5, 0 ], [ -7, 0 ], [ -6, -2 ], [ -4, -2 ], [ -11, -6 ], [ -5, -3 ], [ -4, -1 ], [ -3, -2 ], [ -3, 0 ], [ -6, 3 ], [ -6, 3 ], [ -11, 8 ], [ -2, 3 ], [ -4, 6 ], [ -3, 5 ], [ -3, 7 ], [ -1, 3 ], [ -1, 9 ], [ -1, 5 ], [ -4, 10 ], [ -8, 14 ], [ -11, 15 ], [ -4, 5 ], [ -4, 5 ], [ -4, 2 ], [ -5, 2 ], [ -2, 0 ], [ -2, 0 ], [ -2, -4 ], [ -5, -15 ], [ -8, -27 ], [ -4, -7 ], [ -2, -4 ], [ -1, -4 ], [ -3, -2 ], [ -1, -4 ], [ -4, -2 ], [ -2, 0 ], [ -6, 3 ], [ -13, 9 ], [ -4, 2 ], [ -4, 2 ], [ -5, -2 ], [ -3, -1 ], [ -5, -2 ], [ -3, -3 ], [ -1, -4 ], [ 0, -2 ], [ -2, -2 ], [ 0, -10 ], [ 2, -6 ], [ 2, -8 ], [ 11, -38 ], [ 3, -11 ], [ 1, -7 ], [ 2, -8 ], [ 1, -5 ], [ 0, -8 ], [ 1, -8 ], [ -4, -21 ], [ -1, -8 ], [ -4, -8 ], [ -4, -10 ], [ -6, -7 ], [ -4, -6 ], [ -2, -4 ], [ -5, -4 ], [ -2, -2 ], [ -4, -2 ], [ -8, -2 ], [ -11, 0 ], [ -4, 1 ], [ -3, 1 ], [ -6, 2 ], [ -4, 1 ], [ -4, 3 ], [ -6, 6 ], [ -3, 3 ], [ -6, 4 ], [ -4, 2 ], [ -4, 1 ], [ -7, 0 ], [ -6, 1 ], [ -7, 0 ], [ -12, -1 ], [ -15, -3 ], [ -10, -5 ], [ -13, -6 ], [ -4, -2 ], [ -9, -2 ], [ -4, -1 ], [ -2, -1 ], [ -2, -2 ], [ -1, -2 ], [ -3, -3 ], [ 0, -3 ], [ 0, -2 ], [ -1, -12 ], [ -2, -23 ], [ -1, -11 ], [ -1, -7 ], [ -2, -6 ], [ -2, -8 ], [ -2, -8 ], [ -6, -14 ], [ -5, -11 ], [ -4, -8 ], [ -6, -10 ], [ -3, -8 ], [ -4, -5 ], [ -6, -5 ], [ -4, -2 ], [ -2, -1 ], [ -2, 0 ], [ -4, 2 ], [ -1, 1 ], [ -4, 7 ], [ -14, 21 ], [ -7, 11 ], [ -4, 7 ], [ -5, 4 ], [ -4, 3 ], [ -4, 4 ], [ -6, 2 ], [ -4, 1 ], [ -5, 1 ], [ -10, 1 ], [ -5, 3 ], [ -10, 4 ], [ -4, 2 ], [ -5, 6 ], [ -4, 2 ], [ -4, 2 ], [ -6, 2 ], [ -5, 3 ], [ -23, 0 ], [ -2, 1 ], [ -4, 5 ], [ -2, 6 ], [ -2, 7 ], [ 0, 6 ], [ -1, 9 ], [ 0, 11 ], [ -3, 40 ], [ 0, 11 ], [ -1, 6 ], [ -3, 8 ], [ -1, 3 ], [ -2, 1 ] ], [ [ 8287, 4674 ], [ 7, 0 ], [ 10, 1 ], [ 4, 0 ], [ 3, -1 ], [ 2, -1 ], [ 8, -4 ], [ 2, -1 ], [ 3, -2 ], [ 2, 0 ], [ 4, 2 ], [ 3, 3 ], [ 3, 11 ], [ 6, 10 ], [ 2, 3 ], [ 5, 6 ], [ 4, 2 ], [ 6, 2 ], [ 4, 1 ], [ 9, 2 ], [ 2, 1 ], [ 4, 2 ], [ 5, 2 ], [ 3, 4 ], [ 1, 4 ], [ 4, 8 ], [ 2, 9 ], [ 2, 6 ], [ 0, 27 ], [ 4, 10 ], [ 2, 7 ], [ 3, 4 ], [ 2, 5 ], [ 8, 6 ], [ 2, 1 ], [ 3, 1 ], [ 2, 0 ], [ 0, -1 ], [ 3, 0 ], [ 0, -1 ], [ 1, -2 ], [ 0, -7 ], [ 0, -3 ], [ 2, -3 ], [ 1, -3 ], [ 5, -6 ], [ 0, -1 ], [ 4, -4 ], [ 3, -3 ], [ 2, -3 ] ], [ [ 8279, 4741 ], [ 0, -4 ] ], [ [ 8279, 4737 ], [ 0, -6 ] ], [ [ 8279, 4735 ], [ 0, 6 ] ], [ [ 8279, 4741 ], [ 0, 1 ] ], [ [ 8279, 4742 ], [ -1, 8 ], [ -1, 10 ] ], [ [ 8277, 4760 ], [ -6, 25 ] ], [ [ 8271, 4785 ], [ 2, -4 ] ], [ [ 8279, 4744 ], [ 0, -3 ] ], [ [ 8478, 5751 ], [ 0, -2 ], [ 1, -4 ], [ 0, -3 ], [ -1, -6 ], [ 0, -3 ], [ -2, -3 ], [ -3, -9 ], [ -2, -7 ], [ -4, -10 ], [ -10, -23 ], [ -7, -17 ], [ -9, -20 ], [ -2, -3 ], [ -2, -4 ], [ -2, -3 ], [ 0, -4 ], [ 0, -6 ], [ 0, -23 ], [ 0, -8 ], [ 3, -6 ], [ 1, -3 ], [ 3, -6 ], [ 2, -3 ], [ 6, -10 ], [ 4, -4 ], [ 4, -7 ], [ 3, -7 ], [ 2, -5 ], [ 2, -15 ], [ 0, -8 ], [ 0, -8 ], [ 0, -10 ], [ -1, -13 ], [ -1, -11 ], [ -2, -12 ], [ -5, -29 ], [ -2, -10 ], [ -2, -14 ], [ -4, -30 ], [ 0, -12 ], [ -2, -8 ], [ -2, -7 ], [ -4, -10 ], [ -7, -8 ], [ -4, -5 ], [ -13, -13 ], [ -9, -7 ], [ -10, -12 ], [ -21, -22 ], [ -10, -11 ], [ -7, -3 ], [ -13, -8 ], [ -18, -8 ], [ -9, -4 ], [ -10, -6 ], [ -2, -1 ], [ -3, -2 ], [ -4, -7 ], [ -2, -3 ], [ -2, -5 ], [ -2, -4 ], [ -1, -5 ], [ -1, -4 ], [ -2, -7 ], [ -1, -12 ], [ -2, -11 ], [ 0, -21 ], [ 3, -15 ], [ 6, -14 ], [ 4, -13 ], [ 0, -6 ], [ 2, -8 ], [ 0, -5 ], [ 0, -37 ], [ 0, -11 ], [ -2, -18 ], [ 0, -10 ], [ -2, -17 ], [ -2, -12 ], [ -2, -11 ], [ -2, -9 ], [ -9, -20 ], [ -2, -11 ], [ -4, -17 ], [ -4, -18 ], [ -3, -14 ], [ -2, -14 ], [ -2, -13 ], [ 0, -12 ], [ 0, -17 ], [ 0, -6 ], [ 2, -9 ], [ 0, -12 ], [ 3, -15 ] ], [ [ 8271, 4792 ], [ 0, -7 ] ], [ [ 8271, 4785 ], [ 0, 4 ] ], [ [ 8036, 4857 ], [ -1, 4 ], [ -8, 37 ], [ -2, 11 ], [ -2, 8 ], [ -4, 9 ], [ -2, 7 ], [ -8, 15 ], [ -9, 16 ], [ -2, 5 ], [ 0, 4 ], [ -1, 6 ], [ -1, 9 ], [ 0, 27 ], [ -2, 5 ], [ 0, 6 ], [ -1, 3 ], [ -2, 3 ], [ -4, 10 ], [ -2, 6 ], [ -8, 27 ], [ -2, 4 ], [ -1, 10 ], [ -2, 16 ], [ 0, 19 ], [ 0, 15 ], [ 0, 19 ], [ -2, 19 ], [ -4, 11 ], [ -6, 23 ], [ -5, 24 ], [ -2, 5 ], [ -2, 5 ], [ -2, 3 ], [ -2, 3 ], [ -6, 5 ], [ -4, 1 ], [ -5, 0 ], [ -2, -1 ], [ -2, -1 ], [ -2, -1 ], [ -1, -4 ], [ -3, -4 ], [ 0, -2 ], [ 0, -4 ], [ 0, -13 ], [ 0, -7 ], [ 2, -9 ], [ 2, -17 ], [ 6, -39 ], [ 0, -7 ], [ 0, -6 ], [ 2, -7 ], [ -2, -8 ], [ 0, -6 ], [ -2, -3 ], [ 0, -3 ], [ -5, -10 ], [ -4, -7 ], [ -3, -4 ], [ -5, -5 ], [ -4, -1 ], [ -4, 0 ], [ -2, 1 ], [ -4, 5 ], [ -3, 2 ], [ -2, 0 ], [ -2, -1 ], [ -2, -3 ], [ -3, -6 ], [ -3, -3 ], [ -2, -2 ], [ -7, -5 ], [ -4, -4 ], [ -2, -3 ], [ -2, -2 ], [ -2, -6 ], [ -1, -5 ], [ -6, -20 ], [ -2, -6 ], [ -12, -18 ], [ -3, -6 ], [ -4, -7 ], [ -6, -19 ], [ -1, -4 ], [ -3, -5 ], [ -1, -1 ], [ -1, -2 ], [ -3, -1 ], [ -2, 0 ], [ -2, 1 ], [ -2, 1 ], [ -2, 1 ], [ -3, 6 ], [ -3, 6 ], [ -5, 10 ], [ -4, 10 ], [ -2, 5 ], [ -2, 5 ], [ 0, 6 ], [ -2, 5 ], [ 0, 8 ], [ 0, 18 ], [ 0, 9 ], [ 2, 10 ], [ 0, 9 ], [ 6, 35 ], [ 3, 19 ], [ 2, 10 ], [ 1, 7 ], [ 0, 12 ], [ -1, 7 ], [ -2, 7 ], [ -1, 5 ], [ -2, 7 ], [ -2, 5 ], [ -8, 10 ], [ -7, 7 ], [ -4, 2 ], [ -2, 0 ], [ -4, 1 ], [ -5, -1 ], [ -12, -3 ], [ -9, -1 ], [ -2, -1 ], [ -4, -1 ], [ -7, -6 ], [ -10, -7 ], [ -4, -3 ], [ -4, -4 ], [ -5, -6 ], [ -8, -10 ], [ -10, -10 ], [ -15, -20 ], [ -15, -20 ], [ -6, -8 ], [ -5, -5 ], [ -4, -8 ], [ -2, -8 ], [ -6, -12 ], [ 0, -5 ], [ -4, -3 ], [ -1, -2 ], [ -8, -2 ], [ -19, 2 ], [ -7, 0 ], [ -12, -1 ], [ -6, 0 ], [ -1, 1 ], [ -4, 3 ], [ -2, 4 ], [ -2, 4 ], [ -2, 4 ], [ 0, 5 ], [ 0, 4 ], [ 0, 8 ], [ 0, 10 ], [ 2, 9 ], [ 2, 29 ], [ 2, 18 ], [ 0, 13 ], [ 0, 6 ], [ 0, 2 ], [ -4, 2 ], [ -2, 0 ], [ -6, -2 ], [ -7, -6 ], [ -4, -2 ], [ -17, -6 ], [ -8, 0 ], [ -5, 5 ], [ -2, 2 ], [ -4, 3 ], [ -2, 5 ], [ -2, 4 ], [ -4, 10 ], [ -11, 26 ], [ -12, 24 ], [ -11, 26 ], [ -4, 8 ], [ -2, 2 ] ], [ [ 7472, 5287 ], [ 4, 17 ], [ 2, 9 ], [ 11, 31 ], [ 4, 11 ], [ 4, 15 ], [ 4, 15 ], [ 0, 4 ], [ 0, 7 ], [ 2, 6 ], [ 0, 12 ], [ -2, 15 ], [ 0, 8 ], [ 0, 6 ], [ 0, 4 ], [ 2, 5 ], [ 0, 4 ], [ 2, 6 ], [ 2, 4 ], [ 5, 13 ], [ 8, 16 ], [ 11, 19 ], [ 4, 7 ], [ 2, 6 ], [ 4, 11 ], [ 2, 9 ], [ 2, 5 ], [ 1, 4 ], [ 0, 11 ], [ 0, 17 ], [ -3, 18 ], [ -6, 21 ], [ -6, 9 ], [ -4, 9 ], [ -15, 26 ], [ -5, 11 ], [ -4, 13 ], [ -2, 4 ], [ -2, 6 ], [ 0, 3 ], [ 0, 9 ], [ 0, 4 ], [ 0, 7 ], [ 2, 16 ], [ 2, 9 ], [ 0, 10 ], [ 2, 25 ], [ 2, 9 ], [ 1, 9 ], [ 0, 8 ], [ 2, 6 ], [ 4, 14 ], [ 2, 11 ], [ 4, 12 ], [ 6, 13 ], [ 4, 13 ], [ 9, 22 ], [ 11, 21 ], [ 19, 33 ], [ 4, 9 ], [ 4, 7 ], [ 3, 10 ], [ 4, 10 ], [ 4, 10 ], [ 4, 21 ], [ 2, 10 ], [ 0, 12 ], [ 0, 11 ], [ 0, 17 ], [ 0, 37 ], [ -2, 42 ], [ 0, 15 ], [ 0, 8 ], [ 2, 11 ], [ 2, 11 ], [ 2, 10 ], [ 7, 23 ], [ 2, 8 ], [ 2, 11 ], [ 2, 8 ], [ 0, 6 ], [ 2, 8 ], [ 2, 32 ], [ 2, 17 ], [ 1, 10 ], [ 2, 7 ], [ 1, 3 ], [ 4, 13 ], [ 5, 10 ], [ 11, 22 ], [ 22, 42 ], [ 7, 15 ], [ 7, 9 ], [ 4, 6 ], [ 8, 11 ], [ 5, 7 ], [ 4, 7 ], [ 12, 20 ], [ 5, 6 ], [ 4, 6 ], [ 4, 4 ], [ 6, 4 ], [ 6, 4 ], [ 11, 5 ], [ 5, 5 ], [ 6, 4 ], [ 6, 7 ], [ 4, 7 ], [ 9, 17 ], [ 13, 26 ], [ 10, 17 ], [ 7, 13 ], [ 2, 2 ], [ 4, 5 ], [ 2, 2 ], [ 2, 1 ], [ 4, 1 ], [ 5, -1 ], [ 4, -1 ], [ 10, -7 ], [ 6, -2 ], [ 7, -2 ], [ 2, -1 ], [ 4, 0 ], [ 10, 2 ], [ 3, 2 ], [ 2, 5 ], [ 2, 3 ], [ 2, 8 ], [ 2, 3 ], [ 3, 12 ], [ 2, 16 ], [ 2, 33 ], [ 2, 48 ], [ 2, 38 ] ], [ [ 7890, 6793 ], [ 0, -1 ], [ 2, -1 ], [ 2, 0 ], [ 5, 3 ], [ 10, 9 ], [ 4, 5 ], [ 13, 20 ], [ 4, 6 ], [ 7, 8 ], [ 7, 5 ], [ 9, 7 ], [ 10, 6 ], [ 11, 4 ], [ 5, 2 ], [ 6, 2 ], [ 13, 3 ], [ 17, 0 ], [ 15, -1 ], [ 27, -6 ], [ 6, 0 ], [ 7, 0 ], [ 8, 1 ], [ 6, 1 ], [ 8, 2 ], [ 12, 6 ], [ 7, 2 ], [ 9, 2 ], [ 6, -1 ], [ 1, -1 ], [ 4, -1 ], [ 4, -3 ], [ 9, -8 ], [ 4, -3 ], [ 4, -5 ], [ 6, -1 ], [ 3, -1 ], [ 6, 0 ], [ 4, 1 ], [ 2, 1 ], [ 6, 2 ], [ 7, 6 ], [ 8, 6 ], [ 8, 6 ], [ 9, 9 ], [ 15, 20 ], [ 11, 19 ], [ 8, 12 ], [ 7, 16 ], [ 4, 9 ], [ 4, 10 ], [ 4, 8 ], [ 2, 10 ], [ 2, 7 ], [ 3, 9 ], [ 4, 38 ], [ 3, 7 ], [ 1, 4 ], [ 0, 5 ], [ 2, 1 ], [ 2, 3 ], [ 6, 1 ], [ 1, -1 ], [ 4, 0 ], [ 4, -2 ], [ 4, -3 ], [ 5, -5 ], [ 10, -16 ], [ 2, -4 ], [ 4, -8 ], [ 2, -4 ], [ 3, -9 ], [ 2, -8 ], [ 2, -9 ], [ 0, -2 ], [ 0, -1 ], [ 6, -2 ], [ 6, -4 ], [ 3, -2 ], [ 7, -5 ], [ 1, -5 ], [ 2, -8 ], [ 0, -9 ], [ -2, -10 ], [ -11, -45 ], [ -4, -18 ], [ -4, -12 ], [ 0, -8 ], [ -1, -10 ], [ 0, -20 ], [ 1, -19 ], [ 4, -19 ], [ 5, -9 ], [ 4, -11 ], [ 4, -8 ], [ 11, -23 ], [ 5, -12 ], [ 1, -6 ], [ 3, -5 ], [ 1, -6 ], [ 2, -7 ], [ 0, -7 ], [ 2, -10 ], [ 0, -13 ], [ -2, -14 ], [ 0, -13 ], [ -2, -10 ], [ -1, -10 ], [ -4, -15 ], [ -3, -2 ], [ -1, -5 ], [ -4, -5 ], [ -6, -5 ], [ -2, -3 ], [ -6, -2 ], [ -5, -2 ], [ -10, -4 ], [ -9, -5 ], [ -6, -6 ], [ -2, -5 ], [ -4, -6 ], [ -2, -5 ], [ -7, -18 ], [ -8, -18 ], [ -4, -5 ], [ -7, -6 ], [ -2, -2 ], [ -6, -4 ], [ -9, -4 ], [ -27, -14 ], [ -30, -13 ], [ -15, -7 ], [ -29, -15 ], [ -4, -5 ], [ -5, -3 ], [ -4, -3 ], [ -2, -6 ], [ -2, -5 ], [ -2, -6 ], [ -2, -5 ], [ 0, -7 ], [ -2, -8 ], [ 2, -7 ], [ 2, -12 ], [ 2, -7 ], [ 2, -7 ], [ 2, -8 ], [ 2, -8 ], [ 4, -7 ], [ 2, -5 ], [ 5, -9 ], [ 4, -9 ], [ 19, -28 ], [ 9, -18 ], [ 4, -6 ], [ 10, -26 ], [ 4, -9 ], [ 5, -9 ], [ 2, -3 ], [ 8, -9 ], [ 7, -4 ], [ 3, -2 ], [ 1, -2 ], [ 4, -1 ], [ 6, 0 ], [ 8, 5 ], [ 9, 5 ], [ 9, 4 ], [ 4, 0 ], [ 4, -1 ], [ 2, -2 ], [ 6, -2 ], [ 4, -2 ], [ 3, -4 ], [ 4, -5 ], [ 4, -4 ], [ 3, -6 ], [ 5, -6 ], [ 9, -17 ], [ 3, -11 ], [ 4, -9 ], [ 8, -21 ], [ 2, -12 ], [ 5, -10 ], [ 10, -22 ], [ 4, -10 ], [ 4, -11 ], [ 5, -20 ], [ 3, -7 ], [ 1, -6 ], [ 4, -17 ], [ 0, -9 ], [ 11, -37 ], [ 2, -11 ], [ 2, -13 ], [ 4, -23 ], [ 0, -10 ], [ 7, -33 ], [ 0, -5 ], [ 3, -7 ], [ 3, -5 ], [ 2, -6 ], [ 4, -6 ], [ 5, -5 ], [ 2, -5 ], [ 10, -10 ], [ 17, -15 ], [ 10, -9 ], [ 5, -8 ], [ 4, -4 ], [ 2, -5 ], [ 4, -4 ], [ 3, -8 ], [ 1, -7 ], [ 1, -5 ], [ 0, -14 ], [ 0, -2 ], [ -1, -2 ], [ -1, -2 ] ], [ [ 7472, 5287 ], [ -2, -2 ], [ -5, -8 ], [ -4, -8 ], [ -4, -10 ], [ -4, -9 ], [ -3, -7 ], [ -11, -36 ], [ -4, -12 ], [ -4, -6 ], [ -2, -3 ], [ -4, -4 ], [ -2, -2 ], [ -3, -1 ], [ -4, 0 ], [ -4, 2 ], [ -2, 5 ], [ -4, 2 ], [ -6, 11 ], [ -6, 7 ], [ -3, 4 ], [ -6, 5 ], [ -7, 3 ], [ -14, 6 ], [ -9, 2 ], [ -6, 0 ], [ -2, -1 ], [ -2, -1 ], [ -2, -3 ], [ -3, -2 ], [ -4, -4 ], [ -8, -14 ], [ -3, -6 ], [ -12, -11 ], [ -2, -2 ], [ -4, -2 ], [ -11, -1 ], [ -6, -1 ], [ -4, -1 ], [ -11, -8 ], [ -6, -2 ], [ -4, -3 ], [ -11, -10 ], [ -4, -4 ], [ -4, -2 ], [ -3, 0 ], [ -2, 1 ], [ -4, 1 ], [ -2, 2 ], [ -4, 4 ], [ -2, 3 ], [ -5, 7 ], [ -10, 21 ], [ -4, 7 ], [ -5, 7 ], [ -6, 7 ], [ -3, 5 ], [ -14, 11 ], [ -2, 3 ], [ -3, 6 ], [ -3, 4 ], [ -1, 4 ], [ -4, 12 ], [ 0, 4 ], [ -4, 8 ], [ -2, 5 ], [ -8, 14 ], [ -9, 13 ], [ -4, 4 ], [ -3, 6 ], [ -8, 17 ], [ -4, 6 ], [ -6, 8 ], [ -6, 8 ], [ -5, 4 ], [ -4, 4 ], [ -9, 5 ], [ -6, 4 ], [ -12, 3 ], [ -5, 1 ], [ -14, 7 ], [ -7, 3 ], [ -9, 6 ], [ -8, 5 ], [ -7, 5 ], [ -5, 3 ], [ -7, 7 ], [ -4, 6 ], [ -8, 13 ], [ -3, 4 ], [ -4, 4 ], [ -2, 6 ], [ -4, 10 ], [ -4, 7 ], [ -2, 4 ], [ -2, 3 ], [ -3, 3 ], [ -2, 1 ], [ -4, 0 ], [ -2, -1 ], [ -9, -6 ], [ -2, -1 ], [ -4, 0 ], [ -4, 1 ], [ -4, 0 ], [ -2, 2 ], [ -3, 1 ], [ -8, 7 ], [ -3, 7 ], [ -10, 13 ], [ -2, 5 ], [ -2, 1 ], [ 0, 1 ], [ -4, -1 ], [ -6, -4 ], [ -3, -2 ], [ 0, -2 ], [ -2, -1 ], [ 0, -3 ], [ 2, -6 ], [ 0, -1 ], [ -2, -1 ], [ -6, -5 ], [ -2, -2 ], [ 0, -2 ], [ -1, -2 ], [ -1, -7 ], [ -2, 0 ] ], [ [ 7051, 6568 ], [ 0, -1 ], [ 4, 0 ], [ 5, 6 ], [ 4, 4 ], [ 2, 5 ], [ 2, 4 ], [ 15, 29 ], [ 2, 7 ], [ 4, 6 ], [ 5, 8 ], [ 7, 9 ], [ 5, 7 ], [ 4, 4 ], [ 5, 3 ], [ 5, 5 ], [ 5, 2 ], [ 6, 2 ], [ 8, 2 ], [ 16, 3 ], [ 10, 2 ], [ 9, 1 ], [ 4, 3 ], [ 4, 3 ], [ 2, 3 ], [ 5, 5 ], [ 4, 5 ], [ 3, 4 ], [ 5, 14 ], [ 7, 8 ], [ 2, 2 ], [ 2, 1 ], [ 3, 1 ], [ 3, 0 ], [ 2, -2 ], [ 4, -4 ], [ 2, -3 ], [ 3, -3 ], [ 14, -29 ], [ 6, -9 ], [ 5, -9 ], [ 2, -1 ], [ 4, -1 ], [ 2, -1 ], [ 2, 0 ], [ 1, 1 ], [ 3, 0 ], [ 5, 4 ], [ 0, 2 ], [ 2, 3 ], [ 2, 3 ], [ 4, 12 ], [ 0, 5 ], [ 2, 3 ], [ 0, 10 ], [ -2, 9 ], [ -2, 8 ], [ -2, 21 ], [ -2, 11 ], [ -4, 20 ], [ 0, 11 ], [ 0, 20 ], [ 0, 10 ], [ 4, 27 ], [ 0, 11 ], [ 2, 12 ], [ 0, 30 ], [ -2, 7 ], [ 0, 9 ], [ -2, 7 ], [ -2, 5 ], [ -6, 21 ], [ -1, 6 ], [ -6, 11 ], [ -2, 4 ], [ -2, 6 ], [ -5, 7 ], [ -4, 4 ], [ -6, 7 ], [ -31, 32 ], [ -5, 3 ], [ -11, 9 ], [ -6, 6 ], [ -4, 4 ], [ -4, 7 ], [ -2, 5 ], [ -4, 7 ], [ -5, 12 ], [ -2, 7 ], [ -2, 9 ], [ -2, 9 ], [ -4, 29 ], [ -2, 13 ], [ -2, 9 ], [ -9, 31 ], [ -4, 18 ], [ -2, 13 ], [ -2, 14 ], [ -5, 31 ], [ -4, 17 ], [ -2, 10 ], [ 0, 7 ], [ -2, 7 ], [ -2, 8 ], [ -4, 7 ], [ -4, 10 ], [ -3, 7 ], [ -4, 6 ], [ -13, 21 ], [ -21, 28 ], [ -4, 5 ], [ -2, 8 ], [ -4, 8 ], [ -2, 5 ], [ -1, 7 ], [ -2, 2 ], [ 0, 22 ], [ 2, 7 ], [ 1, 15 ], [ 4, 10 ], [ 2, 12 ], [ 4, 12 ], [ 4, 11 ], [ 11, 22 ], [ 4, 9 ], [ 5, 8 ], [ 7, 8 ], [ 7, 9 ], [ 4, 3 ], [ 7, 3 ], [ 0, -1 ], [ 6, -10 ], [ 9, -10 ], [ 10, -12 ], [ 11, -12 ], [ 27, -28 ], [ 11, -12 ], [ 10, -9 ], [ 5, -5 ], [ 4, -2 ], [ 6, -2 ], [ 4, -1 ], [ 2, 0 ], [ 7, -1 ], [ 12, 2 ], [ 6, 0 ], [ 5, -1 ], [ 6, -2 ], [ 5, -4 ], [ 16, -7 ], [ 7, -5 ], [ 6, -4 ], [ 30, -26 ], [ 8, -5 ], [ 8, -5 ], [ 11, -7 ], [ 13, -4 ], [ 8, -2 ], [ 13, -4 ], [ 6, -1 ], [ 6, -2 ], [ 9, -6 ], [ 6, -4 ], [ 4, -7 ], [ 7, -11 ], [ 4, -4 ], [ 26, -28 ], [ 5, -3 ], [ 5, -6 ], [ 7, -4 ], [ 4, -3 ], [ 10, -2 ], [ 5, 0 ], [ 7, 1 ], [ 22, 5 ], [ 4, 1 ], [ 4, 0 ], [ 3, -1 ], [ 4, -1 ], [ 2, -3 ], [ 6, -4 ], [ 1, -5 ], [ 4, -4 ], [ 2, -8 ], [ 1, -4 ], [ 5, -34 ], [ 4, -10 ], [ 2, -7 ], [ 3, -14 ], [ 5, -13 ], [ 5, -16 ], [ 6, -13 ], [ 7, -13 ], [ 2, -8 ], [ 6, -9 ], [ 7, -10 ], [ 8, -14 ], [ 8, -12 ], [ 7, -10 ], [ 8, -8 ], [ 13, -15 ], [ 8, -7 ], [ 6, -4 ], [ 5, -3 ], [ 6, -5 ], [ 5, -1 ], [ 6, -2 ], [ 6, -1 ], [ 4, 0 ], [ 19, 3 ], [ 7, 1 ], [ 19, 9 ], [ 8, 1 ], [ 6, 0 ], [ 4, -1 ], [ 3, -1 ], [ 2, -1 ], [ 0, -2 ], [ 2, -4 ], [ 0, -4 ], [ 2, -22 ], [ 2, -6 ], [ 2, -20 ], [ 2, -7 ], [ 0, -24 ], [ -6, -68 ], [ 0, -9 ], [ 2, -9 ], [ 0, -12 ], [ 1, -7 ], [ 3, -10 ], [ 1, -3 ], [ 2, -3 ], [ 1, -4 ], [ 3, -3 ], [ 4, 0 ], [ 4, 1 ], [ 4, 5 ], [ 7, 14 ], [ 6, 10 ], [ 3, 1 ], [ 4, 3 ], [ 4, 3 ], [ 4, 2 ], [ 4, 0 ], [ 2, 1 ], [ 9, 0 ], [ 6, -2 ], [ 4, -1 ], [ 3, -3 ], [ 4, -2 ], [ 4, -4 ], [ 6, -6 ], [ 6, -5 ], [ 4, -5 ], [ 3, -3 ], [ 2, -6 ], [ 4, -5 ], [ 3, -8 ], [ 3, -8 ], [ 3, -8 ], [ 2, -6 ], [ 0, -9 ], [ 2, -17 ], [ 0, -3 ] ], [ [ 6867, 5172 ], [ 2, 37 ] ], [ [ 8959, 4999 ], [ 0, -8 ], [ -8, -44 ], [ -1, -15 ], [ -1, -12 ], [ -2, -19 ], [ 0, -8 ], [ -4, -30 ], [ 0, -5 ], [ 2, -6 ], [ 0, -3 ], [ 4, -8 ], [ 2, -3 ], [ 6, -6 ], [ 2, -2 ], [ 7, -9 ], [ 3, -4 ], [ 3, -4 ], [ 4, -2 ], [ 2, 0 ], [ 6, -1 ], [ 1, -1 ], [ 3, -2 ], [ 1, -4 ], [ 4, -10 ], [ 4, -18 ] ], [ [ 8997, 4775 ], [ -2, -1 ], [ -4, -5 ], [ -7, -14 ], [ -8, -12 ], [ -8, -15 ], [ -4, -6 ], [ -5, -8 ], [ -6, -6 ], [ -2, -5 ], [ -2, -5 ], [ 0, -6 ], [ 1, -4 ], [ 1, -4 ], [ 2, -3 ], [ 4, -5 ], [ 4, -1 ], [ 8, -3 ], [ 5, -2 ], [ 7, -8 ], [ 3, -6 ], [ 1, -4 ], [ 0, -7 ], [ 2, -13 ], [ 2, -8 ], [ 0, -6 ], [ 2, -4 ], [ 2, -2 ], [ 2, -6 ], [ 9, -14 ], [ 8, -14 ], [ 9, -13 ], [ 2, -2 ], [ 2, 0 ], [ 2, 0 ], [ 0, 1 ] ], [ [ 9027, 4564 ], [ 0, -1 ], [ 2, -2 ], [ 0, -6 ], [ -2, -8 ], [ 0, -34 ], [ -2, -22 ], [ -2, -20 ], [ -1, -21 ], [ -3, -19 ], [ -5, -37 ], [ 0, -11 ], [ 0, -16 ], [ 0, -6 ], [ 9, -44 ], [ 2, -11 ], [ 2, -22 ], [ 0, -10 ], [ 2, -9 ], [ 2, -9 ], [ 10, -32 ], [ 5, -22 ], [ 2, -9 ], [ 2, -8 ], [ 9, -21 ], [ 10, -32 ], [ 9, -25 ], [ 10, -23 ], [ 7, -21 ], [ 3, -7 ], [ 1, -6 ], [ 0, -4 ], [ 0, -5 ], [ 0, -6 ], [ 0, -15 ], [ -2, -32 ], [ 0, -27 ], [ 1, -6 ], [ 0, -7 ], [ 7, -23 ], [ 4, -6 ], [ 3, -5 ], [ 6, -12 ], [ 12, -17 ], [ 11, -17 ], [ 2, -7 ], [ 4, -4 ], [ 2, -6 ], [ 2, -5 ], [ 4, -17 ], [ 1, -10 ], [ 2, -12 ], [ 6, -42 ], [ 2, -16 ], [ 0, -10 ] ], [ [ 9166, 3739 ], [ 0, 1 ], [ -4, 0 ], [ -6, -1 ], [ -4, 0 ], [ -7, -4 ], [ -19, -10 ], [ -8, -4 ], [ -6, -1 ], [ -5, -1 ], [ -6, 0 ], [ -6, 1 ], [ -3, 0 ], [ -12, 3 ], [ -21, 10 ], [ -14, 6 ], [ -5, 2 ], [ -5, 5 ], [ -6, 4 ], [ -6, 7 ], [ -7, 9 ], [ -8, 12 ], [ -15, 22 ], [ -6, 8 ], [ -2, 3 ], [ -7, 7 ], [ -2, 1 ], [ -4, 2 ], [ -6, 2 ], [ -4, 2 ], [ -13, 2 ], [ -7, 2 ], [ -6, 1 ], [ -12, 8 ], [ -5, 2 ], [ -6, 2 ], [ -5, 2 ], [ -10, 1 ], [ -15, 0 ], [ -17, -1 ], [ -6, -2 ], [ -5, -2 ], [ -19, -4 ], [ -8, -3 ], [ -8, -3 ], [ -23, -10 ], [ -30, -14 ], [ -10, -4 ], [ -5, -2 ], [ -10, 0 ], [ -4, 1 ], [ -3, 2 ], [ -4, 4 ], [ -2, 2 ], [ 0, 2 ], [ -2, 6 ], [ -4, 6 ], [ -1, 9 ], [ -12, 40 ], [ -6, 18 ], [ -7, 17 ], [ -6, 11 ], [ -3, 7 ], [ -1, 1 ], [ 0, -1 ] ], [ [ 8444, 4768 ], [ 0, 3 ], [ 1, 3 ], [ 1, 6 ], [ 4, 5 ], [ 7, 6 ], [ 3, 2 ], [ 19, 10 ], [ 4, 2 ], [ 5, 3 ], [ 4, 0 ], [ 10, -3 ], [ 5, 0 ], [ 4, 2 ], [ 7, 2 ], [ 3, 2 ], [ 3, 1 ], [ 12, 11 ], [ 5, 5 ], [ 4, 2 ], [ 11, 6 ], [ 4, 3 ], [ 10, 9 ], [ 22, 29 ], [ 5, 5 ], [ 3, 6 ], [ 6, 3 ], [ 5, 6 ], [ 15, 11 ], [ 9, 8 ], [ 12, 13 ], [ 6, 5 ], [ 4, 7 ], [ 6, 11 ], [ 3, 8 ], [ 3, 3 ], [ 1, 8 ], [ 4, 8 ], [ 0, 8 ], [ 4, 16 ], [ 4, 9 ], [ 2, 7 ], [ 3, 8 ], [ 2, 4 ], [ 2, 6 ], [ 6, 5 ], [ 3, 5 ], [ 3, 2 ], [ 3, 0 ], [ 2, -1 ], [ 2, -2 ], [ 2, -4 ], [ 4, -3 ], [ 13, -19 ], [ 4, -7 ], [ 9, -7 ], [ 3, -5 ], [ 7, -3 ], [ 4, -1 ], [ 4, -2 ], [ 4, 0 ], [ 5, -2 ], [ 10, 0 ], [ 4, 2 ], [ 3, 1 ], [ 4, 2 ], [ 4, 3 ], [ 1, 5 ], [ 6, 6 ], [ 4, 7 ], [ 2, 8 ], [ 9, 22 ], [ 2, 9 ], [ 4, 8 ], [ 4, 6 ], [ 5, 6 ], [ 2, 2 ], [ 3, 1 ], [ 1, 1 ], [ 2, -2 ] ], [ [ 8839, 5080 ], [ 4, -11 ], [ 6, -11 ], [ 9, -26 ], [ 4, -14 ], [ 2, -6 ], [ 5, -13 ], [ 5, -11 ], [ 1, -2 ], [ 2, 0 ], [ 0, 14 ], [ -2, 12 ], [ -4, 21 ], [ 0, 30 ], [ 2, 8 ], [ 2, 7 ], [ 2, 4 ], [ 2, 5 ], [ 6, 8 ], [ 5, 4 ], [ 15, 8 ], [ 12, 9 ], [ 2, 0 ], [ 4, -1 ], [ 5, -3 ], [ 4, -4 ], [ 2, -2 ], [ 0, -4 ], [ 2, -3 ], [ 0, -3 ], [ 0, -7 ], [ 2, -6 ], [ 0, -4 ], [ 2, -4 ], [ 2, -4 ], [ 1, -3 ], [ 0, -6 ], [ -1, -5 ], [ 0, -7 ], [ -2, -11 ], [ -4, -17 ], [ 0, -4 ], [ 0, -8 ], [ 2, -3 ], [ 2, -4 ], [ 3, -3 ], [ 3, -1 ], [ 4, 0 ], [ 7, 0 ], [ 2, 0 ] ], [ [ 9071, 5653 ], [ 0, -2 ], [ 0, -3 ], [ -2, -3 ], [ -2, -1 ], [ 0, -3 ], [ -2, -3 ], [ -6, -4 ], [ -4, -2 ], [ -5, -2 ], [ -14, -6 ], [ -9, -3 ], [ -6, -4 ], [ -4, -3 ], [ -5, -3 ], [ -4, -7 ], [ -4, -4 ], [ -7, -15 ], [ -2, -10 ], [ -2, -9 ], [ -4, -21 ], [ -2, -8 ], [ -2, -5 ], [ -2, -6 ], [ -5, -9 ], [ -13, -19 ], [ -4, -4 ], [ -2, -6 ], [ -4, -4 ], [ -4, -10 ], [ 0, -8 ], [ -4, -9 ], [ -4, -24 ], [ -1, -11 ], [ -2, -16 ], [ -2, -10 ], [ 0, -8 ], [ 0, -5 ], [ 0, -17 ], [ 0, -10 ], [ -2, -9 ], [ -5, -9 ], [ -6, -4 ], [ -16, -13 ], [ -5, -4 ], [ -6, -1 ], [ -13, 0 ], [ -10, 1 ], [ -5, 0 ], [ -2, 0 ], [ -2, -1 ], [ -2, -1 ], [ 0, -3 ], [ -2, -4 ], [ -6, -21 ], [ -4, -10 ], [ -5, -7 ], [ -8, -17 ], [ -6, -12 ], [ -9, -15 ], [ -6, -16 ], [ 0, -4 ], [ -1, -7 ], [ 0, -20 ], [ 1, -8 ], [ 0, -10 ], [ 2, -7 ], [ 6, -27 ], [ 4, -18 ], [ 3, -9 ], [ 4, -15 ], [ 2, -4 ], [ 0, -1 ] ], [ [ 8279, 4737 ], [ 0, 5 ] ], [ [ 8277, 4760 ], [ -6, 32 ] ], [ [ 8478, 5751 ], [ 8, -8 ], [ 25, -32 ], [ 9, -10 ], [ 10, -11 ], [ 9, -6 ], [ 8, -3 ], [ 5, 0 ], [ 6, 1 ], [ 27, 4 ], [ 9, 3 ], [ 6, 3 ], [ 6, 2 ], [ 3, 3 ], [ 4, 3 ], [ 3, 4 ], [ 5, 7 ], [ 7, 9 ], [ 7, 11 ], [ 19, 30 ], [ 5, 9 ], [ 6, 6 ], [ 5, 7 ], [ 6, 7 ], [ 8, 6 ], [ 7, 5 ], [ 16, 10 ], [ 12, 9 ], [ 6, 3 ], [ 4, 1 ], [ 6, 2 ], [ 7, 0 ], [ 19, -5 ], [ 8, -2 ], [ 7, -2 ], [ 8, -1 ], [ 6, 0 ], [ 3, 1 ], [ 2, 4 ], [ 2, 2 ], [ 1, 2 ], [ 1, 6 ], [ 2, 11 ], [ 1, 6 ], [ 0, 18 ], [ -1, 7 ], [ -2, 9 ], [ 0, 4 ], [ -1, 6 ], [ -3, 4 ], [ 0, 4 ], [ -2, 2 ], [ -3, 4 ], [ -6, 5 ], [ -4, 2 ], [ -4, 2 ], [ -3, 0 ], [ -8, 1 ], [ -4, 2 ], [ -4, 2 ], [ -1, 2 ], [ -2, 1 ], [ -2, 3 ], [ 0, 4 ], [ -2, 4 ], [ -2, 5 ], [ 0, 3 ], [ 0, 8 ], [ 0, 11 ], [ 0, 6 ], [ 2, 6 ], [ 2, 5 ], [ 0, 3 ], [ 4, 6 ], [ 3, 4 ], [ 6, 8 ], [ 4, 5 ], [ 11, 8 ], [ 10, 5 ], [ 5, 1 ], [ 3, -1 ], [ 1, 0 ], [ 6, -3 ], [ 2, -3 ], [ 2, -1 ], [ 0, -1 ], [ 4, -2 ], [ 4, -5 ], [ 5, -8 ], [ 25, -34 ], [ 5, -9 ], [ 4, -9 ], [ 4, -10 ], [ 2, -8 ], [ 4, -19 ], [ 7, -23 ], [ 2, -10 ], [ 0, -8 ], [ 2, -5 ], [ 2, -22 ], [ 0, -6 ], [ 2, -10 ], [ 2, -9 ], [ 2, -7 ], [ 2, -4 ], [ 3, -6 ], [ 2, -4 ], [ 4, -8 ], [ 4, -9 ], [ 7, -8 ], [ 4, -3 ], [ 2, -2 ], [ 18, -11 ], [ 26, -20 ], [ 4, -3 ], [ 4, -1 ], [ 1, 0 ], [ 4, 1 ], [ 4, 2 ], [ 2, 2 ], [ 2, 2 ], [ 3, 3 ], [ 8, 15 ], [ 2, 2 ], [ 4, 4 ], [ 5, 4 ], [ 4, 1 ], [ 3, 1 ], [ 5, 0 ], [ 6, -2 ], [ 9, -6 ], [ 4, -2 ], [ 5, -6 ], [ 4, -5 ], [ 2, -9 ], [ 4, -7 ], [ 2, -5 ], [ 4, -10 ], [ 3, -14 ], [ 6, -24 ], [ 4, -11 ], [ 2, -6 ], [ 2, -3 ], [ 2, -1 ], [ 0, 1 ] ], [ [ 9325, 4804 ], [ 2, 0 ], [ 0, 1 ], [ 2, 3 ], [ 2, 3 ], [ 2, 1 ], [ 3, -1 ], [ 0, -1 ], [ 1, -10 ], [ 0, -5 ] ], [ [ 9337, 4795 ], [ -1, -2 ], [ -1, -4 ], [ 0, -18 ], [ 3, -19 ], [ 6, -18 ], [ 2, -6 ], [ 10, -18 ], [ 5, -16 ], [ 8, -16 ], [ 4, -16 ], [ 5, -14 ], [ 4, -18 ], [ 4, -22 ], [ 4, -29 ], [ 1, -6 ], [ 2, -3 ], [ 1, -4 ], [ 4, -2 ], [ 5, 3 ], [ 9, 6 ], [ 2, 2 ], [ 8, 4 ], [ 7, 4 ], [ 3, 0 ], [ 4, 0 ], [ 5, -1 ], [ 4, -3 ], [ 2, -5 ], [ 1, -10 ], [ 2, -14 ], [ 1, -8 ], [ 1, -10 ], [ 3, -9 ], [ 1, -8 ], [ 2, -5 ], [ 9, -19 ], [ 2, -7 ], [ 2, -7 ], [ 4, -14 ], [ 6, -20 ], [ 2, -8 ], [ 1, -3 ], [ 0, -12 ], [ -1, -4 ], [ -2, -6 ], [ -4, -10 ], [ -3, -6 ], [ -10, -10 ], [ -4, -1 ], [ -4, -2 ], [ -5, -3 ], [ -12, -3 ], [ -6, -1 ], [ -7, -3 ], [ -8, -6 ], [ -8, -4 ], [ -7, -6 ], [ -6, -8 ], [ -5, -5 ], [ -6, -13 ], [ -2, -5 ], [ -2, -9 ], [ -2, -7 ], [ -1, -9 ], [ 0, -15 ], [ 1, -10 ], [ 2, -12 ], [ 4, -13 ], [ 4, -11 ], [ 3, -10 ], [ 5, -9 ], [ 3, -5 ], [ 4, -6 ], [ 2, -2 ], [ 3, -1 ], [ 7, -4 ], [ 12, -4 ], [ 4, 0 ], [ 4, 1 ], [ 2, 3 ], [ 8, 4 ], [ 4, 2 ], [ 3, 1 ], [ 2, 0 ], [ 2, -1 ], [ 2, -1 ], [ 2, -3 ], [ 2, -5 ], [ 2, -5 ], [ 1, -7 ], [ 2, -7 ], [ 1, -6 ], [ 0, -56 ], [ 1, -9 ], [ 2, -20 ], [ 2, -11 ], [ 4, -19 ], [ 7, -32 ], [ 3, -9 ], [ 5, -24 ], [ 6, -16 ], [ 5, -21 ], [ 10, -50 ], [ 4, -24 ], [ 3, -17 ], [ 4, -36 ], [ 4, -22 ], [ 2, -14 ], [ 2, -6 ], [ 2, -6 ], [ 2, -3 ], [ 2, -3 ], [ 2, -3 ] ], [ [ 9542, 3772 ], [ -1, 0 ], [ -1, -3 ], [ -2, -11 ], [ -2, -20 ], [ 0, -21 ], [ 2, -37 ], [ 0, -23 ], [ -2, -7 ], [ 0, -4 ], [ -2, -6 ], [ -2, -4 ], [ -1, -6 ], [ -7, -18 ], [ -22, -43 ], [ -17, -29 ], [ -14, -27 ], [ -4, -5 ], [ -1, -7 ], [ -6, -16 ], [ -9, -23 ], [ -6, -14 ], [ -8, -23 ], [ -2, -7 ], [ -3, -7 ], [ -4, -8 ], [ -6, -7 ], [ -19, -30 ], [ -4, -4 ], [ -2, -1 ], [ -3, -3 ], [ -3, -3 ], [ -7, -2 ], [ -4, 0 ], [ -5, -1 ], [ -6, 1 ], [ -5, 0 ], [ -5, 0 ], [ -22, 8 ], [ -6, 0 ], [ 0, -1 ] ], [ [ 9331, 3360 ], [ 0, 1 ], [ -8, 5 ], [ -7, 5 ], [ -14, 11 ], [ -5, 6 ], [ -6, 5 ], [ -2, 5 ], [ -4, 4 ], [ 0, 3 ], [ -1, 5 ], [ 0, 2 ], [ -1, 6 ], [ 0, 42 ], [ -2, 7 ], [ 0, 7 ], [ -2, 9 ], [ -3, 8 ], [ -2, 8 ], [ -5, 12 ], [ -7, 19 ], [ -3, 8 ], [ -4, 6 ], [ -4, 6 ], [ -4, 3 ], [ -13, 16 ], [ -15, 12 ], [ -4, 3 ], [ -2, 5 ], [ -4, 4 ], [ -5, 15 ], [ -6, 11 ], [ -5, 15 ], [ -1, 7 ], [ -3, 15 ], [ -8, 45 ], [ -4, 11 ], [ 0, 8 ], [ -2, 7 ], [ -2, 4 ], [ -2, 4 ], [ -1, 3 ], [ -2, 1 ], [ -2, 0 ] ], [ [ 9027, 4564 ], [ 0, 2 ], [ 2, 5 ], [ 7, 12 ], [ 6, 16 ], [ 12, 21 ], [ 6, 12 ], [ 1, 6 ], [ 4, 5 ], [ 0, 5 ], [ 2, 5 ], [ 2, 10 ], [ 0, 10 ], [ -2, 5 ], [ 0, 6 ], [ -4, 24 ], [ -2, 4 ], [ 0, 10 ], [ 3, 3 ], [ 1, 1 ], [ 2, 2 ], [ 8, 0 ], [ 5, -3 ], [ 4, -3 ], [ 4, -1 ], [ 17, -17 ], [ 2, -2 ], [ 2, 0 ], [ 4, -1 ], [ 1, 0 ], [ 4, 1 ], [ 4, 4 ], [ 2, 4 ], [ 4, 4 ], [ 7, 20 ], [ 4, 8 ], [ 4, 7 ], [ 2, 3 ], [ 3, 5 ], [ 4, 3 ], [ 10, 8 ], [ 5, 2 ], [ 10, 1 ], [ 4, 0 ], [ 2, 0 ], [ 7, -2 ], [ 8, -2 ], [ 9, 0 ], [ 5, 1 ], [ 3, 1 ], [ 4, 2 ], [ 2, 1 ], [ 5, 5 ], [ 2, 3 ], [ 3, 4 ], [ 3, 13 ], [ 2, 6 ], [ 2, 8 ], [ 2, -3 ], [ 3, -6 ], [ 2, -5 ], [ 2, -7 ], [ 2, -17 ], [ 1, -20 ], [ 1, -8 ], [ 2, -2 ], [ 0, -1 ], [ 2, -1 ], [ 0, -1 ], [ 4, -1 ], [ 5, 0 ], [ 2, -1 ], [ 3, 1 ], [ 1, 0 ], [ 4, 1 ], [ 9, 7 ], [ 17, 10 ], [ 7, 4 ], [ 1, 1 ], [ 2, 2 ], [ 2, 7 ], [ 4, 8 ], [ 6, 19 ], [ 3, 6 ] ], [ [ 8997, 4775 ], [ 0, -1 ], [ 10, -17 ], [ 3, -5 ], [ 4, -4 ], [ 5, -4 ], [ 2, -2 ], [ 2, 0 ], [ 2, -1 ], [ 2, 0 ], [ 0, 1 ], [ 2, 1 ], [ 2, 1 ], [ 2, 5 ], [ 0, 2 ], [ 0, 2 ], [ 0, 20 ], [ 0, 8 ], [ -2, 16 ], [ -2, 12 ], [ -3, 22 ], [ -1, 8 ], [ 0, 19 ], [ 1, 3 ], [ 1, 3 ], [ 6, 6 ], [ 13, 2 ], [ 17, 7 ], [ 4, 1 ], [ 8, 8 ], [ 3, 2 ], [ 5, 1 ], [ 5, 0 ], [ 5, -1 ], [ 1, -1 ], [ 3, -5 ], [ 5, -11 ], [ 1, -2 ], [ 2, -1 ], [ 2, -1 ], [ 2, 0 ], [ 2, 1 ], [ 3, 1 ], [ 4, 5 ], [ 4, 4 ], [ 6, 8 ], [ 5, 8 ], [ 4, 6 ], [ 4, 8 ], [ 2, 6 ], [ 2, 4 ], [ 0, 4 ], [ 0, 16 ], [ 0, 4 ], [ -2, 6 ], [ -2, 3 ], [ -1, 5 ], [ -4, 3 ], [ -16, 21 ], [ -15, 23 ], [ -11, 15 ], [ -11, 18 ], [ -4, -6 ], [ 0, -2 ], [ -1, -1 ], [ 0, -1 ], [ -2, -2 ], [ 0, -4 ], [ -1, -1 ], [ -1, 0 ], [ -3, 1 ], [ -4, 3 ], [ -2, 3 ], [ -2, 0 ], [ -2, -1 ], [ -4, -5 ] ], [ [ 9057, 5022 ], [ 0, 5 ], [ 0, 10 ], [ 0, 18 ], [ 0, 7 ], [ -1, 7 ], [ -2, 12 ], [ -2, 8 ], [ -2, 9 ], [ -4, 10 ], [ -8, 19 ], [ -5, 11 ], [ 0, 6 ], [ -2, 4 ], [ 0, 4 ], [ 0, 8 ], [ 0, 7 ], [ 0, 8 ], [ 2, 6 ], [ 0, 7 ], [ 2, 7 ], [ 3, 9 ], [ 2, 6 ], [ 4, 8 ], [ 2, 8 ], [ 2, 2 ], [ 4, 5 ], [ 2, 2 ], [ 3, 1 ], [ 12, 2 ], [ 4, 1 ], [ 7, 5 ], [ 6, 3 ], [ 4, 6 ], [ 5, 5 ], [ 22, 28 ], [ 9, 10 ], [ 13, 9 ], [ 4, 3 ], [ 13, 13 ], [ 6, 8 ], [ 5, 6 ], [ 4, 6 ], [ 4, 9 ], [ 4, 9 ], [ 25, 56 ], [ 1, 3 ], [ 2, 5 ] ], [ [ 9207, 5423 ], [ 1, 3 ] ], [ [ 9208, 5426 ], [ 0, -7 ], [ 1, -3 ], [ 0, -4 ], [ 6, -10 ], [ 0, -3 ], [ -2, -9 ], [ -4, -14 ], [ -9, -30 ], [ -2, -7 ], [ -2, -7 ], [ -2, -12 ], [ -1, -4 ], [ 0, -20 ], [ 1, -5 ], [ 2, -4 ], [ 4, -4 ], [ 5, -2 ], [ 3, 0 ], [ 1, 2 ], [ 8, 2 ], [ 2, 1 ], [ 8, 0 ], [ 3, -1 ], [ 2, -4 ], [ 2, -3 ], [ 4, -4 ], [ 2, -7 ], [ 3, -8 ], [ 2, -9 ], [ 1, -9 ], [ 1, -7 ], [ 2, -8 ], [ 2, -38 ], [ 2, -8 ], [ 2, -5 ], [ 0, -6 ], [ 2, -7 ], [ 8, -25 ], [ 1, -7 ], [ 2, -5 ], [ 2, -9 ], [ 0, -12 ], [ 4, -30 ], [ 0, -9 ], [ 2, -7 ], [ 2, -7 ], [ 2, -8 ], [ 1, -6 ], [ 4, -6 ], [ 2, -3 ], [ 2, -2 ], [ 4, -3 ], [ 2, 2 ], [ 7, 1 ], [ 4, 1 ], [ 8, -5 ], [ 3, -4 ], [ 4, -7 ], [ 2, -5 ], [ 3, -8 ], [ 1, -12 ], [ 0, -36 ], [ 2, -10 ], [ 2, -8 ], [ 0, -4 ], [ 2, -7 ], [ 5, -9 ], [ 2, -5 ], [ 1, -7 ], [ 0, -12 ], [ -3, -12 ], [ 0, -7 ], [ -5, -15 ], [ 0, -6 ], [ -2, -9 ], [ -4, -28 ], [ -1, -4 ], [ -1, -3 ] ], [ [ 9208, 5427 ], [ 0, -1 ] ], [ [ 9209, 5429 ], [ -1, -2 ] ], [ [ 9208, 5426 ], [ 1, 3 ] ], [ [ 8959, 4999 ], [ 2, 0 ], [ 3, 1 ], [ 12, 0 ], [ 2, -1 ], [ 6, 0 ], [ 3, -1 ], [ 4, -2 ], [ 4, -4 ], [ 5, -4 ], [ 8, -10 ], [ 6, -9 ], [ 2, -3 ], [ 1, -3 ], [ 1, -3 ], [ 0, -7 ], [ -1, -19 ], [ -1, -14 ], [ 1, -6 ], [ 1, -14 ], [ 1, -7 ], [ 2, -1 ], [ 2, 0 ], [ 2, 1 ], [ 1, 3 ], [ 5, 4 ], [ 4, 7 ], [ 3, 3 ], [ 4, 9 ], [ 3, 8 ], [ 3, 11 ], [ 4, 15 ], [ 3, 10 ], [ 2, 16 ], [ 0, 9 ], [ 2, 11 ], [ 0, 10 ], [ -2, 9 ], [ 0, 3 ], [ 0, 1 ] ], [ [ 9211, 5437 ], [ 0, -1 ], [ -2, -3 ], [ 0, -4 ] ], [ [ 9208, 5427 ], [ -1, -4 ] ], [ [ 9071, 5653 ], [ 3, 1 ], [ 1, 0 ], [ 5, 3 ], [ 3, 1 ], [ 3, 0 ], [ 7, -3 ], [ 2, -1 ], [ 8, -2 ], [ 8, -4 ], [ 20, -7 ], [ 2, -3 ], [ 3, -2 ], [ 5, -8 ], [ 2, -4 ], [ 2, -2 ], [ 3, -12 ], [ 1, -6 ], [ 1, -13 ], [ 1, -12 ], [ 0, -41 ], [ 1, -6 ], [ 2, -9 ], [ 2, -7 ], [ 0, -4 ], [ 4, -9 ], [ 4, -8 ], [ 3, -3 ], [ 6, -7 ], [ 2, -2 ], [ 6, -12 ], [ 2, -5 ], [ 7, -9 ], [ 15, -15 ], [ 4, -4 ], [ 2, -1 ] ], [ [ 9337, 4795 ], [ 11, 6 ], [ 7, 2 ], [ 4, 1 ], [ 6, 0 ], [ 11, 3 ], [ 3, 0 ], [ 5, -2 ], [ 13, 0 ], [ 10, -2 ], [ 6, -1 ], [ 7, 1 ], [ 8, 1 ] ], [ [ 9428, 4804 ], [ 0, -3 ], [ 1, -7 ], [ 0, -7 ], [ 0, -8 ], [ 2, -8 ], [ 2, -6 ], [ 3, -14 ], [ 5, -18 ], [ 2, -8 ], [ 4, -6 ], [ 1, -7 ], [ 4, -8 ], [ 6, -10 ], [ 2, -2 ], [ 2, -4 ], [ 9, -8 ], [ 8, -10 ], [ 6, -5 ], [ 5, -3 ], [ 2, 0 ], [ 2, 0 ], [ 2, 0 ], [ 7, 1 ], [ 4, 1 ], [ 2, 2 ], [ 4, 3 ], [ 8, 6 ], [ 3, 6 ], [ 6, 10 ], [ 1, 4 ], [ 1, 7 ], [ 2, 7 ], [ 0, 9 ], [ 0, 30 ], [ 0, 13 ], [ -3, 22 ], [ -1, 8 ], [ -2, 8 ], [ 0, 12 ], [ 2, 7 ], [ 2, 7 ], [ 2, 7 ], [ 4, 10 ], [ 9, 17 ], [ 4, 5 ], [ 6, 14 ], [ 5, 5 ], [ 4, 7 ], [ 4, 3 ], [ 4, 6 ], [ 19, 15 ], [ 6, 6 ], [ 13, 10 ], [ 4, 3 ], [ 1, 3 ], [ 2, 3 ], [ 0, 1 ] ], [ [ 9619, 4940 ], [ 0, -1 ], [ 2, -2 ], [ 0, -7 ], [ 2, -17 ], [ 21, -102 ], [ 4, -18 ], [ 7, -25 ], [ 2, -13 ], [ 2, -8 ], [ 1, -10 ], [ 3, -34 ], [ 0, -10 ], [ 2, -11 ], [ 2, -9 ], [ 0, -4 ], [ 2, -6 ], [ 3, -9 ], [ 4, -9 ], [ 6, -7 ], [ 4, -7 ], [ 5, -7 ], [ 8, -5 ], [ 6, -6 ], [ 9, -4 ], [ 10, -7 ], [ 5, -2 ], [ 7, -4 ], [ 16, -4 ], [ 6, -2 ], [ 4, -1 ], [ 4, -4 ], [ 4, -2 ], [ 5, -4 ], [ 2, -4 ], [ 2, -3 ], [ 11, -20 ], [ 8, -21 ], [ 4, -6 ], [ 2, -2 ], [ 3, -6 ], [ 8, -8 ], [ 13, -8 ], [ 4, -2 ], [ 4, -3 ], [ 14, 0 ], [ 15, 5 ], [ 7, 1 ], [ 7, 1 ], [ 5, -1 ], [ 5, 0 ], [ 2, -2 ], [ 5, -3 ], [ 6, -3 ], [ 4, -3 ], [ 6, -6 ], [ 3, -3 ], [ 3, -6 ], [ 5, -10 ], [ 2, -5 ], [ 0, -7 ], [ 2, -8 ], [ 2, -9 ], [ 2, -22 ], [ 3, -42 ], [ 4, -32 ], [ 3, -26 ], [ 3, -30 ], [ 6, -36 ], [ 7, -51 ], [ 0, -10 ], [ 3, -11 ], [ 1, -10 ], [ 4, -18 ], [ 2, -10 ], [ 2, -12 ], [ 1, -22 ], [ 1, -10 ], [ 1, -17 ], [ 2, -11 ], [ 2, -20 ], [ 4, -14 ], [ 2, -9 ], [ 6, -17 ], [ 3, -10 ], [ 4, -13 ], [ 2, -10 ], [ 2, -16 ], [ 0, -18 ], [ -2, -15 ], [ -2, -7 ], [ -5, -20 ], [ -4, -20 ], [ -2, -7 ], [ 0, -11 ], [ -2, -4 ], [ 0, -4 ], [ -3, -5 ], [ -4, -5 ], [ -10, -5 ], [ -15, -7 ], [ -8, -2 ], [ -8, -5 ], [ -7, -5 ], [ -19, -17 ], [ -10, -9 ], [ -11, -10 ], [ -17, -21 ], [ -8, -6 ], [ -3, -4 ], [ -6, -3 ], [ -2, -2 ], [ -4, -1 ], [ -4, -2 ], [ -7, -1 ], [ -4, 1 ], [ -5, 2 ], [ -4, 2 ], [ -4, 2 ], [ -23, 16 ], [ -6, 4 ], [ -5, 1 ], [ -8, 5 ], [ -17, 4 ], [ -14, 7 ], [ -5, 1 ], [ -4, 1 ], [ -9, 0 ], [ -15, -5 ], [ -10, -3 ], [ -21, -9 ], [ -7, -2 ], [ -14, -2 ], [ -15, 0 ], [ -4, 2 ], [ -4, 0 ], [ -2, 3 ], [ -7, 5 ], [ -10, 12 ], [ -1, 1 ], [ -4, 2 ], [ -6, 3 ], [ -4, 1 ], [ -4, 1 ], [ -7, -1 ], [ -6, 0 ], [ -9, -3 ], [ -6, -2 ], [ -7, -2 ], [ -6, -3 ], [ -8, -5 ], [ -5, -4 ], [ -3, -2 ], [ -1, -3 ] ], [ [ 9424, 5443 ], [ 0, -3 ], [ -2, -4 ], [ -8, -20 ], [ -4, -14 ], [ -11, -24 ], [ -4, -11 ], [ -7, -12 ], [ -4, -9 ], [ -4, -7 ], [ -1, -2 ], [ -3, -3 ], [ -2, -4 ], [ -3, -1 ], [ -6, -2 ], [ -13, -4 ], [ -6, -3 ], [ -6, -3 ], [ -5, -4 ], [ -2, -3 ], [ -4, -5 ], [ 0, -2 ], [ 0, -4 ], [ 0, -19 ], [ 2, -23 ], [ 0, -27 ], [ -2, -23 ], [ 0, -19 ], [ 2, -14 ], [ 2, -14 ], [ 3, -13 ], [ 6, -36 ], [ 8, -39 ], [ 2, -7 ], [ 5, -13 ], [ 2, -3 ], [ 2, -3 ], [ 3, -3 ], [ 3, -1 ], [ 2, -1 ], [ 17, 0 ], [ 6, -1 ], [ 5, -1 ], [ 6, -3 ], [ 7, -5 ], [ 4, -3 ], [ 0, -2 ], [ 3, -3 ], [ 1, -4 ], [ 2, -3 ], [ 0, -5 ], [ 2, -5 ], [ 0, -14 ], [ 4, -35 ], [ 2, -14 ], [ 1, -11 ], [ 4, -9 ], [ 2, -7 ], [ 4, -9 ], [ 6, -11 ], [ 3, -10 ], [ 3, -6 ], [ 1, -7 ], [ 0, -7 ], [ -1, -4 ], [ 0, -3 ], [ -3, -8 ], [ -1, -8 ], [ -4, -6 ], [ -4, -10 ], [ -10, -16 ], [ 0, -4 ], [ -1, -2 ], [ 0, -1 ] ], [ [ 9211, 5437 ], [ 1, 3 ], [ 3, 7 ], [ 2, 12 ], [ 7, 18 ], [ 0, 5 ], [ 2, 3 ], [ 2, 0 ], [ 0, 1 ], [ 6, -1 ], [ 4, 0 ], [ 8, 8 ], [ 0, 10 ], [ -1, 2 ], [ 1, 2 ], [ 0, 2 ], [ 3, 6 ], [ 0, 4 ], [ -2, 6 ], [ -4, 6 ], [ -5, 3 ], [ -2, 1 ], [ -2, 3 ], [ 0, 4 ], [ -2, 2 ], [ 0, 2 ], [ -1, 6 ], [ 0, 6 ], [ 1, 3 ], [ 4, -2 ], [ 7, -3 ], [ 8, -4 ], [ 6, -5 ], [ 9, -5 ], [ 0, -3 ], [ 8, -10 ], [ 5, -2 ], [ 4, -2 ], [ 6, -4 ], [ 6, -4 ], [ 5, -1 ], [ 7, -1 ], [ 7, -1 ], [ 4, 1 ], [ 4, 0 ], [ 3, 0 ], [ 20, 8 ], [ 5, 1 ], [ 6, 1 ], [ 5, 0 ], [ 6, -3 ], [ 0, -1 ], [ 4, -5 ], [ 2, -4 ], [ 6, -18 ], [ 9, -16 ], [ 4, -3 ], [ 3, -3 ], [ 15, -12 ], [ 4, -2 ], [ 6, -5 ], [ 2, -5 ], [ 2, -2 ], [ 0, -2 ], [ 0, -1 ] ], [ [ 9424, 5443 ], [ 15, -20 ], [ 15, -18 ], [ 4, -6 ], [ 2, -3 ], [ 2, 0 ], [ 5, -2 ], [ 6, -4 ], [ 11, -5 ], [ 12, -5 ], [ 13, -4 ], [ 8, 0 ], [ 4, 1 ], [ 2, 1 ], [ 3, 2 ], [ 2, 5 ], [ 3, 3 ], [ 1, 5 ], [ 2, 4 ], [ 2, 5 ], [ 0, 3 ], [ 0, 5 ], [ 2, 6 ], [ -2, 20 ], [ 2, 4 ], [ 0, 5 ], [ 0, 4 ], [ 3, 8 ], [ 1, 2 ], [ 1, 3 ], [ 4, 0 ], [ 4, -2 ], [ 2, -3 ], [ 2, -1 ], [ 7, -10 ], [ 0, 1 ], [ 3, 1 ], [ 1, 0 ], [ 3, -1 ], [ 1, -1 ], [ 2, 0 ], [ 0, -2 ], [ 2, -4 ], [ 6, -14 ], [ 1, -10 ], [ 3, -12 ], [ 1, -8 ], [ 0, -20 ], [ -1, -10 ], [ -3, -27 ], [ -1, -22 ], [ 0, -16 ], [ 1, -7 ], [ 0, -5 ], [ 4, -13 ], [ 0, -5 ], [ 3, -4 ], [ 3, -6 ], [ 2, -5 ], [ 15, -19 ], [ 4, -4 ], [ 3, -5 ], [ 1, -2 ], [ 2, -5 ], [ 0, -13 ], [ -1, -3 ], [ -2, -6 ], [ -5, -13 ], [ -3, -8 ], [ -3, -7 ], [ -2, -12 ], [ -2, -7 ], [ -9, -24 ], [ -2, -10 ], [ -1, -7 ], [ -3, -6 ], [ 0, -26 ], [ 2, -7 ], [ 1, -6 ], [ 3, -16 ], [ 8, -33 ], [ 3, -17 ], [ 4, -13 ], [ 2, -11 ], [ 9, -25 ], [ 2, -11 ] ], [ [ 8406, 3551 ], [ 1, 0 ], [ 1, -2 ], [ 3, -5 ], [ 5, -11 ], [ 2, -5 ], [ 5, -8 ], [ 10, -16 ], [ 4, -3 ], [ 2, -6 ], [ 3, -6 ], [ 0, -6 ], [ 2, -3 ], [ 1, -7 ], [ 1, -10 ], [ 0, -3 ], [ 2, -4 ], [ 2, -3 ], [ 2, -1 ], [ 2, -2 ], [ 4, -1 ], [ 18, 0 ], [ 4, 1 ], [ 6, 2 ], [ 9, 0 ], [ 3, -1 ], [ 3, -2 ], [ 2, -5 ], [ 2, -2 ], [ 4, -8 ], [ 4, -12 ], [ 5, -14 ], [ 2, -10 ], [ 1, -6 ], [ 0, -11 ], [ -1, -7 ], [ -2, -11 ], [ -2, -15 ], [ -3, -23 ], [ -4, -13 ], [ -2, -9 ], [ -2, -9 ], [ -4, -11 ], [ -3, -9 ] ], [ [ 8498, 3274 ], [ -3, -5 ], [ -5, -15 ], [ -8, -17 ], [ -6, -13 ], [ -7, -10 ], [ -4, -4 ], [ -2, -6 ], [ -5, -6 ], [ -4, -4 ], [ -4, -4 ], [ -4, -4 ], [ -7, -4 ], [ -8, -5 ], [ -5, 0 ], [ -5, -1 ], [ -9, 1 ], [ -17, 4 ], [ -7, 1 ], [ -10, 0 ], [ -9, -4 ], [ -5, -4 ], [ -5, -3 ], [ -9, -13 ], [ -6, -5 ], [ -9, -9 ], [ -8, -7 ], [ -6, -3 ], [ -5, -4 ], [ -5, -4 ], [ -11, -4 ], [ -6, -1 ], [ -5, 0 ], [ -12, 1 ], [ -4, 0 ], [ -5, -1 ], [ -12, -3 ], [ -11, -2 ], [ -17, -1 ], [ -8, -1 ], [ -9, -1 ], [ -5, -3 ], [ -8, -5 ], [ -6, -7 ], [ -4, -4 ], [ -2, -2 ], [ -2, -7 ], [ -1, -1 ], [ -1, -3 ], [ 0, -4 ], [ 1, -2 ], [ 0, -2 ], [ 1, -4 ], [ 0, -2 ], [ 3, -2 ], [ 1, -1 ], [ 8, -8 ], [ 2, -2 ], [ 1, -3 ], [ 0, -10 ], [ -2, -8 ], [ -2, -14 ], [ -3, -8 ], [ -2, -12 ], [ -10, -40 ], [ -5, -13 ], [ -8, -33 ], [ -2, -7 ], [ -4, -4 ], [ -7, -15 ], [ -4, -7 ], [ -1, -5 ], [ -4, -11 ], [ -3, -6 ], [ -3, -5 ], [ -6, -6 ], [ -6, -3 ], [ -1, -1 ], [ -6, -3 ], [ -4, 1 ], [ -4, 2 ], [ -9, 4 ], [ -2, 1 ], [ -4, 1 ], [ -2, -1 ], [ -2, -1 ], [ -4, -3 ], [ -15, -17 ], [ -6, -6 ], [ -5, -3 ], [ -4, -1 ], [ -10, -6 ], [ -5, -1 ] ], [ [ 8044, 2810 ], [ 0, 3 ], [ -2, 4 ], [ -2, 11 ], [ -2, 7 ], [ -2, 12 ], [ 0, 3 ], [ 0, 4 ], [ -1, 1 ], [ -3, 0 ], [ -4, -2 ], [ -5, -5 ], [ -2, -3 ], [ -4, -2 ], [ -5, 0 ], [ -4, 2 ], [ -4, 3 ], [ -2, 4 ], [ -2, 2 ], [ 0, 1 ], [ -3, 0 ], [ -6, -6 ], [ -2, -3 ], [ -2, -3 ], [ -4, -5 ], [ -2, -8 ], [ -2, -3 ], [ -4, -20 ], [ -1, -4 ], [ 0, -16 ], [ 1, -8 ], [ 0, -6 ], [ 3, -9 ], [ 7, -23 ], [ 0, -6 ], [ 2, -7 ], [ 0, -11 ], [ 0, -19 ], [ 0, -7 ], [ -2, -5 ], [ -2, -4 ], [ -2, -2 ], [ -3, -3 ], [ -10, -7 ], [ -9, -9 ], [ -3, -3 ], [ 0, -2 ], [ -3, -6 ], [ -2, -10 ], [ -2, -13 ], [ 0, -5 ], [ -2, -4 ], [ -2, -9 ], [ -2, -3 ], [ -3, -5 ], [ -6, -5 ], [ -4, -7 ], [ -15, -13 ], [ -4, -6 ], [ -6, -3 ], [ -11, -5 ], [ -15, -6 ], [ -6, -4 ], [ -5, -3 ], [ -8, -6 ], [ -14, -14 ], [ -4, -3 ], [ -3, -4 ], [ -6, -3 ], [ -7, -3 ], [ -8, -4 ], [ -32, -7 ], [ -19, -6 ] ], [ [ 7767, 2499 ], [ 0, 1 ], [ -1, -1 ], [ -3, -1 ], [ -6, -7 ], [ -9, -8 ], [ -16, -16 ], [ -7, -7 ], [ -15, -12 ], [ -12, -12 ], [ -7, -7 ], [ -6, -10 ], [ -7, -11 ], [ -3, -6 ], [ -7, -13 ], [ -8, -17 ], [ -4, -8 ], [ -3, -4 ], [ -8, -12 ], [ -5, -9 ], [ -18, -20 ], [ -2, -6 ], [ -9, -18 ], [ -2, -4 ], [ 0, -4 ], [ -2, -5 ], [ 0, -4 ], [ 0, -20 ], [ 0, -8 ], [ 4, -20 ], [ 0, -8 ], [ 2, -6 ], [ 0, -10 ], [ -2, -8 ], [ 0, -7 ], [ -2, -8 ], [ -6, -14 ], [ -4, -6 ], [ -9, -9 ], [ -6, -3 ], [ -7, -5 ], [ -8, -3 ] ], [ [ 7569, 2143 ], [ 0, 1 ], [ -2, -1 ], [ -7, -3 ], [ -33, -26 ], [ -26, -16 ], [ -15, -11 ], [ -14, -7 ], [ -5, -3 ], [ -8, -2 ], [ -13, 0 ], [ -2, 1 ], [ -4, 3 ], [ -4, 3 ], [ -5, 3 ], [ -2, 4 ], [ 0, 2 ], [ -2, 10 ], [ 0, 4 ], [ -2, 15 ], [ 0, 23 ], [ 2, 7 ], [ 0, 4 ], [ 2, 7 ], [ 2, 4 ], [ 4, 8 ], [ 1, 3 ], [ 10, 13 ], [ 5, 5 ], [ 3, 5 ], [ 1, 3 ], [ 3, 6 ], [ 1, 5 ], [ 4, 12 ], [ 2, 10 ], [ 4, 25 ], [ 1, 12 ], [ 0, 16 ], [ 0, 2 ], [ 0, 1 ], [ -1, 0 ], [ -2, 0 ], [ -2, 0 ], [ -2, -3 ], [ -4, -5 ], [ -8, -10 ], [ -7, -11 ], [ -17, -28 ], [ -6, -11 ], [ -9, -12 ], [ -14, -15 ], [ -9, -5 ], [ -6, -3 ], [ -6, -3 ], [ -5, -1 ], [ -4, -1 ], [ -13, -1 ], [ -2, 0 ], [ -2, 1 ], [ -4, 1 ], [ -3, 4 ], [ -3, 3 ], [ -2, 3 ], [ -3, 5 ], [ -6, 14 ], [ -21, 58 ], [ -3, 7 ] ], [ [ 9331, 3360 ], [ 2, -7 ], [ 2, -7 ], [ 3, -20 ], [ 2, -12 ], [ 1, -10 ], [ 1, -19 ], [ 0, -35 ], [ -1, -8 ], [ -1, -13 ], [ -2, -9 ], [ -2, -8 ], [ -9, -30 ], [ -4, -12 ], [ -11, -27 ], [ -6, -13 ], [ -6, -12 ], [ -2, -7 ], [ -5, -6 ], [ -2, -7 ], [ -4, -4 ], [ -6, -9 ], [ -5, -6 ], [ -6, -5 ], [ -6, -6 ], [ -13, -9 ], [ -23, -15 ], [ -9, -7 ], [ -25, -21 ], [ -19, -15 ], [ -6, -6 ], [ -13, -8 ], [ -27, -14 ], [ -9, -6 ], [ -9, -3 ], [ -8, -5 ], [ -8, -2 ], [ -26, -7 ], [ -8, -2 ], [ -11, -4 ], [ -12, -7 ], [ -7, -5 ], [ -4, -5 ], [ -4, -3 ], [ -1, -4 ], [ -3, -4 ], [ -7, -11 ], [ -2, -8 ], [ -2, -9 ], [ -6, -21 ], [ -5, -11 ], [ -6, -16 ], [ -13, -27 ], [ -6, -16 ], [ -6, -13 ], [ -2, -7 ], [ -2, -9 ], [ -3, -8 ], [ -2, -9 ], [ -2, -10 ], [ 0, -11 ], [ 0, -33 ], [ 2, -18 ], [ 0, -4 ], [ 0, -25 ], [ -2, -15 ], [ -2, -14 ], [ -3, -21 ], [ -7, -28 ], [ -7, -27 ], [ -4, -12 ], [ -4, -4 ], [ 0, -1 ] ], [ [ 8928, 2528 ], [ 0, 1 ], [ -2, 0 ], [ -9, -1 ], [ -8, -1 ], [ -11, -4 ], [ -6, -1 ], [ -13, 0 ], [ -11, 5 ], [ -4, 3 ], [ -2, 3 ], [ -2, 4 ], [ -2, 5 ], [ -3, 8 ], [ -1, 7 ], [ -2, 6 ], [ 0, 6 ], [ 0, 34 ], [ -1, 7 ], [ -1, 7 ], [ -3, 8 ], [ -7, 14 ], [ -3, 6 ], [ 0, 4 ], [ -4, 12 ], [ -1, 7 ], [ -1, 7 ], [ -1, 10 ], [ -2, 5 ], [ 0, 28 ], [ 2, 18 ], [ 1, 7 ], [ 0, 14 ], [ -1, 7 ], [ 0, 6 ], [ -2, 8 ], [ -2, 9 ], [ -2, 8 ], [ -2, 6 ], [ -1, 6 ], [ -3, 8 ], [ -4, 9 ], [ -9, 17 ], [ -6, 14 ], [ -6, 18 ], [ -11, 26 ], [ -4, 11 ], [ -9, 18 ], [ -4, 8 ], [ -5, 7 ], [ -6, 5 ], [ -6, 7 ], [ -6, 3 ], [ -5, 4 ], [ -6, 1 ], [ -4, 1 ], [ -4, 0 ], [ -5, -2 ], [ -4, -2 ], [ -4, -2 ], [ -13, -8 ], [ -4, -3 ], [ -6, -2 ], [ -5, -1 ], [ -2, 0 ], [ -4, 1 ], [ 0, 1 ], [ -3, 0 ], [ -3, 2 ], [ -1, 4 ], [ -5, 5 ], [ -5, 8 ], [ -2, 7 ], [ -13, 24 ], [ -4, 11 ], [ -5, 10 ], [ -3, 9 ], [ -11, 31 ], [ -5, 18 ], [ -8, 12 ], [ -2, 3 ], [ -4, 2 ], [ -5, 3 ], [ -12, 2 ], [ -10, 7 ], [ -2, 2 ], [ -2, 4 ], [ -3, 8 ], [ 0, 8 ], [ 1, 6 ], [ 4, 13 ], [ 2, 7 ], [ 2, 18 ], [ 0, 8 ], [ -2, 9 ], [ 0, 7 ], [ -1, 8 ], [ -3, 9 ], [ -2, 9 ], [ -5, 10 ], [ -6, 13 ], [ -6, 12 ], [ -7, 11 ], [ -4, 9 ], [ -9, 17 ], [ -2, 1 ], [ 0, 2 ], [ 0, 4 ], [ -2, 4 ], [ -2, 0 ], [ -2, 0 ], [ -2, -1 ], [ 0, -3 ], [ 0, -3 ], [ -1, -4 ], [ -1, -2 ], [ -2, -6 ], [ -2, -2 ], [ -2, -1 ], [ -3, -1 ], [ -2, 0 ], [ -4, -4 ], [ -4, -2 ], [ -3, 0 ] ], [ [ 8928, 2528 ], [ 0, -51 ], [ 2, -41 ], [ 0, -7 ], [ -2, -7 ], [ 0, -6 ], [ -1, -6 ], [ -2, -6 ], [ -4, -7 ], [ -6, -17 ], [ -2, -3 ], [ -1, -6 ], [ -3, -7 ], [ -3, -15 ], [ -6, -18 ], [ 0, -9 ], [ -2, -7 ], [ 0, -16 ], [ 7, -25 ], [ 2, -6 ], [ 1, -8 ], [ 0, -8 ], [ -1, -5 ], [ -2, -12 ], [ -3, -13 ], [ 0, -6 ], [ 0, -55 ], [ -2, -16 ], [ 0, -12 ], [ -2, -11 ], [ -1, -10 ], [ -3, -13 ], [ -2, -6 ], [ 0, -1 ] ], [ [ 8892, 2092 ], [ -2, 1 ], [ -21, 9 ], [ -7, 2 ], [ -6, 5 ], [ -5, 3 ], [ -6, 4 ], [ -9, 9 ], [ -3, 5 ], [ -5, 4 ], [ -4, 7 ], [ -4, 7 ], [ -23, 43 ], [ -11, 19 ], [ -4, 6 ], [ -2, 5 ], [ -9, 8 ], [ -6, 3 ], [ -4, 2 ], [ -4, 3 ], [ -5, 1 ], [ -10, 2 ], [ -11, 1 ], [ -8, 0 ], [ -5, -1 ], [ -10, -5 ], [ -2, -1 ], [ -2, 0 ], [ -4, 3 ], [ -3, 2 ], [ -2, 4 ], [ -4, 6 ], [ -3, 9 ], [ -5, 12 ], [ -5, 11 ], [ -4, 10 ], [ -1, 8 ], [ -4, 16 ], [ -3, 8 ], [ -2, 6 ], [ -5, 8 ], [ -2, 3 ], [ -19, 21 ], [ -7, 6 ], [ -8, 3 ], [ -7, 4 ], [ -7, 3 ], [ -20, 5 ], [ -4, 2 ], [ -4, 3 ], [ -3, 3 ], [ -4, 7 ], [ -1, 4 ], [ -2, 6 ], [ 0, 4 ], [ -1, 6 ], [ 0, 4 ], [ 1, 20 ], [ -1, 8 ], [ 0, 5 ], [ -1, 6 ], [ -1, 6 ], [ -2, 12 ], [ -4, 10 ], [ -2, 3 ], [ -2, 4 ], [ -6, 4 ], [ -1, 1 ], [ -4, 1 ], [ -6, 1 ], [ -8, 0 ], [ -11, -2 ], [ -6, 0 ], [ -5, 1 ], [ -17, 5 ], [ -11, 3 ], [ -4, 0 ], [ -4, 0 ], [ -6, -1 ], [ -5, -2 ], [ -7, -3 ], [ -19, -8 ], [ -7, -3 ], [ -4, -2 ], [ -5, -1 ], [ -6, 0 ], [ -10, 0 ], [ -17, 0 ], [ -5, 0 ], [ -8, 0 ], [ -12, -3 ], [ -5, -2 ], [ -6, -3 ], [ -11, -6 ], [ -6, -3 ], [ -4, -1 ], [ -9, -1 ], [ -6, 0 ], [ -4, 1 ], [ -2, 4 ], [ -3, 1 ], [ -4, 4 ], [ -2, 3 ], [ -4, 6 ], [ -13, 20 ], [ -14, 26 ], [ -3, 4 ], [ -2, 1 ], [ -8, 9 ], [ -3, 3 ], [ -3, 3 ], [ -3, 1 ], [ -4, 2 ], [ -4, 0 ], [ -8, -2 ], [ -3, -1 ], [ -2, -3 ], [ -4, -2 ], [ -4, -4 ], [ -2, -4 ], [ -3, -6 ], [ -4, -8 ], [ -2, -8 ], [ -6, -11 ], [ -5, -18 ], [ -2, -4 ], [ -6, -14 ], [ -6, -13 ], [ 0, -4 ], [ -4, -5 ], [ 0, -1 ], [ -3, -1 ], [ 0, -1 ], [ -2, 0 ], [ -2, 1 ], [ -4, 5 ], [ -2, 6 ], [ -3, 10 ], [ -3, 7 ], [ -3, 2 ], [ -2, 3 ], [ -4, 6 ], [ -6, 5 ], [ -7, 6 ], [ -17, 10 ], [ -6, 4 ], [ -5, 5 ], [ -4, 4 ], [ -3, 3 ], [ -1, 3 ], [ -2, 3 ], [ 0, 4 ], [ -4, 10 ], [ -2, 12 ], [ 0, 11 ], [ -2, 7 ], [ 0, 4 ], [ 2, 4 ], [ 0, 6 ], [ 0, 3 ], [ 2, 4 ], [ 0, 2 ], [ 2, 2 ], [ 2, 2 ], [ 2, 4 ], [ 4, 3 ], [ 9, 9 ], [ 9, 8 ], [ 5, 5 ], [ 1, 4 ], [ 2, 2 ], [ 2, 3 ], [ 2, 6 ], [ 2, 13 ], [ 0, 6 ], [ 0, 4 ], [ 0, 5 ], [ -4, 8 ], [ -4, 6 ], [ -11, 11 ], [ -4, 2 ], [ -2, 1 ], [ -2, 0 ], [ -13, -2 ], [ -6, -1 ], [ -4, 1 ], [ -5, 2 ], [ -2, 4 ], [ -4, 3 ], [ -4, 6 ], [ -2, 5 ], [ -7, 11 ], [ -2, 7 ], [ -6, 17 ], [ -3, 9 ], [ -3, 7 ], [ -2, 7 ], [ -3, 12 ], [ 0, 7 ], [ -2, 7 ], [ 0, 6 ] ], [ [ 7569, 2143 ], [ 2, -1 ], [ 0, -8 ], [ 2, -12 ], [ 4, -15 ], [ 5, -26 ], [ 2, -12 ], [ 4, -36 ], [ 2, -9 ], [ 0, -24 ], [ -2, -11 ], [ -1, -26 ], [ 0, -9 ], [ -1, -7 ], [ 0, -4 ], [ 1, -5 ], [ 0, -4 ], [ 1, -2 ], [ 2, -5 ], [ 2, -3 ], [ 2, 0 ], [ 8, -1 ], [ 5, -1 ], [ 6, -4 ], [ 4, -3 ], [ 5, -2 ], [ 8, -9 ], [ 9, -6 ], [ 2, -2 ], [ 3, -2 ], [ 1, -2 ], [ 6, -8 ], [ 13, -28 ], [ 4, -5 ], [ 4, -4 ], [ 6, -3 ], [ 13, -6 ], [ 3, -2 ], [ 4, -1 ], [ 6, -7 ], [ 2, -3 ], [ 4, -10 ], [ 2, -14 ], [ 1, -9 ], [ 4, -47 ], [ 3, -40 ], [ 1, -10 ], [ 0, -9 ], [ 2, -10 ], [ 4, -9 ], [ 5, -19 ], [ 3, -10 ], [ 0, -4 ], [ 1, -8 ], [ 2, -19 ], [ 2, -11 ], [ 4, -20 ], [ 2, -9 ], [ 2, -3 ], [ 3, -7 ], [ 6, -8 ], [ 13, -12 ], [ 3, -6 ], [ 5, -7 ], [ 4, -7 ], [ 2, -4 ], [ 5, -8 ], [ 4, -8 ], [ 2, -9 ], [ 6, -10 ], [ 2, -10 ], [ 3, -10 ], [ 1, -6 ], [ 1, -7 ], [ 0, -20 ], [ 2, -9 ], [ 1, -7 ], [ 1, -4 ], [ 2, -7 ], [ 2, -4 ], [ 4, -5 ], [ 13, -15 ], [ 6, -9 ], [ 7, -8 ], [ 4, -9 ], [ 14, -27 ], [ 4, -10 ], [ 1, -6 ], [ 2, -8 ], [ 4, -15 ], [ 4, -19 ], [ 5, -37 ], [ 3, -14 ], [ 1, -11 ], [ 0, -11 ], [ -1, -9 ], [ -1, -18 ], [ -2, -7 ], [ 0, -15 ], [ 2, -10 ], [ 2, -11 ], [ 2, -15 ], [ 2, -4 ] ], [ [ 7892, 1101 ], [ 0, 0 ] ], [ [ 7892, 1101 ], [ 0, -1 ], [ -2, -2 ], [ -2, -5 ], [ -19, -22 ], [ -9, -10 ], [ -6, -9 ], [ -5, -4 ], [ -4, -4 ], [ -6, -3 ], [ -2, -1 ], [ -4, -1 ], [ -6, -1 ], [ -4, -1 ], [ -20, 1 ], [ -4, 1 ], [ -4, 2 ], [ -6, 3 ], [ -7, 7 ], [ -9, 11 ], [ -16, 21 ], [ -11, 18 ], [ -6, 10 ], [ -9, 20 ], [ -6, 9 ], [ -5, 4 ], [ -12, 10 ], [ -6, 6 ], [ -19, 20 ], [ -17, 20 ], [ -4, 6 ], [ -7, 5 ], [ -12, 8 ], [ -7, 4 ], [ -6, 6 ], [ -12, 8 ], [ -5, 3 ], [ -7, 6 ], [ -14, 6 ], [ -4, 4 ], [ -5, 2 ], [ -10, 3 ], [ -5, 2 ], [ -4, 2 ], [ -12, 0 ], [ -4, -3 ], [ -6, -3 ], [ -5, -7 ], [ -6, -5 ], [ -4, -6 ], [ -3, -7 ], [ -19, -31 ], [ -21, -32 ], [ -4, -9 ], [ -10, -12 ], [ -19, -22 ], [ -11, -11 ], [ -5, -10 ], [ -6, -9 ], [ -4, -8 ], [ -4, -9 ], [ -4, -11 ], [ -2, -9 ], [ -3, -10 ], [ -2, -10 ], [ -8, -40 ], [ -4, -17 ], [ -1, -8 ], [ -3, -5 ], [ -1, -5 ], [ -2, 0 ] ], [ [ 8406, 1429 ], [ 0, -1 ] ], [ [ 8406, 1428 ], [ -2, -1 ] ], [ [ 8404, 1427 ], [ 0, 1 ], [ 2, 1 ] ], [ [ 8892, 2092 ], [ -2, -7 ], [ -9, -30 ], [ -3, -12 ], [ -7, -26 ], [ -3, -14 ], [ -6, -21 ], [ -6, -15 ], [ -2, -9 ], [ -4, -8 ], [ -5, -8 ], [ -5, -11 ], [ -4, -8 ], [ -10, -15 ], [ -6, -6 ], [ -6, -7 ], [ -3, -2 ], [ -8, -6 ], [ -8, -4 ], [ -5, -5 ], [ -17, -6 ], [ -4, -2 ], [ -5, -2 ], [ -8, -1 ], [ -8, 0 ], [ -6, 1 ], [ -17, 5 ], [ -15, 0 ], [ -13, -2 ], [ -21, -3 ], [ -10, -1 ], [ -11, -3 ], [ -5, -2 ], [ -6, -4 ], [ -4, -3 ], [ -5, -3 ], [ -4, -7 ], [ -4, -3 ], [ -10, -18 ], [ -1, -6 ], [ -3, -5 ], [ -1, -6 ], [ -1, -6 ], [ -2, -7 ], [ -1, -8 ], [ -6, -39 ], [ -6, -33 ], [ -2, -16 ], [ -2, -12 ], [ -2, -14 ], [ -1, -17 ], [ -2, -27 ], [ -2, -15 ], [ -2, -12 ], [ -2, -10 ], [ -3, -22 ], [ -3, -13 ], [ -4, -22 ], [ -3, -11 ], [ -4, -9 ], [ -2, -8 ], [ -2, -7 ], [ -4, -4 ], [ -2, -7 ], [ -2, -1 ], [ -3, -4 ], [ -6, -5 ], [ -4, -2 ], [ -6, -1 ], [ -5, -1 ], [ -6, 0 ], [ -38, 1 ], [ -11, -1 ], [ -8, -2 ], [ -7, -2 ], [ -10, -2 ], [ -8, -3 ], [ -7, -4 ], [ -12, -7 ], [ -5, -6 ], [ -4, -4 ], [ -2, -4 ], [ -2, -2 ], [ -1, -3 ], [ -1, -5 ] ], [ [ 8406, 1430 ], [ 0, -1 ] ], [ [ 8406, 1430 ], [ -2, 8 ], [ -2, 7 ], [ -3, 7 ], [ -2, 6 ], [ -4, 7 ], [ -17, 29 ], [ -6, 12 ], [ -5, 11 ], [ -4, 10 ], [ -4, 11 ], [ -4, 15 ], [ -2, 11 ], [ -6, 29 ], [ -5, 14 ], [ -2, 11 ], [ -6, 14 ], [ -2, 6 ], [ -4, 7 ], [ -10, 15 ], [ -8, 13 ], [ -8, 13 ], [ -10, 16 ], [ -5, 6 ], [ -4, 5 ], [ -3, 3 ], [ -3, 1 ], [ -5, 2 ], [ -14, 0 ], [ -9, 6 ], [ -6, 5 ], [ -11, 12 ], [ -8, 9 ], [ -4, 2 ], [ -3, 2 ], [ -16, 0 ], [ -7, 0 ], [ -4, 1 ], [ -4, 1 ], [ -11, 8 ], [ -2, 3 ], [ -2, 4 ], [ -2, 4 ], [ -6, 13 ], [ -7, 13 ], [ -4, 6 ], [ -4, 9 ], [ -5, 12 ], [ -19, 52 ], [ -2, 6 ], [ -4, 7 ], [ -2, 10 ], [ -3, 12 ], [ -1, 7 ], [ -2, 3 ], [ -5, 11 ], [ -6, 13 ], [ -5, 12 ], [ -1, 3 ], [ -2, 7 ], [ -1, 5 ], [ 0, 23 ], [ 1, 6 ], [ 0, 9 ], [ 6, 39 ], [ 2, 9 ], [ 0, 13 ], [ -2, 5 ], [ -2, 4 ], [ -1, 7 ], [ -4, 6 ], [ -15, 24 ], [ -8, 14 ], [ -10, 19 ], [ -1, 8 ], [ -3, 9 ], [ -2, 8 ], [ -3, 15 ], [ -4, 13 ], [ -4, 4 ], [ -2, 3 ], [ -2, 5 ], [ -7, 6 ], [ -6, 5 ], [ -12, 6 ], [ -3, 1 ], [ -12, 0 ], [ -3, -1 ], [ -6, -5 ], [ -8, -6 ], [ -3, -1 ], [ -2, -1 ], [ -4, -1 ], [ -2, 0 ], [ -10, 1 ], [ -5, 1 ], [ -4, 1 ], [ -13, 6 ], [ -6, 2 ], [ -7, 6 ], [ -4, 2 ], [ -6, 5 ], [ -6, 6 ], [ -7, 8 ], [ -21, 28 ], [ -8, 10 ], [ -9, 8 ], [ -10, 11 ], [ -23, 23 ], [ -5, 4 ], [ -2, 6 ], [ -4, 6 ], [ -2, 6 ], [ -21, 60 ], [ -9, 27 ], [ -14, 40 ], [ -3, 9 ] ], [ [ 8406, 1430 ], [ 0, -2 ] ], [ [ 8404, 1427 ], [ -5, -6 ], [ -2, -3 ], [ -6, -12 ], [ -8, -16 ], [ -5, -10 ], [ -5, -11 ], [ -26, -60 ], [ -3, -8 ], [ -12, -21 ], [ -16, -27 ], [ -7, -8 ], [ -9, -13 ], [ -7, -6 ], [ -4, -3 ], [ -8, -3 ], [ -25, -14 ], [ -9, -6 ], [ -6, -2 ], [ -20, -8 ], [ -14, -4 ], [ -8, -6 ], [ -7, -4 ], [ -5, -6 ], [ -5, -6 ], [ -5, -4 ], [ -10, -14 ], [ -17, -18 ], [ -5, -9 ], [ -12, -18 ], [ -6, -8 ], [ -5, -5 ], [ -6, -6 ], [ -6, -2 ], [ -7, -2 ], [ -6, -3 ], [ -13, -1 ], [ -4, -2 ], [ -4, -1 ], [ -4, -6 ], [ -6, -7 ], [ -1, -4 ], [ -4, -3 ], [ -7, -7 ], [ -8, -3 ], [ -6, -2 ], [ -5, 0 ], [ -3, 1 ], [ -5, 3 ], [ -2, 5 ], [ -6, 11 ], [ 0, 2 ], [ -2, 0 ], [ -2, 2 ], [ -7, 2 ], [ -2, 2 ], [ -2, 2 ], [ -4, 3 ], [ -3, 5 ], [ -6, 5 ], [ -19, 29 ], [ -10, 12 ], [ -4, 5 ], [ -9, 5 ], [ -4, 3 ], [ -2, 1 ], [ -4, 1 ], [ -13, 0 ], [ -5, -2 ], [ -4, -4 ], [ -6, -2 ], [ -4, -4 ], [ -4, -6 ], [ -4, -3 ], [ -3, -6 ], [ -4, -10 ] ] ],
        transform: {
            scale: [ .0006756354155167558, .00024985268915216926 ],
            translate: [ 12.100045027793065, 48.55772845881593 ]
        }
    },
    praha: {
        type: "Topology",
        objects: {
            data: {
                type: "GeometryCollection",
                bbox: [ 14.226532719236662, 49.94266665156152, 14.707920403453894, 50.17821953819339 ],
                geometries: [ {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 1,
                        senat_obvo: 17,
                        Shape_Leng: 75441.04245,
                        Shape_Area: 93532581.3778
                    },
                    arcs: [ [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 2,
                        senat_obvo: 19,
                        Shape_Leng: 61533.7425696,
                        Shape_Area: 61818028.9925
                    },
                    arcs: [ [ 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, -4, 31, -2, 32, -15, 33, 34, 35, -11, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 3,
                        senat_obvo: 20,
                        Shape_Leng: 27218.8067215,
                        Shape_Area: 21772771.3274
                    },
                    arcs: [ [ 47, 48, 49, 50, 51, 52, 53, -40, 54, -38, 55, -9 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 4,
                        senat_obvo: 21,
                        Shape_Leng: 45090.7426559,
                        Shape_Area: 50356451.2782
                    },
                    arcs: [ [ -49, 56, -7, 57, 58, 59, 60, 61 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 5,
                        senat_obvo: 22,
                        Shape_Leng: 45506.2871092,
                        Shape_Area: 30035213.4082
                    },
                    arcs: [ [ 62, 63, -27, 64, -25, 65, -23, 66, 67, 68, -19, 69, 70, -16, 71, -46, 72, -44, 73, -42, 74, -53, 75, 76, 77, 78, 79, 80, 81 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 6,
                        senat_obvo: 23,
                        Shape_Leng: 47587.9211885,
                        Shape_Area: 53541259.1311
                    },
                    arcs: [ [ 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 7,
                        senat_obvo: 24,
                        Shape_Leng: 62016.0775602,
                        Shape_Area: 88673612.1209
                    },
                    arcs: [ [ -29, 96, -63, 97, -81, 98, 99, 100, 101, -96, 102, 103, -93, 104, -91, 105 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 8,
                        senat_obvo: 25,
                        Shape_Leng: 54964.9727941,
                        Shape_Area: 56291316.7093
                    },
                    arcs: [ [ -61, 106, -59, 107, 108 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 9,
                        senat_obvo: 27,
                        Shape_Leng: 35465.5092929,
                        Shape_Area: 28310703.7465
                    },
                    arcs: [ [ -89, 109, -87, 110, -85, 111, 112, 113, -109, 114 ] ]
                }, {
                    type: "Polygon",
                    properties: {
                        OBJECTID: 10,
                        senat_obvo: 26,
                        Shape_Leng: 25127.2035133,
                        Shape_Area: 11798934.4411
                    },
                    arcs: [ [ -84, 115, -101, 116, 117, -79, 118, -77, -51, -112 ] ]
                } ]
            }
        },
        arcs: [ [ [ 6971, 4159 ], [ 106, -125 ], [ 25, 74 ], [ 173, -193 ] ], [ [ 7275, 3915 ], [ -86, -89 ], [ -231, -44 ] ], [ [ 6958, 3782 ], [ -89, -86 ], [ -97, 54 ], [ -101, -186 ] ], [ [ 6671, 3564 ], [ 95, -169 ] ], [ [ 6766, 3395 ], [ -11, -118 ], [ 102, -59 ] ], [ [ 6857, 3218 ], [ -22, -285 ], [ -76, -128 ], [ -177, 30 ], [ -142, 130 ], [ -166, -38 ], [ -136, -134 ], [ 188, -297 ], [ -119, -139 ], [ -106, -15 ], [ -26, -113 ], [ -203, -96 ], [ -19, 225 ], [ -484, -214 ], [ 13, -212 ], [ 50, -73 ], [ -276, -83 ], [ 6, -142 ], [ -160, 26 ], [ -84, -435 ], [ -367, 131 ], [ -123, -243 ], [ -175, -54 ], [ -52, -100 ], [ -172, -39 ], [ -391, 301 ], [ -132, -713 ], [ 54, -402 ], [ -28, -106 ], [ -134, 138 ], [ -23, 197 ], [ -171, -25 ], [ -60, -110 ], [ -76, 21 ], [ -99, 178 ], [ -166, -163 ], [ -35, 51 ], [ -330, -47 ], [ -108, 35 ], [ -69, 198 ], [ -184, 176 ], [ 54, 298 ], [ 138, 140 ], [ 180, -50 ], [ 77, 262 ], [ -99, 99 ], [ -209, -161 ], [ -100, -13 ], [ 52, 199 ], [ 201, 225 ], [ -15, 202 ], [ -85, 107 ], [ 165, 113 ], [ -240, 179 ] ], [ [ 2196, 2249 ], [ -95, -58 ], [ -78, 100 ], [ -105, -19 ], [ 25, 393 ], [ 69, 39 ], [ 151, 354 ], [ -118, 324 ], [ 129, 22 ], [ 100, 297 ], [ -24, 71 ], [ 185, 44 ], [ 242, 158 ], [ 31, -445 ], [ 151, 48 ], [ 54, -167 ], [ 280, 289 ], [ 97, -100 ] ], [ [ 3290, 3599 ], [ 313, 199 ] ], [ [ 3603, 3798 ], [ -32, -190 ], [ 164, -54 ], [ 56, 113 ], [ 296, -183 ], [ 15, -160 ], [ 138, 6 ], [ 69, 160 ], [ 128, -90 ], [ 263, 199 ], [ -17, -240 ], [ 80, -307 ], [ 284, 131 ], [ -138, 195 ], [ 91, 83 ], [ -138, 128 ], [ 82, 184 ] ], [ [ 4944, 3773 ], [ 503, -78 ] ], [ [ 5447, 3695 ], [ 11, -230 ] ], [ [ 5458, 3465 ], [ 60, -77 ], [ 246, -83 ], [ 169, 60 ], [ 58, -41 ], [ 382, 237 ], [ 171, 80 ] ], [ [ 6544, 3641 ], [ 172, 32 ] ], [ [ 6716, 3673 ], [ -136, 208 ], [ 37, 130 ] ], [ [ 6617, 4011 ], [ 71, -25 ], [ 158, 182 ], [ 125, -9 ] ], [ [ 6494, 5308 ], [ -20, -99 ] ], [ [ 6474, 5209 ], [ 415, 167 ], [ 47, 117 ] ], [ [ 6936, 5493 ], [ 182, -10 ], [ 73, -429 ], [ 108, 34 ] ], [ [ 7299, 5088 ], [ 28, -46 ] ], [ [ 7327, 5042 ], [ 15, -147 ], [ -63, 20 ] ], [ [ 7279, 4915 ], [ 42, -91 ], [ -41, -192 ] ], [ [ 7280, 4632 ], [ 235, -111 ] ], [ [ 7515, 4521 ], [ 188, 3 ], [ -11, 217 ], [ 142, -12 ] ], [ [ 7834, 4729 ], [ -10, 80 ], [ 127, 39 ] ], [ [ 7951, 4848 ], [ 155, -20 ] ], [ [ 8106, 4828 ], [ 2, 80 ], [ 113, -29 ] ], [ [ 8221, 4879 ], [ -28, 256 ] ], [ [ 8193, 5135 ], [ 93, -7 ] ], [ [ 8286, 5128 ], [ 21, -303 ], [ 123, -87 ], [ 136, 151 ] ], [ [ 8566, 4889 ], [ 73, -103 ], [ -23, -265 ], [ 80, -265 ], [ 203, 300 ], [ 271, -455 ], [ -207, -29 ], [ -17, -293 ], [ 279, -513 ], [ -20, -230 ], [ -145, -28 ], [ 22, -186 ], [ -101, -171 ], [ -165, 189 ], [ -90, -173 ], [ -35, 77 ], [ -116, -32 ], [ 181, -300 ], [ -142, -182 ], [ -128, 71 ], [ -99, -24 ], [ -143, 129 ], [ -64, -45 ], [ -119, 105 ], [ -65, -58 ], [ -52, 183 ], [ -82, -44 ], [ -34, 319 ], [ -153, -96 ], [ -11, 122 ], [ -108, -58 ], [ -43, 119 ], [ -112, -23 ], [ 14, 231 ], [ -293, -384 ], [ -110, 179 ], [ -173, 20 ], [ 18, 242 ] ], [ [ 6857, 3218 ], [ -100, 59 ], [ 9, 118 ] ], [ [ 6671, 3564 ], [ 103, 186 ], [ 95, -54 ], [ 89, 86 ] ], [ [ 7275, 3915 ], [ -172, 193 ], [ -26, -74 ], [ -106, 125 ] ], [ [ 6617, 4011 ], [ -35, -130 ], [ 134, -208 ] ], [ [ 6716, 3673 ], [ -172, -32 ] ], [ [ 6544, 3641 ], [ -169, -80 ], [ -382, -237 ], [ -60, 41 ], [ -169, -60 ], [ -255, 89 ], [ -51, 71 ] ], [ [ 5447, 3695 ], [ -205, 28 ], [ -138, 116 ] ], [ [ 5104, 3839 ], [ -35, 281 ] ], [ [ 5069, 4120 ], [ 358, 97 ], [ 28, 63 ] ], [ [ 5455, 4280 ], [ 39, -31 ] ], [ [ 5494, 4249 ], [ 63, 63 ], [ 201, 42 ] ], [ [ 5758, 4354 ], [ 73, 71 ], [ 24, 188 ] ], [ [ 5855, 4613 ], [ 170, 19 ] ], [ [ 6025, 4632 ], [ -15, 422 ] ], [ [ 6010, 5054 ], [ 58, 7 ], [ 42, 247 ] ], [ [ 6110, 5308 ], [ 75, 3 ], [ -6, 284 ] ], [ [ 6179, 5595 ], [ 110, 49 ], [ 205, -336 ] ], [ [ 3603, 3798 ], [ 44, 28 ] ], [ [ 3647, 3826 ], [ 155, 407 ], [ 162, 704 ], [ -22, 182 ] ], [ [ 3942, 5119 ], [ 145, -12 ] ], [ [ 4087, 5107 ], [ 253, 137 ], [ 51, 109 ], [ 84, -68 ] ], [ [ 4475, 5285 ], [ 285, -170 ] ], [ [ 4760, 5115 ], [ 91, -249 ], [ 61, 71 ], [ 194, -52 ], [ 19, -86 ], [ 167, 26 ], [ 105, -171 ], [ 143, -69 ], [ 84, -157 ], [ -45, -96 ] ], [ [ 5579, 4332 ], [ -85, -83 ] ], [ [ 5455, 4280 ], [ -28, -63 ], [ -358, -97 ] ], [ [ 5104, 3839 ], [ 125, -109 ], [ -285, 43 ] ], [ [ 3647, 3826 ], [ -357, -227 ] ], [ [ 2196, 2249 ], [ 41, -67 ], [ -313, -188 ], [ -86, 251 ], [ -80, -41 ], [ -80, 159 ], [ -108, 10 ], [ 15, 91 ], [ -145, 96 ], [ 119, 92 ], [ 5, 316 ], [ 118, -165 ], [ 104, -40 ], [ 106, 548 ], [ -15, 157 ], [ -322, 45 ], [ -58, -46 ], [ -214, 187 ], [ -320, 408 ], [ -67, 231 ], [ 50, 166 ], [ -58, 94 ], [ 110, 76 ], [ 24, -70 ] ], [ [ 1022, 4559 ], [ 490, 128 ], [ -24, 113 ], [ 157, 98 ], [ -4, 151 ], [ 369, 182 ], [ -10, 355 ] ], [ [ 2e3, 5586 ], [ 524, 87 ], [ 197, 64 ] ], [ [ 2721, 5737 ], [ 8, 47 ], [ 341, 52 ], [ 20, -68 ], [ 114, 68 ], [ 203, -67 ], [ 168, 90 ] ], [ [ 3575, 5859 ], [ 240, 54 ], [ 127, -794 ] ], [ [ 6367, 6053 ], [ 116, 19 ], [ 30, -169 ], [ 108, -38 ], [ 210, 105 ], [ 51, -140 ], [ 100, 37 ], [ 82, -261 ], [ 244, 86 ], [ -11, 192 ], [ 183, 25 ], [ 136, -405 ], [ 117, 143 ], [ 205, 96 ], [ 91, -198 ], [ 32, -240 ], [ 86, 42 ], [ 91, -215 ] ], [ [ 8238, 5132 ], [ -45, 3 ] ], [ [ 8221, 4879 ], [ -115, 29 ], [ 0, -80 ] ], [ [ 7951, 4848 ], [ -127, -39 ], [ 10, -80 ] ], [ [ 7515, 4521 ], [ -235, 111 ] ], [ [ 7280, 4632 ], [ 39, 192 ], [ -40, 91 ] ], [ [ 7279, 4915 ], [ 48, 127 ] ], [ [ 7299, 5088 ], [ -110, -34 ], [ -73, 429 ], [ -180, 10 ] ], [ [ 6936, 5493 ], [ -49, -117 ], [ -413, -167 ] ], [ [ 6494, 5308 ], [ -207, 336 ], [ -108, -49 ] ], [ [ 6110, 5308 ], [ -44, -247 ], [ -56, -7 ] ], [ [ 6025, 4632 ], [ -170, -19 ] ], [ [ 5758, 4354 ], [ -179, -22 ] ], [ [ 4760, 5115 ], [ -285, 170 ] ], [ [ 4475, 5285 ], [ 158, 71 ], [ -123, 180 ], [ 138, 15 ], [ -13, 115 ], [ 618, 39 ], [ -42, 131 ], [ 130, 45 ], [ -11, 127 ] ], [ [ 5330, 6008 ], [ 214, 173 ], [ 227, 92 ] ], [ [ 5771, 6273 ], [ 209, -40 ], [ 104, -94 ], [ 304, 170 ] ], [ [ 6388, 6309 ], [ 20, -83 ] ], [ [ 6408, 6226 ], [ -80, -35 ] ], [ [ 6328, 6191 ], [ 39, -138 ] ], [ [ 5255, 6613 ], [ 6, -20 ] ], [ [ 5261, 6593 ], [ -160, -169 ], [ -695, -262 ] ], [ [ 4406, 6162 ], [ -21, 307 ], [ 166, 42 ], [ 268, 228 ], [ 64, 174 ] ], [ [ 4883, 6913 ], [ -32, 194 ] ], [ [ 4851, 7107 ], [ -123, 152 ], [ -162, 23 ], [ -73, 100 ], [ -177, 15 ], [ 17, 305 ], [ -214, -126 ], [ -2, 144 ], [ -306, 80 ], [ -52, 195 ], [ -115, -35 ] ], [ [ 3644, 7960 ], [ -179, 289 ] ], [ [ 3465, 8249 ], [ 121, 307 ] ], [ [ 3586, 8556 ], [ 39, 189 ], [ 149, -39 ], [ 319, 121 ], [ -51, 132 ], [ 185, 25 ], [ -17, 176 ], [ 164, 61 ], [ 13, -68 ], [ 315, 14 ], [ 255, 89 ], [ -5, 209 ], [ 61, 24 ], [ 2, 174 ], [ 276, 15 ], [ -13, 103 ], [ 568, -36 ], [ 46, 115 ], [ 218, 30 ], [ 151, 109 ], [ 116, -10 ], [ 4, -413 ], [ -45, -48 ], [ 78, -204 ], [ 127, 150 ], [ 43, -106 ], [ 169, 151 ], [ 52, -103 ], [ 157, -73 ], [ 44, -253 ], [ -383, -300 ] ], [ [ 6623, 8790 ], [ -6, -282 ], [ -186, -93 ], [ 5, -387 ], [ -195, -86 ], [ -155, -263 ], [ -229, 182 ], [ -186, 16 ], [ -13, 163 ], [ -185, -22 ] ], [ [ 5473, 8018 ], [ -138, -199 ] ], [ [ 5335, 7819 ], [ 25, -143 ] ], [ [ 5360, 7676 ], [ -161, -203 ] ], [ [ 5199, 7473 ], [ 269, -69 ] ], [ [ 5468, 7404 ], [ 74, -169 ], [ -231, -155 ], [ -7, -316 ], [ -49, -151 ] ], [ [ 8286, 5128 ], [ -48, 4 ] ], [ [ 6367, 6053 ], [ -39, 138 ] ], [ [ 6408, 6226 ], [ -78, 349 ] ], [ [ 6330, 6575 ], [ 62, 220 ], [ -86, 183 ] ], [ [ 6306, 6978 ], [ 47, 148 ], [ -144, -7 ], [ -74, -362 ], [ -181, -131 ], [ -335, -95 ], [ -43, 133 ] ], [ [ 5576, 6664 ], [ -306, -99 ], [ -15, 48 ] ], [ [ 5468, 7404 ], [ -269, 69 ] ], [ [ 5199, 7473 ], [ 161, 203 ] ], [ [ 5335, 7819 ], [ 138, 199 ] ], [ [ 6623, 8790 ], [ 337, 271 ], [ 48, -182 ], [ 326, -36 ], [ 121, 145 ], [ 304, 22 ], [ -113, -173 ], [ -8, -103 ], [ -99, -21 ], [ 62, -190 ], [ -34, -128 ], [ 231, -439 ], [ 162, -94 ], [ 248, 102 ], [ 24, -71 ], [ 220, 87 ], [ 60, -253 ], [ 255, 10 ], [ 242, -67 ], [ -35, -682 ], [ 65, 0 ], [ 110, -164 ], [ 56, 55 ], [ 171, -99 ], [ 280, -42 ], [ -34, -185 ], [ 341, -237 ], [ 36, -157 ], [ -142, -631 ], [ -190, -5 ], [ -334, -190 ], [ -158, -160 ], [ -326, -77 ], [ 15, -102 ], [ -298, -105 ] ], [ [ 2721, 5737 ], [ -186, -61 ], [ -535, -90 ] ], [ [ 1022, 4559 ], [ -63, 214 ], [ -153, -86 ], [ -41, 137 ], [ -106, -47 ], [ -34, 112 ], [ -156, 53 ], [ -11, 165 ], [ 231, 93 ], [ -13, 303 ], [ 507, 118 ], [ 162, -48 ], [ -6, 118 ], [ -102, 97 ], [ 7, 125 ], [ -210, -4 ], [ -40, 278 ], [ -106, -80 ], [ -149, 56 ], [ -2, 392 ], [ -136, 32 ], [ 82, 99 ], [ -177, 173 ], [ -268, -104 ], [ -84, 53 ], [ -132, -80 ], [ -22, 154 ], [ 288, 138 ], [ -11, 192 ], [ 131, -77 ], [ 309, 147 ], [ 391, 240 ], [ 121, -154 ], [ 261, 218 ], [ -52, 177 ], [ 115, 79 ], [ 45, 147 ], [ 164, -99 ], [ 115, 36 ], [ -3, -241 ], [ 102, -326 ], [ 144, 64 ], [ 691, -32 ], [ 20, 83 ], [ -126, 276 ], [ 91, 214 ], [ -63, 76 ] ], [ [ 2733, 8040 ], [ 203, 10 ], [ 9, -112 ], [ 190, -131 ], [ 112, 173 ], [ 138, -97 ], [ 5, -130 ], [ 95, -72 ], [ 11, -217 ], [ -54, -70 ], [ 66, -269 ], [ 31, -473 ], [ -37, -84 ], [ -283, 74 ], [ -302, -131 ], [ 60, -262 ], [ 186, -10 ], [ 197, -164 ], [ 17, -86 ], [ 198, -130 ] ], [ [ 3465, 8249 ], [ 179, -289 ] ], [ [ 4851, 7107 ], [ 32, -194 ] ], [ [ 4406, 6162 ], [ -97, -253 ], [ 35, -198 ], [ -86, -380 ], [ -83, -4 ], [ -97, -118 ], [ 9, -102 ] ], [ [ 4087, 5107 ], [ -145, 12 ] ], [ [ 3942, 5119 ], [ -127, 797 ], [ -240, -57 ] ], [ [ 2733, 8040 ], [ -19, 419 ], [ 125, 231 ], [ 117, 32 ], [ 356, -19 ], [ 183, -240 ], [ 91, 93 ] ], [ [ 5261, 6593 ], [ 315, 71 ] ], [ [ 6306, 6978 ], [ 84, -169 ], [ -60, -234 ] ], [ [ 6330, 6575 ], [ 58, -266 ] ], [ [ 5771, 6273 ], [ -242, -99 ], [ -199, -166 ] ] ],
        transform: {
            scale: [ 48143582780001194e-21, 23557644427629977e-21 ],
            translate: [ 14.226532719236662, 49.94266665156152 ]
        }
    }
};

(function() {
    var x$, style;
    x$ = style = document.createElement("style");
    x$.innerHTML = ig.data.style;
    document.getElementsByTagName("head")[0].appendChild(style);
}).call(this);

(function() {
    var Tooltip;
    window.Tooltip = Tooltip = function() {
        Tooltip.displayName = "Tooltip";
        var prototype = Tooltip.prototype, constructor = Tooltip;
        Tooltip.counter = 0;
        function Tooltip(options) {
            var ref$;
            this.options = options != null ? options : {};
            this.onMouseMove = bind$(this, "onMouseMove", prototype);
            this.eventId = "tooltip-" + constructor.counter++;
            (ref$ = this.options).parent == null && (ref$.parent = d3.select("body"));
            d3.select(document).on("mousemove." + this.eventId, bind$(this, "onMouseMove"));
        }
        prototype.watchElements = function() {
            var this$ = this;
            d3.select(document).on("mouseover." + this.eventId, function() {
                var currentTarget, content;
                currentTarget = d3.event.target;
                do {
                    content = currentTarget.getAttribute("data-tooltip");
                    currentTarget = currentTarget.parentNode;
                } while (currentTarget !== document && content === null);
                if (!content) {
                    return;
                }
                content = unescape(content);
                if (!content.length) {
                    return;
                }
                return this$.display(content);
            });
            return d3.select(document).on("mouseout." + this.eventId, bind$(this, "hide"));
        };
        prototype.display = function(content) {
            var x$;
            x$ = this.$element = this.options.parent.append("div");
            x$.attr("class", "tooltip");
            x$.html(content);
            return this.setPositionByMouse();
        };
        prototype.hide = function() {
            if (!this.$element) {
                return;
            }
            this.$element.remove();
            this.$element = null;
            return this.mouseBound = false;
        };
        prototype.reposition = function(arg$) {
            var left, top, clientLeft, clientTop, dX, dY, element, width, maxLeft, topMargin, x$;
            left = arg$[0], top = arg$[1], clientLeft = arg$[2], clientTop = arg$[3];
            dX = left - clientLeft;
            dY = top - clientTop;
            element = this.$element[0][0];
            width = element.offsetWidth;
            left -= width / 2;
            maxLeft = (window.innerWidth || document.documentElement.clientWidth) - width;
            top -= element.offsetHeight;
            left = Math.max(dX, left);
            left = Math.min(left, dX + maxLeft);
            if (top <= 19 + dY) {
                topMargin = -20;
                top += element.offsetHeight - 2 * topMargin;
            }
            x$ = this.$element;
            x$.style("left", left + "px");
            x$.style("top", top + "px");
            return x$;
        };
        prototype.setPositionByMouse = function() {
            this.mouseBound = true;
            if (this.lastMousePosition) {
                return this.reposition(this.lastMousePosition);
            }
        };
        prototype.onMouseMove = function() {
            var evt;
            evt = d3.event;
            this.lastMousePosition = [ evt.pageX || evt.clientX, evt.pageY || evt.clientY, evt.clientX, evt.clientY ];
            if (this.mouseBound) {
                return this.reposition(this.lastMousePosition);
            }
        };
        return Tooltip;
    }();
    function bind$(obj, key, target) {
        return function() {
            return (target || obj)[key].apply(obj, arguments);
        };
    }
}).call(this);

(function() {
    window.ig.Events = function(target) {
        var events;
        target == null && (target = null);
        events = {};
        target == null && (target = this);
        target.on = function(type, func) {
            events[type] == null && (events[type] = []);
            return events[type].push(func);
        };
        target.off = function(type, func) {
            var list, i, results$ = [];
            list = events[type];
            if (func) {
                i = list.length = func != null ? func : {
                    length: list[0]
                };
                while (i-- > 0) {
                    if (func === list[i]) {
                        results$.push(list.splice(i, 1));
                    }
                }
                return results$;
            } else {
                return list.length = 0;
            }
        };
        return target.emit = function(type) {
            var args, res$, i$, to$, list, len$, cb, results$ = [];
            res$ = [];
            for (i$ = 1, to$ = arguments.length; i$ < to$; ++i$) {
                res$.push(arguments[i$]);
            }
            args = res$;
            list = events[type] || [];
            for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
                cb = list[i$];
                results$.push(cb.apply(null, args));
            }
            return results$;
        };
    };
}).call(this);

(function() {
    var Player;
    window.ig.Player = Player = function() {
        Player.displayName = "Player";
        var prototype = Player.prototype, constructor = Player;
        function Player(slider) {
            this.slider = slider;
            this.startTime = this.slider.startTime;
            this.endTime = this.slider.endTime + 86400 * 30 * 1e3;
            this.slider.on("interaction", bind$(this, "stop"));
        }
        Player.prototype.start = function() {
            this.stopping = false;
            this.time = this.startTime;
            return requestAnimationFrame(bind$(this, "next"));
        };
        Player.prototype.next = function() {
            if (this.stopping) {
                return;
            }
            this.slider.setTime(this.time);
            this.time += 86400 * 1e3 * 8;
            if (this.time > this.endTime) {
                return this.stop();
            } else {
                return requestAnimationFrame(bind$(this, "next"));
            }
        };
        Player.prototype.stop = function() {
            return this.stopping = true;
        };
        return Player;
    }();
    function bind$(obj, key, target) {
        return function() {
            return (target || obj)[key].apply(obj, arguments);
        };
    }
}).call(this);

(function() {
    var Senat;
    window.ig.Senat = Senat = function() {
        Senat.displayName = "Senat";
        var prototype = Senat.prototype, constructor = Senat;
        Senat.prototype.kostSide = 35;
        function Senat(baseElement, data) {
            this.baseElement = baseElement;
            this.data = data;
            this.first = true;
            this.init();
            this.drawTime(new Date().getTime());
        }
        Senat.prototype.drawTime = function(time) {
            var res$, obvodId, ref$, obvod, i$, len$, senator, changed, x$, target, this$ = this;
            res$ = [];
            for (obvodId in ref$ = this.data) {
                obvod = ref$[obvodId];
                obvod.usableSenator = null;
                for (i$ = 0, len$ = obvod.length; i$ < len$; ++i$) {
                    senator = obvod[i$];
                    if (senator.time <= time) {
                        obvod.usableSenator = senator;
                    } else {
                        break;
                    }
                }
                if (obvod.usableSenator !== obvod.lastUsableSenator) {
                    obvod.senatorChanged = true;
                    obvod.lastUsableSenator = obvod.usableSenator;
                } else {
                    obvod.senatorChanged = false;
                }
                res$.push(obvod.usableSenator);
            }
            this.currentMandaty = res$;
            changed = this.mandaty.filter(function(it) {
                return this$.data[it.properties.obvod].senatorChanged;
            });
            x$ = changed;
            x$.attr("data-tooltip", function(it) {
                var d;
                d = this$.data[it.properties.obvod].usableSenator;
                return "<b>" + d.vitez + "</b><br>" + d.vitezStrana + "<br><em>Obvod č. " + it.properties.obvod + " &ndash; " + ig.obvodyNazvy[it.properties.obvod] + "</em>";
            });
            target = this.first ? changed : changed.transition().duration(400);
            this.first = false;
            return target.attr("fill", function(it) {
                return this$.data[it.properties.obvod].usableSenator.strana.color;
            });
        };
        Senat.prototype.init = function() {
            var rows, width, features, ref$, height, projection, x$, path, y$, z$, z1$, z2$, prahaFeatures, i$, len$, feature, z3$, z4$, z5$, brnoFeatures, z6$, z7$, z8$, ostravaFeatures, z9$, z10$, z11$, mesto, z12$, results$ = [];
            rows = 5;
            width = 390;
            features = topojson.feature(window.ig.data.mapa, window.ig.data.mapa.objects["data"]).features;
            ref$ = ig.utils.geo.getFittingProjection(features, width), width = ref$.width, height = ref$.height, 
            projection = ref$.projection;
            x$ = path = d3.geo.path();
            x$.projection(projection);
            y$ = this.svg = this.baseElement.append("svg");
            y$.attr("width", 610);
            y$.attr("height", 310);
            z$ = this.svg;
            z1$ = z$.append("g").attr("class", "republic");
            z2$ = z1$.selectAll("path").data(features).enter().append("path");
            z2$.attr("d", path);
            prahaFeatures = topojson.feature(window.ig.data.praha, window.ig.data.praha.objects["data"]).features;
            for (i$ = 0, len$ = prahaFeatures.length; i$ < len$; ++i$) {
                feature = prahaFeatures[i$];
                feature.properties.obvod = feature.properties.senat_obvo;
            }
            projection = ig.utils.geo.getFittingProjection(prahaFeatures, 180).projection;
            path.projection(projection);
            z3$ = this.svg;
            z4$ = z3$.append("g").attr("class", "praha");
            z4$.attr("transform", "translate(400, 0)");
            z5$ = z4$.selectAll("path").data(prahaFeatures).enter().append("path");
            z5$.attr("d", path);
            brnoFeatures = features.filter(function(it) {
                var ref$;
                return (ref$ = it.properties.obvod) === 55 || ref$ === 58 || ref$ === 59 || ref$ === 60;
            });
            projection = ig.utils.geo.getFittingProjection(brnoFeatures, 80).projection;
            path.projection(projection);
            z6$ = this.svg;
            z7$ = z6$.append("g").attr("class", "brno");
            z7$.attr("transform", "translate(380, 170)");
            z8$ = z7$.selectAll("path").data(brnoFeatures).enter().append("path");
            z8$.attr("d", path);
            ostravaFeatures = features.filter(function(it) {
                var ref$;
                return (ref$ = it.properties.obvod) === 70 || ref$ === 71 || ref$ === 72;
            });
            projection = ig.utils.geo.getFittingProjection(ostravaFeatures, 107).projection;
            path.projection(projection);
            z9$ = this.svg;
            z10$ = z9$.append("g").attr("class", "ostrava");
            z10$.attr("transform", "translate(500, 159)");
            z11$ = z10$.selectAll("path").data(ostravaFeatures).enter().append("path");
            z11$.attr("d", path);
            this.mandaty = this.svg.selectAll("path");
            for (i$ = 0, len$ = (ref$ = [ "Praha", "Brno", "Ostrava" ]).length; i$ < len$; ++i$) {
                mesto = ref$[i$];
                z12$ = this.baseElement.append("div");
                z12$.attr("class", "sipka " + mesto.toLowerCase());
                z12$.append("span").html(mesto);
                z12$.append("div");
                results$.push(z12$);
            }
            return results$;
        };
        return Senat;
    }();
}).call(this);

(function() {
    var Slider;
    window.ig.Slider = Slider = function() {
        Slider.displayName = "Slider";
        var prototype = Slider.prototype, constructor = Slider;
        function Slider(baseElement, volby) {
            var ref$, x$, y$, z$, ticksElem, z1$, z2$, z3$, z4$, z5$, this$ = this;
            this.baseElement = baseElement;
            this.volby = volby;
            window.ig.Events(this);
            this.startTime = this.volby[0].date.getTime();
            this.currentTime = this.endTime = (ref$ = this.volby)[ref$.length - 1].date.getTime();
            x$ = this.scale = d3.scale.linear();
            x$.domain([ this.startTime, this.endTime ]);
            var sliderWidth = screen.width < 600 ? 320 : 600;
            x$.range([ 0, sliderWidth ]);
            y$ = this.element = this.baseElement.append("div");
            y$.attr("class", "slider");
            z$ = y$.append("div");
            z$.attr("class", "hline");
            y$.on("touchstart", function() {
                this$.element.on("touchmove", null);
                d3.event.preventDefault();
                this$.onInteraction();
                this$.baseElement.on("touchmove", bind$(this$, "onInteraction"));
                return this$.baseElement.on("touchcancel", function() {
                    this$.baseElement.on("touchmove", null);
                    return this$.baseElement.on("touchcancel", null);
                });
            });
            y$.on("click", bind$(this, "onInteraction"));
            y$.on("mousedown", function() {
                this$.element.on("mousemove", null);
                d3.event.preventDefault();
                this$.onInteraction();
                this$.baseElement.on("mousemove", bind$(this$, "onInteraction"));
                return d3.select("body").on("mouseup", function() {
                    this$.baseElement.on("mousemove", null);
                    return this$.baseElement.on("mouseup", null);
                });
            });
            ticksElem = this.element.append("div").attr("class", "ticks");
            z1$ = this.ticks = ticksElem.selectAll(".tick").data(this.volby).enter().append("div");
            z1$.attr("class", "tick");
            z1$.classed("small", function(it) {
                return !it.radne;
            });
            z1$.style("left", function(it) {
                return this$.scale(it.date.getTime()) + "px";
            });
            z2$ = z1$.append("div");
            z2$.attr("class", "year");
            z2$.html(function(it) {
                return it.date.getFullYear();
            });
            z1$.append("div").attr("class", "line");
            this.selection = this.element.append("div").attr("class", "selection");
            this.repositionSelection((ref$ = this.volby)[ref$.length - 1].date.getTime());
            z3$ = this.buttons = this.baseElement.append("div");
            z3$.attr("class", "buttons");
            z4$ = this.prevButton = this.buttons.append("button");
            z4$.html("&laquo;");
            z4$.attr("class", "prev");
            z4$.on("click", function() {
                var tgt, i$, ref$, len$, volba;
                tgt = this$.endTime;
                for (i$ = 0, len$ = (ref$ = this$.volby).length; i$ < len$; ++i$) {
                    volba = ref$[i$];
                    if (volba.date.getTime() < this$.currentTime) {
                        tgt = volba.date.getTime();
                    }
                }
                this$.setTime(tgt);
                this$.emit("interaction");
                return this$.element.on("mousemove", null);
            });
            z5$ = this.nextButton = this.buttons.append("button");
            z5$.html("&raquo;");
            z5$.attr("class", "next");
            z5$.on("click", function() {
                var tgt, i$, ref$, len$, volba;
                tgt = this$.startTime;
                for (i$ = 0, len$ = (ref$ = this$.volby).length; i$ < len$; ++i$) {
                    volba = ref$[i$];
                    if (volba.date.getTime() > this$.currentTime) {
                        tgt = volba.date.getTime();
                        break;
                    }
                }
                this$.setTime(tgt);
                this$.emit("interaction");
                return this$.element.on("mousemove", null);
            });
        }
        Slider.prototype.onInteraction = function() {
            var x, time;
            this.emit("interaction");
            x = d3.mouse(d3.event.currentTarget)[0];
            time = this.scale.invert(x);
            return this.setTime(time);
        };
        Slider.prototype.setTime = function(time) {
            if (time < this.startTime) {
                time = this.startTime;
            }
            if (time > this.endTime) {
                time = this.endTime;
            }
            this.currentTime = time;
            this.repositionSelection(time);
            return this.emit("time", time);
        };
        Slider.prototype.repositionSelection = function(time) {
            return this.selection.style("left", this.scale(time) + "px");
        };
        return Slider;
    }();
    function bind$(obj, key, target) {
        return function() {
            return (target || obj)[key].apply(obj, arguments);
        };
    }
}).call(this);

(function() {
    var Souhrn;
    window.ig.Souhrn = Souhrn = function() {
        Souhrn.displayName = "Souhrn";
        var prototype = Souhrn.prototype, constructor = Souhrn;
        function Souhrn(baseElement, senat, strany) {
            var x$, y$, z$, z1$;
            this.baseElement = baseElement;
            this.senat = senat;
            this.strany = strany;
            x$ = this.baseElement.append("h4");
            x$.attr("class", "souhrn-nadpis");
            y$ = x$.append("span");
            y$.html("Počet mandátů");
            z$ = x$.append("span");
            z$.attr("class", "arrow");
            z1$ = this.element = this.baseElement.append("ul");
            z1$.attr("class", "souhrn");
            this.draw();
        }
        Souhrn.prototype.draw = function() {
            var currentStranyAssoc, i$, ref$, len$, mandat, stranaReal, currentStrany, res$, strana, count, index, x$, y$, z$, z1$, z2$, z3$, z4$, this$ = this;
            currentStranyAssoc = {};
            for (i$ = 0, len$ = (ref$ = this.senat.currentMandaty).length; i$ < len$; ++i$) {
                mandat = ref$[i$];
                stranaReal = this.strany[mandat.vitezStrana] && this.strany[mandat.vitezStrana].ordering <= 11 ? mandat.vitezStrana : "Ostatní";
                currentStranyAssoc[stranaReal] == null && (currentStranyAssoc[stranaReal] = 0);
                currentStranyAssoc[stranaReal]++;
            }
            res$ = [];
            for (strana in currentStranyAssoc) {
                count = currentStranyAssoc[strana];
                res$.push({
                    strana: strana,
                    count: count
                });
            }
            currentStrany = res$;
            currentStrany.sort(function(a, b) {
                return b.count - a.count;
            });
            for (i$ = 0, len$ = currentStrany.length; i$ < len$; ++i$) {
                index = i$;
                strana = currentStrany[i$];
                strana.index = index;
            }
            x$ = this.element.selectAll("li.active").data(currentStrany, function(it) {
                return it.strana;
            });
            y$ = x$.enter().append("li");
            y$.attr("class", "active");
            y$.attr("data-tooltip", function(it) {
                return it.strana;
            });
            z$ = y$.append("span");
            z$.attr("class", "kost");
            z$.style("background-color", function(it) {
                var ref$;
                return ((ref$ = this$.strany[it.strana]) != null ? ref$.color : void 8) || "#999";
            });
            z1$ = y$.append("span");
            z1$.attr("class", "count");
            z2$ = x$.exit();
            z2$.classed("active", false);
            z3$ = z2$.transition();
            z3$.duration(600);
            z3$.remove();
            x$.style("left", function(it) {
                var width = 68;
                if (screen.width < 600) width = 80;
                return it.index * width + "px";
            });
            z4$ = x$.select("span.count");
            z4$.html(function(it) {
                var partyName = "";
                if (screen.width < 600) partyName = "<b>" + it.strana + "</b><br>";
                return partyName + " " + it.count + "";
            });
            return x$;
        };
        return Souhrn;
    }();
}).call(this);

(function() {
    var utils, insertThousandSeparator, slice$ = [].slice, arrayFrom$ = Array.from || function(x) {
        return slice$.call(x);
    };
    ig.utils = utils = {};
    utils.offset = function(element, side) {
        var top, left;
        top = 0;
        left = 0;
        do {
            top += element.offsetTop;
            left += element.offsetLeft;
        } while (element = element.offsetParent);
        return {
            top: top,
            left: left
        };
    };
    utils.deminifyData = function(minified) {
        var out, res$, i$, ref$, len$, row, row_out, j$, ref1$, len1$, index, column, indices;
        res$ = [];
        for (i$ = 0, len$ = (ref$ = minified.data).length; i$ < len$; ++i$) {
            row = ref$[i$];
            row_out = {};
            for (j$ = 0, len1$ = (ref1$ = minified.columns).length; j$ < len1$; ++j$) {
                index = j$;
                column = ref1$[j$];
                row_out[column] = row[index];
            }
            for (column in ref1$ = minified.indices) {
                indices = ref1$[column];
                row_out[column] = indices[row_out[column]];
            }
            res$.push(row_out);
        }
        out = res$;
        return out;
    };
    utils.formatNumber = function(input, decimalPoints) {
        var wholePart, decimalPart;
        decimalPoints == null && (decimalPoints = 0);
        input = parseFloat(input);
        if (decimalPoints) {
            wholePart = Math.floor(input);
            decimalPart = input % 1;
            wholePart = insertThousandSeparator(wholePart);
            decimalPart = Math.round(decimalPart * Math.pow(10, decimalPoints));
            decimalPart = decimalPart.toString();
            while (decimalPart.length < decimalPoints) {
                decimalPart = "0" + decimalPart;
            }
            return wholePart + "," + decimalPart;
        } else {
            wholePart = Math.round(input);
            return insertThousandSeparator(wholePart);
        }
    };
    insertThousandSeparator = function(input, separator) {
        var price, out, len, i$, ref$, len$, i, isLast, isThirdNumeral;
        separator == null && (separator = " ");
        price = Math.round(input).toString();
        out = [];
        len = price.length;
        for (i$ = 0, len$ = (ref$ = [ 0 ].concat(arrayFrom$(len))).length; i$ < len$; ++i$) {
            i = ref$[i$];
            out.unshift(price[len - i - 1]);
            isLast = i === len - 1;
            isThirdNumeral = 2 === i % 3;
            if (isThirdNumeral && !isLast) {
                out.unshift(separator);
            }
        }
        return out.join("");
    };
}).call(this);

(function() {
    var geoUtils;
    window.ig.utils.geo = geoUtils = {};
    geoUtils.getFittingProjection = function(features, width) {
        var bounds, projection, ref$, height;
        bounds = geoUtils.getBounds(features);
        projection = geoUtils.getProjection(bounds, width);
        ref$ = geoUtils.getDimensions(bounds, projection), width = ref$.width, height = ref$.height;
        return {
            width: width,
            height: height,
            projection: projection
        };
    };
    geoUtils.getBounds = function(features) {
        var north, west, south, east, i$, len$, feature, ref$, ref1$, w, s, e, n;
        north = -Infinity;
        west = +Infinity;
        south = +Infinity;
        east = -Infinity;
        for (i$ = 0, len$ = features.length; i$ < len$; ++i$) {
            feature = features[i$];
            ref$ = d3.geo.bounds(feature), ref1$ = ref$[0], w = ref1$[0], s = ref1$[1], ref1$ = ref$[1], 
            e = ref1$[0], n = ref1$[1];
            if (n > north) {
                north = n;
            }
            if (w < west) {
                west = w;
            }
            if (s < south) {
                south = s;
            }
            if (e > east) {
                east = e;
            }
        }
        return [ [ west, south ], [ east, north ] ];
    };
    geoUtils.getProjection = function(bounds, width) {
        var ref$, west, south, east, north, displayedPercent, x$, projection;
        ref$ = bounds[0], west = ref$[0], south = ref$[1], ref$ = bounds[1], east = ref$[0], 
        north = ref$[1];
        displayedPercent = Math.abs(west - east) / 360;
        x$ = projection = d3.geo.mercator();
        x$.scale(width / (Math.PI * 2 * displayedPercent));
        x$.center([ west, north ]);
        x$.translate([ 0, 0 ]);
        return x$;
    };
    geoUtils.getDimensions = function(bounds, projection) {
        var ref$, west, south, east, north, x0, y0, x1, y1, width, height;
        ref$ = bounds[0], west = ref$[0], south = ref$[1], ref$ = bounds[1], east = ref$[0], 
        north = ref$[1];
        ref$ = projection([ west, north ]), x0 = ref$[0], y0 = ref$[1];
        ref$ = projection([ east, south ]), x1 = ref$[0], y1 = ref$[1];
        width = x1 - x0;
        height = y1 - y0;
        return {
            width: width,
            height: height
        };
    };
}).call(this);

(function() {
    var strany, radneVolby, volby_assoc, csvTransformer, init;
    strany = {
        ODS: {
            color: "#427aba",
            ordering: 1
        },
        "ČSSD": {
            color: "#f18240",
            ordering: 2
        },
        "KDU-ČSL": {
            color: "#ffff40",
            ordering: 3
        },
        "4KOALICE": {
            color: "#00A161",
            ordering: 4
        },
        "US-DEU": {
            color: "#9F218D",
            ordering: 5
        },
        "KSČM": {
            color: "#e3001a",
            ordering: 6
        },
        ODA: {
            color: "#85a9db",
            ordering: 7
        },
        "Zelení": {
            color: "#0FB103",
            ordering: 8
        },
        ANO: {
            color: "#253063",
            ordering: 9
        },
        "TOP 09": {
            color: "#77307b",
            ordering: 10
        },
        SPOZ: {
            color: "#FBB5B7",
            ordering: 11
        },
        NK: {
            color: "#aaa",
            ordering: 12
        },
        STAN: {
            color: "#888",
            ordering: 13
        },
        NEZ: {
            color: "#999",
            ordering: 15
        },
        "SNK ED": {
            color: "#aaa",
            ordering: 16
        },
        "S.cz": {
            color: "#bbb",
            ordering: 17
        },
        DEU: {
            color: "#ccc",
            ordering: 18
        },
        CZ: {
            color: "#ddd",
            ordering: 19
        },
        HNHRM: {
            color: "#777",
            ordering: 20
        },
        LIB: {
            color: "#666",
            ordering: 21
        },
        "SD-SN": {
            color: "#555",
            ordering: 22
        },
        SOS: {
            color: "#444",
            ordering: 23
        },
        "Nestran.": {
            color: "#555",
            ordering: 25
        },
        "Piráti": {
            color: "#292829",
            ordering: 26
        },
        Ostravak: {
            color: "#777",
            ordering: 27
        },
        SLK: {
            color: "#888",
            ordering: 28
        },
        "Soukromníci": {
            color: "#999",
            ordering: 30
        },
        "SEN 21": {
            color: "#008a92",
            ordering: 31
        },
        OPAT: {
            color: "#036937",
            ordering: 32
        },
        "HPP 11": {
            color: "#ceb00e",
            ordering: 33
        },
        '"OSN"': {
            color: "#eaeaea",
            ordering: 34
        }
    };
    radneVolby = {
        19961116: 1,
        19981114: 1,
        20001112: 1,
        20021025: 1,
        20041105: 1,
        20061020: 1,
        20081017: 1,
        20121012: 1,
        20101015: 1,
        20141010: 1,
        20161007: 1,
        20181005: 1
    };
    window.ig.obvodyNazvy = [ "prd", "Karlovy Vary", "Sokolov", "Cheb", "Most", "Chomutov", "Louny", "Plzeň-město", "Rokycany", "Plzeň-město", "Český Krumlov", "Domažlice", "Strakonice", "Tábor", "České Budějovice", "Pelhřimov", "Beroun", "Praha 12", "Příbram", "Praha 11", "Praha 4", "Praha 5", "Praha 10", "Praha 8", "Praha 9", "Praha 6", "Praha 2", "Praha 1", "Mělník", "Litoměřice", "Kladno", "Ústí nad Labem", "Teplice", "Děčín", "Liberec", "Jablonec nad Nisou", "Česká Lípa", "Jičín", "Mladá Boleslav", "Trutnov", "Kutná Hora", "Benešov", "Kolín", "Pardubice", "Chrudim", "Hradec Králové", "Ústí nad Orlicí", "Náchod", "Rychnov nad Kněžnou", "Blansko", "Svitavy", "Žďár nad Sázavou", "Jihlava", "Třebíč", "Znojmo", "Brno-město", "Břeclav", "Vyškov", "Brno-město", "Brno-město", "Brno-město", "Olomouc", "Prostějov", "Přerov", "Bruntál", "Šumperk", "Olomouc", "Nový Jičín", "Opava", "Frýdek-Místek", "Ostrava-město", "Ostrava-město", "Ostrava-město", "Frýdek-Místek", "Karviná", "Karviná", "Kroměříž", "Vsetín", "Zlín", "Hodonín", "Zlín", "Uherské Hradiště" ];
    volby_assoc = {};
    csvTransformer = function(row) {
        var x$, date, radne;
        x$ = date = new Date();
        x$.setTime(0);
        x$.setFullYear(parseInt(row.datum.substr(0, 4), 10));
        x$.setMonth(-1 + parseInt(row.datum.substr(4, 2), 10));
        x$.setDate(parseInt(row.datum.substr(6, 2), 10));
        row.date = date;
        row.time = date.getTime();
        row.obvod = parseInt(row.obvod, 10);
        radne = radneVolby[row.datum] !== void 8;
        row.strana = strany[row.vitezStrana];
        volby_assoc[row.time] = {
            date: date,
            radne: radne
        };
        return row;
    };
    init = function() {
        var csv, obvody, i$, len$, mandat, key$, index, obvod, volby, res$, time, ref$, volba, container, x$, heading, senat, souhrn, y$, slider, player, z$, playBtn;
        new Tooltip().watchElements();
        csv = d3.csv.parse(window.ig.data.senatori, csvTransformer);
        obvody = {};
        for (i$ = 0, len$ = csv.length; i$ < len$; ++i$) {
            mandat = csv[i$];
            obvody[key$ = mandat.obvod] == null && (obvody[key$] = []);
            obvody[mandat.obvod].push(mandat);
        }
        for (index in obvody) {
            obvod = obvody[index];
            obvod.sort(fn$);
        }
        res$ = [];
        for (time in ref$ = volby_assoc) {
            volba = ref$[time];
            res$.push(volba);
        }
        volby = res$;
        volby.sort(function(a, b) {
            if (a.date > b.date) {
                return 1;
            } else {
                return -1;
            }
        });
        container = d3.select(ig.containers.base);
        x$ = heading = container.append("h2");
        x$.html("Stav po volbách 13. 10. 2018 (řádné)");
        senat = new window.ig.Senat(container, obvody);
        div$ = footer = container.append("div");
        div$.attr("class", "mapfooter");
        souhrn = new window.ig.Souhrn(footer, senat, strany);
        y$ = slider = new window.ig.Slider(footer, volby);
        y$.on("time", function(it) {
            var x$, date, lastVolby, i$, ref$, len$, volba, radne;
            x$ = date = new Date();
            x$.setTime(it);
            lastVolby = null;
            for (i$ = 0, len$ = (ref$ = volby).length; i$ < len$; ++i$) {
                volba = ref$[i$];
                if (volba.date <= date) {
                    lastVolby = volba;
                }
            }
            radne = lastVolby.radne ? "řádné" : "doplňovací";
            heading.html("Po volbách " + lastVolby.date.getDate() + ". " + (lastVolby.date.getMonth() + 1) + ". " + lastVolby.date.getFullYear() + " (" + radne + ")");
            senat.drawTime(it);
            return souhrn.draw();
        });
        player = new window.ig.Player(slider);
        z$ = playBtn = footer.append("button");
        z$.html("Přehrát <span>▶</span>");
        z$.attr("class", "play");
        z$.on("click", bind$(player, "start"));
        return z$;
        function fn$(a, b) {
            return a.time - b.time;
        }
    };
    if (typeof d3 != "undefined" && d3 !== null) {
        init();
    } else {
        $(window).bind("load", function() {
            if (typeof d3 != "undefined" && d3 !== null) {
                return init();
            }
        });
    }
    function bind$(obj, key, target) {
        return function() {
            return (target || obj)[key].apply(obj, arguments);
        };
    }
}).call(this);