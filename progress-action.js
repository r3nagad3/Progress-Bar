var barData = [];  //Define barData array

barData = [ 
                bar = {
                    id: 'bar1', 
                    name: 'Progress Bar 1',
					value: 5
                },
                bar = {
                    id: 'bar2', 
                    name: 'Progress Bar 2',
					value: 35
                },
                bar = {
                    id: 'bar3', 
                    name: 'Progress Bar 3',
					value: 50
                },
                bar = {
                    id: 'bar4', 
                    name: 'Progress Bar 4',
					value: 75
                },
                bar = {
                    id: 'bar5',
                    name: 'Progress Bar 5',
					value: 100
                },
                bar = {
                    id: 'bar6' ,
                    name: 'Progress Bar 6',
					value: 120
                },
                bar = {
                    id: 'bar7' ,
                    name: 'Progress Bar 7',
					value: 1200
                } 
            ]; //Fill barData with default data

var ractive = new Ractive({
      el: '#container',

      template: '#progressBar',  // Load in progressBar template

      
       data: { dataBar: barData}, //Load barData into ractive as dataBar array
	   
	   oninit: function () {
			for (var i=0; i < this.get('dataBar').length; i++) {
				this.setPercentages(i, true, 0);
			}
	   },
	   setPercentages: function ( barIndex, add, value )  {
			if ($.isNumeric(barIndex)) {
				addValue = calcPercent(value, this.get('dataBar.'+barIndex+'.value'), add);
				var barId = 'dataBar.'+barIndex;
				this.animate(barId+'.width', checkWidthValue(addValue), {
					easing: 'linear'
				});
				this.set(barId+'.value', checkValidValue(addValue));
				this.set(barId+'.fullClass', fullBar(checkValidValue(addValue)));
			} else {
				alert("Select a progress bar");
			}
	   }
    
    });
	

	function checkWidthValue(Value) {
			if (Value>=100) {
				return  100;
			} else if (Value<=0) {
				return  0;
			} else {
				return  Value;
			}
	}

	function checkValidValue(Value) {
			if (Value<=0) {
				return  0;
			} else {
				return  Value;
			}
	}

	function calcPercent(addValue, barIdValue, add) {
			if (add) {
				barIdValue += addValue;
			} else {
				barIdValue -= addValue;
			}
			if (barIdValue<=0) {
				barIdValue = 0;
			}
			return barIdValue;
	}
	
	function fullBar(value) {
		if (value>=100) {
			return 'full';
		} else {
			return '';
		}
	}
	
	var listener = ractive.on({
        bindEvent: function (event, barIndex, add, value) {
				this.setPercentages(barIndex, add, value);
        }
	}); //Bind to ractive elements onload