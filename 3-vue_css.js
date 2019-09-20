new Vue({
    el: "#app",
    data: function(){
        return {
            attachedClass: true,
            color: "bg-lightblue",
            width: 100,
            height: 100
        }
    },
    computed: {
        divClass: function(){
            return {
                "bg-yellow": this.attachedClass,
                "bg-purple": !this.attachedClass
            }
        },
        _width: function(){
            return {
                "width": this.width + "px",
                "height": this.height + "px",
            }
        }
    }
});