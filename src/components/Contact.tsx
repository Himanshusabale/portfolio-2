import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null); // Reference to the form
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const scriptURL =
      'https://script.google.com/macros/s/AKfycbzUBfdGhdWnx84bySquiWz_bdmrlzY_x7ZNog7XD4RFZ4FGT2WnRaglm0NB2Cne0oE/exec';

    try {
      if (formRef.current) {
        const formData = new FormData(formRef.current); // Create FormData from the form
        await fetch(scriptURL, { method: 'POST', body: formData });

        setSubmitStatus('success');
        formRef.current.reset(); // Reset the form
      }
    } catch (error) {
      console.error('Error!', error.message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            name="submit-to-google-sheet"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="Name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="Email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="Message"
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg ${
                isSubmitting
                  ? 'bg-purple-400 cursor-not-allowed'
                  : 'bg-purple-600 hover:bg-purple-700'
              } text-white transition-colors`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send className="w-5 h-5" />
            </button>
            {submitStatus === 'success' && (
              <p
                id="msg"
                className="text-green-600 dark:text-green-400 text-center"
              >
                Message sent successfully!
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 dark:text-red-400 text-center">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;