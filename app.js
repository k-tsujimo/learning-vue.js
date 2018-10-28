var items = [
    {
        name: '鉛筆',
        price: 300,
        quantity: 15
    },
    {
        name: 'notebook',
        price: 400,
        quantity: 0
    },
    {
        name: 'eraser',
        price: 500,
        quantity: 0
    }
]

var vm = new Vue({
    el: "#app",
    data: {
        items: items
    },
    filters: {
        numberWithDelimiter: function (value) {
            if(!value){
                return '0'
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
        }
    }
})
window.vm = vm