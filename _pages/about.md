---
permalink: /
layout: academic-home
seo_title: "Valerie Baldinger — Finance PhD Student, NYU Stern"
excerpt: "Valerie Baldinger is a Finance PhD student at NYU Stern. Explore her research on generative AI and retail investment, teaching, and CV."
last_modified_at: 2026-09-13
robots: "index, follow, max-image-preview:large"
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

<section class="hero shell" id="home" aria-labelledby="profile-name">
  <figure class="portrait">
    {% include responsive-headshot.html sizes="(max-width: 680px) 200px, (max-width: 900px) 240px, 280px" %}
  </figure>
  <div class="introduction">
    <h1 id="profile-name">Valerie Baldinger</h1>
    <p>Welcome to my website! I am a PhD student in Finance at NYU Stern School of Business.</p>
    <p>Before starting my PhD, I was a Senior Research Analyst at the Federal Reserve Bank of New York and a Junior Research Scientist at NYU Stern. I received an MSc in Economics from the London School of Economics.</p>
    <div class="contact-links" aria-label="Contact and curriculum vitae">
      <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>
      <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}">LinkedIn</a>
      <a href="{{ '/files/CV_Valerie_Baldinger.pdf' | relative_url }}">CV</a>
    </div>
  </div>
</section>

<section class="research-section" id="research" aria-labelledby="research-title">
  <div class="shell">
    <h2 class="section-title" id="research-title">Research</h2>
    <h3 class="research-label">Working Papers</h3>
    <article class="paper" aria-labelledby="prompt-to-portfolio">
      <h4 class="paper-title" id="prompt-to-portfolio">From Prompt to Portfolio: <span>Generative AI and Retail Investment</span></h4>
      <details open>
        <summary>Abstract</summary>
        <p class="abstract">Generative AI has become one of the most rapidly adopted technologies, and this adoption extends to financial advice. I study the staggered adoption of generative AI for financial advice by retail investors and its effects on their investment decisions and portfolio allocations. Using linked records of investors' prompts, AI answers, transactions, and portfolio holdings, I find high rates of advice implementation. This implementation shifts new investment toward low-cost, well-diversified equity funds, with corresponding changes in portfolio holdings.</p>
      </details>
    </article>
    <div class="wip" aria-labelledby="wip-title">
      <h3 id="wip-title">Work in Progress</h3>
      <article class="wip-item">
        <h4>LLM Agents as Traders in Experimental Asset Markets</h4>
      </article>
      <article class="wip-item">
        <h4>Lowering the Cost of Entry: Evidence from AI Adoption by Construction Firms</h4>
        <p class="coauthors">with Dean Parker</p>
      </article>
    </div>
  </div>
</section>

<section class="teaching-section shell" id="teaching" aria-labelledby="teaching-title">
  <h2 class="section-title" id="teaching-title">Teaching</h2>
  <div class="teaching-group">
    <h3>Instructor</h3>
    <article class="course">
      <div>
        <h4>Foundations of Finance</h4>
        <p>Undergraduate &middot; NYU Stern</p>
        <a class="rating" href="{{ '/files/teaching_eval_summer2025.pdf' | relative_url }}">Average instructor rating: 5.00</a>
      </div>
      <p class="course-date">Summer 2025</p>
    </article>
  </div>
  <div class="teaching-group">
    <h3>Teaching Assistant</h3>
    <article class="course">
      <div><h4>Foundations of Finance</h4><p>Undergraduate &middot; Prof. Toomas Laarits</p></div>
      <p class="course-date">Spring 2025, Fall 2025</p>
    </article>
    <article class="course">
      <div><h4>Finance Concepts and Math</h4><p>Graduate &middot; Prof. Alexi Savov</p></div>
      <p class="course-date">Summer 2025</p>
    </article>
    <article class="course">
      <div><h4>Foundations of Finance</h4><p>Graduate &middot; Prof. Alexi Savov</p></div>
      <p class="course-date">Summer 2025</p>
    </article>
  </div>
</section>

<section class="education-section shell" id="education" aria-labelledby="education-title">
  <h2 class="section-title" id="education-title">Education</h2>
  <ul class="education-list">
    <li><div><p class="degree">PhD in Finance</p><p class="school">NYU Stern</p></div><span class="years">2022&ndash;Present</span></li>
    <li><div><p class="degree">MSc in Economics</p><p class="school">London School of Economics</p></div><span class="years">2018&ndash;2020</span></li>
    <li><div><p class="degree">BA in Economics, Philosophy &amp; Political Science</p><p class="school">University of Zurich</p></div><span class="years">2015&ndash;2018</span></li>
  </ul>
</section>
