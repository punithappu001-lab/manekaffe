const menus = {
  coffee: [
    ['Espresso', 'rich, syrupy & bold', '₹160'], ['Americano', 'smooth & straightforward', '₹180'], ['Cappuccino', 'velvety foam & cacao', '₹220'], ['Latte', 'your daily soft landing', '₹230'], ['Cold Brew', 'slow-steeped for 18 hours', '₹250']
  ],
  boba: [
    ['Brown Sugar Boba', 'creamy milk tea, chewy pearls', '₹290'], ['Strawberry Boba', 'bright, sweet & playful', '₹290'], ['Ceremonial Matcha', 'earthy green tea & oat milk', '₹270'], ['Iced Matcha Cloud', 'matcha, vanilla & cold foam', '₹310']
  ],
  bakes: [
    ['Blueberry Cheesecake', 'silky, tangy & berry-bright', '₹260'], ['Red Velvet Cake', 'cream cheese frosting', '₹240'], ['Chocolate Mousse Cake', 'dark chocolate, cloud-soft', '₹250']
  ],
  food: [
    ['Butter Croissant', 'golden, flaky & warm', '₹150'], ['Almond Croissant', 'frangipane & toasted almonds', '₹190'], ['Italian Milkshake', 'small-batch gelato shakes', '₹270']
  ]
};
const panel = document.querySelector('#menu-panel');
function showMenu(name) {
  panel.innerHTML = menus[name].map(([title, desc, price]) => `<div class="menu-item"><b>${title}</b><span>${desc}</span><i>${price}</i></div>`).join('');
}
document.querySelectorAll('[data-menu]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-menu]').forEach(item => item.classList.remove('active'));
  button.classList.add('active'); showMenu(button.dataset.menu);
}));
showMenu('coffee');
const cursor = document.querySelector('.bean-cursor');
window.addEventListener('mousemove', e => { cursor.style.left = `${e.clientX}px`; cursor.style.top = `${e.clientY}px`; });
document.querySelectorAll('a,button').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.style.cssText += ';width:30px;height:38px;background:#a24d32');
  el.addEventListener('mouseleave', () => cursor.style.cssText += ';width:23px;height:30px;background:#24130f');
});
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in-view'); }), {threshold:.15});
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
