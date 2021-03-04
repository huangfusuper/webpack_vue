import * as StringUtil from "./js/StringUtil.js"
import myless from './css/myless.less'
import styleCss from './css/style.css';

import Vue from 'vue'
//import App from './vue/app.js'
import App from './vue/App.vue'



const vie = new Vue({
	el: '#app',
	data: {
		
	},
	template: '<App/>',
	components:{
		App
	}
});

/* 
 * template: vue内部会将该数据替换到el标签代表的模块
 * el: div app
 */

console.log(StringUtil.joinString(['huangfu','kexing','zan','peng','xia'],'--'))