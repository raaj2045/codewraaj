
export default function Footer() {
  return (
    <footer className="py-8 bg-gray-800 text-white border-t-4 border-pixel-green dark:border-pixel-purple">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <div className="font-pixel text-lg">
              <span className="text-pixel-green">Dev</span>
              <span className="text-pixel-purple">Quest</span>
            </div>
            <p className="font-pixel-body mt-1">© {new Date().getFullYear()} - All rights reserved</p>
          </div>
          
          <div className="flex space-x-2">
            {["pixel-red", "pixel-green", "pixel-blue", "pixel-yellow", "pixel-purple"].map((color, index) => (
              <div key={index} className={`w-4 h-4 bg-${color} border border-white`}></div>
            ))}
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="font-pixel-body text-sm">
            Made with <span className="text-pixel-red">♥</span> and a lot of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
