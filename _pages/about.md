---
permalink: /
layout: academic-home
seo_title: "Valerie Baldinger — Finance PhD Student, NYU Stern"
excerpt: "Valerie Baldinger is a Finance PhD student at NYU Stern. Explore her research on generative AI and retail investment, teaching, and CV."
last_modified_at: 2026-11-03
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
    <p>My research interests are in household finance, behavioral finance, and the economics of artificial intelligence. I am broadly interested in how generative AI affects households, firms, and markets. My job market paper studies how generative AI changes individual investors’ portfolios. My other work examines how AI adoption affects competition among firms in government procurement auctions, uses LLM agents in experimental asset markets to study why asset price bubbles form, and uses investors’ conversations with AI as a new source of data to study attention, reasoning, and investment decisions.</p>
    <p><strong>I am on the 2026–2027 job market.</strong></p>
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
      <h4 class="paper-title" id="prompt-to-portfolio"><a href="{{ '/papers/generative-ai-and-retail-investment/' | relative_url }}">Generative AI and Retail Investment</a></h4>
      <p class="paper-notes"><em>Job Market Paper</em></p>
      <details>
        <summary>Abstract</summary>
        <p class="abstract">Generative AI is a general purpose technology with rapidly growing adoption among retail investors. How does the adoption of this technology change household investment decisions? I study the adoption of a generative AI–based conversational assistant by retail investors, using data that link investors’ prompts and AI answers to transaction-level trading records and portfolio holdings. Using a staggered difference-in-differences design, I find that generative AI adoption increases investment in index funds relative to individual stocks by 7.6 percentage points. As a result, AI adoption reduces investors’ return loss, which measures the expected return forgone due to underdiversification at a given level of risk, by 43 basis points on average, with substantial heterogeneity across investors. Less diversified portfolios improve the most, with return loss declining by 101 basis points.</p>
      </details>
    </article>
    <article class="paper" aria-labelledby="llm-agents">
      <h4 class="paper-title" id="llm-agents">LLM Agents as Traders in Experimental Asset Markets</h4>
      <div class="paper-notes">
        <p><em>Martin J. Gruber Best 2nd Year Paper Award, NYU Stern Finance (2024)</em></p>
        <p>Presentations: Johns Hopkins Carey Finance Conference (2025)</p>
      </div>
      <details>
        <summary>Abstract</summary>
        <p class="abstract">A large literature is concerned with understanding why asset price bubbles form. The theoretical literature has proposed multiple mechanisms, including extrapolative beliefs, heterogeneous expectations, and speculation as possible explanations. I develop a methodology using LLM agents as traders in experimental asset markets to study why asset price bubbles form. The methodology exploits unique properties of LLM subjects to disentangle the contribution of mechanisms proposed in the literature: their memories can be selectively edited without awareness, their reasoning can be probed without contaminating subsequent behavior, and market conditions can be varied at scale. I find that LLM traders generate many of the same market phenomena observed with human subjects: price bubbles emerge and crash, experience reduces mispricing, and short selling attenuates overpricing. These results hold across variations in trading mechanisms and participant characteristics. LLM agents exhibit extrapolative beliefs, expecting rising prices to continue rising even above fundamental value. Their reported reasoning places greater weight on past price trends as those trends emerge, before shifting back toward fundamentals as the terminal period approaches. By homogenizing agents’ forecasts while preserving extrapolation, I isolate the contribution of heterogeneous beliefs to bubble formation.</p>
      </details>
    </article>
    <div class="wip" aria-labelledby="wip-title">
      <h3 id="wip-title">Work in Progress</h3>
      <article class="paper" aria-labelledby="procurement-auctions">
        <h4 class="paper-title" id="procurement-auctions">Lowering the Cost of Entry: Evidence from Firm AI Adoption in Procurement Auctions</h4>
        <p class="coauthors">with Dean Parker</p>
        <p class="paper-notes"><em>Pangram Research Grant</em></p>
        <details>
          <summary>Abstract</summary>
          <p class="abstract">Generative AI, as a labor-augmenting technology, has the potential to raise productivity across a broad range of tasks, with implications for small firms' competitiveness. In this paper, we study whether the proliferation of generative AI has changed competition for government contracts. Bidding for these contracts involves labor-intensive document analysis and preparation, tasks for which generative AI is well suited and widely used. We assemble a dataset of state-level procurement contracts, bids, and award outcomes across industries and government departments. We find an upward level shift in bidding participation following the emergence of generative AI, particularly for smaller contracts. This is consistent with AI lowering analysis and bid-preparation costs, thus lowering the barrier to entry into procurement auctions. To examine this mechanism, we exploit cross-state variation in exposure to generative AI stemming from differences in the amount of documentation required to submit a bid. We also provide direct evidence on AI use in procurement auctions by using an AI detection tool on firms' bid documents. We examine which firms adopt AI, how AI use varies across contract types, and how it is associated with the likelihood of winning a contract.</p>
        </details>
      </article>
      <article class="paper" aria-labelledby="attention-reasoning-investment">
        <h4 class="paper-title" id="attention-reasoning-investment">Attention, Reasoning, and Investment Decisions</h4>
        <p class="coauthors">with Martina Cuneo</p>
        <details>
          <summary>Abstract</summary>
          <p class="abstract">Using novel data linking investors’ prompts to an AI assistant with their portfolios, transactions, and returns, we study how investors’ attention and reasoning vary with investment performance. Investors’ responses to gains and losses are central to behavioral theories of financial markets, but the reasoning underlying these responses is not well understood. We find that investors focus more on their existing portfolios after poor returns and seek new investment opportunities after good returns. We extract investors’ reasoning from their prompts and relate it to subsequent portfolio choices. We examine whether changes in investors’ reasoning help explain time variation in risk-taking and demand for risky assets.</p>
        </details>
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
