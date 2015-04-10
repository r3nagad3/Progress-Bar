var barData = [];  //Define barData array

barData = [ 
                bar = {
                    id: 'bar1', 
                    name: 'Progress Bar 1',
					value: 5,
					width: 5,
					total: 100,
					fullClass: ''
                },
                bar = {
                    id: 'bar2', 
                    name: 'Progress Bar 2',
					value: 35,
					width: 35,
					total: 100,
					fullClass: ''
                },
                bar = {
                    id: 'bar3', 
                    name: 'Progress Bar 3',
					value: 50,
					width: 50,
					total: 100,
					fullClass: ''
                },
                bar = {
                    id: 'bar4', 
                    name: 'Progress Bar 4',
					value: 75,
					width: 75,
					total: 100,
					fullClass: ''
                },
                bar = {
                    id: 'bar5',
                    name: 'Progress Bar 5',
					value: 100,
					width: 100,
					total: 100,
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
            ]; //Fill barData with default data

var ractive = new Ractive({
      el: '#container',

      template: '#progressBar',  // Load in progressBar template

      
       data: { dataBar: barData } //Load barData into ractive as dataBar array
    
    });

$.each( barData, function( key, value ) {
    setValues(key, true, 0);
});  //Conform all initial progress bars values for display

	function setValues(barIndex, add, value) {
		// This function sets ractive elements to their correct values
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
				ractive.animate(barId+'.width', 0);
			} else {
				ractive.set(barId+'.fullClass', '');
				ractive.animate(barId+'.width', barIdValue);
			}
        } else {
             alert("Select a progress bar");
        }
	}
	
	var listener = ractive.on({
        setPercent: function (event, barIndex, add, value) {
            setValues(barIndex, add, value);
			var barId = 'dataBar.'+barIndex;
			var barIdTotal = ractive.get(barId+'.total');
        }
	}); //Bind to ractive elements onload