function addPosts() {
	var bRow = document.querySelectorAll("#blog-row");
	var bNum = document.querySelectorAll("#blog-num");
	var bTi = document.querySelectorAll("#blog-title");
	var bDate = document.querySelectorAll("#blog-date");
	var bCred = document.querySelectorAll("#blog-author");
	var counter = bRow.length;
	for(var i=0;i<bRow.length;i++) {
		bNum[i].innerHTML = '<a href="./blog/post_'+counter+'.html">#'+counter+ '</a>';
		$(bTi[i]).load('./blog/post_'+counter+'.html #blog-header');
		$(bDate[i]).load('./blog/post_'+counter+'.html #blog-footer');
		bCred[i].innerHTML = '<a href="./about.html">Malodreth</a>';
		counter = counter - 1;
	}
}

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