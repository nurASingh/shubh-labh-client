angular.module('clientApp')
    .constant('payment', [{
    	'type' : '3item',
    	'fields' :
				[    	
					{
			    		'label' : 'Party Name',
			    		'type' : 'text',
			    		'placeholder' : 'Ashoka Pharma Bhalotia',
						'id' :'partyName'
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
