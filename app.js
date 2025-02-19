const speech = new SpeechSynthesisUtterance();

const button = document.querySelector("button");
const textArea = document.querySelector("textarea");

let voices = [];
const voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i);
  });
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

button.addEventListener("click", () => {
  speech.text = textArea.value;
  window.speechSynthesis.speak(speech);
});
