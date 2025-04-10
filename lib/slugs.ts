import React from 'react'

export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}
export const slugifyWithDate = (text: string) => {
  const date = new Date().toISOString().split('T')[0]
  return `${date}-${slugify(text)}`
}
export const slugifyWithDateAndTime = (text: string) => {
  const date = new Date().toISOString().split('T')[0]
  const time = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
  return `${date}-${time}-${slugify(text)}`
}

