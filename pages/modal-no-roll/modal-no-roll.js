

Page({
    data: {
        list:[1,2,3,4,5,6,7,8, 1,2,3,4,5,6,7,8,5,6,7,8],
        showModal: false
    },
    onLoad: function() {},
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
