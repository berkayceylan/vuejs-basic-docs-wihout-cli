new Vue({
    el: "#app",
    data: function(){
        return {
            name: "Berkay CEYLAN",
            counter: 0,
            counter2: 0,
            counterStatus: "No change"
        }
    },
    methods: {
        infCounter: function(str){
            console.log(str);
            return this.counter > 10 ? "Counter bigger than 10" : "Counter smaller than 10";
        },
        footer: function(name){
            console.log("Run footer method")
            return "Created by " + name
        }
    },
    computed: {
        _infCounter: function(){
            console.log("Run - Computed");
            //this.infCounter("Method"); //We can run function in computeds
            return (this.counter > 10 ? "Counter bigger" : "Counter smaller") + " than 10";
        },
        _footer: function(name){
            return this.footer("Berkay CEYLAN");
        }
    },
    watch: {
        counter: function(value){
            var vm = this;
            vm.counterStatus = "Changing";
            setTimeout(function(){
                vm.counterStatus = "Changed " + value; //_.debounce
            }, 2000);
        }
    }
});