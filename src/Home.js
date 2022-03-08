import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { 
            id: 0,
            title: 'Why you should try Vue.js ? (as a beginner)',
            image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--W70yEWxc--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f393nqteox1a7xiofjzp.jpg',
            devLink: 'https://dev.to/ayoub3bidi/why-you-should-try-vue-js-as-a-beginner-2868',
            description: "Vue.js is a progressive JavaScript framework used for building user interfaces.It was created by Evan You, and is maintained by him and the rest of the active core team members, so we can say it's entirely created and maintained by the community (and that's really awesome btw). Unlike some other popular frameworks, it’s not backed by any big tech company like React and Facebook or Angular and Google."
        },
        { 
            id: 1,
            title: 'Vite.js or How i became the fastest programmer alive.',
            image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--EiFw0ObP--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cm21q6iefpnmz3railfs.png',
            devLink: 'https://dev.to/ayoub3bidi/vite-js-or-how-i-became-the-fastest-programmer-alive-hi2',
            description: "Created by Evan You (also the creator of Vue.js), Vite is a build tool that significantly improves the front-end development experience. You can use Vite to set up a development environment for frameworks like Vue and React, and even for a vanilla JavaScript app with a dev server and hot reloading in just three commands.FYI: Vite is a french word that means 'fast'."
        },
        { 
            id: 2,
            title: 'Elegant VS Code Extensions',
            image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--DPS03S38--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lwx4phwhcy82m33mbpyo.jpg',
            devLink: 'https://dev.to/ayoub3bidi/elegant-vs-code-extensions-2fo6',
            description: "Unlike some other code editors you’ve probably tried, Vs Code is the best code editor on the market today (or in the whole world).It's designed for a modern tech stack and the most beautiful thing about it is that it’s open-source and has a dedicated community of developers who are constantly working to improve the software."
        },
        { 
            id: 3,
            title: 'GitHub repos for Rock Stars',
            image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--XsSUPurq--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2ubqigqs2n910yhvxbzt.jpg',
            devLink: 'https://dev.to/ayoub3bidi/github-repos-for-rock-stars-4b2a',
            description: "GitHub is the number one platform for sharing all kinds of technologies, frameworks, libraries, and collections of all sorts. But with the sheer mass also comes the problem to find the most useful repositories.Here I have created a list of the most valuable repos, that every developer should study, irrespective of where they are into their career journey."
        },
        { 
            id: 4,
            title: 'Bootstrap: still the best ?',
            image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--pEjNkldT--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5p5hhpifyd33hrsnc93y.png',
            devLink: 'https://dev.to/ayoub3bidi/bootstrap-still-the-best-1f0e',
            description: "Is Bootstrap dead in 2021? It’s a question on many frontend web developers’ minds.And with hot new CSS frameworks popping up on the regular, Bootstrap may seem decreasingly relevant."
        },
        { 
            id: 5,
            title: 'Databases you should know as a developer',
            image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--AbFvMwh---/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/18xbb7vphu2adle1gea4.jpg',
            devLink: 'https://dev.to/ayoub3bidi/databases-you-should-know-as-a-developer-2449',
            description: "Every company needs a database to store and organize data. Data can be very sensitive so we always have to be careful while accessing or manipulating it in the database."
        },
        { 
            id: 6,
            title: 'I tried Nuxt.js and why you should too!',
            image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--CcHPXzFr--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5va82hiucgpi86oabbqt.png',
            devLink: 'https://dev.to/ayoub3bidi/i-tried-nuxt-js-and-why-you-should-too-3pkg',
            description: "If you’re a Vue.js developer, by now you’ve probably heard of Nuxt.js. But you might not know what all the hype is about. You’re probably asking, “Why do I need a framework for a framework?” Vue already makes the development of JavaScript apps easier. What’s the idea behind Nuxt.js?"
        },
        { 
            id: 7,
            title: 'My experience with Flutter (as a beginner)',
            image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--ekKq0ovR--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ytuu4pjmggvptgckqzp6.jpg',
            devLink: 'https://dev.to/ayoub3bidi/my-experience-with-flutter-as-a-beginner-34n',
            description: "Flutter is an open-source SDK for creating high-performance, high-fidelity mobile apps for iOS and Android. The Flutter framework makes it easy for you to build smooth user interfaces in your app."
        },
        { 
            id: 8,
            title: 'Docker in a Nutshell: A Powerful Platform for Containers',
            image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--6UzT7opd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mjn3quiov86597pmfmt9.png',
            devLink: 'https://dev.to/ayoub3bidi/docker-in-a-nutshell-a-powerful-platform-for-containers-5af6',
            description: "Docker has become a standard tool for software developers and system administrators. It’s a neat way to quickly launch applications without impacting the rest of your system. You can spin up a new service with a single docker run command."
        },
    ])
    return ( 
        <div className="home">
            {blogs.reverse().map((blog) => (
                <a href={ blog.devLink }>
                    <div className="single" key={blog.id}>
                        <div className="thumbnail">
                            <img className="cover" src={ blog.image } alt="cover" />    
                        </div>
                        <div className="info">
                            <h2>{ blog.title }</h2>
                            <p>{ blog.description }...</p>  
                        </div>
                    </div>
                </a>
            ))} 
        </div>
    );
}
 
export default Home;