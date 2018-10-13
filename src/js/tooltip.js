(function() {
    var Tooltip;
    window.Tooltip = Tooltip = function() {
        Tooltip.displayName = "Tooltip";
        var prototype = Tooltip.prototype,
            constructor = Tooltip;
        Tooltip.counter = 0;

        function Tooltip(options) {
            var ref$;
            this.options = options != null ? options : {};
            this.onMouseMove = bind$(this, "onMouseMove", prototype);
            this.eventId = "tooltip-" + constructor.counter++;
            (ref$ = this.options).parent == null && (ref$.parent = d3.select("body"));
            d3.select(document).on("mousemove." + this.eventId, bind$(this, "onMouseMove"))
        }
        prototype.watchElements = function() {
            var this$ = this;
            d3.select(document).on("mouseover." + this.eventId, function() {
                var currentTarget, content;
                currentTarget = d3.event.target;
                do {
                    content = currentTarget.getAttribute("data-tooltip");
                    currentTarget = currentTarget.parentNode
                } while (currentTarget !== document && content === null);
                if (!content) {
                    return
                }
                content = unescape(content);
                if (!content.length) {
                    return
                }
                return this$.display(content)
            });
            return d3.select(document).on("mouseout." + this.eventId, bind$(this, "hide"))
        };
        prototype.display = function(content) {
            var x$;
            x$ = this.$element = this.options.parent.append("div");
            x$.attr("class", "tooltip");
            x$.html(content);
            return this.setPositionByMouse()
        };
        prototype.hide = function() {
            if (!this.$element) {
                return
            }
            this.$element.remove();
            this.$element = null;
            return this.mouseBound = false
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
                top += element.offsetHeight - 2 * topMargin
            }
            x$ = this.$element;
            x$.style("left", left + "px");
            x$.style("top", top + "px");
            return x$
        };
        prototype.setPositionByMouse = function() {
            this.mouseBound = true;
            if (this.lastMousePosition) {
                return this.reposition(this.lastMousePosition)
            }
        };
        prototype.onMouseMove = function() {
            var evt;
            evt = d3.event;
            this.lastMousePosition = [evt.pageX || evt.clientX, evt.pageY || evt.clientY, evt.clientX, evt.clientY];
            if (this.mouseBound) {
                return this.reposition(this.lastMousePosition)
            }
        };
        return Tooltip
    }();

    function bind$(obj, key, target) {
        return function() {
            return (target || obj)[key].apply(obj, arguments)
        }
    }
}).call(this);