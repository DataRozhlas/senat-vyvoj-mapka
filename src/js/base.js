// Generated by LiveScript 1.6.0
(function(){
  var strany, radneVolby, volby_assoc, csvTransformer, init;
  strany = {
    "ODS": {
      color: '#427aba',
      ordering: 1
    },
    "ČSSD": {
      color: '#f18240',
      ordering: 2
    },
    "KDU-ČSL": {
      color: '#ffff40',
      ordering: 3
    },
    "4KOALICE": {
      color: '#00A161',
      ordering: 4
    },
    "US-DEU": {
      color: '#9F218D',
      ordering: 5
    },
    "KSČM": {
      color: '#e3001a',
      ordering: 6
    },
    "ODA": {
      color: '#85a9db',
      ordering: 7
    },
    "Zelení": {
      color: '#0FB103',
      ordering: 8
    },
    "ANO": {
      color: '#253063',
      ordering: 9
    },
    "TOP 09": {
      color: '#77307b',
      ordering: 10
    },
    "SPOZ": {
      color: '#FBB5B7',
      ordering: 11
    },
    "NK": {
      color: '#aaa',
      ordering: 12
    },
    "STAN": {
      color: '#888',
      ordering: 13
    },
    "NEZ": {
      color: '#999',
      ordering: 15
    },
    "SNK ED": {
      color: '#aaa',
      ordering: 16
    },
    "S.cz": {
      color: '#bbb',
      ordering: 17
    },
    "DEU": {
      color: '#ccc',
      ordering: 18
    },
    "CZ": {
      color: '#ddd',
      ordering: 19
    },
    "HNHRM": {
      color: '#777',
      ordering: 20
    },
    "LIB": {
      color: '#666',
      ordering: 21
    },
    "SD-SN": {
      color: '#555',
      ordering: 22
    },
    "SOS": {
      color: '#444',
      ordering: 23
    },
    "Nestran.": {
      color: '#555',
      ordering: 25
    },
    "Piráti": {
      color: '#292829',
      ordering: 26
    },
    "Ostravak": {
      color: '#777',
      ordering: 27
    },
    "SLK": {
      color: '#888',
      ordering: 28
    },
    "Soukromníci": {
      color: '#999',
      ordering: 30
    },
    "SEN 21": {
      color: '#008a92',
      ordering: 31
    }, 
    "OPAT": {
      color: '#036937',
      ordering: 32
    },
    "HPP 11": {
      color: '#ceb00e',
      ordering: 33
    },
    "\"OSN\"": {
      color: '#eaeaea',
      ordering: 34
    }
  };
  radneVolby = {
    '19961116': 1,
    '19981114': 1,
    '20001112': 1,
    '20021025': 1,
    '20041105': 1,
    '20061020': 1,
    '20081017': 1,
    '20121012': 1,
    '20101015': 1,
    '20141010': 1,
    '20161007': 1,
    '20181005': 1,
  };
  window.ig.obvodyNazvy = ['prd', "Karlovy Vary", "Sokolov", "Cheb", "Most", "Chomutov", "Louny", "Plzeň-město", "Rokycany", "Plzeň-město", "Český Krumlov", "Domažlice", "Strakonice", "Tábor", "České Budějovice", "Pelhřimov", "Beroun", "Praha 12", "Příbram", "Praha 11", "Praha 4", "Praha 5", "Praha 10", "Praha 8", "Praha 9", "Praha 6", "Praha 2", "Praha 1", "Mělník", "Litoměřice", "Kladno", "Ústí nad Labem", "Teplice", "Děčín", "Liberec", "Jablonec nad Nisou", "Česká Lípa", "Jičín", "Mladá Boleslav", "Trutnov", "Kutná Hora", "Benešov", "Kolín", "Pardubice", "Chrudim", "Hradec Králové", "Ústí nad Orlicí", "Náchod", "Rychnov nad Kněžnou", "Blansko", "Svitavy", "Žďár nad Sázavou", "Jihlava", "Třebíč", "Znojmo", "Brno-město", "Břeclav", "Vyškov", "Brno-město", "Brno-město", "Brno-město", "Olomouc", "Prostějov", "Přerov", "Bruntál", "Šumperk", "Olomouc", "Nový Jičín", "Opava", "Frýdek-Místek", "Ostrava-město", "Ostrava-město", "Ostrava-město", "Frýdek-Místek", "Karviná", "Karviná", "Kroměříž", "Vsetín", "Zlín", "Hodonín", "Zlín", "Uherské Hradiště"];
  volby_assoc = {};
  csvTransformer = function(row){
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
  init = function(){
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
    volby.sort(function(a, b){
      if (a.date > b.date) {
        return 1;
      } else {
        return -1;
      }
    });
    container = d3.select(ig.containers.base);
    x$ = heading = container.append('h2');
    x$.html("Stav po volbách 13. 10. 2018 (řádné)");
    senat = new window.ig.Senat(container, obvody);
    div$ = footer = container.append('div');
    div$.attr("class","mapfooter");
    souhrn = new window.ig.Souhrn(footer, senat, strany);
    y$ = slider = new window.ig.Slider(footer, volby);
    y$.on('time', function(it){
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
    z$ = playBtn = footer.append('button');
    z$.html("Přehrát <span>▶</span>");
    z$.attr('class', 'play');
    z$.on('click', bind$(player, 'start'));
    return z$;
    function fn$(a, b){
      return a.time - b.time;
    }
  };
  if (typeof d3 != 'undefined' && d3 !== null) {
    init();
  } else {
    $(window).bind('load', function(){
      if (typeof d3 != 'undefined' && d3 !== null) {
        return init();
      }
    });
  }
  function bind$(obj, key, target){
    return function(){ return (target || obj)[key].apply(obj, arguments) };
  }
}).call(this);
