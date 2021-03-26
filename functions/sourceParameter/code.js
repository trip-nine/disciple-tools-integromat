function sourceParameter(param) {

	if(!param.source && !param.sourceCity) return;
	
	let arr = [];
	
	for (let k in param) {
		if (k === 'source' || k === 'sourceCity') {
			let obj = {
				value: param[k]
			};
			arr.push(obj);
		}
	}
	return {
		values: arr
	};
}