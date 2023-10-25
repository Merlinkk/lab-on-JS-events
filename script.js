var user = document.getElementById('user');

document.body.onload = () => {
  user.innerHTML = 'Anshul';
};

const button = document.getElementById('btn-click');

button.onclick = () => {
  button.style.backgroundColor = 'lime';
};

const button2 = document.getElementById('build-button');

button2.onclick = () => {
  document.getElementById('statement').textContent =
    document.getElementById('noun').value +
    ' ' +
    document.getElementById('verb').value +
    ' ' +
    document.getElementById('adverb').value;
};

const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// Event bubbling
grandparent.addEventListener('click', () => {
  console.log('Granparent clicked');
});

parent.addEventListener('click', () => {
  console.log('Parent clicked');
});

child.addEventListener('click', () => {
  console.log('child clicked');
});

// event capturing
grandparent.addEventListener(
  'click',
  () => {
    console.log('Granparent clicked');
  },
  { capture: true }
);

parent.addEventListener(
  'click',
  () => {
    console.log('Parent clicked');
  },
  { capture: true }
);

child.addEventListener(
  'click',
  () => {
    console.log('child clicked');
  },
  { capture: true }
);

document.getElementById('category').addEventListener('click', (e) => {
  console.log(e.target.innerHTML);
});
