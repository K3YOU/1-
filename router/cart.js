module.exports = function(app){


    // 장바구니 삭제
    app.get("/deletePro", function(req, res){
        var cartDB = req.session.cartDB;

        var cartNo = req.query.cartNo;
        var index = 0;
        for(var i=0; i<cartDB.length; i++) {
            if(cartDB[i]["cartNo"] == cartNo) {
                index = i;
                break;
            }
        }
        cartDB.splice(index, 1);

        res.redirect("cartInfo"); 
    });




}