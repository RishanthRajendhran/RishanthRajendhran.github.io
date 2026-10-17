// Encrypts the private comparison pages so they can be served from static hosting.
// Usage: IDEA_PW='your password' node scripts/encrypt-idea-detection.js
// Format of each .enc file: salt(16) | iv(12) | AES-256-GCM ciphertext+tag
// Key: PBKDF2-SHA256, 600k iterations (must match src/pages/IdeaDetection.js).
const crypto = require('crypto');
const fs = require('fs');
const os = require('os');
const path = require('path');

const ITERATIONS = 600000;
const pw = process.env.IDEA_PW;
if (!pw) { console.error('Set IDEA_PW'); process.exit(1); }

const pages = [
  { src: path.join(os.homedir(), 'Downloads/frontier_vs_lens_all_instances.html'), out: 'sol-vs-idealens.enc' },
  { src: path.join(os.homedir(), 'Downloads/TwiceTold Judge Comparison.html'), out: 'twicetold.enc' },
  { src: path.join(os.homedir(), 'Downloads/v7 vs Joint Explanations.html'), out: 'v7-vs-joint.enc' },
];
// Optional: pass output names to encrypt only those (e.g. `... v7-vs-joint.enc`)
const only = process.argv.slice(2);

for (const { src, out } of pages) {
  if (only.length && !only.includes(out)) continue;
  const salt = crypto.randomBytes(16);
  const iv = crypto.randomBytes(12);
  const key = crypto.pbkdf2Sync(pw, salt, ITERATIONS, 32, 'sha256');
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const enc = Buffer.concat([cipher.update(fs.readFileSync(src)), cipher.final(), cipher.getAuthTag()]);
  const dest = path.join(__dirname, '../public/idea-detection', out);
  fs.writeFileSync(dest, Buffer.concat([salt, iv, enc]));
  console.log('wrote', dest, enc.length);
}
