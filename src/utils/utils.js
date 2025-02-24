export const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}
// 修改 ResizeObserver 的行为
window.ResizeObserver = class extends window.ResizeObserver {
    constructor(callback) {
        super(debounce(callback, 10000));
    }
}