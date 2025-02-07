interface CartSummaryProps {
  total: number;
}

export function CartSummary({ total }: CartSummaryProps) {
  return (
    <div className="bg-[#F3F4F6] p-6 rounded-lg mt-6 shadow-md">
      <h3 className="text-lg font-semibold text-[#262520]">Summary</h3>
      <div className="flex justify-between mt-4">
        <span className="text-[#595959]">Total</span>
        <span className="font-bold text-[#262520]">${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
