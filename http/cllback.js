function learn(something) {
	console.log(something)
};
function we(callback,something){
	something +="ssss"
	callback(something);
};
we(learn,'node.js');

we(function(something){
	console.log(something)
},'node.js')