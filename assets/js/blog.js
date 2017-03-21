function addPosts() {
	var bRow = document.querySelectorAll("#blog-row");
	var bNum = document.querySelectorAll("#blog-num");
	var bTi = document.querySelectorAll("#blog-title");
	var bDate = document.querySelectorAll("#blog-date");
	var bCred = document.querySelectorAll("#blog-author");
	var counter = bRow.length;
	for(var i=0;i<bRow.length;i++) {
		bNum[i].innerHTML = '<a class="button btn-danger btn-xs" href="./blog/post_'+counter+'.html">'+counter+'</a>';
		$(bTi[i]).load('./blog/post_'+counter+'.html #blog-header');
		$(bDate[i]).load('./blog/post_'+counter+'.html #blog-footer');
		bCred[i].innerHTML = '<a href="./about.html">Malodreth</a>';
		counter = counter - 1;
	}
}