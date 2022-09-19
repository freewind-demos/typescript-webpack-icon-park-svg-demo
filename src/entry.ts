import Home from '@icon-park/svg/es/icons/Home'
import './index.css';

const main = document.querySelector<HTMLDivElement>('#main')!;
main.innerHTML = `Hello, ${Home({})}`
