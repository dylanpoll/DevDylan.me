/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Indent, SmallText, HeaderText, PageTitleText } from "../components/Layout";

export const Projects = () => (    
    <div>

        <PageTitleText>Projects I am working on{'\n'}</PageTitleText>
        <Indent><HeaderText><a href="https://CodeKarma.club">CodeKarma.club</a> :{'\n'}</HeaderText>
            <Indent><SmallText>
                this is a project I have been working on for clubs and organizations. It has:
                
            </SmallText><Indent><SmallText>
                {'\n'}* a point aggregation system,
                {'\n'}* a discord bot
                {'\n'}* a attendence system
                {'\n'}* a app that can be deployed to be used with a private server so anyone can use this.
                {'\n'}* and I am adding in a POS system for club items.
                {'\n'}* GitHub Repo : <a href="https://github.com/dylanpoll/KarmaProject">https://github.com/dylanpoll/KarmaProject</a>
                </SmallText></Indent></Indent></Indent>

        <Indent><HeaderText><a href="https://CreepCript.rip">CreepCript.RIP </a>:{'\n'}</HeaderText>
            <Indent>
                <SmallText>
                    A image stegnography and exif data code injection and tracking solution for the victims of cyber stalking :
                </SmallText>
                <Indent>
                    <SmallText>
                        {'\n'}* More information to come on this.
                    </SmallText>
                </Indent>
            </Indent>
        </Indent>
    </div>
)
/*
FOR FUTURE USE AFTER DB SETUP FOR DYNAMIC CONTENT :
    <div>
        <Indent>
            <HeaderText>{'\n'}${Project.i.Title}{'\n'}</HeaderText>
            <Indent>
                <div>${Project.i.Content}{'\n'}</div>
            </Indent>
        </Indent>
    </div>
*/