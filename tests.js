QUnit.test( "barData array must be defined to store progress bar data", function( assert ) {
	assert.expect( 1 );
	assert.ok( barData, "barData array is defined" );
});

QUnit.test( "barData array must contain id, name, value and total for all elements", function( assert ) {
			assert.expect( ractive.get('dataBar').length * 3 );
			for (var i=0; i < ractive.get('dataBar').length; i++) {
				assert.ok( ractive.get('dataBar.'+i+'.id'), "barData index "+i+" 'id' is defined" );
				assert.ok( ractive.get('dataBar.'+i+'.name'), "barData index "+i+" 'name' is defined" );
				assert.ok( ractive.get('dataBar.'+i+'.value'), "barData index "+i+" 'value' is defined and must be greater than 0" );
			}
});

QUnit.test( "ractive must be defined to initialize ractive framework", function( assert ) {
	assert.expect( 1 );
	assert.ok( ractive, "ractive framework is defined" );
});

QUnit.test( "checkWidthValue must be between 0 and 100", function( assert ) {
	var lessThanZero = checkWidthValue(0);
	var greaterThanOneHundred = checkWidthValue(120);
	var checkFiftyPercent = checkWidthValue(50);
	assert.expect( 3 );
	assert.deepEqual(lessThanZero, 0, "Width is not less than 0" );
	assert.deepEqual(greaterThanOneHundred, 100, "Width is no greater than 100" );
	assert.deepEqual(checkFiftyPercent, 50, "Width between 0 and 100 are returned as the value submitted" );
});

QUnit.test( "checkValidValue must be no less than 0", function( assert ) {
	var lessThanZero = checkValidValue(-1);
	var greaterThanOneHundred = checkValidValue(120);
	var checkFiftyPercent = checkValidValue(50);
	assert.expect( 3 );
	assert.deepEqual(lessThanZero, 0, "Value is not less than 0" );
	assert.deepEqual(greaterThanOneHundred, 120, "Value can be greater than 100" );
	assert.deepEqual(checkFiftyPercent, 50, "Value between 0 and 100 are returned as the value submitted" );
});

QUnit.test( "calcPercent no less than 0, but can be greater than 100", function( assert ) {
	var lessThanZero = calcPercent(20, 10, false);
	var greaterThan100 = calcPercent(20, 100, true);
	assert.expect( 2 );
	assert.deepEqual(lessThanZero, 0, "Value is not less than 0" );
	assert.deepEqual(greaterThan100, 120, "Value is greater than 100" );
});

QUnit.test( "fullBar returns 'fullClass' str if value>=100", function( assert ) {
	var valueLessThanHundredPercent = fullBar(55);
	var valueEqualToHundredPercent = fullBar(100);
	var valueGreaterThanHundredPercent = fullBar(150);
	assert.expect( 3 );
	assert.deepEqual(valueLessThanHundredPercent, '', "Return empty string for less than 100" );
	assert.deepEqual(valueEqualToHundredPercent, 'full', "Return 'full' as string for equals 100" );
	assert.deepEqual(valueGreaterThanHundredPercent, 'full', "Return 'full' as string for greater than 100" );
});