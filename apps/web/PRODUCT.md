# Product

## Register

brand

## Users

Recruiters, hiring managers, and fellow engineers evaluating Olly Marsters (full-stack developer, Edinburgh, frontend-leaning). They arrive with a "show me" mindset, usually on desktop from a CV/LinkedIn link, and decide within seconds whether the site itself demonstrates craft. Secondary: peers and collaborators looking to start a conversation.

## Product Purpose

A single-page portfolio that is itself the proof of skill. It must communicate "interactive frontend developer who sweats the details" through the experience, not just the copy. Success = a visitor says "woah", scrolls the whole page, and clicks a project or the contact form.

## Brand Personality

Cosmic, precise, playful. The constellation/galaxy motif is the established identity — the sky as a canvas for engineering. Confident but warm; delight is the currency, clarity is the constraint.

## Anti-references

- Template developer portfolios (hero avatar + skill bars + identical card grids).
- Generic SaaS landing grammar (eyebrow labels on every section, hero-metric blocks, gradient text).
- Static "CV as a webpage" — anything that could not demonstrate interactive/WebGL skill.
- Overloaded awwwards clones where the effects bury the content or tank performance.

## Design Principles

1. **The site is the CV.** Every surface must demonstrate the skill it claims — interaction, motion, and rendering quality are the evidence.
2. **One wow per fold.** The hero carries the spectacle; each section after it earns attention with one strong idea, not many small ones.
3. **Delight never blocks UX.** Navigation, reading, and contact must stay instant and obvious; effects respond to the user, never trap them.
4. **Motion is physics, not decoration.** Interaction mechanics (gravity, parallax, velocity) should feel causal — the cursor does something, the world reacts.
5. **Fast on real hardware.** 60fps on a mid laptop, graceful degradation on mobile, honest reduced-motion fallbacks.

## Accessibility & Inclusion

WCAG AA: 4.5:1 body contrast, visible focus states, semantic headings/landmarks. Full `prefers-reduced-motion` alternatives (static hero frame, crossfades). WebGL content is decorative and aria-hidden; all information available as text.
