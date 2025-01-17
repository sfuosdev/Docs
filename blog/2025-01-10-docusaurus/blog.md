---
slug: how to write blog
title: How to write blog
authors: [tommy]
tags: [how-to-use, docusaurus]
---

Below description is from Docusaurus basic description of how to write blog.

[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).

Here are a few tips you might find useful.

<!-- truncate -->

Simply add Markdown files (or folders) to the `blog` directory.

Regular blog authors can be added to `authors.yml`.

The blog post date can be extracted from filenames, such as:

- `2019-05-30-welcome.md`
- `2019-05-30-welcome/index.md`

A blog post folder can be convenient to co-locate blog post images:

![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)

The blog supports tags as well!

Use a `<!--` `truncate` `-->` comment to limit blog post size in the list view.
