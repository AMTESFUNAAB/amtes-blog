---
title: "Blog Commit Convections"
date: "2025-03-05T18:11:49+01:00"
layout: centered
---

This document was generated in part by Claude AI (and it's pretty damn good).

## Commit Types

- `feat`: Implement a new blog feature
- `post`: Create a new blog post
- `delete`: Delete an existing blog post
- `edit`: Modify existing post content: Correct typos, grammar, or formatting issues
- `meta`: Update blog metadata or site configuration
- `draft`: Add or modify draft content
- `style`: Change blog design or CSS
- `media`: Add or update images, videos, or other media
- `fix`: Fix a bug

See also: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Commit Message Structure

```md
<type>(<scope>): <description>

[optional body]

[optional footer]
```

## Examples

### Creating a New Post

```md
post(travel): Add summer vacation guide to Barcelona
```

### Editing Post Content

```md
edit(tech/ai): Update machine learning article with recent research

Incorporated findings from 2024 AI conference
Clarified neural network architecture explanation
```

### Updating Blog Metadata

```md
meta(tags): Reorganize content categories

Update tag hierarchy
Remove outdated tags
```

### Draft Management

```md
draft(philosophy): Begin essay on existentialism

Initial outline and key arguments sketched
```

## Additional Guidelines

- Use imperative, present tense
- Capitalize first letter
- No period at the end of description
- Limit description to 50 characters when possible
- Use body to provide detailed context
- Reference related issues or posts in footer if applicable
