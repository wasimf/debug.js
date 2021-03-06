#!/usr/bin/env node

var foo		= {
	bar	: 2
};

var PropertyAttr	= PropertyAttr	|| require('../src/propertyattr.js');

PropertyAttr.define(foo, 'bar')
	.typeCheck([Number, 'nonan'])
	.trackUsage();

foo.bar	= 3;

console.log('value', foo.bar)
//foo.bar	= NaN;

console.log('PropertyAttr.usageTracker')
PropertyAttr.usageTracker.dump();
