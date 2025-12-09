# INSTALLATION

## 1. Install Node.js 
If not already installed, install the latest version of Node.js from the official install instructions: https://nodejs.org/en/download

<br>

## 2. Install the DomainDissidence package
Run this command in your computer's terminal or command prompt:<br>
`npm i -g domaindissidence@latest`

<br>

## 3. Initialize your project
Create the template website and generate the initial DomainDissidence config by running the command:<br>
`domaindissidence --init`

<br>

## 4. Configure
Configure your customizations and targeted websites by editing the `config.toml` file. Initially, it should look something like this:
```toml
######################################################################################################################################################
# $$$$$$$\                                    $$\           $$$$$$$\  $$\                     $$\       $$\                                          #
# $$  __$$\                                   \__|          $$  __$$\ \__|                    \__|      $$ |                                         #
# $$ |  $$ | $$$$$$\  $$$$$$\$$$$\   $$$$$$\  $$\ $$$$$$$\  $$ |  $$ |$$\  $$$$$$$\  $$$$$$$\ $$\  $$$$$$$ | $$$$$$\  $$$$$$$\   $$$$$$$\  $$$$$$\   #
# $$ |  $$ |$$  __$$\ $$  _$$  _$$\  \____$$\ $$ |$$  __$$\ $$ |  $$ |$$ |$$  _____|$$  _____|$$ |$$  __$$ |$$  __$$\ $$  __$$\ $$  _____|$$  __$$\  #
# $$ |  $$ |$$ /  $$ |$$ / $$ / $$ | $$$$$$$ |$$ |$$ |  $$ |$$ |  $$ |$$ |\$$$$$$\  \$$$$$$\  $$ |$$ /  $$ |$$$$$$$$ |$$ |  $$ |$$ /      $$$$$$$$ | #
# $$ |  $$ |$$ |  $$ |$$ | $$ | $$ |$$  __$$ |$$ |$$ |  $$ |$$ |  $$ |$$ | \____$$\  \____$$\ $$ |$$ |  $$ |$$   ____|$$ |  $$ |$$ |      $$   ____| #
# $$$$$$$  |\$$$$$$  |$$ | $$ | $$ |\$$$$$$$ |$$ |$$ |  $$ |$$$$$$$  |$$ |$$$$$$$  |$$$$$$$  |$$ |\$$$$$$$ |\$$$$$$$\ $$ |  $$ |\$$$$$$$\ \$$$$$$$\  #
# \_______/  \______/ \__| \__| \__| \_______|\__|\__|  \__|\_______/ \__|\_______/ \_______/ \__| \_______| \_______|\__|  \__| \_______| \_______| #
######################################################################################################################################################

# BRANDING
[branding]
title="FakeName"
description="Find the best deals around!"

# COLORS
[colors]
primary="#FF6060"
secondary="#F0F0F0"

# COMPANY BOYCOTT LIST
[[company]]
name="CompanyName1"
logoURL="https://exampleimages.com/companyname1logo.png"
```

<br>

## 5. Generate the final website
In the same folder as `config.toml`, run the command `domaindissidence create`.

That's it! A static website will be generated in that directory.

<br>

## 6. Host your website
Host your website through any static website hosting service, such as through [GitHub pages](https://pages.github.com/).