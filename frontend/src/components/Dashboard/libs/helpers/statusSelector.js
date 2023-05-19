export function getOrderStatus(status) {
  switch (status) {
    case 'pending':
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-100">
          {status.replaceAll('_', ' ').toLowerCase()}
        </span>
      )
    case 'confirmed':
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-orange-600 bg-orange-100">
          {status.replaceAll('_', ' ').toLowerCase()}
        </span>
      )
    case 'dispatched':
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-teal-600 bg-teal-100">
          {status.replaceAll('_', ' ').toLowerCase()}
        </span>
      )
    case 'OUT_FOR_DELIVERY':
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-yellow-600 bg-yellow-100">
          {status.replaceAll('_', ' ').toLowerCase()}
        </span>
      )
    case 'delivered':
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-green-600 bg-green-100">
          {status.replaceAll('_', ' ').toLowerCase()}
        </span>
      )
    default:
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
          {status.replaceAll('_', ' ').toLowerCase()}
        </span>
      )
  }
}
