// Ngăn chặn sự kiện mặc định của các phím tắt
window.addEventListener('keydown', function (event) {
	// Ngăn chặn hành động mặc định của phím tắt
	event.preventDefault();
});

// Ngăn chặn sự kiện mở menu ngữ cảnh
document.addEventListener("contextmenu", function (event) {
	// Ngăn chặn mở menu ngữ cảnh
	event.preventDefault();
});

// Ngăn chặn sự kiện chuột phải
document.addEventListener("mousedown", function (event) {
	// Kiểm tra nếu chuột phải được nhấn
	if (event.button === 2) {
		// Ngăn chặn hành động mặc định của chuột phải
		event.preventDefault();
	}
});
