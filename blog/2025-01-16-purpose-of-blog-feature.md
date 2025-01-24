---
slug: blog-feature
title: Purpose of blog feature
authors: [tommy]
tags: [how-to-use, docusaurus]
---

<!-- truncate -->

The SFU Open Source Development Club will use the Docusaurus Blog feature to show the documentation update and may add acknowledgement of the documentation. Writing blog posts strictly only for Presidents and Director of Technology.

If you are writing blog, please make your profiles in <code>authors.yml</code>:

```yml
slorber:
  name: Sébastien Lorber
  title: Docusaurus maintainer
  url: https://sebastienlorber.com
  image_url: https://github.com/slorber.png
  page:
    # customize the url of the author page at /blog/authors/<permalink>
    permalink: "/all-sebastien-lorber-articles"
  socials:
    x: sebastienlorber
    linkedin: sebastienlorber
    github: slorber
    newsletter: https://thisweekinreact.com
```

and attach this to your blog post at the top:

```yml
---
slug: welcome
title: Purpose of blog feature
authors: [tommy]
tags: [how-to-use, docusaurus]
---
```

If there are multiple authors for one blog post, please make both author profiles in <code>authors.yml</code> and add it like example below:

```yml
---
slug: first-blog-post
title: First Blog Post
authors: [slorber, yangshun]
tags: [hola, docusaurus]
---
```

You are welcome to create tags for your blog post such as this in <code>tags.yml</code>:

```yml
executives:
  label: Executives
  permalink: /executives
  description: Executives tag description
```
