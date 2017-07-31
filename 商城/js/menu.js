/*向DIV内添加菜单元素*/
function addMenu(menu) {
	menu.append("<ul class='list-unstyled'>" +
	"<li><a href='#'><span class='glyphicon glyphicon-home'></span><p>首页</p></a></li>" +
	"<li><a href='#'><span class='glyphicon glyphicon-list'></span><p>分类</p></a></li>" +
	"<li><a href='#'><span class='glyphicon glyphicon-search'></span><p>搜索</p></a></li>" +
	"<li><a href='#'><span class='glyphicon glyphicon-shopping-cart'></span><p>购物车</p></a></li>" +
	"<li><a href='#'><span class='glyphicon glyphicon-user'></span><p>个人中心</p></a></li>" +
	"<ul>");
}
/*将menu固定到底部*/
function setMenuFixed(menu){
	menu.css({
		"position":"fixed",
		"bottom":"0"
	});
}
/**添加搜索页面**/
function addSearch(content){
	content.append("");
}
