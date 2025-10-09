export default function CheckoutConfirmationPage() {
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
            <li className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 p-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center font-semibold">2</span>
              <div>
                <div className="text-sm font-semibold text-gray-700">Billing</div>
                <div className="text-xs text-gray-400">Payment method</div>
              </div>
            </li>
            <li className="flex items-center gap-3 bg-white rounded-xl border border-[#AD5618]/20 p-4 shadow-sm">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#AD5618] to-[#91530A] text-white flex items-center justify-center font-semibold">3</span>
              <div>
                <div className="text-sm font-semibold text-gray-900">Confirmation</div>
                <div className="text-xs text-gray-500">Finish & track</div>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-white/60 p-8 text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center mb-4">
            ✓
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed</h1>
          <p className="text-gray-600 mb-6">Your order has been confirmed and is on the way. You can track your order status below.</p>

          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
            <input className="rounded-xl border border-gray-300 px-4 py-3" placeholder="Order ID" defaultValue="UWE13ESDS" />
            <input className="rounded-xl border border-gray-300 px-4 py-3" placeholder="Billing Email" defaultValue="max.luca@gmail.com" />
          </div>
          <div className="mt-6">
            <button className="rounded-xl bg-gradient-to-r from-[#AD5618] to-[#91530A] px-6 py-3 text-white font-semibold shadow-lg hover:from-[#91530A] hover:to-[#7A4A09] transition-colors">Track Your Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}


