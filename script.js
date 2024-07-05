function saveValue() {
  let name_inp = document.getElementById('name').value;
  let name = name_inp.trim();  // Xóa khoảng trắng thừa ở đầu và cuối
  console.log(name);
  if (name === 'ToHuuNgoc') {
    document.getElementById('vd').classList.remove('hidden');
    document.getElementById('false').classList.add('hidden');
  } else if (name !== 'ToHuuNgoc' && name !== 'VoPhuongVi') {
    document.getElementById('false').classList.remove('hidden');
    document.getElementById('vd').classList.add('hidden');
  } else if (name === 'VoPhuongVi') {
    document.getElementById('web1').classList.add('hidden');
    document.getElementById('web2').classList.remove('hidden');
    startTextAnimation();  // Bắt đầu animation text khi chuyển sang web2
  }
}


document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.animated-text');
    let delay = 0;

    texts.forEach((text, index) => {
        const letters = text.textContent.split('');
        text.textContent = '';
        
        letters.forEach((letter, i) => {
            setTimeout(() => {
                text.textContent += letter;
            }, 25 * i);
        });

        setTimeout(() => {
            text.style.opacity = 1;
        }, delay);

        delay += letters.length * 100 + 500;  // Adjust delay for next text
    });
});




function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('current-time').textContent = currentTime;
}

// Cập nhật thời gian ngay khi trang tải
updateTime();

// Cập nhật thời gian mỗi giây
setInterval(updateTime, 1000);


