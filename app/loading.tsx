export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 8L50 28H30L40 8Z" fill="#E1A95F" />
            <path d="M40 72L30 52H50L40 72Z" fill="#E1A95F" />
            <path d="M8 40L28 30V50L8 40Z" fill="#006992" />
            <path d="M72 40L52 50V30L72 40Z" fill="#006992" />
            <circle cx="40" cy="40" r="10" fill="#DC143C" />
          </svg>
        </div>
      </div>
    </div>
  )
}

