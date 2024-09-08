function HideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function ShowElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function SetBackGroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[common-green-bg]');
    element.classList.add('color-white')
}



function SetInnerText(id, value) {
    document.getElementById(id).innerText = value;
}