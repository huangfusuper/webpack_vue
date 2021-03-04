<template>
	<div class="title">
		{{message}}
		<Cpn></Cpn>
	</div>
	
</template>

<script>
	import Cpn from './Cpn.vue'
	export default {
		name: 'App',
		data(){
			return {
				message: "Hello Webpack Vue"
			}
		},
		methods:{
			
		},
		components:{
			Cpn
		}
	}
</script>

<style scoped>
	.title {
		color: green;
	}
</style>
