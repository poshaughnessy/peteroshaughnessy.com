---
title: Awesome Mobile Animations
date: 2014-06-08
template: post.hbs
old-url: http://www.peteroshaughnessy.com/post/88124288254/awesome-mobile-animations
---

*Earlier this week I gave a talk at the [EdTech Developers
Meetup](http://www.meetup.com/EdTech-Developers-Meetup/events/184368552/). Here’s
the blog post version. You might also like to check out the
[slides](http://awesome-mobile-animations.herokuapp.com/) and the
[source
code](https://github.com/poshaughnessy/edtechdevs-awesome-mobile-animations).*

--

If you’ve been using apps and playing games on a modern smartphone
recently, you might have noticed something that the best ones all have
in common: *awesome animations*.

Take another look at your favourite apps and see how fluid they feel
when you navigate around. Most likely, they’ve ditched dull, linear
transitions and embraced fluent, charismatic motion.

For example, the game Dots uses this neat little effect throughout:

![image](http://31.media.tumblr.com/952eeae363130d1070c43b8a3a598c6e/tumblr_inline_nrxve0UfSU1r5besl_540.gif)

###### *[http://capptivate.co](http://capptivate.co/). <https://twitter.com/CapptivateCo>*

Just the addition of some acceleration, deceleration and a bounce effect
turns a lifeless movement into something fluid and life-like.

Little things add up, too. For example, Yelp uses this rocket ship for
their pull-to-refresh animation:

![image](http://38.media.tumblr.com/4a7e0005397c421e338e813a95cfa583/tumblr_inline_nry0pt7Wbz1r5besl_500.gif)

###### *[http://capptivate.co](http://capptivate.co/). <https://twitter.com/CapptivateCo>*

It might seem silly, but these little additions can help to surprise and
delight our users.

Animations can also be used to orientate your users. For example, Moldiv
uses this little animation to indicate how to access the menu:

![image](http://38.media.tumblr.com/d50ccf46dbabc6bc17d14f78fca0b677/tumblr_inline_nry0q4ujbM1r5besl_500.gif)

###### *[http://capptivate.co](http://capptivate.co/). <https://twitter.com/CapptivateCo>*\

Another example is the bounce effect when you tap the camera icon on the
iPhone lock screen; it informs you that you need to swipe up.

Good apps also keep their animations consistent. Take Facebook’s Paper,
for example. Here are some animations from different parts of the app,
but all the transitions use the same effect of stretching out slightly
further than their intended size, and then bouncing back:

![image](http://38.media.tumblr.com/135bd9bef022469877672013cb66b260/tumblr_inline_nry23q4jV11r5besl_500.gif)

![image](http://38.media.tumblr.com/78b805c5532f069c4d6ee0e064c93091/tumblr_inline_nry23yJVhx1r5besl_500.gif)

![image](http://33.media.tumblr.com/2efebaa3bd85f40b5e786070be24154c/tumblr_inline_nry24a3NQ61r5besl_500.gif)

So we can see that native mobile apps have been doing some awesome
things with animations recently. What about the Web?

It might be harder to achieve similarly smooth results with our
cross-platform Web technologies, but we’re seeing increasingly
impressive results.

Let’s take a look at some examples…

CSS
---

Here’s a neat demo of React.js-powered CSS transitions. In particular,
check out the menu effects from 0:43 and the photo gallery from 2:10:

Demo:
[petehunt.github.io/react-touch](http://petehunt.github.io/react-touch)

Three.js is well-known for making WebGL development much easier, but it
doesn’t just include a WebGLRenderer. It also has a CanvasRenderer, a
CSS3DRenderer and more… Here’s a demo from the creator MrDoob using the
CSS3DRenderer. It’s a take on famo.us’ periodic table:

Demo: <http://bit.ly/css3d-per>

CubeSlam is a very cool demo from Google and North Kingdom. On the
desktop, it uses WebGL via Three.js, but on mobile they’re using their
own CSS3D renderer:

Demo: <https://www.cubeslam.com>\
About the tech: <https://www.cubeslam.com/tech>

Canvas
------

[Pixi.js](http://www.pixijs.com/) is a fast graphics library for games
and interactive animations. One of the best things about it is that you
can set it up to use WebGL if it’s available (more on WebGL next), but
if it’s not, automatically fall back to using regular HTML5 Canvas. Even
Canvas without WebGL performs impressively fast though - just check out
their Run Pixie Run demo:

Demo: <http://www.goodboydigital.com/runpixierun/>

WebGL
-----

Up until recently, WebGL hasn’t had great support from mobile browsers.
But it’s available with Chrome for Android, Firefox for Android and
Opera Mobile. And the big news just this week is that it’s coming to iOS
8!

Here’s a WebGL demo from Three.js. It runs really smoothly on my 2 year
old Galaxy Nexus phone:

Demo: <http://threejs.org/examples/webgl_lines_sphere.html>

Pixi.js’ [Bunnymark
demo](http://www.goodboydigital.com/pixijs/bunnymark/) is really useful
to demonstrate the difference that WebGL makes. Here it is without WebGL - 
just using the regular 2D Canvas context:

<iframe width="540" height="405" id="youtube_iframe" src="https://www.youtube.com/embed/5Mt65ktdHfU?feature=oembed&amp;enablejsapi=1&amp;wmode=opaque" frameborder="0"></iframe>

And here you can see the difference when WebGL is enabled:

<iframe width="540" height="405" id="youtube_iframe" src="https://www.youtube.com/embed/ZD9PvrLkqWc?feature=oembed&amp;enablejsapi=1&amp;wmode=opaque" frameborder="0"></iframe>

Without WebGL, 1000 bunnies runs at 14 FPS (that’s sluggish). With
WebGL, we get a very healthy 58 FPS.

So there’s various Web technologies that can help us to achieve great
results, but we still need to be careful as developers and make sure we
make the best use of the browsers’ power. Let’s run through some general
tips:

Tips
----

**1. For 60 frames per second, you only have 16ms to prepare each
frame**

60 frames per second is what we should be aiming for, to ensure a smooth
experience for our users. That’s equivalent to the screen refresh rate
of most mobile screens (60Hz) and good enough that our eyes won’t notice
any flicker.

A lower frame rate (down to around 30 FPS) may be acceptable in some
cases, but if we want the best performance, we should really aim for the
top end.

16ms, as it sounds, is not very long! So…

**2. Test, measure, optimise**

You’ll need to keep a close eye on how your animations are performing.
The debugging tools in your browser can provide the insights you need.
For example, Chrome’s Timeline tab lets you record all the browser
operations to do with rendering and see exactly how long they’re taking.

For a sense of how to use it, check out this video from Paul Irish where
he identifies a specific performance problem and how to fix it:

You can also use the [High Resolution Time
API](http://updates.html5rocks.com/2012/08/When-milliseconds-are-not-enough-performance-now)
to accurately measure how long specific pieces of your code are taking.

Third party libraries can be useful too. For example,
[stats.js](https://github.com/mrdoob/stats.js/) is a neat little FPS
counter that you can place in a corner of your viewport. Especially
handy for realtime performance measurement on mobile.

**3. For now, define animations in CSS if possible**

Until the new [Web Animations
API](http://updates.html5rocks.com/2014/05/Web-Animations---element-animate-is-now-in-Chrome-36)
is available to use, you’ll get the best results if you can declare your
animations in CSS. The browser will be better able to optimise them,
running off the main UI thread and making use of the GPU.

Often you will need to control your animations with JavaScript though.
For example, you may need to cancel or alter it depending on user input.
You might wish to control it frame by frame. At the moment this can be
clunky, both in terms of the code we need to write and the way it
performs. That’s why the Web Animations API should be really helpful;
it’s designed to give us the control of JavaScript with the performance
of pure CSS.

Please don’t just default to using JQuery’s animate() method. It makes
heavy use of JavaScript and the performance differences can be dramatic.
Just take a look at this:

<http://css3.bradshawenterprises.com/blog/jquery-vs-css3-transitions/>

**4. Make sure you don’t hammer the UI thread**

Unlike native development where it’s standard practice to keep
processing off from the UI thread, in JavaScript land we tend not to
think too much about this. Unfortunately that means it’s easy to
accidentally make our animations jerky or “janked”.

First of all, we should use
[requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
when it’s available, rather than setInterval or setTimeout (although a
shim would need to fall back on one of those). This allows the browser
to tell us when it’s ready to prepare the next frame. That means we can
consistently run at the best frame rate the browser can manage, rather
than trying to force a particular frame rate and finding that the
browser either doesn’t keep up, or we don’t get the best out of it.

If you need to do a lot of processing, consider chunking it down and
performing it incrementally inside your requestAnimationFrame callback.
That way you can help ensure that you don’t go beyond that 16ms for each
frame.

Another option could be to move your processing into a [Web
Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).

**5. Stick to: translate, scale, rotate, opacity**

There are four properties that a browser can animate “cheaply”:
translate, scale, rotate and opacity. Animate other things “at your own
risk”.

Observe the difference here between animating the ‘top’ and ‘left’
properties (the one on the left), versus using ‘translate’ (the one on
the right):

It really can make a very noticeable difference, on mobile devices
especially.

**6. Batch DOM operations**

Manipulating the DOM invalidates layouts, meaning the browser has to
perform reflows. So it’s best to avoid unnecessary DOM operations and to
batch up those that you do need to make.

[FastDOM](https://github.com/wilsonpage/fastdom) is a little library
that helps to batch DOM writes and reads. UI frameworks like
[React](http://facebook.github.io/react/) and
[Ractive](http://www.ractivejs.org/) can also handle this for you, by
providing a Virtual DOM. They can determine the minimal set of changes
that need to be made to the real DOM and modify it only at the best
times.

Awesome mobile web animations? Yes we can
-----------------------------------------

The text from Pete Hunt’s React Touch demo sums things up nicely:

> “The web isn’t as performant as native, but on modern devices we can
> get pretty close. Or at least a lot better than the Web’s current
> reputation.”

So let’s ditch those boring animations and make our mobile web apps more
fluid, and more awesome!

Further reading
---------------

-   [Motion UI Design
    Principles](http://www.beyondkinetic.com/motion-ui-design-principles)
-   [High Performance Animations
    (HTML5 Rocks)](http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)
-   [Jank Busting for Better Rendering Performance
    (HTML5 Rocks)](http://www.html5rocks.com/en/tutorials/speed/rendering/)
-   [Preventing Layout Thrashing
    (Wilson Page)](http://wilsonpage.co.uk/preventing-layout-thrashing/)
