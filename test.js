'use strict'

process.nextTick(function(){
	console.log('nextTick callback!');
});

console.log('nextTick was set!');

process.on('exit',function(){
	console.log('about to exit with code:' + 'gunduzi');
});

if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}