export function CartForm() {
    return (
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold">Full Name</label>
          <input type="text" id="name" className="w-full px-4 py-2 border rounded-md" required />
        </div>
  
        <div>
          <label htmlFor="address" className="block text-sm font-semibold">Address</label>
          <input type="text" id="address" className="w-full px-4 py-2 border rounded-md" required />
        </div>
  
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold">Phone Number</label>
          <input type="tel" id="phone" className="w-full px-4 py-2 border rounded-md" required />
        </div>
  
        <div>
          <label htmlFor="notes" className="block text-sm font-semibold">Additional Notes (Optional)</label>
          <textarea id="notes" className="w-full px-4 py-2 border rounded-md" placeholder="Any specific instructions for delivery..." />
        </div>
  
        <button
          type="submit"
          className="w-full bg-[#596766] text-white py-2 rounded-lg mt-4 hover:bg-[#ABC1BB] transition-colors"
        >
          Proceed to Checkout
        </button>
      </form>
    );
  }
  