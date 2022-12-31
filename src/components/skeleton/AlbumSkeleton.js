import React from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function AlbumSkeleton({ count }) {
  let AlbumSkeletons = []
  for (var i = 0; i < count; i++) {
    AlbumSkeletons.push(
      <div className="flex flex-col justify-center text-center border bg-white rounded shadow-md relative py-4 px-3 " key={i}>
        <span className="m-auto md:absolute md:top-0 md:right-1">
          <Skeleton width={80} height={25} />
        </span>
        <h2 className="text-center mb-3 md:mt-8 ">
          <Skeleton count={2} borderRadius={0} inline={1} />
          <Skeleton width={160} borderRadius={0} />
        </h2>
        <Skeleton width={120} height={35} />
      </div>
    )
  }
  return <>{AlbumSkeletons}</>
}

export default AlbumSkeleton
