app.factory("genericServices", function() {
    return {
        hmsToSeconds: function(str) {
            var p = str.split(':'),
                s = 0, m = 1;

            while (p.length > 0) {
                s += m * parseInt(p.pop(), 10);
                m *= 60;
            }

            return s;
        }
    }
});