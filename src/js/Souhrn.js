// Generated by LiveScript 1.6.0
(function(){
  var Souhrn;
  window.ig.Souhrn = Souhrn = (function(){
    Souhrn.displayName = 'Souhrn';
    var prototype = Souhrn.prototype, constructor = Souhrn;
    function Souhrn(baseElement, senat, strany){
      var x$, y$, z$, z1$;
      this.baseElement = baseElement;
      this.senat = senat;
      this.strany = strany;
      x$ = this.baseElement.append('h4');
      x$.attr('class', 'souhrn-nadpis');
      y$ = x$.append('span');
      y$.html("Počet mandátů");
      z$ = x$.append('span');
      z$.attr('class', 'arrow');
      z1$ = this.element = this.baseElement.append('ul');
      z1$.attr('class', 'souhrn');
      this.draw();
    }
    Souhrn.prototype.draw = function(){
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
      currentStrany.sort(function(a, b){
        return b.count - a.count;
      });
      for (i$ = 0, len$ = currentStrany.length; i$ < len$; ++i$) {
        index = i$;
        strana = currentStrany[i$];
        strana.index = index;
      }
      x$ = this.element.selectAll('li.active').data(currentStrany, function(it){
        return it.strana;
      });
      y$ = x$.enter().append('li');
      y$.attr('class', 'active');
      y$.attr('data-tooltip', function(it){
        return it.strana;
      });
      z$ = y$.append('span');
      z$.attr('class', 'kost');
      z$.style('background-color', function(it){
        var ref$;
        return ((ref$ = this$.strany[it.strana]) != null ? ref$.color : void 8) || '#999';
      });
      z1$ = y$.append('span');
      z1$.attr('class', 'count');
      z2$ = x$.exit();
      z2$.classed('active', false);
      z3$ = z2$.transition();
      z3$.duration(600);
      z3$.remove();
      x$.style('left', function(it){
        var width = 68;
        if (screen.width < 600) width = 80;
        return it.index * width + "px";
      });
      z4$ = x$.select('span.count');
      z4$.html(function(it){
        var partyName = "";
        if (screen.width < 600) partyName = "<b>" + it.strana + "</b><br>";
        return partyName + " " + it.count + "";
      });
      return x$;
    };
    return Souhrn;
  }());
}).call(this);
