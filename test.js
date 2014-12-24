/*define(function(require, exports, module){
	exports.log = function(message) {
		console.log(message);
	}
});*/
module.exports = {
	l : $L
};

function $L(message) {
	console.log(message);
}