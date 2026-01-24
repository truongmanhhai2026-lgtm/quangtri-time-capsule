document.addEventListener("DOMContentLoaded", function() {
  // Lấy các phần tử cần thiết
  const startScreen = document.getElementById('start-screen');
  const startBtn = document.getElementById('start-btn');
  const myTarget = document.getElementById('mytarget');
  const historyVideo = document.getElementById('historyVideo'); // Nếu dùng video

  // 1. Xử lý nút START
  // Trình duyệt (Chrome/Safari) chặn tự động phát tiếng. Phải có người dùng bấm nút mới chạy được.
  startBtn.addEventListener('click', () => {
    // Ẩn màn hình chờ
    startScreen.style.display = 'none';
    
    // Nếu có video, "mồi" cho nó chạy 1 chút rồi pause ngay để kích hoạt âm thanh
    if(historyVideo) {
      historyVideo.play();
      historyVideo.pause();
    }
  });

  // 2. Sự kiện KHI TÌM THẤY ẢNH (Target Found)
  myTarget.addEventListener("targetFound", event => {
    console.log("Đã tìm thấy di tích!");
    
    // Nếu dùng video thì cho phát
    if(historyVideo) {
      historyVideo.play(); 
    }
    
    // Bạn có thể thêm code hiển thị thông tin text ở đây nếu muốn
  });

  // 3. Sự kiện KHI MẤT DẤU ẢNH (Target Lost)
  myTarget.addEventListener("targetLost", event => {
    console.log("Đã mất dấu!");
    
    // Nếu dùng video thì tạm dừng để tiết kiệm pin/data
    if(historyVideo) {
      historyVideo.pause();
    }
  });
});