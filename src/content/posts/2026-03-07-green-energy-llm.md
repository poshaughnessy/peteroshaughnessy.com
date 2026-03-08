---
title: Green Energy Inference and Open Weight LLMs
slug: green-energy-inference-open-weight-llms
excerpt: What happened when I used Regolo.ai and Qwen3-Coder-Next for rewriting my personal website code
thumbnail: /images/posts/2026-03-07-green-energy-llm/thumb.png
date: 2026-03-07
---

I'm someone who recognises the power and potential of AI, but dislikes most of everything else about it - the [unethical training, environmental impact, power imbalance, jobs impact, safety risks, military use etc](https://peteroshaughnessy.com/posts/responsible-ai-the-only-way-is-ethics).

So, to experiment with potentially more ethical alternatives I might be able to recommend to colleagues, I recently signed up for a free trial of [Regolo.ai](https://regolo.ai), an EU-based [100% green energy inference provider, with zero water waste](https://regolo.ai/the-environmental-impact-of-artificial-intelligence-why-building-a-sustainable-ai-matters/).

Of course, this doesn't solve the environmental impact of the models' _training_, but it certainly helps me feel a bit better about the inference. Plus, using open weight models means I'm not funding the AI companies and therefore helping to encourage and fuel their unethical training practices.

So far, I have used this setup for one experiment...

## The Experiment

I used the open weight [Qwen3-Coder-Next](https://huggingface.co/Qwen/Qwen3-Coder-Next) model to attempt to switch the static site generator this website uses, from [Metalsmith](https://metalsmith.io/) to [Eleventy](https://www.11ty.dev/). It's something I've vaguely had in mind for a few years, since Metalsmith has been seeming a bit outdated and I've needed to replace some of the deprecated plugins, whereas Eleventy has had a lot more recent interest and support. I thought I'd give it a try anyway.

I used the LLM via [OpenCode](https://opencode.ai/), the open source AI interface, running inside Visual Studio Code.

I spent a little while feeling confused about the OpenCode extensions in the VS Code marketplace, thinking they were all unofficial. But it seems that the [OpenCode extension from SST](https://marketplace.visualstudio.com/items?itemName=sst-dev.opencode) is the official one. SST is now part of [Anomaly](https://github.com/anomalyco) and [github.com/sst/opencode](https://github.com/sst/opencode) redirects to [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode).

<img src="/images/posts/2026-03-07-green-energy-llm/opencode.jpg" alt="An OpenCode terminal tab inside Visual Studio Code"/>

## The Results

On the one hand, the experiment was a success. Everything was complete within a couple of hours - all my blog posts, templates and redirects ported over to Eleventy. The resulting HTML matched the Metalsmith version 100% (aside from some whitespace).

On the other hand, it was a failure. My curiosity and excitement at the beginning quickly faded as I watched the LLM do it's thing. By the end, I was left feeling a bit icky, empty and sad. My hand-written code had been replaced with machine-written code I don't know or trust. I'd just created a mountain of [comprehension debt](https://codemanship.wordpress.com/2025/09/30/comprehension-debt-the-ticking-time-bomb-of-llm-generated-code/).

I haven't even pushed the feature branch up yet, let alone merged it. I wouldn't want to, without going through it thoroughly to make sure I understand it. In fact, I don't plan to use it directly. Instead, I expect I'll write the code again myself by hand and just use the LLM-generated version as a reference point.

This is my personal website after all. It _means_ something to me, for the code to have be written by me, just the same as the actual blog posts.

It wasn't all for nothing though. I learned some things along the way and I'd like to share them with you...

## Thoughts on OpenCode

Using OpenCode felt quite different to using Copilot, which I have used for work.

I'm used to Copilot prompting me for confirmation each time the model wants to use the command line.

Whereas by default, OpenCode allows the model to proceed without any confirmation prompts, as long as its changes are confined to the working directory.

Some might prefer this and it certainly sped things up, but it felt a lot more _vibe code_-y to me and I felt more out of the loop.

Thankfully, it looks like it's possible to configure the [permissions settings](https://opencode.ai/docs/permissions/), so I'll take a look at tweaking those next time.

The other minor issue I had with OpenCode was that it's not really integrated with VS Code like Copilot is. The model has access to the codebase, but it doesn't have the context of which file you have open or what code you have selected. So you have to remember to provide that context in your prompts instead.

I also thought afterwards that although I've heard a fair amount about OpenCode and I don't know of a reason to distrust it, I should probably still do some more due diligence on its origins and contributions before continuing to use it or promote it.

## Thoughts on Qwen3-Coder-Next

The `Qwen3-Coder-Next` model seemed capable and not especially different from the Claude models I've used at times for work. It presented a plan before it started and sought my input on the options, then proceeded to work out almost everything else independently.

### Pros:

- Open weight, which means I'm not funding AI companies and their unethical practices

- Specialist model for coding - they say it's comparable with models with 10-20x more active parameters, which means a smaller environmental impact

### Cons:

- It's probably undergone less safety checks from external AI safety organisations, compared to frontier models.

- It's from Alibaba and the [AI Safety Index](https://futureoflife.org/ai-safety-index-winter-2025/) (which is probably pro-US biased, given [who funds the Future of Life Institute](https://www.influencewatch.org/non-profit/future-of-life-institute-fli/)) rates Alibaba _worst_ for safety, with a D-minus grade.

- It seems [Alibaba probably won't continue releasing open weight models](https://venturebeat.com/technology/did-alibaba-just-kneecap-its-powerful-qwen-ai-team-key-figures-depart-in).

There's plenty of other open weight models to choose from though, and I'm not too worried about the supply of them running out. New ones keep coming on the scene, e.g. [the Indian company Sarvam just released some big open-weight models](https://www.sarvam.ai/blogs/sarvam-30b-105b) and apparently many a number of other countries have up-and-coming sovereign AI initiatives.

## Thoughts on Regolo.ai

Regolo give a very generous free trial month with unlimited tokens. You don't even have to provide a credit card up front. I actually think this is a worry, given [the risks of "confidential computing" for rogue AI and nefarious use](https://www.youtube.com/watch?v=QoWosvQb9U8&t=1650s).

After the free trial, they provide both Pay As You Go and subscription options.

At the end of my experiment, the OpenCode interface showed I had used 168,733 tokens.

The Regolo usage dashboard shows that if I was outside of the free trial and on Pay As You Go, it would have cost me 29 euros.

<img src="/images/posts/2026-03-07-green-energy-llm/usage.jpg" alt="Screenshot of the Usage page of the Regolo.ai dashboard, showing €28.99 usage yesterday (€29.19 total). The Top Models chart shows a single model: qwen3-coder-next."/>

There are other major benefits to Regolo too. They are EU-based, which compared to US-based is preferable to me for digital sovereignty reasons and network efficiency (I'm based in the UK). And they are GDPR compliant, with a [zero retention data policy](https://regolo.ai/european-inference/), meaning that the data is "permanently discarded" once the response is generated.

## Final thoughts

So far, I'm happy with my experience of open-weight models in terms of their capability. My problems are more around trust, safety and comprehension debt. Next time I'd rather use the LLM for something less _vibe code_-y. More likely to help to guide me through something new, or help me find and fix bugs, not have it write the code itself. The experiment was good for learning though.

I'm keen on the idea of green energy inference and Regolo seem to have a great offering. Beyond the free trial, the Pay As You Go option seems nice for personal use as you can avoid more expensive subscriptions if you just want to experiment a bit.

I will recommend open weight models and green energy inference to my colleagues as an alternative to the big tech options, but warn them that we would need to be very careful about safety, and we should be conscious of how we use it too.
