let lang;

const index = window.location.href.indexOf("?");
if(index != -1){
    lang = window.location.href.substr(index + 6, 2);
}

console.log(lang);

if(lang != "he"){
    lang = "en"
}

console.log(options[lang]);

var data = options[lang]

var app = new Vue({
    el: '#app',
    data: data,
    methods: {
        hideNavBar: function(element){
            $('.navbar-collapse').collapse('hide');
            setTimeout(() => {
                console.log(window.innerHeight);
                console.log(document.innerHeight);
                if(window.scrollY != window.innerHeight){
                    window.scroll(0, window.scrollY - 56);
                }
            }, 10)
        }
    }
})