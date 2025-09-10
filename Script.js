function changeToYes() {
    const noBtn = document.getElementById('noBtn');
    noBtn.textContent = 'Evet';
    noBtn.style.backgroundColor = '#4CAF50';
    noBtn.onclick = showHearts;
}

function showHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
}
