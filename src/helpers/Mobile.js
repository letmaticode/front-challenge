console.log(document.querySelector('#root'));
console.log(document.querySelector('#root').offsetWidth);
export const isMobile = /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) || document.querySelector('#root').offsetWidth <= 414;