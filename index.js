function hasFlags(args, flags){
	return flags.some(function(flag){
		return args.indexOf(flag) > -1;
	});
}

function identity(value){
	return value;
}

module.exports = function(fn, commands, parseArgs){
	var argv = process.argv, result;

	parseArgs = parseArgs || identity;

	if(hasFlags(argv, ['-h', '--help'])){
		return console.log(commands.help);
	}

	if(hasFlags(argv, ['-v', '--version'])){
		return console.log(commands.version);
	}

	result = fn.apply(null, parseArgs(argv.slice(2)));

	if(result){
		console.log(result);
	}
};
