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
        isAuthenticated &&(
            <div>
                <PageTitleText>Welcome Back {user.name}! </PageTitleText>
            </div>
            )
    )
}

export const Home = () => (
    <div>
        <NewGreeting />
        <Greeting />
        <Indent>
            <HeaderText>About Me :</HeaderText>
            <Indent>
                <SmallText>
                    My name is Dylan Poll, I am a software developer who is always looking to learn.
                    {'\n'}My current skills include :
                </SmallText>
            <Indent>
                <SmallText>
                    * C Programming Language
                    {'\n'}* C++ Programming Language
                    {'\n'}* C# Programming Language
                    {'\n'}* Java Programming Language
                    {'\n'}* Js+Node Programming Language
                    {'\n'}* Python Programming Language
                </SmallText>
            </Indent>
                <SmallText>
                    {'\n'}My skill sets include :
                </SmallText>
                <Indent>
                    <SmallText>
                        * Web Development
                        {'\n'}* Embedded Systems and general IOT
                        {'\n'}* Cloud Networking
                        {'\n'}* Server Deployment
                        {'\n'}* Software development
                        {'\n'}* Full Stack work
                        {'\n'}* CAD model development
                    </SmallText>
                </Indent>
            </Indent>
        </Indent>

        <Indent>
            <HeaderText>Contact Me :{'\n'}</HeaderText>
                <Indent>
                    <SmallText>
                        E-Mail : <a href="DylanManPoll@gmail.com">DylanManPoll@gmail.com</a>
                        {'\n'}GitHub : <a href="https://github.com/dylanpoll"> https://github.com/dylanpoll </a>
                        {'\n'}LinkdIn : <a href="https://www.linkedin.com/in/dylan-poll-4a324a1a2/">https://www.linkedin.com/in/dylan-poll-4a324a1a2/</a>
                    </SmallText>
                </Indent>
        </Indent>
    </div>
);