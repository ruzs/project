var item="https://awiclass.monoame.com/api/command.php?type=get&name=itemdata";
var shoplist={};

shoplist.name="MyBuylist 購物清單";
shoplist.time="2021/1/2";
shoplist.list=[
  {name: "吹風機",price: 300},
  {name: "麥克筆",price: 9000},
  {name: "筆記型電腦",price: 50000},
  {name: "Iphone 9",price: 32000},
  {name: "神奇海螺",price: 5000}
];

$.ajax(
  //利用ajax載入其他網頁中之物件
  {
    url: item,
    success: function(res){
      shoplist.list=JSON.parse(res);
      //利用JSON將表格的格式 物件化
      showlist();
    }
  }
);

var item_html="<li id={{id}} class='buy_item'>{{num}}.{{name}}<div class='price'>{{price}}</div><div id={{del_id}} data-delid={{del_item_id}} class='del_btn'>X</div></li>";

var total_html="<li class='buy_item total'>總價<div class='price'>{{price}}</div></li>";

function showlist(){
  //將列印表單用function 進行模組化
  
  $("#items_list").html("");
  // 重置表單
  
  var total_price=0;
  // 重置總價
  
  for(var i=0;i<shoplist.list.length;i++){
    //用迴圈修改即將輸出的陣列中每個品名及價格 
    
    var item=shoplist.list[i];
    //將物件shoplist中陣列list的內容添加到 item
    
    var item_id="buyitem_"+i;
    //將物件shoplist中陣列list的內容添加id名稱為 buyitem_i  //56行
    
    var del_item_id="del_buyitem_"+i;
    //將物件shoplist中陣列list的內容添加新屬性名稱為 del_buyitem_i (此屬性為刪除用)//57行
    
    if(item.price > 0){
      total_price+=parseInt(item.price);
    }else
      total_price += 0;
    
    var current_item_html=
        item_html.replace("{{num}}",i+1)
                 .replace("{{name}}",item.name)
                 .replace("{{id}}","item_id")
                 .replace("{{del_id}}",del_item_id)
                 .replace("{{price}}",item.price.toLocaleString('en-US'))
                 .replace("{{del_item_id}}",i)
    ;

    $("#items_list").append(current_item_html);
    //列印陣列list
    $("#"+del_item_id).click(
      function(){
        remove_item(parseInt($(this).attr("data-delid")));
        //刪除品項      //94行
      }
    );
  };
  
  var current_total_html=
    //列印總價欄位
    total_html.replace("{{price}}",total_price.toLocaleString('en-US'));
  $("#items_list").append(current_total_html);
}
showlist();

$("#input_price").val("");
$(".addbtn").click(
  //手動新增品名&價格到list陣列中
  function(){
   shoplist.list.push(
      {
        name:$("#input_name").val(),
        price:$("#input_price").val()
      }
    );
  $("#input_name").val("");
  $("#input_price").val("");
  showlist();
  }
);

function remove_item(id){
  //將刪除品項用function 進行模組化
  shoplist.list.splice(id,1);
  showlist();
}
