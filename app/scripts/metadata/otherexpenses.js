angular.module('clientApp')
    .constant('saving', [{
    	'type' : '2item',
    	'fields' :
				[    	
					{
			    		'label' : 'Type',
			    		'type' : 'text',
			    		'placeholder' : 'Ashoka Pharma Bhalotia',
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