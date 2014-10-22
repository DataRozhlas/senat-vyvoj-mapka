window.ig.Souhrn = class Souhrn
  (@baseElement, @senat, @strany) ->
    @baseElement.append \h4
      ..attr \class \souhrn-nadpis
      ..append \span
        ..html "Počet mandátů"
      ..append \span
        ..attr \class \arrow
    @element = @baseElement.append \ul
      ..attr \class \souhrn
    @draw!

  draw: ->
    currentStranyAssoc = {}
    for mandat in @senat.currentMandaty
      stranaReal = if @strany[mandat.vitezStrana] && @strany[mandat.vitezStrana].ordering <= 11
        mandat.vitezStrana
      else
        "Ostatní"
      currentStranyAssoc[stranaReal] ?= 0
      currentStranyAssoc[stranaReal]++
    currentStrany = for strana, count of currentStranyAssoc
      {strana, count}
    currentStrany.sort (a, b) -> b.count - a.count
    for strana, index in currentStrany
      strana.index = index
    @element.selectAll \li.active .data currentStrany, (.strana)
      ..enter!append \li
        ..attr \class \active
        ..attr \data-tooltip (.strana)
        # ..append \span
        #   ..attr \class \name
        #   ..html (.strana)
        ..append \span
          ..attr \class \kost
          ..style \background-color ~> @strany[it.strana]?color || '#999'
        ..append \span
          ..attr \class \count
      ..exit!
        ..classed \active no
        ..transition!
          ..duration 600
          ..remove!
      ..style \left -> "#{it.index * 68}px"
      ..select \span.count
        ..html -> "#{it.count}"



