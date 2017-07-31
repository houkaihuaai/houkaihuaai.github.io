function addSearch() {
	$("body").append("<div class='search'>" +
		"<div class='header bg-primary'>" +
		"<span class='title'>搜索</span>" +
		"<span class='glyphicon glyphicon-remove-circle pull-right'></span>" +
		"</div>" +
		"<div class='input-group input-group-lg'>" +
		"<input type='text' class='form-control' id='search' placeholder='请输入你要查找商品名称' />" +
		"<span class='input-group-btn'>" +
		"<button type='button' class='btn btn-default search-btn'>" +
		"<i class='glyphicon glyphicon-search'></i>" +
		"</button>" +
		"</span>" +
		"</div>" +
		"<h4>热门搜索:</h4>" +
		"</div>");
}
