new Vue({
    el: "#app",
    data: {
            name: "Berkay",
            surname: "CEYLAN",
            inf: "My First VueJs App",
            btn1Name: "Button1",
            link: "https://berkayceylan.com",
            button: "<button v-on:click=\"changeName('Hüseyin')\">My Button</button>", //render edilmediği için click çalışmaz
            button2: "<button>My Button 2</button>",
            mouseX: 0,
            mouseY: 0

        },
    methods: {
        changeInf: function ( e, param1){
            this.inf = e.target.value;
        },
        btn1: function(message){
            this.inf = message;
        },
        footer: function(text){
            return "Created By: " + text;
        },
        changeName: function(name)   {
            return this.name = name;
        },
        mouseMove: function (e){
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        },
        showAlert(e){
            alert(e.target.value);
        }
    }
});

/*
    () => {} neden anlık çalışmıyor ???
*/

// data: {
//     name: "Berkay",
//     surname: "CEYLAN",
//     inf: "My First VueJs App",
//     btn1Name: "Button1",
//     link: "https://berkayceylan.com"
// }