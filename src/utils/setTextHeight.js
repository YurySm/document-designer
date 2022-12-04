
const SetTextHeight = (el) => {
    if(el.scrollTop > 0){
        el.style.height = el.scrollHeight + "px";
    }

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Backspace') {
            el.style.height = 'auto';
        }
      });
};

export default SetTextHeight;