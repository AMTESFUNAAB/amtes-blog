---
title: "🔌 [Ep 5] Why Your Microcontroller Got Burnt (Part 2)"
date: 2026-09-04
authors:
  - "dannyuzo"
draft: false
summary: "Exploring common hardware pitfalls that destroy microcontrollers: excessive current draw, overvoltage, ESD, inductive flyback spikes, and reverse polarity."
header: true
enableComments: true
layout: centered
---

To conclude this topic, there are still certain scenarios we need to look into to have a fairly well-rounded knowledge about how microcontrollers get destroyed.

One common problem is laxity in proper engineering. Because of cost, we tend to neglect power management boards, proper circuit diagrams, breadboards, and distribution boards—connecting everything to the Arduino and then to a power bank or PC and wondering why there's a problem. (Em-dashes are human generated please)

Most times, components connected to your Arduino's 5V pin draw more than it can safely supply. Once a single pin is drawing too much current, it damages the microcontroller. The term for this is **Excessive Current Draw**. Unless you're prototyping on a very small scale with low-power sensors, never use the Arduino's 5V pin as a primary power source for mechanical or high-current components, and even when prototyping, **NEVER** connect a motor directly to a microcontroller pin. 



### Overvoltage on Power Pins

How you power your microcontroller matters. Using a "power bank" isn't totally wrong, but it's not standard practice if you want to eventually want to get serious. 

During my 300L second semester, I had a group project for the Sensors and Actuators Course (MTE 302). We made a bottle-cap color sorting system (**Capsort Pro**) with an IoT dashboard and all... it was perfect, till disaster struck. A night before the project defense, the breadboard power supply module which we used to power our ESP32 somehow got damaged and leaked the direct 12V DC from the power adapter straight to the ESP32—it was barbecue in seconds. I only noticed when the two SG90 servos also got burnt and I could smell burnt components. The term for this is **Overvoltage on Power Pins**.

### Electrostatic Discharge (ESD)

Electrostatic Discharge (ESD) happens because human bodies and synthetic materials can carry static electricity, just like we were taught in secondary school physics. Touching the pins of an unprotected microcontroller can send a massive high-voltage static shock through the chip. Even though the energy lasts only a fraction of a second, it is enough to cause significant internal damage.

### High-Voltage Inductive Spikes (Flyback)

You might not have heard this, but High-Voltage Inductive Spikes (Flyback) can cause this too. When you turn off an inductive load such as a solenoid, motor, or relay coil, the magnetic field collapses rapidly and generates a massive negative or positive high-voltage spike. If the microcontroller is connected to this circuit without a protective flyback diode, this voltage spike rushes back into the I/O pin and destroys it.


And lastly, **Short Circuits (Reverse Polarity or Pin Shunts)**. This one is pretty obvious: accidentally swapping Power (VCC) and Ground (GND) wires forces current to flow backward through the microcontroller's internal protection diodes, causing rapid overheating and smoke. 

Similarly, configuring an I/O pin as `OUTPUT HIGH` and accidentally connecting it directly to `GND` creates a direct short circuit that burns out that specific pin instantly.

---

Hopefully, you can pinpoint the cause of your last microcontroller burnout from this blog post and avoid countless more. Power Dynamics in robotics and embedded systems are really important parts of our field, and proper knowledge of it is undeniably sacrosanct.
