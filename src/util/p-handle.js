var handle = {
	//o =>this v=>this.name
	handleToKey: function(o, v) {
		var that = this;
		if(!v.rule || !v.rule.required) return v.value;
		var type = v.rule.type || 'default';
		switch(type) {
			case 'default':return that.defaultCheck(o,v);break;
			case 'phone':return that.phoneCheck(o,v);break;
			default: return that.defaultCheck(o,v);
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
	},
	phoneCheck: function(o, v) {
		var mark = this.defaultCheck(o,v);
		if(!mark) return mark;
		var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
		if(!myreg.test(v.value)) { 
		    o.$set(v, 'mark', true);
		    return false; 
		}else{
			o.$set(v, 'mark', false);
			return v.value; 
		}
		
	}
}
export default handle;