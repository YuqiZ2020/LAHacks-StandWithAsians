import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import "./Resources.css"

export default class Resources extends React.Component {
    render() {
        return (
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            COVID INFORMATION
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            SUPPORT
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            SUPPORT
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
               </Accordion>          
        );
      }
}
