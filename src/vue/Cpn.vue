<template>
	<div>
		<h2>我是标题</h2>
		<p class="title">我是内容</p>
		<h6>{{message}}</h6>
		<button @click="cpn_click">我是按钮</button>
	</div>
</template>

<script>
	export default {
		name: 'Cpn',
		data(){
			return {
				message: "huangfu"
			}
		},
		methods:{
			cpn_click(){
				alert("---------------------")
			}
		}
	}
</script>

<style scoped="scoped">
	.title {
		color: red;
	}
</style>
