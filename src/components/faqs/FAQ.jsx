import React, { Component } from 'react';
import Faq from 'react-faq-component';

const data = {
    title: "FAQ's",
    rows: [
        {
            title: "1. What is a Hackathon?",
            content: "In general a Hackathon is a social coding event that brings together computer programmers like software developers, graphic designers and user interface specialists along with industry process experts and professionals to identify issues and create software solutions within a stipulated time."
        },
        {
            title: "2. Is this an online event?",
            content: "We don't like online hackathons, so this is a complete offline event."
        },
        {
            title: "3. Who can participate?",
            content: "Everybody is welcome. No matter if you are an entrepreneur, a professional or a student. You don't have to be a programmer and you certainly don't need to have a degree in Computer Science! Specifically, we are looking for hackers, coders, makers but also for innovators, Engineers, creative people, designers, data geeks and startups. Because our challenges are not only limited to programming!."
        },
        {
            title: "4. What should be the team size?",
            content: "A team should be between 2-4 people, if you don't have a team yet you can still apply because you will have the chance to join a team onsight."
        },
        {
            title: "5. How are the winners selected?",
            content: "There will be an independent Jury selecting the winners with a rating system: Implementation ability, financial benefits, presentation skills, creativity."
        },
        {
            title: "6. How can I get involved?",
            content: "Go ahead and visit the NMIT Hacks page and book your place. Have another question that didn't get answered here - send us an email on hackathon@nmit.ac.in"
        },
        {
            title: "7. Can I start working on my hack before the event?",
            content: "No. That would amount to cheating and you would be disqualified."
        }]
};

const styles = {
    bgColor:"#101010",
    titleTextColor: "#f84611",
    rowTitleFontWeight:"bold",
    rowTitleColor: "#f84611",
    rowContentColor: 'white',
    arrowColor: "#f84611",
    rowTitleTextSize: "20px",
};

const config = {
    animate: true,
    tabFocus: true,
    openOnload: 0,
    expandIcon: "➕",
    collapseIcon: "➖",
};



function FAQ() {
    return (
        <div className='bg-[#101010]'>
            <div className='w-[80%] mx-auto'>
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                    className='faqClass'
                />
            </div>
        </div>
    )
}

export default FAQ;