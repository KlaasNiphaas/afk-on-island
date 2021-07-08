> This application will login to Hypixel using Mineflayer which is not a normal Minecraft client, this could result in your Minecraft account getting banned from Hypixel, so use this application at your own risk.

<hr>

## Table of Content

- [Installation](#installation)
  - [Stuff you need](#stuff-you-need)
  - [Setup Guide](#setup-guide)
- [Commands](#commands)
  - [runcmd](#runcmd)

## Installation

### Stuff you need

- A minecraft account that is in your Hypixel Skyblock Coop
- NodeJS >= 14
- Yarn >= 1.2
- A discord bot (https://discordapp.com/developers/applications/me) and a discord server

### Setup Guide

To start of download this repo as a ZIP

Next extract the ZIP file onto your desktop and open the folder

When you are in the folder open command prompt and type

    cd Desktop

Then

    cd afk-on-island-master

After that you do

    copy config.example.json

Next edit and setup the config file with a proper Minecraft and Discord settings, once you're done you need to install discord.js and mineflayer using

    npm i mineflayer and npm i discord.js

In the command prompt

After it is done installing type

    node index.js

Then your done! Enjoy

## Commands

Here are the current commands and their features

### runcmd

This command allows you to run commands ingame and show your their output. You can use it by typing !runcmd /[any command].
