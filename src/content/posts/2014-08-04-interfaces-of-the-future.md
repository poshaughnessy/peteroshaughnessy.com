---
title: Interfaces of the future, and how to hack around with them now
slug: interfaces-of-the-future
date: 2014-08-04
tags: talks, future-tech, virtual-reality, augmented-reality
template: post.hbs
---

*On 31st July I gave the following talk at [Front End London](http://www.frontendlondon.co.uk/). The [slides are
here](http://poshaughnessy.github.io/fel-interfaces-of-the-future/).*

I’d like to talk today about some of the new kinds of interfaces that
are on the horizon and may be taking off in the next few years. And for
a couple of the devices that I’m finding most exciting at the moment,
I’ll introduce you to hacking around with them right now, using Web
technologies.

Luckily I get to explore this kind of stuff in my day job, as a
Developer in the [Future Technologies team in
Pearson](http://labs.pearson.com/prototypes/welcome-to-the-future-technologies-prototypes-page/),
the world’s leading learning company. (Some of you here may know it as
the parent company of the Financial Times).

First, let’s think about where we are now, in the world of the Web.

![Cuddling with multiple devices](/images/posts/2014-08-04-interfaces-of-the-future/devices.jpg)
###### Credit: [Jeremy Keith](http://en.wikipedia.org/wiki/Digital_omnivore#mediaviewer/File:Cuddling_with_multiple_devices.jpg)

We’ve moved on from the Desktop Era, and having travelled through
the Age of Mobile, we’re now in the Multi-Device Era, where we no longer
have neat categories of devices (“smartphone”, “tablet”, “desktop”), but
a continuum of different screen sizes and an assortment of touch-screens
and non-touch screens.

But in a way, all these devices are still kind of the same. They’re all
flat, 2D screens that we have in our hands, or just in front of us. As
Bret Victor memorably said, it’s all just [Pictures Under
Glass](http://worrydream.com/ABriefRantOnTheFutureOfInteractionDesign/).

![Pictures Under Glass](/images/posts/2014-08-04-interfaces-of-the-future/pictures-under-glass.jpg)
###### Credit: [PlaceIt](https://placeit.net/)

That surely can’t be it… So what’s next?

Well I’m sure we’ve all been hearing a lot of hype about wearables
recently. Interest in smartwatches has surged since 2012 when Pebble (on
the left here) became the first $10m Kickstarter campaign.

![Smartwatches](/images/posts/2014-08-04-interfaces-of-the-future/smartwatches.jpg)
###### Credit: [Kārlis Dambrāns](https://www.flickr.com/photos/janitors/10345415843/)

Now Google, Samsung, LG, Motorola and many others are getting in on the
act, and of course we’re all waiting to see what Apple may or may not
reveal later this year.

And who could forget the poster child of geeky new tech, Google Glass?

![Google Glass](/images/posts/2014-08-04-interfaces-of-the-future/google-glass-geeky.jpg)
###### Credit: [Thomas Hawk](https://www.flickr.com/photos/thomashawk/14259298346)

If you haven’t already tried it out, I’m sure you’ve all heard
lots of opinions about it already. 

You might be, quite rightly, feeling a bit skeptical about these
wearable devices taking off. Are people really going to want to use
them? Are they actually useful? How many people would actually be happy
to wear things like this out in public? And you might be thinking that
they aren’t really that different to what we have now. Even if they do
become popular, aren’t they merely additions to the Multi-device Era
we’re already in? 

I think those are all very reasonable thoughts, when looking at
the wearables space right now. 

But I’d like to offer up a couple of reasons why I think that
certain kinds of wearable devices could become a very big deal in the
near-future…

**Different devices, different experiences**

The first thing I’d like to say is that, as with smartphones and
tablets, the differences in these devices aren’t merely in the sizes of
the screens. It’s in how we use them and the different kinds of
experiences that they lend themselves to. For example, when the iPad was
announced, a lot of people dismissed it as just being a “big phone”. Too
big to take out with us all the time, and why would we need them at home
because we already have our laptop there? But it turned out that they
can make for a great “lean back” device, something that we’re more
comfortable using on the sofa.

![Lean back experiences](/images/posts/2014-08-04-interfaces-of-the-future/lean-back-experience.jpg)
###### Credit: [plantronicsgermany](https://www.flickr.com/photos/plantronicsgermany/8071203642)

So I think we should think carefully about the kinds of experiences that
new devices might lend themselves to as well. 

Especially because some of the ways that we end up interacting with new
technology are often difficult to predict. Before the smartphone
explosion, who would have predicted that so many of us would use them
for this:

![Selfie](/images/posts/2014-08-04-interfaces-of-the-future/selfie.jpg)
###### The “Selfie”. Credit: [Wikimedia](http://en.wikipedia.org/wiki/Selfie)

**The Long Nose of Innovation**

And I’d like to talk about being patient… Disruptive technology
doesn’t take off as soon as it’s been invented. New types of devices
start off in research labs as big, clunky, expensive things. Then they
go through years of refinement and augmentation until eventually
everything comes together: affordability, ease of use, good marketing…
and finally they can take off and gain traction.

![Long Nose of Innovation](/images/posts/2014-08-04-interfaces-of-the-future/long-nose-of-innovation.png)
###### Credit: [Sketchplanations](http://www.sketchplanations.com/post/60700964916/the-long-nose-of-innovation-bill-buxton-i-love)

We’ve seen this many times over the years. For example, multi-touch
interfaces have been around in some form for decades, but didn’t really
take off until the iPhone. And it’s the same story with tablet computers
and the iPad.

And we all kind of know this, yet we still seem to go through this hype
curve every time:

![Hype Curve](/images/posts/2014-08-04-interfaces-of-the-future/hype-curve.png)
###### Credit: [Wikipedia](http://en.wikipedia.org/wiki/Hype_cycle)

I’m guilty of this too. We hear about a cool new technology, and we get
really excited about it, and then we try it, and it lets us down. It
doesn’t meet our expectations, and our instant reaction is that the
whole thing is a load of rubbish. But gradually as the tech becomes more
refined, we start to understand more about what they’re good for and
what they’re bad for, and eventually they just become another part of
everyday life.

So bearing all this in mind, let’s take a look at a couple of upcoming
paradigms that I think could be genuinely disruptive in the next few
years…

**Augmented Reality and Holographics**

![Augmented Reality](/images/posts/2014-08-04-interfaces-of-the-future/augmented-reality-holographics.jpg)
###### Credit: [Pearson School of Thought](http://youtu.be/yQRdIZR_LYY)

Firstly, holographic-style augmented reality interfaces, where you can
reach out, create and interact with virtual content in 3D, Tony Stark
-style. Basically, future AR displays combined with future Leap
Motion-style sensors to let you manipulate things with your hands in
natural ways. This could bring the real world and the digital world a
lot closer together. Imagine using this to collaborate with people to
design and create things - each being able to see what each other is
painting in the air…

It might seem like this is still a long way off…But it shouldn’t be long
before we can start to try it out at least. Meta are planning to bring
“the first holographic interface” to market next year.

![Meta Pro glasses](/images/posts/2014-08-04-interfaces-of-the-future/meta-pro.jpg)
###### Credit: [Meta](https://www.spaceglasses.com)

This Pro version will be \$3,650 and it’ll be attached to a pocket
computer. So there’s a couple of reasons already why it’s unlikely to
shoot up that traction axis straight away. But some smart people predict
that it will only be 5 years before it becomes this:

![Ray Bans](/images/posts/2014-08-04-interfaces-of-the-future/ray-bans.jpg)
###### Credit: [Wikimedia](http://upload.wikimedia.org/wikipedia/commons/4/4b/RayBanAviator.jpg)

Just regular looking glasses or shades. That could really help to open
it up to the mass market.

**Virtual Reality**

And how about Virtual Reality?

![The Matrix](/images/posts/2014-08-04-interfaces-of-the-future/matrix.jpg)
###### Credit: [Sudhee](http://www.flickr.com/photos/sudhee/82891943)

Again, people have been talking about it for decades. But it should only
be next year before we have the first affordable Virtual Reality
consumer devices go on sale, like the Oculus Rift:

![Oculus Rift](/images/posts/2014-08-04-interfaces-of-the-future/oculus-rift.jpg)
###### Credit: [Oculus Rift](http://www.oculusvr.com/)

The unique thing about VR is the feeling of “presence”; you’re
transported into another environment. Go to the edge of a cliff in
virtual reality and you should find that you get sweaty palms and a
quickening heart beat, like you would in real life.

![Feet hanging off a cliff](/images/posts/2014-08-04-interfaces-of-the-future/presence-cliff.jpg)
###### Credit: [Fotolia](http://www.fotolia.com/)

Of course, your conscious brain knows that you’re just wearing what is
effectively a pair of clunky ski goggles. But enough of your
subconscious brain is tricked that it can feel like you’re actually
immersed in another world…

Here’s just one interesting example: hooking into a live camera feed on
another person, to enable a person in a wheelchair to see herself
dancing on her feet:

![VR choreography](/images/posts/2014-08-04-interfaces-of-the-future/vr-choreography.jpg)
###### Credit: [BeAnotherLab](http://vimeo.com/74254297)

We’re only really just scratching the surface of it right now, but we
have the potential to create some amazing experiences for people, which
can lead to reactions like this:

![VR joy grandma](/images/posts/2014-08-04-interfaces-of-the-future/vr-joy-grandma.jpg)
###### Credit: [Paul Rivot](http://youtu.be/pAC5SeNH8jw)

**WebVR**

This is why I think Virtual Reality is exciting, and it’s an especially
exciting time for us Web developers right now. Because just in the last
few weeks:

-   Apple finally [embraced
    WebGL](http://blog.ludei.com/webgl-ios-8-safari-webview/), a key
    technology for creating 3D experiences in the browser
-   And
    [Mozilla](http://blog.bitops.com/blog/2014/06/26/first-steps-for-vr-on-the-web/)
    and
    [Google](http://blog.tojicode.com/2014/07/bringing-vr-to-chrome.html)
    have both released special builds of their browsers, with initial
    support for Virtual Reality

This is what they’re implementing:

-   The ability to discover available Virtual Reality devices (in
    practice just the Oculus Rift right now, but more will
    be coming…)
-   Full screen extensions so you can request an element goes full
    screen on the VR headset
-   Sensor integration so you can use for example, the orientation
    of the device
-   And the particular distortion effect required for rendering on
    different VR devices - you should be able to be hardware
    agnostic

Google are calling this “WebVR” (Mozilla don’t seem to be naming it
anything in particular yet). It’s at “version zero” and it’s not even in
the alpha channels of the browsers yet; currently you can only get this
in separate builds.

Here’s how you use it… With a WebGL scene, you render it twice, side by
side: one for your left eye and one for your right eye.

![VR stereo](/images/posts/2014-08-04-interfaces-of-the-future/webgl-stereo.jpg)
###### Credit: [Oculus Rift](http://www.oculusvr.com/)

The browser can apply the distortion required for the particular device
- it’s like this for the Oculus Rift:

![VR distortion](/images/posts/2014-08-04-interfaces-of-the-future/webgl-distortion.jpg)
###### Credit: [Oculus Rift](http://www.oculusvr.com/)

This is what the lenses will turn into something that covers as much of
your vision as possible.

As for CSS3D content, it should be even easier because it’s declarative,
so you can leave it up to the browser to figure out how to render it.
You should just need to use ‘preserve-3d’ and set the ‘perspective’,
then just request that your containing element goes full-screen on the
VR device. That’s the theory anyway: Mozilla are working on this now,
but I haven’t seen any demos of it yet \[Update: as of 31st July,
Mozilla have released [new builds with preliminary CSS
integration](http://blog.bitops.com/blog/2014/07/31/css-and-vr-integration/)\].

We’ll stick with WebGL and I’ll show you just the key pieces of code we
need to add. Warning: these APIs are brand new - they will undoubtedly
change.

    if( navigator.getVRDevices ) {
      navigator.getVRDevices().then( vrDeviceCallback );
    }

This is the discovery bit. \[Update: Chrome and Firefox now both use
promises\].

    function vrDeviceCallback( vrDevices ) {
        for( var i=0; i < vrDevices.length; i++ ) {
            // If instance of HMDVRDevice...
            // If instance of PositionSensorVRDevice...
        }
    }

In our callback we can check it’s a Head-Mounted Display and also see if
we can get sensor data out for the orientation.

    var leftFOV =
        vrHMD.getRecommendedEyeFieldOfView('left');

    var leftTrans = vrHMD.getEyeTranslation('left');   

For each eye, we can ask for the recommended field of view which we can
use to set the right camera projection, and also the translation to
apply, as in how far apart the cameras should be.

    if( canvas.webkitRequestFullscreen ) {
        canvas.webkitRequestFullscreen({
            vrDisplay: hmdDevice });

    } else if( container.mozRequestFullScreen ) {
        container.mozRequestFullScreen({
            vrDisplay: hmdDevice });
    }

And we call requestFullscreen, passing in our VR device. (Note that for
Chrome “Fullscreen” has a small ‘s’ and you need to do it on the actual
actual WebGL canvas element. For Firefox, it’s a big ‘S’ and their
example calls it on the element containing the canvas).

Now you just need to add your usual WebGL goodness. I used the popular
[Three.js](http://threejs.org/) library. I also like dinosaurs, so I
added a dinosaur thanks to [Dorling Kindersley](http://dk.com/). Plus a
sky map from [eyeon Software](http://www.eyeonline.com/). And I made
this…

I’m hoping to release the code, but I haven’t been able to yet. Brandon
Jones from Google has the [code for his demo up
here](http://bit.ly/oculus-example) though, plus be sure to check out
[his blog
post](http://blog.tojicode.com/2014/07/bringing-vr-to-chrome.html).

**Google Cardboard**

Also just in the last few weeks, Google unveiled
[Cardboard](https://developers.google.com/cardboard/) which, as it
sounds, is literally made out of cardboard, but it just takes a couple
of lenses and a button made out of a magnet, and it can turn your
existing smartphone into a rudimentary Virtual Reality device for just a
few dollars.

![Google Cardboard](/images/posts/2014-08-04-interfaces-of-the-future/google-cardboard.jpg)

We can also create Cardboard apps using Web technologies, right now.
It’s not supported by these very new WebVR implementations just yet, but
because it’s essentially just a phone, we don’t actually need WebVR to
be able to get it to work.

In fact, Three.js has a StereoEffect we can apply, which makes it
easy to render the same scene for both eyes side by side:

    var effect = new THREE.StereoEffect( renderer );
    ...
    effect.render( scene, camera );

And Three.js also has a controls module that uses the standard HTML5
orientation API in order to render things according to the orientation
of the phone:

    var controls = new THREE.DeviceOrientationControls(
            camera, true);

    controls.connect();
    ...
    controls.update();

Here’s what that looks like:

Again, unfortunately I can’t share the code for this right now, but
Google have a [code example up here](http://bit.ly/cardboard-example).

**Just a taster**

![TRex](/images/posts/2014-08-04-interfaces-of-the-future/trex.png)

Hopefully I’ve given just a taster about some exciting new technology
coming up, and how you can get started with Virtual Reality right now. 

I’ll leave you with this thought…

Today, we’re creating pictures under glass. 

Tomorrow we’ll create whole new worlds.

![New world](/images/posts/2014-08-04-interfaces-of-the-future/new-world.png)
###### Credit: [mind-criminal](http://mind-criminal.deviantart.com/art/Universe-From-a-Meadow-257284639)

So let’s get ahead of the curve and start hacking now!

Thank you.

