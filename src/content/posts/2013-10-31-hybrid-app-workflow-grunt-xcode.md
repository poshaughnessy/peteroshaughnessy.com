---
title: Hybrid app workflow with Grunt, via XCode
slug: hybrid-app-workflow-grunt-xcode
date: 2013-10-31
tags: mobile, hybrid-apps
template: post.hbs
old-url: http://www.peteroshaughnessy.com/post/65649059080/hybrid-app-workflow-with-grunt-via-xcode
---

These days, with web apps getting more complex, it’s getting more
common to have have an automated JavaScript-based build process -
including things like:

-   Running tests and linting
-   CSS compilation (from SASS/Less)
-   Combining and minifying JavaScript files
-   Single-command build and deployment
-   Live re-loading of changes during development

[Grunt](http://gruntjs.com/) (like Ant for web apps) enables all of
these and a whole lot more. It’s only been on the scene since 2012, but
it seems to be exploding in popularity right now.

But how about using Grunt for a *hybrid* app?

I’ve been reading and talking about hybrid apps for a long time, but I’m
actually just developing one for the first time now. Despite being a
newbie, I thought it would be worth sharing how we’re setting it up.

NB. Despite the aim being to make the app as cross-platform portable as
possible, this post is going to specifically talk about iOS (we’re only
targeting one platform for the initial prototype).

The first thing I tried was - of course - PhoneGap. But I was
disappointed with the standard workflow. I don’t want to have to run the
PhoneGap build first, then load the resulting project in XCode, and then
build and run the app from there. That makes the feedback loop for
development too slow.

It might have been OK if we could have just tested the app in the web
browser most of the time - if we just wanted to wrap a pure web app
inside a native wrapper, or bolt on a plugin or two. But we need to
develop a significant portion of this app in native code, so we need to
be testing the actual native app very regularly. We don’t want to
have two separate compilation steps. We need to build it and run it on
an iOS device or emulator as quickly as possible.

It was about this time that we stopped looking at PhoneGap and started
investigating how much work it would be to just write a UIWebView app
with a simple iOS JavaScript bridge. I think we’ll probably go with the
latter now, although I’m still wondering about PhoneGap (see below)…

So, what about Grunt? As I mentioned, we don’t want two separate build
processes, so we need to combine the Grunt build
process with the XCode build process. Thankfully we can do
that quite easily with a Build Phase [Run
Script](https://developer.apple.com/library/ios/recipes/xcode_help-project_editor/Articles/AddingaRunScriptBuildPhase.html). 

A [handy StackOverflow
post](http://stackoverflow.com/questions/14315648/how-to-run-grunt-tasks-during-xcode-build-phase) told
me this wasn’t too crazy an idea. I soon run into a problem though: the
Compass SASS compilation failed. It was just a case of fiddling with the
PATH and environment variables though. I’ve written up the solution as a
self-answered StackOverflow post:

<http://stackoverflow.com/questions/19710361/grunt-compass-task-fails-in-xcode-build-script/>

So now our workflow is simply:

1.  Open up both our preferred web IDE (I use WebStorm) and
    XCode
2.  Edit the web code in the web IDE
3.  Do Build + Run in XCode.



**Update**

It’s now a few weeks later. Unfortunately we’ve since ditched this
XCode-Grunt integration! For the following reasons:

-   We’re sharing our XCode project settings via Git, and we don’t have
    the same build paths.
-   For some reason it doesn’t update the JavaScript code until you
    re-build twice! I’m not sure why, but I guess it may be to do with
    the stage of the build process when the Grunt task takes place -
    perhaps it happens too late?
-   We’ve split up the work so my colleague is mainly working on the
    Objective-C side and I’m working mainly on the Web side. So far, my
    colleague hasn’t needed to update the Web code much, and I haven’t
    needed to run it up inside the native wrapper much.
-   I’ve realised it’s not actually that hard just to run *grunt build*
    separately first ;-)

Oh well… always learning!



