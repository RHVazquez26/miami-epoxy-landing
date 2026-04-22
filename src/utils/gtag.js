/**
 * Fires a Google Ads conversion event for contact actions
 * (WhatsApp clicks, phone calls).
 *
 * Conversion: AW-17495438717 / V5_NCIqI8qACEP3qvJZB
 */
export const trackContactConversion = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17495438717/V5_NCIqI8qACEP3qvJZB',
    });
  }
};
