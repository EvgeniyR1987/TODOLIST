Vue.createApp({
    data(){
        return{
          placeholder: 'Start typing',
          inputvalue: '',
          notes: []
        }
    },
    methods: {
        inputchange(event){
          this.inputvalue=event.target.value
        },
        addnewtask(){
            this.notes.push(this.inputvalue)
            this.inputvalue=''
        },
        removetask(index){
            this.notes.splice(index, 1)
        }
    }
}).mount(app)