var required = {
	computed: {
		required: function() {
			if(this.info.rule&&this.info.rule.required) {
				return true;
			}else {
				return false;
			}
		}
	}
}
var mark = {
	computed: {
		//错误提示
		markFont: function() {
			if(this.info.rule && this.info.rule.msg) {
				return this.info.rule.msg;
			}else{
				return '';
			}
		},
		//错误标识
		mark: function() {
			return this.info.mark || false;
		},
	}
}


export {required,mark}