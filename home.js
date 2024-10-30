const popups = document.querySelectorAll('.popup');
const popupBtns = document.querySelectorAll('.popupBtn');
const closeBtns = document.querySelectorAll('.close-btn');

// Hiển thị popup khi nhấn nút dấu cộng cho từng nút
popupBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        popups[index].style.display = 'block';
    });
});

// Đóng popup khi nhấn nút "x"
closeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        popups[index].style.display = 'none';
    });
});

// Đóng popup khi nhấn bên ngoài form
window.addEventListener('click', (event) => {
    popups.forEach((popup) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});

    // Hàm tìm kiếm
    function searchCards() {
        // Lấy giá trị từ ô input tìm kiếm
        const searchInput = document.getElementById('searchInput').value.toLowerCase();

        // Lấy tất cả các thẻ card
        const cards = document.querySelectorAll('.card');

        // Lặp qua tất cả các thẻ card
        cards.forEach(card => {
            // Lấy tiêu đề (h3) và mô tả (p) trong thẻ card
            const title = card.querySelector('h3').innerText.toLowerCase();
            const description = card.querySelector('p').innerText.toLowerCase();

            // Kiểm tra nếu tiêu đề hoặc mô tả chứa từ khóa tìm kiếm
            if (title.includes(searchInput) || description.includes(searchInput)) {
                // Hiển thị thẻ card nếu tìm thấy kết quả phù hợp
                card.style.display = 'block';
            } else {
                // Ẩn thẻ card nếu không phù hợp
                card.style.display = 'none';
            }
        });
    }

    // Thêm sự kiện cho ô input tìm kiếm
    document.getElementById('searchInput').addEventListener('input', searchCards);

