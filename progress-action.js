var barData;

barData = [ 
                bar = {
                    id: 'bar1', 
                    name: 'Progress Bar 1',
					value: 3,
					width: 3,
					total: 10,
					fullClass: ''
                },
                bar = {
                    id: 'bar2', 
                    name: 'Progress Bar 2',
					value: 6,
					width: 6,
					total: 10,
					fullClass: ''
                },
                bar = {
                    id: 'bar3', 
                    name: 'Progress Bar 3',
					value: 10,
					width: 10,
					total: 10,
					fullClass: ''
                },
                bar = {
                    id: 'bar4', 
                    name: 'Progress Bar 4',
					value: 120,
					width: 120,
					total: 100,
					fullClass: ''
                },
                bar = {
                    id: 'bar5',
                    name: 'Progress Bar 5',
					value: 10,
					width: 10,
					total: 10,
					fullClass: ''
                },
                bar = {
                    id: 'bar6' ,
                    name: 'Progress Bar 6',
					value: 120,
					width: 120,
					total: 100,
					fullClass: ''
                } 
            ];

var ractive = new Ractive({
      // The `el` option can be a node, an ID, or a CSS selector.
      el: '#container',

      template: '#progressBar',  // Load in progressBar template

      // Here, we're passing in some initial data
       data: { dataBar: barData } 
    
    });

$.each( barData, function( key, value ) {
    setValues(key, true, 0);
});

	function setValues(barIndex, add, value) {
        if ($.isNumeric(barIndex)) {
            var barId = 'dataBar.'+barIndex;
			var barIdTotal = ractive.get(barId+'.total');
			if (add) {
				ractive.add(barId+'.value', barIdTotal * value/100);
			} else {
				ractive.subtract(barId+'.value', barIdTotal * value/100);
			}
			var barIdValue = ractive.get(barId+'.value');
			if (barIdValue>=barIdTotal) {
				ractive.set(barId+'.fullClass', 'full');
			} else if (barIdValue<=0) {
				ractive.set(barId+'.value', 0);
				ractive.set(barId+'.width', 0);
			} else {
				ractive.set(barId+'.fullClass', '');
				ractive.animate(barId+'.width', barIdValue);
			}
        } else {
             alert("Select a progress bar");
        }
	}
	var listener = ractive.on({
        setPercent: function (event, barId, add, value) {
            setValues(barId, add, value);
        }
	});