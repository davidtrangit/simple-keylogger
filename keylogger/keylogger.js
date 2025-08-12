process.stdin.setEncoding('utf8');
process.stdin.setRawMode(true);
process.stdin.resume();

process.stdin.on('data', (key) => {
  if (key === '\u0003') { // ctrl c
    console.log('stopping program');
    process.exit();
  }

  if (key === '\x1b') {
    console.log('[Escape]');
    return;
  }

  if (key.startsWith('\x1b')) {
    switch (key) {
      case '\x1b[A':
        console.log('[Arrow Up]');
        break;
      case '\x1b[B':
        console.log('[Arrow Down]');
        break;
      case '\x1b[C':
        console.log('[Arrow Right]');
        break;
      case '\x1b[D':
        console.log('[Arrow Left]');
        break;
      default:
        console.log('[error]', JSON.stringify(key));
    }
    return;
  }

  
  switch (key) {
    case '\r':
      console.log('[Enter]');
      break;
    case ' ':
      console.log('[Space]');
      break;
    case '\t':
      console.log('[Tab]');
      break;
    default:
      console.log(key);
  }
});
