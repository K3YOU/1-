// carNo 최대값 구하기
function getMaxCountNo(cartDB) {
    var maxNo = 0;
    for(var i=0; i<cartDB.length; i++) {
        if(maxNo < cartDB[i]["cartNo"]) {
            maxNo = cartDB[i]["cartNo"];
        }
    }
    return maxNo;
}

// 내 장바구니 총 결제 금액 구하기
// function getMyCartTotal(cartDB, log) {
//     var total = 0;
//     for(var i=0; i<cartDB.length; i++) {
//         if(cartDB[i]["cartMemberId"] == log) {
            
//             total += cartDB[i]["cartBuyPrdPrice"] * cartDB[i]["cartsalesQunatity"];
//         }
//     }
//     return total;
// }

// module.exports = function(app,prdData){
//      // 장바구니 등록 페이지
//         //상세페이지 -> 키 값별로 페이지 내용 바뀌게
//         var testArray = [];

//         app.get("/cartPro",function(req,res){
//             var key = req.query.key;
//             res.redirect("cart")
//         })


//         // app.get("/cart?key="+prdData, function(req, res){ 
//         //     var log = req.session.log;
            
//         //     testArray.push(prdData);

//         //     // 회원가입이 안 될 때,
//         //     if(log != null) {
//         //         return res.redirect("memberLogin");
//         //     } else {
//         //         console.log(testArray, "testArray")
//         //         var cartDB = req.session.cartDB;
//         //         var cartNo = Number(getMaxCountNo(cartDB)) + 1;
//         //         var cartMemberId = log;
//         //         var cartPrdName = req.query.PrdName;
//         //         var cartBuyCount = Number(req.query.cartbuyCount);
//         //         var cartPrdImage = req.query.prdImage;
//         //         var cartBuyPrdPrice = Number(req.query.prdPrice);
//         //         var cartdscntRate = Number(req.query.cartdscntRate)
//         //         var cartkey = req.query.key;
//         //         var cartsalesQuantity = Number(req.query.salesQuantity)
                

//         //         var cart = 
//         //             {"cartNo" : cartNo, 
//         //             "cartMemberId" : cartMemberId, 
//         //             "cartPrdName" : cartPrdName,
//         //             "cartPrdImage" : cartPrdImage,
//         //             // "cartbrndName" : cartbrndName  , 
//         //             "cartsaleOrNot " : true, 
//         //             "cartBuyCount" :cartBuyCount , 
//         //             "cartPrdImage" : cartPrdImage, 
//         //             "cartdscntRate": cartdscntRate,
                    
//         //             "cartBuyPrdPrice" : cartBuyPrdPrice  , 
//         //             "cartsalesQuantity":cartsalesQuantity,
                   
//         //         }
                
    
//         //         cartDB.push(cart);

//         //        return res.redirect("cart");
//         //     }
            
//         // });


//     // 장바구니 확인 페이지
//     // app.get("/cartInfo", function(req, res){
//     //     var log = req.session.log;
//     //     var cartDB = req.session.cartDB;
//     //     var name = req.session.name;


//     //     if(log == null) {
//     //         res.redirect("memberLogin");
//     //     } else {

//     //         var total = getMyCartTotal(cartDB, log);
//     //         var renderData = {	
//     //             "log" : log,
//     //             "name" : name,
//     //             "cartDB" : cartDB,
//     //             "total" : total
//     //         };
//     //         res.render("cart.ejs", renderData); 
//     //     }
//     // });


//     // 장바구니 삭제
//     // app.get("/deletePro", function(req, res){
//     //     // var cartDB = req.session.cartDB;
//     //     // var cartNo = req.query.cartNo;
//     //     cartDB = [1];
//     //     req.session.scoreDB = cDB
//     //     var index  = req.query.index
//     //     // var index = 0;
//     //     // for(var i=0; i<cartDB.length; i++) {
//     //     //     if(cartDB[i]["cartNo"] == cartNo) {
//     //     //         index = i;
//     //     //         break;
//     //     //     }
//     //     // }
//     //     cDB.splice(index, 1);

//     //     res.redirect("cart"); 
//     // });


// };