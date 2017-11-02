<template>
	<div v-html="pal"></div>
</template>
<script>
import util from '../util';
	export default {
		data: function() {
			return {
				pal: 'this is pal'
			}
		},
		mounted: function() {
			util.pajax({
				url: '/pal',
				data: {name: 'yangtian'},
				success: function(data) {
					console.log(data);
				},
				error: function(data) {

				}
			})
		}
	}
</script>