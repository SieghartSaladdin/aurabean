"use client";

import { MessageCircle, X, Send } from "lucide-react";
import { useState } from "react";

export function ChatPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-orange-600 text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 sm:w-96">
          <div className="bg-orange-600 p-4 text-white">
            <h3 className="font-semibold">Chat Support</h3>
            <p className="text-xs opacity-90">We typically reply in a few minutes</p>
          </div>
          
          <div className="h-80 overflow-y-auto bg-gray-50 p-4">
            <div className="mb-4 flex flex-col gap-2">
              <div className="self-start rounded-2xl rounded-tl-none bg-white p-3 text-sm text-gray-700 shadow-sm ring-1 ring-black/5">
                Hello! 👋 How can we help you today?
              </div>
            </div>
          </div>

          <div className="border-t bg-white p-3">
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-black"
                autoFocus
              />
              <button
                type="submit"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white transition-colors hover:bg-orange-700"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
