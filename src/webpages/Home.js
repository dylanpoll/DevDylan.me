import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Indent, SmallText, HeaderText, PageTitleText } from "../components/Layout";

export const Greeting = () => {
    const { isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <PageTitleText>Hello!</PageTitleText>
        )
    )
}
export const NewGreeting = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div>
                <PageTitleText>Welcome Back {user.name}! </PageTitleText>
            </div>
        )
    )
}

export const Home = () => (
    <div>
        <NewGreeting />
        <Indent>
            <HeaderText>About Me :</HeaderText>
            <Indent>
                <SmallText>
                    My name is Dylan Poll, I am a software developer who is always looking to learn.
                    {'\n'}Some of my current skills include :
                <Indent>
                    <ul>
                        <span><li> Embedded Systems and general IOT</li></span>
                        <span><li> Cloud Networking</li></span>
                        <span><li> Server Deployment</li></span>
                        <span><li> Software development</li></span>
                        <span><li> Full Stack work</li></span>
                        <span><li> CAD model development</li></span>
                        <span><li> Web Development</li></span>  
                        <span><li> C++ Programming Language </li></span>  
                        <span><li> C Programming Language </li></span> 
                        <span><li> C# Programming Language </li></span> 
                        <span><li> ava Programming Language   </li></span> 
                        <span><li> Js+Node Programming Language </li></span> 
                        <span><li> Python Programming Language   </li></span>   
                    </ul>                      
                    </Indent>
                </SmallText>
            </Indent>
        </Indent>

        <Indent>
            <HeaderText>Contact Me :{'\n'}</HeaderText>
            <Indent><Indent>
                <SmallText>
                    <li><span> E-Mail : <a href="DylanManPoll@gmail.com">DylanManPoll@gmail.com</a>  </span></li>
                    <li><span> GitHub : <a href="https://github.com/dylanpoll">github.com/dylanpoll </a> </span></li>
                    <li><span> LinkdIn : <a href="https://www.linkedin.com/in/dylanpoll">linkedin.com/in/dylanpoll</a> </span></li>
                    <li><span> Orlando Code Cave Discord Server : <a href="https://discord.gg/kRCTTRVt">https://discord.gg/kRCTTRVt</a> </span></li>
                    <li><span> Discord ID : DevDylan#9707</span></li>
                </SmallText>
            </Indent></Indent>
        </Indent>
    </div>
);