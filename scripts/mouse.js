const customCursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', function(e) {
  customCursor.style.top = e.clientY + 'px'; // Sử dụng clientY để lấy tọa độ y của con trỏ chuột
  customCursor.style.left = e.clientX + 'px'; // Sử dụng clientX để lấy tọa độ x của con trỏ chuột
});

document.addEventListener('mouseenter', function() {
  customCursor.querySelector('img').style.display = 'block'; // Hiển thị hình ảnh con trỏ khi vào trang
  document.body.style.cursor = 'none'; // Ẩn con trỏ mặc định của trình duyệt
});

document.addEventListener('mouseleave', function() {
  customCursor.querySelector('img').style.display = 'none'; // Ẩn hình ảnh con trỏ khi rời khỏi trang
  document.body.style.cursor = 'default'; // Hiển thị lại con trỏ mặc định của trình duyệt khi rời khỏi trang
});
