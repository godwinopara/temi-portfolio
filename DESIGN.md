---
version: alpha
colors:
  canvas: "#f6f2ea"
  ink: "#17201b"
  muted: "#657068"
  moss: "#2f6654"
  terracotta: "#c75c3d"
typography:
  display:
    fontFamily: "Georgia, 'Times New Roman', serif"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
rounded:
  card: "1.25rem"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 4rem)"
components:
  button:
    radius: "999px"
  card:
    radius: "1.25rem"
---

## Overview

This is an editorial-humanist portfolio for press and event bookers. It should feel warm, assured, and intellectually curious: closer to a well-made magazine than a technology dashboard. The signature is a folio rhythm—small section labels, fine rules, and generous whitespace—rather than visual effects.

## Colors

Canvas is reserved for the page field; ink carries long-form text. Moss is the only primary interactive colour. Terracotta is a restrained editorial highlight, never the only indicator of state.

## Typography

Use the display face only for high-level statements and page titles. Use the sans-serif for navigation, body copy, labels, and controls. Keep body copy spacious and readable.

## Layout

Use a narrow-first, single-column layout. At wide screens, introduce an asymmetrical editorial grid without compromising source order. Every media block reserves its layout area before loading.

## Elevation & Depth

Surfaces are predominantly flat. Cards may use a light border and subtle hover translation; persistent heavy shadows and glass effects are not part of the system.

## Shapes

Use softly rounded image and card corners. Calls to action are pill-shaped. Avoid a mix of unrelated radii.

## Components

Links and buttons use moss hover and focus states with a visible focus ring. Motion is brief, opacity/transform-only, and removed when reduced motion is requested. Images receive descriptive contextual alternative text.

## Do's and Don'ts

Do use strong contrast, fine rules, and intentional image cropping. Do not use generic AI gradients, dense dashboard layouts, or animation that prevents access to content.
