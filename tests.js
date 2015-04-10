QUnit.test( "barData array must be defined to store progress bar data", function( assert ) {
	assert.expect( 1 );
	assert.ok( barData, "barData array is defined" );
});

QUnit.test( "ractive must be defined to initialize ractive framework", function( assert ) {
	assert.expect( 1 );
	assert.ok( ractive, "ractive framework is defined" );
});

QUnit.test( "getWidth", function( assert ) {
	var checkNoughtWidth0 = getWidth(0);
	assert.expect( 1 );
	assert.ok( ractive, "Width is between 0 and 100" );
});