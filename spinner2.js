//setTimeout(() => {
//  process.stdout.write('\rS   ');
//}, 100);
//
//setTimeout(() => {
//  process.stdout.write('\rp   ');
//}, 300);
//
//setTimeout(() => {
//  process.stdout.write('\ri   ');
//}, 500);
//
//setTimeout(() => {
//  process.stdout.write('\rn   ');
//}, 700);
//
//setTimeout(() => {
//  process.stdout.write('\rn   ');
//}, 900);
//
//setTimeout(() => {
//  process.stdout.write('\re   ');
//}, 1100);
//
//setTimeout(() => {
//  process.stdout.write('\rr   ');
//}, 1300);
//
//setTimeout(() => {
//  process.stdout.write('\r:   ');
//}, 1500);
//
//setTimeout(() => {
//  process.stdout.write('\r|   ');
//}, 1700);
//
//setTimeout(() => {
//  process.stdout.write('\r/   ');
//}, 1900);
//
//setTimeout(() => {
//  process.stdout.write('\r-   ');
//}, 2100);
//
//setTimeout(() => {
//  process.stdout.write('\r\\   ');
//}, 2300);
//
//setTimeout(() => {
//  process.stdout.write('\r|   ');
//}, 2500);

const strings = ['\rS   ', '\rp   ', '\ri   ', '\rn   ', '\rn   ', '\re   ', '\rr   ', '\r:   ', '\r|   ', '-   ', '\r\\   ', '\r|   ', '\n'];
for (let i = 0; i < strings.length; i++) {
  setTimeout(() => {
    process.stdout.write(strings[i]);
  }, 100 + i * 200);
}