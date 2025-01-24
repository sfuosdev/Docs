<h4 align="center">
    <br> <img src="static/img/logo.png" alt="osdev logo">
    <img src="static/img/docusaurus.png" alt="docusaurus logo"></a> 
</h4>

<h4 align="center">SFU Open-source Development Club
    <br>Docusauraus Documentation Tool</h4>
    <div align="center">
    <br>
        <a href=".">
          <img src="https://github.com/sfuosdev/Docs/actions/workflows/deploy.yml/badge.svg"/>
        </a>
    </div>
</h4>

<p align="center">
    <a href="#what-is-this">What is this?</a> •
    <a href="#purpose-of-this-tool">Purpose of this tool</a> •
    <a href="#how-to-contribute">How to contribute</a>
</p>

### What is this?

This SFU OS Dev Documentation tool is built using [Docusaurus](https://docusaurus.io/), a modern static website generator and hosted by Github Page.

[Click here to go to our Documentation](https://sfuosdev.github.io/Docs/)

### Purpose of this tool

We invite you to contribute to the SFU OS Development Club's Documentation page, designed to support current and future students in Computer Science, Software Systems, Computer Engineering, and Computer Science minors, as well as anyone interested in starting their journey in Computer Science. Our goal is to provide valuable resources that will help individuals excel in group projects and stay ahead in their academic and professional endeavors.

Thank you for your contributions and continued support!

### How to contribute

All the documentation needs to be done in markdown format and upload it to <code>docs</code> folder.

If you have one markdown file, you have to add up sidebar position at the top of the markdown file like this:

```markdown
---
sidebar_position: 2
---
```

If you have multiple markdown files, you should make a folder and add all your markdown files in that folder. Then you have to add up sidebar position at the top of the each markdown file like this:

```markdown
---
sidebar_position: 2
---
```

and have to add `_category_.json` file in the folder. The `_category_.json` file should look like this:

```json title="_category_.json"
{
  "label": "Git Documentation",
  "position": 1,
  "link": {
    "type": "generated-index"
  }
}
```

The format will look as this:

```txt
── git-folder/
│   ├── _catagory_.json
│   ├── readme1.md
│   ├── readme2.md
│   ├── readme3.md
│   ├── readme4.md
```

After that process, you need to add your section in <code>sidebars.ts</code> in order to display in documentation section.

```ts
tutorialSidebar: [
  "intro",
  {
    type: "category",
    label: "WSL Installation",
    items: [
      "tutorial-wsl/sfu-vpn",
      "tutorial-wsl/why-wsl",
      "tutorial-wsl/wsl-installation_Windows",
      "tutorial-wsl/wsl-installation_macOS",
    ],
  },
];
```

To contribute, please submit a Pull Request. Our executive team will review and confirm your submissions before they are published.

Thank you for your contribution!
