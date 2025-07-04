import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useContract } from "../context/LiskNameService"
import { useAccount } from "wagmi"
import { getPrice } from "../context/service_utils"
import { toast } from "react-toastify"
import { X, Check } from "lucide-react"


interface NameModalProps {
  name: string
  available: boolean
  onClose: () => void
}

const NameModal: React.FC<NameModalProps> = ({ name, available, onClose }) => {
  const { contract, registerName, releaseName } = useContract()
  const { address } = useAccount()
  const [price, setPrice] = useState<string>("")
  const [owner, setOwner] = useState<string>("")
  const [expires, setExpires] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate();

  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [onClose])


  useEffect(() => {
    const fetchDetails = async () => {
      setError(null)
      try {
        setLoading(true)
        const fetchPrice = await getPrice(name, setLoading, setError);
        setPrice(fetchPrice)
        if (!available && contract) {
          const info = await contract.names(name)
          setOwner(info.owner)
          setExpires(Number(info.expires))
        }
      } catch (e: any) {
        toast.error("Could not fetch details", {
			icon: <X className="text-black"/>,
		})
      } finally {
        setLoading(false)
      }
    }
    fetchDetails()
  }, [contract, name, available])


  const handleBuy = async () => {
    if (!contract) return
    setLoading(true)
    setError(null)
    try {
		await registerName(name)

		const info = await contract.names(name)
		setOwner(info.owner)
		setExpires(Number(info.expires))

		const expiryDate = new Date(Number(info.expires) * 1000).toLocaleString()

		toast.success(`${name}.lisk registered successfully.\nTo expire on ${expiryDate}`, {
			icon: <Check className="text-black" />
		})
		onClose()
    } catch (e: any) {
      toast.error("Failed to register",
		{
			icon: <X className="text-black"/>,
		}
	  )
    } finally {
      setLoading(false)
    }
  }

  const handleRelease = async () => {
	if (!contract || !address) return;
		setLoading(true)
		setError(null)

		try {
			await releaseName(name)
			toast.success(`${name}.lisk has been released`, {
			icon: <Check className="text-black" />,
			})
			onClose() // close modal
		} catch (e: any) {
			toast.error("Failed to release the name", {
			icon: <X className="text-black" />,
			})
		} finally {
			setLoading(false)
		}
	}

  const handleAuction = async () => {
	navigate('/auction');
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40">
      <div 
	  ref={modalRef}
	  className="bg-white rounded-2xl shadow-2xl p-6 min-w-[350px] text-black relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
          onClick={onClose}
          aria-label="Close"
        >
          <X />
        </button>
        <h2 className="text-xl font-bold mb-2">{name}.lisk</h2>
        {loading ? (
          <div className="text-gray-500">Loading...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : available ? (
          <>
            <div className="mb-4">
              <span className="font-semibold">Price:</span> {price}
            </div>
            <button
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleBuy}
              disabled={loading || !address}
            >
              {loading ? "Processing..." : "Buy"}
            </button>
			{!address && (
			<div className="text-sm text-red-500 mt-2 text-center">
				Please connect your wallet to continue.
			</div>
			)}
          </>
        ) : (
          <>
            <div className="mb-2">
              <span className="font-semibold">Owner:</span> {owner}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Expires:</span>{" "}
              {expires ? new Date(expires * 1000).toLocaleString() : "Unknown"}
            </div>
            {address?.toLowerCase() === owner?.toLowerCase() ? (
              <div className="flex gap-2">
                <button
                  className="flex-1 bg-black text-white py-2 rounded hover:bg-gray-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleAuction}
				  disabled={!address}
                >
                  Auction Name
                </button>
                <button
                  className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleRelease}
				  disabled={!address}
                >
                  Release Name
                </button>
              </div>
            ) : (
              <div className="text-gray-500">This name is taken.</div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default NameModal
