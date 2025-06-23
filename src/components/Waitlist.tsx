import React, { useRef, useState } from "react"
import { toast } from "react-toastify"
import { X, Check } from "lucide-react"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

const Waitlist: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [emailValue, setEmailValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = (email: string): boolean => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
	};

	
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		 
		if (!isValidEmail(emailValue)) {
			toast.error("Please enter a valid email address.", {
				icon: <X className="text-black" />,
			});
			return;
		}

		setIsSubmitting(true);

		try {
			const response = await fetch("http://localhost:4000/waitlist", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email: emailValue }),
			});

			if (!response.ok) {
				throw new Error("Server error");
			}

			const data = await response.json();

			toast.success(data.message, {
				icon: <Check className="text-black" />,
			});

			setEmailValue("");
		} catch (error) {
			toast.error("Submission failed. Please try again later.", {
				icon: <X className="text-black" />,
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative bg-black text-white p-8 rounded-xl border border-white max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-400 text-xl"
        >
          <X />
        </button>

        <h1 className="text-3xl font-bold uppercase tracking-wider mb-3 animate-fadeIn">
          Join the Lisk Name Service Waitlist
        </h1>
        <p className="text-gray-300 text-base mb-5 animate-fadeIn delay-300">
          Lisk Name Service enhances your on-chain journey. Join the waitlist for early access!
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
			ref={inputRef}
			type="email"
			value={emailValue}
			onChange={(e) => setEmailValue(e.target.value)}
			placeholder="Enter your Email"
			className="w-full px-6 py-4 bg-transparent border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors text-lg responsive-placeholder"
			/>
          <button
            type="submit"
			disabled={isSubmitting}
            className="water-drain-btn px-3 py-1 sm:px-6 sm:py-2 border border-white rounded-full bg-white font-medium text-xs sm:text-base text-black hover:bg-gray-200 transition"
          >
            <span>{isSubmitting ? "Submitting..." : "Submit"}</span>
          </button>
        </form>

        <p className="text-xs text-white mt-4">
          Your data is secure with us. We’ll only use your email for Lisk Name Server updates.{' '}
          <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  )
}

export default Waitlist;
