// Generated by LiveScript 1.6.0
(function(){
  var Player;
  window.ig.Player = Player = (function(){
    Player.displayName = 'Player';
    var prototype = Player.prototype, constructor = Player;
    function Player(slider){
      this.slider = slider;
      this.startTime = this.slider.startTime;
      this.endTime = this.slider.endTime + 86400 * 30 * 1e3;
      this.slider.on('interaction', bind$(this, 'stop'));
    }
    Player.prototype.start = function(){
      this.stopping = false;
      this.time = this.startTime;
      return requestAnimationFrame(bind$(this, 'next'));
    };
    Player.prototype.next = function(){
      if (this.stopping) {
        return;
      }
      this.slider.setTime(this.time);
      this.time += 86400 * 1e3 * 8;
      if (this.time > this.endTime) {
        return this.stop();
      } else {
        return requestAnimationFrame(bind$(this, 'next'));
      }
    };
    Player.prototype.stop = function(){
      return this.stopping = true;
    };
    return Player;
  }());
  function bind$(obj, key, target){
    return function(){ return (target || obj)[key].apply(obj, arguments) };
  }
}).call(this);
