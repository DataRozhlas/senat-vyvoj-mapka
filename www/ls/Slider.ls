window.ig.Slider = class Slider
  (@baseElement, @volby) ->
    window.ig.Events @
    @startTime = @volby.0.date.getTime!
    @currentTime = @endTime = @volby[*-1].date.getTime!
    @scale = d3.scale.linear!
      ..domain [@startTime, @endTime]
      ..range [0 610px]
    @element = @baseElement.append \div
      ..attr \class \slider
      ..append \div
        ..attr \class \hline
      ..on \touchstart @~onInteraction
      ..on \click @~onInteraction
      ..on \mousedown ~>
        @element.on \mousemove null
        d3.event.preventDefault!
        @onInteraction!
        @baseElement.on \mousemove @~onInteraction
        @baseElement.on \mouseup ~>
          @baseElement.on \mousemove null
          @baseElement.on \mouseup null


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
    @buttons = @baseElement.append \div
      ..attr \class \buttons
    @prevButton = @buttons.append \button
      ..html "&laquo;"
      ..attr \class \prev
      ..on \click ~>
        tgt = @endTime
        for volba in @volby
          if volba.date.getTime! < @currentTime
            tgt = volba.date.getTime!
        @setTime tgt
        @element.on \mousemove null

    @nextButton = @buttons.append \button
      ..html "&raquo;"
      ..attr \class \next
      ..on \click ~>
        tgt = @startTime
        for volba in @volby
          if volba.date.getTime! > @currentTime
            tgt = volba.date.getTime!
            break
        @setTime tgt
        @element.on \mousemove null

  onInteraction: ->
    x = d3.event.x - 10
    time = @scale.invert x
    @setTime time

  setTime: (time) ->
    if time < @startTime
      time = @startTime
    if time > @endTime
      time = @endTime
    @currentTime = time
    @repositionSelection time
    @emit "time" time

  repositionSelection: (time) ->
    @selection.style \left "#{@scale time}px"


