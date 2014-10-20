
strany =
  "ODS"     : color: \#1A77EE ordering: 1
  "ČSSD"    : color: \#FEA201 ordering: 2
  "KDU-ČSL" : color: \#FEE300 ordering: 3
  "4KOALICE": color: \#00A161 ordering: 4
  "US-DEU"  : color: \#9F218D ordering: 5
  "KSČM"    : color: \#e3001a ordering: 6
  "ODA"     : color: \#85a9db ordering: 7
  "SZ"      : color: \#0FB103 ordering: 8
  "ANO 2011": color: \#5135A3 ordering: 9
  "TOP 09"  : color: \#B560F3 ordering: 10
  "SPO"     : color: \#FBB5B7 ordering: 11
  "NK"      : color: \#aaa    ordering: 12
  "STAN"    : color: \#888    ordering: 13
  "NEZ"     : color: \#999    ordering: 15
  "SNK ED"  : color: \#aaa    ordering: 16
  "S.cz"    : color: \#bbb    ordering: 17
  "DEU"     : color: \#ccc    ordering: 18
  "CZ"      : color: \#ddd    ordering: 19
  "HNHRM"   : color: \#777    ordering: 20
  "LIB"     : color: \#666    ordering: 21
  "SD-SN"   : color: \#555    ordering: 22
  "SOS"     : color: \#444    ordering: 23
  "Nestran.": color: \#555    ordering: 25
  "Piráti"  : color: \#333    ordering: 26
  "Ostravak": color: \#777    ordering: 27
  "SLK"     : color: \#888    ordering: 28
  "SsČR"    : color: \#999    ordering: 30
csvTransformer = (row) ->
  date = new Date!
    ..setTime 0
    ..setFullYear (parseInt (row.datum.substr 0, 4), 10)
    ..setMonth    (-1 + parseInt (row.datum.substr 4, 2), 10)
    ..setDate     (parseInt (row.datum.substr 6, 2), 10)
  row.date = date
  row.time = date.getTime!
  row.obvod = parseInt row.obvod, 10
  row.strana = strany[row.vitezStrana]
  row


init = ->
  new Tooltip!watchElements!
  csv = d3.csv.parse window.ig.data.senatori, csvTransformer
  obvody = {}
  for mandat in csv
    obvody[mandat.obvod] ?= []
    obvody[mandat.obvod].push mandat
  for index, obvod of obvody
    obvod.sort (a, b) -> a.time - b.time

  container = d3.select ig.containers.base
  senat = new window.ig.Senat container, obvody
if d3?
  init!
else
  $ window .bind \load ->
    if d3?
      init!
