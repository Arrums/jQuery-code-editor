//putting content  from html, css, and js into iframe
function updateOutput() {
	$("iframe")
		.contents()
		.find("html")
		.html(
			"<html><head><style type='text/css'>" +
				$("#cssPanel").val() +
				"</style></head><body>" +
				$("#htmlPanel").val() +
				"</body></html>",
		);

	//using eval to evaluate js
	let outputPanel = document.getElementById("outputPanel");

	outputPanel.contentWindow.eval($("#javascriptPanel").val());
}

//changing color of the button when mouse hover
$(".header__nav__btn")
	.on("mouseenter", function () {
		$(this).addClass("highlight-btn");
	})
	.on("mouseleave", function () {
		$(this).removeClass("highlight-btn");
	});

$(".header__nav__btn").on("click", function () {
	$(this).toggleClass("active");
	$(this).removeClass("highlight-btn");

	let panelId = $(this).attr("id") + "Panel";

	//selecting the panel and toggle hidden class
	$("#" + panelId).toggleClass("hidden");
});

//resize panel's height according to user window height and padding
$(".container__panel").height($(window).height() - $(".header").height() - 18);

//resize panel's width according to user window width
$(".container__panel").width($(window).width() / 2 - 10);

updateOutput();

//automatically update the iframe when anything changes in textarea
$("textarea").on("change keyup paste", function () {
	updateOutput();
});
