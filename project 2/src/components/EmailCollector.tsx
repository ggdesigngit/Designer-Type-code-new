import React, { useState } from 'react';
import { Download, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { submitEmail } from '../lib/supabase';

interface EmailCollectorProps {
  designerType?: string;
  onSuccess?: () => void;
}

const EmailCollector: React.FC<EmailCollectorProps> = ({ designerType, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const success = await submitEmail(email, designerType);

      if (success) {
        setIsSubmitted(true);
        if (onSuccess) {
          onSuccess();
        }
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center border border-green-200">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-3">
          Thank You!
        </h3>
        <p className="text-green-700 mb-6">
          Your email has been saved. You can now download the complete collection of Designer Type cards.
        </p>
        <a
          href="https://raw.githubusercontent.com/ggdesigngit/Whats-Your-Designer-Type/3ccb05914b9c0a114562c0a2ad214efc60d34312/WhatsYourDesignerTypeAllCharacterCards.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="WhatsYourDesignerTypeAllCharacterCards.pdf"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
        >
          <Download className="w-5 h-5" />
          Download All Designer Type Cards
        </a>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200">
      <div className="text-center mb-6">
        <Mail className="w-12 h-12 text-primary-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-primary-800 mb-2">
          Get Your Designer Type Cards
        </h3>
        <p className="text-primary-700">
          Enter your email to download the complete collection of all 8 Designer Type cards with detailed descriptions and resources.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
            disabled={isSubmitting}
          />
          {error && (
            <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              {error}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
            isSubmitting
              ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
              : 'bg-primary-600 text-white hover:bg-primary-700'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              Get Download Link
            </>
          )}
        </button>
      </form>

      <p className="text-xs text-primary-600 text-center mt-4">
        We'll only use your email to send you design-related updates. No spam, ever.
      </p>
    </div>
  );
};

export default EmailCollector;
