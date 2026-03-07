/**
 * APPOINTMENT PAGE
 *
 * This page:
 * - Shows a booking form (name, contact, date, style, notes)
 * - Saves the data into Appwrite database collection "appointments"
 * - Can also generate a WhatsApp link with the same info
 *
 * React concepts:
 * - useState: to store form values + loading + success/error
 * - Controlled inputs: value + onChange for each field
 * - onSubmit handler: prevent default, then run async Appwrite call
 */

import { useState } from 'react'

export default function Appointment() {
  // Single object to store all form fields
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    style: '',
    placement: '',
    notes: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // Generic change handler:
  // - event.target.name gives the input's "name" attribute
  // - event.target.value is what the user typed
  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Build WhatsApp message from form data
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919302966172'
  const whatsappText = encodeURIComponent(
    [
      'New tattoo appointment inquiry:',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.date && `Preferred date: ${form.date}`,
      form.time && `Preferred time: ${form.time}`,
      form.style && `Style: ${form.style}`,
      form.placement && `Placement: ${form.placement}`,
      form.notes && `Notes: ${form.notes}`,
    ]
      .filter(Boolean)
      .join('\n')
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`

  async function handleSubmit(event) {
    event.preventDefault() // stop the browser reloading
    setSuccessMessage('')
    setErrorMessage('')

    // Very basic validation
    if (!form.name || !form.phone || !form.date) {
      setErrorMessage('Name, phone, and preferred date are required.')
      return
    }

    // WhatsApp-only flow (no database saving)
    // We open WhatsApp with all details and still show a success message.
    setIsSubmitting(true)
    try {
      window.open(whatsappLink, '_blank', 'noopener,noreferrer')
      setSuccessMessage('WhatsApp opened. Please send the message to confirm your request.')
      setForm({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        style: '',
        placement: '',
        notes: '',
      })
    } catch (error) {
      console.error('Error opening WhatsApp:', error)
      setErrorMessage('Could not open WhatsApp. Please use the button below or copy the message manually.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 px-4 bg-stone-950">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Heading */}
        <header className="text-center space-y-3">
          <p className="text-amber-500/90 text-xs uppercase tracking-[0.3em] font-medium">
            Book Your Session
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-100">
            Appointment Request
          </h1>
          <p className="text-stone-400 max-w-2xl mx-auto text-sm md:text-base">
            Tell us about your idea and preferred time. We&apos;ll review it and confirm
            your slot by message or call.
          </p>
        </header>

        {/* Messages */}
        {errorMessage && (
          <div className="rounded-lg border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="rounded-lg border border-emerald-500/50 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
            {successMessage}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl bg-stone-900/70 border border-stone-800 p-6 md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label className="block text-sm text-stone-300" htmlFor="name">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-stone-700 bg-stone-900 px-3 py-2 text-sm text-stone-100 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm text-stone-300" htmlFor="phone">
                Phone / WhatsApp *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-stone-700 bg-stone-900 px-3 py-2 text-sm text-stone-100 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm text-stone-300" htmlFor="email">
                Email (optional)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-stone-700 bg-stone-900 px-3 py-2 text-sm text-stone-100 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm text-stone-300" htmlFor="style">
                Preferred Style
              </label>
              <select
                id="style"
                name="style"
                value={form.style}
                onChange={handleChange}
                className="w-full rounded-lg border border-stone-700 bg-stone-900 px-3 py-2 text-sm text-stone-100 focus:border-amber-500 focus:outline-none"
              >
                <option value="">I&apos;m not sure yet</option>
                <option value="fineline">Fineline</option>
                <option value="blackwork">Blackwork</option>
                <option value="neo-traditional">Neo-traditional</option>
                <option value="realism">Realism</option>
                <option value="lettering">Lettering</option>
              </select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-1">
              <label className="block text-sm text-stone-300" htmlFor="date">
                Preferred Date *
              </label>
              <input
                id="date"
                name="date"
                type="date"
                required
                value={form.date}
                onChange={handleChange}
                className="w-full rounded-lg border border-stone-700 bg-stone-900 px-3 py-2 text-sm text-stone-100 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm text-stone-300" htmlFor="time">
                Preferred Time
              </label>
              <input
                id="time"
                name="time"
                type="time"
                value={form.time}
                onChange={handleChange}
                className="w-full rounded-lg border border-stone-700 bg-stone-900 px-3 py-2 text-sm text-stone-100 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm text-stone-300" htmlFor="placement">
                Placement (body area)
              </label>
              <input
                id="placement"
                name="placement"
                type="text"
                placeholder="e.g. left forearm"
                value={form.placement}
                onChange={handleChange}
                className="w-full rounded-lg border border-stone-700 bg-stone-900 px-3 py-2 text-sm text-stone-100 focus:border-amber-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-sm text-stone-300" htmlFor="notes">
              Describe your idea
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder="Tell us about size, text, references, color vs black, etc."
              value={form.notes}
              onChange={handleChange}
              className="w-full rounded-lg border border-stone-700 bg-stone-900 px-3 py-2 text-sm text-stone-100 focus:border-amber-500 focus:outline-none"
            />
          </div>

          {/* Submit + WhatsApp CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-amber-600 hover:bg-amber-500 disabled:bg-amber-800 text-stone-950 text-sm font-semibold transition-colors"
            >
              {isSubmitting ? 'Sending...' : 'Send Request'}
            </button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              Send this info via WhatsApp
            </a>
          </div>

          <p className="text-[11px] text-stone-500">
            By sending this form you are requesting a booking. We&apos;ll confirm the
            final date, time and price with you directly.
          </p>
        </form>
      </div>
    </section>
  )
}

