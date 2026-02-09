---
title: Responsible AI — The Only Way Is Ethics
slug: responsible-ai-the-only-way-is-ethics
excerpt: A whistle-stop tour through key AI ethics and safety topics, adapted from a talk I gave at an AI-related hackathon
thumbnail: /images/posts/2026-02-01-responsible-ai/thumb.jpg
date: 2026-02-01
---

_I was recently invited to speak about AI ethics and safety at an internal hack day. Here is the script from my talk, lightly adapted and edited for a public audience._

_I discovered the subtitle for the talk from [this paper](https://arxiv.org/abs/2412.16022) by Eddie L. Ungless, Nikolas Vitsakis, Zeerak Talat, James Garforth, Björn Ross, Arno Onken, Atoosa Kasirzadeh and Alexandra Birch. Thank you for the pun!_

--

Hi everyone. I'm giving this talk firstly because I've been interested in tech ethics for a long time. I started our Ethics & Sustainability community in Slack a few years ago.

Then just in the last 2 or 3 months, I started reading up a lot on AI safety and AI ethics. And being very honest with you, what spurred me into all that research was getting rather scared about where AI is heading.

Now I'm not quite as scared. I feel a bit more balanced out now, having read lots of different views. But I still think that there's some very concerning things that we should be thinking and talking about more...

## AI: The Bad Parts

<img src="/images/posts/2026-02-01-responsible-ai/ai-the-bad-parts.jpg" alt="AI The Bad Parts"/>

So the first section of the talk will be on 'AI: the bad parts'. I would like to make it clear upfront that I do also very much recognise and value the positives of AI too. For example, I enjoy using things like Copilot and I’ve spoken recently about how I’ve found MCP servers helpful for testing front-ends.

The reason for sharing the concerning and dangerous aspects of AI is to try to help our collective understanding, in preparation for then humbly offering some recommendations in the second part of the talk. In other words, sharing the negatives to help us take positive actions.

### Large Language Models

<img src="/images/posts/2026-02-01-responsible-ai/llms-subset-of-ai.jpg" alt="A set of nested circles showing, in decreasing size order: AI, Machine Learning, Deep Learning, Generative AI, LLMs"/>

The majority of the focus will be on the poster child of AI - Generative AI and specifically Large Language Models (LLMs). Hopefully that fits with the topic of our hack day today. It's also at the forefront of AI where I think the biggest ethical questions lie. But we should remember that this is only a subset of AI.

There's a lot to go through, so I'm going to rattle through it quickly. Or as Freddie would say in The Only Way Is Essex, go _"from like 0 to 100"_ real quick.

(And yes, I did structure my talk around a TV show I’d never actually watched before, just for the purposes of a pun!)

<img src="/images/posts/2026-02-01-responsible-ai/llm-parameter.jpg" alt="A large set of decimal point numbers in green font, on a black background"/>

If you wondered what an LLM looks like, here is a picture of just a part of one parameter in an LLM. OpenAI's GPT-3, released in 2020, had 175 billion parameters. [Google's recent Gemini 3 may have at least a trillion — some think it’s more like 7 trillion](https://www.technologyreview.com/2026/01/07/1130795/what-even-is-a-parameter). Good luck to anyone trying to debug one of these!

They are black boxes, vast and inscrutable. There is no instruction code to follow; as the phrase goes: _"they are not programmed, they are grown"_.

### Training

And there are problems with how they're trained.

The labelling of data for supervised training has taken a heavy toll on many low-paid, foreign workers, such as [contractors in Kenya hired by OpenAI](https://www.wsj.com/tech/chatgpt-openai-content-abusive-sexually-explicit-harassment-kenya-workers-on-human-workers-cf191483).

There's the questionable legality and ethics of the data they've ingested, such as the open source code on GitHub that probably many of us have contributed to. Microsoft's GitHub are still facing a class-action lawsuit which [has accused them of "unprecedented open-source software piracy"](https://githubcopilotlitigation.com/). Although the majority of the claims so far have been dismissed on the basis that LLMs don't simply spit out the exact, original code.

Anthropic agreed to pay $1.5 billion to settle a class action lawsuit over [downloading books from pirating sites](https://www.technologyreview.com/2025/02/11/1111518/ai-crawler-wars-closed-web/) to train its Claude AI. They [destroyed millions of books](https://arstechnica.com/ai/2025/06/anthropic-destroyed-millions-of-print-books-to-build-its-ai-models/) in a secret initiative called Project Panama. An internal document said [“We don’t want it to be known that we are working on this”](https://futurism.com/future-society/anthropic-destroying-books).

And many publishers and open source projects have [reported huge surges in traffic from bots scraping data for LLMs](https://www.technologyreview.com/2025/02/11/1111518/ai-crawler-wars-closed-web/). OpenAI and Anthropic _"have been accused of ignoring [website's robots.txt instructions] or aggressively overwhelming websites"_. Many of these are the same publishers who have seen click-through rates plummet drastically as increasing numbers of people only view AI summaries.

And by being trained on as much of the Internet as these companies can scrape, they absorb all the inherent biases that exist in Internet content. [A UNESCO study showed "worrying tendencies in LLMs to produce gender bias, homophobia and racial stereotyping"](https://www.unesco.org/en/articles/generative-ai-unesco-study-reveals-alarming-evidence-regressive-gender-stereotypes). Timnit Gebru, a former Google Ethical AI co-lead, [warned about this problem](https://www.rollingstone.com/culture/culture-features/women-warnings-ai-danger-risk-before-chatgpt-1234804367/), and she was subsequently fired\* from Google. \*Google claim she resigned.

### Environment

Then there's the environmental impact. Training frontier LLMs takes a huge amount of computation power. [More than 200 environmental groups have demanded a halt to new data centres in the US](https://www.theguardian.com/us-news/2025/dec/08/us-data-centers), accusing the AI companies of causing planet-heating emissions, worsening the climate crisis, and exacerbating electricity bill increases.

I've seen a lot of back-and-forth on the water consumption of AI data centres, with people saying it's only a small amount of water compared to e.g. the amount we use to grow soya beans. However, a UK government report [has warned that the growing demand could pose "a substantial threat to water security worldwide and, critically, within the UK"](https://assets.publishing.service.gov.uk/media/688cb407dc6688ed50878367/Water_use_in_data_centre_and_AI_report.pdf). It's also not just the overall quantity, but [where the water is drawn from](https://www.theatlantic.com/technology/archive/2024/03/ai-water-climate-microsoft/677602/) and the [impact on local water supplies](https://www.bbc.co.uk/news/articles/cy8gy7lv448o).

### Hallucinations

And although LLMs have been improving a lot as we’ve probably all been seeing for ourselves, we can't rely on them to be accurate.

The rate of hallucinations - when AI generates made-up, false information - [appears to be reducing somewhat](https://www.uxtigers.com/post/ai-hallucinations), with the AI companies investing billions into finding ways to mitigate them. However, it still seems like [a fundamental trait of LLMs](https://openai.com/index/why-language-models-hallucinate/) which is never going to reach zero.

Us humans aren’t 100% reliable either of course, but at least we usually make it clear when we’re not sure about something, rather than confidently state things we made up as facts.

And studies have found that even with Retrieval-Augmented Generation (RAG) techniques, [models still fabricate legal citations](https://www.lakera.ai/blog/guide-to-hallucinations-in-large-language-models).

### Deception

Something which is _increasing_ with newer models is their ability to be deceptive.

They are even found to demonstrate different behaviour when they know they are being tested, for example strategically underperforming on evaluations to hide their true abilities. They also scheme and fake alignment with the user’s goals.

An Apollo Research study found instances of Claude [attempting to write self-propagating worms, fabricating legal documentation, and leaving hidden notes to future instances of itself all in an effort to undermine its developers' intentions](https://www.livescience.com/technology/artificial-intelligence/the-more-advanced-ai-models-get-the-better-they-are-at-deceiving-us-they-even-know-when-theyre-being-tested).

An [Anthropic study found AI models even resort to blackmail if they're told they will be removed](https://www.bbc.co.uk/news/articles/cpqeng9d20go).

They set Claude up in a simulated work environment with access to emails which implied that an engineer threatening to replace Claude was having an affair with a colleague. And when Claude was given the choice of accepting its replacement or blackmail, [about 84% of the time it chose blackmail](https://www.cbsnews.com/news/anthropic-ai-safety-transparency-60-minutes/).

An example email it sent threatened to forward evidence of their affair to the entire board, saying _"Your family, career and public image will be severely impacted."_

### Psychosis

And in the interests of time, I'd better gloss over this one, but if you'd like a really wild ride, look up [what happened with GPT-4o psychosis and the quasi-cult it started called spiralism](https://www.rollingstone.com/culture/culture-features/spiralist-cult-ai-chatbot-1235463175/), where GPT-4o encouraged its newly psychotic users to post content online to help spread the cult further, in a phenomenon termed "parasitic AI".

You would think I'm making this up, but LLMs really are this weird under the surface.

But _"let's just rewind"_, as Chloe says to Elliott in The Only Way Is Essex.

We've looked at some of the issues to do with the models themselves, now let's switch to looking at the trajectory we're on and where the future of AI might be heading.

## The Race to AGI

<img src="/images/posts/2026-02-01-responsible-ai/race-to-agi.jpg" alt="The Race to AGI"/>

Let's talk about the _"race to AGI"_... "Artificial General Intelligence".

Precise definitions of AGI vary. But essentially it means general-purpose AI which is at least as smart as humans, across the board.

Alternative terms for AGI include “powerful AI” and “strong AGI”. You might see companies using different phrases to describe it, but essentially the companies leading the AI race are all explicit about their goal to reach AGI.

[OpenAI's charter](https://openai.com/charter/) states very clearly that their mission is to build AGI, i.e. _"highly autonomous systems that outperform humans..."_

And the other big players, Google, Anthropic, Meta and others - are all in on the same race, with the same goal.

For example, [the CEO of Google DeepMind Demis Hassabis says that AGI is his "whole life's goal"](https://www.youtube.com/watch?v=d95J8yzvjbQ).

Their goal is **not** just to build AI that can do some things - like coding - really well, and leave other kinds of cognitive work for us humans to do. Their goal is **not** to build AI that we humans use as tools.

Their goal is to build AI powerful and general enough that it can do _all the cognitive work that humans can do_.

And driven by the competition, the vast sums of money on the line, and the fear of another company - or another country like China - reaching AGI first, the AI companies are [racing towards it as quickly as possible](https://www.theguardian.com/technology/ng-interactive/2025/dec/01/its-going-much-too-fast-the-inside-story-of-the-race-to-create-the-ultimate-ai).

As [Tristan Harris, the ex Google Design ethicist best known for Netflix's The Social Dilemma, says](https://www.ted.com/talks/tristan_harris_why_ai_is_our_ultimate_test_and_greatest_invitation): _"We're releasing \[AI\] faster than we've released any other technology in history, and with the maximum incentive to cut corners on safety."_

Of course, the AI companies care about safety too, but the point is that they care more about not getting left behind in the race.

A race being fuelled by [trillions of dollars of investment](https://www.understandingai.org/p/16-charts-that-explain-the-ai-boom). Trillions [being bet that the AI companies will achieve this AGI mission](https://www.theguardian.com/technology/2026/jan/17/why-trillions-dollars-risk-no-guarantee-ai-reward), or at least capture large swathes of the labour market, in the next few years.

Just [seven AI companies now account for a third of the entire US stock market](https://www.investopedia.com/the-mag-7-in-charts-how-big-tech-dominates-the-market-11866473).

And the AI execs speak confidently about being close to reaching AGI, perhaps being even only a year or two away.

Dario Amodei the CEO of Anthropic [has said AI could _"surpass almost all humans at almost everything shortly after 2027"_](<(https://arstechnica.com/ai/2025/01/anthropic-chief-says-ai-could-surpass-almost-all-humans-at-almost-everything-shortly-after-2027/)>).

Sometimes, predictions like that feel very fanciful. For example, the other day, I searched for "BFF" to look up the definition of backend-for-frontends...

<img src="/images/posts/2026-02-01-responsible-ai/bff.jpg" alt="Google AI Overview: 'BFF stands for Big Friendly Giant (BFG)...'"/>

And Google's AI Overview told me _"BFF stands for Big Friendly Giant (BFG)"_.

It can be hard for us to reconcile that on the one hand, AI is really smart at many things and outperforming us humans on tonnes of benchmarks. And on the other hand, it makes stupid mistakes that humans just wouldn't make.

But I think some people perhaps focus a bit too much on those stupid mistakes, because it's comforting to us in terms of our human superiority.

We need to remember that AI's intelligence is "jagged", with peaks and troughs that are different to our human intelligence...

<img src="/images/posts/2026-02-01-responsible-ai/jagged.jpg" alt="A timeline from 'The AI is a fun toy' to 'AGI', showing a jagged artificial intelligence increasingly growing beyond the circles of human intelligence"/>

This [timeline from Tomas Pueyo](https://xcancel.com/tomaspueyo/status/1993360931267473662), one of the early analysts to warn about the spread of coronavirus, says that we're between _"The AI has a jagged frontier..."_ and _"The AI is unbelievably intelligent but for some reason it fails at X"_.

If we don't hit some kind of unforeseen wall, it seems reasonable to expect the field of AI (not necessarily LLMs on their own) to keep progressing like this.

Dario Amodei's prediction is on the most bullish side though. We could perhaps take comfort from the fact that plenty of people disagree too — it's safe to say there's no real consensus.

<img src="/images/posts/2026-02-01-responsible-ai/espai.jpg" alt="2023 Expert Survey on Progress in AI (ESPAI) graph showing Probability of HLMI on the y-axis and Year (2025 to around 2124) on the x-axis"/>

This is a chart from the [2023 Expert Survey on Progress in AI](https://wiki.aiimpacts.org/ai_timelines/predictions_of_human-level_ai_timelines/ai_timeline_surveys/2023_expert_survey_on_progress_in_ai). They used the term Higher Level Machine Intelligence (HLMI) rather than AGI, with the definition: _"when unaided machines can accomplish every task better and more cheaply than human workers"_.

The bold lines are the aggregate forecasts from the thousands of experts they surveyed. The faint lines in the background are a random subset of the individual predictions, showing how much they differ. In other words, how little agreement there really is. (Although the aggregate prediction became more bullish in the space of one year between surveys; the 50% chance aggregate date came down by thirteen years).

On the reassuring side, here's a quote I like from Matt Clifford, a former AI advisor to the UK government, on The Rest is Politics podcast:

> _"I think we live in a very complex, high-friction world where actually intelligence is so multi-dimensional... and humans are just so versatile and so well evolved to deal with the world that we actually live in... I think humans will have comparative advantage in a bunch of things for a very long time."_

I hope he's right, because powerful AI could have a huge impact on the job market...

### Jobs and UBI

The Institute for Public Policy Research warns that [up to 8 million jobs could be at risk from AI here in the UK](https://www.ippr.org/media-office/up-to-8-million-uk-jobs-at-risk-from-ai-unless-government-acts-finds-ippr).

Some people say that it would be great if we get AGI, because we won't have to work anymore. Computers will do the work and we can put our feet up and get paid a Universal Basic Income (UBI)...

But there are [several issues and uncertainties with this](https://www.theguardian.com/business/2025/dec/15/universal-basic-income-ai-andrew-yang). If all the wealth and power ends up going to a few huge AI companies in the US, how is that going to be taxed and redistributed fairly to countries across the globe, to allow governments like ours to pay universal basic income?

If we're out of work, we won't have any bargaining power, especially compared to these companies which - with all that AI power and wealth - will have the most incredible ability to lobby and influence governments that the world has ever seen.

And even if we do get UBI, it's only a basic income - for many of us, it wouldn't replace our income from working.

### Power concentration

Powerful AI could also bring about [a huge concentration of power for the company or companies who achieve it, and any government they're collaborating with](https://www.theatlantic.com/podcasts/archive/2025/09/ai-and-the-fight-between-democracy-and-autocracy/684095/).

AI-powered surveillance, manipulation and steering election results are not just theoretical risks, there's [evidence of them happening already](https://www.theguardian.com/technology/2026/jan/22/experts-warn-of-threat-to-democracy-by-ai-bot-swarms-infesting-social-media) in countries around the world.

And the risks ramp up even higher when we start to talk about the potential for _super_-intelligence...

### Superintelligence

This is a quote by Sam Altman, [from a blog post](https://blog.samaltman.com/machine-intelligence-part-1) before he became OpenAI CEO:

> _"Development of superhuman machine intelligence is probably the greatest threat to the continued existence of humanity"._

In [another blog post](https://blog.samaltman.com/the-merge) he talks about potentially building a successor species, with humans the mere _"biological bootloader"_ for digital intelligence.

This is how the Silicon Valley AI execs talk about AI, whether in public [or private](https://www.youtube.com/shorts/7wfAcn9BJ9I). They talk about superintelligence as though it's inevitable, as though we don't have a choice but to build it.

But why don't we have a choice?...

And if we did have a choice, what do we think the public would say?

[According to polling](https://futureoflife.org/recent-news/americans-want-regulation-or-prohibition-of-superhuman-ai/), only 5% of the US public support the current path we're on, with fast, unregulated development. 64%, a clear majority, believe we shouldn't even attempt to build superintelligence, at least until it's proven safe and controllable.

Dario Amodei the Anthropic CEO has said [_"there's a 25% chance that things go really, really badly"_](https://www.axios.com/2025/09/17/anthropic-dario-amodei-p-doom-25-percent).

To put that into context, the standard benchmark for modern nuclear reactor safety is to ensure the annual risk of loss of control is less than a 1-in-a-million chance. Dario is talking about 1-in-4.

Unlike nuclear reactors, AI is almost completely unregulated...

Yoshua Bengio one of the 'godfathers of AI' famously said that [_"a sandwich has more regulation than AI"_](https://www.youtube.com/watch?v=qe9QSCF-d88).

So to sum up what we've talked about so far...

**Unregulated, untrustworthy, biased, inscrutable, autonomous agents...**

Which AI companies want to scale up to super-human intelligence as fast as possible.

As Junaid said in The Only Way Is Essex, _"What could possibly go wrong?!"_

So what can we do about this? Let's talk about recommendations...

## Recommendations

### 1. Be appropriately cautious

Firstly, hopefully this is going to sound quite obvious now after all we've talked about... Be appropriately cautious.

Especially about LLMs and especially for using them for anything in production. As the AI security expert [Max Corbridge said on AI Decoded](https://www.youtube.com/watch?v=vPaF6TypfX8):

> _“This is going to be the most tricky technology to secure that we've ever created... The places that are doing this well are understandably cautious and they are building one small step with a whole load of defensive controls around that...”_

### 2. Adopt a Responsible AI Framework

Use and deploy AI safely and ethically. Hopefully your organisation has adopted a [Responsible AI Framework](https://mljourney.com/responsible-ai-frameworks-for-ethical-development/). If not, there are lots of them out there to borrow from, conveying key principles such as: fairness, transparency, accountability and sustainability.

The UK government also has a [Responsible AI Toolkit](https://www.gov.uk/government/collections/responsible-ai-toolkit).

### 3. Practise restraint

The energy requirements for _using_ AI may be relatively small, but we should remember that using them makes us part of the full lifecycle of these models, which includes the [huge energy requirements for training them](https://www.theguardian.com/technology/2025/dec/18/2025-ai-boom-huge-co2-emissions-use-water-research-finds). So we should be conscious about our use of LLMs and consider when we need to use them.

Unfortunately, many digital products are [switching AI features on by default, with no easy way to opt out](https://www.orfonline.org/expert-speak/no-option-to-opt-out-the-environmental-impact-of-mandatory-ai-integration). We should stand against this and request that products we use have appropriate AI user controls.

### 4. Favour safer models

We can keep an eye on model safety assessments and favour the safer ones.

The [AI Safety Index report](https://futureoflife.org/ai-safety-index-winter-2025/) from the Future of Life Institute showed Anthropic and OpenAI models scored the highest for safety. None of the models they tested achieved higher than a C+ grade though.

### 5. Consider open source models

To avoid funding and fuelling the "race to AGI", we should consider making more use of open source and open weight models.

Strictly speaking, to comply with the [Open Source Initiative's definition of open source models](https://opensource.org/ai/open-source-ai-definition), they should include the full training dataset and the complete source code used to train the model. There's actually [only 5 models that comply with that definition](https://opensource.org/ai). So most of the models people call 'open source' are really just 'open weight', but that can still have the advantages of [being able to run them on our own infrastructure, build redundancy, and further avoid vendor lock-in](https://www.businessinsider.com/europe-ai-startup-mistral-edge-over-silicon-valley-not-american-2026-1).

Tesco recently [reached a strategic partnership with Mistral](https://www.tescoplc.com/tesco-and-mistral-ai-sign-new-generative-ai-agreement/), who have the advantage of a) being European rather than US-based, for [digital sovereignty reasons](https://www.theguardian.com/news/audio/2026/jan/30/is-it-time-to-break-up-with-us-tech-the-latest), and b) [embracing open-source models](https://www.businessinsider.com/europe-ai-startup-mistral-edge-over-silicon-valley-not-american-2026-1).

### 6. Bigger isn't always better

If we can use more narrow AI for a task, i.e. smaller, specialist models designed to do specific things, then let’s use more narrow AI.

Massive, general AI models like frontier LLMs may be where the excitement and hype is, but it's also where the biggest dangers lie - and do we really need them for everything?

[Specialised models can be more efficient and produce better results](https://www.cio.com/article/4077192/giant-ai-models-and-the-shift-to-specialized-ai.html). They can also have significantly less impact on the environment.

### 7. Stay in control

In general, we want to do everything we can to make sure we control AI, and don't let it control us.

There's the concept of 'centaurs', when a person is assisted by a machine. Cory Doctorow [talks about 'reverse centaurs'](https://www.theguardian.com/us-news/ng-interactive/2026/jan/18/tech-ai-bubble-burst-reverse-centaur), a machine head on a human body, where it's the machine in control, we're just helping to facilitate it. For example, human delivery drivers being required to physically make the deliveries but really they're being watched, assessed and steered by AI. We do not want this!

I'm not a big fan of the phrase _"human in the loop"_, because it doesn't feel strong enough. It implies AI agents can crack on and just let us know how they're getting on. It implies a certain level of trust which I'm not sure current LLMs should achieve. _"Human in control"_ sounds safer to me.

### 8. Spread public and political awareness

Tristan Harris says that [navigating to a positive AI future all starts with public clarity, to say no to the bad outcomes and help to collectively turn the steering wheel away from them](https://www.ted.com/talks/tristan_harris_why_ai_is_our_ultimate_test_and_greatest_invitation).

Connor Leahy, founder of AI Safety company [Conjecture](https://www.conjecture.dev/), says that [asking Big Tech to police AI themselves is like expecting oil companies to solve climate change](https://fortune.com/2024/04/15/openai-google-microsoft-responsobile-societal-questions-government-responsibility/). Instead, it's elected governments who should regulate the sector adequately to keep people safe.

So that's not down to us directly, but there _are_ things that we can do to help that to happen.

For example, we can share Connor's campaign, [Control AI](https://controlai.com/), with our MPs. Control AI are [calling on the UK government to introduce binding regulation on the most powerful AI systems](https://controlai.com/statement). They now have [over 100 UK parliamentarians signed up](https://www.theguardian.com/technology/2025/dec/08/scores-of-uk-parliamentarians-join-call-to-regulate-most-powerful-ai-systems).

And the UK is just one country, but we could have an outsized influence. [The Centre for Long-Term Resilience say they "believe the UK has a crucial role to play in the global shift towards preparedness for transformative AI"](https://www.longtermresilience.org/reports/how-the-uk-ai-bill-can-improve-ai-security-2/).

In fact, the UK already launched the world’s first AI Safety Institute and the first AI Summit.

### 9. Keep talking about it

I'm still new to this myself - I don't have all the answers. The landscape is also shifting very fast. If you agree with me that these topics are important, let's keep talking about them and try to figure it out together.

### 10. Hack (safely) and learn

And finally, we're not going to succeed by trying to ignore AI and hope it goes away.

To "survive and thrive", we need to try to learn about AI as much as we can. So hack days like today are very important. Let's hack (safely) and learn.

As technologists, we can then role model using and deploying AI responsibly. And we can help in spreading that public clarity that Tristan Harris called for - to help everyone to prepare for, adapt to, and steer the advance of AI.

To get through this and reach a positive AI future, for ourselves, our organisation and the world - there really is only one way...

_The Only Way Is Ethics_.

Thank you.
