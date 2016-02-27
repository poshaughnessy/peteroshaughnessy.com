---
title: Highlights from Front End London and State of the Browser 4 (April 2014)
slug: highlights-from-fel-and-sotb4-apr-2014
excerpt: Bridging the gap between designers and developers, Open Web Apps, and why Mobile Web is rubbish.
date: 2014-04-28
template: post.hbs
tags: meetups, conferences, web
---

Last week I attended [Front End
London](http://www.frontendlondon.co.uk/) and [State of the Browser
4](http://browser.londonwebstandards.org/). Here are my highlights
([what were yours?](http://twitter.com/home/?status=@poshaughnessy)):
 
## Bridging the gap between developers & designers

*[Link to presentation slides and notes](http://www.slideshare.net/kaelig)*

[Kaelig Deloumeau-Prigent](https://twitter.com/kaelig) from the Guardian
gave some insights into how they’re developing the new [responsive
Guardian website](http://www.theguardian.com/uk?view=mobile).

The numbers are impressive/scary:

-   About 16K lines of Sass (full compilation takes “a while”!)
-   55 contributors to the GitHub project (all internal so far), 25 of
    those working on HTML + CSS
-   About 4 releases per day

So if their designers and developers aren’t communicating efficiently,
they have a problem. That’s why they define their whole [Design
System](http://css-tricks.com/design-systems-building-future/) using
Sass variables. Colours, media query breakpoints, the grid system
(padding, margins)… they’re all defined with meaningful names that will
be used by both the designers and the developers.

They also created their own [Sass mixin called
sass-mq](https://github.com/guardian/sass-mq) to help define their media
queries in a more elegant way. It allows them to do things like this:

    @include mq($from: tablet, $to: desktop) {
      ...
    }

   

## “Mobile Web is rubbish”

*[Link to presentation slides](https://speakerdeck.com/stopsatgreen/over-promised-and-under-delivered)*

[Peter Gasston](https://twitter.com/stopsatgreen) gave an entertaining
talk, titled “Over-promised and under-delivered”, about how we need to
up our game, because too many Mobile Web experiences are just *rubbish*!

Only 41% of the top 100 sites have an actual mobile site, and only 6%
are significantly optimised in terms of page weight.

![Page weight pie chart](/images/posts/2014-04-28-highlights-from-fel-sotb4-apr-2014/page-size-pie-chart.png)

Some mobile sites that Peter singled out for particular
condemnation were:

A site which tells you which way to hold your phone!

![Forced orientation](/images/posts/2014-04-28-highlights-from-fel-sotb4-apr-2014/forced-orientation.png)

And a mobile site which tells you to go away “and visit our site on a
real screen”!

![Go away](/images/posts/2014-04-28-highlights-from-fel-sotb4-apr-2014/go-away.png)

(As Jake Archibald later pointed out, they obviously didn’t clock that
this would be extra ironic, given that their desktop site lists
“Responsive Design” as one of their specialist skills!)

For more hilarious/exasperating examples of poor mobile web experiences,
see [WTF Mobile
Web](http://wtfmobileweb.com/ "http://wtfmobileweb.com/") and [Broken
Mobile
Web](http://brokenmobile.tumblr.com/ "http://brokenmobile.tumblr.com/").

It’s no wonder that people are spending [more time in native apps and
less time in the
browser](http://cdixon.org/2014/04/07/the-decline-of-the-mobile-web/).

Peter then went onto discuss things that we should do, such as:

Use the meta viewport tag to set
width=device-width and iOS 7.1’s new
[minimal-ui](http://www.mobilexweb.com/blog/ios-7-1-safari-minimal-ui-bugs),
which makes it automatically use ‘full-screen’ mode, i.e. hide the URL
bar in portrait, plus also hide status bar and title bar in
landscape.

![Minimal UI](/images/posts/2014-04-28-highlights-from-fel-sotb4-apr-2014/minimal-ui.png)

But:

-   Don’t set user-scalable=no or
    maximum-scale=1! That’s an accessibility no-no. Think
    about people who are partially sighted.
-   A member of the audience said they’d done some user testing
    and with minimal-ui switched on, users didn’t know how
    to find the back button, or how to exit their app!
-   [Apparently](https://twitter.com/poshaughnessy/status/459454237077164032)
    minimal-ui causes problems if you’re also using smart
    app banners.
-   Also, the viewport meta tag is not a standard and there are
    efforts to replace it with a @viewport CSS spec (unfortunately
    although it’s CSS, to ensure it’s picked up as quickly as possible,
    you are advised to include it inline!).\
    

And hopefully the new “Picture 2.0” &lt;picture&gt; element
standard will help with responsive images. There’s a polyfill called
[Picturefill](http://scottjehl.github.io/picturefill/) which looks like
it’s up to date with the latest spec. And it should actually ship in
browsers in “a few months”.

 

## Network: Optional (Service Workers)

*[Earlier version of the talk here](https://speakerdeck.com/jaffathecake/network-optional)*

Always entertaining, [Jake Archibald](https://twitter.com/jaffathecake)
gave a great talk (mainly) about [Service
Workers](https://github.com/slightlyoff/ServiceWorker) (the new
NavigationController which was the new AppCache!).

There’s a lot to it and it seems like something that will take time for
people to fully understand and figure out the potential for.

Peter Gasston earlier described it as “like Node.js that works in your
browser”. Apparently it can allow you to do background services that
continue working even if someone leaves your site. This could be great
for offline capabilities, e.g. checking when a connection comes back up
and then syncing back to the server when it has. Also it gives you full
control over caching. You get event listeners for requests and you can
effectively hijack the response and decide to return something from your
cache. And your cache won’t go stale automatically, it’s up to you to
remove entries when you want to.

So a usual process will be: deliver your page shell from ServiceWorker,
show a spinner, if you want to get fresh content, then show that,
otherwise show your cached version, then hide your spinner.

You can also check requests to your APIs and look for a header (e.g.
x-use-cache, something you define yourself) and return cached responses
if the header is included.

ServiceWorker should move to a public draft and get an implementation in
Chrome in the next few weeks (NB. currently there’s a flag to switch on
Service Workers, but you can only test registering/unregistering!)

 

## Open Web Apps

*[Link to presentation slides](http://www.slideshare.net/cheilmann/open-web-apps-state-of-the-browser-2014)*

Another great speaker, [Christian
Heilmann](http://www.twitter.com/codepo8) from Mozilla talked about
[Open Web Apps](https://developer.mozilla.org/en-US/Apps/Quickstart),
i.e “the best of Apps and the best of the Web”. Essentially they are
just web apps with the addition of [extra Web APIs for device
features](https://developer.mozilla.org/en-US/Apps/Quickstart#Web_API_functionality)
and a manifest.webapp file used to make it 'installable’,
and useful for app marketplaces such as the [Firefox
Marketplace](https://marketplace.firefox.com/).

I didn’t realise but they now have [integration with
Android](http://hacks.mozilla.org/2014/03/better-integration-for-open-web-apps-on-android/)
as well as Firefox OS.

[Cordova now supports Firefox
OS](https://hacks.mozilla.org/2014/02/building-cordova-apps-for-firefox-os/)
and there’s an [article about porting existing web apps to Firefox OS
here](https://hacks.mozilla.org/2013/12/write-elsewhere-run-on-firefox/).

 

## Update

These are just four talks from the many across the two events that
I picked out as my personal highlights, but there were lots of others
that you should check out too.

Take a look
at [www.frontendlondon.co.uk](http://www.frontendlondon.co.uk/) and
[browser.londonwebstandards.org/schedule/](http://browser.londonwebstandards.org/schedule/)
for the slides/videos of the rest!

 

