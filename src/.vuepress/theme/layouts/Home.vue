<template>
<div class="layout">
    <!-- user links -->
    <template
      v-if="$page.frontmatter"
      v-for="section in $page.frontmatter.sections"
    >
        <Info
            v-if="section.type == 'info'"
            v-bind:info="section"
        />
        <Interstitial
            v-if="section.type == 'interstitial'"
            v-bind:interstitial="section"
        />
    </template>
    <!-- 
    <section class="info" id="mission">
        <header class="info__intro">
            <h2>Mission</h2>
            <h3>Here’s our main objective...</h3>
            <p>To provide unfettered, unbiased consultation to digital teams through the application of deep functional expertise in technical and user-centric solutions. Through an increase in cross-functional understanding and communication, generate demonstrable outcomes for the overall betterment of organization solutions and people.</p>
        </header>
        <div class="info__jump">
            <h3>But what can we do?</h3>
            <p><a href="#" title="Jump to: ...">Services spanning all facets of digital product development.</a></p>
        </div>
        <div class="features">
            <h2 class="features__headline">Meanwhile, we’ll be keeping these things in focus.</h2>
            <ul class="features__list">
                <li>
                    <h3>Voice of the Customer</h3>
                    <p>Ensure complete end-to-end audience experience consideration through every stage of digital product development</p>
                </li>
                <li>
                    <h3>Strategic Reinforcement</h3>
                    <p>Communicate and integrate the product strategy across teams, creating internal alignment and enthusiasm</p>
                </li>
                <li>
                    <h3>Direction Evaluation</h3>
                    <p>Provide valuable, unbiased feedback and challenge the status quo, keeping purpose and audience as a focal point</p>
                </li>
                <li>
                    <h3>Collective Narrative</h3>
                    <p>Act as a cross-functional leader, bringing the teams together under a shared understanding of the respective business and audience goals</p>
                </li>
                <li>
                    <h3>Execution Facilitation</h3>
                    <p>Collect feedback from stakeholders, peers, and executives through probing questions about solutions and teams, providing ideas for improvements (people, process, technology) to peers and department heads</p>
                </li>
                <li>
                    <h3>Future Thinking</h3>
                    <p>Proactively identify alternative strategies and solutions relevant to individual practice areas, while supporting the development of capabilities required to support uninterrupted delivery</p>
                </li>
            </ul>
        </div>
    </section>

    <section class="info" id="services">
        <header class="info__intro">
            <h2>Services</h2>
            <h3>Here’s what we can do at a high level.</h3>
        </header>
        <div class="info__jump">
            <h3>Have a specific thought?</h3>
            <p><a href="#" title="Jump to: ...">Deep functional expertise capable of planning and execution.</a></p>
        </div>
        <ul class="services">
            <li>
                <span class="service__icon service__icon-consulting"></span>
                <h2>Strategic Consulting</h2>
                <p>When tackling complex digital challenges, it can be difficult to know where to start, where to go, or how to get there. I offer truly cross-functional strategy that bridges the activities between an organization’s teams and – with exceptional communication – brings those teams together under a shared understanding of business and audience goals.</p>
            </li>
            <li>
                <span class="service__icon service__icon-ux"></span>
                <h2>UX Design &amp; Engineering</h2>
                <p>Being a true technologist with a user experience acumen, design thinking process, and keen sense of marketing objectives is my key differentiator. Bringing seasoned experience in myriad middle-market and enterprise business solutions, every project benefits from my real-world applications and deep functional expertise.</p>
            </li>
            <li>
                <span class="service__icon service__icon-communication"></span>
                <h2>Product Development</h2>
                <p>Through the communication and integration of the product strategy across teams, I can ensure internal alignment and enthusiasm. Strategic reinforcement, direction evaluation, and a collective narrative across teams guide a human-centric approach geared toward the success of your stakeholders, talent and audiences alike.</p>
            </li>
            <li>
                <span class="service__icon service__icon-coaching"></span>
                <h2>Coaching &amp; Training</h2>
                <p>Proactively identifying alternative strategies and relevant solutions requires supporting the development of your organization’s internal capabilities. My methodology ultimately assists peers in becoming modern, digitally savvy individuals and identifies gaps in tools and processes that would otherwise hinder performance.</p>
            </li>
        </ul>
        <div class="features">
            <h2 class="features__headline">What could that look like?</h2>
            <ul class="features__list">
                <li>
                    <h3>Core Principles</h3>
                    <p>Let's get started by establishing universally applied guidelines for action, stemming from research-driven insights and your organization's mission.</p>
                </li>
                <li>
                    <h3>Design Systems</h3>
                    <p>Your internal clients demand efficiency and efficacy. Let's deliver a shared visual language that fosters discussion, collaboration, and garners both.</p>
                </li>
                <li>
                    <h3>Data Modeling</h3>
                    <p>In order to validate our efforts, we establish purpose-driven measurement conventions that hold up across your various platforms.</p>
                </li>
                <li>
                    <h3>Personalization</h3>
                    <p>Your audience expects an enriched experience without the creep-factor, which we can accomplish through ethical data collection and complementary tactics.</p>
                </li>
                <li>
                    <h3>Cloud Solutions</h3>
                    <p>Infrastructure does not have to be complicated. We can responsibly modernize your technology stack with platforms that drive understanding and growth.</p>
                </li>
                <li>
                    <h3>Inclusive Guidelines</h3>
                    <p>We will create accessible experiences that meet the needs of a larger audience without special adaptation through inclusive methods and workshops.</p>
                </li>
            </ul>
        </div>
    </section>

    <section class="interstitial">
        <h2>Not sure where to start on your next digital project?</h2>
        <p class="cta"><a href="#">Let’s figure it out together.</a></p>
    </section>

    <section class="info" id="expertise">
        <header class="info__intro">
            <h2>Expertise</h2>
            <h3>And if you really like minutia...</h3>
        </header>
        <div class="info__jump">
            <h3>Ready to chat?</h3>
            <p><a href="#" title="Jump to: ...">Check availability and get a meet-up on the books.</a></p>
        </div>
        <div class="features">
            <h2 class="features__headline">A wealth of experience in digital product and marketing tactics.</h2>
            <ul class="features__list features__list-alt">
                <li>
                    <h3>Engineering</h3>
                    <ul>
                        <li>Content Management Systems (Open Source and Enterprise)</li>
                        <li>User Interface Development (C#, Node.js, HTML5, CSS3)</li>
                        <li>Mobile and Desktop Web Applications</li>
                        <li>Cloud Data and Hosting Environments</li>
                        <li>Micro-Campaigns and Lead Optimization</li>
                        <li>Third-Party Data Integrations</li>
                    </ul>
                    <h3>Solutions Consulting</h3>
                    <ul>
                        <li>Complex Systems Design and Documentation</li>
                        <li>Content Creation and Workflows</li>
                        <li>Third-Party Bridging and Negotiation</li>
                        <li>Audience, Technology and Marketing Strategies</li>
                        <li>Video and Media Delivery</li>
                    </ul>
                    <h3>Organization Analytics and Targeting</h3>
                    <ul>
                        <li>Cross-channel Universal Analytics</li>
                        <li>Data Reporting and Analysis</li>
                        <li>Marketing Automation</li>
                        <li>Customer Relationship Management (CRM) Integrations</li>
                    </ul>
                    <h3>User Experience</h3>
                    <ul>
                        <li>Mobile-First Engineering</li>
                        <li>Journey Storyboarding and Wireframing</li>
                        <li>Customer-Focused Usability and Personalization</li>
                        <li>User and Stakeholder Interviews and Analysis</li>
                        <li>Rapid Iteration and Change Response</li>
                    </ul>
                    <h3>Information Architecture</h3>
                    <ul>
                        <li>Content Storage and Migration</li>
                        <li>Intuitive Navigation and Wayfinding</li>
                        <li>Organization and Marketing Data Discovery</li>
                    </ul>
                    <h3>Message Development and Delivery</h3>
                    <ul>
                        <li>A/B and Multivariate Content Testing</li>
                        <li>Multi-million Audience Segmentation</li>
                        <li>Targeted Communications and Drip Campaigns</li>
                        <li>Campaign Deployment and Tracking</li>
                    </ul>
                    <h3>Search Engine Marketing</h3>
                    <ul>
                        <li>Keyword Analysis and Content Optimization</li>
                        <li>Local Search Placement</li>
                        <li>Enhanced Content and Code Structures</li>
                        <li>Rank and Site Health Monitoring</li>
                    </ul>
                </li>
            </ul>
        </div>
    </section>

    <section class="interstitial">
        <h2>Feeling inspired to strike up a conversation?</h2>
        <p class="cta"><a href="#">Get something on the books.</a></p>
    </section>
    -->
</div>
</template>

<script>
import Info from '../components/Info.vue'
import Interstitial from '../components/Interstitial.vue'

export default {
  components: { Info, Interstitial }
}
</script>