var arr = [
    {h3 : "Mahadev Bhojnalay", dp : "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", p : "North Indian Thali", h1 : "16min" },
    {h3 : "Da pizzaria", dp: "https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80", p : "Pizzas & Burgers",h1 : "20min"},
    {h3 : "Manohar Dairy ", dp: "https://images.unsplash.com/photo-1571805341302-f857308690e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRpc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" , p: "Sweats, Desaert, street Food & More", h1 : "25min"},
    {h3 : "Zam Zam Fast food", dp: "https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", p : "North Indians Fast Foods & Indian Snacks ", h1: "10min"},
    {h3 : "Al-Beik - Indrapuri", dp: "https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", p : "North Indians Fast Foods & Indian Snacks ", h1: "10min"},
    {h3 : "99 rotiwala-bhopal", dp: "https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", p : "North Indians Fast Foods & Indian Snacks ", h1: "10min"},
    {h3 : "Burger King", dp: "https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", p : "North Indians Fast Foods & Indian Snacks ", h1: "10min"},
    {h3 : "Rajhans Restaurant ", dp : "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", p : "North Indian Thali", h1 : "16min" },
    {h3 : "Da pizzaria", dp: "https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80", p : "Pizzas & Burgers",h1 : "20min"},
    {h3 : "Rajwadi food corner", dp: "https://images.unsplash.com/photo-1571805341302-f857308690e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRpc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" , p: "Sweats, Desaert, street Food & More", h1 : "25min"},
    {h3 : "Sharma & Vishnu Fast Food", dp: "https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", p : "North Indians Fast Foods & Indian Snacks ", h1: "10min"},
    {h3 : "Hakeem's", dp: "https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", p : "North Indians Fast Foods & Indian Snacks ", h1: "10min"},
    {h3 : "Sagar Gaire Fast Food ", dp: "https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", p : "North Indians Fast Foods & Indian Snacks ", h1: "10min"},
    {h3 : "Amer Bakery Hut", dp: "https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", p : "North Indians Fast Foods & Indian Snacks ", h1: "10min"},
    {h3 : "Al-Beik - MP Nagar", dp: "https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", p : "North Indians Fast Foods & Indian Snacks ", h1: "10min"},
    {h3 : "Zam Zam Fast food", dp: "https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", p : "North Indians Fast Foods & Indian Snacks ", h1: "10min"}    
];

function show(){
    var clutter = ``;
   arr.forEach(function(val,index){
    clutter += ` <div id="card">
    <div class="top">
        <img id=${index} src=${val.dp} alt="">
    </div>
    <div class="content">
      <h3>${val.h3}</h3>
      <p>${val.p}</p>
      <button>Add to CARD</button>
    </div>
</div>`;            
   });
    document.querySelector("#cards").innerHTML = clutter;
  
};
show();
    
document.querySelector("#main #box .arrow").addEventListener("click",function show1(){
               console.log("hey !")
            //   var temp =``
            //   arr.forEach(function(elem,index){
            //       temp += ` <img id=${index} src=${elem.dp} alt="">
            //       <div class="b1"><h3>${elem.h3}</h3></div>
            //       <div class="b2"><h3>${elem.h3}</h3></div>
            //       <div class="off"><h3>OFFER%</h3></div> `
            //   });
            //   document.querySelector("#box").innerHTML = temp;
 });
