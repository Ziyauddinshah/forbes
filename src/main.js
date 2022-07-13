import  { createApp }  from 'vue'
import App from './App.vue'

import JwPagination from 'jw-vue-pagination'
const app = createApp(App)
app.component('jw-pagination', {JwPagination});

app.mount('#app')
