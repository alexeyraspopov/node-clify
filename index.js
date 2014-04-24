function hasFlags(args, flags){
	return flags.every(function(flag){
		return args.indexOf(flag) > -1;
	});
}

function identity(value){
	return value;
}

module.exports = function(fn, commands, parseArgs){
	var argv = process.argv;

	parseArgs = parseArgs || identity;

	if(hasFlags(argv, ['-h', '--help'])){
		return console.log(commands.help);
	}

	if(hasFlags(argv, ['-v', '--version'])){
		return console.log(commands.version);
	}

	console.log(fn.apply(null, parseArgs(argv)));
};
