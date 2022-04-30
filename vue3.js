Vue.createApp({
  data() {
    return {
      placeholder: 'Start typing',
      inputvalue: '',
      notes: [],
      activeEdit: null
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
  mounted() {
    this.initNotes();
  },
  methods: {
    initNotes() {
      const NOTE_FROM_LOCAL_STORAGE = localStorage.getItem('note');
      if (NOTE_FROM_LOCAL_STORAGE) {
        try {
          this.notes = JSON.parse(NOTE_FROM_LOCAL_STORAGE);
        } 
        catch(err) {
          console.err(err)
        }
      }
    },

    addnewtask() {
      if (this.inputvalue !== '') {
        this.notes.push({
          title: this.inputvalue,
          checked: false
        })
        this.inputvalue = ''
      }
    },

    removetask(index) {
      if (confirm('Do you really want to delete?'))
        this.notes.splice(index, 1)
    },

    editNote(note, noteIndex) {
      this.activeEdit = note;
      this.setFocusToNoteInput(noteIndex);
    },

    setFocusToNoteInput(noteIndex) {
      setTimeout(() => {
        this.$refs.notes[noteIndex].focus();
      });
    },

    doneEdit(note) {
      if (!this.activeEdit) {
        return
      }
      this.activeEdit = null
      note.title = note.title.trim()
    },
  }
}).mount('#app')
