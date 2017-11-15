<template>
	<div>
		<el-button type="primary" @click="jumpPersonAdd">新增个人供应商</el-button>
		<el-button type="primary" @click="jumpBusAdd">新增企业供应商</el-button>
		<el-button type="primary" @click="jumpPersonCheck">查看个人供应商</el-button>
		<el-button type="primary" @click="jumpBusCheck">查看企业供应商</el-button>
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
			},
			jumpBusAdd: function() {
				this.$router.push('busadd');
			},
			jumpPersonCheck: function() {
				this.$router.push('personcheck');
			},
			jumpBusCheck: function() {
				this.$router.push('buscheck');
			}
		}
	}
</script>