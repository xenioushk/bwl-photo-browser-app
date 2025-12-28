import React from "react"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error("Error caught by ErrorBoundary:", error)
    console.error("Component stack:", errorInfo.componentStack)

    // In production, send to error tracking service (Sentry, LogRocket, etc.)
    // Example: logErrorToService(error, errorInfo)

    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    })
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI provided by parent
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="mb-4">
              <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h1>

            <p className="text-gray-600 mb-6">We encountered an unexpected error. Don't worry, your data is safe.</p>

            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="mb-6 text-left bg-red-50 p-4 rounded border border-red-200">
                <summary className="cursor-pointer font-semibold text-red-800 mb-2">Error Details (Development Only)</summary>
                <p className="text-sm text-red-700 mb-2 font-mono">{this.state.error.toString()}</p>
                {this.state.errorInfo && <pre className="text-xs text-red-600 overflow-auto">{this.state.errorInfo.componentStack}</pre>}
              </details>
            )}

            <div className="flex gap-4 justify-center">
              <button onClick={this.handleReset} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Try Again
              </button>

              <button onClick={() => (window.location.href = "/")} className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">
                Go Home
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
