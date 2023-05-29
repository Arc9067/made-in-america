import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { BiPlus } from "react-icons/bi";

const Faq = () => {
  return (
    <section className="py-[50px] w-full text-white">
      <div className="container">
        <h1 className="capitalize text-4xl">how to buy</h1>
        <Accordion className="flex flex-col gap-5 mt-14">
          <AccordionItem className=" bg-primary rounded-md ring ring-primary py-6 px-4">
            <AccordionItemHeading>
              <AccordionItemButton className="flex justify-between items-center">
                <h2 className="text-3xl capitalize font-Karasu">
                  Access Uniswap
                </h2>
                <BiPlus className="text-4xl" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="mt-8">
              <p>
                Visit app.uniswap.org, the Uniswap decentralized exchange
                website.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className=" bg-primary rounded-md ring ring-primary py-6 px-4">
            <AccordionItemHeading>
              <AccordionItemButton className="flex justify-between items-center">
                <h2 className="text-3xl capitalize font-Karasu">
                  Connect and search
                </h2>
                <BiPlus className="text-4xl" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="mt-8">
              <p>
                Connect your wallet on Uniswap, then search for the MIJ token
                using the contract address or symbol.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className=" bg-primary rounded-md ring ring-primary py-6 px-4">
            <AccordionItemHeading>
              <AccordionItemButton className="flex justify-between items-center">
                <h2 className="text-3xl capitalize font-Karasu">
                  Select and adjust
                </h2>
                <BiPlus className="text-4xl" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="mt-8">
              <p>
                Choose the MIJ-ETH trading pair. Set the desired amount of ETH
                or MIJ tokens and adjust transaction settings.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className=" bg-primary rounded-md ring ring-primary py-6 px-4">
            <AccordionItemHeading>
              <AccordionItemButton className="flex justify-between items-center">
                <h2 className="text-3xl capitalize font-Karasu">
                  Confirm and wait
                </h2>
                <BiPlus className="text-4xl" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="mt-8">
              <p>
                Review the transaction details and confirm the purchase. Wait
                for confirmation on the Ethereum network.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className=" bg-primary rounded-md ring ring-primary py-6 px-4">
            <AccordionItemHeading>
              <AccordionItemButton className="flex justify-between items-center">
                <h2 className="text-3xl capitalize font-Karasu">
                  Check your balance
                </h2>
                <BiPlus className="text-4xl" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="mt-8">
              <p>
                Once the transaction is confirmed, your MIJ tokens will appear
                in your wallet. You can now hold, trade, or engage with the Made
                in Japan project.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
