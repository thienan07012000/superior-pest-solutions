.section {
    background-color: #ffffff;
    color: #1a1a1a;
    padding: 6rem 2rem 3rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.header {
    text-align: center;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 1rem;
}

.subtitle {
    font-size: 1.125rem;
    color: #666666;
    margin-bottom: 2rem;
}

.ratingBadge {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.score {
    font-size: 2.25rem;
    font-weight: 700;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
}

.stars {
    display: flex;
    gap: 2px;
}

.carouselContainer {
    position: relative;
    width: 100%;
    max-width: 1650px;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.viewport {
    overflow: hidden;
    width: 100%;
    padding-bottom: 1rem;
}

.track {
    display: flex;
    transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1);
    gap: 1.5rem;
}

.card {
    flex: 0 0 calc(20% - 1.2rem);
    background-color: #f8f9fa;
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    text-align: left;
}

.cardHeader {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 0.75rem;
}

.avatarWrapper {
    position: relative;
    flex-shrink: 0;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 1rem;
}

.avatarImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
}

.googleIconMin {
    position: absolute;
    bottom: -4px;
    right: -4px;
    background-color: white;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.userInfo {
    display: flex;
    flex-direction: column;
}

.nameRow {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.name {
    font-size: 0.95rem;
    font-weight: 600;
    line-height: 1.2;
}

.date {
    font-size: 0.8rem;
    color: #888888;
    margin-top: 0.15rem;
}

.cardStars {
    display: flex;
    gap: 1px;
    margin-bottom: 0.75rem;
}

.cardText {
    font-size: 0.95rem;
    line-height: 1.5;
    color: #333333;
}

.clampedText {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.readMoreBtn {
    background: none;
    border: none;
    color: #1b73e8;
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    padding: 0;
    margin-top: 0.5rem;
    display: block;
    text-align: left;
}

.readMoreBtn:hover {
    text-decoration: underline;
}

.navButton {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #555555;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    flex-shrink: 0;
    transition: all 0.2s ease;
    z-index: 2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navButton:hover {
    background-color: #333333;
    transform: scale(1.05);
}

.disabled {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
}

.dotsViewport {
    margin-top: 2rem;
    width: 70px;
    padding: 0 4px;
    overflow: hidden;
    height: 16px;
    display: flex;
    align-items: center;
}

.dotsTrack {
    display: flex;
    gap: 8px;
    transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1);
    align-items: center;
}

.dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #dddddd;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.activeDot {
    background-color: #1a1a1a;
    transform: scale(1.4);
}

.smallerDot {
    transform: scale(0.6);
    opacity: 0.5;
}

/* Modal */
.modalOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    padding: 2.5rem;
    border-radius: 12px;
    width: 90%;
    max-width: 600px;
    z-index: 2001;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.modalText {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #1a1a1a;
    margin-top: 1rem;
}

.closeBtn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: #666666;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease;
}

.closeBtn:hover {
    background-color: #f2f2f2;
    color: #1a1a1a;
}

/* --- Responsive Media Queries --- */

@media (max-width: 1200px) {
    .card {
        flex: 0 0 calc(33.333% - 1rem);
    }
}

@media (max-width: 800px) {
    .card {
        flex: 0 0 calc(50% - 0.75rem);
    }
}

@media (max-width: 500px) {
    .section {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .carouselContainer {
        gap: 0;
        position: relative;
        display: flex;
        align-items: center;
    }

    .viewport {
        padding-bottom: 0 !important;
    }

    .track {
        gap: 0 !important;
    }

    .card {
        flex: 0 0 100%;
        box-shadow: none;
        border: 1px solid #eee;
    }

    .navButton {
        display: flex !important;
        position: absolute;
        top: 50% !important;
        transform: translateY(-50%) !important;
        z-index: 10;
        background-color: #ffffff;
        color: #1a1a1a;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        border: 1px solid #eeeeee;
        width: 40px;
        height: 40px;
    }

    .prevButton {
        left: -1.25rem;
    }

    .nextButton {
        right: -1.25rem;
    }
}

# TSX

'use client';

import React, { useState } from 'react';
import styles from './ReviewCarousel.module.css';

export function getRelativeDate(unixSeconds: number): string {
    const seconds = Math.floor(Date.now() / 1000) - unixSeconds;
    if (seconds < 60) return 'just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    const hours = Math.floor(seconds / 3600);
    if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    const days = Math.floor(seconds / 86400);
    if (days === 1) return '1 day ago';
    if (days < 7) return `${days} days ago`;
    const weeks = Math.floor(days / 7);
    if (weeks === 1) return '1 week ago';
    if (weeks < 5) return `${weeks} weeks ago`;
    const months = Math.floor(days / 30);
    if (months === 1) return '1 month ago';
    if (months < 12) return `${months} months ago`;
    const years = Math.floor(days / 365);
    return `${years} year${years === 1 ? '' : 's'} ago`;
}

export const REVIEWS = [
    {
        id: 1,
        name: "Peter N",
        timestamp: 1773796471,
        initials: "PN",
        initialsBg: "#1565c0",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocIE45uAsoOCnf79RKEiVQq8aIc-T_vW5IvUgfhIOhN5EQIJxA=s128-c0x00000000-cc-rp-mo-ba3",
        rating: 5,
        text: "Mike at Townside Electric is knowledgeable, professional, and takes pride in the work his team delivers. I've come to know Mike through our local business networking community and have been impressed with his responsiveness and commitment to providing reliable electrical services. I would not hesitate to recommend Mike and his team.",
    },
    {
        id: 2,
        name: "Gerald Neufeld",
        timestamp: 1773770322,
        initials: "GN",
        initialsBg: "#2e7d32",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjUEPqC-PB74-WZsnQf--GYAp9dbXxZmWl-hdGlj_iPdes1tyhYF=s128-c0x00000000-cc-rp-mo",
        rating: 5,
        text: "Mike did a fantastic job installing my Tesla charger. He came right on time, had all he needed (I sent him pictures before hand as requested), complete in the time he said, and charged a reasonable amount. I have confidence that everything is setup properly. I highly recommend him. It is important to support local businesses!",
    },
    {
        id: 3,
        name: "Nate Bollman",
        timestamp: 1773624451,
        initials: "NB",
        initialsBg: "#6a1b9a",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocI3t_-kN-PolgfPciXEl7MXAIJvRt4ZDGM88ck1Iuvp582gFA=s128-c0x00000000-cc-rp-mo",
        rating: 5,
        text: "Mike has worked on multiple projects for me and will continue to use his services moving forward. If you're a small time contractor such as myself or a big time contractor, he treats you the same. Honest, hardworking and has integrity. What more could you want.",
    },
    {
        id: 4,
        name: "Elaine Bacinello",
        timestamp: 1773595485,
        initials: "EB",
        initialsBg: "#c62828",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjV1DbAde65NmykZqEy4PgBJP-bho5ZnHJysGJ6WkH8IrCxn1HoV=s128-c0x00000000-cc-rp-mo",
        rating: 5,
        text: "Mike was very professional and knowledgeable in his craft! We really appreciated the work he did in our new place. He took the time to explain different options and helped us in choose the right option. He left our place clean!",
    },
    {
        id: 5,
        name: "John Buntain",
        timestamp: 1773334482,
        initials: "JB",
        initialsBg: "#00695c",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocKzUeWZ66a_S3bKGzDfOl0piKimy4cH6rVSdt__U6-VWHCHVQ=w36-h36-p-rp-mo-br100",
        rating: 5,
        text: "He was here at the time he said he would be. He did an awesome job. I would definitely hire again and highly recommend him.",
    },
    {
        id: 6,
        name: "Keith Threadkell",
        timestamp: 1773331934,
        initials: "KT",
        initialsBg: "#e65100",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjW9F7Ljwhshkl0fJpo7q9zBU7HImjylXciBUQ5b8imWAqIk5tU=w36-h36-p-rp-mo-ba3-br100",
        rating: 5,
        text: "This is an excellent company to work with. Mike did some pot light installation for me and he did a fantastic job. The work was well priced, efficient and professional. Mike is a pleasure to deal with too. I've worked with several of the local companies in South Delta, and my experience with this one has been the best.",
    },
    {
        id: 7,
        name: "Noah",
        timestamp: 1773329848,
        initials: "N",
        initialsBg: "#4527a0",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocKM-SFKgMZUF6H5RWZ7XAPkj_QUNypa1GK6mRzPX0drkHCH=w36-h36-p-rp-mo-ba2-br100",
        rating: 5,
        text: "Mike was great, he installed some mysas and smart dimmers but he went above and beyond. He spoke with a colleague who sells the dimmers as our bulbs were cheap so he had to figure out a different solution. Then in an unrelated event with our complexes power Mike went above and beyond and spoke with the developers electrician to help with the issue. I am hoping our developer hires him as the strata electrician!",
    },
    {
        id: 8,
        name: "JB",
        timestamp: 1773319001,
        initials: "JB",
        initialsBg: "#1b5e20",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocKejZhUZLDOOwhijEMLkLgT8k4A-o7hW4snREJC272TCP4gyQ=w36-h36-p-rp-mo-br100",
        rating: 5,
        text: "I need to give a huge thank you to Mike from Townside Electric. I am so very grateful for Mikes' punctuality, honesty, skill, trustworthiness, professionalism, and on top of that - going the extra mile. These are rare qualities nowadays. Do not hesitate for a moment to request Mike for any electrical job.",
    },
    {
        id: 9,
        name: "Raquel Riback",
        timestamp: 1773288373,
        initials: "RR",
        initialsBg: "#880e4f",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjXPW3nO1VtW9e6wF9je3AprESJ6ReLHBPXKGdlW2byHTXmgcQow=s128-c0x00000000-cc-rp-mo-ba2",
        rating: 5,
        text: "We had a great experience with Mike. He was always super responsive and timely from the moment we first reached out. We were unable to be at the house when he arrived so he was sure to know the plan and got straight to it, reassuring us there wouldn't be any issues. I'm always so grateful for good communication and reliable scheduling, and Mike delivered on both these fronts. In addition to that, he got all the lights up ahead of time and was lovely to chat with. Thank you!! Highly recommend if you're looking for an honest, knowledgeable electrician.",
    },
    {
        id: 10,
        name: "SK",
        timestamp: 1772720682,
        initials: "SK",
        initialsBg: "#0d47a1",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjVQuALbE1BKmNEPVAnkjePMMQIgNnmgjx8CbB7JGQbRzPJAtLw=w36-h36-p-rp-mo-ba3-br100",
        rating: 5,
        text: "Excellent services! The communication and updates on our project was thorough and timely.",
    },
    {
        id: 11,
        name: "Yvette Leonard",
        timestamp: 1772117771,
        initials: "YL",
        initialsBg: "#bf360c",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjWHTU7VnA4CzE5fenriaIw27SmByCOH4rCiFa4TXZmhkvC9v821=w36-h36-p-rp-mo-br100",
        rating: 5,
        text: "What a great company! Mike delivered top shelf service and he is super polite & respectful. Comfortable vibe and thorough service. Also has very good advice on hanging chandeliers too!",
    },
    {
        id: 12,
        name: "k Otts (pottsy)",
        timestamp: 1771474219,
        initials: "KO",
        initialsBg: "#4a148c",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocIUF-Y5hPLHXdGorJnCPJv-TSVH_aIFpPUe5JggkJeqxB9WJw=w36-h36-p-rp-mo-br100",
        rating: 5,
        text: "Mike's professionalism and knowledge was an absolute asset to our ongoing projects, we would And will be using Townside again.",
    },
    {
        id: 13,
        name: "Anthony Sayles",
        timestamp: 1771473077,
        initials: "AS",
        initialsBg: "#006064",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjUV9GPKog-ldWr730PEBzmHV9ej5IG4L75RK9GoP8XXIpJjzpdt=w36-h36-p-rp-mo-ba4-br100",
        rating: 5,
        text: "Ever wonder what it's like to work with an electrical contractor who actually shows up, communicates clearly, and does exactly what they say they're going to do???? This is it… From the first call to the final walkthrough, Townside Electric was professional, responsive, and dialed in… Clean work… Fair pricing… No shortcuts… No surprises… It's rare to find a trade you can confidently recommend without hesitation and this is one of them… If you want it done right the first time, Townside Electric is an easy yes…",
    },
    {
        id: 14,
        name: "Adam Paton",
        timestamp: 1769564468,
        initials: "AP",
        initialsBg: "#1a237e",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjUYPEO5nyVmU7HnulpZpli-eYJ_4kN4fGFU4oNRy7Tc5sho4IbX=w36-h36-p-rp-mo-ba4-br100",
        rating: 5,
        text: "Mike and his team really went the extra mile for me, and made sure the job was done right. Professional, affordable, friendly and knowledgeable. Would recommend to anyone.",
    },
    {
        id: 15,
        name: "Suzanne Cziraki",
        timestamp: 1767021436,
        initials: "SC",
        initialsBg: "#33691e",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocJywYs3DpJHskOonj-53VcmAitmdKiICtJXuIAfsInlYHxNBg=w36-h36-p-rp-mo-br100",
        rating: 5,
        text: "Exceptional service from Townside Electric! I can't say enough about the outstanding help I received from Mike, the Red Seal electrician and owner of Townside Electric in Delta. My home suddenly lost power on a cold Sunday night after the main electrical panel tripped—of course, I wasn't even in town when it happened. Mike came to the rescue right away, went to my home, diagnosed the issue, and restored power so that when I finally returned, the lights were on and the house was warm. His professionalism, responsiveness, and genuine care turned a stressful situation into a huge relief. Highly recommend Townside Electric—Mike is truly a lifesaver!",
    },
    {
        id: 16,
        name: "Maddy Duncan",
        timestamp: 1766275833,
        initials: "MD",
        initialsBg: "#e65100",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocJnBk22Ibqh7B8urd_P7qygsBpW44TwisqfDyP-10VH_79eOg=w36-h36-p-rp-mo-br100",
        rating: 5,
        text: "I was trying to help my mum, while she was busy at work, with a power outage that occurred suddenly in our home. Townside electric was able to come on very short notice and efficiently solved the problem. Highly recommend this company which is owned and operated by Mike.",
    },
    {
        id: 17,
        name: "Robert Gallop",
        timestamp: 1764462957,
        initials: "RG",
        initialsBg: "#4e342e",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjUVMcoEufPTFaFVBz1We-aYjyju_bmTB8wVM1tkzf5I09or6eM=w36-h36-p-rp-mo-ba2-br100",
        rating: 5,
        text: "Had Mike over to fix a bunch of stuff at my home in Tsawwassen. He was available quickly, was very knowledgeable and got everything done that was needed. Fantastic experience all around - give Mike a call if you need a quality sparky in Ladner or Tsawwassen!",
    },
    {
        id: 18,
        name: "Maria McCormack",
        timestamp: 1763672905,
        initials: "MM",
        initialsBg: "#37474f",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocLDNDGpuhajxttBsF73PfV-MDZTEuB8LjZJvEKC1jZxIsQKaw=w36-h36-p-rp-mo-br100",
        rating: 5,
        text: "I couldn't be happier with the work Mike did! He was friendly, easy to talk to and clearly knew what he was doing. Everything was done efficiently and with care no mess no stress just great work. It's such a relief to find someone reliable and trustworthy. I'll definitely call him again for any future electrical work and happily recommend him to friends and family.",
    },
    {
        id: 19,
        name: "Joost van den Brink",
        timestamp: 1761562992,
        initials: "JV",
        initialsBg: "#1565c0",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocLucn7Q6Ci95v0wWJ6hEJVRukAy0FOgpDjnwLHcAWUur3otHQ=w36-h36-p-rp-mo-br100",
        rating: 5,
        text: "Great experience! Mike is very professional, knows his stuff, and is terrific in communication. Did a great job selecting and installing our charger for us and helping with the BC Hydro rebate. Would highly recommend!",
    },
    {
        id: 20,
        name: "maria harris",
        timestamp: 1761269449,
        initials: "MH",
        initialsBg: "#558b2f",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocKOztU-7l1eSU6SkqVJ2WPDjTU-uiWmP1lULD9ZraC3uRYPJA=w36-h36-p-rp-mo-br100",
        rating: 5,
        text: "Mike provided a honest and detailed explanation of the work to be done. Professional service.",
    },
    {
        id: 21,
        name: "Steve Jay",
        timestamp: 1760883051,
        initials: "SJ",
        initialsBg: "#6a1b9a",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjUMwMDxk54TFKUZGJwtOGlC4K8iaUoFv0wc0NQETHv6cwuNfxR4=w36-h36-p-rp-mo-ba3-br100",
        rating: 5,
        text: "We had an urgent electrical issue with a dangerous arc/short in our breaker box, and Mike Smith from Townside Electric came on short notice to help. He arrived right on time, quickly assessed the situation, and explained everything clearly in a way that was easy to understand. Mike gave us balanced, helpful advice and laid out our options without pressure. The work he did was high-quality, safe, and left us feeling confident about the repair. His pricing was competitive, and on top of that, he was great to talk to—I even learned a lot through the process. Highly recommend Mike and Townside Electric for anyone needing trustworthy, skilled electrical work.",
    },
    {
        id: 22,
        name: "Rodrigo Wannam",
        timestamp: 1759089374,
        initials: "RW",
        initialsBg: "#00695c",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocI3zqPRZhZJDJ0c5Sxi0pjrzXWgBp89qqioP7xh9EBpTzfa3HM=w36-h36-p-rp-mo-ba4-br100",
        rating: 5,
        text: "I had an excellent experience with Townside Electric. The team was professional, punctual, and very knowledgeable. They explained everything clearly, worked efficiently, and made sure the job was done safely and to a high standard. I really appreciated their attention to detail and the friendly service. I'd highly recommend them to anyone looking for reliable electrical work.",
    },
    {
        id: 23,
        name: "ELE CTRO",
        timestamp: 1759018674,
        initials: "EC",
        initialsBg: "#c62828",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjUEyFZGVAbjpNiPwR9ajIjp6W-fAGd69_aBbZzw5rW8YETVP_z9=w36-h36-p-rp-mo-ba3-br100",
        rating: 5,
        text: "One of the best contractors I delt with. Came on time every time when promised, reasonable rates, good quality, remember you get what you pay for, this was worth every penny, very recommended. Had to do electrical service upgrade and ev charger. All works good, also fixed few other issues I had.",
    },
    {
        id: 24,
        name: "Brad Bartley",
        timestamp: 1758689335,
        initials: "BB",
        initialsBg: "#0d47a1",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocLH0Wx8GkVmoxa-Zn-9lcm0ECCsyDnqQQiMj-_wLNJYn8qwcQ=w36-h36-p-rp-mo-br100",
        rating: 5,
        text: "Michael came out to our home in Ladner, he showed up right on time, he did an amazing job for a very reasonable price. He was knowledgeable, personable and left everything clean and tidy. I highly recommend Michael with Townside Electrical.",
    },
    {
        id: 25,
        name: "Richard Yu",
        timestamp: 1758177901,
        initials: "RY",
        initialsBg: "#880e4f",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjUhZiP5khx46Ex9WFb-mV3QUUQ0eafgMnuzi3r3hRUvbp4VY9qs=w36-h36-p-rp-mo-ba4-br100",
        rating: 5,
        text: "Michael was super knowledgeable and diligent in helping me install a few electrical components in my home. Very happy with the service!",
    },
    {
        id: 26,
        name: "RenRay31",
        timestamp: 1757594640,
        initials: "RR",
        initialsBg: "#4527a0",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocJqnJT3QFG1dn781S3bBd-O6PSeDsS2KYNMqFvZgpePO3f5bQ=w36-h36-p-rp-mo-ba3-br100",
        rating: 5,
        text: "Michael at Townside Electric provided excellent service at a very great price. He was friendly, knowledgable, and efficient. I would be highly recommend Townside Electric for any work needed in your home or business. Thanks for great experience, Michael!",
    },
    {
        id: 27,
        name: "glenn ganuelas",
        timestamp: 1756752651,
        initials: "GG",
        initialsBg: "#006064",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocJhHsIOWjxc0uVt7LFIwO1eTAPQ6yF2EVrPf1j0OyU21qLkjQ=w36-h36-p-rp-mo-br100",
        rating: 5,
        text: "Great company to hire for all of your electrical needs. Mike is very professional, courteous, and really nice person to work with. His work is top notch and I would recommend him to anyone who needs his services. Thanks Mike for the exceptional work you did on our renovations.",
    },
    {
        id: 28,
        name: "Colleen",
        timestamp: 1756119216,
        initials: "C",
        initialsBg: "#1a237e",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocJ5lIx0J4tCoJXzkgrxZ6u69nWJuQ5e36wLQlDoQyztaok3nA=w36-h36-p-rp-mo-br100",
        rating: 5,
        text: "We are very happy with Mike and his exceptional service. We would not hesitate to call him again if we require any further electrical services.",
    },
    {
        id: 29,
        name: "Joe Roberts",
        timestamp: 1753921962,
        initials: "JR",
        initialsBg: "#33691e",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjUoJ66q2BpKIcq_Cqq_34FpOH1z-kjXBKWBH_N37t5pwRPCQ3i4=w36-h36-p-rp-mo-ba4-br100",
        rating: 5,
        text: "Exceptional electrician - exceeded every expectation! Mike recently completed our kitchen lighting project and I cannot recommend him highly enough. From start to finish, he demonstrated remarkable professionalism and expertise that's rare to find these days. What impressed us most was his incredible efficiency - he completed the work in a timely manner without ever compromising on quality. His attention to detail was meticulous and his conscientiousness throughout the entire process was outstanding. You can tell he genuinely cares about his craft. Mike's technical knowledge and craftsmanship are top-notch. The combination of his technical expertise, reliability, and genuine professionalism has earned our complete confidence. We've already hired him for additional projects and wouldn't hesitate to recommend him to anyone.",
    },
    {
        id: 30,
        name: "Nima Dzadeh",
        timestamp: 1753504915,
        initials: "ND",
        initialsBg: "#4e342e",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocJW8JKgZ-k4mRrwL0p4uYgXbfC42T2uCkVchvQfZrZIrJSY-w=w36-h36-p-rp-mo-br100",
        rating: 5,
        text: "Townside Electric is phenomenal. Mike came out on short notice to provide a quote and followed through with the entire service upgrade exactly as planned. Everything was completed on time and with great attention to detail.",
    },
];

const MAX_PREVIEW_LENGTH = 110;

const StarIcon = ({ size = 18 }: { size?: number }) => (
    <svg viewBox="0 0 14 14" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3796_102578)">
            <path d="M6.82617 11.442L3.54617 13.166C3.46353 13.2093 3.3704 13.2287 3.27732 13.2219C3.18425 13.2151 3.09494 13.1824 3.0195 13.1274C2.94406 13.0725 2.8855 12.9975 2.85045 12.911C2.8154 12.8245 2.80526 12.7299 2.82117 12.638L3.44817 8.98798C3.46192 8.908 3.456 8.82587 3.43091 8.74869C3.40582 8.67151 3.36232 8.6016 3.30417 8.54499L0.650168 5.95899C0.583317 5.89388 0.53602 5.81136 0.51363 5.72076C0.491239 5.63017 0.494647 5.53512 0.52347 5.44637C0.552292 5.35761 0.605378 5.27869 0.676721 5.21854C0.748065 5.15838 0.834818 5.1194 0.927168 5.10599L4.59317 4.57299C4.67344 4.56146 4.7497 4.53059 4.81537 4.48303C4.88105 4.43547 4.93418 4.37265 4.97017 4.29999L6.61017 0.977985C6.65153 0.894518 6.7154 0.824266 6.79455 0.775151C6.87371 0.726037 6.96501 0.700012 7.05817 0.700012C7.15132 0.700012 7.24263 0.726037 7.32178 0.775151C7.40094 0.824266 7.4648 0.894518 7.50617 0.977985L9.14717 4.29899C9.18307 4.37152 9.23604 4.43426 9.30153 4.48182C9.36702 4.52937 9.44308 4.56031 9.52317 4.57199L13.1892 5.10499C13.2815 5.1184 13.3683 5.15738 13.4396 5.21754C13.511 5.27769 13.564 5.35661 13.5929 5.44537C13.6217 5.53412 13.6251 5.62917 13.6027 5.71976C13.5803 5.81036 13.533 5.89288 13.4662 5.95798L10.8132 8.54398C10.7552 8.60049 10.7118 8.67024 10.6867 8.74723C10.6616 8.82422 10.6556 8.90616 10.6692 8.98598L11.2962 12.637C11.3122 12.7291 11.3021 12.8238 11.267 12.9105C11.232 12.9971 11.1733 13.0722 11.0977 13.1272C11.0221 13.1822 10.9326 13.2149 10.8393 13.2215C10.7461 13.2282 10.6528 13.2086 10.5702 13.165L7.29117 11.441C7.21946 11.4033 7.13967 11.3836 7.05867 11.3836C6.97767 11.3836 6.89788 11.4033 6.82617 11.441V11.442Z" fill="#ffc107"></path>
        </g>
        <defs>
            <clipPath id="clip0_3796_102578">
                <rect width="14" height="14" fill="white"></rect>
            </clipPath>
        </defs>
    </svg>
);

const GoogleIcon = ({ size = 24 }: { size?: number }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" aria-hidden="true" width="16" height="16">
        <path fill="#197BFF" d="M6.757.236a.35.35 0 0 1 .486 0l1.106 1.07a.35.35 0 0 0 .329.089l1.493-.375a.35.35 0 0 1 .422.244l.422 1.48a.35.35 0 0 0 .24.24l1.481.423a.35.35 0 0 1 .244.422l-.375 1.493a.35.35 0 0 0 .088.329l1.071 1.106a.35.35 0 0 1 0 .486l-1.07 1.106a.35.35 0 0 0-.089.329l.375 1.493a.35.35 0 0 1-.244.422l-1.48.422a.35.35 0 0 0-.24.24l-.423 1.481a.35.35 0 0 1-.422.244l-1.493-.375a.35.35 0 0 0-.329.088l-1.106 1.071a.35.35 0 0 1-.486 0l-1.106-1.07a.35.35 0 0 0-.329-.089l-1.493.375a.35.35 0 0 1-.422-.244l-.422-1.48a.35.35 0 0 0-.24-.24l-1.481-.423a.35.35 0 0 1-.244-.422l.375-1.493a.35.35 0 0 0-.088-.329L.236 7.243a.35.35 0 0 1 0-.486l1.07-1.106a.35.35 0 0 0 .089-.329L1.02 3.829a.35.35 0 0 1 .244-.422l1.48-.422a.35.35 0 0 0 .24-.24l.423-1.481a.35.35 0 0 1 .422-.244l1.493.375a.35.35 0 0 0 .329-.088L6.757.236Z"></path>
        <path fill="#fff" fillRule="evenodd" d="M9.065 4.85a.644.644 0 0 1 .899 0 .615.615 0 0 1 .053.823l-.053.059L6.48 9.15a.645.645 0 0 1-.84.052l-.06-.052-1.66-1.527a.616.616 0 0 1 0-.882.645.645 0 0 1 .84-.052l.06.052 1.21 1.086 3.034-2.978Z" clipRule="evenodd"></path>
    </svg>
);

const CloseIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const ChevronLeft = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
)

const ChevronRight = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
)

export function ReviewAvatar({ review }: { review: typeof REVIEWS[0] }) {
    const [imgFailed, setImgFailed] = useState(false);
    if (review.photo && !imgFailed) {
        return (
            <img
                src={review.photo}
                alt={review.name}
                className={styles.avatarImg}
                onError={() => setImgFailed(true)}
            />
        );
    }
    return (
        <div className={styles.avatar} style={{ backgroundColor: review.initialsBg }}>
            {review.initials}
        </div>
    );
}

export default function ReviewCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedReview, setSelectedReview] = useState<typeof REVIEWS[0] | null>(null);

    const [cardsToShow, setCardsToShow] = useState(5);

    // Update cardsToShow based on window width
    React.useEffect(() => {
        const updateCardsToShow = () => {
            const width = window.innerWidth;
            if (width < 500) setCardsToShow(1);
            else if (width < 800) setCardsToShow(2);
            else if (width < 1200) setCardsToShow(3);
            else setCardsToShow(5);
        };
        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);

    const maxIndex = Math.max(0, REVIEWS.length - cardsToShow);

    // Reset current index if it exceeds maxIndex after resize
    React.useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [maxIndex, currentIndex]);

    const prevSlide = () => {
        setCurrentIndex(curr => Math.max(0, curr - 1));
    };

    const nextSlide = () => {
        setCurrentIndex(curr => Math.min(maxIndex, curr + 1));
    };

    const openModal = (review: typeof REVIEWS[0], e: React.MouseEvent) => {
        e.preventDefault();
        setSelectedReview(review);
    };

    const closeModal = () => {
        setSelectedReview(null);
    };

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>What Our Clients Say</h2>
                <p className={styles.subtitle}>
                    Rated highly by homeowners and businesses in Delta & White Rock.
                </p>

                <div className={styles.ratingBadge}>
                    <GoogleIcon size={36} />
                    <span className={styles.score}>5.0</span>
                    <div className={styles.stars}>
                        {[...Array(5)].map((_, i) => <StarIcon key={i} size={36} />)}
                    </div>
                </div>
            </div>

            <div className={styles.carouselContainer}>
                <button
                    className={`${styles.navButton} ${styles.prevButton} ${currentIndex === 0 ? styles.disabled : ''}`}
                    onClick={prevSlide}
                    aria-label="Previous reviews"
                >
                    <ChevronLeft />
                </button>

                <div className={styles.viewport}>
                    <div
                        className={styles.track}
                        style={{ transform: `translateX(calc(-${currentIndex * (100 / cardsToShow)}% - ${currentIndex * (cardsToShow === 1 ? 0 : 1.5 / cardsToShow)}rem))` }}
                    >
                        {REVIEWS.map(review => {
                            const needsTruncation = review.text.length > MAX_PREVIEW_LENGTH;
                            const displayText = needsTruncation
                                ? review.text.substring(0, MAX_PREVIEW_LENGTH).trim() + "..."
                                : review.text;

                            return (
                                <div key={review.id} className={styles.card}>
                                    <div className={styles.cardHeader}>
                                        <div className={styles.avatarWrapper}>
                                            <ReviewAvatar review={review} />
                                            <div className={styles.googleIconMin}>
                                                <GoogleIcon size={20} />
                                            </div>
                                        </div>
                                        <div className={styles.userInfo}>
                                            <div className={styles.nameRow}>
                                                <h4 className={styles.name}>{review.name}</h4>
                                                <CheckIcon />
                                            </div>
                                            <span className={styles.date}>{getRelativeDate(review.timestamp)}</span>
                                        </div>
                                    </div>
                                    <div className={styles.cardStars}>
                                        {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                                    </div>
                                    <div className={styles.cardTextWrapper}>
                                        <p className={`${styles.cardText} ${needsTruncation ? styles.clampedText : ''}`}>
                                            {review.text}
                                        </p>
                                        {needsTruncation && (
                                            <button className={styles.readMoreBtn} onClick={(e) => openModal(review, e)}>
                                                Read more
                                            </button>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <button
                    className={`${styles.navButton} ${styles.nextButton} ${currentIndex >= maxIndex ? styles.disabled : ''}`}
                    onClick={nextSlide}
                    aria-label="Next reviews"
                >
                    <ChevronRight />
                </button>
            </div>

            <div className={styles.dotsViewport}>
                <div 
                    className={styles.dotsTrack}
                    style={{ 
                        transform: `translateX(calc(-${Math.max(0, Math.min(currentIndex - 2, maxIndex - 4)) * 14}px))` 
                    }}
                >
                    {[...Array(maxIndex + 1)].map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot} ${currentIndex === i ? styles.activeDot : ''} ${
                                Math.abs(currentIndex - i) > 2 ? styles.smallerDot : ''
                            }`}
                            onClick={() => setCurrentIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

            {selectedReview && (
                <>
                    <div className={styles.modalOverlay} onClick={closeModal}></div>
                    <div className={styles.modal}>
                        <button className={styles.closeBtn} onClick={closeModal} aria-label="Close modal">
                            <CloseIcon />
                        </button>
                        <div className={styles.cardHeader}>
                            <div className={styles.avatarWrapper}>
                                <ReviewAvatar review={selectedReview} />
                                <div className={styles.googleIconMin}>
                                    <GoogleIcon size={18} />
                                </div>
                            </div>
                            <div className={styles.userInfo}>
                                <div className={styles.nameRow}>
                                    <h4 className={styles.name}>{selectedReview.name}</h4>
                                    <CheckIcon />
                                </div>
                                <span className={styles.date}>{getRelativeDate(selectedReview.timestamp)}</span>
                            </div>
                        </div>
                        <div className={styles.cardStars}>
                            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                        </div>
                        <p className={styles.modalText}>
                            {selectedReview.text}
                        </p>
                    </div>
                </>
            )}
        </section>
    );
}
