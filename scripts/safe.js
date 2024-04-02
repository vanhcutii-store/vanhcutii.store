// Hàm để kiểm tra xem DevTools đã mở hay không
function checkDevTools() {
    // Kiểm tra kích thước của một đối tượng mảng trong DevTools
    const element = new Image();
    let devtoolsOpened = false;

    // Định nghĩa getter cho thuộc tính id
    element.__defineGetter__('id', function() {
        devtoolsOpened = true;
    });

    // Log đối tượng vào console
    console.log(element);

    // Kiểm tra trạng thái của DevTools sau một khoảng thời gian ngắn
    setTimeout(function() {
        // Nếu DevTools đã mở, thực hiện hành động mong muốn
        if (devtoolsOpened) {
            // Thực hiện hành động xáo trộn ở đây
            document.documentElement.innerHTML = '<h1>Mã code đã bị xáo trộn!</h1>';
        }
    }, 1000); // Kiểm tra sau 1 giây
}

// Gắn sự kiện keydown để kiểm tra xem người dùng đã nhấn Ctrl+U hoặc F12 hoặc Ctrl+Shift+I hay không
window.addEventListener('keydown', function(event) {
    if ((event.ctrlKey && event.key === 'u') || event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'i')) {
        checkDevTools();
    }
});
