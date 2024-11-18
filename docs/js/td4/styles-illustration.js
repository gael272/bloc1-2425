const textElement = document.getElementById('text');
const boldCheckbox = document.getElementById('boldCheckbox');
const italicCheckbox = document.getElementById('italicCheckbox');
const underlineCheckbox = document.getElementById('underlineCheckbox');
const strikeCheckbox = document.getElementById('strikeCheckbox');
const colorPicker = document.getElementById('colorPicker');
const fontSizeInput = document.getElementById('fontSize');
const fontSelect = document.getElementById('fontSelect');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');

function updateTextStyle() {
    textElement.style.fontWeight = boldCheckbox.checked ? 'bold' : 'normal';
    textElement.style.fontStyle = italicCheckbox.checked ? 'italic' : 'normal';
    textElement.style.textDecoration = `${underlineCheckbox.checked ? 'underline ' : ''}${strikeCheckbox.checked ? 'line-through' : ''}`;
    textElement.style.color = colorPicker.value;
    textElement.style.fontSize = fontSizeInput.value + 'px';
    textElement.style.fontFamily = fontSelect.value;
}

increaseBtn.addEventListener('click', () => {
    fontSizeInput.value = parseInt(fontSizeInput.value) + 2;
    updateTextStyle();
});

decreaseBtn.addEventListener('click', () => {
    fontSizeInput.value = Math.max(10, parseInt(fontSizeInput.value) - 2);
    updateTextStyle();
});

boldCheckbox.addEventListener('change', updateTextStyle);
italicCheckbox.addEventListener('change', updateTextStyle);
underlineCheckbox.addEventListener('change', updateTextStyle);
strikeCheckbox.addEventListener('change', updateTextStyle);
colorPicker.addEventListener('input', updateTextStyle);
fontSizeInput.addEventListener('input', updateTextStyle);
fontSelect.addEventListener('change', updateTextStyle);