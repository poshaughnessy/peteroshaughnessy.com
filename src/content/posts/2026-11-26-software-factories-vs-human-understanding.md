---
title: Software factories vs human understanding
slug: software-factories-vs-human-understanding
excerpt: Genies in the software factory and the two paths for the future of software
thumbnail: /images/posts/2026-11-26-software-factories-vs-human-understanding/thumb.jpg
date: 2026-11-26
---

_This blog post should work fine on its own, but it also builds upon ideas from my earlier post [In defense of the human code review](https://peteroshaughnessy.com/posts/in-defense-of-the-human-code-review), in case you might wish to read that one first (or second)._

<hr />

## Two paths for the future of software

The software industry's drive towards AI "software factories" feels clearer to me every day. Many think it's inevitable. AI can create code like magic, surely we shouldn't have to write it by hand or even read it anymore? We can just describe what we want, let agents handle the implementation, and as long as it passes the automated tests and automated reviews, the code itself can stay out of sight for humans.

But we shouldn't simply assume that this is the right path - and it doesn't have to be inevitable. Right now we still have a choice: cede human comprehension or cling to it? Prioritise speed or understanding?

## Why bother understanding the code?

People liken AI-produced code to compilers. We don't worry about understanding how the compiler works, we can trust that it does. Why worry about trying to understand the code, if it's shown to work?

But this seems like a fundamentally flawed comparison to me. For a start, compilers are deterministic; LLMs are not. High-level code is still formal; English is much more ambiguous. And compilers are still understood and looked after by maintainers, whereas if _we_ don't understand our own systems' code, no one will.

## Speed vs Understanding

Why would we want to trade raw speed for understanding? In case the latter helps us to avoid accidents and arrive at our destination in one piece. With greater speed comes [greater instability](https://www.scrum.org/resources/blog/dora-report-2025-summary-state-ai-assisted-software-development) and risk.

My brother Kevin's blog post on [Moonshot Safety](https://medium.com/@ZombieCodeKill/moonshot-safety-c08259e86b2b) describes the race to put a man on the moon. Russia prioritised speed. The US, after an early disaster, prioritised safety and transparency. It was the US who won the race.

Many software companies seem to be racing more like Russia did. As Jimmy Breck-McKye writes in [Software is breaking down at a systemic level](https://www.breck-mckye.com/blog/2026/11/software-is-breaking-down-at-a-systemic-level/), _"software hasn't been working too well lately, has it?"_ Companies have tried to allay fears that AI has been behind recent high profile incidents, but it has certainly been a factor.

As Jon Reed writes in [Everything Is Falling Apart, and AI’s Fingerprints Are Everywhere](https://www.cnet.com/tech/services-and-software/outages-and-cyberattacks-everything-is-breaking-is-it-ai/), AI-discovered vulnerabilities are requiring us to ship more code, faster - and _"the problem isn’t just the vulnerabilities in existing software, but the vulnerabilities being written into new software or patches to existing software by AI"_.

## "We'll just validate the output"

Can we solve the instability through automated checks? Then we wouldn't need to try to keep up our human understanding, because we can feel safe in the knowledge that the tests are all passing.

But as Steven G. Harms describes in [Agentic Software and the Rubik's Cube Solver Fallacy](https://stevengharms.com/posts/2026-11-14-agentic-software-and-the-rubiks-cube-solver-trap/), validated components can still fail in concert. If an opaque, AI-orchestrated system breaks in production, would we trust our ability to diagnose and fix it? Even with AI assistance, let alone if our AI vendor goes down?

How about AI reviews? AI refactoring? In [The Decoherence Trap](https://maevyn.codes/decoherence), Kirsten Maevyn argues that throwing more AI at the problem won't save us from the "decoherence" snowballing:

> “Decoherence grows relative to the rate of change of a system, and it increases faster the more decoherent a system is, resulting in runaway exponential growth..."

> "If we push too long and too far... we may find ourselves in a very uncomfortable position: Locked into a development model that slowly degrades our systems no matter how much effort we put into fixing them."

## "Write better specs"

So is the answer to write better specs? Just improve the prompts and the acceptance criteria? Bruce Schneier explains where this falls down in [AI Doesn't Have to Go Rogue to Break the World](https://www.schneier.com/blog/archives/2026/11/ai-doesnt-have-to-go-rogue-to-break-the-world.html):

> "Any capable AI will find hacks wherever the rules have problems, inconsistencies or loopholes that still produce an acceptable solution. We see a hack because we understand context. The AI doesn’t, at least not in the same way."

> "More generally, think of this as the genie problem. Genies are precise about the wording of wishes and can be maliciously pedantic when granting them... Whatever you wish for, he can grant it in a way you wish he hadn’t. The reason is that in human language and thought, goals are always underspecified. We never include every caveat, exception and proviso, and we never close off every avenue for hacking. Any goal we specify will be incomplete..."

Beware of the genies in the software factory...

## The alternative path

So how about the alternative: clinging to our human understanding, even against the growing tidal wave of complexity? This can have its own problems, such as burnout, as I shared in [In defense of the human code review](https://peteroshaughnessy.com/posts/in-defense-of-the-human-code-review/).

However, retaining human understanding doesn't have to mean avoiding AI. It could mean re-channeling it. Instead of putting all our AI tokens into increasing the velocity of software production, what if we put some of it into helping us humans to keep up? Like Alex Grebenyuk writes in [Bring Receipts](https://kean.blog/post/pr-reviews-are-for-humans):

> "Agents can help here too: have one send you a weekly brief with only the important bits, like a new pattern or an API that changed, plus a video walkthrough of what changed in the app."

Understanding doesn't have to mean reading every diff. Like with everything, there can be a balance. But I would argue that we should still practice reading actual code, if we don't want to deskill ourselves.

In fact, I would argue we should still practice _writing_ code too. Like Christian Ekrem writes: [If you stop writing code, you also get worse at reviewing it](https://cekrem.github.io/posts/if-you-stop-writing-code-you-also-get-worse-at-reviewing-it/).

> "Whether it’s muscle memory, technique, physical fitness or problem solving you need to work on to reach your goals, you need to practice."

And as Sheon Han writes in [Goodbye, World: The End of Programmers](https://www.wired.com/story/goodbye-world-the-end-of-programmers/):

> "I know firsthand what a reliance on AI can do. As I’ve come to rely more on coding tools to hand me solutions, my ability to code has gone through a swift and decisive decline."

Until it's too late, we still have a choice: use AI to automate away more and more of our jobs; diminish more and more of our skills? Or use AI to boost our abilities _and_ our understanding?

The industry at large might be racing towards software factories, but it's still to be determined if they're the best path. It might take months or years for disasters to unfold.

The alternative is to prioritise _careful_ speed, while retaining our understanding. Running alongside the train, not letting the train run away from us.

[Building Pro-Worker Artificial Intelligence](https://www.nber.org/papers/w34854) describes how AI can _"make human skills and expertise more valuable by expanding worker capabilities"_. Applied carefully, using AI can feel like having superpowers. But only if we use it to expand our capabilities rather than replace them.

It might feel slower in the short term. But we might still reach the moon first.

--

<p class="caption">Thumbnail image credit: <a href="https://www.flickr.com/photos/craigcloutier/6312029006">"the garden of forking paths"</a> by <a href="https://www.flickr.com/photos/craigcloutier/">cloudcricket</a>, CC BY-SA 2.0</p>
