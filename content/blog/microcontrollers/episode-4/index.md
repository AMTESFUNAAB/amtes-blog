---
title: "🔌 [Ep 4] Why Your Microcontroller Got Burnt (Part 1)"
date: 2026-08-28
authors:
  - "dannyuzo"
draft: false
summary: "An introduction to power calculations in embedded systems, component consumption breakdown, battery selection, and power rails for an obstacle-avoiding robot."
header: true
enableComments: true
layout: centered
---

{{< katex >}}

We've all been there. You won't even hear a sound or see smoke, but strangely the Arduino stops working or the ESP stops receiving code. The most painful experience is when a Raspberry Pi gets burnt... a very expensive accident. There are different causes honestly, but it all links to the same thing: **Power Dynamics**. It's fun to connect wires blindly, upload the code, and see your prototype running, but we often neglect the initial power calculations and routing. That tiny neglect comes back to bite in a costly way. 

Yes, there's something called power calculations. You don't just use any battery for your project; you're supposed to calculate the total power your circuit requires and then pick out a suitable battery based on that. This is where electrical circuit theory starts becoming practical. We have to look at the voltage and current requirements of our components, figure out how they interact, and then decide where we need to regulate or step down the voltage.

To make this practical, let's take a simple **obstacle-avoiding robot**.

Our robot will have an **Arduino Uno**, an **L298N motor driver**, two DC motors, an **SG90 servo motor**, and an **HC-SR04 ultrasonic sensor**.

At first glance, it seems pretty straightforward. But now comes the question:

**What battery are we going to use?**

We can't answer that yet. First, we need to know what the robot actually consumes.

### Component Power Consumption

The Arduino Uno operates at 5V and might draw around 50mA during normal operation:

$$P = V \times I$$

$$P = 5\text{V} \times 0.05\text{A} = 0.25\text{W}$$

So the Arduino is using roughly **0.25 watts** in this example.

The ultrasonic sensor is even less demanding. The HC-SR04 operates at 5V and typically draws around 15mA:

$$P = 5\text{V} \times 0.015\text{A} = 0.075\text{W}$$

Only **0.075 watts**.

Now let's get to the interesting part.

The SG90 servo might only consume around 100–250mA during normal movement, but when it is heavily loaded or stalled, its current can rise significantly. If we take 250mA as our working estimate:

$$P = 5\text{V} \times 0.25\text{A} = 1.25\text{W}$$

Already, we're consuming considerably more power than the ultrasonic sensor and arduino combined.

But the real power-hungry components are the two DC motors.

Let's assume each motor normally draws around 500mA at 6V. For one motor:

$$P = 6\text{V} \times 0.5\text{A} = 3\text{W}$$

We have two motors, so:

$$P = 3\text{W} + 3\text{W} = 6\text{W}$$

Now we're at roughly:

$$0.25\text{W} + 0.075\text{W} + 1.25\text{W} + 6\text{W} = 7.575\text{W}$$

And that's before accounting for losses in the motor driver and voltage regulators. So, for a simple estimate, we're looking at roughly **8–10 W during normal operation**.

### The Hidden Danger: Stall Conditions

Here's where things get interesting. Motors don't always consume their normal operating current.

Imagine the robot is sitting still and suddenly you tell both motors to start. Or worse, one of the wheels gets stuck against an obstacle. The motor can enter what's known as a **stall condition**, where its current can become several times higher than its normal operating current.

If each motor can reach around 1.5A during a stall:

$$P = 6\text{V} \times 1.5\text{A} = 9\text{W}$$

That's **9W for one motor**. With two motors:

$$9\text{W} + 9\text{W} = 18\text{W}$$

Suddenly, our little robot that normally needs less than 10W can demand around **20W or more during a peak event**.

And this is exactly why power calculations matter. A battery isn't suitable simply because its voltage looks right or because it has a large capacity printed on it. We need to consider both **energy capacity and current capability**.

### Selecting the Right Battery & Power Rails

For this robot, I'd use a **2S Li-ion battery pack** (where S stands for cells), which gives us a nominal voltage of around 7.4V.

For example, let's say we use a 7.4V, 2200mAh battery. The energy stored in the battery is approximately:

$$E = V \times \text{Ah}$$

$$E = 7.4\text{V} \times 2.2\text{Ah} = 16.28\text{Wh}$$

So our battery contains roughly **16.3 watt-hours of energy**.

But we still can't connect that 7.4V directly to everything. Our motors are designed around 6V, while our Arduino, servo and ultrasonic sensor require 5V.

So instead of trying to make one voltage work for everything, we create separate power rails. The battery supplies the system at 7.4V. From there, a **buck converter** steps the voltage down to 6V for the motors, while another buck converter provides a regulated 5V rail for the Arduino, servo and ultrasonic sensor.

It would look something like this:

```
                 7.4 V BATTERY
                       │
                  MAIN SWITCH
                       │
                     FUSE
                       │
              ┌────────┴────────┐
              │                 │
          6 V BUCK           5 V BUCK
              │                 │
         Motor supply       Electronics
              │                 │
           L298N          ┌─────┼─────┐
           /    \         │     │     │
        Motor  Motor    Uno   Servo  HC-SR04
```

There is one more important detail: **all of the grounds need to be connected together**.

The battery ground, Arduino ground, L298N ground, servo ground and ultrasonic sensor ground should share a common reference. Otherwise, the control signals between the Arduino and the motor driver may not have a reliable voltage reference.

### Battery Runtime Calculations

Now we have something much closer to a properly designed power system. But there's still one more question: **How long will the battery actually last?**

If our robot consumes roughly 9W on average and the battery contains about 16.3Wh:

$$t = \frac{\text{Energy}}{\text{Power}}$$

$$t = \frac{16.28\text{Wh}}{9\text{W}} \approx 1.8\text{ hours}$$

So, theoretically, we could get around 1.8 hours. In reality, it will be lower because our system isn't 100% efficient. The buck converters have losses, the L298N has losses, the motors aren't perfectly efficient, and the robot won't operate at exactly the same power level throughout its entire runtime. The actual runtime could therefore be closer to **1–1.5 hours**, depending on the motors, driving pattern, and battery.

### The Big Takeaway

**Choosing a battery is an engineering problem, not a guessing game.**

You first identify what every component needs. Then you calculate the current and power requirements. From there, you design the appropriate voltage rails, check the peak current requirements, choose a battery with enough energy capacity and sufficient discharge capability, and finally leave yourself some safety margin.

Because a battery with a large **mAh** rating isn't automatically a powerful battery. A battery might have plenty of stored energy but still be incapable of supplying the current your motors demand. That's the difference between simply **connecting components together** and actually **designing a power system**.

So you see, 2 Tiger double-A batteries won't be enough for this project! It seems we need a Part 2 because there are specific hardware conditions that actually cause microcontrollers to burn out.
