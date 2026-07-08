import { getPayload } from 'payload'
import config from './payload.config'

const CATEGORIES = ['Engineering', 'Design', 'Career']

const POSTS = [
  {
    title: 'Shipping a Static Blog from a Headless CMS',
    category: 'Engineering',
    excerpt:
      'Why we kept the site static and fetched content at build time instead of reaching for server rendering.',
    body: [
      'Static sites are fast, cheap to host, and hard to break. The temptation with any CMS integration is to bolt on server rendering the moment dynamic content shows up.',
      'Instead, the build pulls published posts from the CMS REST API once, at build time, and bakes them into plain HTML. Publishing a new article means triggering a rebuild, which is a fair trade for a portfolio site.',
      'The result is a blog that loads instantly and never depends on the CMS being up at request time.',
    ],
  },
  {
    title: 'Dark-First Design Systems',
    category: 'Design',
    excerpt: 'Designing for dark mode as the default, not an afterthought bolted on with a toggle.',
    body: [
      'Most design systems start in light mode and invert colors later, which is why so many dark themes feel washed out.',
      'Starting dark forces you to think in terms of elevation and glow rather than shadow, and it changes how saturated your accent colors need to be to still read as vivid.',
      'Light mode became the derived theme, not the primary one, and the site is better for it.',
    ],
  },
  {
    title: 'What Ten Years of Side Projects Taught Me',
    category: 'Career',
    excerpt: 'Notes on shipping small things consistently instead of waiting for the big idea.',
    body: [
      'The projects that taught me the most were rarely the ambitious ones. They were the weekend builds I actually finished.',
      'Finishing is a skill independent of the idea. It gets better with repetition, and every shipped project makes the next one faster.',
      'None of this replaces deep work on one thing, but it does keep the muscle warm between opportunities to do that deep work.',
    ],
  },
  {
    title: 'Migrating a Monorepo to Turborepo',
    category: 'Engineering',
    excerpt: 'Splitting a tangled build into cacheable, independently deployable pieces.',
    body: [
      'The before state was a single build script that rebuilt everything on every change, regardless of what actually moved.',
      'Turborepo turns the dependency graph into a cache key. Change the CMS and only the CMS rebuilds; change a shared utility and both apps rebuild, correctly.',
      'The payoff shows up first in CI, where builds that used to take minutes now skip entirely when nothing relevant changed.',
    ],
  },
  {
    title: 'A Case for Boring Technology',
    category: 'Engineering',
    excerpt: 'Postgres, REST, and server-rendered HTML are still the right defaults for most projects.',
    body: [
      'Every year brings a new framework promising to make the old ones obsolete. Most projects do not need the new one.',
      'Boring technology has already had its edge cases found and fixed by someone else. That is worth more than a marginal ergonomics improvement.',
      'Reach for the exciting tool when the boring one demonstrably cannot do the job, not before.',
    ],
  },
  {
    title: 'Typography Choices for Long-Form Reading',
    category: 'Design',
    excerpt: 'Line length, contrast, and rhythm matter more than the specific typeface you pick.',
    body: [
      'A good body font matters less than most designers assume. Line length and contrast do far more work.',
      'Sixty to seventy-five characters per line keeps the eye from losing its place, and a measured vertical rhythm between paragraphs does the rest.',
      'Pick a typeface you like and spend the saved time on spacing instead.',
    ],
  },
  {
    title: 'Interviewing Without a Whiteboard',
    category: 'Career',
    excerpt: 'What changed when we replaced algorithm puzzles with a short paired-programming session.',
    body: [
      'Whiteboard algorithm questions measure how recently someone crammed algorithm questions, not how well they build software.',
      'Swapping in a small paired-programming exercise on a real, messy piece of code told us far more about how someone actually works.',
      'It is a harder interview to design, but a much better signal.',
    ],
  },
  {
    title: 'Self-Hosting Media on Vercel Blob',
    category: 'Engineering',
    excerpt: 'Why local disk storage quietly breaks the moment your CMS ships to serverless infrastructure.',
    body: [
      'Serverless filesystems are ephemeral. An upload that lands on disk during one request may simply not exist for the next.',
      'Moving media storage to Vercel Blob fixes this invisibly: uploads get a stable public URL instead of a path on a filesystem that gets rebuilt on every deploy.',
      'The lesson generalizes: anything written to local disk in a serverless environment needs a second look before it ships.',
    ],
  },
]

const toLexical = (paragraphs: string[]) => ({
  root: {
    type: 'root',
    format: '' as const,
    indent: 0,
    version: 1,
    direction: 'ltr' as const,
    children: paragraphs.map((text) => ({
      type: 'paragraph',
      format: '' as const,
      indent: 0,
      version: 1,
      direction: 'ltr' as const,
      children: [
        {
          type: 'text',
          text,
          format: 0,
          style: '',
          mode: 'normal' as const,
          detail: 0,
          version: 1,
        },
      ],
    })),
  },
})

const run = async () => {
  const payload = await getPayload({ config })

  const { totalDocs } = await payload.count({ collection: 'posts' })
  if (totalDocs > 0) {
    payload.logger.info(`Already seeded (${totalDocs} posts) — skipping. Wipe the posts/categories/media tables to reseed.`)
    process.exit(0)
  }

  const categoryIds: Record<string, number> = {}
  for (const title of CATEGORIES) {
    const category = await payload.create({ collection: 'categories', data: { title } })
    categoryIds[title] = category.id
  }

  for (const [index, post] of POSTS.entries()) {
    const imageRes = await fetch(`https://picsum.photos/seed/blog-${index}/1200/675`)
    const buffer = Buffer.from(await imageRes.arrayBuffer())

    const media = await payload.create({
      collection: 'media',
      data: { alt: post.title },
      file: {
        data: buffer,
        mimetype: 'image/jpeg',
        name: `blog-seed-${index}.jpg`,
        size: buffer.length,
      },
    })

    await payload.create({
      collection: 'posts',
      draft: false,
      data: {
        title: post.title,
        excerpt: post.excerpt,
        hero: media.id,
        category: categoryIds[post.category],
        publishedDate: new Date(Date.now() - index * 9 * 86400000).toISOString(),
        content: toLexical(post.body),
        _status: 'published',
      },
    })

    payload.logger.info(`Seeded post: ${post.title}`)
  }

  payload.logger.info('Done.')
  process.exit(0)
}

// `payload run` resolves as soon as this module's synchronous code finishes and then
// exits the process — top-level await keeps it alive until the seed actually completes.
await run().catch((err) => {
  console.error(err)
  process.exit(1)
})
