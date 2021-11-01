const app = Vue.createApp({
    data(){
        return{
            title : "Hello",
            author : "brendan erich",
            age: 50
        }
    },
    methods:{
        changeName(){
            this.title = "Hello Javascript"
        },
        increaseAge(){
            this.age++;
        }
    }
});

app.mount('#app');