const SAMPLE_RATE = 16_000; // Whisper 입력 규격

/** 마이크 소리를 그대로 메인 스레드로 넘기는 오디오 워크릿. 파일을 따로 두지 않으려고 글자로 둔다. */
const TAP_WORKLET = `
class HanbeotMicTap extends AudioWorkletProcessor {
  process(inputs) {
    const channel = inputs[0] && inputs[0][0];
    if (channel) this.port.postMessage(channel.slice(0));
    return true;
  }
}
registerProcessor('hanbeot-mic-tap', HanbeotMicTap);
`;

/** 마이크를 16kHz 단일 채널 프레임으로 읽는다. stop()을 부르면 마이크가 꺼진다. */
export class MicCapture {
  private stream: MediaStream | null = null;
  private context: AudioContext | null = null;

  async start(onFrame: (frame: Float32Array) => void): Promise<void> {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true },
    });
    this.stream = stream;
    const context = new AudioContext({ sampleRate: SAMPLE_RATE });
    this.context = context;
    const moduleUrl = URL.createObjectURL(new Blob([TAP_WORKLET], { type: 'text/javascript' }));
    try {
      await context.audioWorklet.addModule(moduleUrl);
    } finally {
      URL.revokeObjectURL(moduleUrl);
    }
    const tap = new AudioWorkletNode(context, 'hanbeot-mic-tap');
    tap.port.onmessage = (event: MessageEvent<Float32Array>) => onFrame(event.data);
    context.createMediaStreamSource(stream).connect(tap);
  }

  stop(): void {
    this.stream?.getTracks().forEach((track) => track.stop());
    this.stream = null;
    void this.context?.close();
    this.context = null;
  }
}
