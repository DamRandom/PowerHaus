interface CartSummaryProps {
    total: number;
  }
  
  export function CartSummary({ total }: CartSummaryProps) {
    return (
      <div className="bg-[#F3F4F6] p-4 rounded-lg mt-4">
        <h3 className="text-lg font-semibold">Summary</h3>
        <div className="flex justify-between mt-2">
          <span className="text-gray-700">Total</span>
          <span className="font-bold">${total.toFixed(2)}</span>
        </div>
      </div>
    );
  }
  