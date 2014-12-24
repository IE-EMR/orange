/**	Orange Javascript framework, version 1.0.0 
 *	(c)2014	xiaoxiong
 *	Dependent the prototype.js and require.js 
 *
 */
/*require.config({
	path : {
		"prototype" : "prototype.js"
	}
});
*/
require(['prototype'], function(Prototype){
	alert("prototype load success : " + Prototype.Version);
});