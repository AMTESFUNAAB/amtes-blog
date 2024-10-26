---
showDate: false
showReadingTime: false
showWordCount: false
type: custom
layout: centered
---

<div class="container">
    <h1>Welcome to</h1>
    <h2>the AMTES Blog</h2>
</div>

Explore the latest updates, research, and projects from the Mechatronics Engineering Department at FUNAAB. Stay informed and engaged with our community.

{{< button href="about" target="_self" >}}
About Us
{{< /button >}}

---

<div class="pro-section">
    <div class="pro-title">
        <h1>Check Out<br>Our Projects</h1>
    </div>
    <div class="pro-desc">
        <p>
            Explore cutting-edge innovations like robotic arms, drones, and more. Discover the latest advancements and get inspired by the projects that are shaping the future.
        </p>
        <a class="!rounded-md bg-primary-600 px-4 py-2 !text-neutral !no-underline hover:!bg-primary-500 dark:bg-primary-800 dark:hover:!bg-primary-700" href='{{< ref "projects" >}}'>See More →</a>
    </div>  
</div>

---

<div id="apply" class="container">
    <h2>Become a Student Blogger</h2>
</div>

Do you have a flair for writing? Want to share your eye-catching ideas with the world? We’ve got you covered!

Join our dynamic student blogging team and let your voice be heard!

<a href="#tally-open=wb4kqE&tally-overlay=1&tally-emoji-text=👋 Hi&tally-emoji-animation=wave&tally-auto-close=0" class="!rounded-md bg-primary-600 px-4 py-2 !text-neutral !no-underline hover:!bg-primary-500 dark:bg-primary-800 dark:hover:!bg-primary-700">Apply Now!</a>

---
<div id="apply" class="container">
    <h2>Join Our Embedded Systems Course 🤖</h2>
</div>

Okay, maybe writing isn't your thing, and that's totally okay! If you've ever dreamed of building your own tech like Tony Stark, well you're in luck! AMTES is thrilled to announce our **session-long embedded systems course**, designed just for you!

Don't miss out on this opportunity to dive into the world of embedded systems and unleash your inner inventor 🛠️.

{{< button href="techtronics" target="_self" >}}
Count me in!
{{< /button >}}

---

<div class="container">
    <h2>FAQ</h2>
</div>

**Q: How can I contribute to the blog?**

A: You can apply to become a student blogger by clicking the "[Apply Now!](#apply)" button above.

**Q: What topics can I write about?**

A: We welcome a wide range of topics related to Mechatronics, engineering, and pretty much anything.

**Q: How can I bring that flair to my writing?**

A: No worries! Check out our comprehensive [writing guide]({{< ref "how-to-write" >}}) for tips and inspiration to elevate your content.

**Q: JARVIS are you there?**

{{< typeit >}}A: At your service sir.{{< /typeit >}}

<style>
    .pro-section {
        display: flex;
        justify-content: space-between;
        align-items: flex-start; /* Aligns items at the start */
        flex-wrap: wrap; /* Allows items to wrap on smaller screens */
    }

    .pro-title {
        flex: 1;
        min-width: 100px; /* Ensures a minimum width for the title */
    }

    .pro-title > h1 {
        font-size: 4rem;
        text-align: left;
        font-weight: bold;
        margin-right: 30px;
        transform: rotate(-5deg);
    }

    .pro-title > h2 {
        font-size: 3rem;
        text-align: left;
        font-weight: bold;
        margin: 0;
        transform: translateY(-30px) rotate(-10deg); /* Slight upward shift for effect */
    }

    .pro-desc {
        flex: 1; /* Allows the description to take more space */
        margin-right: 20px; /* Adjust for desired whitespace */
    }

    /* Media Queries for Responsiveness */
    @media (max-width: 768px) {
        .pro-section {
            flex-direction: column; /* Stack items vertically */
            align-items: center; /* Center items */
            text-align: center; /* Center text */
        }

        .pro-title > h1 {
            font-size: 2.5rem; /* Smaller font size for mobile */
            margin-right: 0; /* Remove margin */
        }

        .pro-title > h2 {
            font-size: 2rem; /* Smaller font size for mobile */
        }

        .pro-desc {
            margin-right: 0; /* Remove margin */
            margin-top: 20px; /* Add space above description */
        }
    }

    @media (max-width: 480px) {
        .pro-title > h1 {
            font-size: 2rem; /* Further reduce font size for very small screens */
        }

        .pro-title > h2 {
            font-size: 1.5rem; /* Further reduce font size for very small screens */
        }
    }
</style>
