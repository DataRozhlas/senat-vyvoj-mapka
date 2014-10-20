window.ig.Senat = class Senat
  kostSide: 35px
  (@baseElement, @data) ->
    @init!
    @drawTime new Date!

  drawTime: (date) ->
    time = date.getTime!
    data = for obvodId, obvod of @data
      usableSenator = null
      for senator in obvod
        if senator.time <= time
          usableSenator = senator
        else
          break
      usableSenator
    data.sort (a, b) -> a.strana.ordering - b.strana.ordering
    @mandaty
      ..style \background-color ~> data[it].strana.color
      ..attr \data-tooltip ->
        "<b>#{data[it].vitez}</b><br>
        #{data[it].vitezStrana}"

  init: ->
    rows = 5
    @element = @baseElement.append \div
      ..attr \class \senat
    @mandaty = @element.selectAll \div.mandat .data [0 til 81] .enter!append \div
      ..attr \class \mandat
      ..style \top ~> "#{it % rows * @kostSide}px"
      ..style \left ~> "#{@kostSide * Math.floor it / rows}px"
      ..append \div .attr \class \border

