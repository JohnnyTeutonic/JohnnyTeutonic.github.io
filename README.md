# jonathanreich.github.io — personal site

Plain HTML, CSS and a few lines of JavaScript. No build step, no dependencies,
no framework. Open `index.html` in a browser and it works.

```
index.html      home: systems, production impact, Mathlib, research summary
research.html   publications and papers in review
poetry.html     list of poems (titles and one-line notes; texts held back)
style.css       all styling, light + dark
script.js       theme toggle and footer year (site works without it)
.nojekyll       stops GitHub Pages running Jekyll over the files
```

## Deploying to GitHub Pages

**The username-site route (gives you `johnnyteutonic.github.io`):**

1. Create a new public repository named exactly **`JohnnyTeutonic.github.io`**.
2. Copy the contents of this folder into it (the files, not the folder itself).
3. `git add . && git commit -m "site" && git push`
4. Wait a minute or two. It will be live at `https://johnnyteutonic.github.io`.

**The project-repo route (gives you `johnnyteutonic.github.io/site`):**

1. Push this folder to any public repo.
2. Repo → Settings → Pages → Source: *Deploy from a branch* → `main` / `/root`.

## Adding a custom domain later

Buy the domain, then:

1. Create a file called `CNAME` in the repo root containing just the domain,
   e.g. `jonathanreich.com`
2. At the registrar, add four `A` records pointing to
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Repo → Settings → Pages → Custom domain → enter it → tick *Enforce HTTPS*.

## Editing

Publications live in `<ul class="pubs">` blocks. To add one, copy an existing
`<li>`:

```html
<li>
  <span class="pub-venue">Journal name</span>
  <span class="pub-title">Paper title</span>
  <span class="pub-status">Under review</span>
</li>
```

Add `class="pub-status accent"` to highlight a status (used for
revise-and-resubmit).

Colours are CSS custom properties at the top of `style.css` — change `--accent`
in both the `:root` and `html[data-theme="dark"]` blocks.

## Things deliberately left out

- **Internal project names from current employment.** The generative-AI and
  predictive-modelling entries describe the work generically, without naming
  internal systems. Check this before adding detail.
- **Analytics.** None. Add Plausible or GoatCounter if you ever want numbers;
  both are a single script tag and neither needs a cookie banner.
- **A photograph.** Worth adding when there's one you're happy with — it
  measurably increases time on page for personal sites. Drop it in and add
  `<img>` to the hero.
