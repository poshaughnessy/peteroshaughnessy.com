---
title: NodeCopter - geeking out with flying robots
slug: nodecopter-geeking-out-flying-robots
excerpt: What happens when you combine a room full of geeks with a bunch of programmable flying robots?
thumbnail: /images/posts/2013-03-27-nodecopter-geeking-out-flying-robots/thumbnail-nodecopter.jpg
date: 2013-03-27
layout: post.hbs
tags: hacks, javascript, node
---

**What happens when you combine a room full of geeks with a bunch of
programmable flying robots?**

That’s what I found out when I attended
[NodeCopter](http://nodecopter-london.eventbrite.com/) last weekend, a
“small, full day event where teams of 3 or 4 get together to hack on
flying robots using JavaScript”.

A sell-out at Forward’s offices in London, I was fortunate to see a
tweet from organiser Andrew Nesbitt just in time to snap up a free
ticket before the last one went.

![Nodecopter](/images/posts/2013-03-27-nodecopter-geeking-out-flying-robots/nodecopter1.jpg)

<p class="caption">Photo by <a href="http://www.flickr.com/photos/nez/sets/72157633047313444/with/8575918404/">Andrew Nesbitt</a></p>

A number of companies had each sponsored a
[Parrot AR Drone 2](http://ardrone2.parrot.com/usa/) (they cost about \$300 each).

It was great fun and amazing to see all the very different - but
equally cool - hacks that the different teams came up with.

My favourites were:

**Making the drone bounce up and down in time to music beats**,
using [dancer.js](https://developer.mozilla.org/en-US/demos/detail/dancerjs),
a JavaScript audio library.

![Drone hovering](/images/posts/2013-03-27-nodecopter-geeking-out-flying-robots/nodecopter2.jpg)

<p class="caption">Photo by <a href="http://www.flickr.com/photos/nez/sets/72157633047313444/with/8575918404/">Andrew Nesbitt</a></p>

**Controlling the drone using QR codes**. They got the drone to hover in
the air and walked up to it with a QR code on their phone or printed on
paper. The code is recognised through the drone’s in-built video camera,
instructing it to do various things such as ‘dancing’ in the air.

![QR drone](/images/posts/2013-03-27-nodecopter-geeking-out-flying-robots/nodecopter3.jpg)

<p class="caption">Photo by <a href="http://www.flickr.com/photos/nez/sets/72157633047313444/with/8575918404/">Andrew Nesbitt</a></p>

**Controlling the drone by pressing buttons drawn with ink on a piece of
A4 paper**. They used special conductive ink hooked up to Arduino.

![E-ink drone](/images/posts/2013-03-27-nodecopter-geeking-out-flying-robots/nodecopter4.jpg)

<p class="caption">Photo by <a href="http://www.flickr.com/photos/nez/sets/72157633047313444/with/8575918404/">Andrew Nesbitt</a></p>

**Controlling the drone with a Playstation controller**, using the
[HTML5 Gamepad API](http://active.tutsplus.com/tutorials/games/an-introduction-to-the-html5-gamepad-api/).

![Gamepad](/images/posts/2013-03-27-nodecopter-geeking-out-flying-robots/nodecopter5.jpg)

As for me, I teamed up with Markus Kobler and Matt Copperwaite and
created a **Leap Motion hack**.

![Markus, me and Matt](/images/posts/2013-03-27-nodecopter-geeking-out-flying-robots/nodecopter6.jpg)

<p class="caption">Markus, me and Matt - photo by <a href="http://www.flickr.com/photos/nez/sets/72157633047313444/with/8575918404/">Andrew Nesbitt</a></p>

For those who haven’t heard of it yet, the [Leap
Motion](https://www.leapmotion.com/) is a very small and accurate 3D
gestural input device. In other words, you can simply wave your hands or
fingers in the air to control things through your computer.

We programmed it so that moving your hand controls the movement of
the drone in 3 dimensions. A simple 'tap’ gesture in the air makes the
drone land back down. And the best bit: a 'circle’ gesture makes it do a
barrel roll!

Here’s our demo from the end of the event:

<iframe src="https://player.vimeo.com/video/62417807?title=0&amp;byline=0&amp;portrait=0" width="540" height="304" frameborder="0" title="Nodecopter London"></iframe>
<p class="caption"><a href="http://vimeo.com/62417807) from [Markus Kobler](http://vimeo.com/user4571538">Nodecopter London</a></p>

All in all, it was surely the geekiest event I’ve ever attended, but also one of the most memorable!

NodeCopter events continue to be staged across the globe, so if you’d
like to attend one yourself, be sure to keep an eye on the [Upcoming
Events](http://nodecopter.com/#upcoming-events) page.
