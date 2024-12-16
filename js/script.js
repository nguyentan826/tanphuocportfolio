// Lấy các phần tử tab buttons và nội dung tab
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Xử lý sự kiện khi click vào từng tab
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Xóa class "active" khỏi tất cả các nút và nội dung
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Thêm class "active" cho nút và nội dung được chọn
    button.classList.add('active');
    const tabId = button.getAttribute('data-tab'); // Lấy ID của tab
    document.getElementById(tabId).classList.add('active'); // Hiển thị tab tương ứng
  });
});

// Lấy các phần tử tab buttons và nội dung tab mới
const tabButtons2 = document.querySelectorAll('.tab-buttons-2 button');  // Chọn tất cả các nút tab bên trong .tab-buttons-2
const tabContents2 = document.querySelectorAll('.tab-content-2');  // Chọn tất cả các phần tử nội dung tab có lớp .tab-content-2

// Xử lý sự kiện khi click vào từng tab mới
tabButtons2.forEach(button => {
  button.addEventListener('click', () => {
    // Xóa class "active-2" khỏi tất cả các nút và nội dung
    tabButtons2.forEach(btn => btn.classList.remove('active-2'));
    tabContents2.forEach(content => content.classList.remove('active-2'));

    // Thêm class "active-2" cho nút và nội dung được chọn
    button.classList.add('active-2');
    const tabId = button.getAttribute('data-tab');  // Lấy ID của tab từ thuộc tính data-tab
    document.getElementById(tabId).classList.add('active-2');  // Hiển thị tab tương ứng
  });
});
