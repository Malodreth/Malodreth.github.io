function pager() {
	var pageNum = $("#post-no").text();
	var realNum = parseInt(pageNum, 10);
	var prev = document.querySelector("#prev");
	var next = document.querySelector("#next");
	var prevNum = realNum - 1;
	var nextNum = realNum + 1;
	if(prevNum != 0) {
		prev.insertAdjacentHTML("afterbegin", '<a href="../blog/post_'+prevNum+'.html">Prev</a>');
	}else{
		prev.insertAdjacentHTML("afterbegin", '<a href="../blog.html">Prev</a>');
	}
	next.insertAdjacentHTML("afterbegin", '<a href="../blog/post_'+nextNum+'.html">Next</a>');	
}

var author=document.querySelector("#blog-footer");
var avatar = document.querySelector("#blog-avatar");
author.insertAdjacentHTML("afterbegin", '&raquo; Posted by <a href="../about.html">Malodreth</a> on ');
avatar.innerHTML = '<img src="../assets/images/malodreth.jpg" width="150" height="150" alt="User image" /><br /><hr style="margin-bottom:5px;margin-top:10px;" /><p style="font-size:18px;"><b><a href="../about.html">Malodreth</a></b></p><p><b>Age:</b> 23</p><p><b>Location:</b> Bakersfield, CA</p><p><a class="btn btn-danger btn-xs" href="mailto:malodreth@gmail.com"><span class="glyphicon glyphicon-envelope"></span></a><a class="btn btn-danger btn-xs" href="http://www.facebook.com/malodreth" target="_blank"><span class="fa fa-facebook-official"></span></a></span></a><a class="btn btn-danger btn-xs" href="http://steamcommunity.com/id/malodreth" target="_blank"><span class="fa fa-steam-square"></span></a></p>';
var avatarStyle = document.createElement("STYLE");
var jsStylesheet = document.createTextNode("@media screen and (max-width:991px){#blog-avatar{display: none;}}@media screen and (min-width:1200px){#blog-avatar{min-height:500px;border-right:1px solid #EBCCD1;}#blog-content{min-height:400px;}#blog-avatar p{margin:2px;font-size:13px;}#post-no{padding-right:157px;border-right:1px solid #D9534F;}}");
avatarStyle.appendChild(jsStylesheet);
document.head.appendChild(avatarStyle);
