import VueRouter from 'vue-router';
import Alburm from '../views/Alburm.vue';
import Todo from '../views/Todo.vue';

export const router = new VueRouter({
mode: 'history',
    routes:[
        //path : url 주소, component : 페이지에 보여질 컴포넌트
        {
            path: '/alburm',
            name : 'Alburm',
            component: Alburm,
        },
        {
            path: '/todo',
            name : 'Todo',
            component: Todo,
        }
    ]
});