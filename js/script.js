Vue.config.devtools = true;

new Vue({

    el:'#app',
    data:{

      toDoList:[
          'Fare lo yoga',
          'Chiamare mamma',
          'Fare la spesa'
      ],
        newTask:'',
    },
    mounted(){
        this.autofocus();
    },
    methods:{
        autofocus: function(){
            const element = document.getElementById('newTaskElement');
            element.focus();
        },
        addTask: function(){
            this.toDoList.push(this.newTask);
            this.newTask='';
            this.autofocus();
        },
        deleteTask: function (index){
            this.toDoList.splice(index, 1),
            this.autofocus();
        },
        keyUp: function(){

        }
    } 
})