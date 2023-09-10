import React from "react";

function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/freelancerrtushar@gmail.com"
      enctype="multipart/form-data"
      method="POST"
      className="mx-5"
    >
      <h2 className="text-gray-900 text-[40px] mb-1 font-medium title-font">
        Have any queries?
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Leave us an email and we will contact you back!
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
        required
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
        required
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="comments" className="leading-7 text-sm text-gray-600">
          Comments
        </label>
        <textarea
          id="comments"
          name="comments"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
      <div className="relative mb-4">
         <input type="file" name="attachment" accept="image/png, image/jpeg"></input>

      </div>
      
      <button
        type="submit"
        className="text-white bg-primary w-full border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Send
      </button>
    </form>
  );
}

export default ContactForm;
