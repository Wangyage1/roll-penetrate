

Page({
    data: {
        list:[],
        showModal: false
    },
    onLoad: function() {
        const list = [];
        for(let i =0;i<20;i++) {
            list[i] = 'list'+i;
        }
        this.setData({
            list: list
        })
    },
    handleClick: function() {
       this.setData({
            showModal: true
       })
    },
    handleBtnClick: function () {
        this.setData({
            showModal: false
       }) 
    }
});
