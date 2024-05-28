const qCon = document.querySelectorAll('.qSection');
let showingPara = false;

const resetPara = (para, img) => {
    for (const qHeading of qCon) {
        const tempPara = qHeading.querySelector('p');
        const tempImg = qHeading.querySelector('img');
        if (!tempPara.classList.contains('qParagraph') && tempPara !== para) {
            tempPara.classList.replace('switch', 'qParagraph');
            tempImg.src = `${String(img.src).replace('minus', 'plus') }`
        }
        
    }
}
 
const showPara = (e) => {
     
    const para = e.currentTarget.querySelector('p');
    const img = e.currentTarget.querySelector('img');

    resetPara(para, img);

  
    if (para.classList.contains('qParagraph')) {
        
        para.classList.replace('qParagraph', 'switch');
        img.src = `${String(img.src).replace('plus', 'minus') }`
        
    } else {
    
        para.classList.replace('switch','qParagraph');
        img.src = `${String(img.src).replace('minus', 'plus') }`
    }
}

for (const qHeading of qCon) {
    qHeading.addEventListener('click', showPara);    
}