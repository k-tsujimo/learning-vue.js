var items = [
    {
        name: '鉛筆',
        price: 300,
        quantity: 0
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

var vm = new Vue(
    {
        el: "#b-button",
        data: {
            loggedInButton: 'ログイン済みのため購入できます'
        }
    }
)
window.vm = vm