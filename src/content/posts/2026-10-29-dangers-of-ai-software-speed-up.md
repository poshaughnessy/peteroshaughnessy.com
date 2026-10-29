---
title: The dangers of the AI software speed-up
slug: the-dangers-of-the-ai-software-speed-up
excerpt: Can we slow down a bit on speeding up software development?
thumbnail: /images/posts/2026-10-29-dangers-of-ai-software-speed-up/thumb.jpg
date: 2026-10-28
---

Speeding up software development is an obvious goal for all tech companies, particularly now in the age of AI. Vibe coding is _fast_. Can we have some more of that please? (Just without the incidents, outages and losing the trust of our customers?)

We know that AI speeds up code production, but the speed of _shipped software_ production [hasn't been keeping up](https://www.faros.ai/blog/how-ai-affects-developer-productivity). There's a bottleneck: humans reviewing the code.

So across the tech industry, companies are investing heavily in "harness engineering", to try to feel enough trust in what AI produces, to let it crack on without humans checking its work.

Even in the organisation where I work, which is a bit behind the curve on this (not always a bad thing), there's talk about potential "10x" speed improvements.

But significantly speeding up software development implies one of two outcomes, depending on whether us humans try to keep up or not: either _burnout_ or _cognitive debt_.

## 1. Burnout

This one is personal for me, because I've seen friends struggling with it. From social media and blog posts too, I'm hearing of loads of developers struggling with what people are calling ["AI fatigue"](https://siddhantkhare.com/writing/ai-fatigue-is-real) or ["AI brain fry"](https://edition.cnn.com/2026/03/13/business/ai-brain-fry-nightcap): the exhaustion from trying to stay on top of AI-produced output.

> "Trying to maintain any kind of quality control... is exhausting and overwhelming."
>
> \- A friend of mine

As software developers, we tend to want to deeply understand the applications and systems that we're developing. It's no wonder, because that used to be the only way we could become better developers and increase our worth to our employers.

But trying to ship AI-produced code significantly faster - while still understanding it in detail - is _not humanly possible_.

Companies calling for their developers to speed up software production with AI - without guidance on what that should mean for code reviews, understanding and quality - could well be causing their employees harm.

## 2. Cognitive Debt

The alternative is developers taking more of a backseat and handing over the reins more to AI. Using one AI model to review another AI model's code. Perhaps only getting involved when the AI reviewer flags potential issues, or when merge requests touch critical parts of the codebase.

This feels very much like the way the industry is heading, so I'm likely to be shouting into the wind here. But I think we should be conscious of the implications of increasing our [cognitive debt](https://newsletter.getdx.com/p/cognitive-debt-the-hidden-risk-in) - or [comprehension debt](https://codemanship.wordpress.com/2025/09/30/comprehension-debt-the-ticking-time-bomb-of-llm-generated-code/) - as we lose human understanding of our code.

### We will become more and more reliant on AI and the companies who serve it

Especially if we're not careful to set up on-prem or local AI, we're likely to make critical dependencies of a handful (at best) of AI companies. We won't be dependent on them just for our infrastructure, but for our _knowledge_ and _thinking_.

When human developers understand their code, that detailed technical knowledge tends to build up within the company over time. As we rely more on AI, this will be lost. LLMs don't actually 'learn' our codebases over time, they just (re-)read what they think they need with every new prompt.

I guess the idea is that us humans will evolve from understanding code, to understanding the _specs_ that drive the code. (Whether this will require actual _developers_ at all is another question).

### We will be contributing more to AI's [environmental and ethical harms](https://peteroshaughnessy.com/posts/responsible-ai-the-only-way-is-ethics/)

Unfortunately this is always a tough argument to make within any company, versus cold, hard financial drivers. But the more we rely on AI, the more we will be contributing to its harms.

### Incidents are likely to become more frequent and take longer to resolve

It doesn't take long to find stories like ["having to stop all feature development for three weeks"](https://dev.to/harsh2644/ai-is-creating-a-new-kind-of-tech-debt-and-nobody-is-talking-about-it-3pm6) because nobody could understand the AI-generated tangle of a codebase anymore. Or [Amazon experiencing "at least two outages because of issues with the company’s internal AI tools"](https://www.theguardian.com/technology/ng-interactive/2026/mar/11/amazon-artificial-intelligence).

It's possible that these risks ease more as AI continues to advance, but [research has shown that while "AI increases throughput, it also increases instability"](https://www.scrum.org/resources/blog/dora-report-2025-summary-state-ai-assisted-software-development).

I guess the hope is that it will be possible to keep MTBF (Mean Time Between Failures) and MTTR (Mean Time To Recovery) low, by investing in harness engineering and best practices around it. We'll have to see how that bears out.

### Developers' mental health could suffer

While some developers are happy to hand over the reins to AI, many others are likely to struggle with this, if they're not already. As Baldur Bjarnason has shared, [software developers are not doing great right now](https://www.baldurbjarnason.com/2026/05-software-developers-are-not-okay/). Disconnecting ourselves from the code powering our applications could feel disempowering and demotivating.

> "I feel like I am just a second hand meat-proxy"
>
> \- A friend of mine

## In conclusion

I'm conscious this blog post only provides challenges, not solutions. And my fears about these issues might make me sound like a luddite to some. Perhaps this post won't age well.

However, my ask is not for everything to remain the same as it is - for that is truly a futile wish - but just that we take real care over how we navigate this AI evolution in software engineering.

Because striving for significant speed gains is not without costs.

--

<p class="caption">Thumbnail image credit: <a href="https://commons.wikimedia.org/wiki/File:Speed_limit_road_signs_EB_I-82,_Apr_17.jpg">"Speed limit road signs"</a> by <a href="https://commons.wikimedia.org/wiki/User:An_Errant_Knight">An Errant Knight</a>, Creative Commons</p>
