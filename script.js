function saveValue() {
  let name_inp = document.getElementById('name').value;
  let name = name_inp;
  console.log(name);
  if(name === 'ToHuuNgoc'){
    document.getElementById('vd').classList.remove('hidden');
    
    document.getElementById('false').classList.add('hidden');
  }
  else if (name !== 'ToHuuNgoc' && name !== 'VoPhuongVi') {
    document.getElementById('false').classList.remove('hidden');
    
    document.getElementById('vd').classList.add('hidden');
  }
  else if (name === 'VoPhuongVi') {
    document.getElementById('web1').classList.add('hidden');
    document.getElementById('web2').classList.remove('hidden')
  }
}



document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.animated-text');
    let delay = 0;

    texts.forEach((text, index) => {
        const letters = text.textContent.split('');
        text.textContent = '';
        
        const caret = document.createElement('span');
        caret.classList.add('caret');
        text.appendChild(caret);
        
        
        letters.forEach((letter, i) => {
            
;

            
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


