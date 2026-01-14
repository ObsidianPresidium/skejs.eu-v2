<style lang="scss">
    * {
        font-family: sans-serif;
    }
    
    .all-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    p {
        color: white;
        line-height: 1.25;
        margin: 1rem 2rem;
    }
    b {
        font-weight: bold;
    }
</style>

<p>
    Hello there, welcome to the blog! What you're reading right now is (in fact) a blog.
</p>
<p>
    I've wanted a blog for a while, but the task of making one always
    seemed a bit unsavory. One problem is that I don't really feel like I have a lot of thoughts or projects worth sharing, another is
    because a lot of people over-do making one in terms of complexity.
    You want comments, view counts, SEO, etc., etc., but, for websites, my personal conviction is that less is more.
</p>
<p>
    A lot of the problems with the modern web can be partially attributed to the fact that we are obsessed with building large, dynamic
    sites, with lots and lots of moving parts. To deal with this, we obscure a lot of the logic away.
</p>
<p>
    One of my favorite logic away-obscurers, as you might know, is Svelte. Svelte is a web framework, and it is the framework this site is made with.
    It tackles the problem of "repeating yourself" that you would have without one, by allowing the user to create and use <b>components,</b>
    which are like mini-websites, complete with their own logic, styles, and markup, which you would be forced to write multiple times,
    if you were to do without it. It can be used for pretty much everything, but it's especially useful for making websites with dynamic
    content, as Svelte (and SvelteKit) propagates updates in real-time through the DOM, which pure HTML doesn't.
</p>
<p>
    As a contrast, you have something like WordPress. WordPress is a bit older, and so of course was not built for - not that it had
    the ability to do so - the modern web. It is instead a wholesale package, it's an application you install on your server, whose
    primary purpose is to be a blog. WordPress as such comes with a lot of nice features its developers have developed over the years, to further
    enhance your blog.
</p>
<p>
    But, taking a step back. Is all this really necessary?
</p>
<p>
    I mean, think about it. The world wide web, as envisioned by Tim Berners-Lee, was intended to be a platform for (first and foremost) scientists
    to share scientific literature, in documents. Thus, his HTML language was engineered to be perfect for writing and sharing rich text. And,
    the essence of a blog is just that - rich text - but instead of sharing scientific essays, you share literary essays.
</p>
<p>
    So, working with this logic, when developing this blog, I intended to synthesize the ultimate lazy developers' solution: how can I get
    away with creating something really easy, while still having something pretty and repeatable? (Should I wish to make multiple posts)
</p>
<p>
    The answer came clearly to me after a conversation with my friend Mika. The solution to this challenge is to just get to writing HTML,
    and some basic components for repeatable designs.
</p>
<p>
    This site here, is essentially just a collection of &lt;p&gt; elements thrown together. The design you saw, on the /blog page, where you can
    see the blog posts, is just a collection of custom-made &lt;Card&gt; components, which I threw together in about 30 minutes, each with a little bit of CSS pizazz.
</p>
<p>
    The logic for the blog post cards was also easy to make. Each blog post has its own SvelteKit route, and it is linked to in a file called `posts.ts`,
    which contains extra information about the blog post, such as the date of creation, title, description, etc.
</p>
<p>
    To be updated...
</p>