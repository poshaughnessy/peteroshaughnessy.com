---
title: Arduino with JavaScript (Breakout.js)
slug: arduino-with-javascript-breakoutjs
date: 2014-04-07
tags: hacks, javascript
template: post.hbs
---

On 19th March, I attended an [Introduction to Arduino with
JavaScript](http://www.eventhandler.co.uk/events/ldnjsnightclass-introtoarduino) night
class.

In 3 hours, [Lily Madar](https://twitter.com/Lily_2point0) guided us to
create our first Arduino applications
using [Breakout.js](http://breakoutjs.com/), a JavaScript Arduino
interface for the browser.

First, we just made an LED blink:

![Arduino LED](/images/posts/2014-04-07-arduino-with-javascript-breakoutjs/arduino-led.png)

But soon we were playing with colour-changing LEDs, buttons
and [potentiometers](http://www.arduino.cc/en/Tutorial/Potentiometer). It
was exciting to be able to create a custom, physical hardware interface
for the browser.

For our final project, we had a choice. I chose an HTML5 Canvas
Etch-a-Sketch. It was easy to hook up two potentiometers for drawing the
line horizontally and vertically. And I included a button for erasing
the picture.

![Arduino Etch-a-sketch](/images/posts/2014-04-07-arduino-with-javascript-breakoutjs/arduino-etch-a-sketch.png)

My (messy) source code is [up on
GitHub](https://github.com/poshaughnessy/intro-to-arduino-with-javascript).

The biggest issues I found with Breakout.js were:

-   The interface with the hardware is only live while your tab is open
    in the browser
-   Most of us had to keep restarting the Breakout server often while we
    were developing, due to weird errors

So it’s not for real, consumer applications, but it’s a cool prototyping
tool and could make for some fun personal/office projects. For example,
you could make an LED countdown clock, counting down to your next
release. Or a set of build server traffic lights.

All in all, it was a really fun event. A fellow attendee also
wrote up a [nice blog post about it
here](http://blog.caplin.com/2014/03/28/using-javascript-to-program-an-arduino/).

