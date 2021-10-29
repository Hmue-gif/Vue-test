const app = Vue.createApp({
    data(){
        return{
            title : "Hello",
            author : "brendan erich",
            age: 50
        }
    }
});

app.mount('#app');