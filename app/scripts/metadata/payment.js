angular.module('clientApp')
    .constant('payment', [{
    	'type' : '3item',
    	'fields' :
				[    	
					{
			    		'label' : 'Party Name',
			    		'type' : 'text',
			    		'placeholder' : 'Ashok Pharma',
						'id' :'name'
			    	},
			    	{
			    		'label' : 'Purchase',
			    		'type' : 'number',
			    		'placeholder' : '12000',
						'id' :'purchase'
			    	},
			    	{
			    		'label' : 'Payment',
			    		'type' : 'number',
			    		'placeholder' : '6000',
						'id' :'payment'
			    	}
		    	]
   } ]);     
