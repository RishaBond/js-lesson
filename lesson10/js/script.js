class options{
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;

    }
    createDiv(text){
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.style.display = 'block';
        div.textContent = text;
        div.classList.add('cssText');
        div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
    }
}
let block = new options ('250px', '400px', 'lightgreen', '25px', 'right');
block.createDiv('Я новый div');
console.log(block);
