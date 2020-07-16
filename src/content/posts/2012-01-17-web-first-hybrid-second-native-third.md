---
title: Web First, Hybrid Second, Native Third
slug: web-first-hybrid-second-native-third
excerpt: If you want to create a mobile app, should you go Web, hybrid or native? Here's what I propose...
thumbnail: /images/posts/2012-01-17-web-first-hybrid-second-native-third/thumb-podium.jpg
date: 2012-01-17
tags: mobile, web, hybrid-apps, native
layout: post.hbs
---

If you want to create a mobile app, one of the big questions you need to
answer early on is: Web, hybrid, or native?

There’s no one-size-fits-all answer; there’s a lot to consider. But how
do you go about making the decision? Which option should you consider
first? I propose *Web First*. Only if the Web alone won’t do,
consider *Hybrid Second*. Finally, think about *Native Third*.

## Web First

The best reasons to go with the Web can be summed up as: portability,
shareability and updatability (I may have invented one or more of those
words, but you get the idea!).

### 1) Portability

Not all applications need to work on multiple platforms. If you’re
setting out to write an iPhone game, it’s a valid choice to just target
iPhones. But for most application developers, we need to consider
multiple platforms. How do we cater for people with Android, Blackberry
or Windows Phones? This is a problem that’s _growing fast_. In 2009,
Android’s market share [was
4%](http://en.wikipedia.org/wiki/Smartphone#Market_share). Now
it’s [over
50%](http://articles.businessinsider.com/2011-11-15/tech/30400455_1_ios-iphone-smartphone-market).
And Nokia are expected to sell [37 million Windows Phones in
2012](http://www.techspot.com/vb/topic176086.html).

Avoid locking yourself into one vendor by using open, standardised
technologies that can work for many. Avoid writing two or three separate
applications with different codebases and having to maintain them all
separately. Write *one app to rule them all!*

The counter-argument to this is that it’s not easy to get Web apps
working perfectly across different types devices. For anything beyond
the most simple application, you’re going to find things you need to
tweak for each device you test. You’re likely to need various tools and
techniques such as [modernizr](http://www.modernizr.com/) and [media
queries](http://www.w3.org/TR/css3-mediaqueries/). You may even need to
factor in devices that don’t support these very tools that should be
easing the process. It’s likely to be painful for the foreseeable
future. But in *many* cases, it should be worth it.

As well as different vendors, there’s also the question of different
device sizes. We already have mobiles, tablets, ultrabooks, laptops,
desktops, Internet televisions… and there’s no telling where the variety
will end. The Web is the best way to reach all these different types.
Once again, it won’t be easy. You’ll need different sets of styles and
lots of tweaking. You’ll probably end up reading a lot about Responsive
Design (and perhaps like me you’ll think we’re not quite there yet when
you load the much-hailed [Boston Globe](http://bostonglobe.com/) on your
mobile phone and find one very, very long column). But… it’s _possible_
to cater for this variety and you can’t say that for anything else but
the Web.

### 2) Shareability

URLs are underrated; they’re the Web’s killer feature. They make it easy
to share your application, or even a specific page or part of it.

Native apps are really missing out. I saw an advert on the tube today
that advised those looking for their app to go to the App Store and
search for “Parker Car Service Smarter Minicab Booker”. This is not a
good way to point people to your app. Okay they could’ve used a URL (iOS
devices load itunes.apple.com URLs in the App Store), but the reason
they didn’t is that it would be pretty confusing for customers.

Say we bothered to tap in that big long search query and we’ve now found
the App Store listing for our app. Now we have to download it. This
isn’t a big hassle if we’re going to use the app a lot. But nearly [30%
of apps downloaded are used just
once](http://gigaom.com/2011/02/01/people-download-lots-of-apps-but-many-get-discarded/).
Compared to just clicking a link, that’s a lot of effort to go through
if you’re going to use it once and throw it away.

As well as URLs, it’s the ubiquity of the Web that makes it so
shareable. All smartphones have a Web browser. Not all smartphones have
a particular native app installed. This is particularly important for
sharing on social networks. I can easily point my friends to a Web link
and they can load it up and consume the content within their Twitter or
Facebook applications. Twitter and Facebook can embed a Web viewer
within their apps because the Web is ubiquitous and non-proprietary.

### 3) Updatability

Releasing updates to native apps is a pain. You have to go back through
the app store release process. For iOS, that involves re-submitting to
Apple and waiting a couple of weeks for them to approve it (or they
might reject it).

With the Web, you can just push out the new version at your convenience.
You can be more responsive to feedback, fix bugs quicker and generally
keep your content up to date much better.

Native apps are a pain to update from the consumer’s perspective too. On
my iPhone, the App Store always has a big red number next to it, glaring
at me for not updating my apps more often. Scott Hanselman called it
“[feeding the update
beast](http://www.hanselman.com/blog/AppsAreTooMuchLike1990sCDROMsAndNotEnoughLikeTheWeb.aspx#a579d5c5e-2daf-49a2-b22a-4a0bcbb5a24e)”.
For big apps, you may need to wait til you get on wifi. Native apps do
allow you to potentially stick with a specific version, whereas with a
Web app you’re forced to update. But effectively you’re forced to update
native apps too, because if you don’t, you’ll just have a notification
glaring at you for eternity.

## Hybrid Second

The Web alone doesn’t work for you? Okay let’s move onto Option 2:
“Hybrid”. This is a kind of mish-mash of Web and native; basically,
wrapping a Web app within a native app. Tools like PhoneGap are very
popular and make this pretty easy. Some reasons for doing this are:
extra features, payments and discoverability.

### 1) Extra features

The biggest reason to put your web app within a native wrapper is to add
native features that you can’t implement with the Web. For example,
integrating with the camera or the contacts book.

I won’t try and list all the things you can and can’t do yet with the
Web, but it’s worth saying for the benefit of us future-gazers that the
Web should catch up with a lot of these features. The [Device APIs
Working Group](http://www.w3.org/2009/dap/) is working towards this, but
unfortunately it’s been rather slow-moving. Mozilla are hoping to
fast-track some of it through
their [WebAPI](https://wiki.mozilla.org/WebAPI) project, which we should
see something from quite soon.

Of course, the Web will never be able to do everything that all devices
can do natively. Proprietary features can be made available quicker.
Shared standards evolve slower. So there will always be reasons to
develop particular features with native code. I predict though that more
native coding will become simply add-ons to Web codebases; less apps
will be written wholly in native code.

### 2) Payments

One advantage that native/hybrid apps have, at least on Apple devices,
is that people are quite happy to pay for them. Apple have made it as
easy as it can be, with a one-click-plus-password method. It’s just the
same process whether you’re downloading a free app or one that costs
money, so there’s no extra steps to put you off.

I don’t think we’ve really seen this level of ease come to the Web yet.
However, it’s not a complete win for the hybrid/native approach. It’s
worth remembering that you’ll pay Apple a lot for the privilege. If you
are able to roll your own subscription or payment method, you could save
a lot by not having to pay Apple a 30% cut.

### 3) Discoverability

App stores do provide a great way to discover apps, but I think this
argument can be a bit over-stated. Let’s not forget the Web’s powerful
feature, the URL. An address like app.ft.com is easy to remember and
share. The FT replaced their native app with a Web app, outside of the
App Store. By [breaking the million user
mark](http://www.google.co.uk/url?sa=t&rct=j&q=ft%20million%20app&source=web&cd=2&ved=0CCgQFjAB&url=http%3A%2F%2Faboutus.ft.com%2F2011%2F11%2F18%2Fft-web-app-registers-one-million-users%2F&ei=QLkVT87ROIrtOZbSiYwB&usg=AFQjCNH8BSvef6E7ptab87dhKrn09P8y8A),
they’ve proved that this model can be successful.

## Native Third

You’re still here? Can’t do what you want with Web or Hybrid? Let’s
explore the third option then: writing the app purely in native code.
I’ve bundled some reasons to go down this route into: Performance and
Other Considerations.

### 1) Performance

Performance is another argument for native apps that I think can be a
bit over-stated. As [Cut The Rope](http://www.cuttherope.ie/)’s
ZeptoLab [state](http://www.cuttherope.ie/dev/): “JavaScript now can
execute at near native speeds”. We’ve seen other successful native games
such as Angry Birds brought successfully to the Web browser too. Of
course, desktop browsers can perform better than their mobile
counterparts, but it surely won’t be long before mobile browsers are as
fast as desktop browsers are now. For the most performance-hungry apps
though, for example fast, 3D games, then native is probably the best
choice. (This could change in the future when a significant number of
mobile devices support WebGL).

### 2) Other Considerations

Other reasons for choosing pure native? If you need a lot of native
features or if they’re the core parts of the app, then maybe it would be
messy, or simply unnecessary, to write some bits using Web technologies.

Offline capability is perhaps the most misleadingly quoted reason to
choose native. People instinctively think of the Web as being connected
all the time, but it is possible to store Web apps (both the data and
the apps themselves) offline, using HTML5. However, it is true that
native can provide more storage and greater capabilities in this area.
Also, being early days, it can be a bit tricky to work with these HTML5
features at the moment.

Finally, not all developers are Web developers and if you’re just more
comfortable with Objective-C than JavaScript, plus you’re happy to miss
out on all the advantages listed above, then you’re okay to stick with
what you know!

## Summary

I believe that the Web should be the default choice for applications.
It’s the most portable, flexible and accessible option. It’s not easy,
but it will get easier. If you can’t achieve what you want with a
straight web app, the next choice is hybrid. Finally, there’s the option
to go purely native.

To convey this visually, I’ve created a flow chart. It’s a very
simplified view and shouldn’t be taken too seriously, but I hope you
like it:

<https://docs.google.com/drawings/d/1edfygfJwahmZSLC3WIdHyqfd6QsspHj8UQHaXcd9MPI/view>

Have I missed any key points? Been unfair about anything? If so, please
[get in touch](https://twitter.com/poshaughnessy)!
