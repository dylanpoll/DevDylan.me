/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Indent, SmallText, HeaderText, PageTitleText } from "../components/Layout";

export const Projects = () => (    
    <div>
        <PageTitleText>Projects I am working on{'\n'}</PageTitleText>
        <Indent><HeaderText><a href="https://CodeKarma.club">CodeKarma.club</a> {'\n'}</HeaderText>
            <Indent><Indent><SmallText>
                this is a project I have been working on for clubs and organizations. It has:
            </SmallText><Indent></Indent><SmallText>
            <ul>
            <li><span> Tracking attendence   </span></li>
            <li><span> An easy deploment system  </span></li>
            <li><span> A Discord Bot   </span></li>
            <li><span> A phone App   </span></li>
            <li><span> Roles  </span></li>
            <li><span> Scanning in members </span></li>
            <li><span> GitHub Repo : <a href="https://github.com/dylanpoll/KarmaProject">/KarmaProject</a> </span></li>
            <li><span> And more </span></li>
            </ul>
                </SmallText></Indent></Indent></Indent>
        <Indent><HeaderText><a href="https://creepcript.rip/">  CreepCript.RIP  </a>{'\n'}</HeaderText>
            <Indent><Indent>
                <SmallText>I have a friend who is and has been stalked online for a long time. 
                    This project is dedicated to that friend and meant to help people who are being harrased in that same way.{'\n'}
                {'\n'}The project can accomplish :
                    <ul>
                        <li><span>Injection of metadata(exif data codes meant to be used for tracking suspect leads)</span></li>
                        <li><span>Image Stegnography as a means to inject a tracking code to bypass exif data scrubbers</span></li>
                        <li><span>An easy deploment system ( so you can host a site that will post images that will automatically display tagged images for the user connected.)</span></li>
                        <li><span>A phone App</span></li>
                        <li><span>Archival for people to codes used only accessable after authenticating using Auth0.</span></li>
                        <li><span>And more.(site is under development, but the backend is almost done.)</span></li>
                        <li><span>GitHub Repo : <a href="https://github.com/dylanpoll/CreepCript.RIP">/CreepCript.RIP</a></span></li>
                    </ul>
                </SmallText>
            </Indent>
            </Indent>
        </Indent>
        <Indent><HeaderText><a href="https://github.com/dylanpoll/DevDylan.me"> DevDylan.me</a>{'\n'}</HeaderText>
        <Indent><Indent>
                <SmallText>
                <span><li>The github repo for this site!{'\n'}{'\n'}</li></span>
                </SmallText></Indent>
            </Indent>
        </Indent>
        <Indent><HeaderText><a href="https://github.com/dylanpoll/EmailLightBar"> Email Light Bar   </a>{'\n'}</HeaderText>
            <Indent>
                <Indent>
                <SmallText>
                this currently is being built, the only remaining issue is with the email scanning system. it is over scanning and erasing old results.
                <Indent>
                <li><span>I plan to work this from a ESP32 down to a ESP01 in the future.</span></li>
                <li><span>Working on listening for windows push notifications and using those as ques for light animations</span></li>
                <li><span>last future expansion will be to default back to the old LED scheme state after ending that animation, this will be done by recording the state and pushing the animation as a temporary state and setting it back to the original upon completion.</span></li>
                {'\n'}</Indent></SmallText>
                </Indent>
            </Indent>
        </Indent>
        <Indent><HeaderText><a href="https://github.com/dylanpoll/DiscordBots">  DiscordBots  </a>{'\n'}</HeaderText>
            <Indent><Indent>
                <SmallText>
                <span><li>the esp bot is a simple example/bare outline for using a esp board with a arduino(or without) as a type of restful api that uses URL encoding to initiate code. the discord bot just sends the URL encoded commands from chat. this same system can be used with other chat bots unrelated to discord, this is just a implimentation of it with discord.</li></span>
                <span><li>the Karma bot is just a part of my larger Karma project, a lot of its features are tied to the database it works with and the express rest API it is using. see the karma project repo or my rest API repo for a better explonation.</li></span>
                {'\n'}</SmallText>
            </Indent>
            </Indent>
        </Indent>
        <Indent><HeaderText><a href="https://github.com/valenciaEmbedded/WhoIsHome">  Who Is Home </a>{'\n'}</HeaderText>
            <Indent><Indent>
                <SmallText>
                the Who Is home project does the following:
                <Indent><span><li>runs a python script that checks for the mac addresses of devices connected to your network.</li></span>
                <span><li>It uses Nmap for this. </li></span>
                <span><li>It runs those addresses against a list of addresses and if the address listed is present it sends a char to an arduino by using serial communications.</li></span>
                <span><li>the arduino controls a LED strip and when it recieves a char it has an associated color for that device and it lights the LEDs for that person based on them being present.</li></span>
                {'\n'}</Indent></SmallText>
                </Indent>
            </Indent>
        </Indent>
        <Indent><HeaderText><a href="https://github.com/dylanpoll/Arduino"> Arduino and ESP </a>{'\n'}</HeaderText>
            <Indent><Indent>
                <SmallText>
                <span><li>This is my github repo for my Arduino and ESP code.</li></span>
                {'\n'}</SmallText>
            </Indent></Indent>
        </Indent>
        <Indent><HeaderText><a href="https://github.com/dylanpoll/Java"> Java  </a>{'\n'}</HeaderText>
            <Indent><Indent>
                <SmallText>
                <span><li>My general Java code</li></span>
                {'\n'}</SmallText>
            </Indent>
            </Indent>
        </Indent>
        <Indent><HeaderText><a href="https://github.com/dylanpoll/C">  C code  </a>{'\n'}</HeaderText>
            <Indent><Indent>
                <SmallText>
                   <span><li>Some of my C programms on github.</li></span>
                   {'\n'}</SmallText>
            </Indent>
            </Indent>
        </Indent>
        <Indent><HeaderText><a href="https://github.com/dylanpoll/Rest">  Express  </a>{'\n'}</HeaderText>
            <Indent><Indent>
                <SmallText>
                    <span><li>My express base build repo on github</li></span>
                    {'\n'}</SmallText>
            </Indent></Indent>
        </Indent>
        <Indent><HeaderText><a href="https://www.linkedin.com/groups/9011341/"> OrlandoCodeCave  </a>{'\n'}</HeaderText>
            <Indent><Indent>
                <SmallText>
                <span><li>This is a organization I am trying to get started for working on open source projects locally! This takes you to the Linkdin page!</li></span>
                <span><li>GitHub page : <a href="https://github.com/OrlandoCodeCave">/OrlandoCodeCave</a></li></span>
                {'\n'}</SmallText></Indent>
            </Indent>
        </Indent>
        <Indent><HeaderText><a href="https://valenciatechclub.com"> My college tech club </a>{'\n'}</HeaderText>
            <Indent><Indent>
                <SmallText>
                <span><li>I was the valencia tech club president and set up the site for the club, and did all the photagraphy on it! currently still needs a lot of work but it is being worked on by people on off time!</li></span>
                    {'\n'}</SmallText>
            </Indent></Indent>
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