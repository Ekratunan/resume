const start = new Date('2025-09-16');
const end = new Date();
const counter = document.getElementById('count');

const years = end.getFullYear() - start.getFullYear();
const months = end.getMonth() - start.getMonth();

let totalYears = years;
let totalMonths = months;

if (months < 0) {
    totalYears -= 1;
    totalMonths += 12;
}

let text = '';
if (totalYears > 0) {
    text += `${totalYears} yrs `;
}
text += `${totalMonths} mo`;

counter.innerHTML = `(${text.trim()})`;