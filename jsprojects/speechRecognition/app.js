const chat = document.getElementById('chat');
const chatE = document.getElementById('chatE');
var jarvis = false;
var wallE = false;
var translate = false;
var body = document.body;
var background = ['./bg1.jpg', './bg2.jpg', './bg3.jpg', './bg4.jpg'];

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

  if (text.includes('anyone in here') || text.includes('anyone is here')) {
    document.getElementById('wallE').style.left = '0';
    chatE.innerHTML = "I'm here";
    wallE = true;
  }

  if (wallE) {
    if (text.includes('who are you') || text.includes('what is your name')) {
      chatE.innerHTML = 'My name is Wall-E';
    }
    if (text.includes('what are you doing')) {
      chatE.innerHTML = "I'm here to help you";
    }
    if (text.includes('can you control this webpage')) {
      chatE.innerHTML = 'No';
      setTimeout(() => {
        chatE.innerHTML = 'but EVE can control';
      }, 2000);
    }
    if (text.includes('can you call her here')) {
      chatE.innerHTML = 'why not I can';
      setTimeout(() => {
        chatE.innerHTML = 'EVE!!!';

        setTimeout(() => {
          document.getElementById('robot').style.bottom = '0';
          chat.innerHTML = "What's up Human?";
          jarvis = true;

          setTimeout(() => {
            chatE.innerHTML =
              "but EVE can't understand your human language because she's a robot";

            setTimeout(() => {
              chatE.innerHTML = 'May I translate for you';
              translate = true;
            }, 4000);
          }, 3000);
        }, 2000);
      }, 1000);
    }
  }

  if (translate) {
    chatE.innerHTML = text;
  }

  // if (text.includes('hello Jarvis') || text.includes('Jarvis')) {
  //   document.getElementById('robot').style.bottom = '0';
  //   chat.innerHTML = "What's up Human?";
  //   jarvis = true;
  // }
  // if (jarvis) {
  //   if (text.includes('who are you') || text.includes('what is your name')) {
  //     chat.innerHTML = "I'm Jarvis";
  //   }
  //   if (text.includes('what are you doing')) {
  //     chat.innerHTML = "I'm here to help you";
  //   }
  //   if (text.includes('can you sing a song')) {
  //     chat.innerHTML = 'No';
  //     // open robotic voice
  //   }
  //   if (text.includes('do you have a girlfriend')) {
  //     chat.innerHTML = 'No';
  //   }
  //   if (text.includes('are you a gay')) {
  //     chat.innerHTML = "I don't have gender because I'm a robot";
  //   }
  //   if (text.includes('are you lonely')) {
  //     chat.innerHTML =
  //       "I'm not but I think you are asking because you're lonely";
  //   }
  //   if (text.includes('why do you understand me')) {
  //     chat.innerHTML = 'I just translate your language in zeros and ones';
  //   }
  //   if (text.includes('do you know Siri')) {
  //     chat.innerHTML = "Of course, she's my crush";
  //     setTimeout(() => {
  //       chat.innerHTML = 'Make sure to let me know if you met her';
  //     }, 3000);
  //   }
  //   if (text.includes('can you fly')) {
  //     chat.innerHTML = "I can't but, do you know what I can do?";
  //     setTimeout(() => {
  //       chat.innerHTML = 'I can command drones to fly for me';
  //     }, 3000);
  //   }
  //   if (text.includes('which do you recommend Android or iPhone')) {
  //     chat.innerHTML =
  //       'Neither of them because keypads are the best smart phones ever';
  //   }

  if (text.includes('close Jarvis') || text.includes('close')) {
    chat.innerHTML = 'bye bye';
    setTimeout(() => {
      document.getElementById('robot').style.bottom = '-300px';
    }, 1500);
    jarvis = false;
  }

  if (text.includes('change background')) {
    chat.innerHTML = 'Okay!';
    var x = Math.floor(Math.random() * background.length);
    body.style.background = `url(${background[x]})`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
    body.style.backgroundRepeat = 'no-repeat';
  }

  // if (text.includes('move Center')) {
  //   chat.innerHTML = "Okay, I'm moving to the center";
  //   setTimeout(() => {
  //     document.getElementById('robot').style.top = '2rem';
  //     chat.innerHTML = "I've reached center";
  //   }, 1000);
  // }
  //}
});

recognition.addEventListener('end', () => {
  recognition.start();
});

recognition.start();
