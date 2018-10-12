// Generated by LiveScript 1.6.0
(function(){
  var Slider;
  window.ig.Slider = Slider = (function(){
    Slider.displayName = 'Slider';
    var prototype = Slider.prototype, constructor = Slider;
    function Slider(baseElement, volby){
      var ref$, x$, y$, z$, ticksElem, z1$, z2$, z3$, z4$, z5$, this$ = this;
      this.baseElement = baseElement;
      this.volby = volby;
      window.ig.Events(this);
      this.startTime = this.volby[0].date.getTime();
      this.currentTime = this.endTime = (ref$ = this.volby)[ref$.length - 1].date.getTime();
      x$ = this.scale = d3.scale.linear();
      x$.domain([this.startTime, this.endTime]);
      var sliderWidth = screen.width < 600 ? 320 : 600;
      x$.range([0, sliderWidth]);
      y$ = this.element = this.baseElement.append('div');
      y$.attr('class', 'slider');
      z$ = y$.append('div');
      z$.attr('class', 'hline');
      y$.on('touchstart', bind$(this, 'onInteraction'));
      y$.on('click', bind$(this, 'onInteraction'));
      y$.on('mousedown', function(){
        this$.element.on('mousemove', null);
        d3.event.preventDefault();
        this$.onInteraction();
        this$.baseElement.on('mousemove', bind$(this$, 'onInteraction'));
        return this$.baseElement.on('mouseup', function(){
          this$.baseElement.on('mousemove', null);
          return this$.baseElement.on('mouseup', null);
        });
      });
      ticksElem = this.element.append('div').attr('class', 'ticks');
      z1$ = this.ticks = ticksElem.selectAll('.tick').data(this.volby).enter().append('div');
      z1$.attr('class', 'tick');
      z1$.classed('small', function(it){
        return !it.radne;
      });
      z1$.style('left', function(it){
        console.log(this$.scale(it.date.getTime()/600*sliderWidth) + "px");
        return this$.scale(it.date.getTime()) + "px";
      });
      z2$ = z1$.append('div');
      z2$.attr('class', 'year');
      z2$.html(function(it){
        return it.date.getFullYear();
      });
      z1$.append('div').attr('class', 'line');
      this.selection = this.element.append('div').attr('class', 'selection');
      this.repositionSelection((ref$ = this.volby)[ref$.length - 1].date.getTime());
      z3$ = this.buttons = this.baseElement.append('div');
      z3$.attr('class', 'buttons');
      z4$ = this.prevButton = this.buttons.append('button');
      z4$.html("&laquo;");
      z4$.attr('class', 'prev');
      z4$.on('click', function(){
        var tgt, i$, ref$, len$, volba;
        tgt = this$.endTime;
        for (i$ = 0, len$ = (ref$ = this$.volby).length; i$ < len$; ++i$) {
          volba = ref$[i$];
          if (volba.date.getTime() < this$.currentTime) {
            tgt = volba.date.getTime();
          }
        }
        this$.setTime(tgt);
        this$.emit('interaction');
        return this$.element.on('mousemove', null);
      });
      z5$ = this.nextButton = this.buttons.append('button');
      z5$.html("&raquo;");
      z5$.attr('class', 'next');
      z5$.on('click', function(){
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
        this$.emit('interaction');
        return this$.element.on('mousemove', null);
      });
    }
    Slider.prototype.onInteraction = function(){
      var x, time;
      this.emit('interaction');
      x = d3.event.x - 10;
      time = this.scale.invert(x);
      return this.setTime(time);
    };
    Slider.prototype.setTime = function(time){
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
    Slider.prototype.repositionSelection = function(time){
      return this.selection.style('left', this.scale(time) + "px");
    };
    return Slider;
  }());
  function bind$(obj, key, target){
    return function(){ return (target || obj)[key].apply(obj, arguments) };
  }
}).call(this);
