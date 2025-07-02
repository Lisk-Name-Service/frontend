import { useState } from "react"
import BatteryLoader  from "../components/ui/batteryloader"
import { Hammer, LayoutDashboard, LifeBuoy, Menu, Settings, X, Plus } from "lucide-react"

export const Auction = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <main className="bg-black border-t text-white flex h-screen relative pt-20">
		<BatteryLoader />
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`border-t fixed md:static top-20 md:top-0 left-0 h-[calc(100vh-5rem)] md:h-screen w-64 border-r  bg-black z-40 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          {[
            { label: "Dashboard", icon: LayoutDashboard },
            { label: "My Bids", icon: Hammer },
            { label: "Settings", icon: Settings },
            { label: "Support", icon: LifeBuoy },
          ].map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-800 w-full text-left"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex border-t flex-col h-[calc(100vh-5rem)]">
        <div className="border-b p-4 md:p-6 flex items-center justify-between md:justify-start shrink-0 bg-black">
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
		  <div className="flex w-full justify-between items-center">
			<h1 className="text-xl md:text-3xl font-bold flex items-center gap-2 ml-0 md:ml-4">
				Active Domain Auctions
			</h1>
			<Plus />
		  </div>
          
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="rounded-lg w-full">
            <table className="w-full table-auto text-left text-sm md:text-base">
              <thead className="bg-white text-black sticky top-0 z-10">
                <tr>
                  <th className="py-3 px-3 md:px-4">Domain Name</th>
                  <th className="py-3  md:px-4">Current Bid</th>
                  <th className="hidden md:block py-3 px-3 md:px-4">Time Remaining</th>
                  <th className="py-3 px-3 md:px-4"></th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 20 }).map((_, i) => (
                  <tr
                    key={i}
                    className="group border-t border-gray-800 hover:bg-white hover:text-black transition"
                  >
                    <td className="py-3 px-3 md:px-4 break-words">
                      example{i}.lisk
                    </td>
                    <td className="py-3 px-3 md:px-4">
                      {(10 + i * 10).toLocaleString()} LSK
                    </td>
                    <td className="hidden md:table-cell py-3 px-3 md:px-4">
                      {1 + (i % 5)}h {30 - (i % 30)}m
                    </td>
                    <td className="py-3 px-3 md:px-4">
                      <button 
					  disabled={true}
					  	className="water-drain-btn px-3 py-1 sm:px-6 sm:py-2 border group-hover:border-black border-white rounded-full bg-white font-medium text-xs sm:text-base"
						>
                        <span>Place Bid</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}
