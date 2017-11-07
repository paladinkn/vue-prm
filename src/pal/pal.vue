<template>
	<div >
        <div v-html="pal"></div>
        <div class="hello" v-html="test"></div>
    </div>
</template>
<script>
import util from '../util';
	export default {
		data: function() {
			return {
				pal: 'this is pal',
                test:'test'
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