//library used - ethersjs 
var ethers = require('ethers');
var providers = ethers.providers;

//connecting to the main Ethereum network
var provider = providers.getDefaultProvider('homestead');
 

/*

STEPS Involved in the script include:

1. Get Current Block Number and query the previous 100 blocks
2. Get data associated with the blocks. The important data needed is the 'Transaction Hash'
3. Use the 'Transaction Hash' to retrive information about the transactions

*/ 

provider.getBlockNumber().then(function(blockNumber) {

	//Current Block Number in the network
	console.log("Current block number: " + blockNumber);

	//Benchmarking the current Block Number
	var blkNum = blockNumber ;

	//Quering the previous 100 blocks
	for(var i= 0 ; i < 101 ; i++){

		blkNum = blkNum - 1;

		console.log("Previous block number: " + blkNum );

		//Query the information related to a particular block
		//Use the 'Transaction Hash' values from a block to display transactional information 
		provider.getBlock(blkNum).then(function(block){

			//Display information about the blocks as necessary 
			//console.log(block);

			 //looping through transactional hashes from a block and displaying ONLY 2 transactions
			 for(var i=0; i < 2; i++){
				
				provider.getTransaction(block.transactions[i]).then(function(transaction) {
   		 		//console.log(transaction);

				});	 

				
			} 
		})


	}


});



