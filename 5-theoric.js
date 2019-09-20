//Basit Component

Vue.component("hello",{
    template: "<h1>Merhabaaaaa</h1>"
});
var data = {
    head: "Head Of Page"
}
var vm1 = new Vue({
    data: data,
    methods: {
        changeHead: function(){
            this.head = "Changed head";
            this.$refs.myButton.innerText = "Button Text Changed"
        }
    },
    computed: {
        writeHead: function(){
            return "Returned - " + this.head;
        }
    }
});
//Dışarıdan root container'ı mount edebiliriz. 
//Hazır tema kullandığımız zamanlarda işimize yarayabilir.
vm1.$mount("#app");


console.log(vm1);
//vueJS watcher layer katmanı kullanır.

// === tür olarak eşit mi?

//console.log(vm1);
//vuejs uygulamalarına dışarıdan javascript koduyla erişebiliriz.
//Yani vuejs i uygulamarımıza yardımcı olması için kullanabiliriz.
console.log(vm1.$data.head); // === vm1.head

//VueJS ile render edilmez
//$ işareti ile vuejs'in sağladığı method veya property lere erişebiliriz.
vm1.$refs.myHead.innerText = "ref tarafından değiştirildi.";


setTimeout(function(){
    vm1.$data.head = "asdas";
}, 1500)


var vmDate = new Vue({
    el : "#date"
});
//$el, $data, $refs

//template ile container içerisindeki html'i oluşturabiliriz.
var vm3 = new Vue({
    template: "<h1>Merhabalar...</h1>"
});
//# = diyez
vm3.$mount();
console.log(vm3);
//Bu şekilde de mount edebiliriz...
document.getElementById("app3").appendChild(vm3.$el);


//Vue Instance Dom ilişkisi
//Vue Instance - Virtual Dom - Dom
//Bunun sonucunda yavaşlama yaşanmıyor

//VueJS Instance Yaşam döngüsü (LifeCycle)
new Vue({
    el: "#lifeCycle",
    data: {
        title: "Title"
    },
    methods: {
        destroy: function(){
            this.$destroy();
        }
    },
    beforeCreate: function(){
        console.log("beforeCreate()");
    },
    created: function(){
        console.log("create()");
    },
    beforeMount: function(){
        console.log("beforeMount");
    },
    mounted: function(){
        console.log("mounted");
    },
    beforeUpdate: function(){
        console.log("beforeUpdate()");
    },
    updated: function(){
        console.log("update()")
    },
    beforeDestroy: function(){
        console.log("beforeDestroy()");
    },
    destroyed: function(){
        console.log("destroyed");
    }
})