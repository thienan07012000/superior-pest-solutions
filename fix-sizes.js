const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.startsWith('AreasServed') && f.endsWith('.tsx'));

for (const f of files) {
  const p = path.join(dir, f);
  let c = fs.readFileSync(p, 'utf8');
  if (!c.includes('sizes="(max-width: 1024px) 100vw, 50vw"')) {
    c = c.replace(/fill\s+className="object-cover"/g, 'fill\n                  sizes="(max-width: 1024px) 100vw, 50vw"\n                  className="object-cover"');
    fs.writeFileSync(p, c);
    console.log('Fixed', p);
  }
}
