$(document).ready(function() {

	$.ajax({
		url: "CrawlingPost.ajax",
		type: "post",
		dataType: "json",
		success: function(crawling) {

			console.log(crawling);

			for (let i = 0; i < 5; i++) {
				$('#ajaxcontainer').append(`
				<div class="col-md-4">
					<div class="card shadow-sm">
						<img src="` + crawling[i].src + `">
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="#55595c" />
						</svg>
						<div class="card-body">
							<p class="card-text">`+ crawling[i].tag + `</p>
							<text id="hashtag" x="50%" y="50%" fill="#eceeef" dy=".3em">`+ crawling[i].season + `</text>
							<div class="d-flex justify-content-between align-items-center">
								<div class="btn-group row" id="contentmodal">
									<button type="button" class="btn btn-view btn-sm btn-outline-secondary" onclick="location.href='gopostdetail.do'">View</button>
									<button type="button" class="btn btn-view btn-sm btn-outline-secondary view-btn"
										data-id=`+ crawling[i].crawlingIdx + ` data-bs-toggle="modal" data-bs-target="#postModal">View</button>
								</div>
								
							</div>
						</div>
					</div>
				</div>`

				);
			}


			$(document).on('click', '.view-btn', function() {
				let postIdx = $(this).data('id') - 1; // 게시물 ID 가져오기
				// postIdx를 이용하여 해당 게시물의 상세 정보를 가져오는 로직 구현
				// AJAX 요청, 성공 콜백에서 모달의 내용을 채우는 로직 구현



				$('#postModal .modal-body').html(posts[postIdx].postContent + "<br>"
					+ posts[postIdx].hashTag
				);
			});



		},
		error: function() {
			console.log("연결 실패");
		}
	})
});
$("#ajaxcontroller").on("click",()=>{
	$.ajax({
		url:"Posts.ajax",
		dataType:"json",
		success: function(e){
			console.log("ajax컨트롤러를 경유")
			console.log(e)
		},error: function(r){
			console.log("ajax컨트롤러 경유실패")
		}
})
	
})