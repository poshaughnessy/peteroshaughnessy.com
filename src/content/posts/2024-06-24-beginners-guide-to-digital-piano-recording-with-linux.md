---
title: A beginner's guide to digital piano recording (with Linux)
slug: beginners-guide-digital-piano-recording-linux
excerpt: How I record my Roland FP-10 piano and why I switched from audio to MIDI
thumbnail: /images/posts/2024-06-24-beginners-guide-digital-piano-recording-linux/thumb.jpg
date: 2024-06-24
---

I've recently learned the hard way how to record my digital piano. I'd like to share my setup in case it helps save anyone else some of the time and hassle it took for me.

I personally use Linux Mint, although most of this should be transferrable to any other operating system. I'll explain why I started by recording the audio through the headphone jack, using an Audiobox GO audio interface - and switched to recording MIDI through the USB port.

But first, I'll jump straight to how it sounds and what my current setup is, in case you want the _tl;dr_!

## Here's how it sounds

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZbKxXBEO-WY?si=gv8_iym6Yk-TDjsq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<p class="caption" style="margin: 0">One I recorded earlier. Output with the Steinway Model D virtual grand piano from Pianoteq, with a few minimal tweaks such as reverb (I set the room size to about 20 metres) </p>

## My working setup (MIDI)

- Roland FP-10 digital piano
- USB-B to USB-C cable ([this one](https://www.amazon.co.uk/dp/B0769LM3BY))
- Linux Mint laptop
- Pianoteq software - for recording MIDI and exporting audio
- Android phone - for recording the video of me playing (without audio)
- OpenShot Video Editor - for merging the video and audio back together

I found this setup fairly straightforward to get working, except for the following details:

### Realtime scheduling

I needed to configure Linux to enable Realtime (RT) scheduling. To do this, I followed [this guide](https://jackaudio.org/faq/linux_rt_config.html).

So I have a file at `/etc/security/limits.d/audio.conf` with these two lines uncommented:

```
@audio   -  rtprio     95
@audio   -  memlock    unlimited
```

And I setup the `audio` group and added my user to it. Please see [the post on jackaudio.org](https://jackaudio.org/faq/linux_rt_config.html) for the full details.

### Pianoteq

To record the MIDI and play and export it with different virtual pianos, I tried and subsequently decided to purchase [Pianoteq Stage](https://www.modartt.com/pianoteq_stage). It costs a fair bit, but they have a free trial so you can decide if you think it's worth it. For me, I really love the sound of the Steinway Model D grand piano (that's the one I used for the recording above) and I haven't regretted it.

To configure Pianoteq, I followed [used a tip I read here](https://forum.pianoworld.com/ubbthreads.php/topics/3162235/re-roland-fp-10-usb-to-windows-10-direct-connection-and-midi.html): go to `Edit --> Preferences --> Devices --> Active MIDI inputs` and check `Listen to all MIDI inputs`.

My audio output is set to: `HDA Intel PCA, ALC256 Analog; Direct hardware device without any conversions`.

Now when I have the piano plugged into the USB port of the laptop, I have the piano switched on, and I have Pianoteq open, it "just works" and I can see the keys I'm pressing and hear how it sounds with my selected virtual piano and settings.

<img src="/images/posts/2024-06-24-beginners-guide-digital-piano-recording-linux/pianoteq.jpg" alt="Pianoteq STAGE on Linux Mint"/>

<p class="caption" style="margin: 0">Pianoteq STAGE on Linux Mint</p>

### OpenShot Video Editor

OpenShot can be a bit unintuitive and even a bit buggy, but I've managed alright with it since I made sure I was running the latest version downloaded [from the OpenShot website](https://www.openshot.org/download/).

I was worried at first that it would take me ages to sync the audio and video up exactly, but thankfully I realised that I didn't need to be super-accurate - as long as you hear the note around the time you press the key, it looks normal enough.

## My previous setup (audio)

Before I realised MIDI was the way to go for me, I tried recording the actual audio output via the headphone jack. This is basically because I had a naive view of MIDI. I had briefly tried recording MIDI through Roland's Piano Partner 2 phone app via Bluetooth and it recorded badly and sounded bad. I didn't realise how powerful and accurate MIDI could be if I set it up properly. Now I think of MIDI a bit like a computer program I can use to re-generate the audio. I can run the 'program' as many times as I like and change how it sounds (you could even edit the MIDI to fix mistakes if you wanted - I haven't gone that far!)

But my previous setup does have one big advantage over my MIDI setup - this way I can record directly on my phone. I don't need to sync up the video and audio in post-production - I don't need to use a laptop at all. However, I much prefer the resulting sound when I do go to that effort - and the flexibility to be able to change how it sounds afterwards - so for me, it's worth it.

Anyway, before I learned that - here's how I recorded the audio:

- Roland FP-10 digital piano
- 3.5mm to 6.35mm TRS stereo audio cable ([this one](https://www.amazon.co.uk/dp/B08LCZSZQJ))
- [AudioBox GO audio interface](https://www.presonus.com/en/interfaces/usb-audio-interfaces/audiobox-series/2777700106.html)
- Powered USB-C hub ([this one](https://www.amazon.co.uk/dp/B0CT4ZP72M)) - to power the AudioBox GO and connect it to my phone
- Android phone
- [Open Camera app](https://play.google.com/store/apps/details?id=net.sourceforge.opencamera&hl=en_GB) - a free camera app which lets you select an external audio source

It took me a lot of research to even figure out that I needed each of these things. Then there was one more key thing I needed to learn in order to get it working:

### Open Camera

I needed to set the audio channel to "Mono" in the Open Camera video settings (`Settings -> Video settings -> Audio channels`). I found this counter-intuitive at first, because I was thinking "I want to record stereo, not mono". But when it's set to stereo, it expects stereo input - and results in the audio only coming through in one ear!

## Summary

That's all the key points I can think of, for how I now record my digital piano using MIDI - and how I previously recorded it using audio. I hope you might have found it useful. Happy recording!
