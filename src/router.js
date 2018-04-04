import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Ty from './views/Ty.vue'
//import Tya from './views/Tya.vue'
import Lianxiwomen from './views/Lianxiwomen.vue'
import Loushidongtai from './views/Loushidongtai.vue'
import Quanxinshangpu from './views/Quanxinshangpu.vue'
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		
		{
			path: '/Ty',
			name: 'Ty',
			component: Ty,
//			children: [{
//				path: '/Ty/a',
//				name: 'Ty',
//				component: Tya,
//			}]
		},
		{
			path: '/loushidongtai',
			name: 'about',
			component: Loushidongtai
		},
		{
			path: '/lianxiwomen',
			name: 'about',
			component: Lianxiwomen
		}
		,
		{
			path: '/quanxinshangpu',
			name: 'about',
			component: Quanxinshangpu
		}
	]
})