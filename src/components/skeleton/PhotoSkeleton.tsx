import React from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

interface PhotoSkeletonProps {
  count: number
}

const PhotoSkeleton: React.FC<PhotoSkeletonProps> = ({ count }) => {
  const PhotoSkeletons = []
  for (let i = 0; i < count; i++) {
    PhotoSkeletons.push(
      <div className="flex flex-col justify-item-start bg-gray rounded shadow-xl border relative " key={i}>
        <span className="block w-full self-start relative -top-1">
          <Skeleton height={250} borderRadius={4} inline />
        </span>
        <span className="absolute top-0 right-0">
          <Skeleton width={80} height={25} />
        </span>
        <span className="p-3">
          <Skeleton count={2} borderRadius={0} inline />
        </span>
      </div>
    )
  }
  return <>{PhotoSkeletons}</>
}

export default PhotoSkeleton
