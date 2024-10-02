document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn chặn gửi form

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Hiển thị thông điệp phản hồi
    const responseMessage = `Cảm ơn ${name} đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi bạn sớm nhất có thể.`;
    document.getElementById('response-message').innerText = responseMessage;

    // Xóa dữ liệu trong form
    document.getElementById('contact-form').reset();
});
