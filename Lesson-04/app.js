window.addEventListener('load', () => {

    window.vue = new Vue({
        el: '#vmodel',
        data: {
            message: 'Hello World'
        },
        methods: {
            log() {
                console.log(this.message);
            }
        }
    })
})