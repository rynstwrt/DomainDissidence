# INSTALLATION

## 1. Install Node.js 
If not already installed, install the latest version of Node.js from the official install instructions: https://nodejs.org/en/download

## 2. Install the DomainDissidence package
Run this command in your computer's terminal or command prompt:<br>
`npm i -g domaindissidence@latest`

## 3. Initialize your project
Create the template website and generate the initial DomainDissidence config by running the command:<br>
`domaindissidence --init`

## 4. Customize
Add you customizations and targeted websites by editing the `config.toml` file. Initially, it should look something like this:
```toml
```

## 5. Generate the final website
In the same folder as `config.toml`, run the command `domaindissidence create`.

That's it! A static website will be generated in that directory.

## 6. Host your website
Host your website through any static website hosting service, such as through [GitHub pages](https://pages.github.com/).