---
title: Combining React and WebGL
slug: combining-react-and-webgl
excerpt: React is great for building user interfaces, but how does it fit in with WebGL?
thumbnail: /images/posts/2015-05-23-combining-react-and-webgl/thumbnail-apoc.png
date: 2015-05-23
tags: talks, react, webgl, three.js, ui
template: post.hbs
---

[React](https://facebook.github.io/react/) is great for building user interfaces, but how does it fit in if you want to render 3D elements to a WebGL canvas? That was the theme of a talk I gave at [London React](http://www.meetup.com/London-React-User-Group/events/221725048/) this week:

*   [Link to recording](https://www.youtube.com/watch?v=LcsGax4F6Xo)  
*   [Link to slides](https://docs.google.com/presentation/d/1moVaB4nnSRyHO53Ic8TPbTTX-M8P1OtLgcdkVejd8o4/edit?usp=sharing)  

I talked about the journey we had been on with our [‘Apoc’ prototype](http://labs.pearson.com/prototypes/apoc/), a tablet-friendly web app for interactive geology simulations. The majority of the UI is made up of our usual React.DOM components, but a key component is an interactive 3D scene, powered by [Three.js](http://threejs.org/).

![Project Apoc](/images/posts/2015-05-23-combining-react-and-webgl/apoc.png)

It was surprisingly easy to simply kick off a Three.js module and let it render itself to a canvas element supplied by React. However, there are a few gotchas around the canvas lifecycle - especially if you’re turning the canvas off an on as you flip between different pages. A wider issue is around code structure and not ending up with messy two-way communication between the React component and the Three.js module.  

A great example of a React + Three.js UI is [BodyLab’s BMI Visualiser](http://shapex.bodylabs.com). Developer Paul Melnikow was kind enough to share some information about how they developed it, and what they’d change next time. Should you use React’s _setState_ interface for controlling your Three.js model state too, or is that too much of a fudge?

Finally, I introduced [react-three](https://github.com/Izzimach/react-three), a library specifically to provide the React bindings for creating and controlling a scene using Three.js. Essentially it handles the lifecycle of the Three.js WebGLRenderer etc for you so you don’t need to worry about the canvas lifecycle yourself. It also provides an easy-to-understand interface where creating Three.js objects feels as easy as creating regular React elements. To demonstrate react-three, I created a robot viewer demo. The [source code is here on GitHub](https://github.com/poshaughnessy/react-three-demo). If you’re on a good network connection and don’t mind waiting a few seconds - because the models are very big - then you can try [the demo online](react-three-demo.herokuapp.com).

Thanks to Red Badger for hosting me, Paul Melnikow for sharing his insights and Gary Haussmann for creating react-three and answering my questions!