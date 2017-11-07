<template>
	<div>
		<input type="text" :value="pal" class="pal">
	</div>
</template>
<script>
	export default {
		data: function() {
			return {
				pal: '33',
				sa: 'pal'
			}
		}
	}
</script>
<style type="text/css">
	.pal{
		border: 1px blue solid;
		color: red;
	}
</style>