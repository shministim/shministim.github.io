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
    }
})