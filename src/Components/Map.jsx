import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Map = () => {
  return (
    <section className="py-[50px]">
      <div className="container">
        <h1 className="text-5xl text-white text-center font-Asiana capitalize">
          roadmap
        </h1>
        <VerticalTimeline className="mt-10">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Phase 1"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Launch and Token Distribution
            </h3>
            <ul className="flex list-disc flex-col gap-4 list-inside">
              <li>
                {" "}
                Create and deploy the MIA token smart contract on a compatible
                blockchain network.
              </li>
              <li>
                Generate and distribute the initial 1 million MIA tokens to the
                community.
              </li>
              <li>
                Announce the token launch on social media platforms and crypto
                forums.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Phase 2"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Community Building and Awareness
            </h3>
            <ul className="flex list-disc flex-col gap-4 list-inside">
              <li>
                Establish official social media accounts (Twitter, Telegram,
                Discord, etc.) for MIA.
              </li>
              <li>
                Encourage the community to engage in discussions, share memes,
                and spread the word about MIA.
              </li>
              <li>
                Launch a dedicated website providing information about MIA,
                tokenomics, and the team.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Phase 3"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Memetic Marketing Campaign
            </h3>
            <ul className="flex list-disc flex-col gap-4 list-inside">
              <li>
                Launch a series of humorous and relatable memes highlighting the
                advantages of "Made in America" products and the MIA token.
              </li>
              <li>
                ncourage the community to create and share their own MIA memes,
                hosting meme contests with token rewards.
              </li>
              <li>
                Collaborate with popular meme pages and influencers to amplify
                the reach of MIA memes.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Phase 4"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Partnerships and Exchanges
            </h3>
            <ul className="flex list-disc flex-col gap-4 list-inside">
              <li>
                Seek strategic partnerships with American brands, manufacturers,
                and retailers that emphasize quality products and support local
                production.
              </li>
              <li>
                Establish connections with crypto exchanges to list the MIA
                token, making it easily accessible to a wider audience.
              </li>
              <li>
                Facilitate token swaps and liquidity pool integration to ensure
                smooth trading.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Phase 5"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Community Development and Governance
            </h3>
            <ul className="flex list-disc flex-col gap-4 list-inside">
              <li>
                Enable community voting mechanisms to empower token holders to
                propose and vote on important decisions related to the MIA
                token.
              </li>
              <li>
                Establish community initiatives such as token burns, buybacks,
                or charity donations to align with the values of supporting
                local businesses and American-made products.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Phase 6"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Merchandise and NFTs
            </h3>
            <ul className="flex list-disc flex-col gap-4 list-inside">
              <li>
                Introduce limited edition MIA merchandise such as t-shirts,
                hats, and stickers to generate additional brand awareness and
                engagement.
              </li>
              <li>
                Explore the creation of MIA-themed NFTs (Non-Fungible Tokens) in
                collaboration with artists, allowing fans to collect and trade
                unique digital assets.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Phase 7"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Continuous Growth and Expansion
            </h3>
            <ul className="flex list-disc flex-col gap-4 list-inside">
              <li>
                Regularly communicate updates, achievements, and milestones to
                the community through social media channels, newsletters, and
                blog posts.
              </li>
              <li>
                Conduct regular audits of the token contract to ensure security
                and transparency.
              </li>
              <li>
                Seek opportunities for partnerships, collaborations, and
                integrations within the cryptocurrency and American-made product
                ecosystems.
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Map;
