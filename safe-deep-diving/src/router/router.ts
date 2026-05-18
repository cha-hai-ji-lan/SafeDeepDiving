import { createRouter, createWebHistory } from 'vue-router'
import MainThree from '../interface/mainPage/MainThree.vue'
import basePage from '../interface/mainPage/setting/basePage.vue'
// import DrawTwoPiece from '../components/page/DrawTwoPiece.vue'
// import DrawFourPiece from '../components/page/DrawFourPiece.vue'
// import DrawSixPiece from '../components/page/DrawSixPiece.vue'
// import Setting from '../components/page/Setting.vue'
const router = createRouter({
    history: createWebHistory(), // 路由器的工作模式
    routes: [
        {
            path: '/', // 添加根路径路由
            component: MainThree // 可以选择一个组件作为默认页面
        },
        {
            path: '/setting', // 设置的路由默认应该指向一般设置
            component: basePage
        },
        {
            path: '/setting/base-page', 
            component: basePage
        },
    ]
})

// 暴露路由
export default router