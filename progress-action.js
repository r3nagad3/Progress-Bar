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
                }
            ]; //Fill barData with default data

var ractive = new Ractive({
      el: '#container',

      template: '#progressBar',  // Load in progressBar template

      
       data: { dataBar: barData}, //Load barData into ractive as dataBar array
	   
	   oninit: function () { //on initialization iterate over dataBar array
			for (var i=0; i < this.get('dataBar').length; i++) {
				this.setPercentages(i, true, 0);
			}
	   },
	   setPercentages: function ( barIndex, add, value )  {
		   //Set percentages and animations in Ractive to the DOM
			if ($.isNumeric(barIndex)) {
				var addValue = calcPercent(value, this.get('dataBar.'+barIndex+'.value'), add);
				var barId = 'dataBar.'+barIndex;
				this.animate(barId+'.width', checkWidthValue(addValue), {
					duration: '150',
					easing: 'linear',
					complete: this.set(barId+'.fullClass', fullBar(checkValidValue(addValue)))

				
				});
				this.set(barId+'.value', checkValidValue(addValue));
			} else {
				alert("Select a progress bar");
			}
	   }
    
    });
	

	function checkWidthValue(value) {
		//Returns 0 for any result under 0
		//Returns 100 for any result over 100
			if (value>=100) {
				return  100;
			} else {
				return checkValidValue(value);
			}
	}

	function checkValidValue(value) {
		//Returns 0 for any result value 0
			if (value<=0) {
				return  0;
			} else {
				return  value;
			}
	}

	function calcPercent(addValue, barIdValue, add) {
		//Add or Subtract addValue from barIdValue
		//Add if add is true, Subtract if add is false
		//Returns 0 for any result under 0
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
		//Returns string 'full' for any value 100 and over
		//Returns string '' for any other value
			if (value>=100) {
				return 'full';
			} else {
				return '';
			}
	}
	
	ractive.on({
        bindEvent: function (event, barIndex, add, value) {
				this.setPercentages(barIndex, add, value);
        }
	}); //Bind to ractive elements onload