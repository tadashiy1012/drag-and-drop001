{
    const area1 = document.getElementById('area1');
    const area2 = document.getElementById('area2');
    const areas = [area1, area2];
    let dragElm = null;
    const dstart = (ev) => {
        dragElm = ev.target;
        ev.dataTransfer.setData('tgt', dragElm.outerHTML);
    };
    const dover = (ev) => {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = 'move';
    };
    const dleave = (ev) => {
        ev.preventDefault();
    };
    const drop = (ev) => {
        ev.stopPropagation();
        dragElm.outerHTML = '';
        ev.target.innerHTML = ev.dataTransfer.getData('tgt');
    };
    Array.prototype.forEach.call(areas, (item) => {
        item.addEventListener('dragstart', dstart);
        item.addEventListener('dragleave', dleave);
        item.addEventListener('dragover', dover);
        item.addEventListener('drop', drop);
    });
}