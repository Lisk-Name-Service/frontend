import { useNavigate } from "react-router-dom"

export default function BatteryLoader() {
	const navigate = useNavigate();


	const handleClick = async () => {
		navigate("/");
	}


  return (
    <div className="auction-overlay">
      <div className="battery-container">
        <h1 className="title text-xl">Under Construction</h1>
        <div className="battery mb-3">
          <div className="battery-body">
            {Array.from({ length: 10 }, (_, index) => (
              <div key={index} className="battery-bar" />
            ))}
          </div>
          <div className="battery-tip" />
        </div>
		<button
		onClick={handleClick}
		className="water-drain-btn px-3 py-1 sm:px-6 sm:py-2 border  border-white rounded-full bg-white font-medium text-xs sm:text-base"
		>
			Go To Home
		</button>
      </div>

      <style>
        {`
          .auction-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.85);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 50;
          }
          .title {
            color: white;
            text-transform: uppercase;
            margin-bottom: 1rem;
            letter-spacing: 2px;
          }
          .battery-container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .battery {
            position: relative;
            display: flex;
            align-items: center;
          }
          .battery-body {
            width: 200px;
            height: 50px;
            border: 3px solid white;
            border-radius: 4px;
            display: flex;
            align-items: center;
            padding: 4px;
            gap: 2px;
            background: black;
          }
          .battery-tip {
            width: 8px;
            height: 20px;
            background: white;
            border-radius: 0 2px 2px 0;
            margin-left: 2px;
          }
          .battery-bar {
            flex: 1;
            height: 100%;
            background: #ffffff;
            border-radius: 1px;
            opacity: 0;
            animation: barCycle 4s infinite;
          }
          .battery-bar:nth-child(1) { animation-delay: 0s; }
          .battery-bar:nth-child(2) { animation-delay: 0.3s; }
          .battery-bar:nth-child(3) { animation-delay: 0.6s; }
          .battery-bar:nth-child(4) { animation-delay: 0.9s; }
          .battery-bar:nth-child(5) { animation-delay: 1.2s; }
          .battery-bar:nth-child(6) { animation-delay: 1.5s; }
          .battery-bar:nth-child(7) { animation-delay: 1.8s; }
          .battery-bar:nth-child(8) { animation-delay: 2.1s; }
          .battery-bar:nth-child(9) { animation-delay: 2.4s; }
          .battery-bar:nth-child(10) { animation-delay: 2.7s; }

          @keyframes barCycle {
            0% {
              opacity: 0;
              transform: scaleY(0.3);
            }
            7.5% {
              opacity: 1;
              transform: scaleY(1);
            }
            75% {
              opacity: 1;
              transform: scaleY(1);
            }
            100% {
              opacity: 0;
              transform: scaleY(0.3);
            }
          }
          @media (max-width: 640px) {
            .battery-body {
              width: 160px;
              height: 40px;
            }
            .battery-tip {
              width: 6px;
              height: 16px;
            }
          }
        `}
      </style>
    </div>
  )
}
