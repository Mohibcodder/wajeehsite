'use client'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm(
  //     import.meta.env.VITE_EMAILJS_SERVICE_ID,
  //     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  //     form.current,
  //     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  //   )
  //   .then((result) => {
  //     console.log('SUCCESS!', result.text);
  //     alert('Message sent successfully!');
  //     form.current.reset(); // Form clear kar do
  //   }, (error) => {
  //     console.log('FAILED...', error.text);
  //     alert('Failed to send message. Please try again.');
  //   });
  // };

  const [modal, setModal] = useState({ show: false, message: '', success: false });
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
  
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log('SUCCESS!', result.text);
      setModal({ show: true, message: 'Message sent successfully!', success: true });
      form.current.reset();
    }, (error) => {
      console.log('FAILED...', error.text);
      setModal({ show: true, message: 'Failed to send message. Please try again.', success: false });
    })
    .finally(() => {
      setLoading(false); // Stop loading whether success or error
    });
  };
  
  
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
       {/* Modal */}
       {modal.show && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg w-[90%] max-w-md">
            <h2 className={`text-2xl font-bold mb-4 ${modal.success ? 'text-green-600' : 'text-red-500'}`}>
              {modal.success ? 'Success' : 'Error'}
            </h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">{modal.message}</p>
            <div className='flex justify-center'>
              <button 
                onClick={() => setModal({ show: false, message: '', success: false })}
                className="cursor-pointer px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-md transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
            Get In Touch
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-rose-500 dark:bg-rose-400"></span>
          </h2>
        <div className="flex flex-col md:flex-row">
          {/* Left side info */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Feel free to reach out if you're looking for a designer and developer, 
                have a question, or just want to connect.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 text-rose-500 dark:text-rose-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">mohibchaudary31@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-rose-500 dark:text-rose-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">+92 313 4190776</p>
                  </div>
                </div>
              </div>
            </div>
          {/* Form part */}
          <div className="md:w-1/2">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input 
                    type="text" 
                    name="user_name"
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-rose-500 dark:focus:ring-rose-400 bg-white dark:bg-gray-700"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    name="user_email"
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-rose-500 dark:focus:ring-rose-400 bg-white dark:bg-gray-700"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-rose-500 dark:focus:ring-rose-400 bg-white dark:bg-gray-700"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="5" 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-rose-500 dark:focus:ring-rose-400 bg-white dark:bg-gray-700"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`cursor-pointer px-6 py-3 ${loading ? 'bg-rose-400 cursor-not-allowed' : 'bg-rose-500 hover:bg-rose-600'} text-white font-medium rounded-md transition`}

                disabled={loading} // Disable button while sending
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
