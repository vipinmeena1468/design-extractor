# Physicl — Physical AI Data Infrastructure

## Mission
Create implementation-ready, token-driven UI guidance for Physicl — Physical AI Data Infrastructure that is optimized for consistency, accessibility, and fast delivery across e-commerce storefront.

## Brand
- Product/brand: Physicl — Physical AI Data Infrastructure
- URL: https://www.physicl.ai/
- Audience: online shoppers and consumers
- Product surface: e-commerce storefront

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Typography scale: `font.size.xs=16px`, `font.size.sm=18px`, `font.size.md=24px`, `font.size.lg=32px`, `font.size.xl=40px`
- Color palette: `color.border.default=#292524`, `color.text.secondary=#78716c`, `color.text.tertiary=#fafaf9`, `color.text.inverse=#222222`, `color.surface.base=#000000`, `color.surface.raised=#f5f5f4`, `color.surface.strong=#e7e5e4`
- Spacing scale: `space.1=8px`, `space.2=12.8px`, `space.3=16px`, `space.4=18.08px`, `space.5=40px`
- Radius/shadow/motion tokens: `radius.xs=12px` | `motion.duration.instant=200ms`, `motion.duration.fast=350ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: buttons (44), links (36), lists (4), navigation (2).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
