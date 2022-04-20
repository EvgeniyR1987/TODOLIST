Vue.createApp({
    data(){
        return{
          placeholder: 'Start typing',
          inputvalue: '',
          notes: [],
          checked: []
        }
    },
    mounted() {
        try {
          this.notes = JSON.parse(localStorage.getItem('note'))
        } 
        catch(e) {
          this.notes = []
        }
    },
    watch: {
            notes: {
                handler: function() {
                localStorage.setItem('note', JSON.stringify(this.notes));
                },
                deep: true
            }
    },
    methods: {
        addnewtask(){
            if (this.inputvalue !== ''){
                this.notes.push(this.inputvalue)
                this.inputvalue=''
            }
        },
        removetask(index){
            if (confirm('Do you really want to delete?'))
            this.notes.splice(index, 1)
        }
    }
}).mount(app)
