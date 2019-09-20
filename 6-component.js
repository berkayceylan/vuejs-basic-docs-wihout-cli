//For Global data
var data = {
    status: "pasif"
}


//For Global Component
Vue.component("my-comp", {
    data: function(){
        return {
            status: "Pasif"
        };
    },
    template: '<p> {{status}} (<button @click="changeStatus"> Click </button>) </p> ',
    methods: {
        changeStatus: function(){
            this.status = "aktif";
        }
    }
});

//For Local Component
var comp = {
            data: function(){
                return {
                    name: "Berkay"
                };
            },
            template: '<p> {{name}} (<button @click="changeName"> Click </button>) </p> ',
            methods: {
                changeName: function(){
                    this.name = "Berkay CEYLAN";
                }
            }
        }

new Vue({
    el: "#app"
});
new Vue({
    el: "#app2",
    components: { //local component
        "name": comp
    }
});