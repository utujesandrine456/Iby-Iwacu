export default function CheckoutBillingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-10">
      <div className="container">
        {/* Progress Steps */}
        <div className="mb-8">
          <ol className="grid grid-cols-3 gap-4">
            <li className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 p-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center font-semibold">1</span>
              <div>
                <div className="text-sm font-semibold text-gray-700">Personal</div>
                <div className="text-xs text-gray-400">Shipping details</div>
              </div>
            </li>
            <li className="flex items-center gap-3 bg-white rounded-xl border border-[#AD5618]/20 p-4 shadow-sm">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#AD5618] to-[#91530A] text-white flex items-center justify-center font-semibold">2</span>
              <div>
                <div className="text-sm font-semibold text-gray-900">Billing</div>
                <div className="text-xs text-gray-500">Payment method</div>
              </div>
            </li>
            <li className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 p-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center font-semibold">3</span>
              <div>
                <div className="text-sm font-semibold text-gray-700">Confirmation</div>
                <div className="text-xs text-gray-400">Finish & track</div>
              </div>
            </li>
          </ol>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr,400px]">
          {/* Left: Billing Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-white/60 p-6 lg:p-8">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Payment Details</h1>
              <p className="text-gray-600">Choose your preferred payment method</p>
            </div>

            <form className="grid gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name On Card *</label>
                <input className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent" placeholder="Full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Number *</label>
                <input className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Valid Through *</label>
                  <input className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent" placeholder="MM/YY" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CVV *</label>
                  <input className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent" placeholder="123" />
                </div>
              </div>
              <label className="flex items-center gap-2 text-sm text-gray-700"><input type="checkbox" className="accent-[#AD5618]" /> Save as default payment method</label>

              <a href="/checkout/confirmation" className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#AD5618] to-[#91530A] px-6 py-3 text-white font-semibold shadow-lg hover:from-[#91530A] hover:to-[#7A4A09] transition-colors">
                Review & Confirm
              </a>
            </form>
          </div>

          {/* Right: Order Summary */}
          <aside className="bg-white rounded-2xl shadow-xl overflow-hidden border border-white/60">
            <div className="bg-[#AD5618] text-white px-6 py-4">
              <h2 className="text-lg font-semibold">Order Summary</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between text-gray-700"><span>Subtotal</span><span>$400</span></div>
              <div className="flex justify-between text-gray-700"><span>Shipping</span><span>$100</span></div>
              <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-semibold text-gray-900"><span>Total</span><span>$500</span></div>
              <div className="text-xs text-gray-500 pt-2">🔒 Secure checkout • Encrypted payment</div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}


