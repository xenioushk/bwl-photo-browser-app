import React from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function PhotoSkeleton({ count }) {
  let PhotoSkeletons = []
  for (var i = 0; i < count; i++) {
    PhotoSkeletons.push(
      <div className="flex flex-col justify-item-start bg-gray rounded shadow-xl border relative " key={i}>
        <span className="block w-full self-start relative -top-1">
          <Skeleton height={250} borderRadius={4} inline={1} />
        </span>
        <span className="absolute top-0 right-0">
          <Skeleton width={80} height={25} />
        </span>
        <span className="p-3">
          <Skeleton count={2} borderRadius={0} inline={1} />
        </span>
      </div>
    )
  }
  return <>{PhotoSkeletons}</>
}

export default PhotoSkeleton
