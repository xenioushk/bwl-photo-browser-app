/**
 * Core type definitions for the Photo Browser Application
 */

// ============================================================================
// API Response Types
// ============================================================================

/**
 * Photo entity from JSONPlaceholder API
 */
export interface Photo {
  id: number
  albumId: number
  title: string
  url: string
  thumbnailUrl: string
}

/**
 * Album entity from JSONPlaceholder API
 */
export interface Album {
  id: number
  userId: number
  title: string
}

/**
 * User entity from JSONPlaceholder API
 */
export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

/**
 * Address information for User
 */
export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

/**
 * Geographic coordinates
 */
export interface Geo {
  lat: string
  lng: string
}

/**
 * Company information for User
 */
export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

// ============================================================================
// API Query Response Types
// ============================================================================

/**
 * Response wrapper for photo query
 */
export interface PhotoResponse {
  data: Photo
}

/**
 * Response wrapper for album query
 */
export interface AlbumResponse {
  data: Album
}

/**
 * Response wrapper for user query
 */
export interface UserResponse {
  data: User
}

// ============================================================================
// Component Props Types
// ============================================================================

/**
 * Props for PhotoCard component
 */
export interface PhotoCardProps {
  photo: Photo
  single: boolean
  albumBadge: boolean
}

/**
 * Props for Photos component
 */
export interface PhotosProps {
  albumId?: number
  albumTitle?: string
}

/**
 * Props for Button component
 */
export interface ButtonProps {
  btnText?: string
  onClick?: () => void
  disabled?: boolean
}

/**
 * Props for Breadcrumb component
 */
export interface BreadcrumbProps {
  albumCategory?: string
  title?: string
}

/**
 * Props for ErrorBoundary component
 */
export interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

/**
 * State for ErrorBoundary component
 */
export interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: React.ErrorInfo | null
}

/**
 * Props for Page component
 */
export interface PageProps {
  title: string
  children: React.ReactNode
}

/**
 * Props for skeleton components
 */
export interface SkeletonProps {
  count: number
}

// ============================================================================
// Utility Types
// ============================================================================

/**
 * Pagination parameters
 */
export interface PaginationParams {
  page: number
  limit: number
}

/**
 * API error type
 */
export interface ApiError {
  message: string
  status?: number
  code?: string
}
