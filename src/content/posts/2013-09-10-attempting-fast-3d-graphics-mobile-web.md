---
title: Attempting fast 3D graphics for mobile web, without WebGL
slug: attempting-fast-3d-graphics-mobile-web
excerpt: Is it possible to create fast 3D interactive graphics for mobile devices, using web technologies?
thumbnail: /images/posts/2013-09-10-attempting-fast-3d-graphics-mobile-web/speed-web.jpg
date: 2013-09-10
tags: web, three.js, performance, ui
template: post.hbs
---

Is it possible to create fast 3D interactive graphics for mobile
devices, using web technologies? Since WebGL is not yet well supported
on mobile devices, what technology should you use? CSS3D? Canvas? Or
something else? And is there a high-level graphics library that could
help you?

That was the subject of my presentation last night at the [HTML5
CodeShow
meetup](http://www.meetup.com/HTML5-CodeShow/events/135509012/).

![HTML5 Codeshow presentation](/images/posts/2013-09-10-attempting-fast-3d-graphics-mobile-web/speed-web.jpg)

I’ve been fortunate enough to be able to use
[Three.js](http://threejs.org/) for a couple
of desktop web projects recently, and I’ve been very impressed with how
easy it makes it to develop WebGL applications.

So when we were tasked with creating a new prototype *mobile* web
application that may benefit from 3D graphics (an app for helping
students to revise, called *ZamBlocks*), I jumped at the chance to try
Three.js again. In this case, I wouldn’t be able to use its
WebGLRenderer, but it also comes with a CSS3DRenderer and a
CanvasRenderer. Both have good support on mobile devices. But then
there’s the question of performance…

My presentation runs through the different things I attempted, to
try to achieve a good frame rate on various mobile devices. Along the
way, I ran into some big hurdles, but I also found a couple of
optimisations that helped significantly.

And as it turned out, the final designs for this particular
prototype didn’t really require any 3D elements or whizzy animations.
(In fact, the whole thing turned out to be very simple. If I was to
start from scratch, I’d probably just use DOM elements, or maybe
&lt;canvas&gt; directly without a library). But since we’re
an R&D team, it’s good for us to try pushing the boundaries and seeing
what we can learn along the way. It was a great opportunity
to try the other Three.js renderers and explore what’s currently
feasible for mobile devices.

As well as Three.js, my presentation also briefly covers
[Pixi.js](http://www.pixijs.com/), a fairly new 2D graphics engine. A
bit like a 2D version of Three.js, it’s built for speed. It will use
WebGL if it’s available, but if not fall back to Canvas.

My slides contain lots of embedded examples and videos of how things
look on mobile. You can check them out here (arrow keys / swipe to
navigate):

<http://speedy-web-uis.herokuapp.com>

And the code is on GitHub here:

<https://github.com/poshaughnessy/speedy-web-uis>

