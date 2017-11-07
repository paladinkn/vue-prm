<template>
	<div>
		<el-button type="primary" @click="jumpPersonAdd">新增个人供应商</el-button>
	</div>
</template>
<script>
	export default {
		data: function() {
			return {};
		},
		mounted: function() {

		},
		methods: {
			jumpPersonAdd: function() {
				this.$router.push('personadd');
			}
		}
	}
</script>