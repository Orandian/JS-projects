window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result', (e) => {
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');

  console.log(text);
  if (text.includes('open YouTube')) {
    window.open('https://www.youtube.com/');
    return 'hello';
  }
});

recognition.addEventListener('end', () => {
  recognition.start();
});

recognition.start();
