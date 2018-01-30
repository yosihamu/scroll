
$(function(){
	// ページ内移動のナビゲーションをクリック
	$("a[href^='#']:not([href='#'])").click(function(){

		// 移動先のコンテンツ位置を取得
		var target = $($(this).attr("href")).offset().top;
		
		// 45px減らす。任意の位置にスクロールできるように調整する
		//target -= 45;

		// コンテンツへスクロール。スクロールのアニメーション速度は、500の部分を変更することで調整
		$("html, body").animate({scrollTop: target}, 500);

		return false;
	});

	//ページの先頭へのスクロール。ページのトップにtopというＩＤを付ける
	$('#top').click(function(){
	// 先頭
	var target = 0;
		
	// コンテンツへスクロール
	$("html, body").animate({scrollTop: target}, 500);

	return false;
	});
});
