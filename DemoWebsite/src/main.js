import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import DealsView from '@/components/DealsView.vue'
import HomeView from '@/components/HomeView.vue'
import "@/css/main.scss";


const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        { path: "/", component: HomeView },
        { path: "/deals", component: DealsView }
    ]
});


createApp(App).use(router).mount("#app");
