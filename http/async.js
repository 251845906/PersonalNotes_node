var c = 0;
function print(){
	console.log(c)
};
function plues(callback){
	setTimeout(function(){
		c += 1 ;
		callback(c)
	},1000)
}
plues(print);