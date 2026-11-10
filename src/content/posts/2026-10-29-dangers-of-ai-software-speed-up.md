---
title: In defense of the human code review
slug: in-defense-of-the-human-code-review
excerpt: Can we slow down a bit on speeding up software development?
thumbnail: /images/posts/2026-10-29-dangers-of-ai-software-speed-up/thumb.jpg
date: 2026-10-28
---

Speeding up software development is an obvious goal for all tech companies, particularly now in the age of AI. Vibe coding is _fast_. Can we have some more of that please? (Just without the incidents, outages and losing the trust of our customers?)

Even in the organisation where I work, which is somewhat behind the bleeding edge on this (perhaps a good thing), I've heard talk about striving for "10x" speed improvements.

We know that AI speeds up code production, but the speed of _shipped software_ production [hasn't been keeping up](https://www.faros.ai/blog/how-ai-affects-developer-productivity). There's an apparent bottleneck: humans reviewing the code.

But is this really a bottleneck we should try to solve, or is it an essential part of a maintainable, production system?

Companies are investing heavily in "harness engineering" and there's a growing push for AI "software factories", to transition "from AI-assisted to AI-led engineering". There's a growing sense that software engineers trying to keep up with reviewing merge requests are the last bastions of human understanding.

But keeping human code reviews - and allowing sufficient time for them - can help to avoid two key problems: _cognitive debt_ and _burnout_.

## Cognitive debt

Human code reviews are critical for avoiding the [cognitive debt](https://newsletter.getdx.com/p/cognitive-debt-the-hidden-risk-in) - or [comprehension debt](https://codemanship.wordpress.com/2025/09/30/comprehension-debt-the-ticking-time-bomb-of-llm-generated-code/) - from losing human understanding of our code.

Companies appear to be increasingly considering handing over the reins more to AI. Perhaps using one AI model to review another AI model's code. Perhaps only getting involved when the AI reviewer flags potential issues, or when merge requests touch critical parts of the codebase.

But I think we should be very conscious of the implications of increasing our cognitive debt:

### Increasing our reliance on AI

Especially if we're not careful to set up on-prem or local AI, we're likely to make critical dependencies of a handful (at best) of AI companies. If we endow them more and more with the ownership of our code, we won't be dependent on them just for our infrastructure, but for our _understanding_.

When human developers understand their code, that detailed technical knowledge tends to build up within the company over time. As we rely more on AI, this will be lost. LLMs don't actually 'learn' our codebases over time, they just (re-)read what they think they need with every new prompt.

There is a post on Reddit which I think perfectly encapsulates the dangers of transferring too much coding repsonsibility to AI: ["A year after the 100% AI mandate nobody understands our code"](https://www.reddit.com/r/ClaudeCode/comments/1xq2n3t/a_year_after_the_100_ai_mandate_nobody/).

> "A year ago leadership told us everything goes through agents now. Hand written code needed a reason. It felt great for about 6 months, we shipped more than we ever had.
>
> Now the codebase is around 3x the size it was and nobody can explain how most of it works. The agents struggle too, they keep re-implementing helpers that already exist somewhere else because there are 4 versions of everything..."

The "slippery slope" is often a fallacy, but in this case it truly does feel like a slippery slope: once we lose human understanding of our code, it could be very difficult and time-consuming to regain it.

### Increasing incident frequency and the time to resolve

It doesn't take long to find stories like ["having to stop all feature development for three weeks"](https://dev.to/harsh2644/ai-is-creating-a-new-kind-of-tech-debt-and-nobody-is-talking-about-it-3pm6) because nobody could understand the AI-generated tangle of a codebase anymore. Or Amazon experiencing ["at least two outages... including a 13-hour interruption to a customer-facing system"](https://www.theguardian.com/technology/ng-interactive/2026/mar/11/amazon-artificial-intelligence) due to their use of AI.

It's possible that some of these risks ease more as AI continues to advance, but [research has shown that while "AI increases throughput, it also increases instability"](https://www.scrum.org/resources/blog/dora-report-2025-summary-state-ai-assisted-software-development).

Perhaps it will be possible to keep MTBF (Mean Time Between Failures) and MTTR (Mean Time To Recovery) low, by sufficiently investing in harness engineering and best practices around it. But we'd better be very sure about that, before we try to go down this route for production systems.

### Contributing more to AI's harms

Unfortunately this is always a tough argument to make within any company, versus cold, hard financial drivers. But the more we rely on AI and bake it into all our processes, the more we will be contributing to its [environmental and ethical harms](https://peteroshaughnessy.com/posts/responsible-ai-the-only-way-is-ethics/).

### Contributing to poor mental health for developers

While some developers are happy to hand over the reins to AI, others are likely to struggle with this, if they're not already.

As Baldur Bjarnason has shared, [software developers are not doing great right now](https://www.baldurbjarnason.com/2026/05-software-developers-are-not-okay/). Disconnecting ourselves from the code powering our applications could feel disempowering and demotivating.

> "I feel like I am just a second hand meat-proxy"
>
> \- A friend of mine

This leads me onto another risk of the shift to AI code production - and not allowing sufficient time for human review: burnout...

## Burnout

This one is personal for me, because I've seen friends struggling with burnout recently. From social media and blog posts too, I'm hearing of loads of developers struggling with what people are calling ["AI fatigue"](https://siddhantkhare.com/writing/ai-fatigue-is-real) or ["AI brain fry"](https://edition.cnn.com/2026/03/13/business/ai-brain-fry-nightcap): the exhaustion from trying to stay on top of AI-produced output.

> "Trying to maintain any kind of quality control... is exhausting and overwhelming."
>
> \- A friend of mine

With the speed of coding increasing so much with AI, we need to be really careful of the scale of code changes, and the sense of increasing time pressure for reviews.

We should ensure we retain sufficient time to understand the code changes. And if companies call for their developers to speed up software production with AI, they should be really clear on what that means for code reviews, understanding and quality.

## In defense of the human code review

I'm conscious that this post doesn't offer a good solution to companies wishing to dramatically speed up software delivery. And I'm conscious that the landscape is shifting fast.

My ask is not for everything to remain the same as it is - for that is truly a futile wish - but just that we take real care over how we navigate this AI evolution in software engineering.

Unless - or until - we become certain that it's safe to cede the understanding of our production systems to AI, then we should continue to see human code reviews as a vital step in the process. And we should continue to give software engineers time to undertake them properly, without burning out.

## Post-Script

I since read [a blog post by Alex Grebenyuk called "Bring Receipts"](https://kean.blog/post/pr-reviews-are-for-humans).

Alex flips the idea of AI code reviews on its head:

> "One agent opens a PR, and only then does another one review it. I think it’s backwards... why wait until the PR is open? The review should be part of making the change, along with the proof that it works."

Something I appreciate from Alex's approach is the ethos of _"PR reviews are for humans"_:

> "You’re responsible for what gets merged, and AI can’t be responsible for anything."

> "You still need to understand the codebase."

I'm also intrigued by the idea of getting AI to do the legwork to help us humans keep up. For example, by summarising new patterns and API changes, and sending weekly briefs and video walkthroughs.

Alex's approach certainly feels more workable to me, versus building a house of cards of AI reviewing AI, and imagining humans can become inessential to the process.

--

<p class="caption">Thumbnail image credit: <a href="https://commons.wikimedia.org/wiki/File:Speed_limit_road_signs_EB_I-82,_Apr_17.jpg">"Speed limit road signs"</a> by <a href="https://commons.wikimedia.org/wiki/User:An_Errant_Knight">An Errant Knight</a>, Creative Commons</p>
