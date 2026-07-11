---
title: "🌿 [Ep 2] A Green Diversion"
date: 2026-07-11
authors:
  - "dannyuzo"
draft: false
summary: "When we hear about climate change and CO2 emissions, we picture large factories, cars, ships... but did you know the code you write has a carbon footprint too? This episode is a major eye-opener into Green Computing."
tags: ["green-computing", "sustainability", "mechatronics"]
header: true
enableComments: true
layout: centered
---

{{< katex >}}

When we hear about climate change and CO2 emissions, we picture large factories releasing tons of gases, cars, ships, data centers, and unregulated incineration... but did you know the code you write has a carbon footprint too?

I know how that sounds, but hear me out this episode is a major eye-opener into Green Computing. Last month, I was privileged to attend the Green and Sustainable Software Engineering Summer School at UNILAG. It was a 5-day intensive and a burst of personalities. We had participants from about five universities across Nigeria and facilitators from Europe and Africa comprising professors, PhDs, postgraduate students, and industry experts. At one point, we were the only undergraduates in the room, but it was an incredible experience. I never knew about Green Software or how code could cause the ice caps to melt faster; these people literally study it, research it, and write papers on it.

### 3.7%

Just think of that number. The carbon footprint of the entire global digital ecosystem accounts for about **3.7% of global emissions**. It helps to think of this as the "total footprint of the internet," which includes not just the servers running in data centers, but also the cell networks transferring data and the manufacturing of billions of personal devices like smartphones and laptops. For a bit of context, the entire aviation industry is responsible for about 2% to 2.5% of global emissions.

When we exclude the heavy manufacturing footprint of hardware, the day-to-day operation of the global internet infrastructure accounts for about **1.5% to 1.8% of global emissions**. This represents the pure electricity demand required to power and cool cloud data centers, transmit data across network grids, and keep end-user devices running.

Now, I know you're thinking: *how does my HTML and CSS cause CO2 emissions?* Well, it all comes down to how efficient your code is. For instance, logic written in Go (Golang) is way more efficient than the same logic written in Node.js because of how it compiles and manages memory. I remember opting for Go over Node.js recently for a specific architecture because we needed high-speed execution... but away from that, what do I mean by efficiency?

#### Compute === Carbon

Every line of code you write translates to hardware execution. Hardware requires electricity. Electricity generation emits carbon. Therefore, inefficient code literally burns physical resources. It’s not just about being slow; when your logic uses more compute than it should, it causes servers to use more energy, require more cooling, and it triggers a domino effect resulting in real carbon being emitted. Multiply that across the billions of websites, apps, and pieces of software all around the world, and it’s no longer weightless. It has real-world impact.

This problem can be broken down into various aspects, but I'll just discuss two right now. This might get a bit technical, but y'all are smart :)

1. **Algorithmic Efficiency:** The best way to explain this would be with another term: **"Cyclomatic Complexity"**.
   
   Chill. Cyclomatic Complexity is basically a metric for *“how hard is this code for the CPU to run?”* It is a pure mathematical count of the execution paths through a function. Every time you write an `if`, `else`, `while`, `for`, `case`, or `&&`, the score goes up by 1. When you optimize an algorithm to perform the same task with much less compute, you aren't just making it faster; you are drastically reducing the number of CPU cycles required to complete the task. Remember: **compute = carbon**.

2. **Network and Data Efficiency:** This is the Cost of Transport, because your data doesn't teleport. Moving bytes across the internet requires powering routers, switches, and cell towers. (Hope you know there are literally thousands of kilometers of internet cables on the sea floor connecting continents!) Sending uncompressed data, oversized images, or bloated JSON payloads wastes energy at every node the data passes through. If your software makes identical database queries or API calls repeatedly, you are duplicating work and wasting server energy. This is where caching and other clean code techniques come in very handy.

Someone reading this might be like, *“energy this, energy that, it’s all theoretical.”* So for the nerds in the house, here is a bit of mathematical perspective:

$$
SCI = \frac{(E \times I) + M}{R}
$$

Ahhhhhhhh, finally some maths. This is the **Software Carbon Intensity (SCI)** specification equation, standardized by the Green Software Foundation. Let’s cut the fat and see what these letters actually mean for your codebase:

* **E = Energy Consumed:** The raw electricity your code burns (kWh). Inefficient loops and complicated logic keep the CPU awake, driving this number up.
* **I = Carbon Intensity:** How dirty your local power grid is (gCO2e/kWh). If your servers are running on a grid powered by fossil fuels, your emissions multiply. This depends entirely on what type of energy your grid relies orenewable or fossil fuel.
* **M = Embodied Emissions:** The physical carbon cost of manufacturing the hardware. If your heavy frontend forces users to upgrade their devices, or demands oversized compute nodes (like massive GPUs or huge RAM allocations) instead of lean edge modules, your code is generating physical e-waste.
* **R = Functional Unit:** The denominator (e.g., per 1,000 API requests, or per route mapped). This turns vague sustainability talk into an actual, measurable engineering rate you can optimize.

You can’t just write a fast algorithm (optimizing E), dump it on an oversized server (inflating M), and call it green. You have to engineer the whole system. For more practical insights, you can check out the carbon score of this very blog on websitecarbon.com. It’s sitting comfortably on an 'A' tier, and only 0.07g of CO2 is produced every time someone visits this web page! Feel free to check your favorite sites there too.

#### Now, how does this relate to Mechatronics?

Come to think of it, there are actually more immediate, physical problems caused by inefficient code in our field. Your Arduino, ESP32, or Raspberry Pi does more work and draws more current when your C++ runs unnecessary loops or processes bloated firmware. That has a direct implication on your battery pack. Your power source runs down faster, and if your project is plugged into the grid... well, I believe you get the gist by now.

This power constraint is one of the major things we have to consider when designing IoT or Robotic systems, and I'll be revealing something on it in the next episode.

As I bring this episode to a close, it was truly a lovely week in UNILAG (should I compare the campus to FUNAAB? Let me reserve my comment!), but the lessons learned will fundamentally shape the way we build systems from here on out. Remember, compute = carbon, and your code has real-world consequences.

I've been DannyUzo'39, see you on the next one.
