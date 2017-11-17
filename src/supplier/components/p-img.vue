<template>
	<el-row class="panel-singe">
		<el-col :span="8">
			<span class="base-star" v-if="required">*</span>
			<span v-html="info.font"></span>:
		</el-col>
		<el-col :span="cont">
			<el-button>上传照片</el-button>
			<p class="base-mark" v-if="mark" v-html="markFont"></p>
		</el-col>
	</el-row>
</template>
<script>
import {required, mark} from './mixin';
	export default {
		mixins: [required, mark],
		props: ['info'],
		data: function() {
			var obj = {};
			obj.head = this.info.head || 8;
			obj.cont = this.info.cont || 16;
			return obj;
		},
		
	}
</script>