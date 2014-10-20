window.ig.Slider = class Slider
  (@baseElement, @volby) ->
    window.ig.Events @
    @startTime = @volby.0.date.getTime!
    @endTime = @volby[*-1].date.getTime!
    @scale = d3.scale.linear!
      ..domain [@startTime, @endTime]
      ..range [0 590px]
    @element = @baseElement.append \div
      ..attr \class \slider
      ..append \div
        ..attr \class \hline
      ..on \mousemove @~onInteraction
      ..on \touchstart @~onInteraction
      ..on \click @~onInteraction


    ticksElem = @element.append \div .attr \class \ticks
    @ticks = ticksElem.selectAll \.tick .data @volby .enter!append \div
      ..attr \class \tick
      ..classed \small -> not it.radne
      ..style \left ~> "#{@scale it.date.getTime!}px"
      ..append \div
        ..attr \class \year
        ..html (.date.getFullYear!)
      ..append \div .attr \class \line
    @selection = @element.append \div .attr \class \selection
    @repositionSelection @volby[*-1].date.getTime!

  onInteraction: ->
    x = d3.event.x - 10
    time = @scale.invert x
    if time < @startTime
      time = @startTime
    if time > @endTime
      time = @endTime
    @repositionSelection time
    @emit "time" time

  repositionSelection: (time) ->
    @selection.style \left "#{@scale time}px"


