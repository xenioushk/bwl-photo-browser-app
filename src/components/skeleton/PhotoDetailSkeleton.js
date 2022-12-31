import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function PhotoDetailSkeleton() {
  let PhotoDetailSkeletons = []
  for (var i = 0; i < 1; i++) {
    PhotoDetailSkeletons.push(
      <div className="container px-4 mx-auto items-center md:px-0 mt-5" key={100}>
        <nav className="app-breadcrumb shadow bg-Gray-100 space-y-2 border-1 border-bg-Gray-100 px-5 py-3 w-full mt-2 mb-4 rounded">
          <Skeleton />
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
          <div className="justify-center items-start py-0 ">
            <Skeleton height={400} borderRadius={4} inline={1} />
          </div>
          <div className="flex flex-col gap-4 px-1 mt-4 md:mt-0 md:px-6 md:col-span-1 xl:col-span-2">
            <h2 className="text-xl font-bold">
              <Skeleton width={300} height={10} borderRadius={0} inline={1} />
            </h2>
            <p>
              <Skeleton width={200} height={10} borderRadius={0} inline={1} />
            </p>

            <h3 className="text-xl font-bold border-bottom-1">Author Information:</h3>

            <Skeleton width={120} height={10} count={5} borderRadius={0} inline={1} />

            <h4 className="text-md font-bold border-bottom-1">Address:</h4>
            <Skeleton width={120} height={10} count={5} borderRadius={0} inline={1} />

            <h4 className="text-md font-bold border-bottom-1">Company:</h4>
            <Skeleton width={120} height={10} count={5} borderRadius={0} inline={1} />
          </div>
        </div>
      </div>
    )
  }
  return <>{PhotoDetailSkeletons}</>
}

export default PhotoDetailSkeleton
