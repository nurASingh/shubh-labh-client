angular.module('clientApp')
    .constant('cash', [{
    	'type' : '2item',
    	'fields' :
				[    	
					{
			    		'label' : 'Type',
			    		'type' : 'text',
			    		'placeholder' : 'Cash in hand',
						'id' :'type'
			    	},
			    	{
			    		'label' : 'Amount',
			    		'type' : 'number',
			    		'placeholder' : '12000',
						'id' :'amount'
			    	}
		    	]
   } ]);  