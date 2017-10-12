const cart = require('./cart');
const cars = require('./data/cars');

describe('Cart Properties:', function() {
  test('Cart should default to an empty array.', function() {
    expect( Array.isArray( cart.cart ) ).toEqual( true );
    expect( cart.cart.length ).toEqual( 0 );
  });

  test('Total should default to 0.', function() {
    expect( cart.total ).toEqual( 0 );
  });
});

describe('Cart Methods:', function() {
	afterEach(function() {
	  cart.cart = [];
	  cart.total = 0;
	});

	test('')
})