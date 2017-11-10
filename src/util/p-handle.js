var handle = {
	//o =>this v=>this.name
	handleToKey: function(o, v) {
		var that = this;
		if(!v.rule || !v.rule.required) return v.value;
		var type = v.rule.type || 'default';
		switch(type) {
			case 'default':return that.defaultCheck(o,v);break;
		}
	},
	defaultCheck: function(o, v) {
		if(v.value=='' || v.value == null) {
			o.$set(v, 'mark', true);
			return false;
		}else{
			o.$set(v, 'mark', false);
			return v.value;
		}
	}
}
export default handle;