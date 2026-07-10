'use client'

import { useState } from 'react'

// Get your free key: go to web3forms.com, enter nicolasasoul@gmail.com, check your inbox.
const WEB3FORMS_KEY = 'YOUR_WEB3FORMS_KEY'
const CALENDLY_URL = 'https://calendly.com/nicolasasoul'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    process: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.process,
          subject: `New inquiry from ${formData.name} — Neith AI`,
        }),
      })

      if (res.ok) {
        setStatus('sent')
        setFormData({ name: '', email: '', process: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputBase =
    'w-full bg-transparent border border-bone px-4 py-3.5 font-body text-sm text-slate ' +
    'placeholder:text-dust focus-visible:outline-none focus-visible:border-brand ' +
    'transition-colors duration-200'

  return (
    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
      {/* Left: form */}
      <div>
        {status === 'sent' ? (
          <div className="py-8">
            <div className="rule mb-8" />
            <p className="font-display font-medium text-2xl text-ink mb-3">
              Received.
            </p>
            <p className="font-body text-sm text-dust leading-relaxed">
              We review every inquiry personally. You&apos;ll hear from us within one
              business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>

              <div>
                <label htmlFor="process" className="sr-only">
                  What is the manual process slowing you down most?
                </label>
                <textarea
                  id="process"
                  name="process"
                  required
                  rows={5}
                  placeholder="What's the manual process slowing you down most?"
                  value={formData.process}
                  onChange={handleChange}
                  className={`${inputBase} resize-none`}
                />
              </div>

              {status === 'error' && (
                <p className="text-xs font-body text-brand">
                  Something went wrong. Email us directly at{' '}
                  <a
                    href="mailto:nicolasasoul@gmail.com"
                    className="underline underline-offset-2"
                  >
                    nicolasasoul@gmail.com
                  </a>
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="font-body text-xs font-medium tracking-label uppercase
                           bg-ink text-paper px-8 py-3.5 w-full
                           hover:bg-brand disabled:opacity-50
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand
                           transition-colors duration-200"
              >
                {status === 'sending' ? 'Sending...' : 'Send it →'}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Right: direct options */}
      <div className="space-y-8">
        <div>
          <p className="font-body text-xs tracking-label uppercase text-dust mb-4">
            Or book directly
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-sm font-medium text-ink
                       border-b border-ink pb-0.5
                       hover:text-brand hover:border-brand
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand
                       transition-colors duration-200"
          >
            Schedule a 30-minute call →
          </a>
        </div>

        <div className="rule" />

        <div>
          <p className="font-body text-xs tracking-label uppercase text-dust mb-2">
            Email
          </p>
          <a
            href="mailto:nicolasasoul@gmail.com"
            className="font-body text-sm text-ink hover:text-brand
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand
                       transition-colors duration-200"
          >
            nicolasasoul@gmail.com
          </a>
        </div>

        <div className="rule" />

        <div className="space-y-3">
          <p className="font-body text-xs tracking-label uppercase text-dust">
            What happens next
          </p>
          <ol className="space-y-2 font-body text-sm text-slate leading-relaxed list-none">
            <li>
              <span className="text-dust font-medium">01 &mdash;</span> We read your note the same day.
            </li>
            <li>
              <span className="text-dust font-medium">02 &mdash;</span> We respond with a plain-language breakdown of what the system would look like.
            </li>
            <li>
              <span className="text-dust font-medium">03 &mdash;</span> You decide if you want to build it.
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
