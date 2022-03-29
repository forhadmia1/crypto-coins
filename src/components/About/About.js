import React from 'react';

const About = () => {
    return (
        <div className='grid grid-cols-2 gap-16 mx-16 mt-20 mb-10'>
            <div >
                <h1 className='text-4xl'>Basic Questions</h1>
                <h2 className='text-xl font-bold mt-10'>What is accessibility?</h2>

                <p className='mt-6'>This article starts off the module with a good look at what accessibility is — this includes what groups of people we need to consider and why, what tools different people use to interact with the web, and how we can make accessibility part of our web development workflow.</p>

                <h2 className='mt-6 text-xl font-bold'>HTML: A good basis for accessibility?</h2>

                <p className='mt-6'>A great deal of web content can be made accessible just by making sure the correct HTML elements are always used for the correct purpose.</p>

                <h2 className='mt-6 text-xl font-bold'>CSS and JavaScript accessibility best practices?</h2>

                <p className='mt-6'>CSS and JavaScript, when used properly, also have the potential to allow for accessible web experiences, but if misused they can significantly harm accessibility. This article outlines some CSS and JavaScript best practices that should be considered to ensure that even complex content is as accessible as possible.</p>
            </div>
            <div>
                <h1 className='text-4xl'>Advanced Questions
                </h1>
                <h2 className='text-xl font-bold mt-10'>WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics?</h2>

                <p className='mt-6'>Following on from the previous article, sometimes making complex UI controls that involve unsemantic HTML and dynamic JavaScript-updated content can be difficult. WAI-ARIA is a technology that can help with such problems by adding in further semantics that browsers and assistive technologies can recognize and use to let users know what is going on. Here we'll show how to use it at a basic level to improve accessibility.</p>

                <h2 className='mt-6 text-xl font-bold'>Accessible multimedia?</h2>

                <p className='mt-6'>Another category of content that can create accessibility problems is multimedia — video, audio, and image content need to be given proper textual alternatives, so they can be understood by assistive technologies and their users. This article shows how.</p>

                <h2 className='mt-6 text-xl font-bold'>Mobile accessibility?</h2>

                <p className='mt-6'>With web access on mobile devices being so popular, and popular platforms such as iOS and Android.</p>
            </div>
        </div>
    );
};

export default About;