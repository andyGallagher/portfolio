import { ReversibleAudioBufferSourceNode } from "simple-reversible-audio-buffer-source-node";

let didInitialize = false;
let isPlaying = false;

const loader = document.getElementById("loader");
if (!loader) {
    throw new Error("No loading found");
}

const onInteractionHandler = async () => {
    if (didInitialize) {
        return;
    }

    didInitialize = true;

    loader.style.display = "none";

    const audioContext = new AudioContext();
    const response = await fetch("/example.mp3");
    const arrayBuffer = await response.arrayBuffer();

    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    const reversibleAudioBufferSourceNode = new ReversibleAudioBufferSourceNode(
        audioContext
    );
    reversibleAudioBufferSourceNode.buffer = audioBuffer;
    reversibleAudioBufferSourceNode.connect(audioContext.destination);

    const playButton = document.getElementById("play");
    if (!playButton) {
        throw new Error("No play button found");
    }

    playButton.innerHTML = "Play audio";
    playButton.style.fontStyle = "normal";

    const playbackRateInput = document.getElementById("playbackRate");
    if (!playbackRateInput) {
        throw new Error("No playback rate input found");
    }

    const currentRateElement = document.getElementById("currentRate");
    if (!currentRateElement) {
        throw new Error("No currentRate element found");
    }

    reversibleAudioBufferSourceNode.onended = (direction) => {
        isPlaying = false;
        console.info(`Playback ended in ${direction} direction`);
    };

    playButton.removeAttribute("disabled");
    playButton.addEventListener("click", () => {
        if (isPlaying) {
            reversibleAudioBufferSourceNode.stop();
        } else {
            reversibleAudioBufferSourceNode.start();
        }

        isPlaying = !isPlaying;
    });

    playbackRateInput.addEventListener("input", (event) => {
        const input = event.target;
        currentRateElement.textContent = input.value;
        reversibleAudioBufferSourceNode.playbackRate(parseFloat(input.value));
    });
};

loader.addEventListener("click", onInteractionHandler);
