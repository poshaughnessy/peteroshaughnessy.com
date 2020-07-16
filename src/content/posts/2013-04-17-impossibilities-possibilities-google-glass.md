---
title: The Impossibilities and Possibilities of Google Glass development
slug: impossibilities-possibilities-google-glass
excerpt: Google have just released the API and developer docs. Let's take a look at what we can do with it...
thumbnail: /images/posts/2013-04-17-impossibilities-possibilities-google-glass/thumb-google-glass.jpg
date: 2013-04-17
tags: wearables, future-tech
layout: post.hbs
---

In the last few days, Google have released the [API and developer
documentation for Google Glass](https://developers.google.com/glass/).

They also have some videos (such as the [SXSW
talk](http://youtu.be/JpWmGX55a40), plus
[these](https://developers.google.com/glass/about)) to guide us through
the capabilities.

I thought I’d put together a quick list of the Impossibilities and
Possibilities for third party developers (as I see it, from the
information so far):

**The following are *not* possible:**

_‘Apps’_

You can’t develop 'apps’ as such, or actually install anything on the
device. But you can develop services through _timeline cards_. These
cards can contain small amounts of text, HTML, images, or a map, but
there’s no scrolling, JavaScript, or form elements.

**Update:** This isn’t quite true! It turns out it _is_ possible for
techies to install Android APKs - by plugging it in with USB and
enabling debug mode, on the Explorer version of the device at
least. See this post by Mike DiGiovanni:

<https://plus.google.com/116031914637788986927/posts/Abvh8vmvPJk>

_Realtime picture/video, or voice integration_

It’s only possible to tap into user’s images and video if they
choose to share it through your service, after they’ve been taken. And
it doesn’t seem possible for 3rd party developers to do anything with
voice input. “At the moment, there doesn’t appear to be any support for
retrieving a camera feed or an audio stream”
([source](http://www.zdnet.com/google-publishes-glass-mirror-api-preview-for-developers-7000014049/))

**Update:** Except if you root it, of course! See:

<http://arstechnica.com/security/2013/05/rooting-exploit-could-turn-google-glass-into-secret-surveillance-tool/>

_AR_

Early discussions about Google Glass kept referring to it as an AR
device. It’s not really AR at all. It doesn’t give you the capability to
augment the user’s real-world view, except indirectly, through the
small, fixed screen. (It’s actually less of an AR device than a mobile
phone held up in front of your face).

_Web browsing_

“Users don’t browse the web on Glass (well, they can ask questions
to Google but there is no API for that yet)” ([Max
Firtman](http://www.mobilexweb.com/blog/google-glass-web-mirror-api-html5))

_Notifications_

“We push, update and delete cards from our server, just for being
there if the user thinks it’s time to see the timeline. It’s probable
that our card will never be seen by the user… It’s not like a mobile
push notification.” ([Max
Firtman](http://www.mobilexweb.com/blog/google-glass-web-mirror-api-html5))

_Eye-tracking_

Early [unofficial
reports](http://www.slashgear.com/google-glass-in-focus-ui-apps-more-22270783/)
said there would be a second camera facing towards you, for eye
tracking. From the official [tech
specs](http://support.google.com/glass/answer/3064128?hl=en&ref_topic=3063354),
it seems that’s not the case.

**Update:** I was right first time - it’s not mentioned in the tech
specs (maybe they just don’t want to shout about it much right now?) but
there’s definitely an eye tracking camera - that’s what enables 'Winky’:

<http://arstechnica.com/gadgets/2013/05/google-glass-developer-writes-an-app-to-snap-photos-with-just-a-wink/>

_Location, unless paired with Android 4+ phone_

It was popularly reported that Glass would work with phones other
than Android. But MyGlass, which includes the GPS and SMS capability,
requires Android ICS or higher
([source](http://support.google.com/glass/answer/3064128?hl=en&ref_topic=3063354))

_Direct revenue_

There’s no charging for timeline cards, no payment for virtual
goods or upgrades, and no advertising
([source](http://www.belfasttelegraph.co.uk/lifestyle/technology-gadgets/app-developers-fail-to-see-profits-with-google-glass-29201537.html))

**So what kind of services *are* feasible?**

_Services for often-updated content_

To provide short snippets of content that the user will often want
to have a quick glance at, to see the latest. For example, news
headlines.

**Update:** You can also have short amounts of content read out
for the user, using the “read-aloud” feature. See:

<http://thenextweb.com/media/2013/04/25/the-new-york-times-releases-a-google-glass-app-that-reads-article-summaries-aloud/>

_Location services_

To provide advice/information about nearby locations. For example,
travel information or tourist destination tips.

_Share services_

For sharing your photos and video with your friends. Or sharing them
with services (automated or not) that can do something with them and
send you something back.

_Simple communication / social networking_

It’s possible not just to consume 3rd party content, but to reply with
text or respond with selections. So reading and creating emails, text
messages, Facebook status updates, tweets…  should all be possible.

**To summarise…**

The possibilities for third party developers are more limited than
many hoped. But, there’s still an exciting amount to explore. And
remember this is the very first API for the very first commercial device
of its kind. (Compare it to the first version of the iPhone, which
didn’t have an SDK or an App Store).

To quote [Timothy Jordan](http://youtu.be/JpWmGX55a40), _“It’s
early days… We’re really just getting started”_.
