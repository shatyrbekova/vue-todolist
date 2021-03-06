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
            //per aggiungere un nuovo task, creo metodo con il push
            this.toDoList.push(this.newTask);
            this.newTask=''; //per svuotare l'input richiamo newTask vuoto
            this.autofocus();
            

        },
        deleteTask: function (index){
            //invece, per cancellare un task dalla lista, creo un metodo con lo splice,
                            // index=start, 1 - quanto elemento cancello(uno e 2 ecc..)
            this.toDoList.splice(index, 1),
            this.autofocus();
        },
        
    } 
})