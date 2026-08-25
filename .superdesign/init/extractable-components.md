# Extractable components

## NavBar
- Source: `components/navbar/navbar.js`
- Category: layout
- Description: Responsive main navigation with a mobile menu.
- Extractable props: `activeItem` (string), `isOpen` (boolean).
- Hardcoded: brand, route labels, email CTA, menu icons, CSS classes.

## Footer
- Source: `components/footer/footer.js`
- Category: layout
- Description: Site-wide speaking and press CTA plus footer navigation.
- Extractable props: none.
- Hardcoded: booking message, navigation labels, LinkedIn link, CSS classes.

## ProjectCard
- Source: `components/project/ProjectCard.js`
- Category: basic
- Description: Image-led work card with an optional outbound action.
- Extractable props: `title`, `category`, `description`, `image`, `link`, `linkLabel`.
- Hardcoded: image dimensions, fallback label, CSS classes.

## TalkCard
- Source: `components/talk/TalkCard.js`
- Category: basic
- Description: Image-led external speaking card.
- Extractable props: `title`, `host`, `image`, `link`.
- Hardcoded: image sizes, external-link glyph, CSS classes.

## ArticleCard
- Source: `components/article/ArticleCard.js`
- Category: basic
- Description: Image-led external article card.
- Extractable props: `publication`, `title`, `excerpt`, `image`, `link`.
- Hardcoded: image sizes, external-link glyph, CSS classes.
